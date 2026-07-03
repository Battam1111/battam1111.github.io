# Renders tools/og-card/og-card.html to assets/img/og-card.png (1200x630)
# via headless Playwright Chromium. Same pattern as tools/cv/build_cv.py.
# Run from the repo root: python tools/og-card/build_og.py
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
SRC = Path(__file__).resolve().parent / "og-card.html"
OUT = ROOT / "assets" / "img" / "og-card.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    page.goto(SRC.as_uri())
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(800)  # let webfonts settle
    page.screenshot(path=str(OUT))
    browser.close()

print(f"wrote {OUT}")
