"""Build the CJK font subsets the Chinese CV needs.

Reads every non-ASCII character out of cv_zh.html (plus the few that only exist
in the build-time injected contact snippet), instances the Noto SC variable
fonts at the weights the stylesheet asks for, and writes one small woff2 per
weight into tools/fonts/.

Why instance-then-subset rather than shipping a stock face:
  - The stock Noto CJK OTFs carry CFF outlines, which Chromium's print pipeline
    embeds as anonymous Type3 glyph programs (same failure class as
    InterVariable). The google/fonts variable builds are glyf, so they survive
    the PDF round-trip with a real font name and a working ToUnicode map.
  - A full CJK face is 17-25 MB. The document uses on the order of a few hundred
    distinct characters, so a subset is three orders of magnitude smaller and
    keeps the repo honest.
  - fontTools' instancer leaves the variable font's DEFAULT instance name in the
    name table (Thin / ExtraLight), which then shows up in font audits as a
    weight that is not what was rendered; the name records are rewritten here.

Run this after editing cv_zh.html, then rebuild. check_cv.py asserts that every
character in the HTML is actually present in the subsets, so forgetting this
step fails the gate rather than shipping tofu.
"""
import pathlib
import re
import sys
import urllib.request

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.subset import Subsetter, Options

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = pathlib.Path(__file__).parent.resolve()
HTML = ROOT / "cv_zh.html"
FONT_DIR = ROOT.parent / "fonts"
CACHE = ROOT / "_fontsrc"  # gitignored: the 17-25 MB variable sources

SOURCES = {
    "sans": (
        "NotoSansSC-var.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf",
    ),
    "serif": (
        "NotoSerifSC-var.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/notoserifsc/NotoSerifSC%5Bwght%5D.ttf",
    ),
}

# (source key, weight, output name, family, subfamily)
TARGETS = [
    ("sans", 400, "NotoSansSC-Regular-zh.woff2", "Noto Sans SC", "Regular"),
    ("sans", 500, "NotoSansSC-Medium-zh.woff2", "Noto Sans SC", "Medium"),
    ("sans", 600, "NotoSansSC-SemiBold-zh.woff2", "Noto Sans SC", "SemiBold"),
    ("serif", 600, "NotoSerifSC-SemiBold-zh.woff2", "Noto Serif SC", "SemiBold"),
]

# Characters that never appear in the HTML because the build injects them.
EXTRA_CHARS = "微信电话"


def wanted_chars() -> str:
    html = HTML.read_text(encoding="utf-8")
    # Drop tags, style and script bodies so CSS/urls do not pull glyphs in.
    html = re.sub(r"<(style|script)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " ", html)
    chars = {c for c in text if ord(c) > 0x7F}
    chars.update(EXTRA_CHARS)
    return "".join(sorted(chars))


def ensure_source(key: str) -> pathlib.Path:
    name, url = SOURCES[key]
    path = CACHE / name
    if path.exists() and path.stat().st_size > 1_000_000:
        return path
    CACHE.mkdir(parents=True, exist_ok=True)
    print(f"downloading {name} ...")
    urllib.request.urlretrieve(url, path)
    if path.stat().st_size < 1_000_000:
        raise SystemExit(f"download failed or truncated: {path}")
    return path


def build_one(src: pathlib.Path, weight: int, out: pathlib.Path, family: str, subfamily: str, text: str):
    font = TTFont(str(src))
    if font.sfntVersion != "\x00\x01\x00\x00":
        raise SystemExit(f"{src.name} is not glyf-flavored; CFF would embed as Type3")
    instantiateVariableFont(font, {"wght": weight}, inplace=True, updateFontNames=False)

    opts = Options()
    opts.flavor = "woff2"
    opts.hinting = False
    opts.desubroutinize = False
    opts.notdef_outline = False
    opts.layout_features = ["kern"]
    sub = Subsetter(options=opts)
    sub.populate(text=text)
    sub.subset(font)

    full = f"{family} {subfamily}"
    ps = f"{family.replace(' ', '')}-{subfamily}"
    for nid, val in [(1, family), (2, subfamily), (4, full), (6, ps), (16, family), (17, subfamily)]:
        font["name"].setName(val, nid, 3, 1, 0x409)
    font["OS/2"].usWeightClass = weight

    font.flavor = "woff2"
    font.save(str(out))
    font.close()


def main() -> int:
    text = wanted_chars()
    print(f"{len(text)} distinct non-ASCII characters in cv_zh.html")
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    for key, weight, name, family, subfamily in TARGETS:
        src = ensure_source(key)
        out = FONT_DIR / name
        build_one(src, weight, out, family, subfamily, text)
        print(f"  {name}: {out.stat().st_size:,} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
