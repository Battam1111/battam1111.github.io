# 04 — Highly customized al-folio forks (real users)

Selection rule: must be unambiguously al-folio (footer attribution + `--global-*` CSS variables + al-folio class names like `.post-header`, `navbar-light`, `.profile.float-right`, `bibliography` etc.) but visibly diverged from the default purple / Roboto / centered-profile look. Sites that left al-folio entirely (e.g. smsharma.io is hand-rolled HTML + Spectral/IBM Plex, not al-folio; amirpourmand.ir migrated to Hugo) were excluded.

Default-al-folio reference: `--global-theme-color:#b509ac` (purple), `--global-hover-color` same, Roboto + Roboto Slab via Google Fonts, `.container{max-width:930px}`, profile floats right at `width:30%` ≥576px, fixed-bottom dark footer.

Coverage: **5/5** real customized al-folio installs.

---

### Ellis Brown — https://ellisbrown.github.io
- **al-folio 可识别度**: 2 (footer Jekyll+al-folio chip + every default class name + `mdbootstrap` + `.responsive-img-srcset` srcset pattern still there, but the hero is fundamentally rebuilt)
- **视觉品质打分**: 4
- **改了什么**（与 al-folio default 对比）:
  - Typography: **kept Roboto** (Google Fonts) but introduced explicit `.profile .name { font-size: xx-large }` + `.profile .title { font-size: large; opacity: 75% }` so the name-title pair becomes the hero rather than the default `<h1 class="post-title">`. Email is rendered with monospaced `font-family` + a custom `[dot]/[at]` obfuscation that doubles as visual rhythm.
  - Color: deep indigo `--global-theme-color: #302097` in light, electric blue `#3080ff` in dark (vs default purple `#b509ac` / teal). Both readable on white, both signal "tech" rather than "academic purple".
  - Spacing / max-width: standard 930px container kept; key win is the **dark mode bg `#16181d`** (slightly cooler/less neutral than al-folio's stock `#1c1c1d`) — small move that looks much less templated next to other al-folio sites.
  - Hero layout: **centered hero** via `.profile.center` instead of default `.profile.float-right`. Picture sits above the name; `picture { justify-content: center; display: flex; margin: auto }` and `img { max-width: 25%; min-width: 100px }`. Round avatar + name + title + contact-icons-row stack — feels much more "designed" than a floated photo.
  - Micro-craft: **Ctrl+K search** (custom search modal with the keyboard shortcut chip rendered in nav), Tabler icons (`ti ti-search`, `ti ti-sun-moon`) replacing default FontAwesome moon/sun, three-state theme toggle (system/light/dark) instead of al-folio's binary toggle.
- **可借鉴的 3 条具体 CSS / SCSS 改动**:
  1. `.profile.center { margin: auto; ... } .profile.center .header { text-align: center; font-size: x-large }` — flip from float-right to centered hero with no Bootstrap grid changes, just a layout-modifier class.
  2. Three-state theme toggle: `:root #light-toggle-system { display: block } #light-toggle-dark, #light-toggle-light { display: none }` + `html[data-theme-setting=dark] #light-toggle-dark { display: block }`. Adds "follow system" as a first-class third state that default al-folio lacks.
  3. Dark-mode background tweak `--global-bg-color: #16181d` (instead of stock `#1c1c1d`) — desaturates blue slightly, instantly looks less "default Bootstrap dark".
- **GitHub source**: https://github.com/ellisbrown/ellisbrown.github.io (al-folio template generation visible in commits)

---

### Otniel-Bogdan Mercea — https://merceaotniel.github.io
- **al-folio 可识别度**: 2 (footer chip + every al-folio class + `.responsive-img-srcset` + `_includes` style asset pipeline — but search, dropdown nav, and company-logos grid are al-folio-fork additions)
- **视觉品质打分**: 4
- **改了什么**（与 al-folio default 对比）:
  - Typography: still Roboto / Roboto Slab. No font swap.
  - Color: `--global-theme-color:#b509ac` light (kept default purple) but **dark mode flips to teal `#2698ba`** — gives dark mode a distinct visual identity instead of just inverting.
  - Spacing / max-width: stock 930px. No layout-width changes.
  - Hero layout: **company-logos strip** below the bio — 8-column responsive grid of Apple/DeepMind/Google/MPI/TUM/Tübingen/Edinburgh/Helmholtz logos with `object-fit:contain; opacity:.9; hover:scale(1.05)`. This single addition reads as "designed" because it's a non-default content block that frames the bio paragraph.
  - Micro-craft: **Ctrl+K search modal** with the `ctrl k` text chip in the nav (rendered as literal text next to a search icon), Tabler-icons for sun/moon/system-theme triplet, **dropdown nav menus** ("Distinctions" → Awards/Scholarships, "Community Service" → Reviewing/Talks/Supervision/Teaching) — uses al-folio's `dropdown` Bootstrap classes but the actual nesting is a custom additions.
- **可借鉴的 3 条具体 CSS / SCSS 改动**:
  1. Company-logos block (inline `<style>` in template): `.company-logos { display:grid; grid-template-columns: repeat(8,1fr); gap:10px } .company-logo { height:60px; object-fit:contain; opacity:.9; transition:opacity .3s ease, transform .3s ease } .company-logo:hover { opacity:1; transform:scale(1.05) }`. Drop-in academic-affiliation strip.
  2. Different theme color per mode: light keeps brand purple, dark uses complementary teal. Two `:root` vs `html[data-theme=dark]` blocks, one variable.
  3. `<button id="search-toggle"><span class="nav-link">ctrl k <i class="ti ti-search"></i></span></button>` — render the keyboard-shortcut literal in the nav as a visual element, not just a tooltip. Cheap polish, looks Linear/Notion.
- **GitHub source**: https://github.com/merceaotniel/merceaotniel.github.io (al-folio fork)

---

### Boris Bonev — https://bonevbs.github.io
- **al-folio 可识别度**: 2 (footer "Built with Jekyll and al-folio" + canonical class names + asset pipeline)
- **视觉品质打分**: 4
- **改了什么**（与 al-folio default 对比）:
  - Typography: still Roboto / Roboto Slab. Body weight `300` (al-folio default uses `400`+) — slightly lighter feel.
  - Color: `--global-theme-color: #b509ac` light (default purple) but light-mode highlight is **wine-red `#b71c1c`** via `--global-highlight-color`, and tip/warning/danger blockquote palette is added (`#42b983 #e2f5ec` etc.) — gives the page a more editorial feel when prose has callouts.
  - Spacing / max-width: stock 930px. Profile photo is `rounded-circle` (default class) + `.profile.float-right` (default float).
  - Hero layout: `<h1 class="post-title"><span class="font-weight-bold">Boris</span> Bonev</h1>` — the **two-tone first-name-bold pattern** is the default al-folio pattern, but Bonev uses `responsive-img-srcset` with 480/800/1400 WebP variants for the headshot — actual visual difference is publication entries: every paper has a **colored institution badge** like `<abbr class="badge" style="background-color:#117a42">GMD</abbr>` (custom hex per venue), much more visually scannable than default bibliography.
  - Micro-craft: **scrolling progress bar** (`<progress id="progress">` at top of viewport — actually a default al-folio feature he kept), `responsive-img-srcset` with WebP for the profile photo + each publication preview, "click to view N more authors" expander on long author lists (text-typewriter JS animation).
- **可借鉴的 3 条具体 CSS / SCSS 改动**:
  1. Per-venue publication badges with inline `background-color`: `<abbr class="badge" style="background-color:#117a42">GMD</abbr>` — each venue gets its own brand color rather than the default light-gray badge. Bibliography becomes a color-coded venue map.
  2. WebP `<source>` srcsets at 480/800/1400 for headshot AND every publication preview thumbnail. Default al-folio supports this but most users skip it; Bonev's site loads visibly faster.
  3. "More authors" text-typewriter JS: `setInterval(function(){ element.text(more_authors_text.substring(0, cursorPosition + 1)); ... }, '10')` — small `> 5 more authors` link expands character-by-character. Cheap micro-delight that signals craft.
- **GitHub source**: https://github.com/bonevbs/bonevbs.github.io (visible "ai-folio" repo too)

---

### Fan Pu Zeng — https://fanpu.io
- **al-folio 可识别度**: 3 (footer chip + class names + asset pipeline + `responsive-img-srcset`, but theme color and profile float side are flipped — looks less templated at a glance)
- **视觉品质打分**: 3.5
- **改了什么**（与 al-folio default 对比）:
  - Typography: still Roboto / Roboto Slab. No font swap, but heading hierarchy is heavily used (h3 "Talks", h3 "Starred Blog Posts" sub-sections inside the about page).
  - Color: **bright `--global-theme-color: #ff3636`** (vermillion red) in light mode — extremely loud accent compared to default purple. Dark-mode flips to teal `#2698ba`. Code-bg tint kept at default magenta `rgba(181,9,172,0.05)` — small inconsistency Fan Pu didn't fix.
  - Spacing / max-width: stock 930px.
  - Hero layout: **`.profile.float-left`** (instead of default float-right) — small flip that creates an unexpected asymmetry. Custom `.profile .more-info { font-family: monospace }` for the byline area. Picture is `rounded center` (not `rounded-circle`) — square avatar instead of circle.
  - Micro-craft: **Ctrl+K search**, custom favicon, banner-photo blog posts ("All banner pictures are taken by yours truly"), a starred-posts curated section on the about page, KC3UFE ham-radio callsign link as a personal-character signal.
- **可借鉴的 3 条具体 CSS / SCSS 改动**:
  1. `.profile.float-left { margin-right: 1rem }` — mirror the default `.profile.float-right` for a left-floated portrait. Single SCSS line, asymmetry feels fresh against the default right-float convention every other al-folio uses.
  2. Drop the `rounded-circle` from `<img>` and use `rounded` instead — squared headshot with `border-radius: .25rem` looks more "magazine" and less "LinkedIn".
  3. Loud accent color (`#ff3636`) for links + venue badges: works because the page is otherwise pure black-on-white. Lesson: if you only change one variable, change `--global-theme-color` to something far from purple/teal and the page instantly stops looking like default al-folio.
- **GitHub source**: https://github.com/fanpu/fanpu.github.io (al-folio template fork)

---

### Scott Lee Chua — https://scottleechua.com
- **al-folio 可识别度**: 3 (footer chip + canonical class names + `.profile.float-right` + bibliography classes — but the narrower container and disabled dark mode break the "default al-folio" silhouette)
- **视觉品质打分**: 4
- **改了什么**（与 al-folio default 对比）:
  - Typography: still Roboto family (Roboto:300,400,500,700 | Roboto+Slab:100,300,400,500,700 | Material+Icons) loaded but the **layout treats text more like a personal blog than a CV**: `p { margin-top: .5rem; margin-bottom: .5rem }`, `h2-h6 { margin-top: 2rem; margin-bottom: 1rem }` (heavier vertical rhythm than al-folio default), `hr { margin-top: 2rem; margin-bottom: 2rem }`.
  - Color: kept default purple `--global-theme-color: #B509AC` light / teal `#2698BA` dark, **but dark mode is deliberately disabled** (`<!-- <script src="/assets/js/dark_mode.js"></script> -->`) — light-only by design choice. Less choice = more intentional aesthetic.
  - Spacing / max-width: **`.container { max-width: 800px }`** (vs default 930). 130px narrower — this single change is the biggest visual differentiator. Reading column is paperback-novella width, not bootstrap-default width. Makes prose feel curated.
  - Hero layout: profile floats right (default) but `.header-bar h1 { color: var(--global-theme-color); font-size: 5rem; padding-top: 2rem; padding-bottom: 5rem; border-bottom: 1px solid var(--global-divider-color); text-align: center }` — when used on subpages it's a giant colored chapter heading.
  - Micro-craft: post-header desc tagline ("Econs | Comics | Games"), country flag emoji in the H1 (🇵🇭), `feed/blog.xml` atom auto-discovery for syndication, `<meta name="robots" content="noarchive">` ("prevent Microsoft AI scraping" — branding-relevant detail), Mastodon `rel="me"` linkback.
- **可借鉴的 3 条具体 CSS / SCSS 改动**:
  1. **Narrow container** `.container { max-width: 800px }` — single line change in `_layouts/default.html` or `_sass/_base.scss`. Massive perceived-quality lift because readable line length drops to ~75ch.
  2. **Heading rhythm override**: `h2-h6 { margin-top: 2rem; margin-bottom: 1rem }` + `p { margin: .5rem 0 }` + `hr { margin: 2rem 0 }`. Default al-folio uses Bootstrap's much tighter spacing; this single block makes the page feel "edited" rather than "generated".
  3. `.header-bar h1 { font-size: 5rem; color: var(--global-theme-color); padding-bottom: 5rem; border-bottom: 1px solid var(--global-divider-color); text-align: center }` for subpage chapter-titles. Treats each subpage like a magazine spread instead of just `<h1>`-then-content.
- **GitHub source**: https://github.com/scottleechua/scottleechua.github.io (al-folio fork — README notes "based on al-folio")

---

## Cross-cutting patterns (what real customizers actually change)

Looking at the 5 sites side-by-side, the smallest-effort/highest-impact changes are:

1. **`--global-theme-color` swap.** Every site changed it. None kept the default purple `#b509ac` for both modes. Going to red (`#ff3636`), indigo (`#302097`), crimson (`#9f1727`), or magenta-but-only-in-light pulls the site out of "stock al-folio" immediately. Asymmetric light/dark (e.g. purple in light + teal in dark, or indigo in light + electric blue in dark) reads as more intentional than picking one accent.
2. **Container width.** Default 930px is "Bootstrap fits an iPad". Scott Lee Chua dropped to 800px and the site reads as edited. None went wider.
3. **Profile-block reflow.** Default is `float-right` 30%. Ellis Brown centered it, Fan Pu floated it left, Mercea added a logos strip below. Any reflow signals craft.
4. **Custom search (`Ctrl+K` modal with the literal text in nav).** Both Ellis Brown and Mercea added this — both upstream al-folio (post-v0.13) and the custom forks render `ctrl k` as visible nav text, not a tooltip. Notion/Linear-style.
5. **Three-state theme toggle (system/light/dark) with Tabler icons.** Default al-folio is binary; the post-v0.13 al-folio adds tri-state, and customized forks tend to upgrade to Tabler icons over FontAwesome moon/sun.

What real customizers DO NOT typically change (interesting because Yanjun's site could differentiate):
- Font family. All 5 kept Roboto/Roboto Slab. Swapping to Inter/IBM Plex Sans/EB Garamond would be more differentiating than what any of these 5 did.
- Footer treatment. All kept the dark-band fixed-bottom footer.
- The "Built with Jekyll + al-folio" attribution. All kept it visible — it's a community signal, not a stigma.
