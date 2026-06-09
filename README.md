# Yanjun Chen — Academic Homepage

Source for **[battam1111.github.io](https://battam1111.github.io)**. A heavily customized fork of
[al-folio](https://github.com/alshedivat/al-folio) (Jekyll), iterated across 20+ versions.

> **Working on this repo? Read [DEVELOPMENT.md](DEVELOPMENT.md) first.** It is the architecture map:
> the custom layer, the no-local-build constraint, the deploy + cache-bust ritual, the trilingual
> system, the CV pipeline, and the build-critical traps. This README is just the front door.
> (Both files are excluded from the published site.)

## Quick facts

- **No local build.** There is no Ruby/Jekyll on the dev machine; the only build verification is
  the GitHub Actions deploy. Push, then watch the run.
- **Deploy:** push to `main` -> `.github/workflows/deploy.yml` builds Jekyll on an Ubuntu runner ->
  publishes `_site/` to the `gh-pages` branch -> GitHub Pages serves it. Push over HTTPS.
- **Cache-bust:** bump `asset_version` in `_config.yml` whenever the compiled CSS or a served JS
  asset changes (al-folio's built-in `bust_css_cache` is broken here). See DEVELOPMENT.md §3.
- **Trilingual** EN / 中 / 日 throughout, toggled by the navbar pill. See DEVELOPMENT.md §6.

## Where the content lives

| Surface | File(s) |
|---------|---------|
| Homepage bio / research | `_pages/about.md` |
| Homepage sections + Teaching & Service | `_layouts/about.liquid` |
| News timeline | `_news/*.md` |
| Notes (blog) | `_posts/*.md` |
| Publications | `_bibliography/papers.bib` |
| CV (source) | `tools/cv/cv.html` (+ `python tools/cv/build_cv.py` rebuilds `assets/pdf/cv.pdf`) |
| Site config | `_config.yml` |
| Custom visual layer | `_sass/_yanjun-craft.scss` |

The full content inventory and the where-each-string-lives table are in DEVELOPMENT.md §9.

## License

The al-folio theme is released under the [MIT License](LICENSE).
