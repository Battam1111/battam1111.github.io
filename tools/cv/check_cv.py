"""Assertion gate for the built CV PDFs. Run after build_cv.py; nonzero exit on
any failure, so it can sit in a && chain before git push.

Covers all three artifacts: the public English CV, the English apply variant,
and the Chinese apply variant (the latter two only when the private config that
names their paths is present).

Newline-safe: text-layer substring checks must never span a rendered line break,
so anchors are single words or short spans.
"""
import json
import pathlib
import re
import subprocess
import sys

import fitz
from fontTools.ttLib import TTFont
from pdfminer.high_level import extract_text
from pypdf import PdfReader

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = pathlib.Path(__file__).parent.resolve()
REPO = ROOT.parent.parent
FONT_DIR = ROOT.parent / "fonts"
PUBLIC = REPO / "assets" / "pdf" / "cv.pdf"
HTML_ZH = ROOT / "cv_zh.html"
PRIVATE_CFG = REPO.parent / "_homepage-rebuild-private" / "cv_contact_private.json"

# Contact values come ONLY from the private config; hardcoding either of them
# here would put them straight into the public repo, which is exactly what this
# gate exists to prevent (and exactly the mistake a previous revision made).
_CFG = json.loads(PRIVATE_CFG.read_text(encoding="utf-8")) if PRIVATE_CFG.exists() else {}
PHONE_MARK = _CFG.get("phone_tel", "")[-8:-4] if _CFG.get("phone_tel") else None
WECHAT_MARK = _CFG.get("wechat") or None
ZH_SUBSETS = [
    "NotoSansSC-Regular-zh.woff2",
    "NotoSansSC-Medium-zh.woff2",
    "NotoSansSC-SemiBold-zh.woff2",
    "NotoSerifSC-SemiBold-zh.woff2",
]
# Text-ish extensions worth scanning for leaked contact strings. Binaries and
# sourcemaps are skipped: their digit runs are noise, not contact details.
SCAN_EXTS = {".py", ".html", ".css", ".md", ".yml", ".yaml", ".json", ".txt", ".js", ".ts"}


def common_checks(doc, text, text_pypdf, known_font_keys) -> dict:
    fonts = [f for pg in doc for f in pg.get_fonts(full=True)]
    return {
        "pua_zero": sum(1 for c in text + text_pypdf if 0xE000 <= ord(c) <= 0xF8FF) == 0,
        "type3_zero": sum(1 for f in fonts if f[2] == "Type3") == 0,
        "fonts_known": all(any(k in f[3] for k in known_font_keys) for f in fonts),
        "grayscale": all(
            ((s["color"] >> 16 & 255) == (s["color"] >> 8 & 255) == (s["color"] & 255))
            for pg in doc
            for b in pg.get_text("dict")["blocks"]
            for l in b.get("lines", [])
            for s in l["spans"]
        ),
        "pages_2": doc.page_count == 2,
    }


def audit_en(path: pathlib.Path, expect_phone: bool) -> dict:
    text = extract_text(str(path))
    text_pypdf = "\n".join((pg.extract_text() or "") for pg in PdfReader(str(path)).pages)
    doc = fitz.open(str(path))
    page1, page2 = doc[0].get_text(), doc[1].get_text() if doc.page_count > 1 else ""
    flat = text.replace("‑", "-").replace("‐", "-")
    checks = common_checks(doc, text, text_pypdf, ("Inter", "Newsreader", "NotoSerifSC"))
    checks.update({
        # Paper integrity: 3 first-author arXiv ids + 2 Open Source mentions.
        "arxiv_5": text.count("arXiv:") == 5,
        "zh_name": "陈彦筠" in text,
        "first_author_stub": "One further first-author" in text,
        "coauth_accepted": all(k in text for k in ("PricingLogic", "EMNLP 2025", "NAACL 2025")),
        "coauth_stub_countfree": "Additional co" in flat and "Six further" not in flat,
        # Layout: page 1 closes with Open Source, page 2 opens on Technical Skills.
        "myco_on_p1": "Myco" in page1,
        "skills_on_p2": "Post-Training" in page2.replace("‑", "-") or "Post‑Training" in page2,
        "orcid_absent": "0009-0001" not in text,
    })
    if PHONE_MARK and WECHAT_MARK:
        checks["phone_matches_variant"] = (PHONE_MARK in text) == expect_phone
        checks["wechat_matches_variant"] = (WECHAT_MARK in text) == expect_phone
    doc.close()
    return checks


def audit_zh(path: pathlib.Path) -> dict:
    text = extract_text(str(path))
    text_pypdf = "\n".join((pg.extract_text() or "") for pg in PdfReader(str(path)).pages)
    doc = fitz.open(str(path))
    page1, page2 = doc[0].get_text(), doc[1].get_text() if doc.page_count > 1 else ""
    checks = common_checks(doc, text, text_pypdf, ("Inter", "Newsreader", "NotoSansSC", "NotoSerifSC"))
    checks.update({
        # The CJK text layer must be extractable, or ATS parsers and copy/paste
        # get nothing out of a document that looks fine on screen.
        "cjk_extractable": all(k in text for k in ("陈彦筠", "求职意向", "教育背景", "项目经历", "专业技能")),
        "internship_section": "实习经历" in text and "东方理工" in text,
        "engineering_detail": "OpenRLHF" in text and "A100" in text,
        "award": "强国杯" in text,
        "first_author_stub": "另有一篇第一作者论文投稿中" in text.replace("\n", ""),
        # Layout: 项目经历 opens page 2, so page 1 carries the paper record whole.
        "projects_on_p2": "项目经历" in page2,
        "papers_on_p1": "科研成果" in page1,
    })
    if PHONE_MARK and WECHAT_MARK:
        # Apply-only artifact: contact details are always present.
        checks["phone_present"] = PHONE_MARK in text
        checks["wechat_present"] = WECHAT_MARK in text
    doc.close()
    return checks


def check_zh_font_coverage() -> dict:
    """Every non-ASCII character in cv_zh.html must exist in every CJK subset.

    Guards the one silent failure mode of the subset pipeline: editing the HTML
    without re-running make_zh_fonts.py renders the new characters as tofu (or
    as a system-font fallback that also breaks the font assertion).
    """
    html = HTML_ZH.read_text(encoding="utf-8")
    html = re.sub(r"<(style|script)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    wanted = {ord(c) for c in re.sub(r"<[^>]+>", " ", html) if ord(c) > 0x7F}
    result = {}
    for name in ZH_SUBSETS:
        path = FONT_DIR / name
        if not path.exists():
            result[f"font_{name}"] = False
            continue
        cmap = set(TTFont(str(path)).getBestCmap())
        result[f"font_{name}"] = wanted.issubset(cmap)
    return result


def check_repo_no_contact() -> tuple:
    """No contact fragment may sit in ANY tracked text file of this repo.

    This is the gate that makes "forgot to run the grep" impossible. An earlier
    revision hardcoded a phone fragment and the WeChat id here as assertion
    markers and pushed them to a public repo; nothing mechanical caught it.
    Markers are derived from the private config (never written down here), and
    the report names file:line only, never the matched value, so a failure can
    be pasted into a terminal or CI log without leaking what it found.

    Returns (status, hits) with status in {"PASS", "FAIL", "SKIP"}.
    """
    phone = _CFG.get("phone_tel") or ""
    markers = [("phone_full", phone), ("phone_fragment", phone[-8:-4] if phone else "")]
    markers.append(("wechat", _CFG.get("wechat") or ""))
    markers = [(kind, value) for kind, value in markers if value]
    if not markers:
        return "SKIP", []

    try:
        listing = subprocess.run(
            ["git", "ls-files", "-z"],
            cwd=str(REPO), check=True, capture_output=True, text=True, encoding="utf-8",
        ).stdout
    except (OSError, subprocess.CalledProcessError) as exc:
        # Cannot enumerate the repo, so cannot make the guarantee. Never pass silently.
        return "FAIL", [f"<git ls-files failed: {type(exc).__name__}>"]

    hits = []
    for rel in listing.split("\0"):
        if not rel or pathlib.Path(rel).suffix.lower() not in SCAN_EXTS:
            continue
        try:
            body = (REPO / rel).read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for lineno, line in enumerate(body.splitlines(), 1):
            for kind, value in markers:
                if value in line:
                    hits.append(f"{rel}:{lineno}:{kind}")
    return ("FAIL", hits) if hits else ("PASS", [])


def main() -> int:
    cfg = json.loads(PRIVATE_CFG.read_text(encoding="utf-8")) if PRIVATE_CFG.exists() else {}
    jobs = [("PUBLIC-en", PUBLIC, lambda p: audit_en(p, False))]
    if cfg.get("apply_out"):
        jobs.append(("APPLY-en", pathlib.Path(cfg["apply_out"]), lambda p: audit_en(p, True)))
    if cfg.get("apply_out_zh"):
        jobs.append(("APPLY-zh", pathlib.Path(cfg["apply_out_zh"]), audit_zh))

    ok = True
    for label, path, fn in jobs:
        if not path.exists():
            print(f"{label}: MISSING {path}")
            ok = False
            continue
        failed = {k: v for k, v in fn(path).items() if not v}
        print(f"{label}: {'PASS' if not failed else 'FAIL ' + str(sorted(failed))}")
        ok = ok and not failed

    if HTML_ZH.exists():
        failed = {k for k, v in check_zh_font_coverage().items() if not v}
        print(f"ZH-FONTS: {'PASS' if not failed else 'FAIL ' + str(sorted(failed)) + ' (re-run make_zh_fonts.py)'}")
        ok = ok and not failed

    status, hits = check_repo_no_contact()
    if status == "SKIP":
        print("REPO-CONTACT: SKIP (private config absent; no markers to scan for)")
    else:
        print(f"REPO-CONTACT: {status}" + (f" {sorted(hits)}" if hits else ""))
        ok = ok and status == "PASS"

    print("CV CHECK:", "ALL PASS" if ok else "FAILED")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
