# DEVELOPMENT — battam1111.github.io

Internal architecture map and working guide. **Not published** (listed in `_config.yml`
`exclude`). Read this first before changing anything. It exists so a fresh session (human
or AI) can work efficiently without re-deriving the custom layer.

This site started as a fork of [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and was iterated across
20+ versions. Since v28 the whole front end is the site's own: its own stylesheet (no Bootstrap, MDB, Font Awesome or
academicons), its own small scripts (no jQuery), self-hosted fonts and inline SVG icons. What is still al-folio is the
build side: the Jekyll plugins (jekyll-scholar, polyglot, imagemagick, socials, feed...) and their configuration.

---

## 1. Building before pushing

There is **no Ruby / Jekyll / Bundler on the dev machine** (Windows), so `bundle exec jekyll build` does not
run there. Two ways to see a real build:

- **Preview build off the machine** (the normal way since 2026-11): the maintainer's private tooling builds the
  working tree, uncommitted changes included, with Ruby 3.3 and the gem versions of `Gemfile.lock`, and serves
  the built site locally. Use it before every push that touches Liquid, SCSS, plugins or `_config.yml`.
- **The deploy itself**: pushing to `main` builds and publishes. If it goes red, read the Actions log and fix
  forward (or revert the commit).

Do NOT trust "it looks right in the file" for anything that affects the Liquid/SCSS build. Grep-prove reference
safety before deleting templates/partials (an `{% include x %}` that points at a deleted file is a hard build break).

**Gem versions are pinned**: `Gemfile.lock` is committed (platforms `x86_64-linux` for the Actions runner and
`arm64-darwin` for the preview machine), so the preview and the deploy build with the same plugins. Update on
purpose: `bundle update` (or `bundle lock --update`) in the preview environment, look at the preview, commit the lock.

## 2. Deploy flow

```
push to main
  -> .github/workflows/deploy.yml
  -> ubuntu runner: bundle install + ImageMagick + `bundle exec jekyll build` (JEKYLL_ENV=production)
  -> tools/fonts/subset_cjk.py cuts the CJK heading fonts into _site (section 13)
  -> JamesIves/github-pages-deploy-action publishes _site/ to the gh-pages branch
  -> GitHub Pages serves gh-pages at https://battam1111.github.io
```

Watch a run: `gh run watch --exit-status <id>`. The **Deploy** step occasionally fails on a
GitHub Pages auth hiccup; re-run with `gh run rerun <id> --failed`. Push over HTTPS, not SSH
(SSH is flaky here): `git push https://github.com/Battam1111/battam1111.github.io.git main`.

The live `/` URL is **Fastly-cached**; to confirm a fresh deploy, fetch `/index.html` (bypasses
the `/` edge cache) or append a cache-buster query.

## 3. Cache-bust (automatic)

al-folio's `bust_css_cache` filter is broken in this setup (it hashes the pre-Sass source and always emits an
empty MD5), so the stylesheet gets its version from the build instead:

- `.github/workflows/deploy.yml` writes `asset_version: <commit id>` into `_version.yml` and builds with
  `--config _config.yml,_version.yml`.
- `_includes/head.liquid` loads `main.css?v={{ site.asset_version }}`.

Nothing to bump by hand: every deploy gets a new version. Other assets use `bust_file_cache` (a hash of the file).

## 4. The custom layer (hand-built; never treat as al-folio cruft)

These files are the actual craft. Everything else is largely vanilla al-folio.

| File | What it is |
|------|-----------|
| `_sass/site/*.scss` | The whole stylesheet, in cascade layers (section 5): design tokens (colour, type, spacing, motion), base typography, the header and phone menu, the components (dated rows, publication entries, filter, copy and back-to-top buttons, footer), the pages (home, Notes list, post, 404), the two instruments (`_viz.scss`) and all motion (`_motion.scss`). |
| `assets/js/site.js` | Every behaviour of the site, no library: theme button (system / light / dark, with the circular reveal), phone menu, publication panels (Abs / Bib) and "N more authors", copy buttons, back to top, the contents rail of a post, footer visit counter. Theme detection itself is the inline script in `head.liquid` (runs before the CSS, so no flash); the same script marks the first page of a visit (`intro`). |
| `assets/js/bibsearch.js`, `assets/js/vega-setup.js` | The Publications filter and the year chart built from the entries on the page; the Vega-Lite charts of a post (redrawn on a theme change, axes and lettering from the design tokens). |
| `_includes/icons/*.svg`, `_plugins/icons.rb` | Inline SVG icons. Templates include them directly; the plugin swaps the `<i class="fa-...">` / `<i class="ai ai-...">` markup that the content files and jekyll-socials still write for the same SVGs. A new icon class needs a line in `SiteIcons::ICONS`. |
| `assets/fonts/`, `tools/fonts/subset_cjk.py`, `tools/fontsrc/` | Self-hosted fonts (section 13). Licences in `assets/LICENSES.md`. |
| `_layouts/about.liquid` | Custom homepage: heading + profile card and bio side by side + News + Selected Publications + **Teaching & Service** + contact. Not the stock al-folio about layout. |
| `_layouts/page.liquid`, `_layouts/post.liquid` | Customized for trilingual `<h1>` and single-post scoping (the `single-post` class prevents post CSS bleeding onto the homepage). |
| `_includes/head.liquid` | Per-language canonical and hreflang links, manual cache-bust, GoatCounter snippet, dark-mode FOUC fix, font preconnects. |
| `_includes/header.liquid` | Navbar with always-render brand (mobile drawer fix) + trilingual nav + the EN/中/日 language pill (links to this page in each language). |
| `_includes/footer.liquid` | Trilingual footer + the GoatCounter visit counter (the number is fetched by `site.js`). |
| `_includes/metadata.liquid` | SEO: absolute-URL OpenGraph, `summary_large_image` Twitter card, homepage **Person** JSON-LD (affiliation/alumniOf/jobTitle/knowsAbout/sameAs), per-page and per-language titles and descriptions. |
| `_plugins/lang-blocks.rb` | Keeps only the build's own language in each page and in each post body (section 6). |
| `sitemap.xml` | Every page in every language, each entry naming all versions with hreflang (replaces jekyll-sitemap). |
| `tools/cv/` | The CV->PDF pipeline (see section 7). Source, run manually; not part of the Jekyll build. |
| `_data/socials.yml` | The one real `_data` file (email, ORCID, Scholar, GitHub, X). |
| `_bibliography/papers.bib` | Real publications. |
| `_news/*.md`, `_posts/*.md`, `_pages/{about,blog,publications,404}.md` | Real content. |

## 5. The stylesheet

`assets/css/main.scss` is the **only** SCSS file with Jekyll front matter, so it is the only one Jekyll compiles.
It `@use`s the partials of `_sass/site/`; `_order.scss` comes first and fixes the order of the CSS cascade layers:
`@layer reset, tokens, base, layout, components, pages, motion, utilities;` Each partial wraps its rules in one of them, so
a later layer wins regardless of selector weight, and nothing needs `!important` (the print and reduced-motion
blocks are the only exceptions). Styles that are not in a layer (a post's `_styles`, Vega's injected styles) beat
every layer: that is how the figures of a post keep their own look.

- Colours, fonts, sizes and spacing are custom properties in `_tokens.scss` (light on `:root`, dark on
  `:root[data-theme="dark"]`); components use only the variables. Accent colour: links, the current navigation item,
  focus, a few marks. Contrast: `--ink` and `--ink-2` at least 7:1 on `--bg` and `--surface`, `--ink-3` and links
  at least 4.5:1.
- Chinese and Japanese pages (`:root:lang(zh|ja)`) get a narrower measure (38em), more leading (1.85), their own
  system sans stack after Inter, strict line breaking, and are never slanted (`font-synthesis-style: none` on
  `em`/`i`/`cite`: Latin titles inside keep Inter's real italic, CJK glyphs stay upright).
- `font-variant-numeric: tabular-nums` only on elements that hold numbers alone (dates, years, counts): on running
  text Inter's tabular figures also widen the hyphen.
- jekyll-minifier's CSS compression is off (`_config.yml`): cssminify2 strips the spaces `calc()` and `clamp()` need
  around `+`; Sass's `style: compressed` already minifies.
- The home page's one-paragraph thesis is the paragraph marked `{: .thesis }` in `_pages/about.md` (once per
  language): set in the display face, its two bold words in the accent. Its Chinese and Japanese characters come
  from the heading subset, so `thesis` is in the class list of `tools/fonts/subset_cjk.py`.
- Lines are few on purpose: a hairline opens each section of the home page and each year of the Publications
  page; rows and entries inside are separated by space alone.

### Motion (`_sass/site/_motion.scss`)

Everything that moves is an addition: an older browser, "reduce motion" and print get the same page standing
still. Only the theme reveal and the first-visit entrance involve a script.

- Between pages and between languages: the browser's cross-document view transition (`@view-transition`). The page
  body (`.site-main`) is its own layer, leaving before the new one arrives; the top bar belongs to the root layer
  and looks still. Do not give the top bar a `view-transition-name`: a named element becomes a backdrop root and
  the bar's frosted backing stops blurring the page behind it.
- Theme button: when the colours really change, `site.js` starts a same-document view transition and the new theme
  opens as a circle from the button (`data-theme-switch` on `<html>` while it runs).
- First page of a visit (`intro` class, set once per session in `head.liquid`): the heading block and the columns
  arrive in sequence. Later pages arrive through the view transition instead.
- On scroll (`animation-timeline: view()` / `scroll()`, inside `@supports`): home sections, Publications entries,
  Notes entries and a post's figures arrive as they enter; a Vega chart is drawn in from the left and is whole once
  it is fully on screen; the top bar is bare at the top of a page and gains its backing and hairline over the
  first 72px; a post shows reading progress along the bar's lower edge.
- Keyframes name only a "from" state and fill backwards, so nothing keeps a transform (and with it a stacking
  context) after it has arrived.
- A full-page screenshot does not scroll, so anything arriving on scroll is caught before it arrives: take such
  screenshots with "reduce motion" on.

### The two instruments (`_sass/site/_viz.scss`)

Both are built by script from what the page already says, and bring no words of their own.

- Publications by year (`bibsearch.js`): one square per paper, a row per year, in the page header. Filled squares
  are the first section of the page, outlined ones the second; the legend repeats those two section headings in
  the language of the page. A square scrolls to its entry; the filter dims the squares it hides. Squares are
  buttons, not `#id` links, because the filter keeps its words in the URL hash.
- Contents rail of a post (`site.js`): the `h2` headings, the current one marked, in the margin left of the widest
  figure, so only from 1420px up; it lives inside the article box and never reaches the footer.

## 6. Trilingual system (EN / 中 / 日)

One URL per language (since v27.9): [jekyll-polyglot](https://github.com/untra/polyglot) builds every page
three times from the same source, English at `/`, Chinese under `/zh/`, Japanese under `/ja/` (`_config.yml`:
`languages`, `default_lang`, `exclude_from_localization`). The navbar pill links to the same page in each language.

- **Markup**: wrap each translatable string in `<span lang="en">…</span><span lang="zh">…</span><span lang="ja">…</span>`,
  or for Markdown blocks `<div lang="en" markdown="1">…</div>` (so Kramdown still renders inside).
- **One language per page**: `<html lang>` is the build's language (`site.active_lang`), and
  `_plugins/lang-blocks.rb` drops from `<body>` every element whose `lang` is another language, exactly the
  elements that `_sass/site/_utilities.scss` still hides as a guard (`:root:lang(en) [lang]:not([lang="en"])`, and zh/ja).
  So **never put a `lang` attribute on anything that must show in every language**; it disappears from the other two builds.
- **Front matter**: subpage titles/descriptions use parallel keys `title` / `title_zh` / `title_ja`
  and `description` / `description_zh` / `description_ja` (see `_pages/blog.md`, `_posts/`); `metadata.liquid`
  puts the build's own pair into `<title>`, the description and OpenGraph.
- **Links**: write site links as usual (`/blog/`); polyglot prefixes them with `/zh` or `/ja` in those builds,
  except paths in `exclude_from_localization` (`/assets/`, feeds). A link that must point at a *given* language
  (the pill, hreflang, canonical) goes inside `{% static_href %}href="..."{% endstatic_href %}`.
- **Search engines**: each page is canonical for itself and names the three versions plus `x-default` (the
  English root) with hreflang, in `<head>` and in `sitemap.xml`. After each deploy the workflow submits every
  sitemap URL to IndexNow (Bing and the engines that share its index); the key is the `.txt` file at the site root.
- **Feed**: jekyll-feed writes one feed per language build (`/feed.xml`, `/zh/feed.xml`, `/ja/feed.xml`).
  `lang-blocks.rb` filters each post body right after Markdown conversion, so a feed entry carries one language;
  entry titles and summaries stay English (they come from `title` / `description`).
- **Standard**: translation is *同义转换 not 机翻*. Keep paper titles, venue names (EMNLP, NAACL…),
  arXiv IDs, and field-standard terms (RLHF, reward model, agent…) in English; translate the
  surrounding prose naturally. CJK headings fall through Newsreader to the Noto Serif SC/JP subsets (section 13) via `:lang()`.

## 7. CV -> PDF pipeline

The CV is **not** the al-folio in-page CV (that machinery was removed in v24). It is a standalone
pipeline under `tools/cv/`:

- `tools/cv/cv.html` + `tools/cv/cv.css` are the source (pure grayscale, A4, classical academic register).
- `tools/cv/build_cv.py` renders `cv.html` via headless Playwright Chromium to `assets/pdf/cv.pdf`.
- Rebuild after editing: `python tools/cv/build_cv.py`. Commit the regenerated `assets/pdf/cv.pdf`.
- `tools/` is excluded from the published site; only the built `assets/pdf/cv.pdf` ships.

## 8. Analytics — GoatCounter

Privacy-friendly, cookieless. `_config.yml` -> `goatcounter_username: battam1111` enables the
tracking snippet (`_includes/head.liquid`) and the footer counter
(`goatcounter_show_counter: true`, rendered in `_includes/footer.liquid`, filled in by `assets/js/site.js`). The footer number is
fetched client-side from `https://battam1111.goatcounter.com/counter/TOTAL.json` and inlined as
plain text (no widget border). Dashboard: https://battam1111.goatcounter.com/ . The counter is
**unique sessions** (same IP+UA within 8h = 1), not raw pageviews. Requires "Allow adding visitor
counts on your website" enabled in GoatCounter site settings.

## 9. Content inventory (where each user-facing string lives)

| Surface | File(s) |
|---------|---------|
| Homepage bio / research / acknowledgement | `_pages/about.md` (trilingual `<div lang>` blocks) |
| Homepage section headings + Teaching & Service table | `_layouts/about.liquid` |
| Subtitle / profile sidebar | `_pages/about.md` front matter |
| News timeline | `_news/*.md` (one file per item, inline trilingual spans) |
| Notes (blog) | `_posts/*.md` (trilingual front-matter keys + body `<div lang>`) |
| Publications list | `_bibliography/papers.bib` (rendered by the scholar `bib.liquid` template) |
| Nav labels, UI strings | `_includes/header.liquid`, `footer.liquid` |
| CV text | `tools/cv/cv.html` (then rebuild the PDF) |
| Site meta / SEO defaults | `_config.yml` (description/keywords), `_includes/metadata.liquid` |

## 10. Gotchas

- **al-folio `bust_css_cache` is broken** -> the build sets `asset_version` (section 3).
- **`bib.liquid` and `archive.liquid` look unused but are build-critical.** `bib.liquid` is bound
  via `_config.yml` `scholar.bibliography_template: bib` (renders every `{% bibliography %}` and
  the homepage Selected Publications). `archive.liquid` is the default layout the active
  `jekyll-archives-v2` plugin uses to generate the `/blog/:year/` pages. Neither has a
  `layout:` front-matter reference, so a naive "unused layout" grep will wrongly flag them.
- **`figure.liquid` is build-critical**: it renders the homepage headshot and every bibliography thumbnail.
- **Never put a `lang` attribute on anything that must show in all three languages** (section 6); the icons, the
  language links and the theme button carry none.
- **Header CSP** (`head.liquid`): `'self'`, GoatCounter, and jsDelivr only on a page with `chart: vega_lite:`. A new
  third-party script, style, image or font needs its origin added there, or the browser blocks it.
- **Publication badges** (Altmetric, Dimensions, Scholar and InspireHEP counts) are no longer rendered or loaded:
  no entry of `papers.bib` uses them, and their scripts and images would need CSP exceptions.
- **CRLF**: `.gitattributes` normalizes text to LF (`* text=auto eol=lf`). The repo is canonical-LF
  (correct for the Linux GHA runner). If you see "LF will be replaced by CRLF" on an old file,
  it is harmless; `git add --renormalize .` clears it.
- **Live `/` is edge-cached**: verify deploys against `/index.html`.

## 11. v28: the front end rebuilt (what went)

Removed with the new stylesheet: Bootstrap, MDB, Font Awesome (SCSS and webfonts), academicons, scholar-icons,
jQuery, the Bootstrap scripts, the Google Fonts link, MathJax, Masonry, medium-zoom, the progress bar, the ninja-keys
search tree (search was already off), every unused `*-setup.js`, distillpub, tikzjax, the pygments themes, and the
layouts and includes nothing rendered (distill, book-review, book-shelf, course, profiles, none, disqus, giscus,
newsletter, latest_posts, related_posts, projects, video). The "dormant capabilities" list of section 12 below is
history: those features would now have to be wired again on purpose, with their origins added to the CSP.

## 12. v24 cleanup (what was removed, what was deliberately kept)

A structural cleanup removed verified-dead al-folio demo material. Removed: the in-page CV
subsystem (`_layouts/cv.liquid` + `_includes/cv/*` + Einstein `_data/cv.yml`), the GitHub-repo
stats island (`_includes/repository/*` + `_data/repositories.yml`), orphan demo includes
(`audio`, `calendar`, `course_schedule`, `courses`), demo assets (`relativity.html`, a demo
`.mp3`, `grain.svg`), and a dead FontAwesome v4-shim SCSS cluster. The Einstein demo `_data`
files still read by `bib.liquid` (`citations`, `coauthors`, `venues`) were emptied to stubs.

**Deliberately kept as dormant-but-available capabilities** (until v28, see section 11) (gated behind `{% if %}`, zero runtime
cost until a page opts in): the Distill scientific-article layout, the chart/diagram/map setup
scripts (chartjs/echarts/plotly/vega/leaflet/mermaid/diff2html/pseudocode/tikzjax/typograms),
comment systems (disqus/giscus), and newsletter. A future technical Note can use any of them
without re-wiring. The empty `_projects` collection + `_pages/projects.md` (`nav: false`) are a
deliberate placeholder.

## 13. Fonts

Self-hosted, no Google Fonts connection. Latin: Inter (variable 400 to 700, upright and italic), Newsreader (weight
600 with its optical-size axis; headings), JetBrains Mono (code), each as a Latin and a Latin Extended WOFF2 with
`unicode-range`; the two the first screen needs are preloaded in `head.liquid`. Chinese and Japanese body text uses
the reader's system fonts. Chinese and Japanese **headings** use Noto Serif SC / JP at 600, cut per build to the
characters the headings, navigation, name and badges use:

- Sources: `tools/fontsrc/NotoSerifSC-SemiBold.ttf`, `NotoSerifJP-SemiBold.ttf` (static 600 instances of google/fonts'
  variable files, TrueType outlines). `tools/` is not published.
- `tools/fonts/subset_cjk.py _site` writes `_site/assets/fonts/noto-serif-sc-display.woff2` and
  `noto-serif-jp-display.woff2` (about 25 to 30 KB each). The deploy runs it after `jekyll build`, with
  `fonttools==4.56.0` and `brotli==1.1.0` (pinned in `deploy.yml`; the preview build cuts with the same versions).
- The preview build runs the same step. By hand: `pip install fonttools==4.56.0 brotli==1.1.0` once, then
  `python tools/fonts/subset_cjk.py <built site dir>`. Without this step the headings fall back to the system serif
  (Songti SC, Hiragino Mincho...), never to blank boxes; a character missing from the subset falls back the same way.

## 14. Private material

The design-history corpus (peer analysis, rebuild manual, adversarial design critiques) lives
**outside this repo** at `../03_private/homepage-rebuild/` (a local sibling dir, not
git-tracked here). It was previously published by accident; it must never return to this public
repo. The current working state lives beside it in `../CONTINUATION.md` (also outside this repo).
