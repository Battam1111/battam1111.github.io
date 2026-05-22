# 个人主页彻底重写 — 执行手册（MANUAL）

> **对象**：Yanjun Chen，PolyU 计算系 PhD student，研究 RLHF / reward modeling / LLM reasoning / embodied AI
> **目标**：把 `battam1111.github.io` 从当前的过度装饰版本，彻底重写为符合主流学术圈共识的个人主页
> **依据**：10 个并行子代理调研的 50+ 位领域相关学者主页（详见 `research/` 目录）
> **编制时间**：2026-05-22
> **可信度**：本手册的每条规范在调研样本中都有 ≥3 份独立来源支持；"禁用清单"则在 50+ 样本中无一例外

---

## 目录

- [0. 本手册的可信度基础](#0-本手册的可信度基础)
- [1. 核心结论（TL;DR）](#1-核心结论tldr)
- [2. 禁用清单（必删 — 当前主页全部触犯）](#2-禁用清单必删--当前主页全部触犯)
- [3. 视觉规范](#3-视觉规范)
- [4. 信息架构（IA）](#4-信息架构ia)
- [5. Section 详细模板](#5-section-详细模板)
- [6. 措辞规范](#6-措辞规范dos-and-donts)
- [7. Selling 哲学（不尴尬的 selling）](#7-selling-哲学不尴尬的-selling)
- [8. 技术栈决策](#8-技术栈决策)
- [9. 针对 Yanjun Chen 的具体执行清单](#9-针对-yanjun-chen-的具体执行清单)
- [10. 自检对照表（62 项）](#10-自检对照表)
- [11. 迁移特别注意（实操细节）](#11-迁移特别注意实操细节)
- [12. Identity Layer 同步策略](#12-identity-layer-同步策略)
- [13. 对外可发现性（SEO / OG / Sitemap）](#13-对外可发现性seo--og--sitemap)
- [14. 合规与机构协调](#14-合规与机构协调)
- [15. 上线流程（Staging / Preview / Rollback）](#15-上线流程staging--preview--rollback)
- [16. 长期维护节奏](#16-长期维护节奏)
- [附录 A：参考样本速查表](#附录-a参考样本速查表)
- [附录 B：决策记录](#附录-b决策记录)

---

## 0. 本手册的可信度基础

本手册不是基于"个人审美"或"我觉得"，而是基于以下调研：

- **10 个并行子代理**，每个调研一组领域相关学者
- **50+ 位实际调研学者**，覆盖 RLHF / Alignment、Embodied AI / Robotics、LLM Reasoning / CoT、Multi-Agent RL、顶级 ML 元老、主流 NLP/LLM mid-career PI、同 level 年轻 PhD / 新晋 AP、知名工业研究员 / Blogger、港澳台 / 大陆 AI 学者
- **5 个真实使用 al-folio / Hugo Blox 模版的 PhD/researcher 主页** 实测调研
- **5 个主流学术主页模版** 默认 demo 调研

所有原始数据保留在 `research/01-rlhf-alignment.md` 至 `research/10-academic-templates.md`。

### 0.1 样本分布与 audience trade-off

⚠️ **样本透明披露**：50+ 样本中 EU/US 顶校占比约 **75%**，亚洲样本约 **15%**（组 9 的 6 人），其余为工业研究员 / 模版 demo。这导致本手册的"主流共识"**偏向 EU/US 极简学术风**。

**Yanjun 主页真实的 audience 是 4 类**，本手册的规则在不同 audience 上效力不同：

| Audience | 关心什么 | 本手册规则适用度 |
|---|---|---|
| 1. **PhD 申请季 EU/US AP / faculty**（你最大优化目标）| 严谨度、研究方向具体性、advisor 学术血统 | ★★★★★ 完全适用 |
| 2. **港校 / 大陆 / 港台 RLHF / agent 圈研究员** | 中文名 / OSS metric / 实际能跑通的 code | ★★★ 部分适用（亚洲圈更接受量化 impact） |
| 3. **PolyU 内 / same-cohort PhD** | advisor / lab / 中文背景 | ★★★ 部分适用 |
| 4. **工业界 recruiter** | OSS metric / 实习意愿 / 产品贡献 | ★★ 视情况（recruiter 期望比纯学术圈更"产品化"） |

**张力点**：
- 亚洲圈调研（Tao Yu / Jie Tang）显示量化 OSS metric / 模型下载量是有效 selling，与 §2.1 禁用 Chart.js 学术指标可视化**不矛盾**（前者是**事实数字 inline 在 bio/code**，后者是**仪表盘可视化**——边界清晰）
- Tao Yu 用了"三方向卡片"，但他的卡片是**信息卡而非装饰卡片**（每张含具体研究问题 + paper 链接），与 §2.1 禁用的"装饰性卡片"边界不同

**所以**：本手册的视觉极简规则 universal 适用，但 §7 "selling 哲学"里允许引用 OSS 具体数字 / venue 名 / 产品名（亚洲圈期望）。这两者并不冲突。

---

## 1. 核心结论（TL;DR）

```
当前主页问题：装饰过度（粒子背景 / Chart.js 学术指标 / Framer Motion 动画 / 13 个 section）
重写方向：极简静态学术风（黑+白+蓝、单列长滚动、5 个核心 section、零动画零装饰）
推荐技术栈：al-folio（Jekyll）— 50+ 样本中 PhD 主页的事实标准
关键身份定位：「PhD student. PolyU. Hong Kong.」+ 一句 mission（不超过 20 字）
selling 哲学：用事实代替形容词，用作品代替头衔，用克制代替装饰
```

**收敛证据**：在 50+ 学者主页样本中，**0 人**使用粒子背景、Chart.js 学术指标、Framer Motion 入场动画、3D 模型 / WebGL。这不是品味分歧，是圈层共识。

---

## 2. 禁用清单（必删 — 当前主页全部触犯）

下列元素在 50+ 学者主页中 **作为首屏装饰主导元素出现的人数 = 0**。无论用什么技术栈重写，**全部删掉**。

> 📐 **关于"0/50+"的口径**：本表统计的是"作为首屏装饰主导出现"。调研里确实存在"克制装饰"案例（如 Karpathy 用了 3 个 emoji、Dieter Fox 有 3 个 featured image 卡片、Choi 用了 tv-icon.png 小图标、al-folio 默认 dark mode 有渐变）— 这些都是**作为辅助 / 偶发出现**，不在禁用范围。禁用的是 Yanjun 当前主页的**首屏装饰主导**模式（满屏粒子背景、h-index 仪表盘 chart、整页 fade-in 动画）。具体允许 vs 禁用的边界见 §3 视觉规范。

### 2.1 视觉装饰类（10/10 删）

| 当前主页元素 | 作为首屏装饰主导出现人数 | 删除理由 |
|---|---|---|
| 粒子背景（tsparticles）满屏 | 0/50+ | 学术圈无先例；与"严肃研究者"叙事冲突 |
| Chart.js 学术指标可视化（h-index 仪表盘） | 0/50+ | h-index 仪表盘是非学术圈的视觉俗套；学术圈用 Google Scholar 链接 |
| Framer Motion 整页入场动画（scroll-driven） | 0/50+ | 拖慢首屏 + 显得"营销页"。**hover state / nav 微动效不在禁用范围** |
| 渐变背景作为 hero 主体 | 0/50+ | 与中性灰度主流冲突。**dark mode 内部的细微渐变可接受** |
| 3D 模型 / WebGL canvas | 0/50+ | 学术圈不存在的范式 |
| 滚动 parallax | 0/50+ | 同上 |
| Hero quote banner / 大字 tagline | 0/50+ | hero 区放头像 + 一句身份描述即可 |
| Cart icon / e-commerce 元素 | 0/50+ | 学术主页不卖东西（Jason Wei 的 Squarespace cart icon 是平台默认，不算主动选择） |
| 自定义 cursor / 装饰性 hover 特效 | 0/50+ | 标准浏览器 cursor 即可 |
| Loading spinner / splash screen | 0/50+ | 静态站点不需要 |

### 2.2 措辞类（"selling 过头"语言）

下列词在 50+ 学者主页中 **几乎不出现**（即使 Turing 奖得主也不用）：

- ❌ "passionate about" → ✅ "I work on"
- ❌ "cutting-edge" → ✅ "current" 或不写
- ❌ "world-class" → 删（顶级学者从不自称）
- ❌ "transforming AI" → ✅ 具体说做什么
- ❌ "revolutionary" → ✅ 用事实代替形容词
- ❌ "empowering" → ✅ "helping" 或具体动词
- ❌ "leveraging" → ✅ "using" 或 "applying"
- ❌ "deep expertise in" → ✅ "I study X"
- ❌ "make an impact" → ✅ "build X" 或具体产出

**唯一允许的"强词"**：自己**已经做出**的事的客观描述。
- ✅ Noam Brown: "the first AI to defeat top humans in no-limit poker"（事实）
- ✅ Christopher Manning: "I pioneered Natural Language Understanding..."（事实 + 时间锚 2010）
- ❌ "I am passionate about pioneering..."（无事实，全是态度词）

### 2.3 结构类

| 当前主页 sections | 调研建议 |
|---|---|
| 13 个 section 排成一长串 | **压缩到 5-7 个** |
| Hero（粒子背景 + 大字） | **删粒子，hero 只放头像 + 1 句身份 + 链接** |
| Chart.js 学术指标段 | **删整段**；Scholar metrics 外链即可 |
| Honors（PhD 阶段独立 section） | **取消独立 section**，inline 在 bio 或 paper 旁 |
| Service（如果没有 reviewer 经历） | **删** |
| Teaching（如果没有助教经历） | **删** |
| News（如果只有几条） | 保留但只列 milestone（5-10 条） |
| Blog 3 篇 markdown | 保留并显眼放（PhD 强武器） |

---

## 3. 视觉规范

### 3.1 调色板（最多 3 色）

```
主色：#000000（纯黑文字）或 #1a1a1a（near-black）
背景：#ffffff（纯白）
强调：#0066cc / #1a73e8 / #2563eb（蓝链接色，三选一）
辅色（可选）：#666666 或 #8a8a8a（次级文字 / 灰）
```

**禁用**：渐变、霓虹色、品牌色（PolyU 红等不要放主页）。

**Dark mode**（强烈建议）：
```
主色：#e8e8e8（off-white 文字）
背景：#0d1117（GitHub 风深灰，不要纯黑）
强调：#58a6ff（适应深色的蓝）
```

切换按钮：右上角小 icon，记忆用户选择（localStorage）。

### 3.2 字体

**推荐方案**（按优先级）：
1. **系统字体栈**（最稳，零外部依赖）：
   ```css
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
   ```
2. **如果要 Google Fonts，选一种**：
   - `Inter`（推荐 — 现代学术圈最流行，Aditi Raghunathan 用）
   - `Roboto`（al-folio / Robin Jia 默认）
   - `Lato`（Danqi Chen 用）
   - **不要超过 1 种 Google Font** — 当前主页用了 3 种（IBM Plex Sans + Mono + Newsreader），是过度

**字号系统**：
```
Hero name：32-40px
Section H2：24px
Body：16px（绝对不要小于 14）
小注 / Caption：13px
行距：1.5-1.7（≥1.5）
```

### 3.3 留白与节奏

- **最大内容宽度**：680-800px（Karpathy / Manning 都是约 800px；超过反而难读）
- **Section 间距**：48-72px（mt-12 到 mt-18 in Tailwind）
- **段间距**：1.5em
- **页面边距**：左右至少 24px（移动端）/ 80px+（桌面）

### 3.4 头像

- **尺寸**：128-300px（推荐 200px）
- **形状**：方形（80% 学术圈用方）或圆形（Karpathy 用圆）
- **位置**：hero 左侧或右上（不要居中放大）
- **质量**：高分辨率（点击可放大），背景简洁
- ****禁忌****：证件照风（过严肃）、自拍（过随意）；理想是"专业但有 personality"的工作照

### 3.5 链接 / icon

- 链接颜色统一（蓝），visited 不变色（学术主页惯例）
- Social icons：Font Awesome / Academicons / Lucide React 任选一套，**只用 outline 风**（不要 filled）
- 数量 ≤6：email、Google Scholar、GitHub、Twitter/X、LinkedIn（可选）、ORCID（可选）

---

## 4. 信息架构（IA）

### 4.1 Section 必要性矩阵

| Section | PhD 学生必要性 | 调研中采用率 | 备注 |
|---|---|---|---|
| **Hero / About** | 必须 | 50/50+ | bio + 头像 + 链接 |
| **Research** | 必须 | 45/50+ | 1 段叙事 + 3-7 bullet 方向 |
| **Publications** | 必须 | 50/50+ | Selected 5-10 篇 + 外链 Scholar |
| **Contact** | 必须 | 50/50+ | 至少 email |
| **News / Updates** | 强烈建议 | ~30/50 | PhD "活着"的最强信号；只列 milestone |
| **Writing / Blog** | 强烈建议（你有 3 篇）| ~20/50 | Jason Wei 借此进 OpenAI |
| **Code / Projects** | 强烈建议（你有 OSS）| ~25/50 | OSS 是 PhD 第二硬通货 |
| **CV (PDF)** | 建议 | ~30/50 | hero 区放链接 + 更新日期 |
| **Talks** | 可选（有 invited 才放）| ~20/50 | 无 invited talk 不要放 |
| **Teaching** | 可选（有助教经历才放）| ~15/50 PhD | 无经历不要放 |
| **Misc / Beyond Research** | 可选（页面最底，≤1 个）| ~15/50 | Liang/Robin Jia 路线 |
| **Service** | **不建议**（PhD 阶段）| ~5/50 PhD | 没有 reviewer 经历不要放 |
| **Honors / Awards 独立 section** | **不建议** | ~5/50 PhD | inline 在 bio 或 paper 旁 |
| **Students / Lab** | **禁用** | 0/50 PhD | PhD 没有学生 |
| **Funding / Grants** | **禁用** | 0/50 PhD | PhD 没有 PI 角色 |
| **Hero quote / Mission banner** | **禁用** | 0/50+ | 学术圈不存在 |
| **学术指标可视化** | **禁用** | 0/50+ | 同 §2.1 |

### 4.2 Section 排序原则

**底层逻辑**：访客在前 10 秒决定是否继续读。把"最直接证明你是谁"的内容放最前。

**推荐顺序 v1（PhD 学生标准）**：

```
1. Hero / About（头像 + 身份 + 一句 mission + 链接行）
2. News / Updates（5-10 条 milestone，倒序）  ← 证明"活着"
3. Research（1 段叙事 + 3-7 bullet 方向）  ← 证明"做什么"
4. Selected Publications（5-10 篇）  ← 证明"做过什么"
5. Writing / Blog（3-5 篇）  ← 证明"会思考"
6. Code / Projects（3-5 个 OSS）  ← 证明"会动手"
7. Misc / Beyond Research（可选，1 个段落）  ← 证明"是个人"
8. Contact（email + 头像可点链接到大图）
9. Footer（last updated: YYYY-MM）
```

**推荐顺序 v2（如果选 al-folio 模版）**：

al-folio 默认顺序 `News → Bio → Publications → Selected Publications → Projects` 也合理。可直接用默认，不强求。

---

## 5. Section 详细模板

每个 section 提供：填空模板 + 范例（来自调研）+ 字数指导 + 错误反例。

### 5.1 Hero / About

**模板**：
```
<head>
  <h1>[姓名] [中文名（可选，小字）]  [发音按钮（可选）]</h1>
  <p>[一行身份描述：角色 + 机构 + 地点]</p>
  <p>[研究方向：一句话 + 关键词 3-5 个]</p>
  <ul>[链接行：email | Scholar | GitHub | Twitter | CV (YYYY-MM)]</ul>
</head>
```

**范例汇编**（从调研中选高质量句式）：

身份描述（"我是谁"）：
- ✅ Eric Wallace: "Hello! I am a researcher at OpenAI, where I work to make the next-generation of LLMs more safe, robust, and private."
- ✅ Aviral Kumar: "I am an Assistant Professor in the Computer Science (CSD) and Machine Learning (MLD) departments at Carnegie Mellon University (CMU). I finished my Ph.D. from UC Berkeley in 2023."
- ✅ Sasha Rush: "ML Researcher. Cursor. NYC."（三件套句式）
- ✅ Karpathy: "I like to train deep neural nets on large datasets 🧠🤖💥"（hobby 口吻）
- ✅ Tao Yu: "My research aims to develop embodied AI agents that empower users to use language to interact with digital and physical environments to carry out real-world tasks."

**Yanjun 的填空建议**（v1.6，**已集成所有 2026-05-22 用户拍板信息**）：

```markdown
# Yanjun Chen (陈彦筠)

I am drawn to **Environment-Centric AI**: the design of the environments in
which intelligent agents learn — across LLMs, reinforcement learning, and
embodied systems.

I am a second-year PhD student in the Department of Computing at The Hong
Kong Polytechnic University, advised by Prof. Wenjie Li (Maggie) and Wei
Zhang.

📧 yan-jun.chen@connect.polyu.hk
🎓 [Scholar](https://scholar.google.com/citations?user=Zg8cX0sAAAAJ&hl=en) · [GitHub](https://github.com/Battam1111) · [X](https://x.com/YanjunChen1111)
```

**结构选择**：mission 句在前（manifesto / 第一视觉焦点），bio 句在后（institutional detail）— 学 Aditi Raghunathan 的 hero 写法。

**Hero 行的链接组合**（2026-05-22 用户拍板）：
- ✅ Email 直接写
- ✅ Scholar
- ✅ GitHub
- ✅ X (Twitter), handle `YanjunChen1111`
- ❌ CV PDF（用户决定暂不放）
- ❌ ORCID（用户忘 ID，找到后再加）

**关于 Xiaoyu Shen 老师的"彩蛋式"致谢**（用户 2026-05-22 决定）：
- Xiaoyu Shen 是用户的"编外"导师（不在 PolyU 学籍系统内的正式 advisor，但实际指导很多）
- **不放 bio 主体**（避免与正式 advisor 平级展示）
- **彩蛋位置**：about 页面所有 content 结束之后（在 Selected Publications 之后、footer 之前），加一段斜体单句：
  ```markdown
  ---

  *Special thanks to Xiaoyu Shen — much of this work would not exist without
  his ongoing mentorship.*
  ```
- 这是"彩蛋"调性：访客读完滚到底自然看到，但不喧宾夺主；学术圈页底 acknowledgement 有先例

> ✅ 中文名已确认："陈彦筠"
> ✅ 不加发音按钮（保持极简）
> ✅ Mission 句走 Liang 路线（"drawn to..." 句式）
> ✅ **研究方向 phrase 锁定**：**Environment-Centric AI**（用户 2026-05-22 选定）— "-centric" 后缀与 data-centric AI / agent-centric AI 学术 brand 一致；命题强、有 brand 力。
> ✅ **研究方向重定位**：核心研究对象是 **environment**（RL 概念延伸到 LLM / 具身智能 / 多智能体）— 不是 "RLHF / reasoning" 这类细分方向。RLHF / multi-agent / embodied / reasoning 都作为 environment-centric 视角的应用 / 实验场。
> ⚠️ 仍需填：CV 文件最新日期 + 是否要 Twitter/X 链接

**字数指导**：身份 + 研究方向加起来 **≤50 词**。

**错误反例**：
- ❌ "Welcome to my homepage! I am a passionate researcher pursuing cutting-edge AI to transform the world..."
- ❌ "Yanjun Chen | PhD Candidate | RLHF Researcher | Embodied AI Engineer | AI Safety Advocate"（pipe-separated headline 是个人品牌站套路，学术圈不用）

### 5.2 Research

**模板**：
```markdown
## Research

[1 段叙事 — 50-100 词，回答："你研究什么、为什么这是个问题、你的角度是什么"]

I'm currently working on:

- **[方向 1，3-5 词]** — [一句话说做什么，可 inline 引你的论文]
- **[方向 2]** — ...
- **[方向 3]** — ...
```

**范例汇编**：

叙事段（"为什么你的方向有意思"）：
- ✅ Jacob Steinhardt: "ML systems tend to exploit errors in the reward function..."
- ✅ Robin Jia: "My research seeks to understand modern deep learning systems for NLP and ensure that they are reliable."
- ✅ Aditi Raghunathan: "I aim to advance our scientific understanding of frontier models by uncovering why they fail and how to build systems that remain reliable under pressure."

研究方向 bullet（"具体做什么"）：
- ✅ Eric Wallace（7 bullets，最具体）：
  - Robustness to adversarial examples (jailbreaks, prompt injections)
  - Memorization, unlearning, synthetic data (privacy/copyright)
  - Distillation
  - Model stealing attacks
  - Frontier risk evaluations
  - Open-source LLM safety
  - Safety and refusal training

研究问题型（"问句驱动"）：
- ✅ Robin Jia（4 个问句 + 每个 inline 引论文）：
  - "How can we scientifically understand LLMs?" [paper1] [paper2]
  - "How can technical research shed light on legal and policy issues?"
  - "How should we benchmark LLMs?"
  - "How can we use LLMs to solve complex reasoning tasks?"

立场型（"反传统"）：
- ✅ Jakob Foerster: "Anything but supervised learning that is well motivated and has a shot at making a difference."

**Yanjun 的填空建议**（v1.5，**2026-05-22 用户对 paper-angle 匹配再校准 + 加 Where I'm going vision 句**）：

```markdown
## Research

I work on **Environment-Centric AI** — the design of the environments in
which agents learn.

Across LLMs, reinforcement learning, and embodied AI, the **environment is not
a given**: it can be designed. Two angles I've worked on recently:

- **Reward landscapes as environments.** When does the reward model itself
  become an environment that mis-shapes the policy?
  → *The Accuracy Paradox in RLHF* (EMNLP 2024).

- **Multi-agent environments.** Cooperative LLM systems where agents shape
  one another's learning signal.
  → *Exact Is Easier: Credit Assignment for Cooperative LLM Agents*
  (arXiv:2603.06859, in submission).

### Where I'm going

My bet: **environments themselves must scale, train, and generalize the way
models have.** This is the lever that lifts what AI systems can become.
```

**为什么这样组织**：
- 第一句直接 brand："I work on Environment-Centric AI" — 把 phrase 作为研究身份命名
- **2 个 angles 而非 4 个** — 用户 2026-05-22 校准：原 4 个 angles 中的 "Embodied environments"（3D V-L CoT 实际是 CoT for multimodal alignment）和 "High-dim action environments"（SAC paper 实际是 algorithm internals，研究 tanh distribution shift）**与 environment-centric 主轴不 fit**，是 mis-framing。删除是正确的"selling 不尴尬"决策（PhD 主页只 sell 你自豪 + narrative coherent 的工作）。
- **"Where I'm going" 是 vision 句** — Liang 大佬路线 + 用户的"environment scaling" 命题；淡化 ASI 用 "what AI systems can become" 留白（避免 PhD 阶段 oversell；学术圈先例上 Denny Zhou 用 "Solve AGI" 是 Senior 地位允许）。
- **2 angles + 1 vision** narrative 比 4 角度 + 0 vision 更"manifesto"感（你已做 + 你要做的方向清晰）
- "Environment-Centric AI" 这个 phrase 在 hero + Research 段一致使用 → 形成 brand keyword，访客 30 秒能 get

**字数指导**：1 段叙事 + 3-7 bullets，每个 bullet 1 行（≤15 词）。

**错误反例**：
- ❌ "My research interests include AI safety, alignment, RLHF, embodied AI, reasoning, multi-agent systems, large language models, and more."（堆 buzzword）
- ❌ "I am passionate about making AI safer."（无具体）

### 5.3 Selected Publications

> ✅ **2026-05-22 更新**：用户 Google Scholar 实测 12 篇 paper（不是 `research.ts` 旧数据里的 6 篇）。下方"Yanjun 实际 publications"清单为 Scholar 抓取结果。

**模板**：
```markdown
## Selected Publications

[See full list on [Google Scholar](URL).]

[2025] **[Paper Title]**
[Authors（你的名字加粗）]
*[Venue]* · [PDF](url) · [arXiv](url) · [Code](url) · [BibTeX](url)
> [1-2 句话的 TL;DR — Eric Wallace 路线]
```

**Yanjun 实际 publications**（按时间倒序 + 第一作者优先 — 截至 2026-05-22 from Scholar）：

第一作者（推荐放主页 Selected）：

| 年 | 标题 | Venue | 引用 |
|---|---|---|---|
| 2026 | **Exact Is Easier: Credit Assignment for Cooperative LLM Agents** | arXiv:2603.06859 (in submission) | 1 |
| 2025 | Integrating Chain-of-Thought for Multimodal Alignment | arXiv 2503.06232 | 4 |
| 2024 | **The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models** | EMNLP 2024 | 21 |
| 2024 | Rethinking Soft Actor-Critic in High-Dimensional Action Spaces | arXiv 2410.16739 | 5 |

合作者身份（建议放 "Other Publications" 或外链 Scholar）：

| 年 | 标题 | Venue | 引用 | 你的位置 |
|---|---|---|---|---|
| 2025 | Reasoning beyond language: a comprehensive survey on latent CoT reasoning | arXiv 2505.16782 | **56** | 第 6 作者 |
| 2025 | Unveiling the key factors for distilling chain-of-thought reasoning | ACL 2025 Findings | 47 | 第 5 作者 |
| 2025 | Fine-grained and multi-dimensional metrics for document-level MT | NAACL 2025 | 11 | 第 3 作者 |
| 2025 | LLaSO: A Foundational Framework for Reproducible Research | arXiv | 3 | 第 4 作者 |
| 2025 | Breaking the pre-planning barrier: Real-time adaptive coordination | arXiv | 1 | 第 3 作者 |
| 2025 | PricingLogic: Evaluating LLMs Reasoning on Complex Tourism Pricing Tasks | EMNLP 2025 | 0 | 第 5 作者 |
| 2025 | MA-ROESL: Motion-aware Rapid Reward Optimization | arXiv | 0 | 第 3 作者 |
| 2026 | SonicBench: Dissecting the Physical Perception Bottleneck | arXiv | 0 | 第 2 作者 |

**Selected 策略推荐**（2026-05-22 用户决定 C2 路径 — SAC + 3D V-L CoT 不放主页）：

主页放 **5 篇 Selected**：

1. **The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models**
   Yanjun Chen, et al. *EMNLP 2024* — 21 cites — 第一作者 — 对应 Research §1 (Reward landscapes as environments)

2. **Exact Is Easier: Credit Assignment for Cooperative LLM Agents**
   Yanjun Chen, et al. *In submission. arXiv:2603.06859* — 第一作者 — 对应 Research §2 (Multi-agent environments)

3. **Reasoning beyond language: A comprehensive survey on latent chain-of-thought reasoning**
   X. Chen, A. Zhao, et al., including Yanjun Chen. *arXiv:2505.16782* — 56 cites — 合作者

4. **Unveiling the key factors for distilling chain-of-thought reasoning**
   X. Chen, Z. Sun, et al., including Yanjun Chen. *ACL 2025 Findings* — 47 cites — 合作者

5. **Fine-grained and multi-dimensional metrics for document-level machine translation**
   Y. Sun, D. Zhu, Yanjun Chen, et al. *NAACL 2025* — 11 cites — 合作者

附一行："See full list of 12 publications on [Google Scholar](URL)."

**主页不放**（C2 决策）：
- ~~Integrating Chain-of-Thought for Multimodal Alignment~~ (3D V-L CoT) — 实际是 CoT distillation 方向，与 environment-centric 主轴不 fit，用户认可排除
- ~~Rethinking Soft Actor-Critic~~ — 实际是 SAC algorithm internals（tanh distribution shift），不是 environment 视角，用户认可排除
- 其他低引合作 paper（LLaSO / Breaking pre-planning / MA-ROESL / PricingLogic / SonicBench）— 走 Scholar 全列即可

**关于 5 篇 Selected 的组织**：
- 1-2 为第一作者（与 Research 段 angles 1:1 对应）
- 3-5 为高引合作者 paper（venue 名响 + 引用数高 = sell credibility，即使不 fit Environment-Centric 主轴 — 这与 Selected Publications 段的目的不同）
- 不要在 Research 段引用 3-5（避免主轴脱节）

⚠️ **C3 paper 措辞红线**（用户明确要求："不要暴露具体投哪"）：
  - ✅ 写："*In submission. arXiv:2603.06859*"
  - ✅ 或："*Preprint, arXiv:2603.06859*"（更低调）
  - ❌ 不要写具体投稿的会议名（双盲规则 + 用户明确要求）

**Metric 数据**（Scholar 截至 2026-05-22 — 仅供参考，**不要在主页可视化展示**）：
- Total citations: 149
- h-index: 5
- i10-index: 4
- → MANUAL §3.1 已禁用 Chart.js / 学术指标可视化；这些数字 **inline 在 bio 也不建议**（学术圈通常不主页 sell metrics，让 Scholar 链接说话）

**范例汇编**：

最简版（Schulman / Manning 路线）：
```
[2025] Reasoning beyond language: a comprehensive survey on latent chain-of-thought reasoning
Yanjun Chen, ...
arXiv 2505.16782 [PDF]
```

带 thumbnail + TLDR（Sasha Rush / Eric Wallace 路线）：
```
[image: paper figure thumbnail]
[2024] The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models
Yanjun Chen, ...
EMNLP 2024 · [PDF] · [Code] · [BibTeX]
> Stronger reward models don't always train better policies. We show why and when.
```

带 award 标记（**通用句式 — 仅当确实拿了奖才写**）：
```
[YYYY] <Paper Title>
<Authors>
<Venue> (<Award Name>)  ← 只在 venue 官方公告里出现过的奖才写
```

> ⚠️ 调研中 Bryan Hooi 把 award inline 在 paper 末尾，是因为他真的有 KDD Best Paper Award。**你不要把范例当模板**——只有你本人的 paper 真的拿了 award 才在该 paper 末尾标，且 award name 必须与 venue 官方公告一致（不要 paraphrase 成 "Best Paper Honorable Mention" 之类的口语化版本）。

**展示策略**：

- **5-10 篇 Selected**（PhD 全列也行，但用 "Selected" 措辞预留未来空间）
- **倒序排列**（按年）
- **自己的名字加粗**
- **第一作者用 `<u>下划线</u>` 或星号标注**（如果是共一）
- **每篇带 ≤4 个链接**：PDF / arXiv / Code / BibTeX（够了，不要堆）
- **TLDR**（可选但加分）：1-2 句话，比 abstract 简，比标题详
- **Award 标记** inline 在 venue 后

**字数指导**：每篇 60-100 词（含 TLDR）。

**错误反例**：
- ❌ 卡片网格 + 大缩略图（这是个人品牌站做法）
- ❌ 全部抄 abstract（abstract 是给 reviewer 的，主页要 1-2 句的 TLDR）
- ❌ 把 Workshop / arXiv preprint 混在 Conference paper 里（用分组：Conferences/Journals 和 Preprints）

**关于 Publication 是否按主题分组 vs 按时间倒序**：
- 主流：按时间倒序（90%+）
- 例外：Sherry Wu 按主题分组（PhD 数量少时可能有用）
- **Yanjun 建议**：按时间倒序，附 "View by topic" 二级链接（可选）

### 5.4 News / Updates

**模板**：
```markdown
## News

- **[YYYY.MM]** — [milestone description, ≤20 词]
- **[YYYY.MM]** — [milestone description]
- ...
[最多 8-10 条，列完最近 12-18 个月]
```

**范例汇编**：

Manning 风（What's New，黄金标准）：
```
**Apr 2026** — Paper on X accepted to ACL 2026
**Mar 2026** — Gave invited talk at Y workshop
**Jan 2026** — Started visiting position at Z lab
**Nov 2025** — EMNLP 2025 outstanding reviewer
**Oct 2025** — Released [dataset/code] on GitHub
```

Robin Jia 风（带时间戳的 milestone-only）：
```
**10/2025** — Co-organizing X workshop at NeurIPS 2025
**05/2025** — Paper Y accepted at ACL 2025
```

**收录标准**（什么算 milestone）：

✅ **应该列**：
- 论文 accept / publish（带 venue）
- Invited talk / panel / podcast
- 实习 / visiting position start
- 大 OSS release / 数据集发布
- 奖项 / 入选名单（Best Paper、scholarship、honorable mention）
- 重要 service（PC / workshop organizer）
- 媒体报道（被 quote 在 article）

❌ **不要列**（避免日报感）：
- 推特 thread
- 普通 blog post（除非是 viral 的）
- 上课 / 完成作业
- "新的一年开始了" 之类感想
- arXiv preprint（除非有版本号变化）

**频率**：1-3 个月更新一次。**最新一条不要超过 6 个月前**（否则显得 "stale"）。

**字数指导**：每条 ≤20 词。

**错误反例**：
- ❌ News 区里塞 Twitter 帖子滚动（学 Choi 路线，但 PhD 没那个影响力底气）
- ❌ News 在主页最底（藏起来等于没有）

### 5.5 Writing / Blog

**模板**：
```markdown
## Writing

[1 句话 disclaimer — 可选]
> Views my own, not my advisor's or my institution's.

### By topic [or "Recent"]

- **[Post Title]** *(YYYY-MM)* — [1 句话 hook]
- **[Post Title]** *(YYYY-MM)* — [1 句话 hook]
- ...
```

**范例汇编**：

按主题分组（Chris Olah 黄金标准）：
```
### On Reasoning
- "RLHF Philosophy"
- "What CoT Distillation Preserves"

### On Embodiment
- "Embodied Cognition Meets LLMs"
```

按时间倒序（更简单）：
```
- **RLHF Philosophy** (2025-03) — How reward modeling reframes the alignment problem.
- **CoT Distillation: What Survives?** (2025-01) — On the boundaries of CoT compression.
- **Embodied Cognition Meets LLMs** (2024-11) — Why bodies matter for reasoning.
```

**展示策略**：

- **Yanjun 当前有 3 篇**：cot-distillation / embodied-cognition / rlhf-philosophy
- **按主题分组**（Chris Olah 风）比按时间序更"知识地图感"
- **每篇带 1 句 hook**（不要直接抄第一段）
- **disclaimer 句**："Views my own, not my advisor's or my institution's." — 在 PhD + 副业 + RLHF 安全话题 的语境下很专业（学 Chris Olah）
- **未来扩展**：blog 可以放主页一级 section（Lilian Weng / Jason Wei 路线）— 当 blog 篇数 ≥5 时尤其值得

**字数指导**：每篇 hook ≤25 词。

**错误反例**：
- ❌ Blog 卡片大图网格（个人品牌站做法）
- ❌ Blog 列表里塞"Coming soon" 占位（说明你不活跃）

### 5.6 Code / Projects

**模板**：
```markdown
## Code

- **[Project Name]** *(YYYY)* — [1 句话功能描述]. [GitHub](url) · [Demo / Paper](url)
- ...
```

**范例汇编**：

Tao Yu 风（量化 impact）：
```
- **C3** *(2024)* — Contextual Counterfactual Credit assignment for multi-agent RL in LLM collaboration. [GitHub](url) · [Paper](url)
- **AccuracyParadox-RLHF** *(2024)* — Research code for EMNLP 2024 paper. [GitHub](url)
```

Karpathy 风（pet projects 列法）：
```
- **micrograd** — A tiny autograd engine + a tiny neural net library on top of it. 9.2k stars.
```

**展示策略**：

- **Yanjun 当前有 2 个相关 repo**：C3 / AccuracyParadox-RLHF
- **如果有 stars / downloads，带量化 metric**（学 Tao Yu / Jie Tang）
- **不要混进 Publications 行**（学 Bryan Hooi 单列）
- **副业 zk-cookbook 体系**：可以放，但建议在 "Beyond Research" 子段（见 §5.7）— 学术圈访客可能不关心 ZK，但也不要藏

**字数指导**：每个 1 行（≤20 词）。

**错误反例**：
- ❌ 大量 fork 别人的 repo 也列上（dilute focus）
- ❌ "Various projects" 一句话带过（具体 repo 名才有 SEO）

### 5.7 Misc / Beyond Research（可选，页面最底）

**用途**：让访客知道你是个人，不只是论文产出机器。

**模板**：
```markdown
## Beyond Research

[1 段叙事 — ≤80 词，列你的"非学术身份"]
```

**范例汇编**：

Robin Jia: Music section（钢琴 piano duo / quintet / senior recital 录音 + Math competition 经历）
Liang: Honors 里列 ACM ICPC 编程比赛 + 音乐比赛
Schulman: "me" 沙滩照在页脚

**Yanjun 的选择（2026-05-22 用户决定）**：

> ✅ **用户决定：完全不放 Beyond Research 段**（"别放了"）

理由（推断）：
- 主页保持 100% 学术 focus，narrative 更专注 → 大佬路线一致（Karpathy / Manning / Liang 主页都不放"副业"section）
- 副业链接在 GitHub `battam1111` profile README 已有，访客好奇会自己点 GitHub
- 副业已合规（用户已 due diligence + 已申请），主页不放也不影响合规
- 与 Mission 句 "drawn to..." 学术 attitude 一致 — 主页就是研究人格

**实施**：本节整段 **不要在主页出现**。`§5.7 Beyond Research` 在 IA 里跳过；自检表 #31-32 改为"无 Misc / 无副业段"。

**例外**：未来如有变动（如副业完全转型 / 想 build personal brand），可重新启用本节（保留原内容作为参考）。

### 5.8 Contact

**模板**：
```markdown
## Contact

📧 [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk)
🏛 Department of Computing, The Hong Kong Polytechnic University, Hong Kong

[1 句话 — 可选 — 招合作 / collaboration 表态]
> I'm open to collaborations on RLHF, reasoning, and embodied agents. Please mention which of my papers you've read and what you want to work on.
```

**范例汇编**：

Foerster 风（带过滤器）：
- "Please mention which of my papers you've read and what you want to work on" — PhD 阶段降级版

Aviral Kumar 风：
- 招学生 CTA（但 PhD 没有学生，不适用）

**禁用**：
- ❌ 电话号码（PhD 不需要，反而过度正式）
- ❌ 物理地址（除非用作 paper mailing）
- ❌ 联系表单（增加摩擦，邮箱直接放）

### 5.9 Footer

**模板**：
```markdown
---
Last updated: 2026-05-22 · Source on [GitHub](url) · [Plain HTML, no frameworks](inspect-source)
```

**关键元素**：
- **Last updated 日期**（Manning 黄金标准 — 证明"活着"）
- **GitHub source link**（透明化）
- **可选**：技术栈宣告（Karpathy: "0 frameworks were used... I am becoming seriously allergic to 500-pound websites"）

---

## 6. 措辞规范（do's and don'ts）

### 6.1 Bio 句式

**推荐句式**（按使用频率）：

1. **倒序履历句式**（Schulman / Karpathy）
   ```
   I am [current role] at [current org]. Previously, I [past role] at [past org].
   Before that, I [earlier role] at [earlier org].
   ```

2. **角色 + 方向**（Eric Wallace / Tushar Khot）
   ```
   I am a [role] at [org], where I work on [areas].
   ```

3. **三件套**（Sasha Rush）
   ```
   [Role]. [Org]. [Location].
   ```

4. **态度驱动**（Liang）
   ```
   I'm drawn to [品味], I want to [动机], and I like to [产出].
   ```

### 6.2 Mission 句式

**Mission 可有可无**。50+ 样本中约 60% 有显式 mission，40% 无。

如果写，参考：

1. **大野心**（Denny Zhou）："Solve AGI by building large language models to reason."
2. **具体目标**（Jan Leike）："Optimizing for a post-AGI future where humanity flourishes."
3. **研究问题**（隐式 mission）："How can we train AI systems to follow human intent on tasks that are difficult for humans to evaluate?"
4. **品味陈述**（Liang）："I am drawn to simple things, want to understand things deeply, and like to build useful systems."

**纪律**：
- **一句话**（不超过 25 词）
- **动词具体**（"build" / "study" / "understand" / "scale" — 不要 "explore" / "investigate"）
- **避免空话**（"AI for good" / "shaping the future" 是非学术圈套路）

**Yanjun 选定的 Mission 句（2026-05-22 用户决定走大佬路线 + 重定位 Environment-Centric AI）**：

```
I am drawn to **Environment-Centric AI**: the design of the environments in which
intelligent agents learn — across LLMs, reinforcement learning, and embodied systems.
```

(26 词，Liang 风格 attitude-driven，直接命名研究领域：Environment-Centric AI，跨三个领域)

**备选**（不同语气，未来可换）：
- 问句驱动："I am drawn to a single question: how should we design the environments in which intelligent agents learn — across LLMs, RL, and embodied AI? I call this **Environment-Centric AI**." (33 词)
- Hinton 风格命题陈述："I work on **Environment-Centric AI** — how the worlds in which agents learn (LLM training data, RL simulators, embodied scenes) determine what those agents become." (26 词)
- 鲜明对比修辞："I am drawn to **environments — not just agents**. How the worlds in which LLMs, RL policies, and embodied systems learn shapes everything they become." (25 词，最"宣言"感)
- Karpathy 极简风格：不写完整 mission，用一行兴趣陈述代替（"I work on **Environment-Centric AI** for LLM, RL, and embodied agents."）

**Research direction phrase**：

用户 2026-05-22 在以下候选中**选定 "Environment-Centric AI"**：

| Phrase | 选定 | 原因 |
|---|---|---|
| **Environment-Centric AI** | ✅ 用户选定 | "-centric" 后缀与 data-centric AI / agent-centric AI 学术 brand 一致；自创术语，brand 力强；命题清晰 |
| Environment Shaping | — | 用户自己提的，但最终选了上一个 |
| Environment Design | — | adversarial/cooperative env design 圈用，偏理论 |
| Open-Ended Learning | — | DeepMind / Tim Rocktäschel 推，绑定特定子社区 |

**phrase 使用纪律**：
- **主页 hero、Research 段、blog post 都一致用 "Environment-Centric AI"**（不要在 hero 用一个、Research 用另一个）
- **大写规则**：作为正式 phrase 时首字母大写（"Environment-Centric AI"）；作为形容词嵌入时小写（"an environment-centric perspective"）
- **未来 paper / talk 题目**也可以一致用这个 phrase 当 brand keyword

**Mission 句纪律**：
- ≤30 词
- 具体动词（"draw to" / "study" / "work on" / "design"）
- 避免 "passionate / cutting-edge / world-class / transforming AI / AI for good"
- 每篇 paper 都能对得上 mission（避免 mission 与 paper list 脱节）

### 6.3 奖项 / 成就措辞

**推荐**：fact list 而非 narrative

✅ **Inline 在 bio**（Sasha Rush 路线）：
```
... NSF CAREER 2024 ... Sloan Fellowship 2024 ...
```

✅ **Dump list**（Aditi Raghunathan 路线，列 12 个不分级）：
```
- NSF CAREER Award, 2024
- Sloan Fellowship, 2024
- Anita Borg Scholarship, 2018
- ...
```

✅ **Inline 在 paper**（Bryan Hooi 路线）：
```
... [2024] Paper Title, EMNLP 2024 (Outstanding Paper Award)
```

❌ **避免**：
- "I am honored to have received..." / "It is my privilege to..."
- 把单个 best paper 当独立 section 大写特写
- 把"NSF GRFP honorable mention"当 NSF CAREER 同等地位列出（分量不同）

### 6.4 工业经历措辞

如果有实习 / visiting position，**写明 advisor / team / 工作内容**：

✅ **Eric Wallace 路线**（具体到产品名）：
```
- 2024-2026: OpenAI, Alignment Training Team co-lead.
  Contributed to GPT-5, o-series models, ChatGPT agent mode.
```

✅ **Frankle 路线**（多重身份，直接拥抱）：
```
- 2023-present: Chief AI Scientist at Databricks (via MosaicML acquisition).
- 2018-2023: PhD at MIT with Michael Carbin.
```

❌ **避免**：
- "Various internships at top tech companies"（不具体）
- "Worked closely with the team to deliver impactful results"（无 substance）

### 6.5 协作 / 招生措辞

PhD 学生没有招学生权限，但可以表态欢迎合作：

✅ Foerster 路线（高门槛）：
```
Please mention which of my papers you've read and what you want to work on.
```

✅ 普通路线：
```
I'm open to collaborations on RLHF, reasoning, and embodied agents.
```

❌ **避免**：
- "Always happy to chat about AI!"（过度开放，反而显得不严肃）
- "DM me on Twitter"（学术主页不该指引到 social）

### 6.6 中文名处理

**用户 2026-05-22 决定**：中文名用"陈彦筠"，**不加发音按钮**（保持极简）。

最终版本：

```html
<h1>Yanjun Chen <span class="cjk">陈彦筠</span></h1>
```

**ORCID `Other names` 字段建议**（让 Scholar / Crossref 把不同拼写绑定到同一个作者）：
- Primary: `Yanjun Chen`
- Alt 1: `Y. Chen`（论文引用常见简写形式）
- Alt 2: `陈彦筠`（中文）

去 [orcid.org](https://orcid.org/) → My record → Other names → Add 这 3 个变体。

> 💡 之所以**不加发音按钮**：Danqi Chen / Sherry Wu 加是因为他们的名字英文化拼写歧义大；"Yanjun Chen" 拼读相对直观（拼音 Yan-jun），加按钮反而增加视觉噪音。如果你之后改主意可以再加（见 §11.4 删除的音频规范段会重新启用）。

---

## 7. Selling 哲学（不尴尬的 selling）

调研发现 PhD 阶段最有效的"不尴尬 selling"原则：

### 7.1 事实代替形容词

❌ 形容词式："impactful research"、"groundbreaking work"
✅ 事实式：
- Noam Brown："the first AI to defeat top humans in no-limit poker"
- Eric Wallace："contributed to GPT-5, o-series models, ChatGPT agent mode"
- Jie Tang："ChatGLM-6B has been downloaded nearly 10,000,000 times"

**Yanjun 可用的事实候选**（⚠️ **每一项都需要你本人核实后才能上线** — 调研子代理可能误把示例当事实）：
- "EMNLP 2024 paper on RLHF reward modeling, *The Accuracy Paradox*" — venue 确认无误；**是否有 Award 标记需自查**
- "Survey on latent CoT reasoning, arXiv 2505.16782" — arXiv ID 来自 [research.ts](../../src/data/research.ts)，确认现状
- "C3 paper" — **当前 acceptance 状态需自查**（是否仍是 in submission / arXiv preprint / 已 accept）
- 如果 OSS 有 stars / downloads → 上线前 grab 当时的具体数字（截图存证以防被质疑）

**纪律红线**：
- ❌ 不要 inflate award（claim 一个不存在的 Outstanding Paper Award = 永久信任损失）
- ❌ 不要把 "under review" 写成 "to appear at X"
- ❌ 不要把 workshop paper 写成同名 main conference 的 paper

### 7.2 Outlet 名作为隐性 credibility

学 Dario Amodei / Yejin Choi：
- 不写"recognized internationally"
- 写"TIME 100 AI 2025"、"Lex Fridman podcast"、"NYT op-ed"

**Yanjun 适用版**：
- 论文 venue 名（EMNLP / NAACL / ACL Findings）就是隐性 credibility
- Workshop 邀请名、podcast 录制名（如有）

### 7.3 产品 / 数字作为 impact 信号

学 Tao Yu / Eric Wallace：
- "OSWorld 被 OpenAI 和 Anthropic 用"
- "Instructor 在 HuggingFace 下载 6M 次"

**Yanjun 当前可用 metric**：
- arXiv paper 引用数（不需要主页显示，但可以提及 Scholar）
- AccuracyParadox 项目 GitHub stars
- 如果 ZK 副业有 traction 数据（Polar 订阅、blog 阅读量）— **但放在 "Beyond Research" 段**

### 7.4 学术血统点到为止

✅ 一句话提：
- "PhD at PolyU with [Advisor Name]"
- "Visited [Lab Name] in [Year]"

❌ 不要堆：
- 不要说 advisor 的 advisor
- 不要说 advisor 的 fame（"my advisor is the famous X who...")

### 7.5 个性元素的"安全剂量"

50+ 样本中"加了一点个性"的范例（都很克制）：

| 学者 | 个性元素 | 剂量 |
|---|---|---|
| Sherry Wu | "Hello World!" + 中文名 | 1 处 |
| Danqi Chen | 中文名 + 发音按钮 | 1 处 |
| Lingpeng Kong | 页脚 Stefan Zweig 引言 | 1 处 |
| Robin Jia | Music section（钢琴录音） | 1 个 section, 页面最底 |
| Liang | Honors 里列编程 / 音乐比赛 | inline |
| Karpathy | 魔方速拧记录、Pet projects | 页面最底 |
| Christiano | "Fun and games" 子页 | 单独子页 |

**Yanjun 安全剂量建议**：
- ✅ 中文名 + 发音按钮（hero 区）
- ✅ "Beyond Research" 段提 zk-cookbook（页面最底）
- 🤔 页脚一句喜欢的引言（如有的话，1 句话）
- ❌ Emoji 不超过 2 个
- ❌ 不要装饰性 SVG

### 7.6 "不为身份道歉"

50+ 样本中所有年轻学者都**平视写自我介绍**：

✅ Aviral Kumar："I am an Assistant Professor... I finished my Ph.D. in 2023."
✅ Eric Wallace："I am a researcher at OpenAI."
✅ Sherry Wu："I am trained at the University of Washington to be an HCI+NLP researcher."

❌ **不要**：
- "I am currently a PhD student..."（"currently" 是弱化词）
- "Aspiring researcher in..."（"aspiring" 显得犹豫）
- "Junior researcher working on..."（"junior" 主动降级）
- "Just finished my master's..."（"just" 显时间感）

**Yanjun 直接写**：「I am a PhD student at PolyU working on RLHF and embodied AI.」

---

## 8. 技术栈决策

### 8.1 三方案 trade-off（基于组 10 调研）

| 方案 | 学习成本 | 风格契合 | 迁移成本 | 长期维护 | 灵活度 | 调研中真实使用率 |
|------|---------|---------|---------|---------|--------|----|
| **A. 迁到 al-folio (Jekyll)** | 中（学 Jekyll/Ruby） | ★★★★★ 标杆 | 高 | 极低（社区） | 中 | 50+ 样本中 ~30% 用 |
| **B. 迁到 Hugo Blox** | 中（学 Hugo widget） | ★★★★ | 高 | 低 | 中 | ~10% |
| **C. 保留 Next.js 重写（删装饰）** | 低（已熟悉） | ★★★ 取决于设计 | 低 | 高（自维护） | 极高 | <5%（生态未成熟） |

### 8.2 推荐方案：**迁到 al-folio**

**理由**：

1. **5/5 真实 PhD 主页都用** — 主流学术风格的事实标杆
2. **BibTeX 直接 import** — 不必手维护 paper 列表，加一篇 paper 就是 `.bib` 文件改一行
3. **明暗主题内建** — Yanjun 当前主页 README 写了"Dark Mode (coming soon)" 留坑两年没填，al-folio 开箱即用
4. **News / Publications / Blog / Projects** 都是 default 组件
5. **GitHub Pages 直接 host**，零部署复杂度
6. **社区 fork 多便于借鉴**：B1 Maruan / B4 Cyrus Chiang / B5 Siddharth 三个真实案例可参考
7. **Yanjun 当前花在 Next.js 自造装饰上的时间是负 EV** — 装饰会被删，自造的组件没有 BibTeX、暗模式、Math 等基础设施

**潜在阻力**：
- 学 Jekyll / Ruby 有上手成本，但 5 年 PhD 生涯都受益
- 当前 Next.js 项目（包括 scholar-sync.mjs、blog markdown 文件）需要迁移

**迁移路径**（简版）：
1. Fork `alshedivat/al-folio`
2. 改 `_config.yml` 填个人信息
3. 改 `_data/news.yml` 填 News
4. 改 `_data/coauthors.yml`（可选）
5. 把 6 篇 paper 的 `.bib` 放到 `_bibliography/papers.bib`
6. 把 3 篇 blog markdown 放到 `_posts/`
7. 把 `scholar-sync.mjs` 改写成 Jekyll plugin 或保留为独立脚本（al-folio 已经显示 Scholar metrics）
8. 部署到 GitHub Pages
9. 把 `battam1111.github.io` 仓库的 `main` 替换为新版

**估计时长**：熟手 1 个周末，新手 1 周（包括摸索 Jekyll）。

### 8.3 备选方案：保留 Next.js + 做减法重写

**何时选这个**：
- 用户**强烈**不想换栈
- 用户想要的设计**超出** al-folio 默认能力（极少见 — PhD 阶段够用）
- 用户想用 Next.js 主页同时跑其他功能（如复杂交互 demo）

**减法清单**（如果选 Next.js 路线）：
1. 删 `react-tsparticles` + `tsparticles` 依赖
2. 删 `chart.js` + `react-chartjs-2` 依赖
3. 删所有 `framer-motion` 入场动画（保留 hover state 即可）
4. 删 `next.config.ts` 空文件（保留 `.js`）
5. 把 IBM Plex Sans / Plex Mono / Newsreader 三套字体减到 1 套（推荐 Inter）
6. 压缩 `public/PersonalAlbums/pic3.jpg` 从 21 MB 到 ≤500 KB（详见 §11.4 图片处理规范）
7. 把 13 个 section 压到 6-7 个（按 §4.2）
8. 重写 `HeroSection` / `AboutMeSection` / `NewsSection` 等组件按 §5 模板
9. 实现 dark mode toggle（用 Tailwind dark variant）
10. 删掉 `Header.tsx` 里所有装饰 nav
11. 当前的 `scripts/sync-scholar.mjs` + `.github/workflows/scholar-sync.yml` 自动同步系统：保留（这是 Next.js 路线的 Scholar metric 数据源）

**估计时长**：1-2 个周末（已熟悉栈）。

### 8.4 决策时刻

⚠️ **本手册推荐 al-folio，但最终决定权在用户。**

如果用户决定保留 Next.js，本手册的其他规范（视觉 / IA / 文案）仍然 100% 适用 — 只是底层框架不同。

---

## 9. 针对 Yanjun Chen 的具体执行清单

按优先级排序的 actionable items：

### Phase 1: 决策（5 分钟）

- [ ] 决定技术栈：al-folio（推荐）vs 保留 Next.js
- [ ] 决定 zk-cookbook 是否放主页（推荐：放 "Beyond Research" 一段）
- [ ] 决定 mission 句版本（v1 / v2 / v3 — 见 §6.2）

### Phase 2: 内容准备（半天）

**事实核实**（✅ = 2026-05-22 用户已确认；🟡 = 仍需用户做）：

- ✅ **中文姓名拼写**：陈彦筠（已确认）
- ✅ **头像 license**：self-taken（无问题）
- ✅ **PolyU outside activities 政策**：用户已查过 + 已申请，合规（**不需要主页加 disclaimer** — 见 §14 修订版）
- ✅ **PolyU CS student page guideline**：用户确认无统一要求
- ✅ **Paper 列表与 venue / acceptance / award 核实**：用户确认"全部都能够公开找到"，Scholar 数据为准（见 §5.3 修订版）
- ✅ **C3 paper 状态**：in submission（不暴露 venue），arXiv:2603.06859，第一作者
- 🟡 **是否有任何 Best/Outstanding Paper Award**：⚠️ Scholar 显示无 award 标记（如有遗漏请补，但默认无）

**内容起草**（用户做）：

- [ ] 写好 bio 段（≤50 词，倒序履历句式）
- [ ] 写好 research 叙事（50-100 词）+ 3-5 个 bullet 方向
- [ ] 整理 **12 篇 paper 的 BibTeX 文件**（不是旧 `research.ts` 里的 6 篇；统一字段：title, authors, venue, year, pdf URL, arXiv ID, code URL）
- [ ] 准备 paper TLDR（每篇 1-2 句）
- [ ] 整理 News list（5-10 条 milestone）
- [ ] 拍 / 找 1 张专业头像（200px+，详见 §11.5）— 用户当前 `pic3.jpg` 是 self-taken 但 21 MB，必须压缩
- [ ] 决定 CV PDF 是否需要（如要，准备 CV，命名 `cv-<YYYY-MM>.pdf`）

**取消的 Phase 2 项**（用户已解决或决定不做）：
- ~~录中文名发音 mp3~~（用户决定不加发音按钮）
- ~~检查 PolyU PhD handbook outside activities 条款~~（用户已查过）
- ~~与 advisor 邮件确认主页大方向~~（用户已申请副业相关流程）
- ~~决定 zk-cookbook 副业的公开度~~（已决定：低调放，不加 disclaimer）

### Phase 3: 实施（1-2 个周末）

**如果选 al-folio**：
- [ ] Fork al-folio 仓库
- [ ] 改 `_config.yml`
- [ ] 改 `_pages/about.md`（hero / about）
- [ ] 改 `_data/news.yml`（News list）
- [ ] 改 `_bibliography/papers.bib`
- [ ] 把 3 篇 blog markdown 移到 `_posts/`
- [ ] 改 `_pages/cv.md`（如果用）
- [ ] 改 favicon、社交链接
- [ ] 本地测试（`bundle exec jekyll serve`）
- [ ] 推到 `battam1111.github.io` 仓库 main 分支
- [ ] 验证 GitHub Pages 部署成功
- [ ] 检查 mobile 适配

**如果选 Next.js 减法**：
- [ ] 删依赖（tsparticles / chart.js / framer-motion 装饰部分）
- [ ] 删 component（HeroSection / AboutMeSection 等的装饰）
- [ ] 重写每个 section 按 §5 模板
- [ ] 实现 dark mode toggle
- [ ] 压缩 pic3.jpg
- [ ] 合并 next.config.ts/.js 冲突
- [ ] 减少 Google Fonts 数量
- [ ] 本地测试 + GitHub Pages 部署

### Phase 4: 验证（30 分钟）

- [ ] 用 §10 自检对照表逐项 check
- [ ] 在 Chrome / Safari / Firefox 各测一遍
- [ ] 在手机上测一遍（responsive check）
- [ ] Lighthouse 跑分（目标：Performance ≥90, Accessibility ≥95）
- [ ] 让信任的人看（advisor / labmate / 一位 senior 学者）

---

## 10. 自检对照表

**用户在重写完成后，逐项 check 这个表。任何一项 ❌ 都需要修正才能上线。**

### 10.1 视觉禁用清单

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 1 | 粒子背景 | 完全没有 | [ ] |
| 2 | Chart.js / 学术指标可视化 | 完全没有 | [ ] |
| 3 | Framer Motion 入场动画 | 完全没有（hover 不算） | [ ] |
| 4 | 渐变背景 | 完全没有 | [ ] |
| 5 | 3D 模型 / WebGL | 完全没有 | [ ] |
| 6 | Hero quote banner / 大字 tagline | 完全没有 | [ ] |
| 7 | 自定义 cursor | 完全没有 | [ ] |
| 8 | Loading spinner | 完全没有 | [ ] |
| 9 | 颜色数量 | ≤3（黑 + 白 + 蓝） | [ ] |
| 10 | 字体数量 | ≤1 种 Google Font 或纯系统 | [ ] |

### 10.2 措辞禁用清单

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 11 | "passionate" 出现 | 0 次 | [ ] |
| 12 | "cutting-edge" 出现 | 0 次 | [ ] |
| 13 | "world-class" / "leading" 自指 | 0 次 | [ ] |
| 14 | "transforming AI" 类口号 | 0 次 | [ ] |
| 15 | "currently / aspiring / junior" 自我弱化 | 0 次 | [ ] |
| 16 | Hero 第一句直接说身份 | 是 | [ ] |
| 17 | Bio 用倒序履历句式 | 是 | [ ] |
| 18 | Mission（如有）≤25 词 | 是 | [ ] |

### 10.3 信息架构

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 19 | Sections 总数 | 5-9 个 | [ ] |
| 20 | Hero 有头像 + 身份 + 链接行 | 是 | [ ] |
| 21 | News 区存在且 ≤6 个月内更新 | 是 | [ ] |
| 22 | Research 区有叙事 + 3-7 bullet | 是 | [ ] |
| 23 | Publications "Selected" 5-10 篇 | 是 | [ ] |
| 24 | 每篇 paper 链接 ≤4 个 | 是 | [ ] |
| 25 | 无独立 Honors section（PhD 阶段）| 是 | [ ] |
| 26 | 无 Students / Lab section | 是 | [ ] |
| 27 | Contact 有 email 直放 | 是 | [ ] |
| 28 | Footer 有 last-updated 日期 | 是 | [ ] |

### 10.4 个性元素

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 29 | 中文名 | 显示"陈彦筠"（用户已确认；**无发音按钮**） | [ ] |
| 30 | Emoji 数量 | ≤2 个 | [ ] |
| 31 | "Beyond Research" / "Misc" section | **0 个**（用户决定不放）| [ ] |
| 32 | zk-cookbook 副业放置方式 | **主页完全不放** — 访客好奇可去 GitHub profile README | [ ] |

### 10.5 技术 / 性能

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 33 | 单页加载时间 | ≤2 秒 | [ ] |
| 34 | 图片优化 | 头像 ≤80 KB / paper figure ≤150 KB / 其他 ≤500 KB | [ ] |
| 35 | Dark mode | 实现 | [ ] |
| 36 | Mobile responsive | 在手机正常 | [ ] |
| 37 | Lighthouse Performance | ≥90 | [ ] |
| 38 | Lighthouse Accessibility | ≥95 | [ ] |
| 39 | 部署到 GitHub Pages | 成功 | [ ] |
| 40 | `Last updated` 日期 | 不超过 6 个月 | [ ] |

### 10.6 对外可发现性（SEO / Open Graph / 索引）

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 41 | `<title>` 包含全名 + 角色 + 机构 | `Yanjun Chen \| PhD Student \| PolyU` | [ ] |
| 42 | `<meta name="description">` | 1 句 ≤160 字符，描述身份 + 方向 | [ ] |
| 43 | Open Graph `og:title` / `og:description` / `og:url` | 全部填 | [ ] |
| 44 | `og:image` | 1200×630px，主页 hero 截图 / 头像配文字 | [ ] |
| 45 | Twitter card meta（`twitter:card`, `twitter:image` 等）| `summary_large_image` | [ ] |
| 46 | JSON-LD `Person` schema | 含 `sameAs` 链到 Scholar / ORCID / GitHub | [ ] |
| 47 | `sitemap.xml` | 存在且包含所有 page | [ ] |
| 48 | `robots.txt` | 不 disallow 主路径 | [ ] |
| 49 | `<html lang="en">` | 设置正确 | [ ] |
| 50 | 自定义 404 页面 | 存在且回主页 | [ ] |

### 10.7 事实核实 / 合规（红线）

| # | 检查项 | 通过标准 | 状态（2026-05-22 用户确认） |
|---|---|---|---|
| 51 | Paper venue / award 与 Scholar 数据 + 官方公告一致 | 全部核对过 | ✅ 已查 |
| 52 | "to appear at X" 仅用于已 accept 的 paper | 是 | [ ] 实施时核 |
| 53 | "Best/Outstanding Paper Award" 仅在 venue 官方公告确认过才写 | 是（**Scholar 显示无 award 标记 → 不要列**）| ✅ 已查 |
| 54 | 中文姓名与户籍 / 学术 ID 一致 | "陈彦筠" | ✅ 已确认 |
| 55 | 头像 license 已确认（self / advisor 同意 / 摄影师署名）| self-taken | ✅ 已确认 |
| 56 | 副业（zk-cookbook 等）符合 PolyU outside activities 政策 | 已查 + 已申请 | ✅ 已确认 |
| 57 | ~~blog disclaimer（"views my own"）已加~~ | **取消** — 用户的"主动 disclaim 反而引起注意" insight，不加 | ✅ 不加 |
| 58 | C3 paper 主页措辞不暴露 venue | "in submission" 或 "preprint" 不写具体 venue 名 | [ ] 实施时核 |

### 10.8 Identity Layer 一致性（外部 profile 同步，详见 §12）

| # | 检查项 | 通过标准 | 状态 |
|---|---|---|---|
| 59 | Google Scholar bio 与主页一致 | 是 | [ ] |
| 60 | ORCID profile 已绑论文 + Other names 加变体（Y. Chen / 陈彦筠）| 是 | [ ] |
| 61 | PolyU CS faculty / student listing 有链接到主页 | 是 | [ ] |
| 62 | Twitter / X bio（如开）与主页 mission 一致 | 是 | [ ] |
| 63 | OpenReview profile 信息更新 | 是 | [ ] |

### 10.9 收敛标准

**全部 63 项 ✅ 即视为重写完成**（红线项 #51-58 任一 ❌ 都禁止上线 — 这些是事实/合规问题，错了会损害学术声誉）。

**已由用户在 2026-05-22 解决的红线**：#51 (paper 数据) / #53 (award 无) / #54 (中文名) / #55 (头像 license) / #56 (副业合规) / #57 (不加 disclaimer 的决定)

若非红线项无法满足（如尚未拍专业头像），先用占位 + 补充计划，**禁止上线带 ❌ 项的最终版**。

---

## 11. 迁移特别注意（实操细节）

本章覆盖 §8 (技术栈决策) 之外的实操盲点。critic 审阅时发现 al-folio 路线在 GitHub user-site 上有多个非显然的坑。

### 11.1 al-folio 在 GitHub user-site 部署（关键 — 不读这节会出 404）

`battam1111.github.io` 是 **GitHub user site**（不是 project site），必须从同名仓库的 `main` 分支根部署。al-folio 默认 README 假设是 project site，因此需要以下调整：

**关键配置**：
```yaml
# _config.yml
url: https://battam1111.github.io
baseurl: ""              # ⚠️ user-site 必须空字符串，不要写 "/al-folio"
```

**必须用 GitHub Actions 构建（不是 GitHub Pages 内建 Jekyll）**：

al-folio 用了 `jekyll-scholar` 等**非 safe-mode** 插件，GitHub Pages 内建 Jekyll 跑不起来。所以：

1. 在 GitHub 仓库 Settings → Pages → Source 选 **GitHub Actions**（不是 "Deploy from a branch"）
2. al-folio 仓库自带 `.github/workflows/deploy.yml`（针对 al-folio 优化的 Action）— 直接保留即可
3. 第一次部署可能需要 5-10 分钟（Ruby gem 装完）

**仓库迁移操作流程**（重要 — 避免覆盖 Next.js 历史）：

```bash
# 1. 备份当前 Next.js 版本
cd C:\Users\10350\Desktop\LocalGithub\battam1111.github.io
git tag pre-al-folio-2026-05-22
git push --tags

# 2. 在同仓库新建分支
git checkout -b al-folio-rewrite

# 3. 在分支上彻底清空并放入 al-folio 内容
git rm -rf .                  # ⚠️ 仅在 al-folio-rewrite 分支上
# 然后 fork al-folio 内容复制进来
# 或者 git pull --allow-unrelated-histories https://github.com/alshedivat/al-folio main

# 4. 在 al-folio-rewrite 分支调试，确认 GitHub Actions 部署成功 + 预览 URL 正常
#    通过 Settings → Pages 临时把 main 分支替换为 al-folio-rewrite 做 preview
#    或部署到 al-folio-rewrite.battam1111.github.io 之类的子路径（GitHub Actions 可配）

# 5. 确认无误后再切 main
git checkout main
git merge al-folio-rewrite     # 或 git reset --hard al-folio-rewrite（破坏性）
git push origin main

# 6. 上线后保留 pre-al-folio tag 至少 6 个月（万一要回滚）
```

**与 `battam1111.github.io/midnight-zk-cookbook/` 子路径的关系**：

- 你的副业项目（如 `midnight-zk-cookbook` repo）部署到 `battam1111.github.io/midnight-zk-cookbook/` 是**完全独立**的 GitHub Pages 部署（每个项目仓库有自己的 GH Pages 设置）
- 学术主页迁移到 al-folio **不会影响**这些子路径 URL
- 但⚠️：al-folio 的 `baseurl: ""` 设置不会与子路径冲突；如果你之前用 absolute path link 链到了子路径（如 `<a href="/midnight-zk-cookbook/">`），al-folio 路由不会拦截 — 安全

### 11.2 Publication 状态分类规则

PhD 阶段每篇 paper 都可能处于不同状态。**统一规则**：

| 状态 | 主页展示方式 | 是否写 venue 名 |
|---|---|---|
| Published / Camera-ready | 完整 venue 名 + PDF + Code 链接 | ✅ 写 |
| Accepted but not yet appeared | "Accepted to <Venue> YYYY, to appear" | ✅ 写 |
| Under review / In submission | "<Title>, in submission" 或不列 | ❌ 不写 venue（违反双盲）|
| arXiv only / preprint | "<Title>, arXiv:XXXX.XXXXX" | ✅ 写 arXiv ID |
| Rejected but on arXiv | 当 preprint 处理（不要 mention 哪里 reject） | ❌ |
| Withdrawn | 不列 | — |

**Workshop vs Main conference**：
- Workshop paper 单列在 "Workshop & non-archival" 子段（不要混入 Main conference）
- 命名：`ACL 2024 Workshop on X` 而不是简称 "ACL 2024"（避免误导）

**双盲规则警告**：
- 如果当前有 paper under review 在采用双盲制（如 ICLR / EMNLP main），**不要**把这篇的预印本链到自己主页上的实名 publication 段（违反 venue 政策）
- 处理方式：把 under review 的 paper **完全不放主页**，等 accept 后再加

### 11.3 Scholar 同步 / BibTeX 维护

**当前仓库的 `scripts/sync-scholar.mjs`**（注意：文件路径是 `scripts/sync-scholar.mjs`，不要写错）：
- 现状：每 3 天 cron 同步 Scholar publication 列表到 `src/data/scholar.generated.json`
- 在 Next.js 路线下：**保留**（这是 Next.js 的 publication 数据源）
- 在 **al-folio 路线下：不需要也不推荐保留**
  - 原因 1：al-folio 用 `_bibliography/papers.bib`（手维护 BibTeX）作 single source
  - 原因 2：Scholar 顺序按引用数排，但主页 publications 应按时间倒序 — 自动同步会乱序
  - 原因 3：Scholar 抓 workshop paper / non-archival 不区分 — 自动同步会污染主页

**al-folio 路线的 BibTeX 维护流程**：

1. 把 6 篇 paper 的 BibTeX 整理到 `_bibliography/papers.bib`
2. 每次有 paper 接受 / arXiv preprint，手动追加 entry
3. 在 entry 里加 al-folio 特殊字段：
   ```bibtex
   @inproceedings{chen2024accuracyparadox,
     title={The Accuracy Paradox in RLHF...},
     author={Chen, Yanjun and ...},
     booktitle={EMNLP 2024},
     year={2024},
     pdf={https://arxiv.org/pdf/2410.06554.pdf},
     arxiv={2410.06554},
     code={https://github.com/Battam1111/AccuracyParadox-RLHF},
     selected={true},               # ⚠️ al-folio 显示 "Selected Publications" 用
     award={EMNLP 2024 Outstanding Paper}, # 只在 venue 官方公告里有的奖才写
     bibtex_show={true},            # 显示 BibTeX 展开按钮
   }
   ```

### 11.4 ~~音频规范~~（已移除 — 用户不加发音按钮）

> 用户 2026-05-22 决定不加中文名发音按钮，本节原内容（mp3 录制 / 格式 / 大小规范）已移除。如未来改主意，重新启用：录制 mp3 (≤200 KB, ≤10 秒)，文件放 `/assets/audio/name.mp3`，在 §5.1 hero 加 `<button>▶</button>` 触发 `<audio>` 元素。

### 11.5 图片处理规范

**头像规格**：
- 尺寸：原图 ≥600×600px，主页显示 200×200px（让浏览器 downscale 比上传 200px 锐利）
- 格式：WebP（首选）+ JPEG fallback
- 文件大小：≤80 KB（移动端友好）
- 工具：[squoosh.app](https://squoosh.app)（浏览器内压缩，无需装软件）或 `npx @squoosh/cli` CLI

**Paper figure 缩略图**：
- 尺寸：原图 ≥800×600px，主页显示 240×180px 或类似
- 格式：WebP + JPEG fallback
- 文件大小：≤150 KB / 张
- 来源：从 paper PDF 截图 method figure，不要直接用 result table

**当前 `pic3.jpg` (21 MB) 处理**：
- 这张图在 `public/PersonalAlbums/pic3.jpg`
- 不管选哪条迁移路径，**都必须压缩** — 21 MB 单张图会让移动端永远加载不完
- 推荐处理：在 squoosh.app 转 WebP，质量 75，目标 ≤500 KB
- 如果这张图属于 PolyU media office 拍摄，**先确认 license** 再用

**license 标注规范**（参考 Choi 主页"Photo credit: Matt Hagen"）：
- 自拍 → `Photo: self`
- advisor / labmate 拍 → `Photo: <name>` 或不标
- PolyU 官方拍 → 先向 PolyU media office 确认 license，无明确许可不要用
- AI 生成（Midjourney 等）→ `Image: AI-generated, prompted by self` + 检查 venue / job application 的 AI 内容披露要求

**alt text**（accessibility）：
- 头像：`alt="Headshot of Yanjun Chen"`
- Paper figure：`alt="Figure from <paper title>: <one sentence describing what's shown>"`

**头像 license 状态（2026-05-22 用户确认）**：
- 用户当前 `pic3.jpg` 等照片都是 **self-taken**，无 license 问题
- 主页 photo credit 显示：`Photo: self` 或干脆不显示（self-taken 是默认假设，不强求标注）

---

## 12. Identity Layer 同步策略

作为 PhD，你不止有"主页"一个 profile。访客通过不同入口找到你，会比对信息一致性。**6 个外部 profile 必须保持一致**：

### 12.1 外部 profile 清单

| Profile | URL | 当前状态 | 同步优先级 |
|---|---|---|---|
| **主页** | https://battam1111.github.io | 重写中 | Single source of truth |
| **Google Scholar** | scholar.google.com/citations?user=Zg8cX0sAAAAJ | 已建 | ★★★★★ |
| **ORCID** | orcid.org/<your-id> | ⚠️ 自查是否建过 | ★★★★ |
| **PolyU CS faculty / student page** | comp.polyu.edu.hk/... | ⚠️ 自查 | ★★★★ |
| **OpenReview** | openreview.net/profile?id=... | ⚠️ 自查 | ★★★ |
| **Semantic Scholar** | semanticscholar.org/author/... | 通常自动建 | ★★ |
| **GitHub profile (battam1111)** | github.com/Battam1111 | 已更新 | ★★★ |

### 12.2 必须 invariant 的字段

跨 6 个 profile，**这些字段必须完全一致**：

- 全名拼写（英文 + 中文）
- 当前机构（"The Hong Kong Polytechnic University"，不要简写 HK PolyU / HKPU 等）
- Advisor 名字
- Email（用 `@connect.polyu.hk` 域名，统一）
- 学术 ID（ORCID + Scholar ID 互相 cross-link）

### 12.3 同步操作清单

- [ ] **Scholar 与主页**：Scholar bio 字段填 1 句话 ≤200 字符，与主页 hero 句一致
- [ ] **Scholar 与主页 publications**：主页是 single source，Scholar 自动抓（不强求顺序一致，但内容应覆盖）
- [ ] **ORCID 已建**且已绑所有 published paper（用 DOI）
- [ ] **ORCID `Other names` 字段**填中文名 + 拼音变体（"Yanjun Chen" + "陈X" + "Y. Chen" 等可能的引用变体）
- [ ] **主页 hero 加 ORCID 链接**（icon row 里）
- [ ] **PolyU faculty / student listing**：联系 PolyU CS IT 或秘书把主页 URL 加到你的 student record
- [ ] **OpenReview profile** 填了 current institution + email + Scholar ID
- [ ] **GitHub profile README** 与主页 mission 一致（你已经更新过 — 但确认 zk-cookbook 段落与主页 §5.7 一致）

### 12.4 JSON-LD `sameAs` 字段（机器可读的 identity link）

al-folio 默认有，但要确认你的 `_config.yml` 填了：
```yaml
serve_og_meta: true
serve_schema_org: true
same_as:
  - https://scholar.google.com/citations?user=Zg8cX0sAAAAJ
  - https://orcid.org/<your-id>
  - https://github.com/Battam1111
  - https://twitter.com/<your-handle>
```

这让 Google / Scholar / Bing 把 6 个 profile 认作同一个人。

---

## 13. 对外可发现性（SEO / OG / Sitemap）

主页技术上能跑、视觉上漂亮，但**被搜索 / 转发时的"第一眼信号"**直接决定 PhD 申请季的转化。al-folio 默认有大部分基础设施，但要主动验证。

### 13.1 必有 meta tag（在 `<head>` 里）

```html
<title>Yanjun Chen | PhD Student in RLHF and Embodied AI | PolyU</title>
<meta name="description" content="PhD student at The Hong Kong Polytechnic University working on RLHF, reward modeling, LLM reasoning, and embodied agents.">
<meta name="author" content="Yanjun Chen">
<link rel="canonical" href="https://battam1111.github.io/">
<html lang="en">  <!-- ⚠️ 不是 zh，主页是英文 -->
```

### 13.2 Open Graph (Facebook / Slack / Discord 分享卡片)

```html
<meta property="og:type" content="profile">
<meta property="og:url" content="https://battam1111.github.io/">
<meta property="og:title" content="Yanjun Chen | PhD Student | PolyU">
<meta property="og:description" content="PhD student working on RLHF, reward modeling, and embodied agents.">
<meta property="og:image" content="https://battam1111.github.io/assets/img/og-card.png">  <!-- 1200×630px -->
```

**og:image 准备**：
- 推荐：用 Figma / Canva 做一张 1200×630px 的"主页 hero 截图 + 关键文字" 卡片
- 简化版：直接用头像放大到 1200×630（背景纯色）
- 文件：放到 `assets/img/og-card.png`，文件 ≤200 KB

### 13.3 Twitter / X card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@<your-handle>">
<meta name="twitter:title" content="Yanjun Chen | PhD Student | PolyU">
<meta name="twitter:description" content="PhD student working on RLHF, reward modeling, and embodied agents.">
<meta name="twitter:image" content="https://battam1111.github.io/assets/img/og-card.png">
```

### 13.4 JSON-LD Person schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yanjun Chen",
  "alternateName": "陈彦筠",
  "url": "https://battam1111.github.io",
  "image": "https://battam1111.github.io/assets/img/headshot.jpg",
  "jobTitle": "PhD Student",
  "affiliation": {
    "@type": "Organization",
    "name": "The Hong Kong Polytechnic University",
    "url": "https://www.polyu.edu.hk/"
  },
  "email": "mailto:yan-jun.chen@connect.polyu.hk",
  "sameAs": [
    "https://scholar.google.com/citations?user=Zg8cX0sAAAAJ",
    "https://github.com/Battam1111",
    "https://orcid.org/<your-id>"
  ]
}
</script>
```

al-folio 用 `_config.yml` 的 `serve_schema_org: true` 自动生成；Next.js 需要在 `app/layout.tsx` 自己注入。

### 13.5 `sitemap.xml` + `robots.txt`

- al-folio 用 `jekyll-sitemap` plugin 自动生成（默认开）
- Next.js 用 `next-sitemap` 包

`robots.txt` 内容（放 `/robots.txt`）：
```
User-agent: *
Allow: /
Sitemap: https://battam1111.github.io/sitemap.xml
```

### 13.6 验证工具

部署后用这些工具检查：
- [Google Rich Results Test](https://search.google.com/test/rich-results)（JSON-LD 是否合法）
- [Open Graph Debugger (Meta)](https://developers.facebook.com/tools/debug/)（og 卡片如何渲染）
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — ⚠️ 注意：2023 后此 validator 时常下线，可用第三方替代如 [opengraph.dev](https://www.opengraph.dev)
- [Google Search Console](https://search.google.com/search-console)（提交 sitemap，监控索引状态）

---

## 14. 合规与机构协调

> ⚠️ **2026-05-22 用户已完成 due diligence**：用户确认 "查过了，这个没问题，而且我有申请，不用管这个事情就好，自己说反而引起别人注意。"
>
> 本章原版给的是"保守路径 + 加最强 disclaimer"，已被用户的实际操作经验修正。

### 14.1 副业（zk-cookbook）— 用户已合规，主页低调即可

**用户实际状态**（已确认）：
- ✅ 已查过 PolyU 相关政策
- ✅ 已走过 PolyU 内部申请流程
- ✅ 副业合规

**关键 insight**（用户提供）：

> "自己说反而引起别人注意。"

这是个非常对的判断。理由：
- 加 disclaimer 像"主动承认有需要 disclaim 的事" → 反而引起 reviewer / 系内对副业的关注
- 用户已合规 → 不需要主页做防御性声明
- 学术圈惯例：50+ 调研样本中**没有一个**加"this side project is outside my PhD..." 类合规 disclaimer（包括 Frankle 这种学术 + 工业双身份的人）

**正确做法**：
1. ✅ 副业在主页 **§5.7 Beyond Research** 段低调放（1 句话事实陈述）
2. ✅ **不加** "outside my PhD program" / "not affiliated with PolyU" / "views my own" 类 disclaimer
3. ✅ **不写** Polar.sh 付费产品具体名（如 Midnight ZK Cookbook、Bounty Radar Pro 等过度商业化）
4. ✅ 只 mention OSS topic tag `zk-cookbook`（开源部分，纯技术展示）

**禁止做法**（原 MANUAL 错了）：
- ❌ 加"This side project is conducted outside my PhD program at PolyU..." 这类 disclaimer
- ❌ 列 Polar.sh 付费订阅价格
- ❌ 主动 mention 任何 "compliant with PolyU policies" 声明

### 14.2 与 advisor 协调

⚠️ **2026-05-22 用户确认**：副业合规已自行处理。但**主页大方向**（迁 al-folio / 删除 Chart.js / 重写 sections）仍建议提前告知 advisor — 不是 due diligence，是**学术礼节**。

简单邮件模板（≤ 100 词）：

```
Subject: Refreshing my homepage

Hi <Advisor>,

I'm refreshing battam1111.github.io to make it look more like a standard
academic homepage (removing some decorative elements).

Plan: migrate to a standard Jekyll template (al-folio), keep 5-6 core
sections (About / Research / Publications / Writing / Code / Contact).

Let me know if you'd like me to mention anything specific (e.g., lab name,
ongoing projects).

Best,
Yanjun
```

可能 advisor 关心的：
- Lab 名字（如要挂）
- Ongoing 项目能 mention 哪些
- Funding source 是否要标（如他的 grant 资助你）

### 14.3 PolyU CS 学生页规范

⚠️ **2026-05-22 用户确认**：PolyU CS 没有统一 student page 规范要求。MANUAL 不需要为 PolyU brand identity 让步。

主页 URL 用 `battam1111.github.io`（用户自有）即可；如果 PolyU CS 也提供 `comp.polyu.edu.hk/~yanjun.chen/` 类官方学生页，可作为**反向链接**（PolyU 学生页 → `battam1111.github.io` redirect 或一行 "See my homepage at..." 链接）。

### 14.4 visa / immigration（如适用）

⚠️ **2026-05-22 用户确认**：已处理过相关流程。本节保留作为参考，不需要再行动。

> 如未来有变动（如转 visa 类型 / 转工签），需重新评估副业合法性，对应调整主页。

### 14.2 与 advisor 协调

在迁移前发 advisor 一份现版本截图 + 重写计划（不需要让他读 1200 行 MANUAL，但要让他知道你大动）：

```
Email subject: Refreshing my academic homepage – any input?

Hi <Advisor>,

I'm refreshing battam1111.github.io to make it look more like a standard
academic homepage (the current version has too many decorative elements).
Plan:
- Migrate to al-folio template (or simplified Next.js, TBD)
- 5-6 core sections: About / Research / Publications / Writing / Code / Contact
- Add Google Scholar metric box, news section
- Keep links to my side project (zk-cookbook) with a clear disclaimer

Any specific thing you'd like me to include / exclude?
(E.g., lab logo? mention specific lab affiliation? include current projects?)

Best,
Yanjun
```

advisor 可能关心的点：
- Lab 名字（如果他有 lab name 想挂）
- 项目名称（你能 mention 哪些 ongoing 项目 / 哪些不能）
- 是否要列 funding source（如果他的 grant 资助你）
- 主页上的 photo 是否经过他/系里 OK

### 14.3 PolyU 机构 visual identity 要求

- 自查 PolyU CS 是否有 student homepage template / brand guideline
- 如果有 PolyU 要求挂 logo / footer：放在 page footer（不在 hero）— 这与 §3.1 "禁品牌色"不冲突，因为 footer logo 是 institutional acknowledgment，不是主导色
- 如果 PolyU 要求统一字体 / 颜色 — 与 MANUAL 冲突时，**PolyU 政策优先**（这是机构合规问题）

### 14.4 与 visa / immigration 状态相关的注意

如果 Yanjun 是大陆来港读 PhD：
- Hong Kong PhD student visa 通常限制工作类型（research-related / 学校允许的兼职）
- 副业（Polar.sh 付费内容）**可能**触发"unauthorized employment" 问题
- 自查：到 Hong Kong Immigration Department 网站确认 student visa 允许的活动范围

⚠️ 这一项**不是**法律建议；如果有疑问，**找 PolyU International Office 或学生事务办公室咨询**（免费且 confidential）。

---

## 15. 上线流程（Staging / Preview / Rollback）

绝对不要一次性切 main 上线。下面是 turnkey 的 staging 流程。

### 15.1 Preview URL 准备

**al-folio 路线**：
- 方法 A（推荐）：在 `battam1111.github.io` 仓库的 `al-folio-rewrite` 分支上工作，GitHub Actions 自动部署到 preview URL（需配 Action）
- 方法 B：把内容推到一个**额外的项目仓库** `battam1111.github.io-preview`，部署到 `battam1111.github.io/battam1111.github.io-preview/`（用 project site 机制）
- 方法 C：用 Netlify / Vercel 链 GitHub 仓库（每个 push 自动 preview URL）

**Next.js 减法路线**：
- 方法 A：本地 `npm run dev` 跑（仅你自己看）
- 方法 B：用 Vercel link 仓库分支（每个 push 自动 preview URL）

### 15.2 Stakeholder review checklist

在切 main 前，至少让 **3 个外部人** 看 preview URL 5 分钟：

- [ ] **Advisor**：focus 整体方向 / 学术内容准确性
- [ ] **Labmate 1**（同方向）：focus research description 是否能让圈内人理解
- [ ] **Labmate 2**（不同方向 / 跨领域）：focus 外行能否在 30 秒内 get "你做什么"
- [ ] （可选）**Senior PhD 或 postdoc**：focus 是否有 PhD 阶段常见错误（如过度装饰 / 自我弱化措辞）
- [ ] （可选）**英语母语者**：focus 英语措辞是否地道

收集反馈，决定是否回炉。

### 15.3 切 main 前的最终 backup

```bash
# 备份当前 main 版本（已是 Next.js 旧版）
git tag pre-rewrite-2026-05-22
git push origin pre-rewrite-2026-05-22

# 切换 main 到新版本
git checkout main
git merge al-folio-rewrite  # 或 reset --hard / 直接 push 新内容
git push origin main

# 验证 GitHub Pages 部署成功（在 Actions tab 看）
# 等 5-10 分钟，访问 https://battam1111.github.io 确认新版生效
```

### 15.4 Rollback plan

如果切 main 后 24 小时内发现严重问题（404 / 关键链接断 / 严重视觉 bug）：

```bash
# 立刻回滚
git checkout main
git reset --hard pre-rewrite-2026-05-22
git push --force-with-lease origin main
```

⚠️ 但 **--force-with-lease** 也是破坏性操作，确认你是唯一 push 者再做。
⚠️ 回滚后，发邮件给已经看过新版的 stakeholder 解释"暂时回滚，正在修"，**不要静默**。

### 15.5 切 main 后的 24 小时观察

不要立刻动 BibTeX / News / 任何内容。只看：
- [ ] GitHub Pages 部署成功（Actions tab）
- [ ] 主页所有链接能点（手动 click 一遍）
- [ ] Mobile 渲染正常
- [ ] Lighthouse Performance / Accessibility 跑分
- [ ] Google Search Console 提交 sitemap
- [ ] og:image 在 Slack / Twitter / Facebook 转发卡片测试
- [ ] **不要 push 任何新 commit** — 让访客接触稳定版

---

## 16. 长期维护节奏

写完 MANUAL 的激情会过，主页会重新变成"PhD 第 1 年快照"。下面是预设的 cadence 让主页保持活着。

### 16.1 月度（每月 1 次，15 分钟）

- [ ] News 加 1 条 milestone（如本月没事 — 不要硬凑，但要确认"没事"是真的没事）
- [ ] 浏览主页一遍，看有无 link rot
- [ ] 看 GitHub Issues / Discussions（如果开了）

### 16.2 季度（每 3 个月，1 小时）

- [ ] BibTeX 与 Google Scholar 对账（确保新 paper 都加到 `_bibliography/papers.bib`）
- [ ] CV PDF 检查 / 更新（如有新内容）
- [ ] 头像：看一眼是否还像现在的自己（PhD 5 年中可能换发型 / 戴眼镜等）
- [ ] Blog：发布 1 篇（如有素材；不强求）
- [ ] 跑一次 Lighthouse 确认性能没退化
- [ ] Footer "Last updated" 改成本月

### 16.3 年度（每年 1 次，半天）

- [ ] 完整重读主页（"如果第一次访问，30 秒内 get 我是谁吗？"）
- [ ] Hero bio 是否还反映当前研究方向（PhD 后期 vs 前期方向可能变化）
- [ ] 头像是否还合适
- [ ] Research bullets 是否还准确（去掉已经不做的方向，加上新的）
- [ ] 跑 §10 自检对照表全部 62 项
- [ ] 让 advisor / labmate 看一遍

### 16.4 触发性更新（事件驱动）

下列事件发生后 24 小时内必须更新：

| 事件 | 应该更新 |
|---|---|
| Paper 接受 / 公布 | News + BibTeX + Publications section |
| Invited talk / panel 接受 | News |
| 大 OSS release（≥100 stars 或 mentioned in big paper） | Code section + News |
| 实习 / visiting position 开始 | Bio 段（如果改身份）+ News |
| 拿奖 / 入选 | News + 相关 paper 旁加 award 标记 |
| 换 advisor / 换机构 | Bio 段重写 + 所有外部 profile 同步 |
| PolyU 改邮箱域名 / 改 visual identity | Hero contact + Footer |

### 16.5 触发性重写（年度以上重大事件）

下列事件发生后建议 **重新跑 §9 Phase 2-4**：

- PhD 毕业 / 拿到 offer
- 转 postdoc / 入职 industry
- 重大研究方向转变（如从 RLHF 转到完全无关方向）
- 拿到大奖（如 ICLR Outstanding Paper / 入选 forbes-30u30 类）

---

## 附录 A：参考样本速查表

按"对 Yanjun Chen 的相关度"排序：

### 最相关（PhD 学生 / 同 level 年轻学者 — 直接模仿）

| 学者 | URL | 借鉴点 |
|---|---|---|
| Eric Wallace | ericswallace.com | 7 bullet 研究方向 + Selected pub + Media Coverage |
| Aviral Kumar | aviralkumar2907.github.io | 三页结构（Home / Pubs / Contact）|
| Sherry Wu | cs.cmu.edu/~sherryw | "Hello World!" + 中文名 + Publication 按主题 |
| Robin Jia | robinjia.github.io | al-folio + 4 个研究问题 inline 引论文 |
| Tao Yu | taoyds.github.io | 三方向卡片 + Selected/All tab + Code 单列 + 量化 impact |

### 措辞标杆（一句话身份描述）

| 学者 | 句式 |
|---|---|
| Sasha Rush | "ML Researcher. Cursor. NYC." 三件套 |
| Karpathy | "I like to train deep neural nets on large datasets" hobby 句式 |
| Jason Wei | "I am an American AI researcher." 极简身份 |
| Liang | "I am drawn to simple things..." 品味驱动 |
| Jan Leike | "Optimizing for a post-AGI future where humanity flourishes." mission 句 |

### 视觉极简标杆

| 学者 | 特点 |
|---|---|
| John Schulman (joschu.net) | 极简到几乎纯 HTML，5 个 nav 项 |
| Christopher Manning | "Hand-rolled HTML, last modified" 页脚 |
| Karpathy | "0 frameworks" 静态站 |
| Danqi Chen | <200 行 HTML，中文发音按钮 |

### Blog-first 范式

| 学者 | 范式 |
|---|---|
| Lilian Weng (lilianweng.github.io) | 首页就是 blog feed，"documenting learning notes since 2017" |
| Chris Olah (colah.github.io) | 按主题分类 blog + "Views my own" disclaimer |

### 技术参考（al-folio 真实案例）

| 学者 | URL | 备注 |
|---|---|---|
| Maruan Al-Shedivat | maruan.alshedivat.com | al-folio 作者本人 |
| Yuan Chiang | chiang-yuan.github.io | UC Berkeley PhD，TIL blog |
| Siddharth Mishra-Sharma | smsharma.io | 简化版 al-folio |
| Robin Jia | robinjia.github.io | 上面已列，是 al-folio 用户 |

### 反例（不要学）

| 学者 | 问题 |
|---|---|
| Yann LeCun (yann.lecun.com) | SSL 过期不修 + 90s table layout（Turing 级特权）|
| Hinton (cs.toronto.edu/~hinton) | 把 Turing 藏 awards 子页（地位红利）|
| Yejin Choi | News 区顶部满屏 media（MacArthur 级影响力才合理）|
| Tat-Seng Chua (NUS) | 堆 fellow / chair / grant 金额（senior 路线，PhD 抄会显空）|
| Igor Mordatch | 无主页占位（白底头像 = "作者已离场"）|

---

## 附录 B：决策记录

记录本手册做出的每个非显然决策及理由。

### B.1 为什么推荐 al-folio 而非保留 Next.js？

- 5/5 真实 PhD 主页都用类似 al-folio 的 Jekyll 学术模板
- BibTeX 直接 import 节省维护成本
- 暗模式 / Math / Citation badges 内建
- Yanjun 在 Next.js 上花的时间主要用于"自造装饰"（粒子 / Chart.js / Framer Motion），这些都要删 — 删完后实际剩下的功能 al-folio 默认就有
- 长期看，al-folio 维护成本远低于自维护 Next.js

但**不强制**：如用户重视技术栈连贯性，保留 Next.js + 减法重写也是合理路径，本手册的其他规范仍 100% 适用。

### B.2 为什么 PhD 阶段不要独立 Honors section？

调研中独立 Honors section 的人主要是 mid-career PI（已有 Sloan / NSF CAREER 这种"重磅"奖项）。PhD 阶段如果只有 1-2 个 honorable mention / scholarship，单列一个 section 反而显得 "thin"。

更好做法：
- 学 Sasha Rush：inline 在 bio 一句话（"... NSF GRFP honorable mention 2024 ..."）
- 学 Bryan Hooi：inline 在 paper 旁（"... (EMNLP Outstanding Paper Award)"）
- 学 Aditi Raghunathan：如果奖项已经 ≥6 个，dump list 不分级

### B.3 为什么 zk-cookbook 副业要放？

不放也行（方案 B），但**建议放**（方案 A）的理由：
- 用户在 `battam1111` 的 README 已经主动 surface 了这部分（"Building" section）
- 调研中工业经历 / 副业 / 多元身份的处理是常见的（Frankle / Sherry Wu / Tao Yu）
- 完全不放反而暴露"双重身份"的张力（commit author `bounty-agent@chenyanyun.local` 会被仔细的 reviewer 注意到）

放置策略：
- "Beyond Research" 段
- 1 段 ≤80 词
- 页面最底
- 用客观措辞（"I also run X"），不夸大

### B.4 为什么禁用 Hero quote banner？

调研中 50+ 学者**0 人**使用 hero quote / 大字 tagline。这不是禁忌，是不存在 — 学术圈从不用这种 marketing 套路。

PhD 主页的 hero 应该是：
- 头像 + 姓名 + 一行身份 + 链接行

而非：
- 全屏背景图 + 居中大字"AI for Good"

### B.5 为什么 dark mode 是基线要求？

调研中现代学术主页（al-folio / Hugo Blox / Tri Dao / Aditi）都支持暗模式。
Yanjun 当前主页 README 写了"Dark Mode (coming soon)" — **要么实现，要么从 README 删掉**。

实现成本：al-folio 默认有；Next.js 用 Tailwind dark variant + localStorage 也是 1 个周末工作。

### B.6 为什么 News 是 "milestone-only" 而非日报？

调研中两类 News 风格：
- **milestone-only**（Manning "What's New"、Robin Jia）：5-10 条，每条带日期，覆盖最近 12-18 个月
- **影响力炫耀**（Choi）：News 占顶部满屏，列 TIME 100 / UN briefing 等

PhD 阶段：
- Choi 风格需要 MacArthur 级别影响力，PhD 没有底气
- Manning 风格是 PhD 黄金模板：低成本展示"活跃度"，不显得"在 spam updates"

### B.7 为什么不建议 Selected Publications 用大缩略图卡片网格？

调研中 paper 列表的两种范式：
- **紧凑文字列表**（80%+ 学者）：标题 + 作者 + venue + 链接（≤4 个）
- **缩略图卡片**（少数，Eric Wallace / Sherry Wu）：每篇有 1 张 method figure + TLDR

大缩略图卡片网格（Pinterest 风）在学术圈**不存在**。看起来更像"作品集"个人品牌站，不是学术主页。

PhD 阶段推荐：紧凑文字列表 + 可选 TLDR（≤2 句）。

### B.8 为什么 50+ 样本中没人用 Next.js 写学术主页？

不是因为 Next.js 不好，而是因为：
- 学术圈历史惯性（Jekyll / WordPress / Plain HTML 已经"够用了"）
- BibTeX 自动 import 是 al-folio / Hugo 等的杀手 feature，Next.js 生态没有同等成熟的实现
- 静态导出 + GitHub Pages 部署比 Vercel / Cloudflare 更"圈内"
- React 19 / Next.js 15 对学术圈是 over-engineered（功能不需要那么多）

Yanjun 当前主页用 Next.js 是**特例**，调研中（组 10 的 A5）发现 Next.js 学术模板生态尚未成熟（仅个位数仓库，单个 <300 stars）。

---

**本手册版本**：v1.2（v1.1 + 用户事实信息集成）
**编制完成**：2026-05-22
**v1.2 改动**：基于用户 2026-05-22 回答的 6 项占位项，集成实际信息 — 中文名"陈彦筠"、12 篇 paper 实测列表（Scholar）、C3 paper 完整信息（arXiv:2603.06859 + in submission 措辞）、头像 self-taken license、副业合规已 due diligence（**§14 整章重写：取消"加 disclaimer"路径，改"低调放"** — 这是关键修正）、不加发音按钮（§6.6 + §11.4 音频规范删除）
**v1.1 改动**：adversarial critic 集成
**下一步**：用户审阅 + 决定 3 个 Phase 1 决策（技术栈 al-folio vs Next.js / Mission 句版本 / 副业放法），进入 Phase 2 实施

---

## 收敛声明

本手册达到的"彻底收敛"标准（用户读完即可动手）：

✅ **决策维度齐全**：信息架构（§4-5）/ 视觉（§3）/ 措辞（§6）/ Selling 哲学（§7）/ 技术栈（§8）/ 合规（§14）六大维度均有可执行规范
✅ **三方案 trade-off 透明**：al-folio / Hugo Blox / 保留 Next.js 各自的成本收益（§8.1）
✅ **核心规则有证据**：每条规范在 50+ 样本中可追溯（附录 A）+ 每个非显然决策有 rationale（附录 B）
✅ **执行可分解**：Phase 1 决策 → Phase 2 内容 → Phase 2.5 stakeholder review（§15.2）→ Phase 3 实施 → Phase 4 验证
✅ **63 项自检对照表**：禁用清单 / 措辞 / IA / 个性元素 / 技术 / SEO / 事实核实 / Identity sync 八大维度
✅ **红线已标注**：事实核实（§10.7 #51-58）任一 ❌ 都禁止上线
✅ **回退路径**：§15.4 Rollback plan + `git tag pre-rewrite-...` 备份
✅ **长期维护**：§16 月 / 季 / 年度 cadence

### v1.2 已解决的"占位项"

| 项 | 用户答复 | MANUAL 落点 |
|---|---|---|
| 中文名 | "陈彦筠" | §5.1 hero / §6.6 / §13.4 JSON-LD |
| 发音按钮 | 不加 | §6.6 + §11.4 已删音频规范 |
| Paper 列表 | Scholar 公开（149 cites / h-5 / i10-4 / 12 篇）| §5.3 已用 Scholar 实测数据替换 |
| C3 paper | 在投，arXiv:2603.06859，不暴露 venue | §5.3 Selected + §11.2 双盲规则呼应 |
| 头像 license | self-taken | §11.5 / §10.7 #55 |
| PolyU 副业政策 | 已查 + 已申请 + "自己说反而引起注意" | §14.1 整章重写 — 取消 disclaimer 路径 |
| PolyU CS 学生页规范 | 无统一要求 | §14.3 简化 |

### Phase 1 三大决策（2026-05-22 用户确认）

| 决策点 | 用户答复 | MANUAL 落点 |
|---|---|---|
| **技术栈** | **al-folio** ✅ | §8.2 推荐方案 |
| **Mission 句** | **大佬路线 — Liang 风格 "drawn to..." 句式** | §5.1 hero / §6.2 |
| **Beyond Research 段** | **完全不放** ✅ | §5.7 跳过 / §10.4 #31-32 / §14.1 已自然兼容 |
| **ORCID `Other names`** | ✅ 加 "Y. Chen" + "陈彦筠" | §6.6 + §10.8 #60 |

### 仍需用户在 Phase 2 实施时填写的 2 项

- 🟡 CV PDF 是否需要（如要，准备 PDF 标日期）
- 🟡 是否要 Twitter/X 链接（如不要直接删 hero 那行）

**最终**：用户已完成 6 项事实核实 + Phase 1 三大决策（含 ORCID 变体），可以**直接**进入 Phase 2 内容起草 → Phase 3 al-folio 迁移实施。所有 hard fact + 路线决策已集成。
