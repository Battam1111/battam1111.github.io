"""Render the HTML CV to PDF using headless Chromium via Playwright.

Two variants from one source (tools/cv/cv.html):
  1. PUBLIC  -> ../../assets/pdf/cv.pdf
     Built from cv.html as-is. No phone / WeChat: this artifact is published on
     the homepage and indexed by search engines.
  2. APPLY   -> path given by the private config (job-application attachment)
     Same document with contact details injected at the <!--APPLY_CONTACT-->
     marker. The details live OUTSIDE the repo in the sibling private dir
     (../_homepage-rebuild-private/cv_contact_private.json), so no phone number
     ever enters this public repository or its history. If the config is absent
     (e.g. a fresh clone), the apply variant is silently skipped.

cv_contact_private.json shape:
  { "phone_display": "+86 158 ...", "phone_tel": "+86158...",
    "wechat": "...", "apply_out": "C:/.../CV_YanjunChen.pdf" }
"""
import json
import pathlib
import sys

from playwright.sync_api import sync_playwright

# The apply_out path may contain CJK characters; a cp1252 console must not be
# able to crash the build's status prints.
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = pathlib.Path(__file__).parent.resolve()
SRC = ROOT / "cv.html"
OUT = ROOT.parent.parent / "assets" / "pdf" / "cv.pdf"
PNG = ROOT / "cv-preview.png"
APPLY_SRC = ROOT / "cv_apply.html"  # transient, gitignored, deleted after build
PRIVATE_CFG = ROOT.parent.parent.parent / "_homepage-rebuild-private" / "cv_contact_private.json"
APPLY_MARKER = "<!--APPLY_CONTACT-->"

if not SRC.exists():
    print(f"Source missing: {SRC}", file=sys.stderr); sys.exit(1)
OUT.parent.mkdir(parents=True, exist_ok=True)


def render(page, src: pathlib.Path, out: pathlib.Path, png: pathlib.Path | None):
    page.goto(src.as_uri(), wait_until="networkidle")
    # Force the webfonts to actually download and activate. Without the explicit
    # FontFaceSet.load() calls, headless Chromium can reach networkidle and even
    # resolve document.fonts.ready BEFORE any Inter request has started, and the
    # PDF silently embeds Segoe UI (this was a latent bug from day one: every CV
    # built before 2026-07-03 shipped Segoe, never Inter).
    page.evaluate(
        """async () => {
            const wants = [
                '400 16px "Inter"', '500 16px "Inter"',
                '600 16px "Inter"', '700 16px "Inter"',
                'italic 400 16px "Inter"',
                '600 24px "Newsreader"',
                '600 24px "Noto Serif SC"',
            ];
            await Promise.all(wants.map(w => document.fonts.load(w)));
            await document.fonts.ready;
        }"""
    )
    page.wait_for_function('document.fonts.check(\'400 16px "Inter"\')', timeout=15000)
    page.wait_for_function('document.fonts.check(\'600 24px "Newsreader"\')', timeout=15000)
    page.wait_for_function('document.fonts.check(\'600 24px "Noto Serif SC"\')', timeout=15000)
    page.wait_for_timeout(300)
    page.emulate_media(media="print")
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


def apply_contact_snippet(cfg: dict) -> str:
    phone_disp = cfg["phone_display"].replace(" ", "\u00a0")
    return (
        f'<a href="tel:{cfg["phone_tel"]}">{phone_disp}</a>'
        '<span class="sep">\u00b7</span>'
        f'<span class="wechat">WeChat\u00a0{cfg["wechat"]}</span>'
        '<span class="sep">\u00b7</span>'
    )


def build():
    apply_cfg = None
    if PRIVATE_CFG.exists():
        apply_cfg = json.loads(PRIVATE_CFG.read_text(encoding="utf-8"))

    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context()
        page = ctx.new_page()

        render(page, SRC, OUT, PNG)
        print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")

        if apply_cfg:
            html = SRC.read_text(encoding="utf-8")
            assert APPLY_MARKER in html, "APPLY_CONTACT marker missing from cv.html"
            APPLY_SRC.write_text(html.replace(APPLY_MARKER, apply_contact_snippet(apply_cfg)), encoding="utf-8")
            apply_out = pathlib.Path(apply_cfg["apply_out"])
            apply_out.parent.mkdir(parents=True, exist_ok=True)
            try:
                render(page, APPLY_SRC, apply_out, None)
                print(f"Wrote {apply_out} ({apply_out.stat().st_size} bytes)")
            finally:
                APPLY_SRC.unlink(missing_ok=True)
        else:
            print(f"No private config at {PRIVATE_CFG}; apply variant skipped")

        browser.close()


if __name__ == "__main__":
    build()
    print(f"Preview: {PNG}")
