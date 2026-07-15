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
                    'italic 400 16px "Newsreader"',
                ];
                await Promise.all(wants.map(w => document.fonts.load(w)));
                await document.fonts.ready;
            }"""
        )
        page.wait_for_function('document.fonts.check(\'400 16px "Inter"\')', timeout=15000)
        page.wait_for_function('document.fonts.check(\'600 24px "Newsreader"\')', timeout=15000)
        page.wait_for_function('document.fonts.check(\'italic 400 16px "Newsreader"\')', timeout=15000)
        page.wait_for_timeout(300)
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
