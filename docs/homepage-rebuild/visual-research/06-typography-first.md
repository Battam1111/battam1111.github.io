# Visual Research — Group 6: Typography-First Writers / Thinkers

**Cohort**: Craig Mod, Robin Rendle, Tom Critchlow, Andrew Kortina, Tyler Sticka
**Theme**: "Typewriter-level care for type." Each site is a typographic statement — fonts, line-height, max-width, link decoration are all load-bearing. Subset extracted from raw CSS, not eyeball-guessed.
**Date**: 2026-05-22
**Level note**: These are five working writers/designers, not academics. Borrow their *craft mechanics* (line-height numerics, prose width, link styling), not their personality flourishes (clip-path tilts, marquee galleries, IDE chrome).

---

## 1. Craig Mod — https://craigmod.com/

### Typography
- **Primary serif**: `ff-meta-serif-web-pro-1` (Adobe Typekit) → fallback Georgia, Times. This is Erik Spiekermann's FF Meta Serif — the same family used by major print magazines.
- **Sans companion**: `ff-meta-web-pro-1` (FF Meta) — Spiekermann's sans, pairs with the serif by design.
- **Body reset trick**: `body { font-size: 62.5%; }` → so 1em = 10px. Then `p, li, blockquote { font-size: 1.8em; line-height: 1.5em; }` = **18px body, 1.5 line-height**.
- **Hero h1**: `font-size: 3.5em` (35px) · `line-height: 1.2em` · `letter-spacing: -1px` · serif.
- **Hero subtitle p**: `font-size: 1.9em` (19px) · `line-height: 1.6em` · sans-serif (deliberate contrast).
- **Big membership headline**: `font-size: 5em` (50px) · `letter-spacing: -1px` · `line-height: 1.1em`.
- **Small-caps utility**: `.sc { font-size: 1.1em; font-variant: small-caps; text-transform: lowercase; }` — proper OpenType small caps, not faked.
- **Japanese fallback**: dedicated `body.japanese { font-family: "Hiragino Kaku Gothic Pro W3"... }` — bilingual site treated with proper font stacks.

### Color
- Background `#fff`, text `#333` (not pure black — softer).
- **Link primary**: `#007AFC` (iOS-like blue). Hover background hover `#0064cc`.
- Muted text `#666`, `#999`, `#aaa` — three-tier gray system.
- Header nav color `#666`, hover `#000`.

### Link Styling (signature craft)
```css
a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #007AFC;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.2em;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
}
a:hover { color: #007AFC; }
```
This is the **textbook modern link**: body text color stays neutral, only the underline is colored. On hover the text picks up the underline's color. `0.2em` offset gives the underline breathing room from descenders. `0.1em` thickness is heavier than browser default but still elegant.

### Layout
- Centered single column, ~60ch wide (varies by layout — `1140.css` is a 12-col grid system from Tachyons-era).
- Hero photo full-bleed at top, then narrow text column.
- Horizontal nav with `text-transform: uppercase` + `letter-spacing: 1px` for nav items (treats nav as small-cap labels).

### Hero
- Big photo (book cover or studio shot) above the fold.
- Serif h1 in display size, then sans subtitle in `1.9em` — explicit serif/sans tension.
- Bottom border on hero block: `1px solid #efefef` (almost invisible — just a hair-line).

### Micro-craft
- `font-variant-numeric: tabular-nums` for prices (`$50/yr` aligns properly).
- `sup, sub` get a separate font stack (Apple system) and `font-weight: bold` — footnote markers are deliberately styled.
- Selection color `#ffff66` (highlighter yellow) instead of browser default blue.
- Membership CTAs use a layered "pushable" button pattern (front/edge/shadow divs).

### Score: **9.5 / 10**
A working writer who actually pays Typekit to get FF Meta. Every numeric is intentional.

---

## 2. Robin Rendle — https://www.robinrendle.com/

### Typography
- **Mono primary**: `MD IO` (custom WOFF2 self-hosted) — the entire body of essays is set in monospace. This is the IDE-aesthetic taken seriously.
- **UI variable font**: `MD UI` (custom variable WOFF2) — single file covering `font-style: oblique 0deg 12deg; font-weight: 200 900;`. The oblique slant + weight are both interpolated.
- **Title font**: SF Pro Text (system).
- **CSS variable**:
  ```css
  --font-size-base: 1rem;     /* 1rem = 16px */
  --font-size-1: 0.75rem;     /* 12px — sidebar */
  --font-size-2: 0.875rem;    /* 14px */
  --font-size-3: 0.9375rem;   /* 15px — body */
  ```
- **Root**: `html { font-size: 110%; }` on mobile, `100%` desktop ≥768px.
- **Body line-height**: `1.45`. **Heading style**: `font-weight: 400` + `font-style: italic` on h2/h3 — italic-as-emphasis instead of bold.
- **Vertical rhythm using `1lh`**: `margin-bottom: 1lh`, `padding: 1lh`. Uses the CSS `lh` unit (= current line-height) so all rhythm is exactly one line of body type. This is a modern best practice almost no one ships.

### Color (uses `light-dark()` for proper light/dark mode)
```css
--neutral-100: light-dark(#fcfcfd, #111113);
--neutral-1200: light-dark(#1e1f24, #eeeef0);
--primary-900: light-dark(#0056d6, #3e63dd);
```
Full 12-step neutral + 12-step primary scale (Radix UI-style). Background `--neutral-base-soft: #f9f9fb`, text `--neutral-1100: #62636c`. `color-scheme: light dark;` declared on `:root`.

### Link Styling
```css
a { color: inherit; }
a { text-decoration-color: var(--neutral-text-soft); }
a:hover { text-decoration-color: var(--neutral-text-contrast); }
```
Same pattern as Craig Mod: text inherits color, only the underline shifts. But Rendle uses *grays* not blue — link is a subtle gray underline that darkens on hover. Even quieter than Craig.

### Layout
- **Two-pane "IDE file tree" layout**: left navigator sidebar `--size-navigator: 20rem`, right content pane.
- Content max-width `--size-content-width: 40rem` (= 640px ≈ 75ch in monospace).
- File header chrome at top (`--size-chrome: 2.25rem`) styled like an editor tab.
- **Killer detail**: essays show line numbers in a left gutter via a giant CSS-generated string (`content: "1\A 2\A 3\A..."` up to 700). It looks like code. The mono font is the punchline.

### Hero / Identity
- Tiny 40px circular avatar + name + italic bio. Footer shows commit hash `(0573884d)` and timestamp `7:19 PM PDT`. The site presents as a living git repo.

### Micro-craft
- `text-decoration-skip-ink: auto` + `font-optical-sizing: auto` + `font-variant-ligatures: contextual` + `font-kerning: normal`. Every typography feature flag is on.
- `hr { content: "–––"; }` — uses an actual en-dash trio as the divider via `:before`.
- `figcaption a { text-decoration-color: var(--neutral-text-soft); }` — captions and their links use the muted color.
- `::selection { background: var(--primary-highlight-normal); }` — themed selection color.
- Uses `@view-transition { navigation: auto; }` for page transitions.

### Score: **10 / 10**
Maximally typographic. The mono-as-body choice is bold but executed flawlessly. Probably the most modern CSS on the public web.

---

## 3. Tom Critchlow — https://tomcritchlow.com/

### Typography
- **Body**: `Libre Franklin` (Google Fonts open-source). Color `#212121` (not pure black).
- **Mono accent**: `IBM Plex Mono` for tags and metadata.
- **Post body numerics**: `font-size: 1.1rem` (≈ 17.6px) · `line-height: 1.6em` (`!important` to override Tachyons).
- **Sidenote font**: `0.9rem` (14.4px) · `line-height: 1.3rem` — uses Tufte's sidenote pattern.
- **Tachyons utility CSS** as base, but body fonts overridden.
- **Section header**: `40px` · `line-height: 30px` (intentionally tight, almost grid-like).

### Color
- Text `#212121` body.
- **Brand green**: `#02AD28` for links · `#00ff00` for accent borders (literal CSS green).
- Hover highlighter: `box-shadow: inset 0 -24px 0 rgba(0,255,0,0.4)` — link backgrounds light up green on hover instead of changing color.

### Link Styling (the highlighter trick)
```css
ul a, ol a, p a, form a { color: #02AD28; text-decoration: none; font-weight: bold; }
ul a:hover, ol a:hover, p a:hover {
  box-shadow: inset 0 -24px 0 rgba(0,255,0,0.4);
}
```
**No underline. Bold green text. On hover the entire link gets a translucent green highlighter swipe via inset box-shadow.** This is a signature move — feels like marking up a printed page with a yellow Stabilo highlighter.

### Layout
- `max-width: 800px` (in `.tombox` decoration), comments `max-width: 600px`.
- Single column.
- Heavy `border: 4px solid #00ff00` decorative frames around contact buttons.

### Hero
- "Hey, I'm Tom..." conversational opener — no headline, just prose.
- Favicons used as visual tiles for project list.

### Micro-craft
- Sidenotes (Tufte CSS):
  ```css
  .sidenote { float: right; clear: right; margin-right: -35%; width: 30%; }
  ```
  Margin notes hang in the right gutter — pure Edward Tufte / Butterick aesthetic. **Academic gold standard.**
- Blockquote: `border-left: 1px solid #02AD28; padding-left: 10px; font-style: italic;` — thin green rule + italic.
- Contact box hover expands padding 20→30px — feels physical.

### Score: **8 / 10**
Less ambitious typography than Craig/Robin (it's Tachyons under the hood) but **the Tufte sidenote pattern is directly portable to an academic site**.

---

## 4. Andrew Kortina — https://kortina.nyc/

### Typography
- **Body**: `'Helvetica-Neue', Helvetica, sans-serif`. **No web fonts loaded.** Pure system.
- **Body**: `font-size: 22px` · `font-weight: 300` · `line-height: 1.5` · `-webkit-font-smoothing: subpixel-antialiased`.
- **Headings**: `font-weight: 600` · `line-height: 1` (very tight — display style).
- **Size scale**: h1 64px / h2 30px / h3 24px / h4 20px / h5 18px / h6 16px. Big drop from h1 to h2 (64→30 ≈ 2.1× ratio) — declarative hierarchy.
- **Body alignment**: `body { text-align: center; }` then children get `text-align: left; margin: 0 auto;` — center-the-container, left-align-the-text pattern.

### Color
- Text `rgb(0, 0, 0)` pure black.
- Background white.
- Link `#428bca` (Bootstrap blue).
- Muted `#666`, `#999`, `#ccc`.
- Code: `#c7254e` on `#f9f2f4` background (Bootstrap-era code style).

### Link Styling
```css
a { color: #428bca; text-decoration: none; }
nav a { color: #666; text-decoration: underline; }
```
- Body links: blue, no underline (less crafty than Craig/Rendle).
- Nav links: gray, underlined — inverted convention. Implies "nav links are utility, body links are voice."

### Layout
- **`max-width: 700px`** for every text element (`h1...h6, p, hr, aside, blockquote, ul, ol`) above 700px viewport.
- Single column, centered. Margin-bottom `40px` between every block — generous vertical rhythm.
- Film/film-body class: full theme switch to `Zen Kaku Gothic New` + `Zen Old Mincho` for cinema posts. Bilingual-ish.

### Hero
- Massive h1 `64px` weight 600 + tight 1.0 line-height. Then `b-index h1 { font-size: 36px; }` for index pages.

### Micro-craft
- **Fleuron divider** `hr.fleuron`:
  ```css
  hr.fleuron:before {
    content: ' ⥂ ❧ ⇲ ';
    letter-spacing: 2em;
    text-align: center;
    color: #bbb;
  }
  ```
  Three Unicode ornaments with 2em letter-spacing between them — a typographic "section break" that beats a plain `<hr>` while staying pure-text.
- `text-decoration: blink;` somewhere (legacy / joke).
- `b-notes` (margin notes) at `font-size: 18px`.

### Score: **7.5 / 10**
Solid, opinionated, but plainer than the others. The fleuron divider and the centered-container / left-aligned-text pattern are the borrowable moves.

---

## 5. Tyler Sticka — https://tylersticka.com/

### Typography
- **Body sans**: `Seravek, "Gill Sans Nova", Ubuntu, Calibri, "Segoe UI", "Fira Sans", "DejaVu Sans", source-sans-pro, sans-serif`. Seravek is an Apple-bundled humanist sans — feels like a Tufte book.
- **Display sans**: `freight-sans` (self-hosted WOFF2 subset) — Joshua Darden's Freight, weight 700 + 900 for h1/h2.
- **Mono**: `monaco, Consolas, "Lucida Console", monospace`.
- **Root scale (modular scale, ratio = 1.5 "Major Fifth")**:
  ```css
  --font-size-root: 18px;
  --font-size-grow: 0.25vw;        /* fluid bump */
  --ms-base: 1; --ms-ratio: 1.5;
  --ms0: 1; --ms1: 1.5; --ms2: 2.25; --ms3: 3.375; --ms4: 5.0625;
  --ms-1: 0.667; --ms-2: 0.444; --ms-3: 0.296;
  --font-size-xs: calc(var(--ms-1) * 1em);   /* ~12px */
  --font-size-sm: 1em;                       /* 18px */
  --font-size-md: calc(var(--ms1) * 1em);    /* 27px */
  --font-size-lg: calc(var(--ms2) * 1em);    /* ~40px */
  --font-size-xl: calc(var(--ms3) * 1em);    /* ~61px */
  ```
  Every size is derived from one ratio. **This is the design-token textbook.**
- **Line-heights also on the same scale** (`--line-height-xs: var(--ms0)`, `--line-height-md: var(--ms2)`).
- **Heading style**: h1/h2 use Freight Sans + `font-feature-settings: "lnum"` + `font-variant-numeric: lining-nums` + `text-wrap: balance`. Lining figures for headings is a typographer's flex.
- **All paragraphs**: `text-wrap: pretty` (avoids orphans/widows). `hanging-punctuation: first allow-end last;` on body — quotation marks hang outside the left margin.

### Color
```css
--color-base-blue: #12a1e9;
--color-base-blue-alt: #017acd;   /* link color */
--color-base-blue-dark: #193a70;
--color-base-gray-dark: #21282c;  /* body text */
--color-base-gray: #717578;
--color-base-gray-light: #e9eaea;
--color-base-orange: #ea6e6d;
--color-base-pink: #c14d7e;
--color-base-purple: #5a58bf;
```
Semantic mapping:
```css
--color-text-action: var(--color-base-blue-alt);   /* #017acd */
--color-text-base: var(--color-base-gray-dark);    /* #21282c */
--color-text-code: var(--color-base-pink-alt);     /* #bd326f */
--color-text-muted: var(--color-base-gray-alt);
```
**Two-layer token system** (base / semantic). This is the OS9 of design systems.

### Link Styling
```css
a { color: var(--color-text-action); }   /* #017acd */
```
Pretty plain. Color is the work — relying on the brand-blue to be recognizable. No underline-offset tricks because headings/lists use bullets and structure.

### Layout
- Prose container `max-width: var(--size-width-prose); /* 40em */` → at 18px root that's **720px ≈ 67ch**.
- Grid app shell: `grid-template-areas: "banner" "main" "footer"` portrait, `"banner main" "banner footer"` landscape. Fixed left rail at 25vh wide.
- `.rhythm > * + * { margin-top: var(--rhythm); }` — Owl-selector vertical rhythm.

### Hero / Identity
- Big stacked headline using Freight Sans Black 900 weight.
- Heavy hand-illustrated and tilted-clip-path elements (`clip-path: polygon(3% 0, 100% 3%, 97% 100%, 0 97%)`) — the avatar is literally rotated a few degrees. This is the "playful designer" flourish.

### Micro-craft (master class level)
- `font-feature-settings: "lnum"` on headings — lining numerals.
- `hanging-punctuation: first allow-end last` on body — quote marks hang outside.
- `text-wrap: pretty` everywhere, `text-wrap: balance` on headings.
- `text-size-adjust: none` to disable iOS auto-zoom.
- Vertical-rhythm scale and spacing scale share the same modular-scale variables — typography and layout breathe the same air.
- `rotate: -1deg` on buttons (slightly tilted CTAs) — playful but optional.

### Score: **10 / 10**
The most rigorous design token system of the five. Even if you reject the playful clip-paths, the scale architecture is directly copyable.

---

## Cross-Cohort Synthesis (what they actually share)

| Site | Body font | Body size | Line-height | Max-width | Link decoration |
|------|-----------|-----------|-------------|-----------|-----------------|
| Craig Mod | FF Meta Serif | 18px | 1.5em | ~640px | underline + offset 0.2em + thickness 0.1em |
| Robin Rendle | MD IO (mono) | 15px | 1.45 | 40rem (640px) | underline, neutral color |
| Tom Critchlow | Libre Franklin | 17.6px | 1.6em | 800px | green text + box-shadow highlighter on hover |
| Andrew Kortina | Helvetica Neue | 22px | 1.5 | 700px | blue, no underline |
| Tyler Sticka | Seravek | 18px | ~1.5 (ms2) | 40em (720px) | brand blue, plain |

**Common laws**:
1. **Body font 16–22px.** Default 16px is on the low end of acceptable. 18px is the typography-aware default. 22px (Kortina) is a statement.
2. **Line-height 1.45–1.6.** Below 1.45 = cramped. Above 1.6 = floaty. 1.5 is the safe lock.
3. **Max-width 640–800px** (≈ 65–75ch). Never wider for prose.
4. **Text color is NOT pure black.** `#212121`, `#333`, `#21282c`. Pure `#000` is brutal on white.
5. **`text-decoration-color` + `text-underline-offset`** are universal modern CSS for links — the underline gets a brand color while text stays inherited.
6. **Headings smaller than you think.** h1 hero ranges 35px (Craig) → 64px (Kortina). h2 body ranges 27px → 40px. The drop from h1 to h2 is large (2× ratio) for declarative hierarchy.
7. **One serif + one sans, OR all-mono.** Pairing is intentional, not accidental.

---

## Concrete Recommendations for Yanjun's al-folio Site

### Hard takeaways — change these specific numbers

1. **Font stack swap** (replace al-folio's default sans):
   ```scss
   $font-family-body: "Source Serif 4", "Source Serif Pro", Georgia, "Times New Roman", serif;
   $font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
   $font-family-mono: "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;
   ```
   Free Google Fonts that hit the FF Meta / Seravek vibe without Typekit cost. Source Serif is Adobe's open-source serif (same designer family lineage).

2. **Body type ramp** (the most important single change):
   ```scss
   body {
     font-family: $font-family-sans;
     font-size: 18px;             // was probably 16px
     line-height: 1.6;            // was 1.5 or browser default
     color: #1f1f1f;              // not pure #000
     -webkit-font-smoothing: antialiased;
     text-rendering: optimizeLegibility;
   }
   p, li, blockquote { font-size: 1rem; line-height: 1.6; }
   ```

3. **Prose width**:
   ```scss
   .post, .publications, .about-content { max-width: 70ch; }
   /* or */
   .post, .publications, .about-content { max-width: 720px; }
   ```
   al-folio default is ~900–1000px. **Drop to 70ch / 720px for everything that's prose.** Tables and figure grids can stay wider.

4. **Link styling** (steal Craig Mod's recipe verbatim):
   ```scss
   a {
     color: inherit;
     text-decoration: underline;
     text-decoration-color: var(--global-theme-color);
     text-decoration-thickness: 0.08em;
     text-underline-offset: 0.18em;
     transition: color 0.2s ease, text-decoration-color 0.2s ease;
   }
   a:hover {
     color: var(--global-theme-color);
     text-decoration-color: currentColor;
   }
   ```
   This replaces al-folio's "blue underlined link everywhere" — body text stays neutral, only the colored underline announces the link.

5. **Headings ramp** (Tyler-style modular scale, ratio 1.333 or 1.5):
   ```scss
   :root {
     --ms-base: 1rem;
     --ms-ratio: 1.333;
     --h6: calc(var(--ms-base));                        // 16px
     --h5: calc(var(--ms-base) * var(--ms-ratio));      // ~21px
     --h4: calc(var(--ms-base) * var(--ms-ratio) * var(--ms-ratio)); // ~28px
     --h3: 2.3rem;
     --h2: 2.8rem;
     --h1: 3.4rem;
   }
   h1 { font-size: var(--h1); line-height: 1.15; letter-spacing: -0.015em; font-family: $font-family-body; }
   h2 { font-size: var(--h2); line-height: 1.2; letter-spacing: -0.01em; }
   ```
   Negative letter-spacing on display headings (Craig: `-1px`; Tyler implicit) tightens display type.

6. **Replace al-folio's section dividers** (the `<hr>`):
   ```scss
   hr {
     border: none;
     text-align: center;
     margin: 3rem 0;
     &::before {
       content: "* * *";        /* Craig Mod style */
       letter-spacing: 0.8em;
       color: #999;
       font-size: 1rem;
     }
   }
   ```
   Or use Kortina's `⥂ ❧ ⇲` fleuron if you want more character.

### Soft takeaways — patterns to consider

- **Tufte sidenotes** (Critchlow): if you have a "research notes" page, the right-margin sidenote is the gold standard. al-folio doesn't ship this but a 60-line SCSS partial does the job.
- **Selection color**: `::selection { background: #ffe66d; color: #1f1f1f; }` — yellow highlighter selection is a small craft touch nobody implements.
- **Tabular numerals for citation counts / dates**: `font-variant-numeric: tabular-nums` on `.publications time` and `.bib-counter` so numbers align in columns.
- **`text-wrap: balance`** on all `h1, h2, h3` and `.publication-title` — prevents widow-orphan headings. Now widely supported. One line of CSS.
- **`text-wrap: pretty`** on `p` — same idea for body. Slight cost, big polish gain.

### Hard "don'ts" — what NOT to borrow

- **No clip-path tilts on photos** (Tyler's playful flourish reads "design portfolio," not "academic").
- **No mono-as-body** (Rendle's IDE aesthetic reads "indie designer," would feel performative for a PhD student).
- **No green-highlighter hover** (Critchlow's brand move; fine for him, would look like a CSS bug on a research site).
- **No 64px h1 hero** (Kortina-size headings work for one-page personal sites, not for a publications-heavy academic page).
- **No Typekit / paid fonts** — stick to Google Fonts (Source Serif 4, Inter, JetBrains Mono cover the same territory for free).

---

## Single-Sentence Summary

The typography-first crowd doesn't use fancy fonts — they use **18px body, 1.5–1.6 line-height, 70ch max-width, neutral text color, and a colored `text-decoration` instead of a colored link**. That's the entire formula. al-folio default ships none of those.
