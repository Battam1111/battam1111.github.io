# Cuts the CJK heading fonts for the built site: every Chinese and Japanese character that the headings, the
# navigation, the name and the badges use, from the 600-weight Noto Serif SC / JP in tools/fontsrc/, written as
# _site/assets/fonts/noto-serif-sc-display.woff2 and noto-serif-jp-display.woff2 (the faces "Noto Serif SC Display"
# and "Noto Serif JP Display" of _sass/site/_fonts.scss). A character the subset lacks falls through to the next
# serif of --font-display (Songti SC, Hiragino Mincho, ...), never to a blank box.
# Runs after `jekyll build` (deploy.yml does it before publishing). Needs fonttools and brotli:
#   pip install fonttools brotli && python tools/fonts/subset_cjk.py _site
# The two sources are static instances of google/fonts' variable NotoSerifSC[wght].ttf and NotoSerifJP[wght].ttf
# (fontTools.varLib.instancer, wght=600; TrueType outlines), OFL 1.1, see assets/LICENSES.md.
import os
import re
import sys
from html.parser import HTMLParser

from fontTools import subset

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCES = os.path.join(HERE, "..", "fontsrc")
# Elements set in --font-display or worth covering: headings, the navigation, the name, the venue badges.
TAGS = {"h1", "h2", "h3", "nav", "abbr", "title"}
CLASSES = {"site-title", "home-name", "profile-name", "name-zh", "pub-badge", "site-nav"}
CJK = re.compile(r"[\u2e80-\u2fdf\u3000-\u30ff\u3190-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]")
# Punctuation a heading may gain later without a rebuild of this list.
EXTRA = "，。、：；！？（）「」『』《》〈〉【】・…ー—～"
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}


class Collector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.chars = [], set()

    def handle_starttag(self, tag, attrs):
        if tag in VOID:
            return
        classes = set((dict(attrs).get("class") or "").split())
        inside = bool(self.stack and self.stack[-1][1])
        self.stack.append((tag, inside or tag in TAGS or bool(classes & CLASSES)))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if self.stack and self.stack[-1][1]:
            self.chars.update(CJK.findall(data))


def pages(root, langs):
    for dirpath, dirnames, files in os.walk(root):
        rel = os.path.relpath(dirpath, root).replace(os.sep, "/")
        top = rel.split("/")[0]
        if top == "assets":
            dirnames[:] = []
            continue
        lang = top if top in ("zh", "ja") else "en"
        if lang in langs:
            for f in files:
                if f.endswith(".html"):
                    yield os.path.join(dirpath, f)


def collect(root, langs):
    c = Collector()
    for path in pages(root, langs):
        c.feed(open(path, encoding="utf-8").read())
        c.close()
        c.stack = []
    return c.chars | set(EXTRA)


def cut(source, chars, out):
    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["kern", "palt", "vpal", "locl", "ccmp"]
    options.hinting = False
    options.name_IDs = [0, 1, 2, 3, 4, 5, 6]
    font = subset.load_font(source, options)
    s = subset.Subsetter(options)
    s.populate(text="".join(sorted(chars)))
    s.subset(font)
    subset.save_font(font, out, options)
    print(f"{os.path.basename(out)}: {len(chars)} characters, {os.path.getsize(out)} bytes")


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else "_site"
    if not os.path.exists(os.path.join(root, "index.html")):
        sys.exit(f"{root} holds no built site (run jekyll build first)")
    out = os.path.join(root, "assets", "fonts")
    os.makedirs(out, exist_ok=True)
    cut(os.path.join(SOURCES, "NotoSerifSC-SemiBold.ttf"), collect(root, {"zh", "en"}), os.path.join(out, "noto-serif-sc-display.woff2"))
    cut(os.path.join(SOURCES, "NotoSerifJP-SemiBold.ttf"), collect(root, {"ja"}), os.path.join(out, "noto-serif-jp-display.woff2"))


if __name__ == "__main__":
    main()
