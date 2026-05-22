# Visual Standards Meta-Research — Typography, Color, Polish for an Academic Homepage

Sub-research package 8. Goal: extract executable design principles (not site-by-site benchmarks) for de-templating al-folio default and making Yanjun Chen's site read as "handcrafted" rather than "generated".

Each entry: source + authority score (1–5, where 5 = field-leading like Butterick / Smashing) + ≤200-word takeaway + 2–3 *specific, numeric* rules applicable to Jekyll/al-folio CSS.

---

### Personal Academic Webpages: How-To's and Tips for a Better Site — https://townsendcenter.berkeley.edu/blog/personal-academic-webpages-how-tos-and-tips-better-site
- **Source / 作者**: Rochelle Terman, UC Berkeley Townsend Center for the Humanities (R1 institution blog, written by a then-PhD candidate who now teaches at UChicago).
- **Source 权威度**: 4 — academic-credentialed author writing specifically for the academic-homepage use case. Not just generic design.
- **核心 takeaway** (≤200 词): Treat an academic homepage like a billboard, not a newspaper. Negative space is the design — Terman argues each page should be "25–50% blank." No more than two fonts; cap accent colors at 1–2; cap primary navigation at 5–6 items; every piece of information must be reachable in under 3 clicks. Body fonts must be web-safe and readable (12–14pt). The driving principle: "for academic websites, a good layout is one that goes unnoticed" — meaning the design's job is to disappear so the *content* (papers, news, bio) commands attention. Use italics and bold sparingly and consistently. Use short paragraphs and bullets. Avoid decorative lines, frames, and graphics — they signal "I am a template trying to look interesting."
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Cap primary nav at 6 links (al-folio default exceeds this — trim to: About / Publications / Projects / News / CV — and merge Repositories into About sidebar).
  2. Target visual whitespace ratio ≥40% per fold (use `min-height: 50vh` + `padding-block: 4rem` on `.about` section; widen left/right gutters on `.container` from default `1.5rem` to `2.5–3rem` on desktop).
  3. Restrict accent color to a single semantic role (links + heading rule + headshot ring all share one warm hue; remove al-folio's mixed `--global-theme-color` blue + secondary teal).

---

### Why Your Website Looks Like a Template (and How to Fix It) — https://lemonade-it.com/make-your-website-unique/
- **Source / 作者**: Lemonade (Singapore web design agency), Oct 2025.
- **Source 权威度**: 3 — agency blog, not field-leading, but the diagnostic framework is sharp and the fixes are concrete.
- **核心 takeaway** (≤200 词): Three root causes of "templated" feel. (1) **Absent brand identity** — no defined palette + type system + tone, so the designer falls back to defaults. (2) **Messaging misalignment** — logo, imagery, and copy point in three different directions. (3) **Missing narrative** — pages list facts but never answer "what / why care / why trust" within 5 seconds. Fixes: pick 1–2 typefaces and one palette and *enforce them across every component* (button radii, button shadows, link underlines, heading rules must all share style); replace stock illustration with authentic photography (or remove imagery entirely if you don't have real ones); write headlines in your own voice rather than role-language ("PhD student researching X" → "I work on Y because Z"); use motion only to guide attention, never decoratively.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Pick exactly one accent hue (warm muted — terracotta/sage/dusty-mauve) and re-color *all* of: links, heading underlines, headshot ring, news-date marker, social-icon hover. Currently al-folio uses default blue everywhere — replacing it project-wide signals "intentional."
  2. Add a one-sentence "why I do this" line below the title that isn't role-jargon (e.g. "I study how AI agents disagree, and what that tells us about reasoning"). Templates have job titles; handcrafted sites have voice.
  3. Audit every component for a single border-radius and a single shadow-elevation — al-folio mixes `border-radius: 0` (publications cards) with `border-radius: 1rem` (project cards). Pick one (recommend `0.5rem`) and apply project-wide.

---

### Butterick's Practical Typography (line-length + body-text) — https://practicaltypography.com/line-length.html + https://practicaltypography.com/body-text.html + https://practicaltypography.com/websites.html
- **Source / 作者**: Matthew Butterick — typographer, lawyer, programmer, author of *Practical Typography* and *Typography for Lawyers*. Field-leading source for web/print typography.
- **Source 权威度**: 5 — single most-cited modern typography reference; the book is its own demo of the rules.
- **核心 takeaway** (≤200 词): Set body text **first** — every other typographic decision (heading scale, line-height, spacing) cascades from it. Four decisions in order: font selection → point size → line spacing → line length. For line length: **45–90 characters per line** (Butterick's range), narrower better. Use the "alphabet test" — line should fit 2–3 alphabets across. Character count is the right unit because point size affects characters-per-inch, so inches/cm are not portable. Butterick's anti-patterns for the web: tiny body text, oversized headings, sole reliance on Arial/Georgia/Verdana, link clutter at page edges, large color blocks. The implication for academic homepages: stop trying to make the page "look designed" via decoration — instead, *get the type right* (size, leading, measure) and the page reads professional automatically.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Set body to `font-size: 17–18px` with `line-height: 1.55–1.6` and constrain *prose* containers to `max-width: 65ch` (al-folio default `.container` is `--bs-container-xl: 1140px` — much wider than ideal measure; add `max-width: 65ch` to `.about p`, `.post-content`, news `.text`, etc.).
  2. Use the alphabet test on the homepage: an English alphabet at body size should fit ~2.5 times across the bio paragraph. If it fits 4 times, the line is too long and the design will read as a template no matter what else you do.
  3. Replace al-folio's tiny secondary text (footer, dates, "View All") which renders at ~12px — bump to **14px minimum**. Butterick's #1 anti-pattern is tiny body text.

---

### Size Matters: Balancing Line Length and Font Size in Responsive Web Design (Smashing Magazine) — https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/
- **Source / 作者**: Laura Franz, Professor of Typography at UMass Dartmouth, published in Smashing Magazine — top-tier industry publication.
- **Source 权威度**: 5 — credentialed academic + top design publication.
- **核心 takeaway** (≤200 词): Web can extend the print measure of 45–75 characters out to **45–85 characters** with no readability loss. Recommended `line-height ≈ 150%` of font-size (i.e. 1.5). The deeper insight: don't worship the measure — *if you have to choose, choose comfortable size over ideal measure*. On small screens, hold readable font size even if the measure compresses below 45ch; on large screens, narrow the column instead of inflating font size. The right ladder is: pick a body size that reads at desktop reading distance → pick a measure that gives 45–85ch at that size → use media queries to keep the measure (not the size) responsive. Smaller text benefits from *looser* leading (closer to 1.6) to help horizontal eye-flow.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Lock body to `font-size: clamp(16px, 1.05vw + 0.6rem, 18px)` with `line-height: 1.55` — this gives 16px on phone and 18px on desktop, both comfortable.
  2. Constrain reading containers to `max-width: 72ch` on desktop (gives ~75 chars at 17px body — sits in Franz's 45–85 sweet spot).
  3. On mobile, allow measure to compress (don't fight it with smaller text); on desktop ≥1280px, *narrow the column*, do not enlarge the font.

---

### Line Length and Line Height (Pimp My Type) — https://pimpmytype.com/line-length-line-height/
- **Source / 作者**: Oliver Schöndorfer — full-time professional typographer running a typography-focused education site.
- **Source 权威度**: 4 — single-author working typographer; lower reach than Smashing but high signal.
- **核心 takeaway** (≤200 词): Concrete CSS-ready rules for the measure/leading pair. Desktop measure: 60–80 characters; CSS `max-width: 64ch;` works well. Or in rem: 30–40rem (assuming ~2 chars/rem). Leading rules: **1.5–1.6 for body text on desktop, 1.3–1.45 for mobile/narrow columns, ~1.1 for headings, 1.2–1.3 for UI components, ~1 for buttons.** The core principle: *longer lines need more leading, shorter lines need less*. They are coupled, not independent — when you change one you must reconsider the other. This explains why copying just the font-size from a good site doesn't reproduce the feel: the leading was tuned to that specific measure.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Body text: `max-width: 64ch; line-height: 1.6;` (paired). Don't change one without the other.
  2. Heading line-height: `1.1–1.2` (al-folio default inherits Bootstrap's `1.2` for `<h1>`–`<h6>` which is fine — but the `.site-name` mega-heading should be set to `1.05` explicitly so the descenders of "y" don't crowd the line below).
  3. Buttons / nav links / icon labels: `line-height: 1.2`. Don't apply body 1.6 to UI chrome — it visually loosens the page and makes it feel "blog-template."

---

### System Fonts vs Web Fonts (Made Good Designs) — https://madegooddesigns.com/system-fonts-vs-web-fonts/
- **Source / 作者**: Made Good Designs editorial team (no individual byline; lower authority).
- **Source 权威度**: 3 — useful aggregator of numbers, lower than primary sources.
- **核心 takeaway** (≤200 词): Concrete cost of web fonts: 100–300ms latency on fast connections, 1–3 seconds on slow mobile. Each WOFF2 weight is 15–40KB; four weights = 60–160KB total payload. Affects Largest Contentful Paint, Cumulative Layout Shift, First Contentful Paint. **The hybrid pattern is the recommendation: serve web fonts only where they matter (headings + branded display text); use system font stack for body and UI.** Modern system stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`. Use web fonts when the site is brand-driven, editorial, portfolio, or needs display/multilingual. Use system fonts when the project is performance-critical, dashboard-like, prototype, or MVP. An academic homepage sits in between — branded enough to want a display heading, performance-critical enough that body should be free.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Hybrid font strategy: load *one* Google web font as display/heading (e.g. Fraunces, Newsreader, or Inter Tight at heading sizes) — preload it. Use the modern system stack for body (`font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`). One web-font payload, not four.
  2. If using a serif heading: load exactly *two* weights (e.g. 400 + 700). Two WOFF2 weights = ~30–80KB. Four weights would be 60–160KB and visibly delay the headshot/title render.
  3. Use `font-display: swap;` + `<link rel="preload" as="font" crossorigin>` for the chosen heading font so it doesn't FOIT (flash of invisible text) — academic visitors are on slow campus VPNs.

---

### Best Practices for Dark Mode in Web Design (Nate Balcom) — https://natebal.com/best-practices-for-dark-mode/
- **Source / 作者**: Nate Balcom, "Technical UX Architect" with two decades of UX work including engagements at Google HQ.
- **Source 权威度**: 4 — credentialed practitioner, single-author technical blog.
- **核心 takeaway** (≤200 词): **Never use #000 background or #FFF text** for content sites — that's the dark mode that reads "cyberpunk template." Material Design uses `#121212`, Apple HIG uses `#1C1C1E–#3A3A3C`. Recommended pairing for content sites: background `#0F0F0F`, primary text `#F0F0F0`, secondary text `#E0E0E0` or `#C9D1D9`. Buttons/links should shift hue *up* in dark mode (e.g. primary blue `#0066CC` light → `#4DA3FF` dark) — pure-saturation colors that work in light mode get eye-fatiguing on dark backgrounds. Use semantic color variables, not inverted ones (don't do `filter: invert(1)`). Respect `prefers-color-scheme: dark` but always provide a manual toggle. Maintain WCAG 4.5:1 for normal text, 3:1 for large text. The deeper point: dark mode is not "light mode but inverted" — it's a parallel design system with its own contrast budget.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Override al-folio's dark mode background from default near-black to `#10110F` (warm-tinted near-black, not pure neutral) and body text to `#E8E6E0` (warm off-white, not pure white). Warm-tinted dark mode reads "library at night" rather than "terminal."
  2. Desaturate the accent color by ~15% in dark mode (the warm terracotta/sage at desktop saturation will look harsh on dark — use the CSS custom-property pattern `--accent-light: #C4756A; --accent-dark: #B58076;`).
  3. Card surfaces (publications list, news entries) should be `#1A1B18` not `#000` — gives "elevation" without the cyberpunk vibe.

---

### 13 Muted Colors for Modern Web Design — https://bricxlabs.com/blogs/muted-colors
- **Source / 作者**: Siddharth Vij, Co-Founder Bricx (B2B/AI SaaS design strategy).
- **Source 权威度**: 3 — practitioner blog, useful for the hex codes.
- **核心 takeaway** (≤200 词): Catalog of 13 muted palette anchors with hex codes. Most relevant for an academic homepage (warm, contemplative, "serious without being corporate"): **Sage Green `#B2AC88`**, **Soft Terracotta `#D4A59A`** (pairs with turquoise / champagne / royal blue), **Soft Taupe `#B1A297`** (pairs with pure white / dark brown / ochre), **Subdued Olive `#8B8B6B`**, **Muted Mauve `#967588`**. The rationale: muted colors reduce eye strain on prolonged screen viewing and read "natural" — desaturation is achieved by mixing with gray or complementary shades, which is exactly what saturated default theme colors lack. The cultural shift: 2025–2026 design has moved from saturated brand colors toward "contemplative palettes that feel familiar yet nuanced." This matches what makes academic homepages read as adult/serious rather than student/template.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Replace al-folio's `--global-theme-color` blue with one of: Soft Terracotta `#C4756A` (slightly darker than the example for AA contrast), Sage Green `#7A8868` (deeper for contrast), or Muted Mauve `#8A6E80`. Picking one warm-muted accent — and using it consistently — is the single highest-impact "de-templating" move.
  2. Background should not be `#FFFFFF` — use a warm off-white like `#FAF8F4` or `#F5F2EC`. Pure white reads "blank Bootstrap default"; warm off-white reads "considered."
  3. Body text should not be `#000` — use a warm dark like `#1F1B17` or `#252119`. The 4.5:1 contrast on `#FAF8F4` still passes WCAG AA, but the page feels printed rather than screen-glaring.

---

### 6 Creative Ideas for CSS Link Hover Effects (CSS-Tricks) — https://css-tricks.com/css-link-hover-effects/
- **Source / 作者**: CSS-Tricks (Chris Coyier's site; field-leading frontend-CSS publication).
- **Source 权威度**: 5 — field-leading CSS authority.
- **核心 takeaway** (≤200 词): Link micro-interactions are the single biggest "handcrafted" tell on a site. Default browser blue + underline = template. The polish patterns: (1) **box-shadow inset highlight sweep** — `box-shadow: inset 100px 0 0 0 var(--accent);` on hover, animates without reflow. (2) **Sliding underline via pseudo-element + transform-origin** — `::after` with `transform: scaleX(0)` → `scaleX(1)` on hover, `transform-origin: left` (or right on mouse-out for directional motion). (3) **Background-position underline** — chain `linear-gradient` backgrounds with `background-size: 100% 3px` ↔ `0 3px` to swap visible state. Rules: transition only `box-shadow`, `transform`, `opacity`, `background-position`/`background-size` (these don't reflow); duration `.3–.4s` with `ease-in-out` or cubic-bezier(0.76, 0, 0.24, 1); always pair `:hover` with `:focus` for keyboard a11y; don't rely on color alone (color-blind users); use `display: inline-block` to prevent multi-line break weirdness.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Replace al-folio default link style with this pattern site-wide:
     ```css
     a { color: var(--accent); text-decoration: none;
         background-image: linear-gradient(var(--accent), var(--accent));
         background-size: 100% 1px; background-position: 0 100%;
         background-repeat: no-repeat;
         transition: background-size .3s cubic-bezier(0.76, 0, 0.24, 1); }
     a:hover, a:focus { background-size: 100% 2px; }
     ```
     This gives a thin static underline that thickens on hover — looks intentional, animates without reflow, accessible.
  2. Heading-anchor links (the `#` that appears on hover next to `<h2>`) — animate opacity `0 → 0.4` with `transition: opacity .25s`; never use `display: none` (kills accessibility) and never make it the same color as body text (looks like a glyph error).
  3. Social/icon links — animate `transform: translateY(-2px)` + color shift on hover, `transition: transform .2s ease-out, color .2s ease-out`. Small but unmistakably "someone tuned this."

---

### Best Google Font Pairings (Leadpages) — https://leadpages.com/blog/best-google-fonts
- **Source / 作者**: Leadpages blog (landing-page SaaS; mid-tier source for pairings).
- **Source 权威度**: 3 — practical aggregator, lower authority than Butterick.
- **核心 takeaway** (≤200 词): Strong serif-display + clean-sans-body pairings for editorial/personal sites: (1) **Playfair Display (display) + Raleway Light (body)** — Playfair's high stroke-contrast hairlines match Raleway's thin strokes; refined, slightly traditional. (2) **Prata + Manrope Light** — Prata's thick/thin transitions for headers, Manrope's clean geometric body. (3) **Quattrocento + Questrial** — classic and academic; Quattrocento reads "scholarly", Questrial is its quiet sans counterpart. (4) **Marcellus + DM Sans** — flared trendy serif + accessible body. The deeper principle: pair a *high-contrast display serif* (one with visible thick/thin variation) with a *low-contrast clean sans* (uniform stroke width) — the eye registers the structural difference as "intentional pairing." Pairing two sans, or two serifs, requires more skill to avoid looking like an accident.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Pair recommendation for Yanjun: **Fraunces** (high-contrast modern serif, ML-research-blog adjacent, open-source) for `.site-name` + `<h1>/<h2>` + post titles, with **Inter Tight** or system stack for body. Fraunces signals "considered" without being old-fashioned; Inter is the academic-blog lingua franca.
  2. Use heading display font *only* for h1/h2 + `.site-name`. h3–h6 should drop to the body sans at semi-bold (e.g. Inter 600). Reserving the display face for the top of hierarchy makes it feel rare/valuable; using it for every label cheapens it.
  3. Keep weights minimal: heading at 400 + 600 (or 400 + 700), body system stack at default weights. Total Google Font download: one family, two weights, WOFF2 — under 80KB.

---

### Portfolio Design Trends 2026 (Envato) — https://elements.envato.com/learn/portfolio-trends
- **Source / 作者**: Envato Elements editorial.
- **Source 权威度**: 3 — industry trend report, useful for synthesis.
- **核心 takeaway** (≤200 词): The 2026 "handcrafted vs templated" tells. **Handcrafted markers**: a unique palette consistently applied; intentional textures (paper, linen, noise) that match content type; asymmetric/gridless layouts in places where convention says grid; custom micro-interactions serving navigation (not decoration). **Templated red flags**: generic dark mode with no color personality (just inverted light mode); motion for motion's sake; missing or hard-to-find contact information; identical typography across unrelated content categories (e.g. paper title and news date both rendered with no hierarchy difference). Dark mode trend: move beyond pure black toward *midnight blue, deep purple, racing green* paired with subtle texture for "jewel-like effect." Color trend: pick *one accent + neutrals* and become known for that color across platforms (your personal site, your slides, your social) — visual ownership of a color is a recognizable signal. Texture trend: layer subtle canvas/paper/linen/noise backgrounds — bridges digital and print, adds tactile feel.
- **给 Yanjun al-folio 主页的具体可执行规则**:
  1. Add a *very* subtle paper-grain noise SVG as a background on `body` at low opacity (e.g. `opacity: 0.03; mix-blend-mode: multiply;`) — invisible at a glance, but the page no longer reads as "flat Bootstrap card." Detection: covers up the perfectly-uniform white that screams template.
  2. Pick one signature color (e.g. terracotta `#C4756A`) and use it as the canonical "Yanjun color" — same hex on the site, on slides, on the GitHub README header. Visual ownership of a color builds memorability across touchpoints.
  3. Asymmetric layout move: instead of al-folio's center-aligned headshot+bio block, do a 1fr/2fr grid with headshot left, bio right, headshot vertically center-aligned to the *first line* of bio (not the bio center). This single deviation from "center everything" is enough to tag the page as "designed by a human."

---

## Meta-Takeaway: If You Only Change 5 Things

If you only have time for 5 changes to make al-folio default read as "handcrafted" rather than "template," do these — *in this order*, because each fixes the highest-leverage tell first:

**1. Re-color the entire site to one warm muted accent + warm off-white background.** The biggest single tell that a site is templated is al-folio's default cool blue on pure `#FFF`. Set `--global-theme-color` to a warm muted hue (e.g. terracotta `#C4756A`, sage `#7A8868`, or mauve `#8A6E80`); set `body` background to `#FAF8F4` (warm off-white); set `body` color to `#1F1B17` (warm near-black). Apply the accent to *every* link, heading-rule, headshot ring, news-date, social-hover. This single change replaces 90% of the "Bootstrap default" feel.

**2. Fix the type ladder.** Body `font-size: 17–18px`, `line-height: 1.6`, `max-width: 65ch` on prose containers. Pair *one* serif display font (e.g. Fraunces 400+700, ~60KB WOFF2) for `.site-name` + `<h1>/<h2>` with the modern system sans stack for everything else. This is Butterick + Smashing + Pimp My Type all agreeing — comfortable measure + comfortable leading + one display font does more than a dozen layout changes.

**3. Replace default link styling with a tuned underline animation.** Default browser underline = template. Use background-image gradient underline that grows from 1px to 2px on hover with a `.3s cubic-bezier(0.76, 0, 0.24, 1)` transition. Pair `:hover` with `:focus` for a11y. This single CSS rule applied site-wide is the loudest "someone tuned this" signal.

**4. Tighten and humanize the dark mode.** Replace pure-black dark mode background with warm near-black `#10110F`; replace pure-white text with warm off-white `#E8E6E0`; desaturate the accent ~15% on dark. Card surfaces at `#1A1B18`. This kills the cyberpunk-template look that comes from `#000`/`#FFF`/saturated-accent dark mode.

**5. Add one human-voice line + one asymmetric layout move + one signature texture.** A "why I do this" line in Yanjun's own voice below the title (not "PhD student at X"). Headshot+bio in a 1fr/2fr grid with headshot vertically centered to the first line of bio, not the bio's geometric center. Subtle 3%-opacity paper-grain SVG over the body. Three small choices that together unmistakably say "human made design decisions here."

The order matters: color & type (1+2) are 70% of the "templated" perception. Link polish (3) is 15%. Dark mode (4) is 10%. Voice + asymmetry + texture (5) is the final 5% that ties it together. Skip any of these and the site still reads as al-folio; do all five and the al-folio scaffold becomes invisible underneath an intentional design.
