# 组 7：学界年轻一代 PhD / 新晋 AP

调研对象：和 Yanjun Chen 同 level 或 +1 level 的年轻学者。
调研时间：2026-05-22
调研员：个人主页调研员（参考 Yanjun Chen 主页彻底重写项目）

---

## Aviral Kumar — CMU AP（前 Berkeley PhD）
URL: https://aviralkumar2907.github.io/
访问时间：2026-05-22
当前 career stage：新晋 AP（2023 PhD 毕业，刚入职 CMU CSD + MLD）

### 结构布局
- **形态**：多页静态站（Home / Publications / Contact 三级导航）
- **主要 sections（按顺序）**：Home（bio + lab 介绍）→ Publications（独立子页）→ Contact（独立子页）
- **留白密度**：极简（页面元素极少）
- **视觉装饰**：极简（只一张头像 + 纯文本段落）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：顶部 name/导航 → profile 照片（website_final.JPG）→ Bio 段落 → Lab 介绍段落 → 招学生 CTA
- **核心自我描述（原文摘录）**：「I am an Assistant Professor in the Computer Science (CSD) and Machine Learning (MLD) departments at Carnegie Mellon University (CMU). I finished my Ph.D. from UC Berkeley in 2023.」
- **研究使命（原文摘录）**：「interested in a broad range of topics ranging from core reinforcement learning (RL) algorithms to scaling RL methods to foundation models to real robots」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 1 段，6 行内；学位 + 当前职位 |
| Research Areas | y | 嵌在 lab 介绍中，自然语言描述，未列 bullet |
| Publications | y | 子页；按时间倒序；含 acceptance rate（如 NeurIPS spotlight 3%）；分 conference / tutorials / pre-prints 三块 |
| News / Updates | n | 无独立 news，但有「2024 年度工作总结博客」链接 |
| CV (PDF) | n | 主页未挂；publications 页提到 2022.11 CV 含完整列表 |
| Service | n | 未单列 |
| Teaching | n | 未单列（GitHub 上有 15-889 课程仓库，但主页未链） |
| Honors / Awards | n | 主页未单列 |
| Blog / Writing | y | 一篇年度总结博客 |
| Talks / Media | n | 嵌在 publication 条目里（每篇可能挂 talk 链接） |
| Photos / Headshot | y | 一张正式照 |
| Contact | y | 独立子页；含 office GHC 7125 + 邮箱 |
| Internship / Industry | n | AP 身份，未列 |
| 其他特色 | — | "AIRe Lab" 命名 + 招学生 CTA 写在 home 页 |

### Selling 风格
- **措辞克制度（1-5）**：5（极克制，几乎没有形容词）
- **mission / philosophy**：有，一句话嵌在 lab 介绍里：「core RL → scaling to foundation models → real robots」
- **引用 media / 评价 / 突出 awards**：否（首页完全不展示）
- **如何处理"经验少"的劣势**：直接绕过——重点 sell **lab 的研究方向**（AIRe Lab）和**招学生 CTA**，把读者注意力从"个人成就少"导向"加入我的实验室"
- **一句话总结 selling 哲学**：「我不证明自己强，我证明我的方向值得跟」

### 技术实现
- **工具猜测**：GitHub Pages（aviralkumar2907.github.io），可能 Jekyll + minimal-mistakes 或自写 HTML，非 al-folio
- **字体**：默认 system serif/sans 混合
- **颜色数量**：≤3（黑白 + 链接蓝）
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **"刚毕业 / 刚入职"不必道歉**——Aviral 2023 才博士毕业，直接平静写"I am an AP... I finished my Ph.D. from UC Berkeley in 2023"，没有任何"junior"、"new"、"recently"等弱化词。Yanjun 也应避免"PhD student, currently working on..."这种暗示弱势的措辞，改成平视的"I am a PhD student at PolyU. I work on RLHF and embodied AI."
2. **极简三页结构是有效的**——Home / Publications / Contact 就够了。把所有"次要"section（teaching、service、awards）省掉不会损失什么，反而让"我研究什么"这件事更突出。Yanjun 当前主页装饰过度的根本病因是 sections 太多，可学 Aviral 砍到三页。
3. **用研究方向（不是个人）做主角**——Aviral 用"RL → foundation models → robots"这条主线串起所有 pub。Yanjun 应该确立一条主线（如"RLHF → reasoning → embodied agents"），让 6 篇论文围绕主线呈现，而不是平铺。

---

## Tri Dao — Princeton AP（Flash Attention / Mamba 作者）
URL: https://tridao.me/
访问时间：2026-05-22
当前 career stage：新晋 AP + 工业界 Co-founder（Princeton AP + Together AI Chief Scientist）

### 结构布局
- **形态**：多页静态站（6 个 top-nav）
- **主要 sections（按顺序）**：About → Blog → Publications → Awards → Teaching → Repositories
- **留白密度**：适中（每节简洁但内容密度高）
- **视觉装饰**：极简（profile photo + 文字 + 表格）
- **是否有动画**：否；有 dark mode toggle

### 第一印象（首屏不滚动）
- **首屏元素**：profile 照 + 姓名 + 邮箱 tri[at]tridao.me + 双重 affiliation（Princeton + Together AI）+ CV 链接（标注更新日期 01/2026）+ PhD 出处
- **核心自我描述（原文摘录）**：「Assistant Professor of Computer Science at Princeton University, leading the Dao AI Lab. Co-founder & Chief Scientist of Together AI.」
- **研究使命（原文摘录）**：「Machine learning and systems, with a focus on efficient training and inference」+「Hardware-aware algorithms」+「Sequence models with long-range memory」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 简短，1-2 段 |
| Research Areas | y | 2-3 个 keyword phrases，非 bullet |
| Publications | y | 独立子页；时间倒序 2017→2026；带 award 徽章（Outstanding Paper / Oral / Spotlight） |
| News / Updates | y | Blog 形式（不是单独 News 列表） |
| CV (PDF) | y | 首屏链接 + 标更新日期 |
| Service | n | 未单列 |
| Teaching | y | 独立子页 |
| Honors / Awards | y | **独立子页**（Schmidt Sciences Fellowship 2025、Google ML/Systems Junior Faculty Award 2025 等） |
| Blog / Writing | y | 独立 Blog；当 news/updates 用 |
| Talks / Media | n | 未单列；混在 pub 中 |
| Photos / Headshot | y | 一张 |
| Contact | y | 邮箱直接写在首屏 |
| Internship / Industry | y | Together AI Co-founder & Chief Scientist 极显著（与 AP 并列写在首屏） |
| 其他特色 | — | Awards 单独成页（很多 AP 都没这么做） |

### Selling 风格
- **措辞克制度（1-5）**：4（克制但有专门 Awards 页放权威背书）
- **mission / philosophy**：有，2 行内：「efficient training and inference, hardware-aware algorithms, sequence models with long-range memory」
- **引用 media / 评价 / 突出 awards**：是——专门一个 Awards 页放 Outstanding Paper / Junior Faculty Award 等
- **如何处理"经验少"的劣势**：**反向操作**——用 FlashAttention/Mamba 这两个 landmark 工作做杠杆，全部带 award badge；同时把 Together AI 工业界身份显眼放出来证明"研究有真实世界影响"
- **一句话总结 selling 哲学**：「我有两个改变世界的工作，剩下都是注脚」

### 技术实现
- **工具猜测**：Jekyll（/assets/、versioned assets 路径），可能 al-folio 或自定义 minimal Jekyll theme
- **字体**：默认 serif（学术感）+ sans nav
- **颜色数量**：≤3 + dark mode
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **CV 链接 + 更新日期**——Tri Dao 把"CV (01/2026)"写在首屏，传达"这个站是活的"的信号。Yanjun 应在 hero 区放 CV 并标日期（如"CV - May 2026"），这比任何"recent updates"section 都有效。
2. **少而精的 keyword phrase 胜过 bullet 列表**——Tri Dao 用三个 noun phrases 锚定研究身份（"hardware-aware algorithms" + "long-range memory" + "efficient training/inference"），比一个 10-bullet list 更易记忆。Yanjun 当前主页关键词散乱，应锁定 3 个 phrase，如「RLHF / reward modeling / embodied reasoning」。
3. **如果有 1-2 个高影响力工作，给它单独的视觉锚点**——Tri Dao 把 FlashAttention 和 Mamba 当 selling 主轴，Awards 页里这两个的 award badge 最多。Yanjun 若有最自豪的论文（如 EMNLP 2024 或 NAACL 2025），可以在 hero 区直接挂出来（如"Selected Work: <paper title>, EMNLP 2024"），而不是混在 publication list 里。

---

## Jonathan Frankle — MIT PhD / Databricks Chief AI Scientist
URL: https://www.jfrankle.com/
访问时间：2026-05-22
当前 career stage：工业界研究员（MIT 2023 PhD → Databricks Chief AI Scientist，via MosaicML 收购）
注：本站抓取返回 403（疑似 anti-bot），以下信息来自 search snippets + Google Scholar 交叉验证

### 结构布局
- **形态**：单页或简多页（具体抓取受限）
- **主要 sections（按顺序）**：Bio → Databricks Research → PhD Research → Technology Policy → Contact/Careers
- **留白密度**：（未抓取到，推测适中）
- **视觉装饰**：（未直接抓到）
- **是否有动画**：（未确认）

### 第一印象（首屏不滚动）
- **首屏元素**：name + "Chief AI Scientist at Databricks" 头衔
- **核心自我描述（snippet）**：「Chief AI Scientist at Databricks, where he leads research projects on reinforcement learning, model training, and agent evaluation. He arrived at Databricks via the company's \$1.3B acquisition of MosaicML, where he was a member of the founding team. He completed his PhD in computer science at MIT in 2023.」
- **PhD 主线（原文摘录）**：「His main line of research during his PhD was on his lottery ticket hypothesis.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 多段，按身份切（Databricks / PhD / Policy） |
| Research Areas | y | 嵌在每段身份说明里 |
| Publications | 未直接抓到 | Google Scholar h-index 32, 14480 citations，5 篇千+引 |
| News / Updates | 未抓到 | |
| CV (PDF) | 未抓到 | |
| Service | n（不显著） | |
| Teaching | n | |
| Honors / Awards | n（不显眼） | |
| Blog / Writing | 未抓到 | Databricks Blog 上有 author 页 |
| Talks / Media | 未直接抓 | 大量播客和 conference 演讲（IA40、DEV、Data+AI Summit） |
| Photos / Headshot | 未抓到 | |
| Contact | y | "For scientific, business, and academic correspondence" + Careers link |
| Internship / Industry | y | **核心身份**——Databricks 角色排在首位，PhD 后置 |
| 其他特色 | — | Technology Policy 单独成段（与 OECD 合作 AI Principles + Georgetown Law 旧职位） |

### Selling 风格
- **措辞克制度（1-5）**：3（克制但身份多元）
- **mission / philosophy**：分三轨——Databricks 研究、Lottery Ticket 学术遗产、AI 政策
- **引用 media / 评价 / 突出 awards**：未直接抓到，但 selling 杠杆是「MosaicML 创始团队 → 13 亿美元收购 → 现在领 Databricks AI」这条工业叙事
- **如何处理"非传统学术路径"**：**正面拥抱工业身份**——头衔写"Chief AI Scientist at Databricks"不写"MIT PhD"。PhD 仅作为补充信息出现在第二段。policy 工作也单独成段，强调"AI 不只是 paper"
- **一句话总结 selling 哲学**：「我的 paper 改变学术（lottery ticket），我的产品改变产业（DBRX/MosaicML），我的政策改变社会（OECD）——三轨齐发」

### 技术实现
- **工具猜测**：传统 HTML（http:// + index.html 仍有效，且返回 403 表明可能有 Cloudflare 一类 anti-bot）
- **字体**：未抓到
- **颜色数量**：未抓到
- **响应式**：未验证

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **如果有工业经历就让它显眼**——Frankle 不躲"我是公司高管"这个身份，反而把它放在 PhD 之前。Yanjun 若有 internship/工业合作，应直接列出（如"Visiting Researcher @ X, Summer 2024"），不要藏在 CV 里。
2. **多重身份用"轨"组织而不是"段"**——Frankle 把 Databricks / 学术 / Policy 拆三段平铺。Yanjun 的研究方向 RLHF + Embodied AI 是两条相关但不同的线，可以学这种"分轨"展现，让两条线都清晰，不要混在一段里写"I do RLHF and also embodied AI"。
3. **不挂头像也行**——Frankle 主页（据 snippet 推断）核心是文字 + 工作说明。Yanjun 当前主页粒子动画 + 头像满天飞反而稀释信息密度。一张专业头像 + 大量文字其实是更"严肃学者"的样子。

---

## Tongshuang "Sherry" Wu — CMU AP（UW PhD）
URL: https://www.cs.cmu.edu/~sherryw/
访问时间：2026-05-22
当前 career stage：新晋 AP（HCII + LTI 联合聘）

### 结构布局
- **形态**：多页静态站（6 个 top-nav）
- **主要 sections（按顺序）**：About → WInE Lab → CV → Publications → Teaching → Talks
- **留白密度**：适中（用 thumbnail card 提升视觉密度）
- **视觉装饰**：适中（research topic 用缩略图卡片展示，paper 有 preview）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：page title "Sherry Tongshuang Wu | Hello World!" → 头像 → 中英文姓名「Sherry Tongshuang Wu (吴彤霜)」+ 「Hello World!」欢迎语 → contact icons → 头衔「Daniel P. Siewiorek Assistant Professor of HCII」+ 三个 affiliation（SCS / HCII / LTI）→ 三个研究主题卡片
- **核心自我描述（原文摘录）**：「I am trained at the University of Washington to be an **HCI+NLP researcher**. I study _how humans_ (AI experts, lay users, domain experts) _interact with_ (debug, audit, collaborate) _AI systems._」
- **研究使命（原文摘录）**：「Design practical AIs that can help users in complex tasks, where users are not oracle, and not static.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 1-2 段，自我标签「HCI+NLP researcher」+ 一句使命 |
| Research Areas | y | 三个主题用卡片展现（每个有 thumbnail + 标题） |
| Publications | y | 按研究主题分组（不是单纯时间排序），含 paper preview 缩略图 |
| News / Updates | n | 无独立 news |
| CV (PDF) | y | top-nav 直接链 |
| Service | n | 未单列 |
| Teaching | y | 独立子页 |
| Honors / Awards | n | 主页未显著展示 |
| Blog / Writing | n | |
| Talks / Media | y | 独立子页 |
| Photos / Headshot | y | 头像 + paper thumbnails |
| Contact | y | icons in hero |
| Internship / Industry | n | AP 身份 |
| 其他特色 | — | **「Hello World!」** 中英姓名「吴彤霜」+ 命名实验室「WInE Lab」+ publication 按主题不按时间组织 |

### Selling 风格
- **措辞克制度（1-5）**：3（克制但有「Hello World!」彩蛋 + 中文姓名表达个性）
- **mission / philosophy**：明确——「Design practical AIs that can help users in complex tasks, where users are not oracle, and not static」（这句话信息密度极高：practical + complex tasks + non-oracle + non-static 四个限定）
- **引用 media / 评价 / 突出 awards**：否
- **如何处理"经验少"的劣势**：用**清晰的研究身份标签**「HCI+NLP researcher」+ **使命陈述**对冲——你不需要长 publication list，只要研究定位清晰，读者立刻知道你是干什么的
- **一句话总结 selling 哲学**：「我是 HCI+NLP 双栖研究员，我研究人类如何与 AI 协作——这一句就够了」

### 技术实现
- **工具猜测**：Plain HTML（CMU 个人主页传统，cs.cmu.edu/~username 路径），无明显框架
- **字体**：默认 serif
- **颜色数量**：≤3
- **响应式**：基础响应式

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **一句"使命陈述"+ 一个自我标签**——Sherry 用「HCI+NLP researcher」+「Design practical AIs that... not oracle, not static」一秒锁定身份。Yanjun 应在 hero 区写一句"我是谁 + 我研究什么 + 为什么独特"，例如「PhD student working on RLHF and reward modeling for reasoning LLMs, with a focus on extending these methods to embodied agents.」一句话定义。
2. **Publication 按主题分组比按时间分组更 sell**——Sherry 把 papers 按研究主题分组展示，让读者看到"研究线"而不是"产出列表"。Yanjun 的 6 篇论文按主题分组（如"RLHF 方法" / "Reasoning" / "Embodied"）会比按时间倒序更有 narrative。
3. **保留一点个性彩蛋**——Sherry 的「Hello World!」+「吴彤霜」中文姓名是少有的个性化元素，恰到好处地缓解学术严肃。Yanjun 可以考虑用中文名「陈彦俊」+ 一句小幽默 hero quote 来体现个性，但严禁动画装饰。

---

## Eric Wallace — UC Berkeley PhD / OpenAI Researcher
URL: https://www.ericswallace.com/
访问时间：2026-05-22
当前 career stage：工业界研究员（Berkeley 2023 PhD → OpenAI Alignment Training Team Co-lead）

### 结构布局
- **形态**：单页（all sections on one page，no top-nav 子页）
- **主要 sections（按顺序）**：Hero（name + photo + bio）→ Selected Publications → Media Coverage → Teaching
- **留白密度**：极简（黑白文字为主）
- **视觉装饰**：极简（仅 paper thumbnails）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：header "Eric Wallace" + 专业照 → contact links 行（Email / Twitter / Scholar / GitHub / CV）→ Bio 段
- **核心自我描述（原文摘录）**：「Hello! I am a researcher at OpenAI, where I work to make the next-generation of LLMs more safe, robust, and private. Before this, I did a PhD at UC Berkeley with Dan Klein and Dawn Song.」
- **研究使命（原文摘录）**：「These days, I co-lead a team named 'Alignment Training' that encompasses many research directions in safety, alignment, and capabilities.」
- **研究方向 bullet（原文）**：
  - Robustness to adversarial examples (jailbreaks, prompt injections)
  - Memorization, unlearning, synthetic data (privacy/copyright)
  - Distillation
  - Model stealing attacks
  - Frontier risk evaluations
  - Open-source LLM safety
  - Safety and refusal training

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短，3-4 句；明确身份 + advisor |
| Research Areas | y | **7 个 bullet**（罕见地具体） |
| Publications | y | "Selected" 不是全部；paper thumbnails + TLDR + 引用数 |
| News / Updates | n | 无 news section |
| CV (PDF) | y | hero 区作为 link 之一 |
| Service | n（一行带过） | |
| Teaching | y | 列了 CS288 / CS188 / EMNLP 2020 tutorial |
| Honors / Awards | n（未单列） | |
| Blog / Writing | n | |
| Talks / Media | y | "Media Coverage" 列了 8 篇报道 |
| Photos / Headshot | y | 一张 |
| Contact | y | 5 个 link 链行 |
| Internship / Industry | y | **当前 OpenAI 是主身份**；列了具体产品贡献「o-series models, GPT-5, ChatGPT agent mode」 |
| 其他特色 | — | Media Coverage 单列；具体到列**贡献的产品名**（o-series、GPT-5、ChatGPT agent mode） |

### Selling 风格
- **措辞克制度（1-5）**：3（克制但敢列 7 个 bullet 研究方向 + 产品贡献名）
- **mission / philosophy**：明确——"make next-gen LLMs more safe, robust, and private"
- **引用 media / 评价 / 突出 awards**：是——专门一个 Media Coverage 节，列 8 篇报道
- **如何处理"刚博士毕业去工业界"**：**借身份杠杆**——「OpenAI Alignment Training co-lead」头衔 + 「contributed to GPT-5、o-series、ChatGPT agent mode」具体产品名 + Dan Klein/Dawn Song advisor 学术背书。这三层一起证明严肃。
- **一句话总结 selling 哲学**：「我研究的是被 100M+ 用户用过的模型的安全性——具体到产品名」

### 技术实现
- **工具猜测**：Plain HTML，semantic markup，无框架痕迹
- **字体**：默认 system serif
- **颜色数量**：≤2（黑 + 链接蓝）
- **响应式**：基础响应式

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **7 bullet 研究方向比一段散文更易扫**——Eric 把研究方向写成 7 个具体 bullet（每个一行，5-10 词），读者 3 秒能定位他。Yanjun 应把研究方向具体到 bullet（如「Reward modeling for long-form reasoning」/「PPO/GRPO variants for chain-of-thought」/「Embodied reward shaping」），而不是"I work on RLHF and embodied AI"这种模糊表达。
2. **如果有具体产品/系统贡献就写产品名**——Eric 列「o-series models, GPT-5, ChatGPT agent mode」直接告诉你他的工作影响了什么。Yanjun 若有 paper 的方法被用在哪个公开 benchmark / model release 上，应该具体写出来，而不是"my work has been adopted by..."。
3. **"Selected Publications" 而非全列**——Eric 主页只列 Selected，把全列推给 Scholar/CV。Yanjun 6 篇 paper 可全列（不算多），但用「Selected」措辞可以暗示「这只是冰山一角」的暗示，未来论文增多时也不用改架构。

---

## 本组（年轻一代 PhD/AP）整体 pattern 总结

**共同点**：
1. **极简视觉**——5 人全部黑白纯文字 + 1 张头像，零动画零装饰；这是「严肃年轻学者」的 default 美学
2. **首屏定位句**——每人首屏都有一句 50 词以内的"我是谁 + 我研究什么"陈述，立刻可识别
3. **静态网站**——全部 Plain HTML / Jekyll 风格，没人用 React/Next.js SPA
4. **3-6 个 sections 封顶**——所有人都把页面控制在 6 个 nav 项以内，不堆砌

**差异点**：
- **新晋 AP（Aviral、Tri Dao、Sherry）**：都强调 "Lab/Group" 命名（AIRe Lab / Dao AI Lab / WInE Lab）+ 招学生 CTA
- **工业界研究员（Frankle、Wallace）**：都把工业头衔放主位 + 列具体产品贡献（DBRX / GPT-5）
- **是否带 Awards 页**：只有 Tri Dao 单设（因有 FlashAttention/Mamba 这两个 landmark），其他人不挂或仅一行带过

**反例**：本组无人用粒子动画、Chart.js 图表、3D 模型、滚动 parallax 等装饰。Yanjun 当前主页所有装饰元素，在本组同 level 学者中**零人采用**——这是最强的负面信号。

**给 Yanjun Chen 的核心 takeaway（最重要）**：

1. **立刻删除所有动画/粒子/Chart.js**——这一组没有任何同级别学者使用，使用即偏离 norm，弱化严肃感。
2. **首屏必须一句话定位身份**——参考 Sherry 的「HCI+NLP researcher」+ Aviral 的「I am an AP... I finished my PhD in 2023」+ Eric 的「I am a researcher at OpenAI...」——一句话锁定研究身份。
3. **不要为"PhD student"身份道歉**——Aviral、Tri Dao、Sherry、Eric 都是 2023 前后毕业的（和 Yanjun 同级别），全部平视写自我介绍，无任何弱化措辞。Yanjun 应直接写「I am a PhD student at PolyU working on RLHF and embodied AI」。
4. **研究方向用 3-7 个具体 bullet**——Eric 的 7 bullet 模板是最易读的；Yanjun 应锁定 3-5 个研究子方向（如 reward modeling、reasoning、embodied agents），而不是用"AI safety / RLHF / LLMs"这种过宽的标签。
5. **Publication 按主题分组优于按时间倒序**——Sherry 已示范；Yanjun 6 篇 paper 按 RLHF / Reasoning / Embodied 三组展示，narrative 比时间线强。
6. **三页结构就够**——Aviral 的 Home / Pubs / Contact 三页是底线；Tri Dao / Sherry 的 6 页是上限。Yanjun 当前架构（疑似 5+ 装饰页）应压缩。
