# Visual Research — Group 1: Top-Craft AI/ML Researcher Homepages

Source: live HTML + CSS fetched via Invoke-WebRequest (raw, not LLM-summarized).
Date: 2026-05-22. Yanjun Chen baseline = al-folio default (white / system sans / blue links / circular avatar / ~800-900px max-width / hr dividers).

---

### Andrej Karpathy — https://karpathy.ai/
- **视觉品质打分**: 5/5
- **整体审美 vibe**: "Engineer wrote this by hand" — zero frameworks, asymmetric two-column hero, vertical timeline with company logos as bullet glyphs. Reads like a CV designed by a typographer, not a template.
- **Typography**:
  - Body: `font-family: sans-serif` (literally the system default — but it works because everything else is so tight)
  - Body size: `16px / line-height 1.4`
  - `h1` (name): **`34px / font-weight: normal`** — note the **non-bold** name (rare; reads as confident understatement)
  - `h2` (tagline): **`18px / italic / color: #999`** — italic muted gray subtitle is the signature move
  - Section titles `.ctitle`: `36px`, `margin-top: 40px / margin-bottom: 20px`
  - Timestamp column `.timespan`: `14px / color: #bbb / text-align: right` — extremely subtle
- **Color palette**:
  - bg: `#ffffff` (pure white)
  - body text: `#333`
  - subtitle muted: `#999`
  - timeline dates: `#bbb` (very light)
  - timeline rail / dots: `#cfcfcf` (light gray)
  - publication venue: `#090` (green accent — only place color appears, only on `.pub-venue`)
  - publication left border: `4px solid #aaa`
  - No dark mode. Single explicit color. Restraint is the design.
- **Layout / spacing**:
  - `.container { width: 970px; }` at ≥992px, full-fluid below
  - 12-column CSS grid (`display: grid; grid-template-columns: repeat(12, 1fr)`) — handcrafted, no Bootstrap
  - Hero: `#dpic` spans 6 cols (right-aligned img), `#ddesc` spans 6 cols with `padding-top: 40px; padding-left: 20px`
  - Avatar: **240×240 px, `border-radius: 120px` (perfect circle)** — big, not tiny
  - Mobile breakpoint at 991px: both stack to span 12, centered
- **Hero / first-screen 视觉**:
  - Left half: large circular photo
  - Right half: name + italic muted tagline + horizontal row of monochrome SVG social icons (40×40), email reveal-on-click (`opacity: 0` → `transition: opacity 0.7s`)
  - Below hero: a gradient `<hr>` (see micro-craft) then immediately into the timeline
- **Micro-craft (精致细节)**:
  - **Gradient hr** — not a flat line: `background-image: linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0))`. Fades in/out instead of stopping abruptly. Single sharpest visual detail on the whole site.
  - **Timeline rail with dots**: `.ico` has `border-left: 2px solid #cfcfcf`, and each entry has `.entry-dot` (10×10 circle, `border: 2px solid white`) positioned `left: -8px` so the dot sits *over* the rail. Vertical history reads as a real timeline, not bullet list.
  - **Email reveal-on-click**: `#demail { opacity: 0; transition: opacity 0.7s; }` — anti-bot + delightful interaction.
  - **`h1 { font-weight: normal }`** — counter-default move, signals taste.
  - **Publication blocks**: `border-left: 4px solid #aaa`, only venue is colored (`#090`).
- **3 条可借鉴**:
  1. **Gradient hr divider** — drop in immediately as one CSS rule. Replace al-folio's flat `<hr>` with the linear-gradient version. Single biggest "polish" win for 4 lines of CSS.
  2. **Vertical timeline with rail + dots** for the News / Experience section. Build with CSS grid (`.timespan` 1 col, `.ico` 1 col with left border, `.desc` 10 cols). Far more memorable than al-folio's `<ul>` news list.
  3. **`h1 { font-weight: normal }` + italic muted `h2` tagline at `#999`** — costs nothing, reads as confident craft. The default al-folio is bold name + same-color tagline, which feels generic.

---

### Tim Dettmers — https://timdettmers.com/
- **视觉品质打分**: 2.5/5
- **整体审美 vibe**: WordPress Genesis Framework blog. Clean, readable, but visibly template-driven. Strong color accent and big typography save it from being forgettable.
- **Typography**:
  - Body: **`font-family: Lato, sans-serif`** (imported via Google Fonts: `Lato:300,400,700`)
  - Body weight: `font-weight: 300` (Light) — gives the page an airy feel
  - Body size: `18px / 1.8rem`, **`line-height: 1.625`** (generous)
  - Root font-size: `62.5%` (so 1rem = 10px — classic Genesis trick for easier math)
  - `h1`: `36px / 3.6rem / font-weight: 400` (Regular, not Bold)
  - `h2`: `30px`, `h3`: `24px`, `h4`: `20px` — clear scale ratio of ~1.25
  - `.entry-title` (post titles): `36px / 3.6rem` with hover `color: #c3251d`
- **Color palette**:
  - bg: `#f5f5f5` (warm off-white, NOT pure white)
  - body text: `#333`
  - **accent / links: `#c3251d`** (a deep brick red — signature color of the site)
  - link hover: `color: #333; text-decoration: none` (red → black on hover, removes underline)
  - hr: `border-top: 1px solid #ddd`
  - No dark mode.
- **Layout / spacing**:
  - `.site-inner, .wrap { max-width: 1200px }`
  - `.content { width: 800px; float: right }` + `.sidebar-primary { width: 360px; float: right }` — classic 800 + 360 two-column with sidebar
  - `padding: 16px 24px` on buttons; `margin-bottom: 40px` on archive/author boxes
- **Hero / first-screen 视觉**:
  - Site header has site-title (`Tim Dettmers`) + tagline (`Making deep learning accessible.`)
  - No big hero photo on the index; goes straight to the blog post list
  - Sidebar widget showing category counts (Academia 4, Deep Learning 7, Hardware 8…) — gives the page visual rhythm
- **Micro-craft**:
  - **Single saturated accent color** (`#c3251d` brick red) used for: all links, button hover, post-title hover. Everything else is gray. This monochrome-plus-one-color is the polish.
  - `font-weight: 300` body is unusual (most sites use 400) and feels lighter / more editorial.
  - `transition: all .1s ease-in-out` on links/buttons — fast, snappy hover.
  - `blockquote:before { content: "\201C"; font-size: 30px }` — adds a big curly opening quote glyph.
- **3 条可借鉴**:
  1. **Off-white background (`#f5f5f5`) instead of pure white** — warmer, more "editorial / academic journal" feel. al-folio default is `#fff`; just changing this one variable changes the page mood.
  2. **One saturated accent color used everywhere** (links, hover, dividers). Pick ONE color (Yanjun could use a research-blue or a warm rust); reject al-folio's default Bootstrap blue. Discipline of monochrome + one color = academic gravitas.
  3. **Google Font `Lato` at `font-weight: 300` for body + `400` for headings** — light-weight body is the look. Or substitute Inter/Source Sans 3 at 300/400. Avoid system-ui-only.

---

### Lex Fridman — https://lexfridman.com/
- **视觉品质打分**: 3.5/5
- **整体审美 vibe**: WordPress TwentyTwelve child theme, narrow centered column, very text-first. Looks like a 2010s academic homepage that aged well because the typography choices are good. **Most academically vibey** of the five.
- **Typography**:
  - **`@import "Raleway"` + `@import "Ubuntu"`** from Google Fonts (custom font choice = the main visual lift)
  - Site title (`.entry-title`): **`font-family: "Ubuntu", sans-serif / font-size: 34px / font-weight: normal`**
  - `h3`: **`font-family: "Raleway" / font-size: 26px / font-weight: normal`**
  - Body uses TwentyTwelve's default Open Sans (`fonts/font-open-sans.css`)
  - `.type-post .entry-header .entry-title { font-size: 28px }`
- **Color palette**:
  - body text: `#000000` (pure black, not `#333`)
  - link default (visited): `#21759b` (WordPress default blue)
  - **link hover: `#00b6ff` (bright cyan-blue)** — the only "interactive" pop
  - `.hobby-description`: `#797979` (gray annotation text)
  - `.pubs .pub .tldr`: `#666666` (muted summary)
  - `.pubs .pub .tldr .pre-label`: **`#8c0000` (deep burgundy red, italic)** — used for "TL;DR:" pre-labels on publications
  - `h2 { color: #9c0505 }` on transcript category pages — same dark red accent
  - bg: white
- **Layout / spacing**:
  - `div#main { max-width: 700px; margin: auto }` — **very narrow center column** (al-folio default is wider)
  - `.wide`, `.big-display`, `.size-x-large`: at ≥960px, `margin-left: -130px; margin-right: -130px; width: 960px` — selected elements break out wider than the text column
- **Hero / first-screen 视觉**:
  - `.intro .lex-img { float: left; width: 135px }` + `.intro .lex-img img { width: 120px }` — **small** square headshot floated left
  - `.research-interests { display: block; margin-left: 135px }` — text wraps to right of photo
  - Hyphenation disabled in intro: `.no-hyphenation { hyphens: none }` — keeps name and URLs clean
  - No huge hero — just photo + dense info block. Old-school personal homepage energy.
- **Micro-craft**:
  - **Custom Google fonts for headings only** (Ubuntu + Raleway) while body stays Open Sans — heading/body font pairing is the polish.
  - **Dark burgundy red (`#8c0000`)** for italic "pre-labels" on publication TL;DRs. Looks like marginalia in a journal.
  - **Narrow 700px text column** — forces high line-density, looks like a paper. Major contrast from al-folio's wider default.
  - `.pubs .pub .title { font-weight: bold }` + `.tldr` color shift is the publication-card pattern.
- **3 条可借鉴**:
  1. **Narrow content column (700px) is permission-granting** — if Yanjun's content is dense and text-heavy, narrower (~720-760px) actually reads more academically than wider. Counter-default.
  2. **Heading-only custom font, body stays default** — pair (e.g.) `Inter` or `Source Serif 4` for h1/h2 with system-ui body. Cheap upgrade, big perceived craft.
  3. **Burgundy-red italic pre-labels on publications** — `.pub .pre-label { color: #8c0000; font-style: italic }` for "TL;DR:" / "Selected:" / "[Best Paper]:" markers. Makes the pub list scannable AND feels like an editor's red pencil.

---

### Sebastian Raschka — https://sebastianraschka.com/
- **视觉品质打分**: 4.5/5
- **整体审美 vibe**: The most "modern designed" site of the five. CSS custom properties, light/dark theme system, sticky header that hides on scroll, branded title with bicolor "Sebastian Raschka" (black + UW-Madison crimson red). Reads like a serious blog/product site.
- **Typography**:
  - System defaults — no Google Fonts imported in main CSS (theme.css). Probably falls back to Helvetica via combined CSS (`font-family: Helvetica, Arial, sans-serif` seen on `.header-search`).
  - Heading colors driven by CSS variable `--color-heading: #101828` (near-black)
  - **CSS custom properties throughout** — the entire color system is variables.
- **Color palette** (light theme — extracted verbatim from `:root`):
  - `--color-bg: #ffffff`
  - `--color-surface: #ffffff`
  - `--color-elevated: #f7f9fc` (very subtle blue-tinted card bg)
  - `--color-text: #111111`
  - `--color-text-muted: #4b5563` (slate-600)
  - `--color-heading: #101828` (slate-900)
  - `--color-link: #0479a8` (teal-blue)
  - `--color-link-hover: #005a7c` (darker teal)
  - `--color-border: #e5e7eb`
  - `--color-border-strong: #d1d5db`
  - `--color-code-bg: #f9f9f9`
  - `--color-inline-code-bg: rgba(4, 121, 168, 0.12)` (translucent link-color)
  - `--color-inline-code-text: #be616a` (rose)
  - `--color-accent: #c5050c` (UW-Madison crimson — appears on the last name)
  - `--color-title-first: #000000` (first name black)
  - `--color-title-last: #c5050c` (last name crimson)
  - `--shadow-soft: 0 10px 25px rgba(15, 23, 42, 0.08)`
- **Color palette (dark theme)**:
  - `--color-bg: #0d1117` (GitHub-dark equivalent)
  - `--color-surface: #101929`
  - `--color-elevated: #132238`
  - `--color-text: #e5e7eb`, `--color-heading: #f8fafc`
  - `--color-link: #7dd3fc` (sky-300), `--color-link-hover: #38bdf8`
  - `--shadow-soft: 0 18px 40px rgba(8, 47, 73, 0.45)`
- **Layout / spacing**:
  - Sticky header (`position: sticky; top: 0; z-index: 10`) with hide-on-scroll-down via `.site-header--hidden { transform: translateY(-100%) }`
  - Border-radius scale: `4px` (code), `8px` (buttons), `10–12px` (cards), `999px` (pills, toggle, icon buttons)
  - Standard `--transition-speed: 0.25s ease` on all interactive elements
  - Content-stack utility: `.content-stack > * + * { margin-top: 1.5rem }` and `.content-stack--roomy > * + * { margin-top: 3rem }`
- **Hero / first-screen 视觉**:
  - Sticky header with **bicolor site title** (Sebastian black + Raschka crimson), social icons (X / LinkedIn / GitHub) as 20×20 monochrome icons swapping light/dark variants
  - Pill-shaped dark-mode toggle with sliding thumb (30×14 track, 10×10 thumb that translates 16px on toggle)
  - Search icon button (32×32, `border-radius: 999px`) that expands a 420px-wide pill-input panel below
  - Below header: intro section with photo + CTA buttons ("Start Here" / "Best Articles" as 40px-tall pill buttons with `border: 1px solid var(--color-border-strong); border-radius: 8px`)
- **Micro-craft**:
  - **Bicolor name in header** — single most distinctive visual signature. First name in heading color, last name in accent color.
  - **CSS variable design system** — every color is a token. Enables light/dark with `:root[data-theme='dark']` overrides.
  - **Sticky header that hides when scrolling down** (translateY -100%) — modern feel.
  - **Translucent inline code background** (`rgba(4, 121, 168, 0.12)` = link color at 12% alpha) — inline code visually rhymes with link color.
  - **`box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08)`** soft shadow token used on focus rings, panels, dropdowns. Soft, large radius, low alpha — modern.
  - **Theme toggle persists in `localStorage`** + reacts to `prefers-color-scheme: dark` if no preference set + dispatches custom `themechange` event.
  - **Focus rings: `outline: 2px solid rgba(4, 121, 168, 0.35); outline-offset: 2px`** — accessible without being ugly.
- **3 条可借鉴**:
  1. **CSS custom properties for the entire color system** — replace al-folio's hardcoded SCSS values with `:root { --color-bg, --color-text, --color-link, --color-accent }` and a `[data-theme='dark']` override block. Unlocks proper dark mode + future re-skinning. Highest-leverage architectural upgrade.
  2. **Bicolor site title** — h1/header showing "Yanjun" in default heading color + "Chen" in an accent (e.g. a deep red, teal, or violet). Single most memorable header detail in the five sites; zero layout cost.
  3. **Translucent accent-color background for inline code + buttons + focus rings** — `rgba(LINK_R, LINK_G, LINK_B, 0.12)`. Inline `<code>` styling, link hover bg, focus halos all use this trick. Visually unifies the "interactive surfaces" of the page.

---

### Andriy Burkov — https://www.andriyburkov.com/
- **视觉品质打分**: N/A (live site SSL/cert error: `基础连接已经关闭：发送时发生错误` on HTTPS and `连接被意外关闭` on HTTP; WebFetch returned `unknown certificate verification error`; Web Archive blocked at fetch layer).
- **Status**: **Unreachable from this session — TLS handshake fails on both protocols, archive.org is firewalled at the WebFetch layer.** Site exists but cannot be inspected directly. No fabricated analysis offered.
- **What is publicly known about Burkov's homepage genre** (NOT verified for current site, do not treat as evidence):
  - Burkov is the author of *The Hundred-Page Machine Learning Book*. Homepages he has historically used were single-page Squarespace/Linktree-style — single column, large book cover, bio + book links.
  - This genre's visual pattern (book-author / hundred-page minimalism) is NOT what Yanjun needs (he's an academic, not a book author marketing inventory).
- **3 条可借鉴**: Cannot be derived without successful fetch. **Recommend the parent agent retry from a different network or skip this site** — the other four already cover the design space (handcrafted handmade ↔ WordPress template ↔ modern variable-driven). A fifth book-author homepage would not add a distinct vector for Yanjun's case.

---

## 本组（顶级 AI/ML researcher 高 craft）整体 takeaway

**Common visual patterns across the four reachable sites**:

1. **Constraint is the design.** All four sites use ≤2 accent colors. Karpathy uses one (publication-venue green). Dettmers uses one (brick-red `#c3251d`). Fridman uses one (burgundy `#8c0000`). Raschka uses one (crimson `#c5050c`) plus a teal link color. **None of them use the al-folio default Bootstrap-blue palette.** The single most consistent "high-craft" tell is *picking one signature color and using it everywhere*.

2. **Type-weight discipline.** Three of four sites set `h1 { font-weight: normal }` or `400`, not bold. Karpathy 34px normal, Lex 34px normal, Dettmers `h1` 36px 400. Heavy bold names read as templated; regular-weight names read as confident. Body weights either `300` (Lato Light, Dettmers) or `400`. **Avoid bold default.**

3. **Hero photo treatment varies — but all four reject the giant centered avatar.** Karpathy: 240px circle, *left of name in 2-column grid*. Lex: 120px square, *floated left, text wraps right*. Raschka: smaller photo in intro block with CTA buttons. **None do "huge centered circle, name below"** (which is al-folio default). The asymmetric photo-left, text-right hero is the dominant pattern.

**The 3 highest-leverage upgrades for Yanjun's al-folio default**:

1. **Pick one signature color and rebuild the palette around it.** Replace the default Bootstrap blue. Off-white bg (`#fafafa` or `#f5f5f5`) instead of pure white. Use CSS custom properties so dark mode comes free. (Inspired by Dettmers + Raschka.)

2. **Replace the hero**: avatar left + name/tagline right in a two-column grid, with `h1 { font-weight: normal }` and an italic muted-gray tagline at `~#999`. Gradient `<hr>` (Karpathy's recipe) under the hero. (Inspired by Karpathy.)

3. **Replace the news/timeline with a true vertical-rail timeline** (`border-left` on icon column + absolute-positioned dot per entry). Combined with a heading-only Google font pairing (e.g. Inter heading + system body, or Source Serif 4 heading + Inter body) and a translucent-accent inline-code style, this single rebuild brings the page from "template" to "handcrafted" without a redesign. (Inspired by Karpathy timeline + Lex font pairing + Raschka variable system.)
