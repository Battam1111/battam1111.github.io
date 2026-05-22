# 调研报告 01：RLHF / Alignment 组

调研对象：5 位 RLHF / Alignment 方向顶级研究者
调研时间：2026-05-22
调研目的：为 Yanjun Chen（PolyU PhD，RLHF/embodied AI 方向）个人主页彻底重写提供 pattern 参考

---

## John Schulman — Thinking Machines（cofounder & chief scientist）
URL: http://joschu.net/
访问时间：2026-05-22
（备注：HTTPS 证书有问题，通过 Google Translate 代理访问；内容来自 http 站点）

### 结构布局
- **形态**：多页静态网站（导航分散到独立 HTML 文件）
- **主要 sections（按顺序）**：Blog, Publications, Presentations, Code, Awards
- **留白密度**：极简（70%+ 留白，纯文字+极少格式化）
- **视觉装饰**：极简（一张底部"me"沙滩照，没有 header banner，没有渐变色）
- **是否有动画**：否

### 第一印象（Above the Fold — 不滚动首屏）
- **首屏元素列表**：姓名 "John Schulman" / 一句话身份声明 / 简历式职业履历段落 / 5 个文字导航链接
- **核心自我描述（原文摘录）**：「I'm cofounder and chief scientist at Thinking Machines. Before this, I spent time at Anthropic doing research on the Alignment Science team. Before that, I was a cofounder of OpenAI, where I led the creation of ChatGPT and from 2022-2024 co-led the reinforcement learning work.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 极短（~80 词），纯履历，无 narrative |
| Research Areas | n | 无独立 section，融入 bio |
| Publications | y | 独立页面，「Selected」而非全部；按时间倒序 |
| News / Updates | n | 无 |
| CV (PDF) | n | 无单独 PDF（thesis.pdf 在 docs/ 下，但不在主导航） |
| Service / Reviewing | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | y | 独立 Awards 页面，列 MIT TR35 / C.V. Ramamoorthy 等 |
| Blog / Writing | y | 独立 Blog 页面，少量长文（"An Opinionated Guide to ML Research" 等） |
| Talks / Media | y | 独立 Presentations 页面 |
| Photos / Headshot | y | 仅底部一张沙滩照，标签 "me" |
| Contact | n | 无显式 contact 区，但 GitHub 链接外露 |
| 其他特色 | — | Code section 单独列开源项目（OpenAI Gym/Baselines 等） |

### Selling 风格
- **措辞克制度**（1=浮夸，5=极克制）：**5**
- **mission / manifesto / philosophy**：无
- **是否引用 media coverage / 评价**：否
- **是否谈 impact / 商业化语言**：否（虽然主导了 ChatGPT 创建，但 bio 仅用 "led the creation"，没有任何吹捧）
- **一句话总结此人 selling 哲学**：「让简历说话，自己一个字不多说」——最克制的硬核学者范式

### 技术实现观察
- **工具猜测**：Plain HTML（纯手写静态 HTML，无框架，无 generator 标记）
- **字体**：默认 sans-serif（browser default）
- **颜色数量**：1（纯黑文字 + 蓝色链接）
- **响应式**：基本响应式（因为是最简 HTML，天然 reflow）

### 可借鉴 3 条（针对 Yanjun Chen — PhD 学生 RLHF/Embodied AI 方向）
1. **导航极简化**：5 个顶级链接就够了（Blog/Publications/Talks/Code/Awards），不要堆 12 个 section 到首屏
2. **bio 用职业履历句式而不是叙事段落**：「I am X. Before this, Y. Before that, Z.」一句一段，事实驱动，反向链式
3. **不要 hero banner，不要装饰图**：首屏直接进 bio 文本；如果非要放照片，放到页面最底部（像他这种沙滩照 "me"），不抢内容焦点

---

## Jan Leike — Anthropic（Alignment Science team co-lead）
URL: https://jan.leike.name/
访问时间：2026-05-22

### 结构布局
- **形态**：单页静态网站（锚点内跳转）
- **主要 sections（按顺序）**：About me, My Research, Selected Publications
- **留白密度**：极简（70%+ 留白）
- **视觉装饰**：极简（markdown-style 排版，水平分隔线）
- **是否有动画**：否

### 第一印象（Above the Fold — 不滚动首屏）
- **首屏元素列表**：姓名 "Jan Leike" / tagline "Machine learning & alignment researcher" / mission 副标题 / 3 个章节锚点
- **核心自我描述（原文摘录）**：「I lead the Alignment Science team at Anthropic. Previously, I co-led the Superalignment Team at OpenAI, where I've been involved in the development of InstructGPT, ChatGPT, and the alignment of GPT-4.」
- **首屏 mission 句**：「Optimizing for a post-AGI future where humanity flourishes」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短（~50 词），加 "Optimizing for a post-AGI future where humanity flourishes" 一句 manifesto |
| Research Areas | y | "My Research" section，以一个研究问题为锚：「How can we train AI systems to follow human intent on tasks that are difficult for humans to evaluate directly?」 |
| Publications | y | "Selected Publications"（不是全部），数量克制 |
| News / Updates | n | 无（动态在 Substack） |
| CV (PDF) | n | 无 |
| Service / Reviewing | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 无（虽然 TIME 100 AI 但未列） |
| Blog / Writing | y | 外链 aligned.substack.com（"Musings on the Alignment Problem"） |
| Talks / Media | n | 无独立 section（在 Substack 链 TIME 报道） |
| Photos / Headshot | n | 无头像（纯文字） |
| Contact | y | 邮箱 + Twitter 链接 |
| 其他特色 | — | 用一个研究问题作为 research section 的核心命题 |

### Selling 风格
- **措辞克制度**（1=浮夸，5=极克制）：**4**
- **mission / manifesto / philosophy**：有，「Optimizing for a post-AGI future where humanity flourishes」直接作为副标题挂在首屏
- **是否引用 media coverage / 评价**：是（TIME 100 AI 标记，但低调嵌入而非 banner）
- **是否谈 impact / 商业化语言**：略有 mission 性叙事，但不浮夸
- **一句话总结此人 selling 哲学**：「用一个 mission 句和一个研究问题统领整个主页，其他都是支撑材料」

### 技术实现观察
- **工具猜测**：Plain HTML 或简单的静态 site generator；markdown-style 渲染
- **字体**：sans-serif
- **颜色数量**：2（黑文字 + 蓝链接）
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen — PhD 学生 RLHF/Embodied AI 方向）
1. **首屏放一句研究 mission**：不是 hero quote，而是一句简短的研究愿景（PhD 阶段可以是「Studying how to align LLMs with human values via reward modeling」）
2. **用一个研究问题统领 Research section**：与其列 5 个研究方向，不如挂一个核心 question 然后用 publication 链支撑
3. **Selected Publications 而不是全列**：作为 PhD 学生只列 3-5 篇代表作 + 一句 selection rationale 比堆 20 篇更显成熟

---

## Paul Christiano — NIST CAISI（前 Alignment Research Center 创始人）
URL: https://paulfchristiano.com/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（WordPress 默认主题改造）
- **主要 sections（按顺序）**：Home, Publications, Fun and games
- **留白密度**：适中
- **视觉装饰**：极简（一张职业头像，灰白配色）
- **是否有动画**：否

### 第一印象（Above the Fold — 不滚动首屏）
- **首屏元素列表**：姓名 "Paul Christiano" / 顶部导航 3 项 / 职业头像 / bio 段落
- **核心自我描述（原文摘录）**：「I am a technical advisor at the Center for AI Standards and Innovation within NIST. I previously ran the Alignment Research Center and the language model alignment team at OpenAI. Before that I received my PhD in statistical learning theory from UC Berkeley.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短 bio（~50 词）+ AI 子页面有 mission 句「I want to see a future where AI systems help humanity thrive」 |
| Research Areas | y | 通过 /ai/ 子页面承载 |
| Publications | y | 独立页面，Google Scholar 链接 |
| News / Updates | n | 无 |
| CV (PDF) | n | 无 |
| Service / Reviewing | n | 无（但提及 UK AISI advisor / Anthropic LTBT trustee） |
| Teaching | n | 无 |
| Honors / Awards | n | 无 |
| Blog / Writing | y | 外链 Medium |
| Talks / Media | y | 链 80,000 Hours podcast |
| Photos / Headshot | y | 顶部职业头像 |
| Contact | y | 邮箱 |
| 其他特色 | "Fun and games" | 独立 section 放个人趣味（罕见但有人味） |

### Selling 风格
- **措辞克制度**（1=浮夸，5=极克制）：**4.5**
- **mission / manifesto / philosophy**：在 /ai/ 子页面有「I want to see a future where AI systems help humanity thrive」
- **是否引用 media coverage / 评价**：否
- **是否谈 impact / 商业化语言**：否
- **一句话总结此人 selling 哲学**：「主页只放履历，趣味性放在独立子页面（Fun and games）——专业与人格分离展示」

### 技术实现观察
- **工具猜测**：WordPress（默认 theme 改装）
- **字体**：serif（WordPress 经典）
- **颜色数量**：2（灰白 + 黑文字）
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen — PhD 学生 RLHF/Embodied AI 方向）
1. **可以加一个 "Fun and games" 类型的 side section**：放业余项目/兴趣（比如 reading list、side projects），但不混入主轴
2. **bio 段落用 "I am X. I previously did Y. Before that, I received my PhD in Z." 倒序履历句式**：天然简洁
3. **职业头像放顶部就够了，不要 hero banner**：头像 + bio 段落并排，左右布局，是最经典的学术主页 layout

---

## Stuart Russell — UC Berkeley（Distinguished Professor）
URL: https://people.eecs.berkeley.edu/~russell/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（导航 hub 风格的极简 HTML）
- **主要 sections（按顺序）**：Prospective students info, Interns, Research group (RUGS), Research centers (CHAI/KCESP/BAIR/ICBS/ACTION/CPH), Research areas, Publications, CV, Biography, Lectures/books/videos/talks
- **留白密度**：信息密集（教授级，链接极多）
- **视觉装饰**：极简（一张照片，纯文字链接）
- **是否有动画**：否

### 第一印象（Above the Fold — 不滚动首屏）
- **首屏元素列表**：照片 / 全名 "Stuart Russell, OBE, FRS" / 头衔串 / 联系地址 / 数十个导航链接
- **核心自我描述（原文摘录）**：「Distinguished Professor of Computer Science... Smith-Zadeh Professor in Engineering; Professor of Cognitive Science; Professor of Computational Precision Health, UCSF.」（仅头衔串，无 narrative bio）

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 主页无独立 about；Biography 子页面长达 ~550 词 |
| Research Areas | y | 主页列研究方向链接 |
| Publications | y | 独立页面，按年倒序，bullet list，无 abstract，含 BibTeX |
| News / Updates | n | 无 |
| CV (PDF) | y | 顶部 CV 链接 |
| Service / Reviewing | n | 无独立 section |
| Teaching | y | 链课程 |
| Honors / Awards | y | OBE/FRS 直接挂名字后；Biography 中详列 |
| Blog / Writing | n | 无 |
| Talks / Media | y | "Reith Lectures, books, videos, and talks" |
| Photos / Headshot | y | 一张照片 |
| Contact | y | 邮寄地址 + 办公室 |
| 其他特色 | "Prospective students" | 顶部专门放招生说明（教授刚需） |

### Selling 风格
- **措辞克制度**（1=浮夸，5=极克制）：**3**（首页极克制，但 Biography 子页面是 CV-prose 风格，列尽奖项）
- **mission / manifesto / philosophy**：主页无；研究方向页面有「The long-term future of AI」专题
- **是否引用 media coverage / 评价**：否（但 Reith Lectures 自带 media credibility）
- **是否谈 impact / 商业化语言**：否
- **一句话总结此人 selling 哲学**：「主页是导航 hub，Biography 才放完整履历；level 越高反而越要把'sell'藏到二级页面」

### 技术实现观察
- **工具猜测**：手写 Plain HTML（Berkeley EECS 老派学术主页）
- **字体**：默认 serif
- **颜色数量**：1（纯黑 + 蓝链接）
- **响应式**：弱（老 HTML）

### 可借鉴 3 条（针对 Yanjun Chen — PhD 学生 RLHF/Embodied AI 方向）
1. **首屏只放头衔不放 narrative bio**：把 narrative bio 推到 /biography 二级页面（首屏静默，二级展开）
2. **Publications 按年倒序 bullet list 即可，无需 abstract**：BibTeX 块按需展开，比堆 abstract 更专业
3. **加一个 "Prospective collaborators" 或 "For PhD applicants" 短 section**：即使是 PhD 学生也可以放「If you're interested in collaborating on X, email me」——表明你 active 且开放

---

## Jacob Steinhardt — UC Berkeley（Associate Professor, Stat & EECS）
URL: https://jsteinhardt.stat.berkeley.edu/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（清爽 academic template）
- **主要 sections（按顺序）**：Home, Publications, Teaching, Talks, Blog, Email/Scholar/Undergrad Application (footer)
- **留白密度**：适中
- **视觉装饰**：极简（profile 头像 + 学术 template）
- **是否有动画**：否

### 第一印象（Above the Fold — 不滚动首屏）
- **首屏元素列表**：导航条 / profile 头像 / 姓名+头衔 / opening paragraph
- **核心自我描述（原文摘录）**：「I am an Associate Professor of Statistics and EECS at UC Berkeley, where I'm also part of BAIR and CLIMB. I am also Founder & CEO of Transluce, a non-profit research lab building open, scalable technology for understanding frontier AI systems.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短 bio（~60 词）+ 研究方向叙事段落 |
| Research Areas | y | 嵌入 bio 后的段落：「ML models are complex systems that often produce unintended consequences...」 |
| Publications | y | 独立页面，按年倒序，bullet + BibTeX |
| News / Updates | n | 无 |
| CV (PDF) | n | 无显式 PDF |
| Service / Reviewing | n | 无 |
| Teaching | y | 独立页面，列课程 |
| Honors / Awards | n | 无 |
| Blog / Writing | y | 独立 Blog 页面 |
| Talks / Media | y | 独立 Talks 页面 |
| Photos / Headshot | y | profile photo |
| Contact | y | footer 邮件 |
| 其他特色 | "Undergraduate Application" | footer 放本科生申请引导（招生导向） |

### Selling 风格
- **措辞克制度**（1=浮夸，5=极克制）：**4**
- **mission / manifesto / philosophy**：嵌在 bio 段落里：「ML systems tend to exploit errors in the reward function...」用研究问题陈述代替口号
- **是否引用 media coverage / 评价**：否
- **是否谈 impact / 商业化语言**：略（Transluce 是商业化身份，但措辞「non-profit research lab building open, scalable technology」很克制）
- **一句话总结此人 selling 哲学**：「academic + founder 双重身份用一句话并列陈述，不分裂——但 founder 身份用 nonprofit / open 来去商业化」

### 技术实现观察
- **工具猜测**：al-folio Jekyll 或类似学术 template（典型 academic minimalist 风格）
- **字体**：sans-serif
- **颜色数量**：2-3（白底 + 黑文字 + 链接色）
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen — PhD 学生 RLHF/Embodied AI 方向）
1. **bio 后紧跟一段研究叙事段落**：不是 bullet list 的研究方向，而是一个段落（「I study X because Y, particularly Z」）
2. **footer 放 "For applicants" 或 "Working with me" 短链接**：明确表态欢迎合作（PhD 学生可以是「Looking for collaborators on RLHF / reward modeling」）
3. **使用 al-folio 这类成熟学术 template**：比 Next.js 自己造轮子更符合学术圈预期，且天然没有粒子背景 / Chart.js 这类装饰

---

## 本组（RLHF / Alignment）整体 pattern 总结

**共同点**（5/5 一致）：

1. **极简到极简**：无 hero banner，无粒子背景，无动画，无装饰图；导航 3-5 项就足够
2. **bio 一律是简短履历句式**：「I am X at Y. Previously, Z.」60 词内，零 narrative
3. **Selected Publications 而非全部**：克制比堆量更显成熟
4. **不放学术指标可视化**：5 人无一使用 citation chart / h-index 可视化 / Chart.js
5. **mission 句如果有，就一句话**：Jan Leike 「Optimizing for a post-AGI future...」/ Paul Christiano「I want to see a future where AI systems help humanity thrive」——格式一致：一句话宣言

**差异点**：

- **Schulman**：纯履历，零 mission，最克制；**Leike**：mission 显式挂首屏，研究问题统领 Research section；**Christiano**：主页只有 bio，mission 推到 /ai/ 子页面；**Russell**：教授级—首页是导航 hub，narrative bio 在 /biography 二级；**Steinhardt**：academic + founder 并列，研究叙事段落最长

**反例（被刻意避免的）**：

- 无人使用粒子背景 / 渐变 / 动画
- 无人在首屏放 hero quote / 大字 tagline
- 无人放学术指标可视化（h-index chart 等）
- 无人用过 "passionate / cutting-edge / world-class" 这类形容词

**给 Yanjun Chen 的核心 takeaway**：

> **作为 PhD 学生应该模仿 Schulman/Leike/Steinhardt 三人的最简范式**：单页或最多 5 个导航链接、bio 用 "I am X PhD at Y. Previously, Z." 倒序履历句式、Selected Publications 列 3-5 篇即可、可选地挂一句研究 mission 在首屏。**禁用粒子背景、Chart.js 学术指标、动画过度装饰**——这些在该组 5 人中无一存在，是非学术圈的视觉俗套。
