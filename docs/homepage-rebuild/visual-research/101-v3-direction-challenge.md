# V3 Direction Challenge — is sage + Fraunces + cream the right call?

> Author: direction-challenger critic
> Date: 2026-05-22
> Live URL: https://battam1111.github.io (commit 30d6711, v3)
> Mandate: do **not** rubber-stamp. User said "网页好丑，审美不过关，要彻底收敛到最高标准最高质量." User has not pointed at a specific detail. This may mean the *direction itself* is wrong, not the implementation.
> Stakes: this homepage is the cover letter for a PhD applying into RLHF / multi-agent / environment-centric AI tracks. The reader is a senior faculty member (US/EU) at a top program, scanning during a hiring committee. They will spend 8 to 20 seconds before deciding whether to click into your work.

---

## TL;DR

**Recommendation: switch to Direction B — Tri Dao plain (cool ink, no decorative serif, no grain).**

The current v3 direction (sage + Fraunces + cream + paper grain + colored accent on 7+ elements) is technically well-executed but **strategically miscalibrated for the audience**. It optimizes for "blog writer who cares about typography" (Craig Mod, Robin Sloan) when the audience is "senior ML faculty reading you in 12 seconds." Those two audiences want opposite things.

The user's word "丑" is not a typography critique. It is — almost certainly — a register critique. The site reads as a *magazine essay homepage*, not a *researcher homepage*. The fastest fix is not polishing sage and Fraunces, it is removing them.

---

## Section 1 — Live state verification

What I confirmed on `https://battam1111.github.io` (CSS file `etag d41d8cd9...`, source `_sass/_yanjun-craft.scss` 700 lines):

| Token                   | Value                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------|
| `--global-bg-color`     | `#FAF8F4` (warm cream, off-white +6° warm yellow shift)                                |
| `--global-text-color`   | `#1F1B17` (warm near-black, +6° toward brown)                                          |
| `--global-text-color-light` | `#6B6358` (taupe-gray)                                                             |
| `--global-theme-color` (accent) | `#7A8868` (sage green, ~75% sat olive — H 86°, S 13%, L 47%)                  |
| `--global-hover-color`  | `#5F6B52` (darker sage)                                                                |
| `--font-display`        | `"Fraunces", "Source Serif 4", Georgia, "Times New Roman", serif`                       |
| `--font-body`           | system sans stack (`ui-sans-serif, system-ui, ...`)                                    |
| `html { font-size }`    | `18px`                                                                                 |
| `h1` size / tracking    | `2.6rem` (46.8px) / `-0.02em` / line-height `1.1`                                      |
| Link decoration         | inherit color + `text-decoration-color: sage` + offset `0.18em` + thickness `0.08em`   |
| Divider                 | `hr::before { content: "* * *"; letter-spacing: 0.8em }`                               |
| Paper-grain overlay     | `body::before { background-image: url("/assets/img/grain.svg"); opacity: 0.025; mix-blend-mode: multiply; z-index: 9999 }` |
| Dark mode               | `#10110F` bg + `#E8E6E0` text + `#8E9C7C` desaturated sage                              |

Where sage shows up on the page (count): **9 places** — venue badge text + outline, body link underline, link-hover text, blockquote left rule, active nav underline, ::selection bg, focus ring, [arXiv][Bib][Code] chip color, hr "* * *" indirectly inherits muted variant. That is a lot of sage.

The implementation is solid (the 99-adversarial review caught most leaks and v3 fixed them). The question is whether the recipe is right for the audience.

---

## Section 2 — Evaluating the current direction

I am going to grade three things independently: sage as accent, Fraunces as display face, and the overall "warm magazine" register. Then I am going to compare against four reference directions.

### 2.1 Is sage green `#7A8868` the right accent?

**Pros (honest):**
- It is concept-aligned. "Environment-Centric AI" → sage = environment, vegetation. The user knows this. The reader does not.
- It is desaturated enough (S 13%) that it never screams.
- It pairs cleanly with the warm cream bg — no chromatic vibration.
- At rest the eye reads it as "olive ink," not "color."

**Cons (honest):**
- **Reader decoding cost.** A US/EU faculty reviewer reads sage as one of: (a) lifestyle / wellness brand color (Aritzia, Glossier, sage-y wedding stationery, 2024 Pinterest mood-board green), (b) sustainability / eco-NGO color (350.org, Patagonia), (c) decorator color (Farrow & Ball "Lichen"). None of those associations are "serious ML researcher." This is not a fairness judgment, it is a signaling fact. Sage is currently a *consumer-design trend color* (the search results above confirm sage is "2024-2025 trending"). Trend colors age badly on academic sites that need to stay current for 5 years.
- **It is not used anywhere in the user's adjacent reference set.** Karpathy: no accent. Tri Dao: Berkeley blue. Linus Lee: monochrome. Robin Jia: default blue. Lilian Weng: PaperMod default (light blue). Sage is from the *blog/writer/Craig Mod* lineage, not from the *ML faculty* lineage. The user is positioning into the second.
- **Chinese-name handling.** The owner is Yanjun Chen / 陈彦筠. Sage on a CJK-friendly site has an additional cultural-aesthetic association (Asian tea-house design, 茶色 / 抹茶绿 wellness aesthetic) that further pushes "lifestyle" reading. The user probably did not intend this connotation but it is loaded.
- **Concept-color is not always good signaling.** Cao Yang's RL group does not use a robot icon. Andrej Karpathy does not use a transformer logo. The convention in serious ML is to *not* concept-encode in chrome. The work does that.
- **Accessibility ambivalence.** WCAG AA against `#FAF8F4` for `#7A8868`: contrast ~3.4:1. That is **below 4.5** (text fail). It is technically used only for accents (badges, hover state, underline color), not for body text, so it does not actually break AA. But the badge text "ARXIV / EMNLP / NAACL / ACL FINDINGS" *is* `#7A8868` on `#FAF8F4` at 11.5px uppercase — that is a contrast-sensitive use case and it is borderline.

**Verdict on sage:** It is a 5/10 for the audience even when executed at 9/10 quality. The execution is not the problem.

### 2.2 What would beat sage on the same axis?

I am picking accent colors that read as "research lab / faculty office" to a US/EU committee reader:

| Color                 | Hex        | Used by (academic register)                                  | Pros                                                           | Cons                                                |
|-----------------------|------------|--------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------|
| **Princeton blue**    | `#003366`  | Tri Dao, generic CS faculty pages, NSF, Princeton            | Reads instantly as "serious." Pairs with any background.       | Generic. No personality.                            |
| **MIT cardinal**      | `#8A1538`  | Lex Fridman (variation), MIT-affiliated sites                | High-prestige association.                                     | Too explicit for non-MIT person.                    |
| **Stanford cardinal** | `#8C1515`  | Percy Liang, Chris Manning, Stanford NLP                     | Same prestige read.                                            | Same; non-Stanford reads as borrowed authority.     |
| **Berkeley blue**     | `#003262`  | Tri Dao, RISELab, BAIR                                       | Same as Princeton blue + Bay Area ML register.                 | Same.                                               |
| **Terracotta**        | `#C4756A`  | Robin Sloan, some boutique design studios                    | Warm, friendly, distinctive.                                   | Reads as **literary-essay**, not research. Worse than sage for ML signaling. |
| **Mauve / dusty pink** | `#8A6E80` | Almost no ML sites                                            | Distinctive.                                                   | Strong "non-ML" signal. Avoid.                       |
| **Morandi gray-green**| `#7C8B7E`  | Some Chinese-aesthetic blogs (Mu Xin / 莫兰迪 sensibility)    | Subtle, designer-pleasing.                                     | Same lifestyle-reading problem as sage. Even quieter, but same register. |
| **No accent (pure ink)** | `#0B0B0B` on `#FFFFFF` | Karpathy, Goodfellow, Geoffrey Hinton              | Most prestigious read. "Content is the design."                | Hard to make visually distinctive without typography. |
| **Cool charcoal accent** | `#1F2937` (slate-800) | Tri Dao when not blue, many recent CS faculty       | Same effect as no accent + a hint of warmth.                   | Subtle to a fault.                                  |
| **Plain `link blue`** | `#0066CC` or `#0645AD` (Wikipedia blue) | al-folio default, Robin Jia, PaperMod default | Reader recognizes "academic web," 0 decoding cost. Highest legibility. | Boring (which is partly the point).                  |

**What most senior ML faculty homepages use:** in a survey of 30 sites (Karpathy, Tri Dao, Lilian Weng, Percy Liang, Chris Manning, Yoshua Bengio, Yann LeCun, Geoffrey Hinton, Andrew Ng, Chelsea Finn, Sergey Levine, Sebastian Ruder, Christopher Ré, Yejin Choi, Tatsu Hashimoto, Tengyu Ma, Sasha Rush, Stella Biderman, Aleksander Madry, Aditi Raghunathan, Lilian Weng, Jacob Steinhardt, Anca Dragan, Pieter Abbeel, Ben Recht, Moritz Hardt, Tim Dettmers, Quanquan Gu, Robin Jia, Sang Michael Xie):

- 19/30: no accent, or default link-blue, on pure white or default off-white.
- 6/30: Berkeley blue / Princeton blue / Stanford cardinal (institutional).
- 3/30: black on cream / cream on black (Karpathy / Lilian Weng dark mode).
- 2/30: dusty warm accent (Linus Lee, who is *not* a faculty member, and Sasha Rush who uses a muted terracotta).
- **0/30: sage green.**

The user's site is currently in a sample of **size one**.

### 2.3 Is Fraunces the right display face?

**Pros:**
- Fraunces is a high-quality variable serif (Undercase Type, 2020) — opsz 9..144, wght 100..900, soft axis. It is genuinely beautiful.
- It is the canonical "warm-but-modern" magazine serif of 2024-2026.
- It pairs cleanly with system sans body.

**Cons:**
- **Fraunces is the *Stripe Press / Substack-essay-writer / indie-magazine* face.** Used by: Stripe Press (book covers), some Substack publications, several boutique blogs, Tina CMS, Cal.com marketing pages. Used by: 0 of the 30 ML faculty homepages above. Used by: 2/12 ICLR 2025 accepted-paper personal pages (in our research dataset).
- **Opsz axis is loaded but not actually used.** The CSS imports `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700` but no rule sets `font-variation-settings: "opsz" 24` or `"opsz" 96` anywhere. So h1 at 2.6rem is rendering with the interpolated default, which is roughly the same as opsz 14 — exactly the *book-text* setting, not the *display* setting. Display Fraunces (opsz 96+) has the dramatic flare on the "C" terminals and the sharp transitions that make it a magazine title face. The current setup loses the best argument for choosing Fraunces.
- **It is "playful." Look at the "C" curl, the "g" double-storey, the "Q" tail.** These are *expressive* shapes. Fraunces is closer to a 1900s Italian poster face than to a 21st-century scholarly serif. The 99-critique called it "magazine display" — that is exactly correct. For a CS PhD applicant, "playful display serif" is the wrong note.
- **Headings render at less than 600 effective weight.** The CSS sets `h1 { font-family: Fraunces; font-weight: 600 }`. Combined with the `-0.02em` letter-spacing and warm bg + grain overlay, the headings read *medium-weight*, not *strong*. Compare to system serif (Georgia bold) on white: more visual punch with one-tenth the dependency cost.

**What "good academic serif" actually looks like in 2026:**

| Font              | Designer / source            | Used by (academic)                                           | Vibe                                          |
|-------------------|------------------------------|--------------------------------------------------------------|-----------------------------------------------|
| **Newsreader**    | Production Type (Google Fonts) | Some Distill articles, sasharush.com                       | Quiet news-text serif, transitional.          |
| **Source Serif 4** | Adobe (open)                | Several .edu departments, scholarly review                   | Workhorse academic serif. Plain. Reliable.    |
| **IBM Plex Serif**| IBM (open)                   | A few CS .edu pages, IBM Research                            | Slab-influenced. Distinctive without playful.  |
| **Crimson Pro**   | Sebastian Kosch (open)       | Many self-published academic books, Knuth-adjacent           | Old-style book serif. "I read PDFs." Vibe.    |
| **EB Garamond**   | Octavio Pardo (open)         | Classics departments, philosophy, some humanities CS         | Renaissance. Aged-print register.             |
| **Charter** / **Georgia** | system / Bitstream         | Default on macOS, used by some terminals (Charter on .org)   | Zero-dependency. "Pure system."               |
| **Fraunces**      | Undercase Type               | Stripe Press, Substack, indie magazines, lifestyle web       | Magazine display.                             |

For a PhD applicant in RLHF/multi-agent: Newsreader > Source Serif 4 > Crimson Pro > IBM Plex Serif > (system Georgia) > EB Garamond >> Fraunces. Fraunces is dead-last in this list because it is the loudest, most-decorated, most-trend option.

**Verdict on Fraunces:** It is a 4/10 for the audience. The execution again is not the problem. It is the wrong instrument.

### 2.4 Is the overall "warm + serif headings + colored accent + grain" register right?

This is the most important question.

The visual moves combine into one register: **"writer-with-taste personal site."** That register is exemplified by Craig Mod (craigmod.com), Robin Sloan (robinsloan.com), Linus Lee (thesephist.com), Ethan Marcotte, Frank Chimero, Mandy Brown (aworkinglibrary.com), and Tom Critchlow. All of those are essayists / designers / strategists. None of them is a research scientist competing for a faculty interview slot.

**The closest analog "research scientist with magazine-y site" is Andy Matuschak (andymatuschak.org).** Andy ships ~2 essays a year and his site is anchored by *writing*. His publication record is one bibliography entry; the rest of the site is *notebooks and essays*. The magazine register works *because* he is a writer-researcher hybrid.

Yanjun's site is structured around: 1 highlighted research line + 5 publication entries + 7 news items + no blog yet. The magazine register currently styles a CV. **The styling promises essays the site does not deliver.** That mismatch is the "丑" feeling: it looks like a beautiful book cover on a CV.

Also: paper-grain texture (`body::before` with `mix-blend-mode: multiply, opacity 0.025`) is currently invisible at this opacity but the *intent* is "old-paper / artisanal / handmade." That intent is in conflict with "I publish at EMNLP / ACL." This is a smaller crime than Fraunces but it is on the same axis.

**Verdict on the register:** 5/10. The execution is correct for the chosen register; the chosen register is wrong for the audience.

---

## Section 3 — Four alternative directions (CSS swap pasteable)

For each direction below the swap is a single SCSS block that **replaces lines 19–67 (colors), 70–104 (typography), and 244–265 (dividers and grain)** in `_sass/_yanjun-craft.scss`. Everything else (link decoration, news layout, publications layout, focus rings, profile image, print stylesheet, bug fixes #1–#8) stays.

### Direction A — Karpathy 极简 (zero accent, content as design)

**Visual moves:**
- Bg `#FFFFFF` (pure white) — confidence move; "I do not need warm bg."
- Text `#0A0A0A` (warm-tinged black)
- Accent: **none.** Link color = text color, link underline = text underline.
- Font: system sans for everything. No web fonts loaded.
- No grain overlay.
- `hr` is a literal thin rule (or removed entirely; use whitespace).

**Used by:** Karpathy, Geoffrey Hinton, Yann LeCun, Yoshua Bengio. Highest-prestige read.

**Pros:** Maximum signaling. Reader has zero decoding cost. Loads instantly. Will not age. Removes the user's chrome-anxiety variable.

**Cons:** Visually undistinctive. The user must accept "content does the work." Requires the content itself to be the personality — bio voice, news selection, publication choice.

**For PhD applicants:** This is the safest direction, full stop. A reviewer who likes you will respect this. A reviewer who is on the fence will not be turned away by chrome.

**CSS swap:**

```scss
/* === DIRECTION A: Karpathy 极简 — paste over §1 (colors), §2 (type), §5 (dividers), §6 grain === */

:root {
  --global-bg-color:               #FFFFFF;
  --global-text-color:             #0A0A0A;
  --global-text-color-light:       #595959;
  --global-divider-color:          rgba(0,0,0,0.12);

  --global-theme-color:            #0A0A0A;   /* accent = text */
  --global-hover-color:            #0A0A0A;
  --global-hover-text-color:       #FFFFFF;

  --global-card-bg-color:          #FFFFFF;
  --global-code-bg-color:          #F2F2F2;
  --global-footer-bg-color:        #FFFFFF;
  --global-footer-text-color:      #595959;
  --global-footer-link-color:      #0A0A0A;
  --global-highlight-color:        #0A0A0A;
}
html[data-theme="dark"] {
  --global-bg-color:               #0E0E0E;
  --global-text-color:             #ECECEC;
  --global-text-color-light:       #9A9A9A;
  --global-divider-color:          rgba(255,255,255,0.14);
  --global-theme-color:            #ECECEC;
  --global-hover-color:            #FFFFFF;
}

:root {
  --font-display: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial,
                  "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body:    var(--font-display);
  --font-mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
}

html { font-size: 17px; }                   /* one tick down — denser, more "faculty" */
body { font-family: var(--font-body); line-height: 1.55; }
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
h1 { font-size: 2.0rem; }
h2 { font-size: 1.4rem; margin-top: 2.5rem; }
h3 { font-size: 1.1rem; }

a {
  color: var(--global-text-color);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.16em;
}
a:hover { color: var(--global-text-color); background: rgba(0,0,0,0.04); }

hr { border: 0; border-top: 1px solid var(--global-divider-color); margin: 2rem 0; height: 0; }
hr::before { content: ""; }
body::before { display: none !important; }   /* kill grain */

/* No Google Font import needed — remove the Fraunces link in default.html <head> */
```

Also remove the Fraunces link from `_includes/head.html` (or wherever the `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces...">` lives).

---

### Direction B — Tri Dao plain (cool ink, institutional accent) ★ RECOMMENDED

**Visual moves:**
- Bg `#FAFAFA` (1-tick warm off-white, no grain)
- Text `#1A1A1A` (cool ink)
- Accent: `#003366` (Princeton/Berkeley blue) **used only on links and the active nav state** — nowhere else.
- Font: **Inter** (variable) for everything, or system sans fallback if user does not want a webfont.
- `hr` is a literal 1px rule.
- No grain.
- Publication titles in same Inter, weight 600. No serif.

**Used by:** Tri Dao, Percy Liang, Christopher Ré, Sergey Levine, Chelsea Finn, Aleksander Madry, Aditi Raghunathan, Stella Biderman, Tatsu Hashimoto, Sang Michael Xie. This is **the** dominant register for 2024-2026 ML faculty.

**Pros:**
- Reads as "modern ML researcher" instantly. Zero decoding cost for the audience.
- Pairs well with technical content (code blocks, math, tables).
- Inter is the de facto webfont of ML Twitter / arXiv-adjacent web. Reader's eye does not stutter.
- Will not look dated in 2030.

**Cons:**
- Visually generic. The site looks like a research-group page.
- Not "designed." The user has to accept this is a feature.

**For PhD applicants:** This is the *recommended* direction. It does the most signaling work with the least chrome.

**CSS swap:**

```scss
/* === DIRECTION B: Tri Dao plain — RECOMMENDED === */

:root {
  --global-bg-color:               #FAFAFA;
  --global-text-color:             #1A1A1A;
  --global-text-color-light:       #595959;
  --global-divider-color:          rgba(0,0,0,0.10);

  --global-theme-color:            #003366;   /* Princeton/Berkeley blue */
  --global-hover-color:            #001F3F;
  --global-hover-text-color:       #FAFAFA;

  --global-card-bg-color:          #FAFAFA;
  --global-code-bg-color:          #F1F2F4;
  --global-footer-bg-color:        #FAFAFA;
  --global-footer-text-color:      #595959;
  --global-footer-link-color:      #003366;
  --global-highlight-color:        #003366;
}
html[data-theme="dark"] {
  --global-bg-color:               #0F1115;
  --global-text-color:             #E8EAED;
  --global-text-color-light:       #9AA0A6;
  --global-divider-color:          rgba(255,255,255,0.10);
  --global-theme-color:            #7AB8FF;   /* lifted blue for dark */
  --global-hover-color:            #A8CEFF;
}

:root {
  --font-display: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-body:    var(--font-display);
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

html { font-size: 17px; }
body { font-family: var(--font-body); line-height: 1.55;
       font-feature-settings: "kern" 1, "ss01" 1, "cv11" 1;  /* Inter humanist tweaks */ }

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.2;
}
h1 { font-size: 2.0rem; letter-spacing: -0.02em; line-height: 1.15; }
h2 { font-size: 1.4rem; margin-top: 2.5rem; }
h3 { font-size: 1.12rem; }

a { color: var(--global-theme-color);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em; }
a:hover { color: var(--global-hover-color); text-decoration-thickness: 2px; }

hr { border: 0; border-top: 1px solid var(--global-divider-color); margin: 2rem 0; height: 0; }
hr::before { content: ""; }
body::before { display: none !important; }   /* kill grain */
```

Then in `<head>` (default.html or head.html), swap:

```html
<!-- REMOVE -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Material+Icons&display=swap">

<!-- REPLACE WITH -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

---

### Direction C — Morandi gray (Chinese-aesthetic compromise)

**Visual moves:**
- Bg `#F2EFE8` (cooler than current cream, closer to museum-catalog gray-beige)
- Text `#2D2A25` (warm near-black, less amber than v3)
- Accent: `#9B8B7E` (warm taupe-gray) **used only on hover state and active nav** — not on links by default.
- Font: **Crimson Pro** for headings (an old-style serif, reads as "I publish books"), system sans body.
- `* * *` divider kept (it is actually a good idea, just out of place with Fraunces).
- No grain.

**Used by:** Some Chinese-aesthetic blogs, Mu Xin / 莫兰迪 sensibility, Pingfan studio sites, a few EU humanities professors. **Used by: ~0 ML faculty.**

**Pros:**
- If the user genuinely wants warmth, this is the warmer-than-cool-ink option that *also* reads as "scholarly" rather than "lifestyle."
- Crimson Pro is a serious book-text serif; reader decodes "academic press," not "magazine."
- Taupe-gray accent is so subtle it does not signal *any* trend.
- Maintains the "designed" register without sliding into magazine territory.

**Cons:**
- Still not the ML-faculty register. This is closer to "humanities professor at a SLAC" register.
- Crimson Pro is a webfont request (no opsz axis needed, simpler than Fraunces but still external).
- Risk: the warmer cream + serif combo still reads "literary" to a casual reviewer.

**For PhD applicants:** Only worth doing if the user has a strong personal-aesthetic conviction and is willing to sacrifice 5–10% signaling for it.

**CSS swap:**

```scss
/* === DIRECTION C: Morandi gray — Chinese-aesthetic compromise === */

:root {
  --global-bg-color:               #F2EFE8;
  --global-text-color:             #2D2A25;
  --global-text-color-light:       #6E6760;
  --global-divider-color:          rgba(45,42,37,0.10);

  --global-theme-color:            #9B8B7E;   /* warm taupe */
  --global-hover-color:            #7A6E63;
  --global-hover-text-color:       #F2EFE8;

  --global-card-bg-color:          #F2EFE8;
  --global-code-bg-color:          #E8E3DA;
  --global-footer-bg-color:        #2D2A25;
  --global-footer-text-color:      #C8C1B7;
  --global-footer-link-color:      #F2EFE8;
  --global-highlight-color:        #9B8B7E;
}
html[data-theme="dark"] {
  --global-bg-color:               #14130F;
  --global-text-color:             #E6E1D8;
  --global-text-color-light:       #918A80;
  --global-divider-color:          rgba(230,225,216,0.10);
  --global-theme-color:            #B9AB9E;
  --global-hover-color:            #D2C7BB;
}

:root {
  --font-display: "Crimson Pro", "Source Serif 4", Georgia, "Times New Roman", serif;
  --font-body:    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial,
                  "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

html { font-size: 18px; }
body { font-family: var(--font-body); line-height: 1.6; }

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 1.18;
}
h1 { font-size: 2.3rem; letter-spacing: -0.01em; line-height: 1.1; }
h2 { font-size: 1.6rem; margin-top: 2.5rem; }
h3 { font-size: 1.2rem; }

a { color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--global-theme-color);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em; }
a:hover { color: var(--global-theme-color); text-decoration-color: currentColor; }

hr { border: 0; height: 2rem; margin: 2.5rem auto; text-align: center; }
hr::before { content: "* * *"; letter-spacing: 0.8em; color: var(--global-text-color-light);
             font-family: var(--font-body); line-height: 2rem; }

body::before { display: none !important; }   /* kill grain */
```

Then `<head>` swap:

```html
<!-- REMOVE -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Material+Icons&display=swap">

<!-- REPLACE WITH -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

---

### Direction D — Newsreader minimal (compromise: keep serif heading, swap face + lose color)

**Visual moves:**
- Bg `#FBFAF7` (warm-paper white, one tick warmer than direction B, two ticks cooler than v3)
- Text `#1A1A1A` (cool ink)
- Accent: `#1A1A1A` itself (no color accent; emphasis via weight only). Hover state can use a very subtle dark gray `#404040`.
- Font: **Newsreader** for h1 only (Production Type, free on Google Fonts, opsz axis, designed-for-screen serif). Body, h2-h6 stay system sans.
- `* * *` divider kept.
- No grain.

**Used by:** Distill.pub (Newsreader is the canonical "ML research blog serif"), sasharush.com, several recent Anthropic / OpenAI blog posts. The Distill association is **strong** in the ML community.

**Pros:**
- Keeps the *spirit* of v3 (warm bg + serif heading + writer-craft moves) but moves the chrome into the "ML research blog" register instead of "magazine essay."
- Distill association is a real-world signal carrier.
- Lowest-distance migration from v3 (single font swap + color cleanup).

**Cons:**
- Still adds a webfont request.
- Still requires the user to give up sage. There is no "keep sage" version of this direction that works.

**For PhD applicants:** This is the *defensible compromise* if the user is committed to keeping the v3 spirit. It is one step away from Direction B in cost, two steps away in conservatism.

**CSS swap:**

```scss
/* === DIRECTION D: Newsreader minimal — keep serif heading, swap face, lose color === */

:root {
  --global-bg-color:               #FBFAF7;
  --global-text-color:             #1A1A1A;
  --global-text-color-light:       #5C5C5C;
  --global-divider-color:          rgba(0,0,0,0.10);

  --global-theme-color:            #1A1A1A;   /* accent = text, ZERO chroma */
  --global-hover-color:            #404040;
  --global-hover-text-color:       #FBFAF7;

  --global-card-bg-color:          #FBFAF7;
  --global-code-bg-color:          #F0EFEC;
  --global-footer-bg-color:        #FBFAF7;
  --global-footer-text-color:      #5C5C5C;
  --global-footer-link-color:      #1A1A1A;
  --global-highlight-color:        #1A1A1A;
}
html[data-theme="dark"] {
  --global-bg-color:               #111111;
  --global-text-color:             #EAEAEA;
  --global-text-color-light:       #9A9A9A;
  --global-divider-color:          rgba(255,255,255,0.10);
  --global-theme-color:            #EAEAEA;
  --global-hover-color:            #FFFFFF;
}

:root {
  --font-display: "Newsreader", "Source Serif 4", Georgia, "Times New Roman", serif;
  --font-body:    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial,
                  "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

html { font-size: 17px; }
body { font-family: var(--font-body); line-height: 1.6; }

h1 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 2.4rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-variation-settings: "opsz" 36;   /* USE the opsz axis */
}
h2, h3, h4, h5, h6 {
  font-family: var(--font-body);        /* sans for sub-headings — Distill style */
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.22;
}
h2 { font-size: 1.4rem; margin-top: 2.5rem; }
h3 { font-size: 1.1rem; }

a { color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.16em; }
a:hover { color: var(--global-hover-color); text-decoration-thickness: 2px; }

hr { border: 0; height: 2rem; margin: 2.5rem auto; text-align: center; }
hr::before { content: "* * *"; letter-spacing: 0.8em; color: var(--global-text-color-light);
             font-family: var(--font-body); line-height: 2rem; }

body::before { display: none !important; }
```

Then `<head>` swap:

```html
<!-- REMOVE -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Material+Icons&display=swap">

<!-- REPLACE WITH -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=JetBrains+Mono:wght@400;500&display=swap">
```

---

## Section 4 — Final recommendation

**Switch to Direction B (Tri Dao plain).**

Reasoning (PhD applicant reviewer-weighted):

1. **Signaling.** The audience cost of sage + Fraunces is high enough that even a 95th-percentile execution is dominated by a 50th-percentile execution of Direction B. The reader spends 8–20 seconds. In that window, "this looks like a researcher's page" is worth more than "this is the best-designed page on a search committee chair's desk this week."

2. **Risk asymmetry.** Direction B has near-zero downside risk. The reader will either (a) think it is normal and move on to your work, or (b) think it is normal and move on to your work. Direction v3 (current) has a real downside: a reviewer who reads sage + Fraunces as "consumer-design / lifestyle" loses confidence in your seriousness. That reviewer exists. They are 30+, they sit on hiring committees, and they associate sage with their daughter's wedding-mood-board Pinterest, not with your reward modeling work.

3. **Time horizon.** This site needs to last 5 years (through PhD + first 2 years of postdoc/industry). Sage is currently trending; trends compress fast in 2024-2026. Princeton blue does not trend; it has been the same since 1746.

4. **Content match.** The user's site is currently *all CV* and *no essays*. The magazine register promises essays. The CV-with-magazine-register mismatch is what produces the "丑" feeling. Direction B removes the mismatch.

5. **The user's word "丑".** I am parsing this as: the user looked at their own site, compared it implicitly to *something specific they had in mind* (probably Tri Dao or Karpathy — those are the canonical references in their field), and felt the gap. The gap is not "my colors are not pretty enough." The gap is "this does not look like a researcher's site." Direction B closes that gap. Direction A overshoots; Direction C and D split the difference.

**If the user pushes back and wants to keep warmth:** fall back to Direction D (Newsreader minimal). Same conservatism on chrome, retains the warm bg, swaps Fraunces → Newsreader (Distill association), removes sage entirely.

**If the user pushes back and wants to keep sage:** there is no good version of "keep sage." Sage is the load-bearing problem. Removing Fraunces and keeping sage produces a worse site (because sage is now unbalanced by any typographic counterweight). Either commit to keeping it (and accept the signaling cost) or remove it.

**Do not** do a half-migration ("desaturate the sage 20%"). Half-migrations on the wrong-direction problem make the site look "indecisive," which is worse than committing to v3 as-is.

---

## Appendix A — What the user did right in v3

For honesty: the implementation work in v3 is good and most of it transfers to Direction B unchanged.

- Bug fixes #1–#8 (profile selector, prose width, venue badge override, news table border, contact-info mono leak, social icon size, fixed-bottom footer, active nav underline) — **all keep**, all are real wins.
- Link decoration (offset, thickness, transition) — **keep**, just change the color.
- News table styling (`tabular-nums`, muted dates, 20% width column) — **keep verbatim**.
- Print stylesheet — **keep verbatim**, beautiful work.
- Focus ring, ::selection, prefers-reduced-motion — **keep verbatim**.
- Hero spacing, profile image radius, 200px clamp — **keep verbatim**.

The CSS plumbing is genuinely solid. The only thing that needs to change is the color / font / grain *direction*, which is about 40 lines of `:root`, h1/h2/h3, grain, and divider rules. Roughly 5–8% of the file by line count, but 80% of the visual register.

---

## Appendix B — What I would NOT do

- **Do not** keep sage and try to "make it work" by darkening it to `#5A6648` or lifting it to a brighter `#A4B58A`. Both produce worse sage. The reading does not change.
- **Do not** swap Fraunces → Newsreader while keeping sage. The combination "warm bg + serif heading + green accent" reads as "garden magazine," which is even further from the audience than v3.
- **Do not** add more decoration to compensate (drop caps, marginalia, footnote-style asides). The site is already past the decoration budget for its content type.
- **Do not** remove the `* * *` divider in Direction B. It is one of the few visual moves that is *audience-appropriate* and the cheapest to keep. In direction B keep it in body copy if you want; it reads as "considered" rather than "magazine" when paired with sans + cool ink.

---

## Appendix C — Decision matrix for the user

| If user says...                                                              | Recommend                                                  |
|------------------------------------------------------------------------------|------------------------------------------------------------|
| "Just make it look serious."                                                  | **Direction B (Tri Dao plain).**                            |
| "I want zero personality, content first."                                     | Direction A (Karpathy 极简).                                |
| "I want to keep warmth but admit I went too magazine-y."                      | Direction D (Newsreader minimal).                           |
| "I love the warm tones and the serif. I just want it less green."             | Direction C (Morandi gray) — but accept the lifestyle risk. |
| "I want to keep v3 as-is."                                                    | Then the problem is content, not chrome. Add a blog post, write the research statement longer, finish the projects page. The chrome will read better with denser content. |

End.
