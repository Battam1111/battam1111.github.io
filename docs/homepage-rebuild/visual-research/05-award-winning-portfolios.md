# Visual Research — Group 5: Award-winning Minimal Portfolios

**调研对象**: Brittany Chiang / Lee Robinson / Josh W. Comeau / Linus Lee / Ross Zurowski
**目标读者**: Yanjun Chen (PhD 学术主页 rebuild)
**关键约束**: 这5个站是 web dev / designer 的 portfolio — visual craft 极高，但很多元素是"portfolio-y"，**不能照搬到学术主页**。本报告严格区分"可借鉴" vs "不可借鉴"。
**基线对比**: al-folio default theme — 模板感强、缺乏 craft 细节、typography 平庸。

---

## 0. 评估框架

每个站从7个维度打分（0-10，academic-portability 维度独立打分）：
- **Visual craft (V)**: 整体视觉品质
- **Typography (T)**: 字体选择与层级
- **Color (C)**: 配色 craft
- **Layout (L)**: 信息架构
- **Hero (H)**: 着陆区设计
- **Micro-craft (M)**: 微交互/细节
- **Academic-portability (A)**: 多少可以 port 到 PhD 学术主页（0=完全不能 port，10=可以整套搬）

---

## 1. Brittany Chiang — https://brittanychiang.com/

> 业界 portfolio 的 gold standard。v4 在 GitHub 6k+ stars，是无数前端工程师的 reference 实现。

### Scores
| V | T | C | L | H | M | A |
|---|---|---|---|---|---|---|
| 9 | 8 | 9 | 9 | 7 | 10 | **6** |

### Typography
- **Inter** (footer 明示) — geometric sans，500/600 weight 主导
- 主标题 ~clamp(40px, 8vw, 80px)，weight 700，line-height 1.1
- Body ~16-18px，line-height 1.5，weight 400
- 段落区/卡片标题用 weight 500-600 拉层级
- Letter-spacing 在小字号 caps 上略放（~0.05em，给社交链接、tag 用）

### Color palette (深色主题 v4 版本)
- 背景 `#0a192f` (deep navy / slate-950 tone)
- 主标题文本 `#ccd6f6` (slate-100，不是纯白)
- 副文本 `#8892b0` (slate-400 muted)
- Accent 单一 cyan `#64ffda` — 用在链接、active nav、tag border
- Tag 背景 `rgba(100, 255, 218, 0.1)` — accent 颜色 10% 透明 fill
- **关键 craft**: 全站只有 1 个 accent 色，其余全是 navy/slate 灰度阶梯 — 这是"严肃但有 signature"的核心配方

### Layout
- **两栏 sticky split**: 左 50% sticky hero（name + nav + socials），右 50% 滚动内容
- 桌面 max-width ~1280px，左右各 50% column
- 移动端塌成单列，sticky 解除
- 右栏每个 section 之间有大块 vertical whitespace (~150px)
- nav 在左栏垂直排列，active item 前面有一条延长的横线 (`width: 64px → 100px on active`)

### Hero
- 没有头像
- 三行：名字 (大) / 职位 (中) / 一句 tagline (小)
- 下面是 4-5 个垂直 nav item，最后是水平 social icons
- **整个左栏不滚动** — 这是最大的视觉签名

### Micro-craft (这里是真正的 gold)
1. **Cursor spotlight**: 一个半径 ~600px 的径向渐变跟随鼠标，背景从 navy → slightly lighter navy，给整页 depth
2. **Group hover on cards**: 鼠标悬停整张 work card 时，标题变 accent 色 + 卡片背景出现 `rgba(2, 12, 27, 0.7)` overlay + 左侧公司 logo 微微缩放
3. **External link 图标**: 链接右侧带 `↗` arrow，hover 时 arrow 向右上平移 4px (transition: transform 250ms ease)
4. **Nav active indicator**: 横线长度做 `transition: width 250ms ease, background 250ms ease`
5. **Section 编号**: 每个大标题前有小号 mono 数字 `01. ` `02. ` — 这是 v4 的 signature

### 严格筛选：哪些可以 port 到学术主页

| 元素 | 可否 port | 理由 |
|---|---|---|
| 两栏 sticky split | **YES** | sticky 左栏放 name/nav/socials，右栏滚动 publications/news — 这正是高端学术主页（Karpathy、Justin Johnson 旧版）的范式 |
| 单一 accent 色 + 灰度阶梯配色 | **YES** | 学术主页**最该学这个**。al-folio 默认色彩太杂；改为 1 个 accent (建议不要 cyan，太 portfolio；选 deep blue / burgundy / forest green) |
| Inter typeface | **YES** | Inter 在学术圈完全合适（中性、可读） |
| Cursor spotlight | **NO** | 太 portfolio-y，学术主页见到会显得轻佻 |
| Section 编号 `01.` | **MAYBE** | 用 mono 给章节编号在学术语境 OK（像 sigchi paper section numbering），但要克制 |
| Card hover lift + overlay | **PARTIAL** | 学术主页的 publication card hover **只做** "背景从 transparent → very subtle tint" (alpha 0.03)，不要 lift |
| External link arrow `↗` | **YES** | 链接右侧带小箭头是学术圈完全接受的语义增强 |
| Tag pills with accent border | **YES** | publication keywords、co-author 名字可以用淡 accent tag |
| Deep navy 全黑主题 | **NO** | 学术主页默认应当 light mode，dark 作为可选。Brittany 那种 navy 太 product 感 |

### 3 条可借鉴 takeaways for academic site
1. **左 sticky + 右 scroll 的两栏 layout**: 学术 sidebar 不再是 al-folio 那种 "头像顶部 + nav 横排" — 改为左栏垂直 sticky（headshot + name + nav + email + ORCID/Scholar）。Yanjun 是 PhD，sticky 信息卡 = 简历常驻视野。
2. **单 accent + 灰度阶梯**: 砍掉 al-folio 默认的 link blue / link purple / brand color 等多色系统，全站只留一个 accent (建议 `#1e40af` deep indigo 或 `#7c2d12` burgundy)，其余用 8 阶灰度 (slate-50 → slate-900)。
3. **Mono section numbering**: section 标题前用等宽小数字 `01. Publications` `02. News` — 给静态页一种"被 typeset"的 craft 感，又不会过度装饰。

---

## 2. Lee Robinson — https://leerob.com/ (旧 leerob.io)

> Vercel VP of Product 个人站。next.js 团队代表作。极简到几乎"看不见设计"。

### Scores
| V | T | C | L | H | M | A |
|---|---|---|---|---|---|---|
| 8 | 9 | 8 | 8 | 8 | 7 | **9** |

### Typography
- 系统字体栈 `-apple-system, BlinkMacSystemFont, "Segoe UI"` (在 SF Pro 上看起来最好)
- 主标题不大 — h1 仅 ~24-28px，weight 700
- Body 16px，line-height 1.6-1.75
- 几乎没有 letter-spacing 调整
- **核心 craft**: typography hierarchy 用 weight + spacing 而非 size — 像 Medium / Substack 的阅读体验

### Color
- Light: `#fff` 背景 / `#000` 文本 / `#171717` (neutral-900) 副文本 / `#737373` (neutral-500) muted
- Dark: `#0a0a0a` 背景 / `#fafafa` 文本
- Accent: **没有** — 链接就用 underline，没有 highlight color
- 这是"无 accent"流派 — 所有视觉对比全部靠 weight 和 space 制造

### Layout
- 单列居中
- max-width **极窄**: ~640-680px (`max-w-2xl` Tailwind)
- 大量上下 padding (top ~80-120px)
- Header 是一个简短 nav (home / about / blog) + theme toggle
- 没有 sidebar、没有装饰

### Hero
- 一张小头像（圆形 ~80px）
- 名字 + 一行 tagline
- 下面直接是 2-3 段散文式自我介绍
- 完全像一篇 essay 的 byline

### Micro-craft
- 链接全部 `text-decoration: underline; text-underline-offset: 4px`
- hover 时 underline 变粗 (`text-decoration-thickness: 2px`)
- 没有任何动画/transition (除了 dark mode 切换)
- 卡片简单到几乎是裸 `<a>` + border-bottom dotted

### 严格筛选：哪些可以 port 到学术主页

| 元素 | 可否 port | 理由 |
|---|---|---|
| 系统字体栈 | **MAYBE** | 学术页用 Inter 比系统栈更跨平台一致，建议不学 |
| 极窄 max-width (~680px) | **YES** | 学术主页 **首页** body content 用 680px 阅读体验最佳；publications 列表可以更宽 |
| 无 accent 配色 | **MAYBE** | 太极端 — 学术页保留 1 个低饱和 accent 仍有助于视觉锚定，但 Lee 的思路值得参考 |
| underline + offset 4px 链接 | **YES** | 这是学术页最该学的链接样式 — 比 al-folio 的"hover 出现 underline"更印刷感 |
| 单列居中 layout | **YES** | 至少 about / blog 页应用这个；publications 可以独立宽栏 |
| 圆形小头像 + name + tagline + 散文 bio | **YES** | 整个 hero 形态可以直接照搬，学术圈完全接受 |
| Theme toggle 极简 sun/moon icon | **YES** | 比 al-folio 默认的多按钮 toggle 干净 |

### 3 条可借鉴 takeaways
1. **印刷感链接 underline**: `text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px`，hover 时 thickness → 2px。学术主页所有 publication / external link 都该用这套，比 al-folio 默认 hover-only underline 高级太多。
2. **窄列阅读宽度**: 首页 bio / news 区域用 max-width 680px，typography 用 16/1.65 — 像在读一篇 personal essay。`pages.about` 已经是这个思路但 al-folio 默认 ~800px 偏宽。
3. **Weight-driven hierarchy**: 不靠字号拉差距，靠 weight (400 body / 600 subhead / 700 head) + 上下 margin 制造层级。学术页 publication 标题不需要做 24px，18px weight 600 + 上下 32px margin 已经足够分量。

---

## 3. Josh W. Comeau — https://www.joshwcomeau.com/

> CSS 教育者，全栈视觉 maximalist。site 是行走的 CSS demo — 渐变、动效、custom illustration、theme system 一应俱全。

### Scores
| V | T | C | L | H | M | A |
|---|---|---|---|---|---|---|
| 10 | 9 | 10 | 8 | 9 | 10 | **3** |

### Typography
- **Wotfard** (custom geometric sans) + **Recoleta** (chubby display serif) 做主题对比
- 主标题用 Recoleta 700，body 用 Wotfard 400
- Recoleta 的 "y" "g" 有 playful 弧度 — 这是 Josh 的视觉签名
- 大量字号阶梯，display 字号能到 64px+

### Color
- **彩色 gradient 主导**: 紫粉蓝橙的 wash gradient 在 hero、card border、code block
- 5+ accent colors (primary purple, pink, teal, yellow, orange)
- 浅色主题: 暖 off-white 背景 (`#FAF9F6` 类似)，深色主题: 深紫蓝 (`#1f1933`)
- Dark mode 是真"切换主题色"，不是简单反色 — gradient 也跟着换

### Layout
- 单列居中 max-width ~720-800px
- 但带"溢出 callout" — figure / aside 元素会延伸出 column 宽度 (negative margin)
- Section 间用 SVG 装饰分隔
- 大量 character illustration (Josh 的吉祥物头像) 在 hero 和侧边

### Hero
- 大字 personal 介绍 (`Hi! I'm Josh.`)
- 旁边一张全彩 illustration character (Josh 的卡通形象 with 海浪 background)
- 整个 hero 充满色彩与动效（character 会随 cursor 动）

### Micro-craft (这是 Josh 的 signature 战场)
1. **Spring physics 按钮**: 按钮按下用 React-Spring，物理 bouncy
2. **Theme toggle 动画**: 切换 dark / light 时整个 viewport 做 circular reveal transition
3. **Gradient text**: 主标题用 `background: linear-gradient(...); -webkit-background-clip: text; color: transparent`
4. **Sparkles**: 文本周围会有装饰小星星 (custom React component)
5. **Card border animated gradient**: 卡片 border 用动画 conic-gradient
6. **Sound effects**: 部分交互带音效（footer 有 sound toggle）

### 严格筛选：哪些可以 port 到学术主页

| 元素 | 可否 port | 理由 |
|---|---|---|
| Wotfard + Recoleta 双字体 | **NO** | Recoleta 太"playful"，学术圈用了会扣分。Yanjun 用 Inter + 一个 serif (Crimson Pro / Source Serif) 更合适 |
| 彩色 gradient hero | **NO** | 学术绝对禁止 |
| Character illustration | **NO** | 学术绝对禁止 |
| Sparkles / sound effects / spring physics | **NO** | 全部禁止，太 portfolio |
| Theme toggle circular reveal | **NO** | 太抢戏 |
| Gradient text on heading | **NO** | 学术页 heading 永远纯色 |
| Negative-margin callout figure | **MAYBE** | 这个 layout 技巧学术页可用 — research figure / pull quote 可以 overflow 出 reading column，效果优雅 |
| 暖 off-white 背景 (`#FAF9F6` 系) | **YES** | 这是唯一可以 port 的 — 不用纯白 `#fff`，用极浅暖色 (off-white / paper) 让 light mode 不刺眼 |
| Dark mode 是"重新设计"而非"反色" | **YES** | 这是设计观可借鉴 — Yanjun 的 dark mode 不应该只是把 `#fff` → `#000`，应该有独立的色板 |

### 3 条可借鉴 takeaways (注意：Josh 这站是 high-risk 借鉴)
1. **Off-white 暖色背景**: 用 `#FAF9F6` / `#F9F7F1` / `#FAFAF8` 代替纯白，light mode 阅读时不刺眼。Yanjun 站如果走"严肃精致 academic"，暖白比冷白更高级。
2. **Dark mode 是独立色板**: 不要"`background: white → background: black`"。设计两套 token (light: cool slate / dark: warm navy)。这是工程量，但区分"业余 dark mode" vs "专业 dark mode"。
3. **Overflow figure 技巧**: 学术页 publication 列表如果有 hero figure（论文 teaser image），可以用 negative margin 让图溢出 reading column — 像 NYT / Stripe blog 的图文版式。**这是唯一一个 Josh-style craft 可以学术化**。

---

## 4. Linus Lee (thesephist) — https://thesephist.com/

> Anthropic 研究员个人站。极端 typographic 路线，几乎像一份排版精良的 paper / essay。

### Scores
| V | T | C | L | H | M | A |
|---|---|---|---|---|---|---|
| 9 | 10 | 9 | 9 | 9 | 8 | **10** |

### Typography (这站是 5 个里 typography 最强)
- **Bookerly / Lora / serif 风格**做标题（具体 Linus 用过 `Inter` + `IBM Plex Serif` 不同版本）
- Body 用 humanist sans 或 monospace 都有
- 行高极宽松 (~1.7-1.8) — 像 essay / book
- 段落间距大 (~1.5em)
- **链接用 `[bracketed text]` 风格** — 这是 Linus 的最强 signature

### Color
- 暖 off-white 背景 (~`#FAF9F4` 类似)
- 文本极深 `#16161D` 或 `#1a1a1a`
- Accent 在某些版本是橙色 `#cc4b00`，某些版本是蓝 `#2d3748`
- 极克制 — 2-3 色

### Layout
- 单列，**极窄** ~580-640px
- 上下大量 padding (~120px top)
- 没有 hero image，没有头像
- Section 之间用 `---` 水平线分隔（真的渲染成 dashed border 或 em-dash 字符）

### Hero
- 一行 `My name is Linus.` (h1，~36px serif/sans)
- 紧接 2-3 段散文式自我介绍
- 完全像 essay 开头

### Micro-craft
1. **`[bracketed]` 链接**: 实际是 CSS `a::before { content: "[" }` `a::after { content: "]" }`，给链接一种"代码/学术引用"质感
2. **段落数字编号**: 某些版本段落前有 `§1` `§2` 章节标记
3. **Footnote 风格**: 有真的 inline footnote 实现 (hover 弹出)
4. **Em-dash 分割线**: section 之间用 `— — —` 三个 em-dash 而非 `<hr>`
5. **极小的 caption text**: 元数据 (date, tag) 用 mono 11-12px

### 严格筛选：哪些可以 port 到学术主页

| 元素 | 可否 port | 理由 |
|---|---|---|
| **整套设计语言** | **YES** | Linus 的站本质就是"研究员个人主页"，Yanjun 完全可以照学到 60-70% |
| `[bracketed]` 链接 | **YES** | 学术主页用这个，看起来像学术引用 — 完全合适 |
| Serif 标题 + Sans body | **YES** | Crimson Pro / Source Serif 4 / IBM Plex Serif 做 h1/h2，Inter 做 body — 学术经典组合 |
| 极窄 reading width (~640px) | **YES** | First-page bio 用这个宽度阅读体验最佳 |
| Off-white 暖背景 | **YES** | 见 Josh 部分 |
| Section 用 em-dash 分割 | **YES** | 学术页可以用 `· · ·` 或 `—  —` 替代横线，更印刷感 |
| 段落 `§1` `§2` 编号 | **MAYBE** | 用在 about 长文可，列表型 publications 不必 |
| Inline footnote 弹出 | **MAYBE** | 工程量大但效果学术；publication abstract 可以做 footnote 弹层 |
| 大行距 (1.7-1.8) | **YES** | 学术主页 body 行高建议 1.65-1.75，比 al-folio 默认 1.5 宽松 |
| 没有 hero image / headshot | **NO** | 学术主页通常**需要**头像（招生、合作需要识别） |

### 3 条可借鉴 takeaways
1. **Serif/Sans 混排**: h1/h2 用 serif (Source Serif 4 或 Crimson Pro)，body / metadata 用 Inter — 这是学术页面最经典的 typography pairing，且比 al-folio 默认全 sans 更有"被排版"的精致感。
2. **`[bracketed]` 链接 + em-dash 分割线**: 用 CSS `a::before { content: "[" }` `a::after { content: "]" }` 给外部链接（不是所有链接）包上方括号，配合 section 之间的 `— — —` 分隔符 — 整个页面立刻有"被 typeset"的感觉。
3. **行高与段距奢侈化**: body 行高 1.7，段落 margin-bottom `1.5em`，section 之间 `5em` — 这种 spacious typography 是学术页面"精致严肃"感的根本来源。al-folio 默认全部偏紧。

---

## 5. Ross Zurowski — https://rosszurowski.com/

> Oblique 设计师，前 Figma / Vercel 设计师。极端 editorial / print 风格。

### Scores
| V | T | C | L | H | M | A |
|---|---|---|---|---|---|---|
| 9 | 9 | 8 | 9 | 8 | 7 | **8** |

### Typography
- **Tiempos Text** / **PT Serif** / 衬线为主
- 大字号 serif h1 (~40-48px)
- Body 也用 serif，~17-18px，line-height 1.55
- 极少 weight 变化，几乎全靠 size + spacing 拉层级

### Color
- 极简：黑底白字 或 白底黑字
- 没有任何 accent 色 — 极端"无色"路线
- Dark mode (如果有) 是真的反相

### Layout (这里是最值得学的)
- **CV 风格 year-entry 两栏**:
  ```
  2025 — Now      Oblique — design + strategy partner
  2023 — 2025     Figma — design lead
  2020 — 2023     Vercel — design
  ```
  左栏 ~80-100px 年份范围 (mono / tabular nums)，右栏 entry 描述
- 这是**学术 CV 的天然格式**
- 单列 max-width ~720px

### Hero
- 名字 + 一行 tagline
- 没有 headshot
- 紧接是 CV 表格
- 极简 editorial 风

### Micro-craft
1. **Tabular numbers**: 年份用 `font-variant-numeric: tabular-nums` 保证对齐
2. **Subtle gray on metadata**: 年份用 `color: #999` 退到背景
3. **Hover 时整行背景微 tint**: CV 行 hover 时整行有 `background: rgba(0,0,0,0.03)`
4. **No JS animation**: 几乎纯静态
5. **Last updated 时间戳**: footer 显示 git commit 时间戳，给一种"工程师维护"的可信度

### 严格筛选：哪些可以 port 到学术主页

| 元素 | 可否 port | 理由 |
|---|---|---|
| **Year-entry 两栏 CV layout** | **YES** | 学术主页 publications / talks / awards 列表的**最优形态**。比 al-folio 默认的 list 视觉清晰 10 倍 |
| Tabular numbers | **YES** | 必须的 — 年份对齐是学术页 craft 的基本盘 |
| Serif 全站 | **MAYBE** | 全 serif 太重，学术页建议 serif 仅用 heading，body 仍用 sans |
| 无 accent 色 | **MAYBE** | Lee 已经讨论过，太极端 |
| Editorial 大字号 h1 | **YES** | h1 ~40-48px 是 portfolio / academic 通用值，比 al-folio 默认 ~30px 更有分量 |
| Hover 整行 background tint | **YES** | publication list hover 时整行做 `background: rgba(0,0,0,0.03)` 是学术页可学的最微 craft |
| Last updated git timestamp | **YES** | footer 加 `Last updated: 2026-05-22` 给一种维护感，学术主页**强烈推荐** |
| 没有 headshot | **NO** | 学术页需要 |

### 3 条可借鉴 takeaways
1. **Year-entry 两栏 CV layout**: 这是 Ross 站最强 element。Yanjun 的 publications / talks / news 全部应该用这个版式：
   ```
   [yyyy]      [Title — Authors — Venue]
   [yyyy]      [Title — Authors — Venue]
   ```
   左栏 ~80px 年份 mono tabular，右栏 entry 描述。比 al-folio 默认 publication list 高级太多。
2. **Tabular nums + 大量 subtle 灰**: 所有元数据（年份、conference 缩写、citation count）用 mono 字号 + `color: var(--slate-500)` — 让主要信息 (paper title) 自然浮出。
3. **`Last updated` 时间戳 + git link in footer**: 学术页 footer 加 `Last updated 2026-05-22 · Source on GitHub` — 这是"被持续维护"的可信度信号，对学术招生/合作有 hidden 加分。

---

## 跨站综合：Academic-Portability Ranking

| 站 | Visual craft | A 分 | 适配度评语 |
|---|---|---|---|
| Linus Lee | 9 | **10** | 几乎可以直接当 reference (本身就是研究员主页) |
| Lee Robinson | 8 | **9** | 极简哲学完全适合学术 |
| Ross Zurowski | 9 | **8** | CV 版式是 killer element |
| Brittany Chiang | 9 | **6** | layout + color discipline 可学，accent + cursor effects 不能用 |
| Josh W. Comeau | 10 | **3** | 几乎全 portfolio 元素，仅 background tone + dark mode 哲学可借 |

---

## 严格筛选后的 "Academic-Safe 借鉴清单"

### 一定要学
1. **Linus 的 serif h1 + sans body + 大行距** — 学术 typography 的最强配方
2. **Ross 的 year-entry 两栏 CV layout + tabular nums** — publications/news 列表的最优形态
3. **Brittany 的 sticky-left + scroll-right 两栏** — 桌面端 layout 提升的最大杠杆
4. **Brittany 的"单 accent + 8 阶灰度"配色纪律** — 砍掉 al-folio 默认多色系统
5. **Lee Robinson 的 underline + offset 4px 链接样式** — 印刷感链接
6. **Linus 的 `[bracketed]` 外链 + em-dash section divider** — 学术 typeset 感

### 不要学（哪怕诱人）
1. ❌ Brittany 的 cursor spotlight (太 portfolio)
2. ❌ Brittany 的 deep navy 全黑主题 (light 应为默认)
3. ❌ Josh 全部 — gradient / sparkles / character / sound / spring physics
4. ❌ Josh 的 Recoleta playful serif (太可爱)
5. ❌ Card 大幅 hover lift / transform / shadow elevation (轻佻)
6. ❌ Hero parallax / generative animation (绝对禁止)
7. ❌ "No headshot" 路线 — 学术页需要识别度

### 中间地带（视场景）
- Mono section numbering `01.` — 用一次 OK，全站用太装饰
- Negative-margin overflow figure — 论文 teaser 可用，文字段落不用
- Footnote 弹层 — 工程量大但学术合适

---

## 给 Yanjun 站 (al-folio baseline) 的具体 5 条 actionable 升级

基于以上 25 个 takeaway 综合：

1. **Typography overhaul**: 接入 Source Serif 4 (h1/h2) + Inter (body/nav/meta) + JetBrains Mono (年份/citation count)。Body 字号 16px / line-height 1.7 / paragraph margin 1.5em。
2. **Color discipline**: 全站只留 1 个 accent (建议 `#1e3a8a` deep indigo 或 `#0f766e` teal-700)，其余全用 slate 8 阶。Light 背景改为 off-white `#FAFAF7`。Dark mode 重新设计 token (不是反色)。
3. **Year-entry 两栏列表**: publications / news / talks 全部改为 `[年份 mono 80px] [entry 1fr]` grid，年份 tabular-nums，配 `:hover { background: rgba(0,0,0,0.03) }`。
4. **Sticky-left split (桌面端)**: 桌面 ≥ 1024px 时，左栏 sticky 放 headshot + name + nav + email + Scholar/ORCID/GitHub icons，右栏滚动 content。移动端 fallback 单列。
5. **Micro-craft 细节**: 所有外链加 `↗` 后缀 + 4px underline-offset；section 间用 `— — —` 而非 `<hr>`；footer 加 `Last updated 2026-05-22 · Source on GitHub`。

---

## 结语

这5个站里**没有一个可以整套照搬**到学术主页 — 但每个都有 1-3 个 element 是 academic-safe 的。最大收获是：

- **Linus** 教 Yanjun "学术 typography 应该有什么样子"
- **Ross** 教 Yanjun "CV / publication 列表的最优版式"
- **Brittany** 教 Yanjun "color discipline + layout 雄心"
- **Lee** 教 Yanjun "极简的下限在哪里 (其实很高)"
- **Josh** 教 Yanjun "**什么是 portfolio-y，绝对不要这么做**"

al-folio default 之所以"丑"，不是它做错了什么，而是它**什么 craft 也没有** — 上面5个站每个都有 50+ 个细节决策，al-folio 默认 0 个。Yanjun 站的升级不是"加东西"，是"加 craft 决策"。
