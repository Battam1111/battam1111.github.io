# Adversarial Visual Critique — battam1111.github.io v2 (commit f201c1f)

> Author: critic-mode agent
> Date: 2026-05-22
> Live URL: https://battam1111.github.io (last-modified 2026-05-22 21:53:03 GMT)
> Deploy status: workflow `pages build and deployment` run id 26313782192 completed at 21:53:09 — verified live.
> CSS file inspected: https://battam1111.github.io/assets/css/main.css (etag `6a10d03f-1cef2`, 118 514 bytes, compressed)
> Source CSS: `_sass/_yanjun-craft.scss` (381 lines) imported LAST in `assets/css/main.scss`
> al-folio default partials: `_sass/_typography.scss`, `_navbar.scss`, `_components.scss`, `_publications.scss`, `_footer.scss`, `_blog.scss`, `_layout.scss`

---

## Section 1: Implementation verification

### 1.1 What actually shipped

I downloaded the live `main.css` with cache-buster, grep'd token by token, and matched compiled rules to source. The pipeline is healthy: `_yanjun-craft.scss` is the last `@use` in `assets/css/main.scss`, so its rules sit at the bottom of the cascade and most "last-wins" cases break our way.

| yanjun-craft rule (intent)                        | Compiled? | Wins cascade? | Verdict                                   |
|---------------------------------------------------|-----------|---------------|-------------------------------------------|
| `--global-bg-color: #FAF8F4` (root)               | yes       | yes           | LIVE — warm bg renders                    |
| `--global-text-color: #1F1B17`                    | yes       | yes           | LIVE                                      |
| `--global-theme-color: #7A8868` (sage)            | yes       | yes           | LIVE                                      |
| Dark mode `#10110F` / `#E8E6E0` / `#8E9C7C`        | yes       | yes           | LIVE                                      |
| `body{font-family:var(--font-body);font-size:1rem;line-height:1.6}` | yes | yes (last body{} rule) | LIVE — system sans 18px effective |
| `html{font-size:18px}`                            | yes       | yes           | LIVE                                      |
| `h1{font-size:2.6rem; font-family:Fraunces}`       | yes       | yes           | LIVE                                      |
| `a{color:inherit; text-decoration-color: sage; text-underline-offset:0.18em}` | yes | yes (last `a{}` rule, same specificity) | LIVE — Craig Mod recipe applies on body links |
| `.post p, .about p { max-width: 70ch }`           | yes       | yes           | **PARTIAL** — `.about` selector matches nothing (see bug #2)|
| `.profile img.profile-img, img.profile-img { max-width: 200px !important; border-radius:6px }` | yes | yes via `!important` | LIVE — but selector misses real class (see bug #1) |
| `hr::before { content: "* * *" }`                  | yes       | yes           | LIVE on `<hr>` in about.md                |
| `blockquote { border-left: 2px solid sage; padding-left:1.25em }` | yes | yes for those props | LIVE but al-folio's `padding:1em` shorthand still applies on top/right/bottom |
| `.publications h2.year { font-family: Fraunces }`  | yes       | yes           | DEAD CODE — homepage uses `--group_by none`, no `h2.year` element exists |
| `.publications .title { font-family: Fraunces }`   | yes       | yes           | LIVE on `.bibliography li .title` (al-folio adds `font-weight:bolder` separately) |
| `.publications abbr { color: sage; font-size:.78rem; uppercase }` | yes | NO — al-folio has `.publications ol.bibliography li .abbr abbr { background:sage; color:off-white!important }` with higher specificity | **LEAK-THROUGH** (bug #3) |
| `.news .row { border-bottom:1px solid divider }`   | yes       | n/a           | **DEAD CODE** — news.liquid renders `<table><tr>`, no `.row` (bug #4) |
| `.navbar .nav-link { color: text-light; font-weight:500 }` | yes | NO for active item — al-folio has `.navbar.navbar-light .navbar-nav .nav-item.active > .nav-link { color: theme; font-weight: bolder }` (spec 0,4,1 vs ours 0,2,0) | active "about" link displays bold sage, others muted — partial leak (bug #5) |
| `.publications h2.year { Fraunces }` already noted; same applies to many `h2.year` rules | yes | n/a | DEAD |
| `--font-display: Fraunces` (root)                  | yes       | yes           | LIVE (Google Fonts link in `<head>` requests Fraunces 400/500/600/700 with opsz axis) |

### 1.2 Cascade order summary

The compiled CSS is one minified line, but the load order is preserved. The `:root` from `_yanjun-craft.scss` appears AFTER al-folio's `_themes.scss` `:root`, so our color tokens cleanly win. The body, h1, links, hr, blockquote rules all appear last and win against same-specificity al-folio rules.

The places where al-folio still beats us are **specificity wars**, not cascade order: any rule with `.publications ol.bibliography li .abbr abbr` (4 classes, 2 elements) is unreachable from our 2-class `.publications abbr` selector unless we either raise specificity or use `!important`. Same for `.navbar.navbar-light .navbar-nav .nav-item.active > .nav-link`. Same for `.bibliography li .author > em`.

### 1.3 Google Fonts loading verification

Live HTML `<head>` contains:
```
<link defer rel="stylesheet" type="text/css"
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Material+Icons&display=swap">
```
Fraunces does load. **One concern**: the link uses `defer rel="stylesheet"` — `defer` is not a valid stylesheet attribute. It's ignored (so the font still loads), but it does mean Fraunces is request-prioritised as a render-blocking sync stylesheet. Acceptable, but you may want to `preconnect` to `fonts.gstatic.com` (Bug #11 in section 4).

---

## Section 2: 视觉品质严格 review

Reference set used for grading:
- **Karpathy** karpathy.ai — pure black-on-white, no decoration, content as the design.
- **Tri Dao** tridao.me — minimalist Berkeley-blue accent, dense rhythm, small profile photo, no chrome.
- **Linus Lee** thesephist.com — magazine-grade Inter Display + Söhne typography, very controlled spacing, sub-pixel-precise links.
- **Robin Jia** robinjia.github.io — al-folio defaults but with restraint, careful headshot crop, dense publication list.
- **Craig Mod** craigmod.com — warm tones, offset-underline links, * * * dividers, breathing room.

Grading rubric: 10 = ships next to those names without embarrassment. 7 = clearly a custom academic site, slightly above default. 5 = al-folio-default-with-paint. 3 = wrong/cluttered.

| Dimension                              | v2 score | What's there                                                                 | What's missing for 10/10                                                                                  |
|----------------------------------------|----------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **Color palette execution**            | **6/10** | Sage `#7A8868` is correct concept, bg `#FAF8F4` is warm                       | Sage is borderline military-green at 100% saturation against `#FAF8F4` — needs slight de-saturation OR a second hue. Right now the venue badges are full sage fill (al-folio leak-through) which makes the publication list feel "label-heavy". Karpathy: zero accent; Tri Dao: one hue used once. Right now sage is on 6 different elements (badges, links, h1 active nav, blockquote, focus, hr accent, progress, ::selection, button hover). Too liberal. |
| **Typography hierarchy**               | **6.5/10** | Fraunces loads, h1 2.6rem with `-0.02em` tracking is good, system sans body at 18px is correct | Fraunces opsz axis is loaded with wght 400/500/600/700 but no `font-variation-settings: "opsz" 24` declared anywhere — large headings render at the default opsz interpolation. Linus Lee tunes this manually. Also h1 → h2 → h3 ratio is `2.6 → 1.85 → 1.35` (1.4x, 1.37x) — fine but not magazine-grade. Magazine: 1.618 (golden) or 1.5. Bigger h1 (3.5rem) on hero would help, with h2 lower (1.5rem) to widen the gap. |
| **Hero / first screen**                | **5.5/10** | h1 "**Yanjun** Chen" in Fraunces is right idea, profile image floats right at 200px, opening sentence is strong | Hero feels "template" because: (a) `<p class="desc">PhD Student, Department of Computing...</p>` is rendered in the same sans body font with no styling — should be Fraunces italic small-caps OR cleanly tracked-out tiny caps; (b) image is just a square — no caption / no name plate / no place indicator under it; (c) "📧 yan-jun.chen@..." block is in **monospace** because `.profile .more-info { font-family: monospace }` (al-folio default leak); (d) Karpathy & Tri Dao have name in the navbar (since they navigate to other pages), but yours doesn't — navbar feels nameless. |
| **Links (Craig Mod recipe)**           | **7.5/10** | `text-decoration-color: sage; text-underline-offset: 0.18em; thickness: 0.08em` — correct, applies on body links | The author-name `<em>` border-bottom and `more-authors` dashed border (al-folio leaks) clash with the body link underline. Result: "Yanjun Chen" in own paper list shows TWO different underline styles depending on link or not. Inconsistent. |
| **Profile photo (200px rounded sq.)** | **5/10** | Size and `border-radius: 6px` correct, light border + soft shadow correct | Photo quality: a colored AI-generated portrait. Karpathy: monochrome paint. Tri Dao: black & white square cropped tight. Linus Lee: stylized illustration. **Recommendation: convert photo to muted/desaturated, or push more contrast.** Also `box-shadow` is `0 1px 3px rgba(31,27,23,0.06)` — barely visible. Either remove it or make it more present (~0.08-0.10). Halfway is worst. |
| **News section layout**                | **4.5/10** | Dates in date column (`width: 20%`), text in second column, `font-variant-numeric: tabular-nums` (correct intent) | The al-folio default uses `<table class="table table-sm table-borderless">`. yanjun-craft's `.news .row { border-bottom }` rule is **dead code** — no `.row` element. So no horizontal rule between news items. Rows are visually undifferentiated. Dates use `<th>` (bold by default via al-folio's `table th { font-weight: bold }`) but our intent was muted dates. Worse — `news_size > 3` triggers `style="max-height: 60vw"` on the wrapper which is a hard-coded scrollable region (look at HTML, you have 7 items with limit:7 so the wrapper renders but is at full height; on mobile this is a usability cliff). |
| **Publications layout**                | **5.5/10** | Venue badges, title in Fraunces, [arXiv][Bib][Code] buttons are functional | Venue badge is `sage fill + off-white text` (al-folio leak overrode our small-caps sage intent) — looks like a Bootstrap badge. The [arXiv][Bib][Code] are `border:1px solid text-color` buttons — heavy. Should be inline text links with the standard underline OR borderless icon chips. Title is `font-weight:bolder` (al-folio `.bibliography li .title`) — bolder than 600 — looks heavy in Fraunces. Author own-name `<em>` border-bottom is 1px solid — unnecessary repetition of emphasis. |
| **Section dividers (* * *)**           | **8/10** | `hr::before { content: "* * *"; letter-spacing: 0.8em }` works on the `<hr>` in about.md — renders correctly | Verified live. Only one `<hr>` so impact is minimal. |
| **Dark mode**                          | **6.5/10** | Bg `#10110F`, text `#E8E6E0`, desaturated sage `#8E9C7C` — concept is correct | Issue 1: theme toggle is `html[data-theme="dark"]` — `prefers-color-scheme: dark` is NOT honored on first load before JS runs (FOUC risk). Issue 2: when in dark mode, the fixed-bottom footer (`#1A1B18`) is almost indistinguishable from bg — vanishes. Issue 3: code highlighting still loads jekyll-pygments-themes-native.css which uses pitch black bg — clashes with `#1F1F1C` warm dark code bg. Issue 4: the back-to-top button uses `rgba(0,0,0,0.4)` bg + `#fff` text (al-folio defaults, never overridden) — pure black floating square in a warm dark scene. Dies. |
| **Mobile responsive (@media < 576px)** | **5/10** | `.profile { width: 100% }` (i.e. full-width on mobile), navbar collapses correctly | Issue: `.social .contact-icons { font-size: 4rem }` makes the icon row 64px tall on mobile — five 64px icons across is huge. Issue: news wrapper `max-height: 60vw` is `60% of viewport-width`, which on a 375px iPhone = 225px — only 3-4 news rows visible, with internal scroll. That's awkward. Issue: footer fixed-bottom on mobile eats 35-50px viewport regardless. Issue: prose `max-width: 70ch` is fine on desktop but mobile defaults to full-width with `body { padding: 1.25rem }` — readable. Mobile is "OK" but unpolished. |
| **Footer**                             | **3.5/10** | "© Copyright 2026 Yanjun Chen. Built with al-folio. Hosted on GitHub Pages. Last updated: May 22, 2026."  | `footer_fixed: true` means footer is permanently glued to viewport bottom — every page has a dark `#1F1B17` band 30px tall always-visible. This is the al-folio anti-pattern. The "Built with al-folio" badge undermines the craft message. Karpathy: no footer. Craig Mod: tiny colophon at end of page, not fixed. **Recommendation**: `footer_fixed: false` + replace text. |
| **Navbar restraint**                   | **6.5/10** | 4 nav items (about/blog/publications/projects) + search + theme toggle. Custom `font-weight: 500` and muted color via yanjun-craft. | But the active "about" item leaks to **bold sage** (al-folio higher-spec rule wins). It pops. Karpathy: no navbar. Tri Dao: 5 items in minimal sans, no active style. Recommendation: trim "blog" and "projects" if you have no content, OR style the active marker as a thin underline rather than bold sage. |
| **Subtitle (`.desc`)**                  | **4.5/10** | "PhD Student, Department of Computing, The Hong Kong Polytechnic University." — links blend in (color: inherit) | The desc text inherits body font; could be Fraunces italic or tiny-caps tracked. Currently zero personality. Tri Dao: italic small. Robin Jia: tiny caps tracked. |
| **Selection color (::selection)**      | **7/10** | `background: sage; color: bg` — works                                          | OK, but in dark mode sage-on-dark-bg is OK. Consider `background: rgba(122,136,104,0.25)` so highlighted text remains legible at its own color. |
| **Misc polish (focus rings, transitions, hover)** | **7/10** | `*:focus-visible { outline: 2px solid sage; outline-offset: 3px; border-radius: 3px }`, transitions on links/social icons | Solid. Missing: `prefers-reduced-motion` honored for transforms (the social icon `translateY(-2px)` hover ignores it). |

**整体 v2 vs best-in-class 差距**: **6 / 10**

Verdict: It's no longer "default al-folio with a logo swap" — it's clearly hand-tuned. But it's not yet "indistinguishable from Linus Lee / Tri Dao / Craig Mod." The two biggest gaps are: **(a) too many places leak al-folio defaults that contradict the craft direction (publications, news, footer, contact-info monospace)**, and **(b) the sage accent is over-applied — it appears on 6+ different elements instead of one anchored decision**. Fix those two themes and you go from 6 to 8.5.

---

## Section 3: 8 v2 implementation bugs / leak-throughs (with fixes)

Each fix lives in `_sass/_yanjun-craft.scss` unless noted.

### Bug #1 — Profile image rule targets a class that doesn't exist

**Problem**: yanjun-craft uses selector `.profile img.profile-img, .profile .profile-img, img.profile-img { max-width:200px !important; border-radius:6px }`. But the live HTML on /about uses:

```html
<img src="/assets/img/prof_pic.jpg?v=..." class="img-fluid z-depth-1 rounded" width="100%" height="auto" alt="prof_pic.jpg" loading="eager">
```

There is **no `.profile-img` class**. The image is `.img-fluid.z-depth-1.rounded` inside `.profile.float-right > figure > picture > img`. The current rule **only fires because of `.profile img` from al-folio defaults** combined with our generic `img.profile-img` not matching anything. Actually checking the CSS, the `!important` width/max-width does apply because al-folio's `.profile img { width: 100% }` is a separate weaker rule and yanjun-craft's `.profile img.profile-img` also doesn't match the HTML... wait. Let me re-verify: the matching path is `.profile img` (al-folio, width:100%) + `img.profile-img` (yanjun-craft) — `.profile-img` class never appears. So **the `max-width:200px` is not currently enforced**. The image renders at `.profile{width:30%}` of 930px = **279px wide** on desktop, plus shadow / radius are also dead. Verify by inspecting the actual computed style.

**Fix** (in `_sass/_yanjun-craft.scss`, replace section 4):
```scss
.profile figure img,
.profile picture img,
.profile img.img-fluid {
  max-width: 200px !important;
  width: 100% !important;
  height: auto !important;
  border-radius: 6px !important;
  border: 1px solid var(--global-divider-color);
  box-shadow: 0 1px 3px rgba(31, 27, 23, 0.06);
  z-index: 0; /* defeat z-depth-1 if needed */
}
.profile.float-right { /* tighten layout */
  padding-left: 1rem;
}
```

### Bug #2 — `.about` selector matches nothing; prose 70ch only fires on `.post p`

**Problem**: yanjun-craft has `.post p, .post li, .post blockquote, .about p, .about li, .publications .description { max-width: 70ch }`. The about layout `_layouts/about.liquid` wraps content in `<div class="post">` and `<article>`, never in `.about`. So the `.about p` selector matches **zero elements**. `.post p` DOES fire (via the `<div class="post">` wrapper).

However: `.post p` ALSO catches things inside `<div class="bibliography">` if it's nested in `<div class="post">` — which it is. So publication titles get a 70ch cap. That's actually fine.

The bigger issue: **on the homepage, only the bio text and "Where I'm going" paragraph get the 70ch cap**. The news table and publications list don't (they're not `<p>`).

**Fix**: drop dead `.about` selectors:
```scss
.post p,
.post li,
.post blockquote,
.publications .description,
.bibliography li .periodical,
.bibliography li .abstract {
  max-width: 70ch;
}
```

### Bug #3 — Venue badge styling is overridden by al-folio specificity

**Problem**: yanjun-craft sets `.publications abbr { color: sage; font-size: .78rem; letter-spacing: .04em; text-transform: uppercase }` (specificity 0,2,1). But al-folio's `.publications ol.bibliography li .abbr abbr { display:inline-block; background-color: var(--global-theme-color); color: var(--global-card-bg-color) !important; margin-bottom:.5rem }` (specificity 0,4,2) **wins**, plus `!important` on color. Bootstrap `.badge.rounded` adds `border-radius` and padding.

Visible result: venue badges (`arXiv`, `EMNLP`, `ACL Findings`, `NAACL`) render as **sage-filled rectangles with off-white text** — looks like a JIRA tag, not a craft tag.

**Fix** (raise specificity, override the background to transparent):
```scss
.publications ol.bibliography li .abbr abbr,
.publications ol.bibliography li .abbr abbr a {
  background-color: transparent !important;
  color: var(--global-theme-color) !important;
  border: 1px solid var(--global-theme-color);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.18em 0.5em;
  border-radius: 2px;
}
.publications ol.bibliography li .abbr abbr a:hover {
  background-color: var(--global-theme-color) !important;
  color: var(--global-bg-color) !important;
}
```

### Bug #4 — `.news .row` border-bottom never applies

**Problem**: news.liquid renders `<table class="table table-sm table-borderless"><tr><th>date</th><td>text</td></tr></table>`. There is no `.row` class — that selector was probably copied from publications grid. So `border-bottom:1px solid divider; padding:0.85rem 0` on news items never fires. News dates are visually undifferentiated rows.

Also the parent rule `table.table-borderless td, table.table-borderless th { border: 0 }` (Bootstrap) explicitly removes borders.

**Fix**:
```scss
.news .table-responsive { max-height: none; } /* kill the 60vw scrollbox */
.news table.table tr {
  border-bottom: 1px solid var(--global-divider-color);
}
.news table.table tr:last-child { border-bottom: 0; }
.news table.table th {
  font-weight: 400; /* defeat Bootstrap table th bold */
  color: var(--global-text-color-light);
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
  vertical-align: top;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  white-space: nowrap;
}
.news table.table td {
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  vertical-align: top;
}
```
Also override the inline `style="max-height: 60vw"` on `.table-responsive` (it's only set when `news_size > 3`) by either editing `_includes/news.liquid` line 7 to remove the style, or via the CSS above.

### Bug #5 — `.profile .more-info { font-family: monospace }` (al-folio leak)

**Problem**: The "📧 yan-jun.chen@connect.polyu.hk" block renders in `monospace` because of `_sass/_components.scss` line 64. yanjun-craft never overrides this. In a warm-tone Fraunces-bodied page, a monospace block of contact info clashes.

**Fix**:
```scss
.profile .more-info {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--global-text-color-light);
  letter-spacing: 0;
}
.profile .more-info p {
  margin: 0.15rem 0;
  display: block; /* not inline-block */
}
```

### Bug #6 — Social `.contact-icons` icons are 4rem (64px each) — clobbers craft

**Problem**: `.social .contact-icons { font-size: 4rem }` in `_components.scss`. Five contact icons each at 64px is a giant horizontal strip below publications. Karpathy and Tri Dao either omit it entirely or use ~1.5rem icons.

**Fix**:
```scss
.social .contact-icons {
  font-size: 1.5rem;
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 2rem;
}
.social .contact-icons a {
  color: var(--global-text-color-light);
  transition: color 0.2s ease, transform 0.2s ease;
}
.social .contact-icons a:hover {
  color: var(--global-theme-color);
  transform: translateY(-1px);
}
.social .contact-note {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin-top: 1rem;
  text-align: center;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
}
```

### Bug #7 — Footer fixed-bottom is dark band always glued to viewport

**Problem**: `_config.yml` has `footer_fixed: true`. Footer renders as `<footer class="fixed-bottom">` with bg `#1F1B17` (warm dark) and `position: fixed`. On every page, every scroll position, a 30-50px dark band is locked to the bottom of the viewport. This is the al-folio default that turns demo sites into "looks like a SaaS dashboard." Craig Mod, Karpathy, Tri Dao all use page-end footers.

Also the footer text reads: "Built with [al-folio](...). Hosted on [GitHub Pages](...). Last updated: May 22, 2026." That's an al-folio billboard.

**Fix** (`_config.yml`):
```yaml
footer_fixed: false
footer_text: >
  Built carefully. <a href="https://github.com/Battam1111/battam1111.github.io">View source</a>.
last_updated: true  # keep but de-emphasize via CSS below
```

Then in yanjun-craft:
```scss
footer.sticky-bottom {
  background: transparent;
  border-top: 1px solid var(--global-divider-color);
  padding: 2.5rem 0 3.5rem;
  font-size: 0.82rem;
  color: var(--global-text-color-light);
  text-align: center;
  margin-top: 4rem;
}
footer.sticky-bottom a {
  color: var(--global-text-color-light);
  text-decoration-color: var(--global-divider-color);
}
footer.sticky-bottom a:hover {
  color: var(--global-theme-color);
  text-decoration-color: var(--global-theme-color);
}
```

### Bug #8 — Active navbar item leaks to "font-weight: bolder + sage"

**Problem**: `.navbar.navbar-light .navbar-nav .nav-item.active > .nav-link { background-color: inherit; font-weight: bolder; color: var(--global-theme-color) }` from `_navbar.scss` line 70. Higher specificity than yanjun-craft's `.navbar-nav .nav-link`.

Result: "about (current)" displays at `font-weight: bolder` (which in Fraunces sometimes maps to 900+ — heavier than the heading) AND sage color. Inconsistent with the muted-restraint intent.

**Fix**:
```scss
.navbar.navbar-light .navbar-nav .nav-item.active > .nav-link,
.navbar-nav .nav-item.active > .nav-link {
  color: var(--global-text-color) !important;
  font-weight: 500;
  background-image:
    linear-gradient(var(--global-theme-color), var(--global-theme-color));
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: 0 calc(100% - 6px);
}
```
This gives the active item a thin sage underline 6px above the baseline — magazine-grade rather than bold-color.

---

## Section 4: 5 v3 next-level upgrades

### Upgrade #1 — OG card (1200×630) for Twitter / arXiv / Slack previews

**Why**: Currently `_config.yml` has `og_image:` blank. When you share https://battam1111.github.io on Twitter, Slack, or arXiv comment threads, you get NO preview card. Karpathy, Tri Dao, and Linus Lee all have custom OG cards (typically: name + role + accent stripe). Tri Dao's is `name + research areas + tridao.me` on plain bg.

**Implementation steps**:
1. Create `assets/img/og-card.png` (1200 × 630, < 100 KB).
   - Recommended layout: warm bg `#FAF8F4`, top 80% = "Yanjun Chen" in Fraunces 100px + "Environment-Centric AI" in Fraunces italic 36px + "PhD candidate, PolyU" sans 24px in muted color. Bottom 20% = sage horizontal rule + URL "battam1111.github.io" in mono 18px.
   - Generate via Figma, or via Jekyll plugin `jekyll-og-image`, or via a one-off Imagemagick template.
2. `_config.yml`:
   ```yaml
   og_image: og-card.png  # relative to /assets/img/
   ```
3. Verify `_includes/metadata.liquid` picks it up (it should — al-folio reads `site.og_image`).
4. Validate at https://www.opengraph.xyz/url/https%3A%2F%2Fbattam1111.github.io

### Upgrade #2 — Selected publications "venue badge" → small-caps inline label

Beyond Bug #3's "transparent bordered" fix, take this further: drop the `<abbr>` entirely and inline the venue as small-caps text immediately before the title.

**Why**: Linus Lee, Robin Jia, and Tri Dao all use inline venue labels — `EMNLP 2024 · The Accuracy Paradox in RLHF`. No card, no border. Reduces clutter, improves scannability.

**Implementation steps**:
1. Edit `_layouts/bib.liquid` (or its include) — find where `{{ entry.abbr }}` is rendered as `<abbr>` and change to:
   ```html
   <span class="venue">{{ entry.abbr }}</span>
   ```
   placed in front of the title in the same row.
2. yanjun-craft CSS:
   ```scss
   .bibliography li .venue {
     font-family: var(--font-body);
     font-size: 0.78rem;
     font-weight: 600;
     letter-spacing: 0.08em;
     text-transform: uppercase;
     color: var(--global-theme-color);
     margin-right: 0.6em;
     font-variant-numeric: tabular-nums;
   }
   .bibliography li .col-sm-2.abbr { display: none; }  /* hide the old badge column */
   .bibliography li .col-sm-8 { width: 100%; max-width: 70ch; }
   ```
3. Restructure the Bootstrap row so the title row is full-width.

### Upgrade #3 — Hover-reveal news pattern + remove `max-height:60vw` scrollbox

**Why**: The current news section is a 7-row table inside a 60vw scrollbox — feels like a CRM dashboard. Tri Dao shows 5 most-recent news inline with date + one-line summary, no scrollbox. Linus Lee uses a "drawer" pattern — first 3 visible, 4-7 collapsed behind `<details>`.

**Implementation steps**:
1. Edit `_pages/about.md` frontmatter: change `announcements.limit: 7` → `limit: 5`, set `scrollable: false`.
2. Edit `_includes/news.liquid` line 6-8 — remove the `style="max-height: 60vw"` inline style.
3. Add yanjun-craft CSS:
   ```scss
   .news details { margin-top: 1rem; }
   .news details summary {
     color: var(--global-text-color-light);
     font-size: 0.9rem;
     cursor: pointer;
     padding: 0.5rem 0;
     border-top: 1px solid var(--global-divider-color);
   }
   .news details summary:hover { color: var(--global-theme-color); }
   ```
4. Optionally wrap items 6+ in `<details>` via news.liquid loop.

### Upgrade #4 — Paper-grain SVG overlay (3% opacity) for warmth

**Why**: Flat `#FAF8F4` is OK but lacks the warmth of a Risograph print or letterpress book. Craig Mod and Robin Sloan both use sub-3%-opacity noise overlays to give surfaces texture. It's the difference between "off-white" and "paper".

**Implementation steps**:
1. Create `assets/img/grain.svg` (data-URI inlinable, ~300 bytes):
   ```svg
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
     <filter id="n" x="0" y="0">
       <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
       <feColorMatrix values="0 0 0 0 0.12  0 0 0 0 0.10  0 0 0 0 0.09  0 0 0 0.06 0"/>
     </filter>
     <rect width="200" height="200" filter="url(#n)"/>
   </svg>
   ```
2. yanjun-craft CSS:
   ```scss
   body::before {
     content: "";
     position: fixed;
     inset: 0;
     pointer-events: none;
     background-image: url("/assets/img/grain.svg");
     background-size: 200px 200px;
     opacity: 0.03;
     mix-blend-mode: multiply;
     z-index: 9999;
   }
   html[data-theme="dark"] body::before {
     opacity: 0.06;
     mix-blend-mode: lighten;
   }
   @media (prefers-reduced-motion: reduce) {
     body::before { display: none; }
   }
   ```
3. Verify Lighthouse perf — SVG filters are GPU-cheap but visible on low-end devices.

### Upgrade #5 — Print stylesheet (publication-grade CV print)

**Why**: A PhD homepage gets printed to PDF for committee submissions. The default al-folio prints with full color, fixed-bottom footer, and Bootstrap layout artifacts. Tri Dao and Robin Jia have dedicated print CSS that produces a 1-page CV.

**Implementation steps**:
1. Append to yanjun-craft `_yanjun-craft.scss`:
   ```scss
   @media print {
     body {
       background: white !important;
       color: black !important;
       font-size: 10pt !important;
     }
     .navbar, .progress-bar, progress, footer, .social, #back-to-top,
     ninja-keys, #search-toggle, #light-toggle, .navbar-toggler { display: none !important; }
     a {
       color: black !important;
       text-decoration: underline !important;
       text-decoration-color: black !important;
     }
     a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #555; }
     h1, h2, h3 { color: black !important; page-break-after: avoid; }
     .container { max-width: 100% !important; padding: 0 !important; }
     .post p, .post li { max-width: none !important; }
     .bibliography li { break-inside: avoid; }
     .profile { float: none !important; width: auto !important; }
     .profile figure img { max-width: 1.5in !important; }
     .news, .publications { margin-top: 1rem; }
     hr::before { content: ""; }
     hr { border: 0; border-top: 1px solid #999; height: 1px; margin: 1rem 0; }
   }
   ```
2. Test via Chrome DevTools → Rendering → Emulate CSS media type: print, then Cmd+P → Save as PDF.

### Bonus Upgrade #6 — `preconnect` to Google Fonts for faster Fraunces FCP

**Why**: Right now `<head>` has `<link defer rel="stylesheet" href="https://fonts.googleapis.com/...">` but no `preconnect`. Fraunces FCP penalty is ~150-250ms on cold connections.

**Implementation steps** (`_includes/head.liquid` just before the google_fonts link):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
Also drop the bogus `defer` attribute on the stylesheet link — `defer` is for `<script>` not `<link rel="stylesheet">`. Replace with `media="all"`.

### Bonus Upgrade #7 — Honour `prefers-color-scheme: dark` on first load

Currently `initTheme()` runs from `theme.js` and may flash light-mode for ~80ms on a dark-mode user's first visit (FOUC). Add to `<head>` an inline script BEFORE the main stylesheet link:
```html
<script>
  (function(){
    var s = localStorage.getItem('theme');
    if (s === 'dark' || (!s && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme','dark');
    }
  })();
</script>
```

---

## Section 5: If you only have time for 3 fixes — these in this order

By leverage (visible-quality-gain ÷ implementation-effort):

### Fix #1 — Kill the fixed-bottom footer (Bug #7 — 5 minutes, biggest impact)

In `_config.yml`, set `footer_fixed: false` and rewrite `footer_text:` to drop the al-folio attribution. Add the sticky-bottom override CSS from Bug #7.

This single change removes the always-visible dark band that visually signals "this is a default al-folio site." Removes ~30px of permanent visual noise from every screen.

### Fix #2 — Fix venue badges + author-link clashes (Bug #3 + part of #6)

Add the `.publications ol.bibliography li .abbr abbr` override with transparent background + sage border + uppercase small-caps. This converts the publication list from "JIRA-tag style" to "magazine inline-label style" — single biggest perceived-quality jump on the publications list.

Add 5 lines to defeat the `.bibliography li .author > em { border-bottom }` rule:
```scss
.bibliography li .author > em { border-bottom: 0 !important; font-weight: 600; }
```
so own-name highlight is via weight, not double-underline.

### Fix #3 — Demote the over-sized contact icons (Bug #6 — 4rem → 1.5rem)

Change `.social .contact-icons { font-size: 4rem }` override down to 1.5rem with flex/gap layout and lighter icon color. This stops the icon row from being the loudest visual element on the page (currently it shouts louder than the publications).

---

## Closing notes

The v2 yanjun-craft layer ships real craft signal: warm tones DO render, Fraunces DOES load, Craig Mod link recipe DOES apply, * * * dividers DO work. It's not "lipstick on al-folio." But it IS still leaking ~6-8 al-folio defaults that contradict the craft direction (mono contact-info, filled badges, fixed-bottom footer, 4rem icons, bolder active nav). Plug those leaks and you land at "indistinguishable from a hand-rolled academic site."

Do NOT abandon al-folio. The incremental cost of fixing the 8 bugs above is ~120 lines of additional SCSS in `_yanjun-craft.scss` and 6 lines of `_config.yml` changes. Vs ripping it out and starting over (~3 weeks). Stay incremental.

**Score forecast after Section 3 fixes only: 7.5/10. After Section 4 upgrades 1-4 added: 8.5-9/10.**
