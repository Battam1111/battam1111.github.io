# Visual Research — Group 3: Blog-First / Minimalist with Craft

**Cohort**: Lilian Weng, Christopher Olah, Sasha Rush, Tri Dao, Eric Wallace
**Theme**: The "Karpathy-route" anti-framework aesthetic — extreme restraint as craft. System fonts, monochrome, whitespace as the design tool.
**Date**: 2026-05-22
**Level note**: Sasha Rush & Tri Dao are now AP-level; Eric Wallace is OpenAI / Berkeley PhD. Yanjun is PhD student — borrow visual restraint but **avoid over-claiming authority** (no "lab director" framing, no heavy CV-style press wall).

---

## 1. Lilian Weng — https://lilianweng.github.io/

### Typography
- **Font stack**: system (no Google Fonts). Body is sans-serif default; headings same family, bold weight only.
- **Hierarchy via weight, not family** — single typeface doing all the work.
- Browser-default line-height (~1.5) — intentionally unstyled.

### Color
- Background: ~`#ffffff` / Text: ~`#111111` (near-black, not pure)
- **Zero accent color** in nav/headers. Monochrome to an extreme.
- Score: **10/10 color restraint**.

### Layout
- Single centered column, generous whitespace.
- Horizontal sparse nav: `Posts | Archive | Search | Tags | FAQ` — pipe dividers, no buttons.
- Post titles in large prominent size; metadata (date / read-time) compact + de-emphasized.
- Social icons row, icon-only.

### Hero / Header
- Understated: "Hi, this is Lilian" — conversational, no tagline-as-headline.
- Name "Lil'Log" is the primary typographic anchor (small but distinct).
- No avatar in hero — just text + icons.

### Micro-craft
- Pipe `|` as inline divider for metadata.
- No hover-effect bling visible.
- Footer: Hugo + PaperMod theme credit, small + muted.

### Vibe
**"Scholar's notebook"**. The restraint *is* the craft. Almost austere — feels content-first because content *is* the design.

### Scores
| Polish | Typography | Color | Layout | Micro |
|--------|------------|-------|--------|-------|
| 6      | 5          | 10    | 7      | 4     |

---

## 2. Christopher Olah — https://colah.github.io/

### Typography
- **System sans-serif stack**, ~16px body, generous line-height.
- Bold weight for headers; no display fonts.
- No Google Fonts loaded — pure performance play.

### Color
- Background: ~`#ffffff` or `#fafafa`
- Text: near-black (not pure `#000`)
- Links: standard web blue (~`#0066cc` range), underlined
- No dark mode.

### Layout
- Single column, content-width drives the layout (no rigid max-width).
- Section headers act as visual dividers (no horizontal rules needed).
- **Image thumbnails-as-bullets**: posts have inline thumbnail + title, forming a scannable visual rhythm down the page.
- Strong information-architecture mindset.

### Hero / Header
- Pure typographic identity — "colah's blog" text only.
- No photo, no tagline, no hero block. The page IS the hero.

### Micro-craft
- Standard blue underlined links — semantic HTML aesthetic.
- Section headers double as dividers (whitespace > rules).
- No animations, no hover surprises documented.

### Vibe
**"Information architecture as design"** — every element serves nav or hierarchy. Restraint is the polish. Zero gradients, zero shadows.

### Scores
| Polish | Typography | Color | Layout | Micro |
|--------|------------|-------|--------|-------|
| 7      | 6          | 9     | 7      | 5     |

---

## 3. Sasha Rush — https://rush-nlp.com/

### Typography
- **System stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI"` (inferred). No Google Fonts.
- Sans-serif body, generous line-height, em-based vertical rhythm.
- No letter-spacing tricks — natural kerning.

### Color
- Background: pure or near-pure white
- Text: ~`#222` / `#333` range (near-black, slight warmth possible)
- Links: standard blue, underlined
- **Monochromatic** — no decorative color anywhere.

### Layout
- Centered single column, modest max-width (~600-700px) — narrower than typical academic page.
- Avatar (circular, ~80px) at top — GitHub-style profile photo, **not** a polished headshot.
- Vertical flow: avatar → name → tagline (downward arc).
- Em-based spacing rhythm — consistent breathing room.

### Hero / Header
- **Circular avatar**, small (~80px), informal/authentic feel.
- Name "Sasha Rush" — bold, prominent, **not oversized**.
- Tagline: `"ML Researcher. Cursor. NYC."` — three fragments separated by periods. **Conversational + professional.** Borrow this exact pattern.

### Micro-craft
- Underlined blue links.
- Standard bullets — no custom list markers.
- White space as primary section divider (no `<hr>`).
- Hover: likely opacity or underline shift, subtle.

### Vibe
**"Unix philosophy for the web"** — do one thing, do it well. Polish emerges from precise whitespace calibration and ruthless restraint. **What's absent matters more than what's present.**

### Scores
| Polish | Typography | Color | Layout | Micro |
|--------|------------|-------|--------|-------|
| 7      | 8          | 10    | 7      | 6     |

---

## 4. Tri Dao — https://tridao.me/

### Typography
- **Mixed system stack**: body appears to be a **default serif** (likely Georgia or system-serif) at ~16px, line-height ~1.6.
- Headings: system **sans-serif** (-apple-system / Helvetica), bold.
- **Serif body + sans headings** — subtle craft choice that differentiates it from the pure-sans crowd. Borrow this idea cautiously.

### Color
- Background: ~`#ffffff` / `#fafafa`
- Text: near-pure black (`#000` or `#222`)
- Links: standard blue (~`#0066cc`)
- Dividers: light gray (~`#e0e0e0`) — used sparingly
- No dark mode.

### Layout
- Single column, max-width ~800px.
- Left-aligned, 40-60px margins.
- 24-32px vertical spacing between sections.
- Eye lands on: photo + name + subtitle → nav (top-right) → content downward.
- Nav: simple text links top-right.

### Hero / Header
- **Name as modest H1** — not oversized display type. Trust the reader.
- Avatar: small circular photo (~120px), placed **left of text block** (not centered).
- Email obfuscated: `tri [at] tridao (dot) me` — old-school anti-bot pattern, also doubles as visual quirk.

### Micro-craft
- **`[About (current)]`** notation for active nav state — parenthetical signal instead of color/underline. **Borrow this — it's stylish and accessible.**
- Bullet points use dashes `–` (en-dash), not bullets.
- Dividers: whitespace only, no horizontal rules.
- Static — no transitions.

### Vibe
**"Scholarly minimalism"** — generous whitespace + system typography + zero color = signals seriousness without coldness. Deliberately anti-design: "read the work, not the presentation."

### Scores
| Polish | Typography | Color | Layout | Micro |
|--------|------------|-------|--------|-------|
| 7      | 6          | 10    | 8      | 5     |

---

## 5. Eric Wallace — https://www.ericswallace.com/

### Typography
- **System stack** (`-apple-system, BlinkMacSystemFont, "Segoe UI"` family).
- ~16px body, line-height 1.6+.
- Headings: modest size increases — no dramatic display scaling. Trust hierarchy from weight + spacing.

### Color
- Background: pure `#FFFFFF`
- Text: near-black ~`#333` or `#2c3e50` (slight cool tint possible)
- Links: standard blue underlined (~`#0066cc`)
- Dividers: light gray `<hr>` rules between paper entries
- Paper thumbnails: **full-color images** — these break the monochrome and become the "visual wow" without sacrificing restraint.

### Layout
- Single column, ~700-800px max-width.
- 2-3rem between major sections — generous vertical rhythm.
- 1.5-2rem side margins.
- Photo: **right-aligned** beside intro paragraph (not top-centered) — different from Sasha/Tri.
- Publications: thumbnail + title stacked, lots of breathing room around images.

### Hero / Header
- Name "Eric Wallace" — largest heading weight, top of page.
- Photo: **circular/rounded crop** (not pure circle), right-aligned next to bio.
- Bio: direct prose "Hello! I am a researcher..." — no tagline flourish.
- This **photo-beside-bio** pattern is a borrowable hero variant.

### Micro-craft
- **Expandable JS blocks** (TLDR / Citation buttons) on papers — interactive but visually quiet. Worth borrowing for publication entries.
- Subtle horizontal rules between entries — `border-top` or `<hr>` with low-contrast gray.
- Bullet section headers with thin dashes/dots.
- No dark mode.

### Vibe
**"Academic minimalism with restraint craft"**. Photo thumbnails of papers add visual life without breaking the monochrome system. Communicates "serious researcher" without sterility. Visual equivalent of a well-edited CV.

### Scores
| Polish | Typography | Color | Layout | Micro |
|--------|------------|-------|--------|-------|
| 7.5    | 7          | 9.5   | 7.5    | 6     |

---

## Cross-cutting Patterns (the Karpathy-route playbook)

### How they balance minimalism + craft
1. **Single typeface, weight does all the work.** No display fonts, no font pairings, no Google Fonts (except Tri Dao's subtle serif-body trick).
2. **Whitespace IS the divider.** Most don't use `<hr>` — sections separate via vertical breathing room alone.
3. **Color is structural, not decorative.** White bg + near-black text + one blue for links. Eric Wallace adds color *only through paper thumbnails* — content brings color.
4. **Photos are small + circular + authentic.** GitHub-profile-photo energy, not LinkedIn headshot. Sasha (~80px), Tri (~120px), Eric (rounded right-aligned).
5. **Name is bold, NOT oversized.** Tri Dao especially — modest H1, trust the reader. No 80px hero name.
6. **Underlined blue links — pure semantic HTML aesthetic.** Don't restyle links. The "anti-design" signal.

### Font choices
- **All 5 use system stacks.** Zero Google Fonts loaded across the cohort.
- Sans-serif default everywhere except Tri Dao (serif body — subtle differentiation).
- This is a **performance + restraint signal**: "I'm not trying to impress you with fonts."

### Color tone
- All 5 are within 5% of pure monochrome.
- The single accent is **blue links** (standard `#0066cc` family).
- **None use dark mode** in this cohort. Light-only is the aesthetic.
- Near-black (`#222` / `#333`) > pure `#000` is the consistent choice — softer, more readable.

### Visual "wow" without losing minimalism — the secrets
1. **Tagline rhythm** (Sasha): three short fragments separated by periods. `"ML Researcher. Cursor. NYC."` — conversational hook + zero ornament.
2. **Parenthetical nav state** (Tri Dao): `[About (current)]` instead of color/underline state. Stylish accessibility.
3. **Content-as-color** (Eric Wallace): monochrome page + full-color paper thumbnails. Visual life comes from the work itself.
4. **Inline thumbnails as visual bullets** (Olah): each post has a tiny image preview that creates a scannable rhythm down the page.
5. **Em-based vertical spacing** (Sasha): everything in `em`, so type-scale changes propagate to spacing — invisible craft.
6. **Photo placement variants**: top-centered (Sasha), left-of-text (Tri), right-of-text (Eric) — choose one, commit fully.

---

## Top 3 Borrowable Patterns for Yanjun

Yanjun is a PhD student. Don't borrow the AP-confidence (Tri Dao's name-as-H1 only works because everyone knows him). Borrow the **discipline of restraint**, not the swagger of established researchers.

### 1. Sasha Rush's tagline rhythm — three fragments, periods, conversational
Implement on hero:
```
Yanjun Chen. PhD Student. [University]. RLHF & multi-agent.
```
Or:
```
PhD Student. RLHF. Multi-Agent LLMs.
```
Four words to one sentence. No "passionate about" / "broadly interested in" — those are template smells. Borrow Sasha's directness; it scales down to PhD-student level perfectly.

### 2. Tri Dao's parenthetical nav state — `[About (current)]`
Replace any active-nav indicator (bold, color, underline) with the parenthetical `(current)` pattern. This is:
- **Accessible** (screen readers handle it cleanly)
- **Stylish** (rare on al-folio — instant differentiation)
- **Cheap to implement** in Jekyll/Liquid
This single move signals "this person reads designer blogs" without any visual heavy lifting.

### 3. Eric Wallace's content-as-color strategy + content-aligned photo
Two sub-patterns to combine:
- **Monochrome chrome (header/nav/footer), full-color content thumbnails.** All paper thumbnails / project cards become the visual interest. Page becomes monochrome except where work appears.
- **Right-align the hero photo next to bio prose** (not top-centered). Different from default al-folio about page; aligns with Eric's mature researcher feel. ~120-160px rounded square (not pure circle — softer).

Combined, these three changes move Yanjun's site from "al-folio template" to "this person thinks like Lilian/Tri Dao" — without claiming more authority than a PhD student warrants.

---

## What NOT to borrow (anti-patterns for Yanjun's level)

- **Lilian's "Lil'Log" branding** — only works because she's at OpenAI-tier visibility. PhD students need a name on the door, not a brand.
- **Tri Dao's tiny modest H1** — same reason. Yanjun should use a clear, confident name treatment (just not 80px display).
- **Olah's no-photo, text-only hero** — for a PhD student building network presence, an avatar humanizes. Don't go fully iconic until you're recognizable.
- **All-system-font without ANY differentiation** — Yanjun's site needs *one* subtle craft signal (e.g., Tri Dao's serif body, or a refined sans like Inter/IBM Plex Sans) to escape "al-folio default" critique. Pure system stack reads as template to non-designers.

---

## Open question for synthesis phase

Yanjun's reviewer feedback was "丑、审美不过关" (ugly, aesthetic doesn't pass). Pure-restraint route (this group) **risks reading as "still template"** to non-designer eyes — Lilian's site, to a layperson, looks unfinished. The Group 3 route works for *peers* who recognize the discipline, but may fail for *general* aesthetic critique.

**Recommendation for synthesis**: Take Group 3's restraint as the **foundation** (monochrome, system-leaning, whitespace-first), but layer in ONE deliberate craft signal from another group (e.g., a refined font like Inter / IBM Plex / Söhne; or a single accent color used precisely) so the page reads as "intentional minimalism" rather than "didn't customize the template."
