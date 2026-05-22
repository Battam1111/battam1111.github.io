# 组 6：主流 NLP / LLM mid-career PI 调研

调研日期：2026-05-22
调研对象：Yejin Choi (Stanford), Tatsunori Hashimoto (Stanford), Aditi Raghunathan (CMU), Robin Jia (USC), Danqi Chen (Princeton)

---

## Yejin Choi — Stanford CS & HAI
URL: https://yejinc.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动（实体文件 yejinc.github.io/index.html，单 HTML）
- **主要 sections（按顺序）**：Header (photo + title + contact) → News → Research Interests → Recent Talks → Recent Preprints → Recent Publications（2016-2026）→ 页底 acknowledgment
- **留白密度**：信息密集（页面 ~180KB HTML，新闻/talks/papers 数百条堆叠）
- **视觉装饰**：极简，但用 emoji 🔥📺 和小图标（tv-icon.png）做强调
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：右侧 headshot（200px wide，UW 2022 拍的，注明 "Photo credit: Matt Hagen"）+ MOSAIC lab logo（小，90px）；左侧大字 "Yejin Choi"，下方 "The Dieter Schwarz Foundation Professor & Senior Fellow"，红字 "MacArthur Fellow"；办公室地址、电话、邮箱；右侧 Stanford 地址
- **核心自我描述（原文摘录）**：无显式 mission，仅头衔堆叠：「The Dieter Schwarz Foundation Professor & Senior Fellow / MacArthur Fellow」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | n | 没有传统 Bio 段落，全靠头衔+News 自我介绍 |
| Research Areas | y | "Research Interests 🔥"，4 大方向用 bullet |
| Publications | y | 200+ 篇，逆序按年，分 "Recent Preprints" 和 "Recent Publications (2016-2026)" 两块 |
| News / Updates | y | News 区在最顶部！15+ 条：UN Briefing、TIME100 AI 2025、Davos panel、Bill Gates podcast、TED talk、MacArthur Fellow、New Yorker/NYT/Quanta 报道 |
| CV (PDF) | n | 无 PDF 链接 |
| Service | n | 注释掉了 |
| Teaching | n | 不在主页（在 Stanford Explore Courses） |
| Honors / Awards | y | 嵌在 News 里，红字突出 "MacArthur"、"Longuet-Higgins Prize"、"Distinguished Research Fellow Oxford" |
| Blog / Writing | n | 但链接到 Daedalus 文章 |
| Talks / Media | y | "Recent Talks (2020-2026)" 80+ 条；TED、Davos、UN、Bill Gates podcast 全列 |
| Photos / Headshot | y | 单张，带摄影师署名 |
| Contact | y | 办公室、电话、邮箱明文 |
| Students / Group | n | 主页没有，但 MOSAIC logo 链到 lab |
| 其他特色 | — | News 放最顶部是反传统的：先展示影响力（UN/TIME/TED），再讲研究 |

### Selling 风格
- **措辞克制度（1-5）**：2（克制+影响力炫耀混合）
- **mission / philosophy**：无显式 mission，但 News 区充当 "看我有多 influential"
- **引用 media / 评价 / NSF Career / Sloan**：是 — TIME100、TED、New Yorker、NYT、Quanta、Bill Gates podcast、Davos
- **impact / 商业化语言**：是 — UN Security Council briefing、World Economic Forum panel
- **一句话总结 selling 哲学**："I am a household name in AI policy/media — research outputs follow"

### 技术实现
- **工具猜测**：纯手写 HTML + Bootstrap 4 (`bootstrap.min.css`) + 自定义 `choi.css`。完全不是模板，是 90 年代风格的 table-based layout（`<table border="0">`、`<font size="5">`、`<br>` 排版）
- **字体**：浏览器默认 serif（Times-like）
- **颜色数量**：黑 + 蓝（链接）+ 红（强调 MacArthur/awards）+ 灰（图片署名）+ 绿（NVIDIA 颜色）+ 紫（visited links）— 比想象中多
- **响应式**：基本不响应（用 table layout）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）

1. **News 放最顶部，让影响力替你说话** — PhD 可借鉴的弱化版：把 "Recent Updates" 区放主页前 1/3，列 paper accept、talk、award；不要装"低调"把 News 藏底部。Choi 的做法证明：影响力人物 = 让 readers 第一眼看到你最近做了什么。
2. **"小但是真"的 talks 列表** — Choi 列了 80+ talks，PhD 不可能这量但可以列 5-10 个 invited talks / panel discussions，每个带链接和 venue。说明你是被请去的，不是只发 paper。
3. **不写 mission statement 也行** — Choi 主页完全没有 "My research aims to..." 的套话；用 headlines（MacArthur）+ News（UN briefing）+ research areas（4 个方向）三件套替代。**反例警告**：PhD 没有 MacArthur，所以必须有 mission；但可以学这种"用事实而非口号"的克制。

---

## Tatsunori Hashimoto — Stanford CS
URL: https://thashim.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动（带 anchor 导航 #bio #publications #resume）
- **主要 sections（按顺序）**：Header (photo + name + title + contact + 3 social icons) → Navbar (Bio / Publications / Resume) → Bio → Advisees → Publications (with tabs: Selected/All/Stats+ML/NLP/Comp Bio) → Teaching → Former Advisees → Resume → Acknowledgments
- **留白密度**：适中
- **视觉装饰**：极简，仅 FontAwesome 社交图标
- **是否有动画**：无（但有 JS 驱动的 publication tab 切换）

### 第一印象（首屏不滚动）
- **首屏元素**：3-column 网格左侧 profile photo（占 3 列）+ 9 列大字 "Tatsunori Hashimoto" + "Assistant Professor, Stanford" + email + Twitter/LinkedIn/GitHub 三个 FontAwesome icon
- **核心自我描述（原文摘录）**：「I am currently an assistant professor at the computer science department in Stanford university. My research uses tools from statistics to make machine learning systems more robust and trustworthy — especially in complex systems such as large language models.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 中等长度，明确 mission + 3 个研究方向（Long-tail behavior / Understanding / Fairness）+ 学术血统（Duchi/Liang/Jaakkola/Gifford/Airoldi）|
| Research Areas | y | 3 个，用 `<dl>` definition list 排版（dt: name, dd: question） |
| Publications | y | 大量，**带 tab 过滤**（Selected/All/Stats+ML/NLP/Comp Bio），按 venue 标记 |
| News / Updates | n | **完全没有 News 区** |
| CV (PDF) | y | 链接 "Resume" 在 navbar |
| Service | n | 主页不展示 |
| Teaching | y | 5 门课列表（CS336/CS224n/CS324/CS329D/CS221）按学期 |
| Honors / Awards | n | 不在主页展示（仅 paper 旁标 "Best paper"、"ICML oral"） |
| Blog / Writing | n | 无 |
| Talks / Media | n | 无 |
| Photos / Headshot | y | 单张 |
| Contact | y | email 明文，无地址 |
| Students / Group | y | **Advisees 区显眼**：9 个 PhD/postdoc 列表，每个带 co-advisor；下方 Former Advisees 列 7 人现状（Anthropic/OpenAI/Meta/UIUC） |
| 其他特色 | — | Publications **tab 过滤**是亮点；按 sub-field 切换 |

### Selling 风格
- **措辞克制度（1-5）**：5（极度克制，纯学术）
- **mission / philosophy**：有：「use robustness and worst-case performance as a lens to understand and make progress on several fundamental challenges in machine learning and natural language processing」
- **引用 media / 评价 / NSF Career / Sloan**：否（这是反例！— 即使 Sloan/Schmidt 这种他也不放主页）
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**："看我和我学生的工作就够了"

### 技术实现
- **工具猜测**：**Skeleton CSS framework**（明确 `/libs/external/skeleton/`）+ Jekyll（GitHub Pages）+ jQuery + skeleton-tabs（publication 过滤器）+ 自定义 my_css.css；致谢页底感谢 Martin Saveski 的模板
- **字体**：Raleway（Google Fonts，400/300/600 weights）
- **颜色数量**：黑+蓝+灰（极少）
- **响应式**：是（Skeleton 框架自带）

### 可借鉴 3 条

1. **Publication tab 过滤是 mid-career 信号** — PhD 现阶段 paper 不够多，**不要硬上 tab**；但等到 publications 超过 20 篇时这种 by-subfield 分类极其有用。可借鉴的是：主页只列 5-8 篇 selected publications，下方加 "All publications →" 链接到 full list 子页。
2. **Bio 的 `<dl>` 定义列表排版** — 把 3 个研究方向写成 "name: question" 形式：「Long-tail behavior — How can we ensure that...?」比 bullet list 高级；PhD 可借鉴：3 个研究方向用 dt/dd 排，每个用问号结尾的句子。
3. **完全不放 News / Media / Honors 也是一种 selling** — 反例参考：Hashimoto 没 Sloan 没 NSF Career？不是，他都有。他选择不显示。**PhD 教训**：早期 award（best paper、scholarship）该放就放，但 *不要* 把 honors section 放主页上方；它属于次要位置或在 CV PDF 里。

---

## Aditi Raghunathan — CMU CS / MLD
URL: https://www.cs.cmu.edu/~aditirag/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动，固定左侧 sidebar + 顶部导航
- **主要 sections（按顺序）**：[Sidebar 固定: name + title + photo] → Top nav (about/publications/honors/group/teaching/contact) → About → Highlight cards (group website + ICML 2025 blog) → Research focus → CTA (apply form) → Publications (隐藏在 nav)/Honors/Group/Teaching/Contact 切换式
- **留白密度**：适中
- **视觉装饰**：highlight-card（带边框的强调框）、Inter/Roboto 字体、整体很现代
- **是否有动画**：无明显动画（可能有 hover）

### 第一印象（首屏不滚动）
- **首屏元素**：左侧 sidebar（name + title + 275px headshot）+ 顶部水平导航（6 个 bullet links）+ 主内容区开头："I am an Assistant Professor in the Computer Science Department at Carnegie Mellon University..."
- **核心自我描述（原文摘录）**：「I aim to advance our scientific understanding of frontier models by uncovering why they fail and how to build systems that remain reliable under pressure.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短：1 段 affiliation + research focus 标签 + 学术血统（Stanford PhD w/ Percy Liang, IIT Madras BTech） |
| Research Areas | y | 嵌在 About 里，列项目：data curation bottlenecks, quantization, agent safety, distribution shift, jailbreaks |
| Publications | y | nav 链接（具体内容动态加载） |
| News / Updates | n | **无 News 区**，但有 highlight-card 公告 ICML 2025 blog post |
| CV (PDF) | n | 主页未直接放 |
| Service | n | |
| Teaching | y | 6 门课（Fall 2022 - Spring 2026） |
| Honors / Awards | y | 12 个：Sloan、NSF CAREER、Okawa、Google Research Scholar、Forbes 30 Under 30、Schmidt AI 2050、Arthur Samuel Best Thesis、Rising Stars in EECS、Open Phil AI Fellowship、Google PhD Fellowship、Stanford 工程奖学金、Anita Borg |
| Blog / Writing | y | ICML 2025 group post 链接 |
| Talks / Media | n | |
| Photos / Headshot | y | 主页一张 |
| Contact | y | email + office |
| Students / Group | y | "group" tab：5 PhD + 4 undergrad/master + alumni；外加 **dedicated group website** (ar-forum.github.io "AI Reliability @ CMU") |
| 其他特色 | — | **highlight-card 公告框**：方框 + 圆角 + 高亮，用于推 ICML 2025 blog 和 group website |

### Selling 风格
- **措辞克制度（1-5）**：4（克制但精心设计）
- **mission / philosophy**：有：「advance our scientific understanding of frontier models by uncovering why they fail and how to build systems that remain reliable under pressure」
- **引用 media / 评价 / NSF Career / Sloan**：是 — 12 honors 满满一屏（这是 mid-career AP 标配）
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**："我有 Sloan/NSF Career/Forbes 30U30/Schmidt — credentials speak"

### 技术实现
- **工具猜测**：**纯手写 HTML/CSS**（James Dolezal 设计致谢）+ Roboto + Inter 双字体；侧栏 sidebar 是 sticky 设计；style.css 自定义；非 Jekyll/Hugo/al-folio
- **字体**：Inter (300-800)、Roboto (300-500)
- **颜色数量**：黑 + 灰 + 蓝（极少）+ highlight-card 边框色
- **响应式**：现代设计应该响应（sidebar→top on mobile）

### 可借鉴 3 条

1. **左侧固定 sidebar + 右侧主内容是 modern academic layout 范式** — al-folio 也是这种。PhD 可借鉴：sidebar 放 name/photo/contact/social，右边主内容滚动。比单列 layout 更现代，比 Bootstrap container 更紧凑。
2. **Honors section 的策略：12 个一次性 dump，不分级** — Aditi 把 prestigious (Sloan, NSF Career) 和 small (Anita Borg scholarship) 都列，不分组。PhD 可借鉴：award 列表不要刻意分级，按时间逆序一次性列。**但 PhD 阶段：先 dump 所有 award/scholarship/best paper/honorable mention，等 award 多了再考虑筛**。
3. **highlight-card 公告框** — 一个简单的带边框圆角的 div 用来宣传 "看我最近的 ICML blog post"。比 News 区更聚焦：选 1-2 件你想推的事，做成卡片。PhD 可借鉴：用一个"当前重点"卡片推某篇 paper 或 demo。

---

## Robin Jia — USC CS
URL: https://robinjia.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动
- **主要 sections（按顺序）**：Header (h1 + photo + intro 双列) → Research questions (4 个 bulleted, 每个 inline-引用 papers) → Bio 段落 → 招生公告 → News and Upcoming Events → Students (PhD/Undergrad/Alumni) → Publications (含 Preprints) → Teaching (USC/Stanford 分块) → Professional Service → Other Work (Industry Internships / Undergrad Research) → Music (有 piano recital 视频) → Other
- **留白密度**：适中
- **视觉装饰**：极简
- **是否有动画**：无

### 第一印象（首屏不滚动）
- **首屏元素**：大字 "Robin Jia"，左侧 photo，右侧 email/office/CV PDF link + 长 intro 段落开头
- **核心自我描述（原文摘录）**：「I am an assistant professor in the Thomas Lord Department of Computer Science at the University of Southern California, where I lead the AI, Language, Learning, Generalization, and Robustness (Allegro) Lab. My research seeks to understand modern deep learning systems for NLP and ensure that they are reliable.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 长，包含 4 个研究问题（with inline paper citations）+ bio 段落 + 招生信息 |
| Research Areas | y | 4 个 bold question："How can we scientifically understand LLMs / How can technical research shed light on legal and policy issues / How should we benchmark LLMs / How can we use LLMs to solve complex reasoning tasks"，**每个下面直接 inline 列 5-8 篇相关 paper 链接** |
| Publications | y | 完整列表 + Preprints 分块 |
| News / Updates | y | "News and Upcoming Events"，含时间戳（10/2025 倒序）|
| CV (PDF) | y | `/assets/pdf/robinjia_cv.pdf` |
| Service | y | Professional Service |
| Teaching | y | USC 和 Stanford 分块 |
| Honors / Awards | n | **没有独立 Honors section**（award 在 paper 旁标，例 "EMNLP 2017 Outstanding Paper Award"）|
| Blog / Writing | n | |
| Talks / Media | n | |
| Photos / Headshot | y | 1 张 |
| Contact | y | 顶部 |
| Students / Group | y | "Students" 区分 PhD / Undergrad-Master / Alumni 三层 |
| 其他特色 | y | **Music 区**：钢琴 piano duo / piano quintet / senior recital 录音，**Math competition** 经历 — 体现"人设"和兴趣 |

### Selling 风格
- **措辞克制度（1-5）**：4
- **mission / philosophy**：有：「seeks to understand modern deep learning systems for NLP and ensure that they are reliable」
- **引用 media / 评价 / NSF Career / Sloan**：否
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**："4 个研究问题 + inline 引用我的 paper = 看我做了什么"

### 技术实现
- **工具猜测**：**Jekyll + al-folio theme**（明确证据：`/assets/images/`, `/assets/pdf/`, `/assets/pptx/`, `/assets/css/main.css`, `/assets/css/index.css`，favicon 完整 manifest，Roboto 字体）
- **字体**：Roboto (400/400bold/400italic)
- **颜色数量**：黑 + 蓝（链接）+ 灰
- **响应式**：是（al-folio 默认支持）

### 可借鉴 3 条

1. **"4 个研究问题 + 每个 inline 引用 paper"是顶级 layout** — 不是 "Research Areas" 然后下面 publications list；是把 paper 织进 narrative。PhD 可借鉴：写 2-3 个研究问题（不是 areas），每个下面用 inline link 引 2-3 篇自己的 paper，让读者通过你的视角理解你的工作。
2. **News 区有时间戳但只列大事**（不是日报）— Robin 的 News 区是 "EMNLP best paper / ICLR organizing / workshop chair"，不是 "今天 paper accepted"。**PhD 可借鉴**：News 区只列 milestone-level events，不刷流水账。
3. **Music / Math competition 区让你"是个人"** — 这是 PhD 强可借鉴：放一个 "Other Interests" 或 "Beyond Research" 小区，列 hobby（音乐/体育/书）。但**注意**：要真实有内容（Robin 有 recital 录音），不是空话；如果只是"我喜欢听音乐"那就不要写。

---

## Danqi Chen — Princeton CS
URL: https://www.cs.princeton.edu/~danqic/
访问时间：2026-05-22

### 结构布局
- **形态**：**多页站点** — 主页 + 5 个子页（papers.html / lab.html / teaching_and_service.html / awards.html / misc.html）
- **主要 sections（按顺序，主页）**：Header (photo 双列 + name with Chinese chars + pronounce audio + title + email + office + 4 social icons) → 横线分隔 → 5-link 横向 nav → 自我介绍段（含 Thinking Machines Lab sabbatical 公告）→ Education / Experience → 横线 → "Last update: October 2025"
- **留白密度**：极简（主页只有 ~190 行 HTML，超短）
- **视觉装饰**：极简，只有 social icon 图片 + Chinese name 小图 + pronounce 音频按钮
- **是否有动画**：无（但有 pronounce audio 的 jQuery toggle）

### 第一印象（首屏不滚动）
- **首屏元素**：左 5 列 photo（max-height 300px）+ 右 6 列：name + Chinese name 图 + "How to pronounce?" 链接（点击展开音频）+ title + email + office + Twitter/Bluesky/Scholar/GitHub 4 social icons
- **核心自我描述（原文摘录）**：「My research explores the full life cycle of language models—how we build, align, and understand them—with a focus on developing methods that democratize their creation and deployment.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短，2 段：affiliation + 学术血统 + research statement + sabbatical 公告 |
| Research Areas | n | 主页注释掉了详细 research interests 段；只有 1 句 mission |
| Publications | 子页 | papers.html |
| News / Updates | n | **完全没有 News** — 仅 "Last update: October 2025" |
| CV (PDF) | n | 无 |
| Service | 子页 | teaching_and_service.html |
| Teaching | 子页 | |
| Honors / Awards | 子页 | awards.html |
| Blog / Writing | n | |
| Talks / Media | n | |
| Photos / Headshot | y | 1 张（danqi_2025.jpg），点击查看大图 |
| Contact | y | email + office |
| Students / Group | 子页 | lab.html: Current Members (grid w/ photos) + Alumni (PhD/postdoc/MSE/undergrad 分块) + Acknowledgements (funding sources) |
| 其他特色 | y | **Chinese name 图片 + 中文发音音频按钮** — "How to pronounce?" 展开后是 audio control |

### Selling 风格
- **措辞克制度（1-5）**：5（极度克制）
- **mission / philosophy**：有，单句：「explores the full life cycle of language models...democratize their creation and deployment」
- **引用 media / 评价 / NSF Career / Sloan**：否（主页不放，全在 awards.html 子页）
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**："简洁到极致 + 多页结构让 papers/lab/awards 各自有专页"

### 技术实现
- **工具猜测**：**纯手写 HTML + Bootstrap 3**（`bootstrap.min.css` + col-sm-5/col-sm-6/col-xs-3 grid，明显 Bootstrap 3 classes）+ Google Fonts (Lato 100/300/400/700/900) + 自定义 css/style.css + jQuery（用于 pronounce 音频 toggle）
- **字体**：Lato (Google Fonts)
- **颜色数量**：极少 — 黑 + 蓝（链接）+ 默认 visited link 紫
- **响应式**：是（Bootstrap 3 grid 支持）

### 可借鉴 3 条

1. **多页站点结构（主页 + papers/lab/teaching/awards/etc）是 mid-career PI 的高效布局** — 主页只放最重要的：身份 + mission + nav；其他 5 个 tab 各自专题。**PhD 不可借鉴**：PhD 阶段 paper 少 award 少 lab 没有，多页会显得空；坚持单页长滚动。但**可借鉴的是 nav 结构**：在主页 hero 下方加一行 "Papers / Teaching / CV" 锚点链接。
2. **中文名 + 发音音频按钮** — Chinese / Asian PhD 在英文学术圈强可借鉴！Yanjun Chen 应该加上 "陈延军" 中文名 + pronounce 按钮（mp3 录音点击播放）。这是身份认同 + 实用功能（让英文教授知道怎么念）。
3. **极简到狠 — 主页 < 200 行 HTML** — Danqi 主页极短，但每行都重要。PhD 可借鉴：长主页 ≠ 好主页；先写一个 200 行版本，再砍。Danqi 把 "Research Interests" 详细段落注释掉只保留 1 句 mission，证明：mid-career 之后 mission 越短越有力。

---

## 本组（NLP/LLM mid-career PI）整体 pattern 总结

**共同点**：
1. **静态站点 + 极简调色**（黑+蓝+灰），无动画，全部信息密度优先；
2. **Bio 一定有 1 句 research mission**（Hashimoto/Aditi/Robin/Danqi 都写了，只有 Choi 不写）；
3. **学术血统必标**（PhD 导师 + 本科学校）— 是 mid-career 必要的可信度信号；
4. **有 lab / group 区**（Hashimoto Advisees / Aditi Group + ar-forum / Robin Allegro Lab / Danqi 独立 lab.html / Choi 隐藏在 MOSAIC logo）。

**差异点**：
- **News 区**：Choi 顶部 News 占大半页（影响力派）；Aditi/Hashimoto/Danqi 完全没有；Robin 有但只列 milestone — 差异巨大；
- **Honors**：Aditi 列 12 个；Robin 0；Hashimoto 0；Choi 嵌在 News 里；Danqi 单独子页 — 差异巨大；
- **多页 vs 单页**：Danqi 多页；其他单页；
- **模板**：Robin 用 al-folio（最 modern）；Hashimoto 用 Skeleton + Jekyll（中庸）；Danqi 用 Bootstrap 3 hand-coded；Aditi 纯手写 + Inter/Roboto；Choi 用 90 年代 table layout（最 retro）— **没有统一模板，每个人都是定制**。

**反例**：
- Choi 用 table layout + News 顶部满屏 — 不要学（信息过载 + 不响应）；
- Hashimoto 完全没 News/Awards — 大佬可以"什么都不展示"，PhD 不行；
- Danqi 多页结构 — PhD 单页才合理。

**这组的核心 takeaway 给 Yanjun Chen**：
1. **al-folio (Robin) 是 PhD 最适合模仿的模板** — 是 Jekyll，免费，GitHub Pages 直接 host，响应式，组件齐全（news/publications/teaching/projects 都内置）。**强推**用 al-folio 起手。
2. **Bio 必须有 1 句 mission**（学 Hashimoto / Robin / Aditi / Danqi 的句式：「My research seeks to/aims to/explores X by Y」）+ 2-3 个研究问题（学 Robin 的"问题 + inline 引用自己 paper"格式）。
3. **PhD 阶段 Honors 该列就列**（学 Aditi 的全 dump），但放主页中部不要放顶部；不要学 Choi 用 media 头衔轰炸（你没 MacArthur）；不要学 Hashimoto 一个不放（你没那个底气）。
4. **加 Chinese name + 发音**（学 Danqi）；这是 Asian PhD 强差异化。
5. **主流学术主页 = 静态 + 黑蓝灰 + 单列长滚动 + GitHub Pages**。当前 Next.js 装饰过度的版本与这 5 个 PI 全部不符，必须重写。
