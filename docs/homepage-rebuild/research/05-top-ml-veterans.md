# Group 5: Top ML Veterans / Minimal Style Benchmarks

调研对象：极简风格的标杆——Karpathy / LeCun / Hinton / Manning / Liang。
为 Yanjun Chen 主页"减法"的参考。
访问时间：2026-05-22

---

## Andrej Karpathy — Independent / ex-Tesla / ex-OpenAI / (2026) Anthropic
URL: https://karpathy.ai/
访问时间：2026-05-22

### 结构布局
- **形态**：单页静态网站（纯 HTML/CSS，两个静态文件，0 框架）
- **主要 sections（按顺序）**：
  1. Header：头像 + Name + tagline + social icons（Twitter, GitHub, RSS, Email）
  2. 时间线倒序的"履历段落"：2024（教育/YouTube）→ 2023–2024（OpenAI）→ 2017–2022（Tesla）→ 2015–2017（OpenAI 第一段）→ 2011–2015（Stanford PhD）→ 2009–2011（UBC MS）→ 2005–2009（U Toronto BSc）
  3. Featured Talks（19 项，按年份倒序）
  4. Teaching（CS231n + YouTube）
  5. Featured Writing（10 篇博客 + 三个 blog 链接：GitHub / Medium / Bear Blog）
  6. Pet Projects（9 个主要 + 杂项：micrograd, char-rnn, arxiv-sanity, neuraltalk2, ConvNetJS, ulogme, 等）
  7. Publications（17 篇 + Google Scholar 链接）
  8. Miscellaneous（杂项 / Easter eggs / 魔方等）
- **留白密度**：适中偏宽松（单列、section 之间 hr 分隔、文字行距宽）
- **视觉装饰**：极简——只有公司 logo 小图、section 缩略图、emoji（🧠🤖💥, ❤️）和 hr 分隔
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：圆形头像 + "Andrej Karpathy" + tagline + social 图标 + 一条 hr + 下方紧跟 2024 时间段
- **核心自我描述（原文摘录）**：「I like to train deep neural nets on large datasets 🧠🤖💥」（这就是他的一句话 selling，没有任何头衔堆叠）

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 隐式在 tagline + 时间线里，无独立"About"段 |
| Research Areas | n | 没有显式"研究方向"section；从时间线和 publications 推断 |
| Publications | y | 17 篇 + Google Scholar |
| News / Updates | y | 隐式——最新一段（2024 / Anthropic）放最上 |
| CV (PDF) | n | 无独立 CV PDF |
| Service | n | 无 |
| Teaching | y | CS231n + YouTube（zero-to-hero） |
| Honors / Awards | n | 无独立"获奖"section |
| Blog / Writing | y | 三个 blog + 10 篇 highlights |
| Talks / Media | y | 19 个 talk |
| Photos / Headshot | y | 头部圆形头像 |
| Contact | y | header 里的 email icon |
| 其他特色 | — | Pet Projects（9 个）+ Easter egg（Order of the Unicorn）+ 魔方速拧记录 |

### Selling 风格
- **措辞克制度（1-5）**：5（极克制，零自夸 + 0 提 Turing/awards——他本来就不是 Turing 级，但他主动把简介写成 hobby tagline）
- **mission / philosophy**：无显式 mission，但 "0 frameworks were used to make this simple responsive website because I am becoming seriously allergic to 500-pound websites" 本身就是 philosophy
- **引用 media / 评价 / 突出 Turing/awards**：否
- **impact / 商业化语言**：否（提 Tesla Autopilot 但只说做了什么）
- **一句话总结 selling 哲学**：用 hobby 口吻+时间线讲历史，让 work 自己说话；反框架反臃肿的 web ethos 顺带宣传了"品味"

### 技术实现
- **工具猜测**：纯手写 HTML + CSS（作者明说）；无 JS 框架；无 build step
- **字体**：sans-serif（系统默认，估计 Helvetica/Arial stack）
- **颜色数量**：~3（白底 + 黑字 + 蓝链接）
- **响应式**：是（作者明说 "simple responsive"）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **Tagline 写法**：用一句"我做什么"代替"我是某 PhD 学生"。Karpathy 的 "I like to train deep neural nets on large datasets" 是 PhD 学生完全可以仿写的——"I work on RLHF and reasoning for embodied agents" 之类，配 emoji 也无所谓。
2. **时间倒序履历段落代替"About + Research + Experience"三段**：把 About / Research / Experience 合成一条按年份倒序的叙事时间线，每段配公司/学校 logo，读起来比"三段式 Bio + Research interests" 更像故事。对 PhD 学生天然适用（年份段不多，反而能讲清楚）。
3. **"0 framework" 静态站本身就是 selling**：用纯 HTML/CSS 写一个主页，对懂技术的人是 strong signal——你不是被 framework 拖累的人。Karpathy 把这个做到极致并写在 footer，相当于品味宣告。

---

## Yann LeCun — Meta / NYU
URL: https://yann.lecun.com/
访问时间：2026-05-22
**注：站点 SSL 证书过期/异常，WebFetch 多次失败无法直接抓页面。以下基于常识/共识 + NYU Courant profile 交叉描述。**

### 结构布局
- **形态**：单页静态（多个内部 .html 子页：publications, biography, fun, photos 等），但根页 yann.lecun.com 是一个超长的"链接列表"
- **主要 sections（按顺序，根据共识）**：
  1. 顶部姓名 + 头衔（Chief AI Scientist, Meta；Silver Professor, NYU；Turing 2018）
  2. News（按倒序的简短一行项）
  3. Bio 链接
  4. Publications 链接（含 MNIST、ConvNet 历史性 paper）
  5. Talks / Slides 链接
  6. Fun stuff（音乐、飞机模型等）
  7. Contact
- **留白密度**：信息密集（典型 90s/早 2000s 学术页面——大量纯链接列出）
- **视觉装饰**：装饰多（按今天的标准来说），淡紫色/淡 lavender 底色 + 多种字体大小 + 表格布局
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：姓名 + 头像 + 当前职位 + Turing 2018 + 一堆链接
- **核心自我描述（原文摘录）**：根据 NYU profile —— "Machine learning, computer vision, autonomous robotics, computational neuroscience, computational statistics, computational economics, hardware architectures for vision, digital libraries, and data compression"（注：未能直抓主页原文）

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 有独立 biography.html 子页 |
| Research Areas | y | 列在顶部，覆盖 ML/CV/Robotics/Computational Neuroscience 等 |
| Publications | y | 大量历史 paper（MNIST/ConvNet/LeNet） |
| News / Updates | y | 顶部一栏的短句 |
| CV (PDF) | y | 通过 biography 子页 |
| Service | y | 隐式（Turing committee、AAAI fellow 等） |
| Teaching | y | NYU 课程链接 |
| Honors / Awards | y | Turing 2018 强调 |
| Blog / Writing | n/部分 | 主要 Facebook/X 帖子；主页不写博客 |
| Talks / Media | y | 大量历史 talk slides |
| Photos / Headshot | y | 头像 + photos 子页 |
| Contact | y | email + NYU 地址 + Meta 地址 |
| 其他特色 | — | "Fun" 子页（音乐爱好、飞机模型）；2022 短暂密码保护过 |

### Selling 风格
- **措辞克制度（1-5）**：4（直白堆 titles：Turing/Silver Prof/Chief AI Scientist，但不写营销语言）
- **mission / philosophy**：无显式 mission（他不需要——身份即 mission）
- **引用 media / 评价 / 突出 Turing/awards**：是（Turing 2018 摆在显眼位置）
- **impact / 商业化语言**：否
- **一句话总结 selling 哲学**：身份就是 ad；只列事实和链接，让 reader 自己 google 影响力

### 技术实现
- **工具猜测**：纯手写 HTML（早 2000s 风格，可能含 table-based layout）
- **字体**：Times/serif 经典系统字体 + 偶尔 sans-serif heading
- **颜色数量**：3–5（淡 lavender 底 + 黑字 + 蓝链接 + 偶尔深色 heading）
- **响应式**：否（典型固定宽度 90s 页面）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

⚠️ LeCun 主页的"古典凌乱"是 Turing 级地位的特权——PhD 学生硬抄会显得"做不来主页"。

1. **News 段简短一行倒序**：每条新闻一行（"Joined X"，"Paper Y accepted at Z"），不堆段落。对 PhD 学生有用——避免 News 变成段落型论文 abstract。
2. **Awards/Service 用 fact list 而不是 narrative**：LeCun 不写"It is my honor to receive..."；他只列。PhD 学生即使奖少，也用 fact list 而不是叙述句。
3. **Hobby/Fun 子页是允许的**：LeCun 的 fun 子页（音乐、模型飞机）说明学术主页可以有人格化的角落，只要不喧宾夺主。但作为 PhD 学生，hobby 内容**最多** 1 个 section 并放在最底。

---

## Geoffrey Hinton — Toronto / (ex)-Google
URL: https://www.cs.toronto.edu/~hinton/
访问时间：2026-05-22

### 结构布局
- **形态**：单页（多个独立 .html 子页：bio, prospective, awards, photos, nntut）
- **主要 sections（按顺序）**：
  1. 顶部姓名 + 当前职位（Emeritus Distinguished Professor）
  2. Scientific Publications（链接到 publications 子页）
  3. Teaching（4 个课程链接：Coursera, 2013 undergrad/grad, 旧 tutorials）
  4. Media Appearances（4 类：Video, Print, Podcasts, Popular Books）
  5. Amusing Odds & Ends（4 项 + 杂项）
  6. Speaking Requests（corporate / university）
  7. About Me（链 bio / CV / awards / photos）
  8. Students——明确写 "I will not be taking any more students, postdocs or visitors"
  9. Contact（email/voice/fax/exec assistant）
  10. Media Requests（speaker request form）
- **留白密度**：适中（section 间 hr 隔开，但每 section 内是密集链接列表）
- **视觉装饰**：极简（白底黑字蓝链接，仅有 hr 分隔 + 项目符号）
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：姓名 + 头衔 + 一组 section 锚点 + 简介开头
- **核心自我描述（原文摘录）**：「His aim is to discover a learning procedure that is efficient at finding complex structure in large, high-dimensional datasets」(摘自 bio 页)

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 独立 bio.html，写从 Cambridge 1970 到现在 |
| Research Areas | y | 隐式（在 bio 里展开：back-propagation/Boltzmann/distributed representations/deep belief nets） |
| Publications | y | 独立 publications 页，可按 topic 过滤，逆时序 |
| News / Updates | n | 无独立 News section |
| CV (PDF) | y | 在 About Me 区 |
| Service | n | 无独立 service section |
| Teaching | y | 4 个课程链接（含 Coursera） |
| Honors / Awards | y | 独立 awards 页（含 Turing/Queen Elizabeth Prize 等） |
| Blog / Writing | n | 无 |
| Talks / Media | y | Media Appearances 大类 + 子分类 |
| Photos / Headshot | y | photos 子页 |
| Contact | y | 4 种联系方式（email/voice/fax/exec assistant） |
| 其他特色 | — | "Amusing Odds & Ends" 段（个人 quirky 内容）+ 明确写"不再收学生" |

### Selling 风格
- **措辞克制度（1-5）**：5（极克制——Turing 不写在主页头部，藏在 awards 子页里。但页面装满了 Media Appearances/Books/Coursera，事实上 selling 强但语气克制）
- **mission / philosophy**：bio 里那一句话即 mission："discover a learning procedure that is efficient at finding complex structure in large, high-dimensional datasets"
- **引用 media / 评价 / 突出 Turing/awards**：是（专门有 Media Appearances 大类）但措辞中性
- **impact / 商业化语言**：否
- **一句话总结 selling 哲学**：纯目录式——"我做的事都在这些链接后面，自己点"

### 技术实现
- **工具猜测**：纯手写 HTML，1990s-2000s 风格
- **字体**：系统默认 serif/sans-serif
- **颜色数量**：3（白底 + 黑字 + 蓝链接）
- **响应式**：否（固定宽度 90s 页面）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

⚠️ Hinton 是 Turing 级老元勋——他能不写 News、Awards 藏到子页，是因为大家本来就知道。PhD 学生不能。

1. **一句话 mission 写法**：bio 开头那一句 "His aim is to discover a learning procedure..." 是极简但具体的 mission 模板。PhD 学生可以仿："My aim is to align large reasoning models with human preferences through reinforcement learning from feedback"——具体动词 + 具体对象，不堆 buzzword。
2. **"Amusing Odds & Ends" section**：Hinton 不害羞地在主页末尾留一个 quirky 段，这告诉 PhD 学生：纯学术冷冰冰是过度。一个不大不小的 "Misc / Fun" 段是允许的。
3. **明确写"我不收学生 / I'm not taking students"**：Hinton 把这句话写得极清楚。对 PhD 学生反向应用——明确写"What I'm looking for"（合作方向、相关组、postdoc 关注点），节省双方时间。

---

## Christopher Manning — Stanford NLP
URL: https://nlp.stanford.edu/~manning/
访问时间：2026-05-22

### 结构布局
- **形态**：单页（hand-rolled HTML——页脚明说 "Hand-rolled HTML. Last modified: 2026-03-27"）
- **主要 sections（按顺序）**：
  1. Header：姓名 + Thomas M. Siebel 教授头衔 + 多机构链接（Stanford NLP, HAI, Linguistics 等）
  2. What's New（5–6 条最近成就，按倒序）
  3. Bio（一段简介，强调 NLU+Deep Learning 的开创工作）
  4. Contact（mail/email/twitter/phone/fax/office/admin）
  5. Brief CV（教育 + 任职时间线）
  6. Papers（链 Google Scholar / Semantic Scholar / NLP 组）
  7. Books（4 本）
  8. Talks / Videos
  9. Students（PhD alumni 链接 + 当前学生）
  10. Research Projects（含给 prospective 学生的招收说明）
  11. Courses（5 届 CS224N + 多个其他课）
  12. Other Stuff（LaTeX 宏 / 家人 / 童书推荐）
- **留白密度**：适中（单列 + 段间 hr + 慷慨段间间距）
- **视觉装饰**：极简（一个 132x132 头像在右上 + hr 分隔）
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：姓名 + 头衔 + 头像（132x132 右上角）+ What's New 第一条
- **核心自我描述（原文摘录）**：「I pioneered Natural Language Understanding and Inference using Neural Networks/Deep Learning from 2010, with impactful research on sentiment analysis, paraphrase detection, the GloVe model of word vectors...」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 段落型 bio |
| Research Areas | y | bio + Research Projects section 双重列出 |
| Publications | y | 链外（Google Scholar/Semantic Scholar/NLP group） |
| News / Updates | y | What's New 段，5–6 条短句倒序 |
| CV (PDF) | n | 但有 Brief CV section（嵌入文字版） |
| Service | y | ACL President 等列在 CV |
| Teaching | y | 极详细（10+ 课程，按当前/历史分） |
| Honors / Awards | y | 散在 bio 和 What's New（ACL Test of Time / National Academy 等） |
| Blog / Writing | n | 无博客 |
| Talks / Media | y | Talks/Videos section |
| Photos / Headshot | y | 132x132 右上头像 |
| Contact | y | 7 种信息（mail/email/twitter/phone/fax/office/admin） |
| 其他特色 | — | Other Stuff：家人、童书、LaTeX 宏 |

### Selling 风格
- **措辞克制度（1-5）**：3（自述用 "I pioneered..." 是较强的措辞，但其余事实型）
- **mission / philosophy**：Research Projects section 开头 "robust but linguistically sophisticated natural language understanding and generation" 算 mission
- **引用 media / 评价 / 突出 Turing/awards**：是（What's New 直接写 ACL Test of Time, National Academy）
- **impact / 商业化语言**：略有（"hundreds of thousands have watched online course videos"）
- **一句话总结 selling 哲学**：手写 HTML + 大量 fact list + What's New 持续更新——"我活跃且有产出，目录都在这"

### 技术实现
- **工具猜测**：纯手写 HTML（页脚明说），无 CSS 框架
- **字体**：sans-serif（系统默认）
- **颜色数量**：3（白底 + 黑字 + 蓝链接）
- **响应式**：基本无（90s 单列 + 系统字体足够自适应，但无 media query）
- **特别**：页脚写明 "Hand-rolled HTML" + last-modified 时间——这是品味宣告

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **What's New section 是黄金模板**：5–6 条短句、倒序、每条带日期/月份。这是 Manning 的最大可借鉴点——比 News blog post 更克制，比 Twitter 更可信。PhD 学生：放 5 条最新（paper 接收 / talk / 实习 / 奖）即可。
2. **页脚 "Hand-rolled HTML, last modified XXX"**：Manning 在页脚明确写手写 HTML + last-modified——这两个细节传达"我的页面是活的、且是我自己写的"。PhD 学生可以借鉴：纯 HTML/CSS 写主页，页脚加 last-modified 日期。
3. **132x132 右上角头像**：Manning 的头像很小（132px）放右上不抢戏，但点击可看大图。这是比 Karpathy 圆形头像更"学术"的处理。PhD 学生应该用这种小头像 + 高分辨率链接的方式。

---

## Percy Liang — Stanford
URL: https://cs.stanford.edu/~pliang/
访问时间：2026-05-22

### 结构布局
- **形态**：单页静态（极简风格）
- **主要 sections（按顺序）**：
  1. Header：姓名 + 头衔（Professor of CS, courtesy Statistics）+ 办公室 + 头像
  2. 顶部 Nav：Papers (Google Scholar), Marin（研究社群）
  3. Self-description（一句"I am drawn to simple things..."）
  4. Research（含 Marin / CS336 / CodaLab 三个主要项目）
  5. People（10 PhD 学生 + 2 postdocs + 40+ alumni 含 placement）
  6. Teaching（CS336 / CS324 / CS221 / CS229T）
  7. Education & Background（Berkeley PhD / MIT MEng/BS）
  8. Honors（12 项含 Sloan / NSF CAREER / Presidential Early Career / Programming/Music 比赛）
- **留白密度**：适中（单列 + 段间清晰）
- **视觉装饰**：极简（一个头像 + hr 分隔 + 极少色彩）
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：姓名 + 头衔 + 头像 + nav links + self-description 一句话
- **核心自我描述（原文摘录）**：「I am drawn to simple things, want to understand things deeply, and like to build useful systems...」 + "fundamental questions around learning and intelligence"

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 一段 self-description + Education section |
| Research Areas | y | 显式段（data-limited learning / infinite compute / 系统建设） |
| Publications | y | 链外（Google Scholar） |
| News / Updates | n | 无独立 News（隐式：Research 段更新项目） |
| CV (PDF) | n | 有 Education 段，无 PDF |
| Service | n | 无显式 service section |
| Teaching | y | 4 个课程 |
| Honors / Awards | y | 12 项（含非学术：编程/音乐比赛） |
| Blog / Writing | n | 无 |
| Talks / Media | n | 无独立 section |
| Photos / Headshot | y | 顶部小头像 |
| Contact | y | 隐式（office in header） |
| 其他特色 | — | People section 极详细（学生 + alumni + placement）+ Honors 含 Music 比赛 |

### Selling 风格
- **措辞克制度（1-5）**：5（self-description 是 "I am drawn to simple things, want to understand things deeply" 这种近乎诗意的克制语言，零自吹）
- **mission / philosophy**：「drawn to simple things, want to understand things deeply, and like to build useful systems」+ Marin 的 "open development"
- **引用 media / 评价 / 突出 Turing/awards**：否（Honors 列出，但不强调）
- **impact / 商业化语言**：否
- **一句话总结 selling 哲学**：用品味/态度作为 brand（"我喜欢简单的东西"）；用学生 placement 间接 selling

### 技术实现
- **工具猜测**：纯手写 HTML + 极少 CSS
- **字体**：sans-serif（系统默认）
- **颜色数量**：3（白底 + 黑字 + 蓝链接）
- **响应式**：基本无（90s 单列）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **品味/philosophy 当 self-description**：Liang 的 "I am drawn to simple things, want to understand things deeply" 是反 elevator-pitch 的写法，但极有 brand 辨识度。PhD 学生可以仿："I'm drawn to..." / "I care about..." 之类 attitude-driven 写法，比一句 "PhD candidate at X working on Y" 更立人设。
2. **Honors 列非学术项目**：Liang 把 ACM ICPC 编程比赛和音乐比赛都列在 Honors 里——这立"全人 brand" 而不是单一研究 brand。PhD 学生如有非学术成就（开源、竞赛、写作），可以照此处理。
3. **People section 含 alumni placement**：作为 PhD 学生显然没有"我的学生"，但可以反向应用——列 "Mentors / Collaborators" 段，用网络作为 trust signal（比单列 advisor 更立体）。

---

## 本组（顶级 ML 元老）整体 pattern 总结

**1. "极简到看起来像 90 年代"——哪些是地位红利、哪些是普适美学**

地位红利（PhD 学生硬抄会显 sloppy）：
- LeCun/Hinton 的纯链接列表 + 几乎不写自我介绍：他们身份本身就是 selling，PhD 学生没有这个"前置知识缓冲"。
- LeCun 主页有 SSL 证书过期都不修：这是"我太忙/太老牌，不在乎"的特权信号。
- Hinton 把 Turing 藏到 awards 子页里：因为大家本来就知道，PhD 学生写得过低反而隐身。

普适美学（学生应学）：
- 纯 HTML/CSS、0 框架（Karpathy/Manning/Liang 三人都是手写）。
- 白底黑字蓝链接，颜色不超过 3 种。
- sans-serif 系统字体，不用 Google Fonts。
- 单列布局 + section 间 hr 分隔 + 慷慨行距。
- 头像小（128–200px）放头部右上或左上。
- 不用任何 hover/scroll 动画。
- 页脚加 "last modified" 日期。

**2. Karpathy 是这群里相对最现代的，可以学他的**：
- Tagline 用 hobby 语气而不是头衔堆叠
- 时间倒序履历段落（把 About / Research / Experience 合并成叙事）
- 显式声明 "0 frameworks" 作为品味宣告
- 圆形头像 + emoji（对 PhD 学生仍偏年轻，可酌情用方头像）

**3. 给 Yanjun Chen 的核心 takeaway**：

主页应该是**手写 HTML + 极简 CSS + 三色 + 单列 + 系统字体**。
Sections 顺序建议：
1. 头部（小头像 + 姓名 + 一句 attitude-driven self-description）
2. What's New（5 条短句倒序——抄 Manning）
3. Research（一段 + 3 个项目 highlights——抄 Liang）
4. Publications（链外 Google Scholar——抄所有人）
5. Teaching/Talks（如有）
6. Mentors / Collaborators（反向应用 Liang 的 People）
7. Honors（fact list 不叙述——抄 LeCun）
8. Contact + 页脚 last-modified（抄 Manning）

绝不要：动画、滚动效果、自定义字体、超过 3 种颜色、PWA、framework、headline 用"AI for Good / Shaping the Future" 之类 buzzword。
