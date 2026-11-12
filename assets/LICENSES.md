# Third-party assets

Everything else under `assets/` is the site's own.

## Fonts (`assets/fonts/`)

All under the SIL Open Font License 1.1 (https://openfontlicense.org). Latin and Latin Extended subsets in WOFF2,
as served by Google Fonts (2026-11).

| File | Font | Copyright |
|------|------|-----------|
| `inter-latin.woff2`, `inter-latin-ext.woff2`, `inter-italic-latin.woff2`, `inter-italic-latin-ext.woff2` | Inter 4.001 (variable weight, upright and italic) | Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) |
| `newsreader-latin.woff2`, `newsreader-latin-ext.woff2` | Newsreader 1.003 (optical-size axis kept, weight fixed at 600 with fontTools' instancer) | Copyright 2020 The Newsreader Project Authors (https://github.com/productiontype/Newsreader) |
| `jetbrains-mono-latin.woff2`, `jetbrains-mono-latin-ext.woff2` | JetBrains Mono 2.211 (weights 400 and 500) | Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono) |
| `noto-serif-sc-display.woff2`, `noto-serif-jp-display.woff2` (written at deploy by `tools/fonts/subset_cjk.py`) | Noto Serif SC and Noto Serif JP 2.003, weight 600, cut to the characters of the headings | (c) 2017-2024 Adobe (http://www.adobe.com/); from google/fonts `ofl/notoserifsc`, `ofl/notoserifjp` (sources: `tools/fontsrc/`) |

The modified versions (subsets, a fixed weight) carry the original names only as the files' internal names; the
site declares them as "Noto Serif SC Display" and "Noto Serif JP Display".

## Icons (`_includes/icons/`, inlined into the pages)

- Brand marks (`google-scholar`, `github`, `x`, `orcid`, `xiaohongshu`, `bilibili`, `zhihu`, `wechat`): Simple Icons
  15.22.0 (https://simpleicons.org), CC0 1.0. The marks themselves remain trademarks of their owners.
- Line icons (`mail`, `location`, `cv`, `rss`, `sun`, `moon`, `auto`, `menu`, `close`, `search`, `calendar`,
  `hashtag`, `tag`, `copy`, `check`, `arrow-up`, `info`): drawn for this site, same license as the site.
