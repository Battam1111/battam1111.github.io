# 学术个人主页模版 / Theme 调研

> 调研对象：当前主流的"学术个人主页模版"在 PhD/researcher 群体中的默认结构与外观。
> 用途：为 Yanjun Chen 主页彻底重写时的技术选型 + 视觉参考提供依据。
> 注意：本调研**不假设**用户一定要换技术栈，仅在总结部分给出 trade-off。

---

## A. 主流模版本身

### A1. al-folio (Jekyll)

- **GitHub**：[alshedivat/al-folio](https://github.com/alshedivat/al-folio)
- **Star 数**：~15.6k stars（学术圈第一梯队，远超其他 Jekyll 学术主题）
- **默认 demo URL**：[alshedivat.github.io/al-folio](https://alshedivat.github.io/al-folio/) ✓ 实测可访问
- **支持的 sections**：
  - About / 主页
  - Publications（**自动从 BibTeX 渲染**，含 venue/PDF/code/bib 链接）
  - Blog（含 Distill.pub 风格的长文 layout）
  - Projects（网格卡片）
  - CV（RenderCV 或 JSONResume 格式）
  - News / 新闻流（按时间倒序）
  - Teaching、People、Books、Repositories（GitHub stats 卡片）
- **默认设计语言**：**极简学术风** — 中性色（黑/灰/白 + 蓝色 accent link）、大量留白、Bootstrap 网格、Font Awesome + Academicons 图标、内建明暗双主题（自动跟随系统）。
- **依赖 / 复杂度**：Ruby + Jekyll + Bundler；MathJax（数学公式）；GitHub Pygments（代码高亮）；可选 ChartJS / Mermaid / TikZ。**中等复杂度**：YAML 配置门槛低，但调试本地 Ruby 环境对非工程背景的人略麻烦。Lighthouse 移动端 99/100。
- **优势 / 劣势（PhD 学生角度）**：
  - 优势：BibTeX 自动渲染（不必手写每篇论文 HTML）、社区文档极成熟、明暗主题开箱即用、citation badges、社区 fork 多便于借鉴。
  - 劣势：Jekyll 构建慢（大站点 30s+ rebuild）、Ruby gem 依赖偶尔锁版本失败、自定义深度装饰需要懂 SCSS。
- **典型用户**（实测访问见 B 部分）：B1 Maruan Al-Shedivat（作者本人）、B4 Yuan Chiang（UC Berkeley PhD）、B5 Siddharth Mishra-Sharma（BU 教授 + Anthropic）。

---

### A2. Hugo Blox（原 Wowchemy / Hugo Academic）

- **GitHub**：[HugoBlox/theme-academic-cv](https://github.com/HugoBlox/theme-academic-cv)
- **Star 数**：~4.9k stars（外加历史 Wowchemy 主仓的累积 user base，官方宣称 250k+ 研究者使用过）
- **默认 demo URL**：[hugoblox.com/templates/academic-cv](https://hugoblox.com/templates/academic-cv/) ✓ 实测可访问（落地页 + demo 嵌入）
- **支持的 sections**：
  - Publications（**BibTeX / DOI 自动 import**）
  - Projects（卡片网格）
  - Talks / 演讲
  - Team members（实验室页面常用）
  - Blog / News
  - Courses / Lectures
  - Jupyter Notebook 与 RMarkdown 内嵌
- **默认设计语言**：**现代学术风**（比 al-folio 更"产品化"一点）— 大 hero banner、社交图标圆形、Material Design 影响明显、整体偏蓝白。**dark mode 支持完善**。
- **依赖 / 复杂度**：Hugo Extended + Node.js（资产打包）；属于 HugoBlox 生态（Ownable CMS + Hugo Chat AI 编辑）。**中等复杂度**：不写 Hugo 模板能用，但深度自定义需要懂 Hugo partial。
- **优势 / 劣势（PhD 学生角度）**：
  - 优势：构建速度极快（Hugo Go binary，秒级）；widget 化页面块（Markdown 文件即一个 section）；社区品牌曾叫 Wowchemy / Academic，迁移成本高（许多老主页仍在用）。
  - 劣势：HugoBlox 商业化方向明显（推付费模板/CMS）；2023 年 Wowchemy → HugoBlox 改名风波让许多用户感到方向不稳；模板自带的装饰元素（hero、icon、banner）多，要"减法"需要费功夫。
- **典型用户**：B2 Cédric Picron（KU Leuven PhD）、B3 Matteo Courthoud（Zurich PhD）。

---

### A3. Jekyll Minimal Light (yaoyao-liu)

- **GitHub**：[yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light)
- **Star 数**：~987 stars，**865 forks**（fork:star 比异常高，说明大多数用户是直接 fork 自用而非给 star）
- **默认 demo URL**：[minimal-light-theme.yliu.me](https://minimal-light-theme.yliu.me/) ✓ 实测可访问
- **支持的 sections**：
  - About / 简介
  - Research Interests（标签列表）
  - News（时间流）
  - Publications（**手写 `_data/publications.yml`，不自动从 BibTeX**）
  - Services（reviewer 列表）
  - 链接：Google Scholar / CV / GitHub / LinkedIn / Twitter
- **默认设计语言**：**极简单页风** — 单列纵向流、Sans Serif 字体、灰度色板、几乎没有装饰。dark mode 支持。
- **依赖 / 复杂度**：Jekyll + Ruby + GitHub Pages。**最低复杂度**（在本调研所有模版里）— 单页 + 几个 YAML 就能跑。
- **优势 / 劣势（PhD 学生角度）**：
  - 优势：可能是学术圈最容易上手的模板；视觉上"看着就专业"；零装饰元素，绝不会"过花哨"。
  - 劣势：publications 要手写 YAML（不像 al-folio 直接吃 .bib）；定制深度浅、没有 blog/project 详细页 layout；不适合内容多的用户。
- **典型用户**：作者 yaoyao-liu（Max Planck Institute PhD）本人 + 几百个 fork 自用的研究生（公开 demo 即是 yliu 自己的页面变体）。

---

### A4. Academic Pages (Jekyll, Minimal Mistakes fork)

- **GitHub**：[academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io)
- **Star 数**：~17k stars（与 al-folio 同级别）
- **默认 demo URL**：[academicpages.github.io](https://academicpages.github.io/) ✓ 实测可访问
- **支持的 sections**：
  - Publications、Talks、Teaching、Portfolio、Blog、CV — 所有学术常见类型齐全
  - **数据驱动**：用 TSV 文件生成 Publications/Talks 的 Markdown（脚本辅助）
- **默认设计语言**：**侧栏 + 主区** 双栏布局（区别于 al-folio 的顶部 nav）；左侧固定 profile 卡片 + 社交链接；偏经典 academic blog 风格（衍生自 Minimal Mistakes）。
- **依赖 / 复杂度**：Ruby + Jekyll + Bundler，支持 Docker / VS Code DevContainer。**中等复杂度**。
- **优势 / 劣势（PhD 学生角度）**：
  - 优势：fork 即用、TSV → MD 脚本对论文多的人友好、Minimal Mistakes 继承的成熟样式系统。
  - 劣势：侧栏布局放在窄屏会折叠到顶部、整体风格比 al-folio 略"老派"、自带装饰比 minimal-light 多。
- **典型用户**：搜索结果显示大量 PhD 学生 fork 使用（fork 数仅次于 al-folio）。

> **替代说明**：原调研清单提到的 `saadeghi/daisyui-academic` 经验证 **不存在**（404）。Tailwind 纯学术模板生态目前没有 al-folio 级别的统治性方案，最接近的是 A5 的 Next.js + Tailwind 类模板。因此 A4 选用 academicpages 替补，覆盖另一类主流 Jekyll 学术风格。

---

### A5. Next.js + Tailwind 学术模版（与 Yanjun 当前栈相同）

- **代表仓库 1**：[tovacinni/research-website-template](https://github.com/tovacinni/research-website-template)（~228 stars，94 forks）
- **代表仓库 2**：[lydhr/NextJSAcademicTheme](https://github.com/lydhr/NextJSAcademicTheme)（~39 stars）
- **默认 demo URL**：
  - tovacinni: [tovacinni.github.io/research-website-template](https://tovacinni.github.io/research-website-template/) ✓ 实测可访问
  - lydhr: [nextjs-academic-theme.vercel.app](https://nextjs-academic-theme.vercel.app/) （未实测，但 Vercel 部署一般有效）
- **支持的 sections**（tovacinni 版）：
  - About、Publications（数据驱动，字段含 year/conference/title/authors/PDF/code/BibTeX/TLDR/image/awards）
  - Section 顺序可在 `src/data/section-order.ts` 重排
- **默认设计语言**：**极简 Tailwind 风** — 类似 al-folio 但纯 React，不用 Bootstrap；典型的 Tailwind utility 配色（neutral grays + 单一 accent）。
- **依赖 / 复杂度**：Next.js + React + TypeScript + Tailwind CSS（与 Yanjun 当前栈**完全一致**）。**中等复杂度**：会用 React/TS 的人立刻上手；不会的人比 Jekyll/Hugo 入门门槛更高。
- **优势 / 劣势（PhD 学生角度）**：
  - 优势：组件化、TypeScript 类型安全（避免 BibTeX 字段写错）、可与 Yanjun 当前项目无缝复用；可静态导出到 GitHub Pages。
  - 劣势：**生态远未成熟** — 没有 al-folio / Hugo Academic 级别的统治性方案；自带 section / widget 数少；维护人少（多数是个人项目）；BibTeX 解析需自己接 `@orcid/bibtex-parse-js` 之类库。
- **典型用户**：tovacinni 作者本人（CMU/NVIDIA 研究员）使用该模板；用户基数远小于 al-folio。

---

## B. 真实使用案例（5 个 PhD/researcher 主页）

### B1. Maruan Al-Shedivat — Director of ML, Genesis Therapeutics（前 CMU/Google AI/OpenAI）

- **URL**：[maruan.alshedivat.com](https://maruan.alshedivat.com) ✓ 实测可访问
- **用的模版**：**al-folio**（作者本人创建的主题；footer "Powered by Jekyll with al-folio theme"）
- **自定义了什么**：几乎无 — 直接使用默认配色 / 字体 / nav 结构；只换了 profile 图、bio、publications BibTeX。
- **整体效果**：顶部 nav（about/bio/code/publications/teaching）+ 大头像 + bio 段落 + 研究兴趣 + 教育/工作历史 + 社交图标。**极简、典型 al-folio 默认外观**。
- **借鉴点**：标准的 al-folio 用法参考；说明 al-folio 默认即"足够好"，不需要做大改动就能产生专业感。

### B2. Cédric Picron — Computer Vision Engineer, Toyota Motor Europe（KU Leuven PhD 2024）

- **URL**：[cedricpicron.github.io](https://cedricpicron.github.io) ✓ 实测可访问
- **用的模版**：**Wowchemy / Hugo Academic**（footer 显式声明 "Published with Wowchemy"）
- **自定义了什么**：标准 widget — hero 区头像 + bio、interests 标签云、教育时间线（带学校 logo）、featured research showcase、recent publications（带封面图 + PDF/code 链接）。三档主题切换（Light / Dark / Auto）。
- **整体效果**：很"模板化"但很专业；hero 大头像 + 居中文字、卡片网格、Material Design 影子明显。
- **借鉴点**：教育时间线带 institutional logo 是 Wowchemy 的标志性 widget，视觉很有信息密度；publications 卡片缩略图列表很整洁。

### B3. Matteo Courthoud — Independent Researcher（Zurich Econ PhD）

- **URL**：[matteocourthoud.github.io](https://matteocourthoud.github.io) ✓ 实测可访问
- **用的模版**：**Wowchemy / Hugo Academic**
- **自定义了什么**：custom 课程页面（多门 ML/Econ 课）、Newsletter section、Substack-like 配色、用山脉摄影做 hero banner。
- **整体效果**：比 B2 更"内容驱动"，首页就是大段 blog 索引和课程入口；明显从 academic 主题向"个人品牌站"演化。
- **借鉴点**：用 hero 摄影替代默认 banner 是常见自定义；posts grid + newsletter 模块的组合是经济学博士的差异化做法。

### B4. Yuan (Cyrus) Chiang — PhD Candidate, UC Berkeley + Google X

- **URL**：[chiang-yuan.github.io](https://chiang-yuan.github.io) ✓ 实测可访问
- **用的模版**：**al-folio**（footer "Powered by Jekyll & al-folio. Hosted by GitHub Pages"）
- **自定义了什么**：8+ 社交平台图标整合（Scholar / GitHub / LinkedIn / Twitter / ORCID / ResearchGate / Publons）；TIL blog（Today I Learned）作为内容钩子。
- **整体效果**：标准 al-folio 顶部 nav + 大头像 + 新闻流 + 论文 + 博客；视觉与 B1 高度相似（同一模板）。
- **借鉴点**：多平台学术图标列表是 PhD 标配；"TIL" 风格 blog 是低门槛的内容更新方式（不用写完整论文也能展示活跃度）。

### B5. Siddharth Mishra-Sharma — Assistant Prof, Boston University + Anthropic

- **URL**：[www.smsharma.io](https://www.smsharma.io) ✓ 实测可访问
- **用的模版**：**al-folio**（GitHub topic 列表中归为 al-folio user）
- **自定义了什么**：相对默认有所简化 — 把多个 section 压缩为单页竖排（Research Interests / Teaching / Background / Misc / Contact），更接近"个人介绍页"而非"完整学术站"。
- **整体效果**：纯文字 + 一张头像 + 几个外链；几乎没有图片或卡片。**比默认 al-folio 更极简**。
- **借鉴点**：证明 al-folio 可以被"减法"到很轻的状态；对内容不多的早期阶段研究者很合适；"misc"（个人趣味，cycling/cat）section 是亲和力增强器。

---

## 总结（trade-off 分析）

**Yanjun Chen 当前状态**：Next.js 15 + React 19 + Tailwind CSS 4 + Framer Motion，部署在 GitHub Pages（静态导出）。问题：粒子背景、Chart.js 学术指标、过多动画 → "太花哨、和主流不一致"。

**与主流模版的对比**：本调研覆盖的 5 个真实 PhD/researcher 主页（B1–B5）**全部**采用极简学术风：中性配色、零或极少装饰动画、内容驱动布局。没有一个使用粒子背景或仪表盘式数据可视化。这印证用户的判断 — 当前 Yanjun 主页的装饰程度确实偏离学术主流。

**三个方案的 trade-off**：

| 方案 | 学习成本 | 风格契合 | 迁移成本 | 长期维护 | 灵活度 |
|------|---------|---------|---------|---------|--------|
| **迁移到 al-folio** | 中（学 Jekyll/Ruby） | ★★★★★（标杆） | 高（推翻当前栈） | 极低（社区维护） | 中 |
| **迁移到 Hugo Blox** | 中（学 Hugo widget） | ★★★★☆（略产品化） | 高（推翻当前栈） | 低（HugoBlox 团队） | 中 |
| **保留 Next.js 重写** | 低（已熟悉） | ★★★☆☆（取决于设计） | 低（删装饰 + 重做布局） | 高（自己维护） | 极高 |

**推荐方案**：取决于用户对"维护负担"vs"风格保真度"的权衡。如果用户**不想长期手动维护**主页（更想专注研究），**al-folio 是最稳的选择**（B1/B4/B5 三位代表都用它，外观即为学术圈共识）。如果用户**重视和当前技术栈连贯性 + 高灵活度**，则保留 Next.js + 做减法重写是合理的，但需明确接受"风格独立维护"的代价。

**如果继续用 Next.js，从主流模版可借鉴的核心 patterns**：

1. **极简调色板**：中性灰度 + 单一 accent 色（B1/B5 都只用蓝/灰），删除粒子/渐变背景。
2. **publications-first 布局**：顶部 nav 一定有 Publications 入口，论文条目用"标题 + 作者 + venue + PDF/code 链接 + 可选缩略图"的紧凑卡片（参考 al-folio 默认）。
3. **News / Updates 时间流**：首页放 5–10 条最新动态（B1/B4 标配），低成本展现"活跃度"。
4. **明暗双主题**：所有 5 个模版都支持，已成学术主页基线。
5. **教育/工作时间线**：B2 的 Wowchemy widget 风格（带 institutional logo）信息密度高。
6. **删掉所有非内容性动画**：B1–B5 没有任何一个使用 Framer Motion 风格的入场动画；Chart.js 仪表盘在学术主页**找不到先例**。
7. **BibTeX 单一信息源**：用 `bibtex-parser` 在 build 时解析 `.bib` 文件生成 publications（避免手写 JSON 与 .bib 双份维护）。

---

## 数据来源

调研日期：2026-05-22 (UTC+8)

- 模板仓库：通过 [GitHub topic: al-folio](https://github.com/topics/al-folio)、[topic: research-website](https://github.com/topics/research-website)、[topic: academic-website](https://github.com/topics/academic-website) 列表交叉验证
- 真实用户主页：5/5 实测访问可达，footer 模板标识或社区记录确认归属
- A5 中 `saadeghi/daisyui-academic` 经验证不存在（404），已用 academicpages 替补 A4 槽位
