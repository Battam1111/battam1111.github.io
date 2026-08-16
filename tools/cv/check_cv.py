"""Assertion gate for the built CV PDFs. Run after build_cv.py; nonzero exit on
any failure, so it can sit in a && chain before git push.

Checks both variants when the apply PDF exists (its path comes from the same
private config the build reads). Newline-safe: text-layer substring checks must
never span a rendered line break, so anchors are single words or short spans.
"""
import json
import pathlib
import sys

import fitz
from pdfminer.high_level import extract_text
from pypdf import PdfReader

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = pathlib.Path(__file__).parent.resolve()
PUBLIC = ROOT.parent.parent / "assets" / "pdf" / "cv.pdf"
PRIVATE_CFG = ROOT.parent.parent.parent / "_homepage-rebuild-private" / "cv_contact_private.json"

PHONE_MARK = "1540"          # fragment of the phone number
WECHAT_MARK = "xzqm13143609845"


def audit(path: pathlib.Path, expect_phone: bool) -> dict:
    t = extract_text(str(path))
    t_pypdf = "\n".join((pg.extract_text() or "") for pg in PdfReader(str(path)).pages)
    doc = fitz.open(str(path))
    fonts = [f for pg in doc for f in pg.get_fonts(full=True)]
    page1 = doc[0].get_text()
    page2 = doc[1].get_text() if doc.page_count > 1 else ""
    flat = t.replace("‑", "-").replace("‐", "-")
    checks = {
        "pua_zero": sum(1 for c in t + t_pypdf if 0xE000 <= ord(c) <= 0xF8FF) == 0,
        "type3_zero": sum(1 for f in fonts if f[2] == "Type3") == 0,
        "fonts_known": all(
            any(k in f[3] for k in ("Inter", "Newsreader", "NotoSerifSC")) for f in fonts
        ),
        "grayscale": all(
            ((s["color"] >> 16 & 255) == (s["color"] >> 8 & 255) == (s["color"] & 255))
            for pg in doc
            for b in pg.get_text("dict")["blocks"]
            for l in b.get("lines", [])
            for s in l["spans"]
        ),
        "pages_2": doc.page_count == 2,
        # Paper integrity: 3 first-author arXiv ids + 2 Open Source mentions.
        "arxiv_5": t.count("arXiv:") == 5,
        "zh_name": "陈彦筠" in t,
        "first_author_stub": "One further first-author" in t,
        "coauth_accepted": all(k in t for k in ("PricingLogic", "EMNLP 2025", "NAACL 2025")),
        "coauth_stub_countfree": "Additional co" in flat and "Six further" not in flat,
        # Layout: page 1 must close with the full Open Source section, page 2
        # must open on Technical Skills. Single-word anchors only.
        "myco_on_p1": "Myco" in page1,
        "skills_on_p2": "Post-Training" in page2.replace("‑", "-") or "Post‑Training" in page2,
        # Header hygiene.
        "orcid_absent": "0009-0001" not in t,
        "phone_matches_variant": (PHONE_MARK in t) == expect_phone,
        "wechat_matches_variant": (WECHAT_MARK in t) == expect_phone,
    }
    doc.close()
    return checks


def main() -> int:
    targets = [(PUBLIC, False)]
    if PRIVATE_CFG.exists():
        cfg = json.loads(PRIVATE_CFG.read_text(encoding="utf-8"))
        targets.append((pathlib.Path(cfg["apply_out"]), True))
    ok = True
    for path, expect_phone in targets:
        label = "APPLY" if expect_phone else "PUBLIC"
        if not path.exists():
            print(f"{label}: MISSING {path}")
            ok = False
            continue
        checks = audit(path, expect_phone)
        failed = {k: v for k, v in checks.items() if not v}
        print(f"{label}: {'PASS' if not failed else 'FAIL ' + str(sorted(failed))}")
        ok = ok and not failed
    print("CV CHECK:", "ALL PASS" if ok else "FAILED")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
