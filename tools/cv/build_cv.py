"""Render the HTML CVs to PDF using headless Chromium via Playwright.

Three artifacts from two sources:

  1. PUBLIC (en)  cv.html    -> ../../assets/pdf/cv.pdf
     Built as-is. No phone / WeChat: this one is published on the homepage and
     indexed by search engines.
  2. APPLY (en)   cv.html    -> apply_out from the private config
     Same document with contact details injected at the <!--APPLY_CONTACT-->
     marker.
  3. APPLY (zh)   cv_zh.html -> apply_out_zh from the private config
     The Chinese CV, for mainland HR channels that ask for one. Always an apply
     artifact (never published), so it is skipped entirely without the config.

The contact details live OUTSIDE this repo in the sibling private dir
(../_homepage-rebuild-private/cv_contact_private.json), so no phone number ever
enters this public repository or its history:

  { "phone_display": "+86 ...", "phone_tel": "+86...", "wechat": "...",
    "apply_out": "C:/.../CV_YanjunChen.pdf",
    "apply_out_zh": "C:/.../CV_陈彦筠_中文.pdf" }
"""
import json
import pathlib
import sys

from playwright.sync_api import sync_playwright

# apply_out paths may contain CJK; a cp1252 console must not crash the build.
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = pathlib.Path(__file__).parent.resolve()
SRC_EN = ROOT / "cv.html"
SRC_ZH = ROOT / "cv_zh.html"
OUT_PUBLIC = ROOT.parent.parent / "assets" / "pdf" / "cv.pdf"
PNG = ROOT / "cv-preview.png"
PRIVATE_CFG = ROOT.parent.parent.parent / "_homepage-rebuild-private" / "cv_contact_private.json"
APPLY_MARKER = "<!--APPLY_CONTACT-->"

# Webfonts that must be active before the page is printed. Chromium can reach
# networkidle (and even resolve document.fonts.ready) before a single font
# request has started, which is how every CV built before 2026-07-03 silently
# shipped Segoe UI instead of Inter.
FONT_PROBES = {
    "en": ['400 16px "Inter"', '600 24px "Newsreader"', '600 24px "Noto Serif SC"'],
    "zh": [
        '400 16px "Inter"',
        '600 24px "Newsreader"',
        '400 16px "Noto Sans SC"',
        '600 16px "Noto Sans SC"',
        '600 24px "Noto Serif SC"',
    ],
}


def render(page, src: pathlib.Path, out: pathlib.Path, png: pathlib.Path | None, lang: str):
    probes = FONT_PROBES[lang]
    page.goto(src.as_uri(), wait_until="networkidle")
    page.evaluate(
        """async (wants) => {
            await Promise.all(wants.map(w => document.fonts.load(w)));
            await document.fonts.ready;
        }""",
        probes,
    )
    for probe in probes:
        page.wait_for_function(f"document.fonts.check({probe!r})", timeout=15000)
    page.wait_for_timeout(300)
    page.emulate_media(media="print")
    out.parent.mkdir(parents=True, exist_ok=True)
    page.pdf(
        path=str(out),
        format="A4",
        margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
        print_background=True,
        prefer_css_page_size=True,
    )
    if png is not None:
        page.set_viewport_size({"width": 794, "height": 1123})  # A4 @ 96dpi
        page.screenshot(path=str(png), full_page=True)


def contact_snippet(cfg: dict, lang: str) -> str:
    phone = cfg["phone_display"].replace(" ", "\u00a0")
    label = "\u5fae\u4fe1" if lang == "zh" else "WeChat"  # 微信
    return (
        f'<a href="tel:{cfg["phone_tel"]}">{phone}</a>'
        '<span class="sep">\u00b7</span>'
        f'<span class="wechat">{label}\u00a0{cfg["wechat"]}</span>'
        '<span class="sep">\u00b7</span>'
    )


def build_apply(page, src: pathlib.Path, out: pathlib.Path, cfg: dict, lang: str):
    """Inject contact details into a temporary copy, render, then delete it."""
    tmp = src.with_name(f"{src.stem}_apply.html")
    html = src.read_text(encoding="utf-8")
    if APPLY_MARKER not in html:
        raise SystemExit(f"APPLY_CONTACT marker missing from {src.name}")
    tmp.write_text(html.replace(APPLY_MARKER, contact_snippet(cfg, lang)), encoding="utf-8")
    try:
        render(page, tmp, out, None, lang)
        print(f"Wrote {out} ({out.stat().st_size:,} bytes)")
    finally:
        tmp.unlink(missing_ok=True)


def build():
    if not SRC_EN.exists():
        print(f"Source missing: {SRC_EN}", file=sys.stderr)
        return 1
    cfg = json.loads(PRIVATE_CFG.read_text(encoding="utf-8")) if PRIVATE_CFG.exists() else None

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_context().new_page()

        render(page, SRC_EN, OUT_PUBLIC, PNG, "en")
        print(f"Wrote {OUT_PUBLIC} ({OUT_PUBLIC.stat().st_size:,} bytes)")

        if cfg is None:
            print(f"No private config at {PRIVATE_CFG}; apply variants skipped")
        else:
            build_apply(page, SRC_EN, pathlib.Path(cfg["apply_out"]), cfg, "en")
            if SRC_ZH.exists() and cfg.get("apply_out_zh"):
                build_apply(page, SRC_ZH, pathlib.Path(cfg["apply_out_zh"]), cfg, "zh")

        browser.close()
    return 0


if __name__ == "__main__":
    code = build()
    print(f"Preview: {PNG}")
    sys.exit(code)
