# 组 9：港澳台 / 大陆 AI 学者主页调研

调研日期：2026-05-22
调研员：Claude（个人主页调研子代理）
对象：Yanjun Chen，PolyU 计算系 PhD student，RLHF / LLM reasoning / embodied AI。
覆盖：6 位（HK 3 + 大陆 1 + 新加坡 2）— Hung-yi Lee（NTU）与 Liwei Wang（PKU）主页 SSL 证书反复失败，Hongsheng Li（CUHK）个人页同样 SSL 失败、备用 MMLab 页内容过薄，均放弃；CUHK 在 HKU/HKUST 已有强代表的情况下不强求补位。

---

## Lingpeng Kong — HKU (Department of Computer Science)
URL: https://ikekonglp.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页 + 极少 anchor 跳转，配有外链 group / publications / contact 子页
- **主要 sections（按顺序）**：顶部 nav（Home / Group / Publications / Contact）→ About / Bio → Teaching → 一句 Stefan Zweig 1933 年的引语作结
- **留白密度**：适中偏极简
- **视觉装饰**：极简，没有大图、没有色块
- **是否有动画**：否
- **语言**：纯英文

### 第一印象（首屏不滚动）
- **首屏元素**：左上 nav 条；中部姓名 "Lingpeng Kong"；title "Assistant Professor, HKU CS"；标签式自述 "intersection of NLP and ML"；side 头像；CV 链接（lingpenk_cv.pdf）
- **核心自我描述（原文摘录）**：「My work lies at the intersection of natural language processing and machine learning, with a focus on representation learning, structured prediction, and generative models. Before joining HKU, I was a research scientist at DeepMind (London). I obtained my Ph.D. from Carnegie Mellon University.」

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 3 句话，机构 + 方向 + 履历，无形容词 |
| Research Areas | y | 4 个：representation learning / structured prediction / generative models / NLP，无颗粒度细分 |
| Publications | y（外链） | 单独子页，主页只放 nav 链 |
| News / Updates | n | 完全没有 |
| CV (PDF) | y | 1 个 PDF 链接 |
| Service | n | |
| Teaching | y | 2021-2026 共 8 门课列表 |
| Honors / Awards | n | |
| Blog / Writing | n | |
| Talks / Media | n | |
| Photos / Headshot | y | 小头像，无更多照片 |
| Contact | y | 外链 contact 子页 |
| Lab / Students | y（外链） | "co-director of HKU NLP Lab" + 外链 group 子页 |
| Funding / Grants | n | |
| 其他特色 | — | 页脚一段 Stefan Zweig 1933 引言（学者文学品味的低调表达） |

### Selling 风格
- **措辞克制度（1-5）**：5（最克制）
- **mission / philosophy**：无显式 mission；以一段 Stefan Zweig 引语作隐喻
- **引用 media / 评价 / 荣誉**：完全没有
- **一句话总结 selling 哲学**：用最少的字传达「我从 DeepMind 来、CMU PhD、做 representation learning」就够了，其余靠 publications 子页和 group 页承载
- **文化差异观察**：相比欧美学者常列 awards / press / quote，他选择一段欧洲文学引言作精神标签——是亚洲学者中少见的"文学化极简"路线

### 技术实现
- **工具猜测**：Jekyll on GitHub Pages（ikekonglp.github.io 域名是典型 GitHub Pages 个人站）
- **字体**：默认 sans-serif stack
- **颜色数量**：基本只有黑、白、链接蓝
- **响应式**：未确认

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **"DeepMind 履历 + CMU PhD"作为最强 signal**——身为 PhD 学生没有 fellowship 履历时，可把 "PolyU + 实习/合作过的 lab + 一作 paper" 用同样冷静的两句话堆在 hero 区，其余全删
2. **页脚放一段引言**作为低调的人格标签（不是 quote of the day 那种自助风格，而是「我读这本书所以我是这样的人」的暗示）——比 mission 更含蓄
3. **Publications / Group / Contact 拆成子页**，主页只留 nav——避免单页 scroll-fatigue，让首屏极度干净

---

## Yangqiu Song — HKUST (CSE)
URL: https://www.cse.ust.hk/~yqsong/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动，无 nav anchor，纯流式
- **主要 sections（按顺序）**：Header（姓名/title/photo/contact）→ Research interests → Recent research topics（多个子主题段落）→ Talks（倒序）→ Group（postdocs/PhDs/MPhils/alumni）→ Student awards → Best paper awards → Service → Sponsors
- **留白密度**：信息密集（CV 风）
- **视觉装饰**：几乎为零，只用 `* * *` 分隔
- **是否有动画**：否
- **语言**：纯英文（仅名字 "宋陽秋" 是中文）

### 第一印象（首屏不滚动）
- **首屏元素**：小方形头像 + 姓名 + title "Associate Professor, HKUST CSE; Associate Director, HKUST-WeBank Joint Lab"
- **核心自我描述（原文摘录）**：「My research goal is to use machines to understand human languages and eventually facilitate natural human language interaction and communication.」

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短，1 段，credential 为主 |
| Research Areas | y | 8 个：ML / data mining / NLP / KG / 信息网络 / commonsense / 隐私安全公平 / 神经符号推理 |
| Publications | n（外链） | 主页不放，外链 Google Scholar + DBLP + GitHub |
| News / Updates | y（隐式） | Talks 区作为时间线，最新 2025 夏（"Compliant LLM Agents"）和 2025 秋新生 |
| CV (PDF) | n | 没有 PDF CV |
| Service | y | 期刊编委 / conference PC 列得很全 |
| Teaching | n | |
| Honors / Awards | y | 个人 best paper + 学生 awards 两组 |
| Blog / Writing | n | |
| Talks / Media | y | 25+ 个 talks（2015-2025），都附 PDF/PPT 下载 |
| Photos / Headshot | y | 单张小头像 |
| Contact | y | 文本邮箱 |
| Lab / Students | y | 大量列：~40 在读 postdoc/PhD/MPhil + ~30 alumni（标第一份工作） |
| Funding / Grants | y（间接） | "Research Sponsors" 区列 Amazon / Microsoft / Huawei / WeBank |
| 其他特色 | — | Student first-job placement 高调展示——这是亚洲常见 PI signal |

### Selling 风格
- **措辞克制度（1-5）**：4（克制，但靠堆量出场）
- **mission / philosophy**：一句话直白 mission，无修辞
- **引用 media / 评价 / 荣誉**：sponsors logo + best paper 列表，无媒体引用
- **一句话总结 selling 哲学**：用「学生人数 + sponsors 名单 + talks 历史」做权威 signal，不用形容词
- **文化差异观察**：欧美学者很少把 40 个学生姓名 + alumni 第一份工作放主页；亚洲（特别是港陆）PI 把 group size 和学生 placement 当 KPI 展示

### 技术实现
- **工具猜测**：手写 raw HTML（HKUST 个人 server），可能十几年没换模板
- **字体**：默认（看上去是 serif 或浏览器默认）
- **颜色数量**：基本只黑/白/链接蓝
- **响应式**：怀疑没有

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **Talks 区当 timeline 用**——PhD 学生没法堆 40 个 talk，但可以把 "invited talk / poster / oral / panel" 当作时间线，让访客一眼看到"这个人还在活跃"
2. **不必有 News 区**：用 talks/publications 的日期天然替代——少一个需要维护的栏目
3. **慎重学他的"堆量"风**——PhD 学生没有 40 个学生可以列，但可以把 collaborator / co-author 用类似的克制列表呈现，避免装饰

---

## Tao Yu — HKU (Department of Computer Science)
URL: https://taoyds.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动 + 顶部 anchor nav（Bio / Publications / Talks / Students / Teaching / Service / Resume / Group）
- **主要 sections（按顺序）**：Header（photo + name + email）→ Bio → 三大研究方向（Code Gen for Data Science / Digital Embodied / Physical Embodied）→ Publications（Selected / All tab）→ Talks → Students → Teaching → Service → Resume → Misc（个人爱好）→ Acknowledgements
- **留白密度**：适中，单列、行距宽松
- **视觉装饰**：极简但比 Lingpeng Kong 多一点结构感（tab 切换、bold 引用 numbers）
- **是否有动画**：否
- **语言**：英文 + 名字「余涛」中文

### 第一印象（首屏不滚动）
- **首屏元素**：左上 portrait（专业摆拍，非证件照）+ Tao Yu (余涛) + Assistant Prof + HKU CS + XLANG Lab director + email + 顶部 anchor nav
- **核心自我描述（原文摘录）**：「My research aims to develop embodied AI agents that empower users to use language to interact with digital and physical environments to carry out real-world tasks.」

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 1 段，明确 embodied AI agent 定位 |
| Research Areas | y | 3 个一级方向，每个有 1 段子描述（颗粒度极佳） |
| Publications | y | 70+，倒序，Selected/All 切换；author 自身加粗，award 标注（"Spotlight, top 3%"） |
| News / Updates | n | 没有专门栏目；latest paper 日期就是 news |
| CV (PDF) | y | "Full Resume in PDF" |
| Service | y | ICLR/ACL/NeurIPS/COLM 的 organizing/AC roles |
| Teaching | y | DATA8005、COMP3361 两门课 |
| Honors / Awards | y | bio 内嵌 Google Research Scholar Award 2023、Amazon Research Award 2022 |
| Blog / Writing | n | 偶尔 Medium 链 |
| Talks / Media | y | 10+ 个 2024-2025 invited talks |
| Photos / Headshot | y | 一张专业头像 |
| Contact | y | email |
| Lab / Students | y | XLANG Lab 外链 + 8 个 PhD 学生列出（含 co-advise 标注）+ recruitment form |
| Funding / Grants | y（间接） | Google Research Scholar / Amazon Research Award 作为 grant signal |
| 其他特色 | — | **Impact metrics**：Spider ~300 submissions, OpenAgents/Spider ~1k stars, Instructor ~6M HF downloads, "OSWorld 被 OpenAI 和 Anthropic 用" |

### Selling 风格
- **措辞克制度（1-5）**：3（中等——他在 PI/Selling 之间）
- **mission / philosophy**：embodied AI agent 是一句话 mission，bio 段反复出现
- **引用 media / 评价 / 荣誉**：高调列 grant / star / download / "被 OpenAI 用"——亚洲学者中比较直接量化 impact
- **一句话总结 selling 哲学**：用 **dataset / benchmark impact metrics**（论文之外的产出）作差异化 signal——这是 NLP/agent 圈过去 3 年的新打法
- **文化差异观察**：他比 Yangqiu Song 和 Lingpeng Kong 更"美式"——明确放数字（"被 OpenAI 用"）；可能因为他是 Yale PhD 起家、近年才来 HKU

### 技术实现
- **工具猜测**：Jekyll + Martin Saveski 学术模板（页脚有 credit）
- **字体**：sans-serif（清爽）
- **颜色数量**：黑/白/链接色
- **响应式**：是（GitHub Pages 标准）

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **三方向卡片**：把 RLHF / LLM reasoning / embodied 拆成 3 个并列段，每段一句话 mission + 一句话方法——比单纯列"Research Interests"清楚十倍
2. **量化 impact 而非奖项**：PhD 学生没大奖，但可以列 "open-sourced X benchmark / Y dataset"、GitHub stars、HF downloads——这种 signal 在新一代 NLP 圈很硬通
3. **publications 用 Selected/All tab**——首屏只放 5-8 篇 selected（含 oral/award 标注），全列藏在 All——节省扫视成本

---

## Bryan Hooi — NUS (School of Computing)
URL: https://bhooi.github.io/
访问时间：2026-05-22

### 结构布局
- **形态**：单页长滚动 + 顶部 anchor nav（News / Research / Code / CV）
- **主要 sections（按顺序）**：顶部 nav → Hero（photo + bio）→ Students（11 人）→ Staff（3 人）→ Publications（2026→2015 倒序）→ Code（5 个项目链）
- **留白密度**：适中，纯文字流
- **视觉装饰**：极简，几乎没有色块
- **是否有动画**：否
- **语言**：纯英文

### 第一印象（首屏不滚动）
- **首屏元素**：portrait 在右上 + 姓名 + "Assistant Professor, NUS Computing & IDS" + 邮箱 + Google Scholar / Twitter
- **核心自我描述（原文摘录）**：「My research aims to make machine learning systems more reliable and applicable to a wider variety of real-world contexts.」

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 1 段 + 教育背景（CMU PhD / Stanford MS/BS） |
| Research Areas | y | 3 大类：Trustworthiness / Graphs / Applications，每类 3-4 个子方向 |
| Publications | y | ~180+，按年倒序，年内字母排序 |
| News / Updates | y（nav 项） | 顶部有 News anchor，但抓取内容主要是 publications 时间线 |
| CV (PDF) | y | CV.pdf |
| Service | n | |
| Teaching | n | |
| Honors / Awards | y（隐式） | embed 在 publication 内（KDD Best Paper Award 等） |
| Blog / Writing | n | |
| Talks / Media | n | |
| Photos / Headshot | y | 一张头像 |
| Contact | y | email + GS + Twitter |
| Lab / Students | y | 11 个学生 + 3 个 staff（postdocs / RA） |
| Funding / Grants | n | |
| 其他特色 | — | Code 区单列出 5 个项目链（不嵌进 publication）— github 友好 |

### Selling 风格
- **措辞克制度（1-5）**：4（克制）
- **mission / philosophy**：一句话 reliability mission
- **引用 media / 评价 / 荣誉**：award 嵌在 publication 行内，不单列 award 区
- **一句话总结 selling 哲学**：靠**论文数量 + 学生数量**做权威 signal；不堆形容词、不放 mission 大段
- **文化差异观察**：和 Lingpeng Kong 风格相近——CMU/Stanford 训练出来的学者倾向最少修辞

### 技术实现
- **工具猜测**：Jekyll + academic-pages 派生（github.io 域 + 简单 HTML 结构）
- **字体**：默认 sans/serif mix
- **颜色数量**：黑/白/链接蓝，极少
- **响应式**：是（GitHub Pages）

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **Code 区单列**：不要让 GitHub repo 链接埋在论文条目里——单设 Code 一节列 3-5 个代表 repo，配 1 句话简介 + stars
2. **Research 3-tier 结构**：大类（Trustworthiness）→ 子方向（hallucination / distribution shift）——给读者一个 mental tree，远胜过扁平 tag list
3. **Awards 嵌在 publication 行内**：不单独开 award section（PhD 学生没那么多奖时显得寒酸），直接在论文行末加 `(Spotlight)`、`(Best Paper Honorable Mention)` 标签——既显示成就又不喧宾夺主

---

## Tat-Seng Chua — NUS (School of Computing)
URL: https://www.comp.nus.edu.sg/cs/people/chuats/
访问时间：2026-05-22

### 结构布局
- **形态**：NUS 学院官方 WordPress 模版（非个人手做站）
- **主要 sections（按顺序）**：学院 nav → Profile header（photo + title + contact）→ Education → Bio → Research areas → Research interests → 6 个 active grant 项目（列金额）→ Research groups（NExT++）→ Teaching innovations → 13 篇 selected publications → Awards & honours → Courses taught → News（6 条）→ Knowledge@Computing 文章
- **留白密度**：信息密集
- **视觉装饰**：NUS 学院模板风格（蓝色 accent + 学院 logo）
- **是否有动画**：否
- **语言**：纯英文

### 第一印象（首屏不滚动）
- **首屏元素**：NUS 全局 nav → 头像 + "CHUA Tat Seng, Professor" + KITHCT Chair Professor + office room + 电话 + 个人 website 外链（www.chuatatseng.com）
- **核心自我描述（原文摘录）**：「Dr. Chua Tat Seng is the KITHCT Chair Professor at the School of Computing, NUS. He is also the Distinguished Visiting Professor of Tsinghua University... Dr Chua is the recipient of 2015 ACM SIGMM Achievements Award, 2022 NUS Research Recognition Award, 2024 CCF Overseas Outstanding Technical Contributions Award...」

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 长——堆 chair professor / visiting prof / award / 创业公司 / conference chair 经历 |
| Research Areas | y | 4 个：multimodal foundation models / responsible AI / conversational search / recommendation |
| Publications | y | 13 selected（不全），倒序，award 标注 |
| News / Updates | y | 6 条（2018-2025） |
| CV (PDF) | n | 无 PDF |
| Service | y | MMM / ICMR steering committee chair + 多个 GC 角色 |
| Teaching | y | CS6240 一门课 + Teaching Innovations 区 |
| Honors / Awards | y | 4 大奖项独立列 |
| Blog / Writing | n | |
| Talks / Media | n | （但 News 区里有媒体报道） |
| Photos / Headshot | y | 学院模板小头像 |
| Contact | y | 完整：room + 电话 + 邮箱 |
| Lab / Students | y（外链 NExT++） | 主页不放学生名单，外链 nextcenter.org |
| Funding / Grants | y | **6 个 active grants，列金额（S$4.9M, S$12M 等）**——这是这页最显眼的部分 |
| 其他特色 | — | Knowledge@Computing 学院专栏文章 embed（学院做的 PR 内容） |

### Selling 风格
- **措辞克制度（1-5）**：1（最不克制——奖项 + grant 金额 + chair 头衔堆得最满）
- **mission / philosophy**：无 mission；用「founding dean / chair professor / startup co-founder / award recipient」叠 signal
- **引用 media / 评价 / 荣誉**：极多——4 个 fellow/award + 6 个 grant 金额 + 创业身份 + 多个 conference GC 头衔
- **一句话总结 selling 哲学**：**资历金字塔**——把 fellow / chair / award / startup / conference 角色全部展示，让访客一眼看到「这是一个有 30+ 年权威的人」
- **文化差异观察**：典型 senior 亚洲教授路线——堆 prestige association > 量化 impact；与 Bryan Hooi 形成鲜明对比（同校年轻 PI 反而克制）

### 技术实现
- **工具猜测**：WordPress + Blocksy Child theme（学院统一模板）
- **字体**：sans-serif（NUS 学院默认）
- **颜色数量**：NUS 蓝/灰
- **响应式**：是

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **不要学他的"堆头衔"路线**——PhD 学生没有 fellow / chair / award，硬学就尴尬。**反向参考**：恰恰因为他堆得多所以提醒自己 "less is more"
2. **如有 grant，列金额**——这是亚洲学界唯一一处量化 signal；若 Yanjun Chen 有 fellowship / 奖学金，可列金额或排名 percentile
3. **News 区是学院 PR 而非个人维护**——PhD 学生应避开 News 区（更新成本高），把日期 signal 让给 publications/talks 列表

---

## Jie Tang — Tsinghua (KEG, Department of Computer Science)
URL: https://keg.cs.tsinghua.edu.cn/jietang/
访问时间：2026-05-22

### 结构布局
- **形态**：单页 + 顶部 anchor nav（Homepage / Research / Publications / Services / Awards / Students）
- **主要 sections（按顺序）**：Nav → Hero（photo + fellow status）→ Open Codes Showcase（**这一块很罕见**——首屏直接展示开源项目）→ Research → Selected Publications → Footer
- **留白密度**：信息密集但有结构（每个 section 之间用 `=====` 分隔）
- **视觉装饰**：极简到看起来像 90 年代学术页（但内容现代）
- **是否有动画**：否
- **语言**：英文为主（名字 "唐杰" 中文，副）

### 第一印象（首屏不滚动）
- **首屏元素**：portrait + "Jie Tang (Tang, Jie) 唐 杰" + "Professor of Computer Science / ACM Fellow / AAAI Fellow / IEEE Fellow / NSFC Distinguished Young Scholar" + 邮箱
- **核心自我描述（原文摘录）**：「I am a Professor of Computer Science of Tsinghua University. I am a Fellow of the ACM, a Fellow of AAAI, and a Fellow of the IEEE.」（极短 + 全部头衔堆首段）

### Sections 详细
| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 极短 2 句话，3 个 Fellow 头衔铺底 |
| Research Areas | y | 7 个，AGI 列最前（明显是话术对齐当下） |
| Publications | y | **量化**：400+ 篇，IJCAI/AAAI 30+，NIPS/ICML 10+，KDD 40+，TKDE 等期刊 100+；倒序，按 venue bold |
| News / Updates | y（隐式） | 用 Keynote PDF 标日期（CKDD'24 / ICLR'24） |
| CV (PDF) | n | 不放 PDF，外链 "COMPLETE LIST" 子页 |
| Service | y | WWW'23 GC + IEEE Big Data EiC |
| Teaching | n | |
| Honors / Awards | y | SIGKDD Service Award + SIGKDD Test-of-Time + 国家科技进步奖 + NSFC 杰青 |
| Blog / Writing | n | |
| Talks / Media | y | Keynote PDF（ICLR'24 "ChatGLM's Road to AGI" 等） |
| Photos / Headshot | y | 1 张 |
| Contact | y | email |
| Lab / Students | y（外链） | "#students" anchor + KEG / THUDM GitHub |
| Funding / Grants | n（间接） | NSFC 杰青作为隐式 funding signal |
| 其他特色 | — | **Open Codes 首屏直放**：ChatGLM / GLM-130B / CogView / CogVideo 项目卡——把 open-source 当作研究产出第一序位展示，**学界少见** |

### Selling 风格
- **措辞克制度（1-5）**：2（首段堆 Fellow，但全文用数字而非形容词）
- **mission / philosophy**：「Teaching machines to think like humans」一句话 mission
- **引用 media / 评价 / 荣誉**：**impact 用数字**——"ChatGLM-6B 被下载近 10,000,000 次"、"AMiner.org 被 220 国 30,000,000 用户访问"、"模型被 70+ 国 1,000+ 机构下载"
- **一句话总结 selling 哲学**：**头衔铺底 + 数字砸场**——首段 Fellow 堆叠确立权威，然后用下载量 / 用户数把 impact 量化得让人无可辩驳
- **文化差异观察**：和 Tat-Seng Chua 相比，他 senior 但用**互联网产品数字**而非传统 chair / grant 金额——这是大陆顶级学者最近 5 年的新打法（ChatGLM / GLM-130B 当 KPI 展示）

### 技术实现
- **工具猜测**：手写 raw HTML，可能十年未换
- **字体**：默认（serif 占多）
- **颜色数量**：黑 / 白 / 链接蓝
- **响应式**：怀疑没有，部分 anchor 跳页

### 可借鉴 3 条（针对 Yanjun Chen — PolyU PhD, RLHF/Embodied AI）

1. **Open Codes 首屏直放**——如 Yanjun 有代表性 open-source repo（RLHF 训练框架 / dataset / agent benchmark），可在首屏直接卡片化展示，**而不是埋在 publication 行末**
2. **publications 用 venue count 总结**——例 "First-author at ICML/NeurIPS/ACL: 5 篇" 比列 5 篇更易扫视；PhD 阶段可以这么做（counts 不够多时显得诚实）
3. **慎重学他的"头衔铺底"**——PhD 学生没 fellow 头衔，但可以把 "PolyU PhD + 导师姓名 + 实验室名"用同样首段位置铺底——给陌生访客一秒钟的机构 signal

---

## 本组（港澳台/大陆 AI 学者）整体 pattern 总结

**共同点**：
1. **学校 server / GitHub Pages 二选一**——没有 senior 学者用 Next.js / Notion / Webflow；越资深越倾向 raw HTML
2. **学生 / 学生 placement 高调展示**——Yangqiu Song（40+ 学生）、Bryan Hooi（11+）、Tao Yu（8）都单列；亚洲 PI 把 group size 当 KPI
3. **awards 用 SIGKDD / NSFC / ACL Best Paper 等具体名字而非 narrative**——很少有人写「我相信...」式 mission statement
4. **publications 多走"外链 Google Scholar / DBLP"路线**——主页只放 selected（10-15 篇），不堆全列表

**与欧美学者的差异**：
- 亚洲学者更倾向**列学生姓名 + first job placement**（欧美学者很少这样做）
- 亚洲学者更倾向**列 sponsor logo / 公司合作**（亚洲学界更看重产业链）
- 亚洲学者更克制使用 mission / philosophy 段落——形容词更少
- 大陆学者（Jie Tang、Yangqiu Song）开始**用模型下载量 / 用户数**作 impact signal——这是近 5 年特色
- 香港学者（Lingpeng Kong、Tao Yu）更"国际化"——主页几乎和欧美 PhD 起家学者无异

**反例**：Tat-Seng Chua 在 NUS 学院模板内堆 fellow / chair / award / grant 金额——senior 亚洲教授最显著的 selling 路线；同校 junior Bryan Hooi 反而最克制——**junior vs senior 的代沟比地域差异更显著**

**给 Yanjun Chen 的核心 takeaway**：
- 作为 PolyU PhD 学生，最像的参照系是 **Tao Yu（HKU CS PhD/Yale 系出身但已在亚洲）+ Bryan Hooi（CMU PhD/亚洲 PI 初期）**——克制、单页、Selected publications + Code 单列
- 不要学 Tat-Seng Chua / Jie Tang 的"堆头衔"路线——PhD 阶段无 fellow / chair / 大 grant，硬学会显得空
- **可学的两个亚洲特色**：(1) Publications 旁开 Code/Project 单列（GitHub repo 卡片化）；(2) 用 dataset / benchmark / model downloads 数量做 impact signal 而非靠形容词

**亚洲学术圈 PhD 学生主页共同 pattern**（推断自 Tao Yu 早期 / Bryan Hooi 早期 + 已知规律）：
- 几乎必有 Jekyll/academicpages 模版
- 必有 Google Scholar / DBLP / GitHub 三件套外链
- 强调"导师姓名"——是机构 signal 之外的最大权威背书
- 极少有 News 区（更新成本高）
- 几乎没人放 mission/philosophy 段——风险高、收益低
