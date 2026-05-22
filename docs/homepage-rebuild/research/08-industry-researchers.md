# 组 8：知名工业研究员 / Blog 代表

调研时间：2026-05-22
调研对象：Lilian Weng、Chris Olah、John Jumper、Dario Amodei、Noam Shazeer
调研定位：工业界知名研究员的"非传统学术主页"（blog-first / portfolio / 公司 bio）

---

## Lilian Weng — Thinking Machines（前 OpenAI 研究主管）
URL: https://lilianweng.github.io/
访问时间：2026-05-22
角色定位：**研究员 + blogger（blog-first 站点典范）**

### 结构布局
- **形态**：blog-first 静态网站（Hugo + PaperMod 主题）
- **主要 sections（按顺序）**：站名 Lil'Log → 一句话 tagline → 社交图标 → Posts 列表（首页直接列文章卡）
- **导航**：Posts / Archive / Search / Tags / FAQ（5 项极简）
- **留白密度**：适中，信息密集（首页直接 20 篇文章卡）
- **视觉装饰**：极简（黑白灰）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：站名 "Lil'Log" → tagline → 5 项导航 → 社交图标（Twitter / Google Scholar / RSS / GitHub / Instagram） → 文章列表起头
- **核心自我描述（原文摘录）**：
  > 「Hi, this is Lilian. I'm documenting my learning notes in this blog since 2017.」
  > 「Based on the number of grammar mistakes in my posts, you can tell how much ChatGPT is involved 😉」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 极短一句话（"documenting my learning notes since 2017"）|
| Research Areas | n | 不分类，从博客内容隐性体现（LLM 对齐、Transformer、扩散、RL、推理优化）|
| Publications | n | 没有 publications section（只有 Google Scholar 图标链）|
| News / Updates | n | 用博客 post 流代替 News |
| CV (PDF) | n | 无 |
| Service | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 无 |
| **Blog / Writing** | **y** | **20+ 长文，首页就是 blog feed，每篇 20-40 分钟阅读时长。这是站点全部** |
| Talks / Media | n | 无 |
| Photos / Headshot | n | 无头像 |
| Contact | y | FAQ 里给 email（anotherlilian@gmail.com）+ Twitter |
| 其他特色 | — | FAQ 页很特别：自述写作方法、引用村上春树「Pain is inevitable but suffering is optional」|

### Selling 风格
- **措辞克制度（1-5）**：5（极度克制，全文没提 OpenAI / Thinking Machines / 任何头衔）
- **mission / philosophy**：有，FAQ 里引村上春树：维持博客像他跑步的态度
- **引用 media / 评价 / 公司经历**：完全没有
- **如何处理 academic vs industry 平衡**：完全不显式提身份，让博客内容说话。隐性策略：deep technical content = credibility
- **一句话总结 selling 哲学**：「不 sell 任何身份，只 sell 持续高质量的技术写作」

### 技术实现
- **工具猜测**：Hugo + PaperMod theme + GitHub Pages
- **字体**：系统衬线（PaperMod 默认）
- **颜色数量**：2-3 色（黑、白、链接蓝）
- **响应式**：是（PaperMod 默认支持）

### 可借鉴 3 条
1. **blog-first 是合法的主页形态**：当你有 3 篇深度 blog（cot-distillation / embodied-cognition / rlhf-philosophy），可以学 Lilian 把博客做成首页主体，而非藏在 nav 角落。"I'm documenting my learning notes since [year]" 是教科书级别的低姿态 selling
2. **FAQ 作为身份补充**：Lilian 不在主页 sell 身份，但 FAQ 里讲方法论、引用村上春树体现品味。Yanjun 可以加 FAQ 谈"为什么同时做学术和 OSS / 怎么平衡 PhD 和 zk-cookbook"
3. **删 News，用 blog 的时间戳代替**：博客的"最新文章 = 2025-05"本身就是 News 信号，不需要单独 News section

---

## Chris Olah — Anthropic（前 OpenAI / Google Brain，Distill.pub 联合创始人）
URL: https://colah.github.io/
访问时间：2026-05-22
角色定位：**研究员 + blogger（blog-first，分类化）**

### 结构布局
- **形态**：blog-first 静态网站（GitHub Pages）
- **主要 sections（按顺序）**：站名 → Recent Exciting Things → 按主题分类的博文列表 → Rough Notes → Personal Writing → Selected Twitter Threads → Traditional Papers
- **导航**：Home / Blog / About / Contact（4 项）
- **留白密度**：信息密集（首页是分类化的全部内容索引）
- **视觉装饰**：极简
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：站名 "colah's blog" → 4 项导航 → "Recent Exciting Things" 模块
- **核心自我描述（原文摘录，来自 About 页）**：
  > 「reverse engineering artificial neural networks into human understandable algorithms」
  > 「My blog should not be taken to reflect the views of any organization I'm affiliated with.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | About 页有简短 bio + 工作描述 + 免责声明 |
| Research Areas | n | 通过博客分类隐性体现 |
| Publications | y | "Traditional Papers" 一类，6 篇 |
| News / Updates | y | "Recent Exciting Things" 3 项（充当 News）|
| CV (PDF) | n | 无 |
| Service | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 无 |
| **Blog / Writing** | **y** | **首页核心。约 38+ 文章按主题归类：神经网络、RNN、CNN、可视化、电路、杂项** |
| Talks / Media | n | "Selected Twitter Threads" 算社交媒体精选（9 条）|
| Photos / Headshot | n | 无 |
| Contact | y | 独立 Contact 页（链接 Twitter / Google Scholar）|
| 其他特色 | — | **联合创始 Distill.pub**（在 About 页提）；按"主题"组织博文而非按时间倒序 |

### Selling 风格
- **措辞克制度（1-5）**：5（极度克制，About 页只有几行）
- **mission / philosophy**：有 "reverse engineering NN into human understandable algorithms" 这一行+ Distill "outstanding communication"
- **引用 media / 评价 / 公司经历**：仅在 About 页提 Anthropic / 前 OpenAI / Google Brain
- **如何处理 academic vs industry 平衡**：明确声明「博客 ≠ 公司立场」，划清个人 vs 雇主
- **一句话总结 selling 哲学**：「我做 interpretability，请看 38 篇 deep 文章自证」

### 技术实现
- **工具猜测**：Jekyll + GitHub Pages
- **字体**：系统 sans-serif
- **颜色数量**：2-3 色
- **响应式**：基本

### 可借鉴 3 条
1. **按主题分类 blog 而非时间序**：Yanjun 现在 3 篇 blog（cot / embodied / rlhf），可以学 Olah 用主题分类（"RLHF 哲学" / "认知与具身" / "推理蒸馏"），等量增加到 5-10 篇时容易扩展。比纯时间序更"知识地图"感
2. **"博客不代表雇主"的声明**：Yanjun 在 PolyU PhD + 副业 OSS（zk-cookbook）+ Polar.sh 付费产品的语境下，加一句"个人观点不代表所属机构"很专业，特别是 RLHF / 安全话题
3. **"Recent Exciting Things"代替 News**：3-5 条精选近期动态（论文 + OSS release + blog 新文混合），比纯时间线 News 更有策展感

---

## John Jumper — Google DeepMind（AlphaFold 一作 / Nobel Prize 2024）
URL: **未找到个人主页**（仅 Wikipedia / Google Scholar / DeepMind 公司页 / LinkedIn）
访问时间：2026-05-22
角色定位：**Exec / 公司主导身份（无个人主页）**

### 结构布局
- **形态**：**无个人主页**。Google DeepMind 的 /research/people/ 已下线（404），所有公开 presence 集中在：
  - Wikipedia（题主明确禁止引用）
  - LinkedIn（题主明确禁止引用）
  - Google Scholar
  - DeepMind 公司新闻稿 / Nobel Prize 官方页
- **主要 sections**：N/A
- **留白密度**：N/A
- **视觉装饰**：N/A
- **是否有动画**：N/A

### 第一印象
- **首屏元素**：N/A
- **核心自我描述**：N/A — Nobel 公告引用的 DeepMind 官方介绍是「Director at Google DeepMind, leading protein structure prediction」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| 所有项 | n | 无个人主页，无法填表 |

### Selling 风格
- **措辞克制度**：N/A
- **mission / philosophy**：N/A
- **如何处理 academic vs industry 平衡**：**完全不需要平衡 — 让 Nobel Prize + AlphaFold 论文 + Google Scholar 自证身份**
- **一句话总结 selling 哲学**：「成就到了某个量级，个人主页变得不必要」

### 技术实现
- N/A

### 可借鉴 3 条
1. **反面案例：Jumper 不需要主页因为成就 already speaks**。对 Yanjun（PhD 学生）而言，**必须**有主页 — 主页就是 "I exist + I have a perspective" 的 baseline。不要学 Jumper "无主页"
2. **正面借鉴：仅靠 Google Scholar + 一篇代表作就能立人设**。Yanjun 把代表作（RLHF blog / 关键论文）做到极致，比铺 20 个 sections 更有效
3. **公司 bio 的极简公式**："Director at X, leading Y on Z" — 一句话定位法。Yanjun 可以学："PhD student at PolyU, working on RLHF and embodied cognition" — 不需要更多

---

## Dario Amodei — Anthropic CEO（前 OpenAI Research VP）
URL: https://darioamodei.com/
访问时间：2026-05-22
角色定位：**Exec（CEO）+ thought leader（essay-portfolio 站）**

### 结构布局
- **形态**：单页 essay portfolio（带 Archive 二级页）
- **主要 sections（按顺序）**：名字 → Bio → Essays → Short posts → Research（外链 Google Scholar）→ Op-eds → Interviews
- **导航**：Archive（仅此一项）
- **留白密度**：极简（每个 section 只列 2-7 项）
- **视觉装饰**：极简（无图片，纯文字）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：名字 "Dario Amodei" → Bio 段 → essay 列表开始
- **核心自我描述（原文摘录）**：
  > 「Dario Amodei is the CEO of Anthropic, a public benefit corporation dedicated to building AI systems that are steerable, interpretable and safe.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短 bio：CEO of Anthropic + 前 OpenAI VP Research（GPT-2/GPT-3）+ RLHF 共同发明者 + Google Brain + Princeton biophysics PhD |
| Research Areas | n | 没有 — Research 那栏直接外链 Google Scholar |
| Publications | n | 不列论文，让 Google Scholar 承载 |
| News / Updates | n | 用 essay/interview 时间隐性体现 |
| CV (PDF) | n | 无 |
| Service | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 无 |
| **Blog / Writing** | **y** | **Essays 2 篇（Machines of Loving Grace / Adolescence of Technology）+ Short posts 2 + Op-eds 2** |
| **Talks / Media** | **y** | **Interviews 7 条（Lex Fridman / Ezra Klein / Dwarkesh / TIME 等）** |
| Photos / Headshot | n | 无头像 |
| Contact | n | 完全没有联系方式 |
| 其他特色 | — | **essay-as-product**：长文是产品，单篇 "Machines of Loving Grace" 上万字独立 page。Op-eds 区分纸媒（NYT / WSJ）|

### Selling 风格
- **措辞克制度（1-5）**：4（克制但有点不一样 — bio 把"co-inventor of RLHF"放进来，是核心 selling）
- **mission / philosophy**：通过 "Machines of Loving Grace" 长文体现，不在主页直接说
- **引用 media / 评价 / 公司经历**：用 NYT / WSJ / Lex Fridman / TIME 这些 outlet 名隐性 sell（自证 reach）
- **如何处理 academic vs industry 平衡**：完全 industry exec 定位。但 bio 里塞了 "Princeton doctorate in biophysics" + "co-invention of RLHF" 表明学术根基
- **一句话总结 selling 哲学**：「我是 CEO 但也是 thinker — 看我的 essays + interviews」

### 技术实现
- **工具猜测**：极简静态站点（可能 Hugo / 11ty / 手写 HTML）
- **字体**：系统衬线
- **颜色数量**：2-3 色
- **响应式**：是

### 可借鉴 3 条
1. **essay-as-product 模式**：Yanjun 的 3 篇 blog 可以学这种"每篇是独立 page，长得像产品发布"的处理。当 "RLHF 哲学"那篇博客被认真打磨时，它本身就是 selling 工具
2. **媒体出口名作为隐性 credibility**：Dario 列 NYT / Ezra Klein / Lex Fridman 不是炫耀，是用 outlet brand 替代 self-claim。Yanjun 可以做：「Talks / Media」section 列任何被引用 / 邀请 / 报道（即使是小型 podcast / 课程 guest），用 outlet 名替自己说话
3. **Bio 句的"三连击"公式**：「CEO of X | Previously Y (notable thing) | Education / Field root」。Dario 是 「Anthropic CEO | 前 OpenAI VP (GPT-2/3, RLHF) | Princeton biophysics PhD」。Yanjun 可学：「PolyU PhD candidate | Building zk-cookbook & Polar product | Working on RLHF & embodied AI」

---

## Noam Shazeer — Google DeepMind（Transformer 作者，前 Character.AI CEO）
URL: https://noamshazeer.com/
访问时间：2026-05-22
角色定位：**研究员 + Exec（"成就清单"站）**

### 结构布局
- **形态**：多页静态网站（Home / About / Research / Media / More）
- **主要 sections（按顺序）**：导航 → 头像 → "About Noam" → 发明清单（Transformer / MoE / Mesh-TF / T5 / LaMDA / Character.AI）→ 职业历程 → 社交链 → Copyright
- **导航**：Home / About / Research / Media / More（5 项）
- **留白密度**：适中
- **视觉装饰**：适中（有头像照片）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：站名 + 角色（"AI Scientist, Google Gemini Co-Lead"）→ 头像 → 导航 → About 标题
- **核心自我描述（原文摘录）**：
  > 「Noam Shazeer is a computer scientist and entrepreneur. Noam co-leads Google Gemini and is a VP Engineering at Google.」
  >
  > 关于 Transformer：「personally designed the multi-head attention, the residual architecture, and coded up the first better-than-SOTA working implementation」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | About 页：简短 bio + 发明清单 + Google 2000 入职 → AdSense PHIL 算法 → Character.AI 创始 |
| Research Areas | n | 通过发明清单体现 |
| Publications | y | Research 页：仅 3 篇 "Selected research"（Transformer / Mesh-TF / MoE），其余指向 Google Scholar |
| News / Updates | n | 无 |
| CV (PDF) | n | 无 |
| Service | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 不直接列（让 Transformer 自己说话）|
| Blog / Writing | n | 无博客 |
| **Talks / Media** | **y** | Media 页（未详细抓取）+ 社交链：The Marque / Wikipedia / Crunchbase / IMDb |
| **Photos / Headshot** | **y** | 单张专业头像 |
| Contact | n | 无 |
| 其他特色 | — | **"发明清单"是核心 selling 工具**（Transformer 2017 / MoE 2016 / Mesh-TF 2018 / T5 2019）每项标年份；**Crunchbase + IMDb 链表明商业 + 媒体身份** |

### Selling 风格
- **措辞克制度（1-5）**：3（不算极简 — "personally designed multi-head attention"这句很 strong）
- **mission / philosophy**：无显式 mission
- **引用 media / 评价 / 公司经历**：通过发明清单 + Google 履历 + Character.AI 创始隐性 sell
- **如何处理 academic vs industry 平衡**：偏 industry，但用 "selected research"（3 篇代表作）保留学术血统
- **一句话总结 selling 哲学**：「我发明了 Transformer — 列年份，剩下交给历史」

### 技术实现
- **工具猜测**：Squarespace 或 Wix 类托管（域名 + 模板风格）
- **字体**：系统 sans-serif
- **颜色数量**：3-4 色
- **响应式**：是

### 可借鉴 3 条
1. **"代表作清单 + 年份"格式**：Noam 没列所有论文，只列 5 个**有名字的发明**（Transformer / MoE / Mesh-TF / T5 / LaMDA），每个标年份。Yanjun 可以学：把自己最 representative 的 3-5 项工作（论文 + zk-cookbook + Polar 产品）做成"命名 + 年份"清单，而非长 publication list
2. **"Selected research"≠ "Publications"**：Noam 主页 Research 页只有 3 篇精选，剩下指向 Google Scholar。PhD 学生论文不多时这个模式特别好用（不至于显得 publication 单薄）
3. **专业头像 + 极简角色 tagline**：Noam 的 "AI Scientist, Google Gemini Co-Lead" 一句话角色定位 + 头像。Yanjun 主页装饰过度，可以学这种 "1 张头像 + 1 句话角色"的克制开场（替换掉过度装饰的 hero）

---

## 本组（工业研究员 / Blogger）整体 pattern 总结

**共同点（5 人）**：
1. **极简到只剩内容**：5 人主页都极简（黑白灰、无动画、无装饰），靠**作品本身**承载 credibility。没有一个堆 publication 总数 / h-index / 引用数。
2. **不用学术 sections**：5 人没有一个有 CV PDF / Service / Teaching / Honors 这些传统学术 section。
3. **Google Scholar 是 publication 真理出口**：5 人主页都不列完整 publication，而是「精选 1-6 篇 + 外链 Google Scholar」。
4. **headshot 是可选项**：5 人中只有 Noam 放头像，其他全没有。

**差异点 / 三种主页范式**：
- **范式 A（blog-first）**：Lilian Weng / Chris Olah — 整站就是博客索引，About 是次要补充。适合"内容输出 = 主要身份"的人。
- **范式 B（essay-portfolio）**：Dario Amodei — 长文 + interview 列表，bio 一段。适合"thought leader + Exec"。
- **范式 C（成就清单）**：Noam Shazeer — 发明列表 + 履历。适合"已经有 named work"的人。
- **范式 D（无主页）**：John Jumper — 让公司 bio + Nobel 自证。**不适合 PhD 学生**。

**blog 如何整合**：
- Lilian / Chris：博客 **就是主页**（首页直接列文章）
- Dario：博客分类为 Essays + Short posts + Op-eds + Interviews（**按类型分**，不按时间）
- Noam：**无博客**
- 共同：博客篇幅长（Lilian 20-40 分钟，Dario 上万字 essay），不是短帖

**给 Yanjun Chen 的核心 takeaway**：
1. **3 篇 blog（cot / embodied / rlhf）足以学 Lilian / Chris 的 blog-first 范式**，但因为 Yanjun 还在 PhD 阶段、需要论文 section，所以**适合"范式 A + B 的混合"**：首页给 bio + 1 张图（or 不给），下面平等展示「Selected Research（精选 3-5 篇 + 外链 Scholar）」+「Writing（3 篇 blog）」+「Building（zk-cookbook + Polar.sh）」三个 section，每个 section 短而扎实
2. **删掉所有学术装饰 section**：CV PDF / Service / Teaching / Awards 这一组对工业 / 知名研究员都没有 — Yanjun 即使是 PhD，也可以**只保留必须的**（先无 service，等真有了 reviewer 经历再加）
3. **bio 一句话 + 副业明确写**：学 Dario 的"三连击 bio"（「现在 + 过去亮点 + 教育」），Yanjun 可以写：「PhD candidate at PolyU working on RLHF and embodied cognition. Building zk-cookbook (open-source) and shipping products via Polar.sh.」**学术 + 副业并列写在 bio 里**，而不是分两个身份。
