# v3 Convergence Score — battam1111.github.io commit 30d6711

> Judge: strict convergence reviewer
> Date: 2026-05-22
> Live URL: https://battam1111.github.io (last-modified 2026-05-22 22:11:13 GMT)
> Bundle inspected: https://battam1111.github.io/assets/css/main.css (124 262 bytes, etag `6a10d481-1e566`)
> Source: `_sass/_yanjun-craft.scss` (699 lines — v2 was 381 lines, v3 adds 318 lines)
> Reference best-in-class: Karpathy / Tri Dao / Robin Jia / Craig Mod / Linus Lee

---

## Section 1: v3 ships verification

I downloaded the live `main.css` + live `index.html` and grep-verified every v3 rule reached the bundle in the right cascade position. Byte offsets are the position in the minified bundle (rule wins if its offset is greater than the al-folio default it competes with).

| v3 rule (intent)                                          | Compiled? | Offset       | Beats al-folio default at | Verdict             |
|-----------------------------------------------------------|-----------|--------------|---------------------------|---------------------|
| Bug #1 — `.profile figure img` 200px rounded sq.          | yes       | ~118 700     | n/a (new selector)        | LIVE — HTML uses `<figure><picture><img class="img-fluid">`, selector matches |
| Bug #2 — drop `.about` dead selectors                     | partial   | ~118 800     | n/a                       | LIVE for `.post` paths; `.about .desc` rule remains as dead code (no `.about` element in DOM) |
| Bug #3 — venue badge `background-color: transparent !important; border:1px solid sage` | yes | 118 965     | al-folio sage-fill at 12 993 | LIVE — `display:inline-block` re-asserted, but see Section 5 regression #1 |
| Bug #4 — `.news table.table tr { border-bottom }`         | yes       | ~119 200     | n/a (new selector)         | LIVE — news.liquid renders `<tr>` and selector matches |
| Bug #5 — `.profile .more-info { font-family: body }`      | yes       | ~119 500     | al-folio monospace at ~46 000 | LIVE — kills monospace contact-info |
| Bug #6 — `.social .contact-icons { font-size: 1.5rem !important }` | yes | 121 150 | al-folio 4rem at 17 566 | LIVE — icons shrink to 1.5rem with `!important` |
| Bug #7 — `footer { position: static !important; background: transparent !important }` | yes | 121 728 | al-folio `.sticky-bottom` at ~89 000 | LIVE — footer is no longer a fixed band; `_config.yml: footer_fixed: false` also confirmed by `<footer class="sticky-bottom mt-5">` (sticky → static via override) |
| Bug #8 — active nav link sage underline (background-image gradient trick) | yes | 121 500 | al-folio bold sage at 87 200 | LIVE — `font-weight:500 !important` + 1.5px sage gradient under text |
| Upgrade #1 — `Fraunces 9..144 opsz` (already in v2)        | yes       | n/a          | n/a                       | LIVE in `<head>` with `display=swap` |
| Upgrade #2 — `<link rel="preconnect">` to fonts.googleapis + fonts.gstatic | yes (HTML) | n/a       | n/a                       | LIVE in `<head>` |
| Upgrade #3 — `prefers-reduced-motion: reduce`              | yes       | x2 in CSS    | n/a                       | LIVE — kills `body::before`, transforms, transition-duration |
| Upgrade #4 — `body::before { background: grain.svg; opacity:0.025 }` | yes | 122 681 | n/a | LIVE — grain.svg deployed at /assets/img/grain.svg (348 bytes, HTTP 200) |
| Upgrade #5 — `@media print { ... }` stylesheet             | yes       | ~123 000     | n/a                       | LIVE — kills navbar/footer/social/back-to-top, link auto-prints URLs, page-break-avoid |
| Polish — `.post .desc { Fraunces italic 1.05rem }`         | yes       | ~123 800     | n/a                       | LIVE — matches `<p class="desc">` inside `<div class="post">` |
| Polish — dark mode `::selection { rgba(...0.4) }`          | yes       | ~124 000     | n/a                       | LIVE |
| Polish — author-name `<em> { border-bottom: 0 !important; font-weight:600 }` | yes | ~119 600 | al-folio dashed border at ~88 700 | LIVE — author own-name no longer double-underlined |

**Cascade health**: every v3 rule sits LAST in the bundle (offsets > 118 000 vs al-folio defaults at 12 000-90 000). The single source of fragility — `display:inline-block` on the badge — is discussed under regressions.

**Verified deployment chain**: commit 30d6711 → GitHub Pages workflow → bundle served at 22:11:13 GMT with content-length 124 262 (≈ +5.4 KB over v2's 118 514, consistent with 318 new SCSS lines).

---

## Section 2: Per-dimension scores

Grading rubric: **10 = ships next to Karpathy / Tri Dao / Robin Jia / Craig Mod / Linus Lee without any embarrassment**. 9.5 = best-in-class for academic homepages. 8.5 = obviously hand-crafted, clearly above al-folio default. 7 = decent custom site. 5 = al-folio with paint. v2 reference is the critic's prior estimate.

| Dimension                              | v2 score   | v3 score   | Gap to 10 (what's still missing)                                                                                                                                                                                                                              |
|----------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Color palette execution**            | 6/10       | **7.5/10** | Sage `#7A8868` now appears on fewer elements (badge fill removed, active-nav bold removed) — better restraint. Still applied to: links underline, blockquote left rule, focus ring, hr accent (absent — `* * *` is muted), social hover, badge border, button hover, ::selection. That's 8 places. Karpathy uses one accent in one place. The accent is still slightly military-green at full saturation. To 10: drop to 5 places max, OR de-saturate to `#7E8B6E` (warmer olive). |
| **Typography hierarchy**               | 6.5/10     | **7.5/10** | `<p class="desc">` is now Fraunces italic 1.05rem (was sans body) — that's the magazine register. h1 2.6rem with `-0.02em` tracking is good. **What's missing**: no `font-variation-settings: "opsz" 32` on h1 — Fraunces 9..144 opsz axis is loaded but never explicitly tuned, so headings render at default interpolation. Linus Lee tunes opsz manually for hero-vs-body. Also h1 → h2 ratio is 1.4x (2.6 → 1.85) — magazine grade is 1.5x or golden 1.618. |
| **Hero / first screen**                | 5.5/10     | **7/10**   | `<p class="desc">` Fraunces italic fixes the worst sin (monospace contact). Profile photo at 200px rounded sq. with light border + soft shadow. **What's missing**: profile photo is still a colored portrait — Karpathy/Tri Dao use monochrome or black-and-white. The "📧 yan-jun.chen@…" emoji is now in body font (good) but emoji-prefix is a vernacular tic that breaks the otherwise editorial register. Tri Dao/Robin Jia use `email@host` plain text without emoji. To 9-10: drop emojis from `.more-info`, OR replace with `Fontawesome` icons in muted color. |
| **Links (Craig Mod recipe)**           | 7.5/10     | **8.5/10** | Author `<em>` border-bottom collision (v2 bug) is dead — `border-bottom: 0 !important`. `more-authors` dashed border is dead. Body links now have CLEAN Craig Mod offset underline with no competing styles in publications. To 10: text-underline-offset is 0.18em — Craig Mod uses 0.22em on his Fraunces site; a hair more breathing room there. |
| **Profile photo**                      | 5/10       | **6/10**   | Same photo, same border, same `box-shadow: 0 1px 3px rgba(...,0.06)`. The v3 selector now actually matches the rendered DOM (`.profile figure img`), so the 200px sizing applies. **What's missing**: image content is unchanged — it's still a colored portrait, halfway box-shadow (too subtle to register but not absent). To 9-10: convert to grayscale/monochrome OR raise shadow to `0 4px 12px rgba(31,27,23,0.08)` so the photo has presence. |
| **News section layout**                | 4.5/10     | **7.5/10** | The biggest jump. `.news table.table tr { border-bottom: 1px solid divider }` now actually fires (v2 was dead code targeting `.row`). Date `<th>` now has `font-weight:400 !important; color: text-light; tabular-nums; padding: 0.85rem 1rem 0.85rem 0`. Date column is properly muted. Rows are visually distinct. To 9-10: dates currently render `May 22, 2026` — magazine grade strips the year on same-year items and uses `.weekday` strikes. Also `<th>` is bold-by-default in Bootstrap; the override fixes weight but not "scope=row" semantic redundancy. |
| **Publications layout**                | 5.5/10     | **6.5/10** | Title is now `font-weight:600` (not bolder). Author own-name `<em>` no longer has double underline. Borderless `[arXiv][Bib][Code]` chips in sage with transparent bg. **Regression flagged** (see Section 5 #1): venue badge has `class="badge rounded w-100"` on HTML — Bootstrap's `.w-100 { width:100% !important }` makes badge stretch to fill the `.col-sm-2` column. Result: each venue badge is a thin tall sage-bordered rectangle ~16% column-width wide on desktop with "ARXIV" small-caps inside, NOT a tight inline chip. To 9-10: kill the badge width. (Fix in Section 4.) |
| **Section dividers (* * *)**           | 8/10       | **8/10**   | Unchanged. Verified live on `<hr>` in about.md. Robin Sloan style. To 10: only one `<hr>` in the site so the rule is hit once — the impact is minimal; not really a delta vs Karpathy or Craig Mod (who use multiple). |
| **Dark mode**                          | 6.5/10     | **7/10**   | `html[data-theme=dark]` inline FOUC-prevention script runs synchronously in `<head>` BEFORE the `<body>` starts — verified: lines 20-25 of HTML set `data-theme` before stylesheets paint. `::selection { rgba(142,156,124,0.4) }` for dark legibility. **What's still wrong**: (a) jekyll-pygments-themes-native.css (pure-black code bg) is still loaded for dark mode — clashes with `--global-code-bg-color:#1F1F1C` warm-dark intent on `<code>` inline elements, but `<pre><code>` blocks render with native theme's black. (b) `#back-to-top` button still uses al-folio's `rgba(0,0,0,0.4) bg + #fff text` (verified: no override in v3) — appears as pure black floating square in warm-dark scene. (c) footer is now `transparent` so on dark mode it's just text-light on dark-bg, no longer the vanishing band — but lost the colophon affordance. |
| **Mobile responsive**                  | 5/10       | **6.5/10** | Contact icons 1.5rem on mobile (was 4rem) — fixes the iPhone usability cliff. News table no longer has 60vw max-height issue (news.liquid doesn't apply that hack, verified). Footer no longer eats viewport bottom. **What's missing**: `.profile { width: 100% }` on `@media(max-width:576px)` is from al-folio default — picture float-right + media query stack work, but on a 375px iPhone the photo at 100% width is too dominant (consider clamping to 50% or 240px max). Hero h1 at 2.6rem = 46.8px on mobile is too large — should clamp(2.0rem, 8vw, 2.6rem). |
| **Footer**                             | 3.5/10     | **8/10**   | Massive jump. `position: static !important; background: transparent !important; border-top: 1px solid divider; padding: 2.5rem 0 3.5rem; text-align:center; margin-top:4rem`. The "Built with al-folio. Hosted on GitHub Pages" Bootstrap badge is replaced with `© Copyright 2026 Yanjun Chen. Built carefully. View source. Last updated: May 22, 2026.` Colophon vibe. **What's missing for 10**: still says `<footer class="sticky-bottom">` in HTML (al-folio template default) — CSS overrides to static, but the HTML class is semantically wrong. Should be `<footer class="colophon">` or just `<footer>`. Cosmetic — overrides win. |
| **Navbar restraint**                   | 6.5/10     | **8/10**   | Active nav link is now thin 1.5px sage underline via `background-image: linear-gradient` trick — `font-weight:500 !important; background-color: transparent !important; color: text` (not bold sage). Restraint achieved. **What's missing**: 4 nav items + search + theme-toggle is still a lot. Karpathy has 0 nav items. Tri Dao has 5 minimal sans. The current site is closer to Tri Dao than Karpathy — which is fine for "actively building" mode. |
| **Subtitle (`.desc`)**                 | 4.5/10     | **8/10**   | Now `font-family: Fraunces; font-style: italic; font-size: 1.05rem; color: text-light; letter-spacing: 0.005em`. Reads as a magazine subtitle. Inherits link Craig Mod recipe via `<a>` children. To 10: `text-wrap: balance` should be applied so the subtitle line-breaks cleanly when narrower than the desktop layout. Also `letter-spacing: 0.005em` is functionally zero — either commit to 0.01em or drop it. |
| **::selection / focus polish**         | 7/10       | **8/10**   | Light mode `::selection { background: sage; color: bg }` and dark mode `rgba(142,156,124,0.4)` so text remains legible. `:focus-visible { 2px sage outline + 3px offset + 3px radius }`. To 10: focus-visible needs a tested keyboard-tab pass — currently the sage 2px is fine but offset:3px on inline links inside `<p>` can clip against next-line text. |

**Aggregate**: arithmetic mean across 14 dims = **7.55**. Weighted by visual-impact (color, hero, news, publications, footer count double) = **7.6**. Median = **7.5**.

---

## Section 3: Overall verdict

**v3 整体 score**: **7.6 / 10**

**Verdict**: **NOT CONVERGED** — short of the 8.5/10 bar for "和 Karpathy/Tri Dao 同级，不区分上下".

### Justification

v3 fixes 8 v2 bugs cleanly. The cascade is healthy: every v3 selector matches an actual DOM node and beats al-folio defaults via offset-order + `!important`. The big jumps:

- Footer: **3.5 → 8** (no more al-folio anti-pattern fixed-bottom band)
- News: **4.5 → 7.5** (border-bottom now actually fires)
- Subtitle: **4.5 → 8** (Fraunces italic is the magazine register)
- Active navbar: **6.5 → 8** (sage underline replaces bold sage text)

But the headline gap remains: **the venue badge has shipped with `.w-100` Bootstrap utility intact, and the v3 abbr rule does NOT override width** — see Section 5 regression #1. Until that's fixed, the publications section, which is the second-most-visible block after the hero, still looks like a Bootstrap mockup, not a craft homepage. That single regression alone keeps v3 below 8.

The other 7-pt-and-below dims are content/design choices that can't be fixed in CSS alone:
- Profile photo at 6/10 because the image itself is a colored AI portrait (Karpathy uses monochrome; Tri Dao uses black-and-white). This requires asset rework, not code.
- Color palette at 7.5/10 because sage is still applied to 8 places. Karpathy uses zero accents.
- Mobile at 6.5/10 because hero h1 and profile-photo width need clamp() on small viewports.

**To converge (8.5+)**: fix the badge `.w-100` regression (1-line CSS), apply `font-variation-settings: "opsz" 32` to h1/h2/h3, and ship the back-to-top + pygments-native dark-mode polish. Those three changes alone push v3 → 8.5–8.7.

To reach 9+ (Karpathy/Tri Dao territory): de-saturate sage OR drop accent uses from 8 to ≤ 4, replace profile photo with monochrome version, drop emoji from `.more-info` block, add `clamp()` to hero h1.

---

## Section 4: Remaining gaps with fix CSS

### Gap #1 — Venue badge stretches full column width (THE remaining regression)

**Diagnosis**: HTML in `_layouts/bib.liquid` (or al-folio default) renders `<abbr class="badge rounded w-100">EMNLP</abbr>`. Bootstrap's `.w-100 { width: 100% !important }` (loaded at byte ~5000 of bundle) wins because the v3 abbr override doesn't redeclare width and `!important` width beats normal width.

**Effect on /**: each venue cell renders a sage-bordered rectangle filling the `.col-sm-2` column, with the short venue text (`ARXIV`, `EMNLP`, `NAACL`, `ACL FINDINGS`) small-caps left-inside. Looks like a Bootstrap demo, not a chip.

**Fix** (drop into `_yanjun-craft.scss` at end of `BUG #3` block):

```scss
.publications ol.bibliography li .abbr abbr {
  width: auto !important;
  max-width: max-content;
  inline-size: max-content;
  white-space: nowrap;
  display: inline-block !important;
}
```

Optionally also clear the column-width constraint so the abbr cell shrinks:

```scss
.publications ol.bibliography li .row .col-sm-2.abbr {
  flex: 0 0 auto;
  max-width: max-content;
}
```

After this fix, "EMNLP" renders as a tight ~70px chip, not a 130px rectangle.

### Gap #2 — Fraunces opsz axis is loaded but never tuned

**Diagnosis**: `<link href="...Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700">` requests the full opsz variable axis, but no CSS rule sets `font-variation-settings: "opsz" N`. Browser interpolates at the default (typically opsz=14), so 2.6rem h1 renders with the body-text variant of Fraunces. Linus Lee tunes opsz to 32-48 on display headings; this is the difference between "Fraunces is there" and "Fraunces is doing display work".

**Fix**:

```scss
h1 {
  font-variation-settings: "opsz" 48;
}
h2 {
  font-variation-settings: "opsz" 36;
}
h3, .post .desc, .about .desc, .post p.desc {
  font-variation-settings: "opsz" 24;
}
.bibliography li .title {
  font-variation-settings: "opsz" 18;
}
```

This explicitly maps each typographic role to an opsz value. Hero h1 will read meaningfully different from body — that's the magazine-grade jump.

### Gap #3 — Back-to-top button + pygments dark-mode native are al-folio leak-throughs

**Diagnosis**: dark mode loads `jekyll-pygments-themes-native.css` (pure `#000` bg for code blocks), and `#back-to-top` uses `rgba(0,0,0,0.4) bg + #fff text` from al-folio defaults — both ignore the warm-dark `#10110F` / `#1F1F1C` palette.

**Fix**:

```scss
#back-to-top {
  background-color: var(--global-divider-color) !important;
  color: var(--global-text-color) !important;
  backdrop-filter: blur(8px);
  border: 1px solid var(--global-divider-color);
}

html[data-theme="dark"] pre,
html[data-theme="dark"] .highlight {
  background-color: var(--global-code-bg-color) !important;
}
html[data-theme="dark"] pre code {
  background-color: transparent !important;
}
```

Optionally consider replacing `jekyll-pygments-themes-native.css` with `jekyll-pygments-themes-monokai-pro.css` or a custom warm-dark variant, but that's beyond CSS.

### Gap #4 — Hero h1 needs clamp() on mobile + balance text-wrap

**Diagnosis**: h1 at 2.6rem × 18px base = 46.8px. On 375px iPhone that's a 12-character-wide word — "**Yanjun** Chen" wraps as `Yanjun /n Chen` and looks unbalanced. On a 320px viewport (older devices) it's worse.

**Fix**:

```scss
h1 {
  font-size: clamp(2.0rem, 5.5vw + 1rem, 2.6rem);
  text-wrap: balance;
}
.post-title {
  text-wrap: balance;
}
```

This also adds proper text-wrap balance on the h1 itself (the `h1, h2, h3...` group already had `text-wrap: balance`, but no harm in re-asserting on `.post-title`).

### Gap #5 — Sage accent over-application (the v2 critique called it out and v3 only partially addressed)

**Diagnosis**: sage `#7A8868` appears on: text-decoration-color, blockquote border-left, focus outline, badge border, button hover bg, ::selection bg, social icon hover color, blockquote-italic text color, h2.year border (dead). That's 7-9 places. Karpathy uses **zero**; Tri Dao uses one (header link blue); Craig Mod uses 2 (link + section dividers).

Recommended cuts:
- Drop focus outline to a neutral (e.g., `var(--global-text-color)` 2px). Sage is concept-tied; focus is utility.
- Drop `[arXiv][Bib][Code]` button hover bg from full sage to `var(--global-divider-color)` — they're utility links, not narrative anchors.
- Drop blockquote border-left color to `var(--global-divider-color)` — let the italic text and indent do the emphasis.

**Fix**:

```scss
*:focus-visible {
  outline-color: var(--global-text-color);
}
blockquote {
  border-left-color: var(--global-divider-color);
}
.publications .bibliography li .links a.btn:hover {
  background-color: var(--global-divider-color) !important;
  color: var(--global-text-color) !important;
}
```

After these cuts sage lives on: link underlines + badge border + ::selection. **Three places. One narrative anchor (Environment-Centric AI).** That's Karpathy/Tri Dao restraint.

---

## Section 5: New regressions introduced by v3

### Regression #1 — Badge `.w-100` stretches venue badge to column width

**Severity**: HIGH (visible on every publication entry, on every viewport).

**Root cause**: Bootstrap's `.w-100 { width:100% !important }` wins because v3 abbr override declares `display:inline-block` (no `!important`) and never redeclares width. The badge HTML markup is shared al-folio `_layouts/bib.liquid` which writes `class="badge rounded w-100"`. v3 changed the visual treatment (transparent + sage border) but left the geometry broken.

**Visual evidence (computed style on /publications/ row)**:
- `width: 100%` (from Bootstrap `.w-100`)
- `display: inline-block` (from v3 abbr rule)
- `padding: 0.18em 0.55em` (from v3)
- → renders as a left-aligned text inside a stretched ~16% column-width box.

**Fix**: see Gap #1 above (`width: auto !important; max-width: max-content`).

### Regression #2 — `body::before` grain SVG at `z-index: 9999` covers ninja-keys modal, mathjax, dropdowns

**Severity**: LOW (functional, not blocking).

**Root cause**: `body::before { position: fixed; inset: 0; z-index: 9999; mix-blend-mode: multiply; opacity:0.025 }` sits ABOVE the navbar (z-index:1031), back-to-top (z-index:10), ninja-keys (custom element), and mathjax overlays. `pointer-events: none` means clicks pass through, so functionally fine. But the multiply blend at 2.5% opacity adds a barely-perceptible darkening to modals and the search box.

**Effect**: imperceptible (2.5% multiply ≈ +0.6% darkening on lit surfaces). Real impact = zero in practice. Flagged because z-index:9999 is reckless on principle.

**Fix** (optional):

```scss
body::before {
  z-index: 1;
}
.navbar,
ninja-keys,
.modal,
#back-to-top {
  isolation: isolate;
}
```

This re-anchors grain below the navbar layer; affected components form their own stacking context.

### Regression #3 — `prefers-reduced-motion` rule sets `* { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important }`

**Severity**: LOW (only affects users with reduced-motion preference).

**Root cause**: the catch-all `*` rule disables ALL transitions, including BG color transitions on theme-toggle. Users with reduced-motion who toggle dark/light will see an abrupt color flash with no fade. That's not strictly a regression — it's a tradeoff. Just flagging.

**Mitigation** (if you want to keep color transitions but kill transforms):

```scss
@media (prefers-reduced-motion: reduce) {
  .social .contact-icons a:hover,
  .social a:hover,
  .contact-icons a:hover {
    transform: none !important;
  }
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    /* keep transitions for color/opacity, only kill transform/movement */
  }
  *:not(html):not(body) {
    transition-property: color, background-color, opacity, text-decoration-color !important;
  }
}
```

### Non-regressions (verified safe)

- **`@media print`**: does NOT leak to screen. Verified — rules wrapped in `@media print { ... }` block.
- **`preconnect` to fonts.googleapis + fonts.gstatic**: CSP `font-src 'self' data: https:` allows it. CSP `style-src 'self' 'unsafe-inline' https:` allows the Google Fonts stylesheet. Confirmed via HEAD on the URL (200 + correct CORS headers).
- **Inline FOUC script for dark mode**: runs in `<head>` synchronously, sets `data-theme="dark"` BEFORE first paint. `initTheme()` runs later but is a no-op for the data-theme attribute (only updates toggle icon state). No FOUC.
- **News.liquid `max-height: 60vw` hack**: does NOT apply in this site's news.liquid (no `style="max-height"` rendered in HTML; the conditional from v2 critique was incorrect). Confirmed via grep on live HTML.

---

## Section 6: Marginal v4 improvements (only if you converge first)

Not relevant unless Section 4 gaps are closed and v3 → 8.5+. Listed for completeness:

1. **Replace profile portrait with monochrome / desaturated version**. The cleanest path to Karpathy-tier minimalism. Process the existing `prof_pic.jpg` with `convert prof_pic.jpg -colorspace Gray -modulate 100,80,100 prof_pic.jpg` (warm-desat) or a black-and-white version. This is asset work, not CSS.

2. **Drop `📧` emoji from `.profile .more-info`**, replace with Fontawesome envelope icon at `var(--global-text-color-light)`. Or just plain `yan-jun.chen@connect.polyu.hk` with no prefix. The emoji is a vernacular tic that fights the editorial tone.

3. **Add `view-transition-name: page` to `<main>` and define a cross-fade view-transition for SPA-like navigation**. Modern Chromium/Safari supports this. The site is multi-page (about/blog/publications/projects); a 200ms cross-fade between pages would land it in "magazine-grade" territory next to Linus Lee.

```scss
@view-transition { navigation: auto; }
::view-transition-old(root) { animation-duration: 180ms; }
::view-transition-new(root) { animation-duration: 220ms; }
```

These are all nice-to-haves. They don't move the score above ~9.0.

---

## Bottom line

**v3 ships cleanly and fixes the v2 leak-throughs.** The cascade is right. The selectors are right. The print stylesheet is right. The reduced-motion handling is right. The footer is fixed.

**v3 does not yet ship next to Karpathy / Tri Dao without flinching** because the venue badge `.w-100` width is unmanaged (it visually undermines the second-most-prominent block on the homepage), and the sage accent is still over-applied. Both are 1-3-line CSS fixes documented in Section 4.

**Recommendation**: do not call this converged. Patch Gap #1 (`width: auto !important` on the abbr), then re-grade. With that single patch v3 → ~8.3. Add Gaps #2-5 patches and v3 → 8.7-9.0 ("indistinguishable from best-in-class academic homepages").
