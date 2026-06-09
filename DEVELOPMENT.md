# DEVELOPMENT — battam1111.github.io

Internal architecture map and working guide. **Not published** (listed in `_config.yml`
`exclude`). Read this first before changing anything. It exists so a fresh session (human
or AI) can work efficiently without re-deriving the custom layer.

This site is a **heavily customized fork of [al-folio](https://github.com/alshedivat/al-folio)**
(Jekyll), iterated across 20+ versions. Most of al-folio's machinery is untouched vanilla; a
thin, deliberate custom layer sits on top. Knowing which is which is the whole point of this doc.

---

## 1. Hard constraint: no local build

There is **no Ruby / Jekyll / Bundler on the dev machine** (Windows). You CANNOT run
`bundle exec jekyll serve` or `build` locally. The **only** build verification is the GitHub
Actions deploy. Practical consequences:

- Every change is verified by pushing and watching the deploy go green, not locally.
- Batch related changes, push, then watch the run. If it goes red, read the Actions log and
  fix forward (or revert the commit).
- Do NOT trust "it looks right in the file" for anything that affects the Liquid/SCSS build.
  Grep-prove reference safety before deleting templates/partials (an `{% include x %}` that
  points at a deleted file is a hard build break only caught on deploy).

## 2. Deploy flow

```
push to main
  -> .github/workflows/deploy.yml
  -> ubuntu runner: bundle install + ImageMagick + `bundle exec jekyll build` (JEKYLL_ENV=production)
  -> JamesIves/github-pages-deploy-action publishes _site/ to the gh-pages branch
  -> GitHub Pages serves gh-pages at https://battam1111.github.io
```

Watch a run: `gh run watch --exit-status <id>`. The **Deploy** step occasionally fails on a
GitHub Pages auth hiccup; re-run with `gh run rerun <id> --failed`. Push over HTTPS, not SSH
(SSH is flaky here): `git push https://github.com/Battam1111/battam1111.github.io.git main`.

The live `/` URL is **Fastly-cached**; to confirm a fresh deploy, fetch `/index.html` (bypasses
the `/` edge cache) or append a cache-buster query.

## 3. The cache-bust ritual (IMPORTANT)

al-folio's `bust_css_cache` filter is broken in this setup (it hashes the pre-Sass source and
always emits an empty MD5). We replace it with a **manual** version string:

- `_config.yml` -> `asset_version: vXX`
- `_includes/head.liquid` loads `main.css?v={{ site.asset_version }}` and the trilingual JS the same way.

**Whenever you change anything that alters the compiled CSS or a served JS asset, bump
`asset_version`** (e.g. `v23.1` -> `v24`). Pure file removals that do not change `main.css`
output (e.g. deleting an un-`@use`d SCSS partial, or unused `_data`) do NOT need a bump.

## 4. The custom layer (hand-built; never treat as al-folio cruft)

These files are the actual craft. Everything else is largely vanilla al-folio.

| File | What it is |
|------|-----------|
| `_sass/_yanjun-craft.scss` | The ~1400-line custom visual override layer. `@use`d **LAST** in `assets/css/main.scss` so its rules win the cascade over al-folio defaults. This is where the editorial type system, hero grid, dark-mode palette, trilingual hide rules, footer counter, etc. live. |
| `_layouts/about.liquid` | Custom homepage: CSS-grid hero + Bio + Research + News + Selected Publications + **Teaching & Service** + Social. Not the stock al-folio about layout. |
| `_layouts/page.liquid`, `_layouts/post.liquid` | Customized for trilingual `<h1>` and single-post scoping (the `single-post` class prevents post CSS bleeding onto the homepage). |
| `_includes/head.liquid` | Trilingual early-paint script, manual cache-bust, GoatCounter snippet, dark-mode FOUC fix, font preconnects. |
| `_includes/header.liquid` | Navbar with always-render brand (mobile drawer fix) + trilingual nav + the EN/中/日 language pill. |
| `_includes/footer.liquid` | Trilingual footer + the GoatCounter visit counter (JSON-fetched inline number). |
| `_includes/metadata.liquid` | SEO: absolute-URL OpenGraph, `summary_large_image` Twitter card, homepage **Person** JSON-LD (affiliation/alumniOf/jobTitle/knowsAbout/sameAs), per-page descriptions. |
| `assets/js/lang-toggle.js` | The custom EN/中/日 switcher (persists choice to `localStorage`). |
| `tools/cv/` | The CV->PDF pipeline (see section 7). Source, run manually; not part of the Jekyll build. |
| `_data/socials.yml` | The one real `_data` file (email, ORCID, Scholar, GitHub, X). |
| `_bibliography/papers.bib` | Real publications. |
| `_news/*.md`, `_posts/*.md`, `_pages/{about,blog,publications,404}.md` | Real content. |

## 5. The SCSS cascade

`assets/css/main.scss` is the **only** SCSS file with Jekyll front matter, so it is the only one
Jekyll compiles. It `@use`s the al-folio partials in order, then `font-awesome`, then
**`yanjun-craft` last** (the comment in the file says "must come LAST so it wins"). Reachability:
a partial only ships if it is transitively `@use`d from `main.scss`. To override an al-folio
style, add to `_yanjun-craft.scss`, do not edit the vanilla partials (keeps future al-folio
pulls cleaner).

## 6. Trilingual system (EN / 中 / 日)

Default language is English. The navbar pill switches and persists to `localStorage`.

- **Markup**: wrap each translatable string in `<span lang="en">…</span><span lang="zh">…</span><span lang="ja">…</span>`,
  or for Markdown blocks `<div lang="en" markdown="1">…</div>` (so Kramdown still renders inside).
- **Hiding**: `_yanjun-craft.scss` has `html[lang="en"] [lang]:not([lang="en"]) { display:none }`
  (and zh/ja). The `<html lang>` attribute is set early in `head.liquid` from `localStorage`.
- **Front matter**: subpage titles/descriptions use parallel keys `title` / `title_zh` / `title_ja`
  and `description` / `description_zh` / `description_ja` (see `_pages/blog.md`, `_posts/`).
- **Standard**: translation is *同义转换 not 机翻*. Keep paper titles, venue names (EMNLP, NAACL…),
  arXiv IDs, and field-standard terms (RLHF, reward model, agent…) in English; translate the
  surrounding prose naturally. CJK headings fall through Newsreader to Noto Serif SC/JP via `:lang()`.

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
(`goatcounter_show_counter: true`, rendered in `_includes/footer.liquid`). The footer number is
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

- **al-folio `bust_css_cache` is broken** -> manual `asset_version` (section 3).
- **`bib.liquid` and `archive.liquid` look unused but are build-critical.** `bib.liquid` is bound
  via `_config.yml` `scholar.bibliography_template: bib` (renders every `{% bibliography %}` and
  the homepage Selected Publications). `archive.liquid` is the default layout the active
  `jekyll-archives-v2` plugin uses to generate the `/blog/:year/` pages. Neither has a
  `layout:` front-matter reference, so a naive "unused layout" grep will wrongly flag them.
- **`figure.liquid` / `video.liquid` are build-critical**: `figure.liquid` renders the homepage
  headshot and every bibliography thumbnail; `video.liquid` is used by the scholar template.
- **`search_enabled: true`** keeps the entire `assets/js/search/**` ninja-keys tree alive (Ctrl+K).
- **CRLF**: `.gitattributes` normalizes text to LF (`* text=auto eol=lf`). The repo is canonical-LF
  (correct for the Linux GHA runner). If you see "LF will be replaced by CRLF" on an old file,
  it is harmless; `git add --renormalize .` clears it.
- **Live `/` is edge-cached**: verify deploys against `/index.html`.

## 11. v24 cleanup (what was removed, what was deliberately kept)

A structural cleanup removed verified-dead al-folio demo material. Removed: the in-page CV
subsystem (`_layouts/cv.liquid` + `_includes/cv/*` + Einstein `_data/cv.yml`), the GitHub-repo
stats island (`_includes/repository/*` + `_data/repositories.yml`), orphan demo includes
(`audio`, `calendar`, `course_schedule`, `courses`), demo assets (`relativity.html`, a demo
`.mp3`, `grain.svg`), and a dead FontAwesome v4-shim SCSS cluster. The Einstein demo `_data`
files still read by `bib.liquid` (`citations`, `coauthors`, `venues`) were emptied to stubs.

**Deliberately kept as dormant-but-available capabilities** (gated behind `{% if %}`, zero runtime
cost until a page opts in): the Distill scientific-article layout, the chart/diagram/map setup
scripts (chartjs/echarts/plotly/vega/leaflet/mermaid/diff2html/pseudocode/tikzjax/typograms),
comment systems (disqus/giscus), and newsletter. A future technical Note can use any of them
without re-wiring. The empty `_projects` collection + `_pages/projects.md` (`nav: false`) are a
deliberate placeholder.

## 12. Private material

The design-history corpus (peer analysis, rebuild manual, adversarial design critiques) lives
**outside this repo** at `../_homepage-rebuild-private/homepage-rebuild/` (a local sibling dir, not
git-tracked here). It was previously published by accident; it must never return to this public
repo. The longer-form working state and decisions also live in the session memory at
`~/.claude/projects/.../memory/`.
