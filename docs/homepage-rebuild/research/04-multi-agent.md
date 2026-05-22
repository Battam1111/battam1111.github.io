# 调研 04：Multi-Agent RL（C3 项目方向）

调研时间：2026-05-22
调研员：Claude（个人主页调研员）
对象：Yanjun Chen 学术个人主页彻底重写
关注：Multi-Agent RL 资深学者的主页范式

---

## Jakob Foerster — Oxford / Meta FAIR
URL: https://www.jakobfoerster.com/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（Google Sites 平台，主页 + 子页菜单）
- **主要 sections（按顺序）**：Profile/Bio → Research interests（5 条编号列表）→ Publications（按年倒序 2022→2011）→ Contact policy（带密码门槛）→ Service 备注 → 侧边菜单（How To ML Paper / Cold Email / Rebuttal / Review / 反武装无人机公开信 / FCAS 公开信）
- **留白密度**：信息密集（侧边一长串菜单 + 主区文字长段）
- **视觉装饰**：极简（Google Sites 默认样式，几乎无设计元素）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：左上 Logo 区 + 顶部菜单 + 头像 + 三行身份（Associate Prof / FAIR Meta AI / St Anne's Fellow） + Research interests 标题
- **核心自我描述（原文摘录）**：「I am now 50/50 between FAIR (MetaAI) and Oxford (FLAIR).」
- **研究兴趣表态原文**：「Anything but supervised learning that is well motivated and has a shot at making a difference.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 短：三行身份 + 50/50 表态 |
| Research Areas | y | 5 条编号兴趣，颗粒度较粗（一句一条） |
| Publications | y | 按年倒序 2022→2011；含 arXiv/code/colab 链接 |
| News / Updates | n | 无独立 news 段 |
| CV (PDF) | n | 未见单独 CV PDF |
| Service | y | 一行说明「Senior AC for various ML conferences, 不再接审稿」 |
| Teaching | n | 主页未列 |
| Honors / Awards | y | 在 publications 标注：ICML 2018 Best Paper Runner-Up、AAAI 2018 Outstanding Student Paper、CIFAR AI Chair 2019 |
| Blog / Writing | y | 「How To ML Paper / Rebuttal / Review」三个子页是博客性元内容 |
| Talks / Media | n | 主页未单列 |
| Photos / Headshot | y | 一张头像 |
| Contact | y | 极长的分层密码邮件指南（generic / PhD / visitor / Oxford 内部 各有 code） |
| 其他特色 | — | 两封德语 / 英语反军用 AI 公开信单独挂在导航里 |

### Selling 风格
- **措辞克制度（1-5）**：4（克制偏理性，但有强烈个人立场）
- **mission / philosophy**：有「Anything but supervised learning that is well motivated and has a shot at making a difference」+ 公开反军用 AI 立场
- **引用 media / 评价**：无
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**：学术 + 强政治立场 + 工具型博客（教别人写/审/反驳 ML 论文）；不靠 media 引用，靠"我教你怎么做"建立权威

### 技术实现
- **工具猜测**：Google Sites 模板
- **字体**：Google Sites 默认 sans-serif（应为 Roboto / Arial fallback）
- **颜色数量**：≤3（白底 + 灰文字 + 蓝链接）
- **响应式**：是（Google Sites 自带）

### 可借鉴 3 条（针对 Yanjun Chen PhD RLHF/Embodied AI 方向）
1. **研究兴趣用"立场表态"代替"领域列表"**：Foerster 的 "Anything but supervised learning that is well motivated" 比"我做 X、Y、Z"有记忆点 10 倍。Yanjun 可写"对齐"或"agent reasoning"层的态度而非堆 RLHF/embodied/multi-agent 三个标签。
2. **联系页变成"过滤器"**：Foerster 的 PhD/visitor 分级密码是反向 selling——让申请者通过门槛证明诚意。Yanjun PhD 阶段可以低配版：列出「来邮请说明你读过我哪篇 paper + 想做什么」即可显得专业。
3. **元工具型博客取代普通新闻流**：「How To ML Paper / Review / Rebuttal」是 Foerster 引流和建立社区认知的核心资产，远好于 news timeline。Yanjun 可考虑写「How I run a MAPPO baseline」「How I sanity-check RLHF reward hacking」这类工具页。

---

## Shimon Whiteson — Oxford / Waymo（兼 Google DeepMind）
URL: http://whirl.cs.ox.ac.uk/pages/people/shimon.html（Lab 内个人页）；机构 fallback https://www.cs.ox.ac.uk/people/shimon.whiteson/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（WhiRL Lab 站点的一个 people 子页；本人无独立 personal site）
- **主要 sections（按顺序）**：Lab Header / Logo → Nav（Home/Research/People/Join/Reading Group/Contact） → Profile photo → Bio → 学术历程 → 奖项 → 末尾联系信息
- **留白密度**：适中
- **视觉装饰**：极简（学术 Lab 模板）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：WhiRL Lab 大 logo + 顶部菜单 + 头像 + 名字 + 职位
- **核心自我描述（原文摘录）**：「Shimon Whiteson is a Professor of Computer Science at the University of Oxford and a Research Director at Google DeepMind. His research focuses on deep reinforcement learning and imitation learning, with applications in robotics and video games.」（第三人称）

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 一段第三人称 bio，含 2007 UT Austin PhD、2007-2015 阿姆斯特丹大学、2015 Oxford |
| Research Areas | y | Deep RL / Imitation Learning / Robotics / Video Games 四个标签 |
| Publications | n | 个人页无；Lab 站可能有，但本页未列 |
| News / Updates | n | 个人页无；Lab 有 news 子页（如 ICML 2021 / NeurIPS 2021 论文接收） |
| CV (PDF) | n | 未见 |
| Service | n | 未列 |
| Teaching | n | 未列 |
| Honors / Awards | y | 列了 ERC Starting Grant 2014 / Google Faculty 2017 / JPMorgan 2019 / Latent Logic 被 Waymo 收购 2019 |
| Blog / Writing | n | 无 |
| Talks / Media | n | 未列 |
| Photos / Headshot | y | 一张 |
| Contact | y | 邮箱 + 电话 + Robert Hooke Building 房间号 |
| 其他特色 | — | 个人主页是 Lab 站的一部分而非独立站，本身就是 selling：身份等于 Lab |

### Selling 风格
- **措辞克制度（1-5）**：5（极克制，几乎无形容词）
- **mission / philosophy**：无 mission 段
- **引用 media / 评价**：无
- **impact / 商业化语言**：有（startup 被 Waymo 收购被显眼列出，是非典型学术里"商业化成果"的事实陈述，但不煽情）
- **一句话总结 selling 哲学**：身份即 selling——Lab 名字 + 院士头衔 + Waymo Research Director；少废话，事实即背书

### 技术实现
- **工具猜测**：静态 HTML / Jekyll-like（GitHub 上有开源 markdown 源），Lab 自托管
- **字体**：sans-serif（默认）
- **颜色数量**：3（白 / 黑文字 / 蓝链接）
- **响应式**：是
- **协议**：HTTP（无 HTTPS）

### 可借鉴 3 条
1. **个人主页"嵌入实验室"是高维 selling**：Whiteson 不维护独立 personal site，他的页是 WhiRL Lab 的子页。这隐含信号是"我是一个 lab 的负责人，不是孤狼"。Yanjun PhD 阶段不一定有 lab，但可考虑把 C3 项目 page 做成"准 lab 站"（含合作者、毕业生去向、阅读组），人页只是其中一页。
2. **奖项段做"硬通货 + 商业化成果"双轨**：Whiteson 把 ERC + Google Faculty 和 "Latent Logic acquired by Waymo" 并列。Yanjun 可以双轨化：学术奖 + 真实部署/落地（C3 如有任何真实机器人测试就显眼放）。
3. **第三人称 bio + 极少形容词 = 资深感**：Whiteson 全程第三人称 + 无任何「passionate / dedicated」类词。PhD 学生用第一人称更自然，但可以借鉴"零形容词"原则——只陈述事实。

---

## Noam Brown — OpenAI
URL: https://noambrown.com/（原 noambrown.github.io 已 301 跳转到此）
访问时间：2026-05-22

### 结构布局
- **形态**：单页（极简长 page，无子页）
- **主要 sections（按顺序）**：头像 + 名字 + 邮箱 + 顶部链接（CV PDF / Publications via Scholar） → Bio → Research highlights → Career history → 底部 social links
- **留白密度**：适中
- **视觉装饰**：极简
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：头像（profile-poker.jpg，扑克主题暗示身份）+ 名字 + 邮箱 noam@openai.com + 两个顶部链接（CV / Publications）+ Bio 第一句
- **核心自我描述（原文摘录）**：「I am a Research Scientist at OpenAI, where I work on reasoning, reinforcement learning, self-play, and multi-agent AI.」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 第一人称 1 段，简短 |
| Research Areas | y | 嵌入 bio：reasoning / RL / self-play / multi-agent AI |
| Publications | y | 外链 Google Scholar（不自己维护列表） |
| News / Updates | n | 无 news timeline |
| CV (PDF) | y | 顶部直接挂 PDF 链接 |
| Service | n | 无 |
| Teaching | n | 无（已离开学术界） |
| Honors / Awards | y | 嵌入正文：Marvin Minsky Medal、MIT TR 35 Innovators Under 35 (2019)、Pluribus 上 Science 封面 |
| Blog / Writing | n | 主页无；社交链是 Twitter |
| Talks / Media | n | 无独立 talks 段 |
| Photos / Headshot | y | profile-poker.jpg（与身份强相关） |
| Contact | y | 直接放邮箱 |
| 其他特色 | — | 头像文件名是身份暗号（poker AI 是他成名作） |

### Selling 风格
- **措辞克制度（1-5）**：4（克制但成就密度大）
- **mission / philosophy**：无 mission 段，但 bio 词序「reasoning, RL, self-play, multi-agent」就是他的近年路径声明
- **引用 media / 评价**：有（Science 封面、MIT TR 35）
- **impact / 商业化语言**：有（"the first AI to defeat top humans in no-limit poker"——明确的"第一"叙事）
- **一句话总结 selling 哲学**：成就密度极高的极简单页——靠 CICERO / Libratus / Pluribus / o1 四个名词就够了，不需要装饰

### 技术实现
- **工具猜测**：GitHub Pages + 自定义域；纯 HTML/CSS，无框架
- **字体**：sans-serif（系统默认）
- **颜色数量**：3 以内
- **响应式**：是

### 可借鉴 3 条
1. **头像文件名 / 视觉钩子要带身份暗号**：`profile-poker.jpg` 是身份注脚。Yanjun 的头像可以选一张带"研究环境"的（不一定真有机器人，但实验室白板 / 工位 / 公式都比纯证件照有 selling 力）。
2. **bio 第一句的"词序就是路径声明"**：Brown 的 "reasoning, reinforcement learning, self-play, and multi-agent AI" 这个顺序不是字母序，是按近期重点排的——reasoning 在最前因为 o1。Yanjun 可类似：「LLM reasoning, RLHF alignment, embodied agents, multi-agent coordination」按当前研究重心排。
3. **不自维护 publication 列表，外链 Scholar**：Brown 直接挂 Scholar 链接。PhD 学生维护 BibTeX 浪费时间，外链 Scholar 一键解决，且数据自动更新。

---

## Igor Mordatch — Google DeepMind / UC Berkeley
URL: https://www2.eecs.berkeley.edu/Faculty/Homepages/mordatch.html（仅 EECS 院系页；mordatch.org 不可达，igormordatch.com 不存在）
Google Scholar fallback: https://scholar.google.com/citations?user=Vzr1RukAAAAJ
访问时间：2026-05-22

### 结构布局
- **形态**：无独立 personal site，仅占用 UC Berkeley EECS faculty 页位
- **主要 sections（按顺序）**：EECS 院系全站 nav → Faculty profile card（职位 / 学历 / 研究领域 / 关联中心）→ EECS 院系 footer
- **留白密度**：信息稀疏（基本是表格式 4 个字段）
- **视觉装饰**：无（院系模板）
- **是否有动画**：否

### 第一印象（首屏不滚动）
- **首屏元素**：EECS 大 logo + 院系导航 + 占位头像（150x210 白底，未上传真照）+ 名字 "Igor Mordatch" + 职位 "Lecturer in EECS"
- **核心自我描述（原文摘录）**：无个人撰写的自我描述。仅院系自动填字段：「Position: Lecturer in EECS at UC Berkeley」+ Research: 「Artificial Intelligence (AI)」+ BAIR 关联。

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | n | 仅 4 行字段 |
| Research Areas | y | 一行 "Artificial Intelligence (AI)" |
| Publications | n | 院系页未列 |
| News / Updates | n | 无 |
| CV (PDF) | n | 无 |
| Service | n | 无 |
| Teaching | n | 无 |
| Honors / Awards | n | 无 |
| Blog / Writing | n | 无 |
| Talks / Media | n | 无 |
| Photos / Headshot | n | 占位空白图 |
| Contact | n | 仅 EECS 通用页底 |
| 其他特色 | — | 这本身是一个"反例" |

### Selling 风格
- **措辞克制度（1-5）**：— （无内容可评价）
- **mission / philosophy**：无
- **引用 media / 评价**：无
- **impact / 商业化语言**：无
- **一句话总结 selling 哲学**：他不靠主页 sell——他靠 OpenAI 时期的 Emergent Tool Use 论文、DeepMind 标签和 Twitter（@IMordatch）。主页是缺席的。

### 技术实现
- **工具猜测**：UC Berkeley EECS 官方 Drupal-like CMS 模板
- **字体**：院系默认
- **颜色数量**：院系蓝白配
- **响应式**：是

### 可借鉴 3 条
1. **"无主页"是一个真实选项，但只对已有强外部信号的人 work**：Mordatch 没主页也无所谓，因为他的论文 + DeepMind 标签 + Twitter 已经做了 selling。Yanjun PhD 阶段没有这种外部声量，必须有主页——但可以学这个心态："主页只是补充信号，论文才是主信号"。
2. **占位空头像是反面教材**：4 行字段 + 白底占位图 = 给人"作者已离场"的感觉。Yanjun 即使极简也必须有一张真实头像。
3. **如果选 Mordatch 这种"院系页 + Scholar + Twitter"组合，必须 Twitter 活跃**：他每个新工作都有 @IMordatch 推。PhD 学生若选这个路径，社交媒体必须运营起来，否则 selling 链条断裂。

---

## Karl Tuyls — Google DeepMind / University of Liverpool
URL: https://www.karltuyls.net/
访问时间：2026-05-22

### 结构布局
- **形态**：多页（WordPress + Pilcrow 主题）
- **主要 sections（按顺序）**：Header + Nav（Home / Research / Publications / Students / Media/Awards / Contact） → 头像 + 短 bio → 研究方向陈述 → 近期 news（AAMAS 2023 keynote）→ 历史职业轨迹
- **留白密度**：适中
- **视觉装饰**：适中（WordPress 主题自带卡片样式）
- **是否有动画**：否（基本静态）

### 第一印象（首屏不滚动）
- **首屏元素**：Header + 主菜单 6 项 + 头像 + 名字 + 「the academic home of Karl Tuyls」副标题
- **核心自我描述（原文摘录）**：「I am a research director and computer science professor, who has worked in Belgium, the Netherlands, the UK, and is working in France since 2018.」
- **研究方向原文**：「My research interests mainly focus on understanding intelligence and using this knowledge to build AI in a multiagent context (our world is multiagent).」

### Sections 详细

| Section | 有 | 内容要点 |
|---|---|---|
| About / Bio | y | 第一人称短 bio + 国家流动史 |
| Research Areas | y | game theory / 多智能体训练评估 / cooperative-competitive 设置 / multi-robot |
| Publications | y | 有独立 Publications 子页 |
| News / Updates | y | 主页有短 news 段（AAMAS 2023 keynote / ICML 2018 / ACAI 2019 教程） |
| CV (PDF) | n | 未见独立 CV PDF |
| Service | n | 未单列 |
| Teaching | n | 未单列（有 Students 子页类似功能） |
| Honors / Awards | y | 有 Media/Awards 独立子页 |
| Blog / Writing | n | 无 |
| Talks / Media | y | Media/Awards 子页 |
| Photos / Headshot | y | 一张专业头像 |
| Contact | y | 独立 Contact 子页 |
| 其他特色 | — | Students 子页单独列——强调 mentorship |

### Selling 风格
- **措辞克制度（1-5）**：4（克制但有"哲学陈述"）
- **mission / philosophy**：有，「our world is multiagent」括号补充就是哲学声明
- **引用 media / 评价**：通过 Media/Awards 子页（未深入）
- **impact / 商业化语言**：弱（DeepMind 标签即背书）
- **一句话总结 selling 哲学**：6 块菜单的"经典学术主页"——稳重、完整、不出彩；靠 Research Director 头衔和 DeepMind 标签做主 selling

### 技术实现
- **工具猜测**：WordPress + Pilcrow 主题（Automattic）
- **字体**：Pilcrow 主题默认 serif（应为 Source Serif 或 Georgia）
- **颜色数量**：≤3
- **响应式**：是（WordPress 主题）

### 可借鉴 3 条
1. **"括号哲学"是低成本的 selling 升级**：Tuyls 在「multiagent context」后括号补一句「our world is multiagent」——一行字让研究方向变成世界观。Yanjun 可在 RLHF 后补「(scaling reasoning needs scalable feedback)」或 embodied 后补「(LLM intelligence must touch physical world)」。
2. **Students 单独成菜单项**：Tuyls 把 Students 列在 Publications 旁，强调 mentorship 输出。PhD 学生没学生，但可改成「Collaborators」「Mentors I learned from」——同样信号是"我嵌在网络里"。
3. **6 项菜单是上限**：Tuyls 6 项已经偏满。Yanjun 主页若采用多页结构，菜单 ≤5 项为宜（Home / Research / Publications / About / Contact）。

---

## 本组（Multi-Agent RL）整体 pattern 总结（≤300 字）

**共同点**：5 人主页全部极简，无动画无装饰；视觉重心都是头像 + 一句身份 + 研究兴趣短列表；学术成就密度大但措辞克制（"first AI to defeat..."、"acquired by Waymo" 这类硬事实就够，无情感词）；都不写商业化 mission（区别于工业 AI 大佬）。

**差异点**：Foerster（信息密集 + 强政治立场 + 工具型博客）VS Brown（极简单页 + 成就词序声明）VS Whiteson（嵌入 Lab 站 + 第三人称）VS Tuyls（经典 6 页 WordPress + 括号哲学）VS Mordatch（基本缺席，靠论文 + Twitter）。

**反例**：Mordatch 的 EECS 占位页是反面教材——白底占位头像 + 4 行字段 = 给人"作者已离场"。

**Yanjun Chen takeaway**：
1. 学 Brown 的"bio 第一句词序就是路径声明"（reasoning/RL/embodied/multi-agent 按当前研究重心排）；
2. 学 Foerster 的"研究兴趣用立场表态代替领域列表"（避免堆 3-4 个标签）；
3. 学 Tuyls 的"括号哲学"（一行字让研究方向升级为世界观）；
4. 避开 Mordatch 反例（PhD 阶段必须有真实头像 + 完整主页，不能靠"外部信号"）；
5. 整体路线：单页 + 极简 + 头像 + 一句身份 + 研究兴趣（带哲学）+ Publications 外链 Scholar + 邮箱直放 + 1 张真实头像。视觉做减法，密度做加法。
