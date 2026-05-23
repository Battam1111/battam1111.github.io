"""Render the HTML CV to PDF using headless Chromium via Playwright.

Output: ../../assets/pdf/cv.pdf
"""
import os
import pathlib
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent.resolve()
SRC = ROOT / "cv.html"
OUT = ROOT.parent.parent / "assets" / "pdf" / "cv.pdf"
PNG = ROOT / "cv-preview.png"

if not SRC.exists():
    print(f"Source missing: {SRC}", file=sys.stderr); sys.exit(1)
OUT.parent.mkdir(parents=True, exist_ok=True)


def build():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context()
        page = ctx.new_page()
        page.goto(SRC.as_uri(), wait_until="networkidle")
        # Force fonts loaded; explicit timeout
        page.evaluate("document.fonts.ready")
        page.wait_for_timeout(500)
        page.emulate_media(media="print")
        page.pdf(
            path=str(OUT),
            format="A4",
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
            print_background=True,
            prefer_css_page_size=True,
        )
        # Also save preview PNG of first page at print scale for visual check
        page.set_viewport_size({"width": 794, "height": 1123})  # A4 @ 96dpi
        page.screenshot(path=str(PNG), full_page=True)
        browser.close()


if __name__ == "__main__":
    build()
    size = OUT.stat().st_size
    print(f"Wrote {OUT} ({size} bytes)")
    print(f"Preview: {PNG}")
