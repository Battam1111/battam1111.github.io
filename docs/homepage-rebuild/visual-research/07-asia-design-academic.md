# 视觉调研 07：港澳台 / 大陆 design-conscious 学者主页

**调研日期**：2026-05-22
**调研员**：Visual Research Subagent (group 7 — Asia design-academic)
**审视对象**：港澳台 + 大陆 HCI / visualization / design 方向 PhD / Faculty 个人主页
**目标受众类比**：Yanjun Chen（PolyU PhD，香港本地，中文名「陈彦筠」，英文为主双语 hero）

---

## 入选样本（5 个实测可达 + 1 个补充对照）

| # | Name | Affiliation | Direction | URL | 实测 |
|---|------|------------|-----------|-----|------|
| 1 | Xiaojuan Ma 麻曉娟 | HKUST CSE | HCI / LLM 交互 | https://www.cse.ust.hk/~mxj/ | OK |
| 2 | Mingming Fan 范明明 | HKUST(GZ) APEX | HCI / Accessibility / AI | https://www.mingmingfan.com/ | OK |
| 3 | Wei Zeng 曾炜 | HKUST(GZ) CMA | Visualization / VR / Creative | https://zeng-wei.com/ | OK |
| 4 | Nan Cao 曹楠 | Tongji D&I / iDVx | Data Vis × Design | http://nancao.org/ | OK（曾在 nancao.github.io，已 301 至 nancao.org，Jekyll/al-folio 派系） |
| 5 | Yuhan Luo 罗宇晗 | CityUHK CS / BiWell Lab | HCI / 健康行为 | https://yuhanlolo.github.io/me/ | OK |
| 旁注 | Pan Hui 許彬 | HKUST(GZ) CMA / SyMLab | HCI / Metaverse | https://panhui.people.ust.hk/ | OK，作为「Chinese name as image」反面教材 |

**起初尝试但弃用**：
- `http://www.ycwu.org/`（Yingcai Wu，浙大 vis）— certificate verification error，未实测
- `http://www.cad.zju.edu.cn/home/ycwu/` — 同样 cert 错误
- `https://xiaoyangtao.github.io/`（Yang Shi，Tongji iDVx）— 可达但仅纯文本 minimalist，未给本组带新信号，未列入主榜
- HKUST faculty profile（Huamin Qu 屈華民 ECE）— 制度型 directory page，不是个人站

---

## 逐站详细审视

### 1. Xiaojuan Ma 麻曉娟（HKUST CSE）— https://www.cse.ust.hk/~mxj/

**视觉打分（10 分制）**：3 / 10
极端「上世纪」学者风。代表「HKUST CSE 顶尖 HCI 学者也可以用 1998 年风格 web」这一现实。

**Layout**：
- 单页垂直滚动；fixed top 文字 block（office, email, phone, fax）+ 一行 CV link
- 底部小导航 link（Home / Research / Topics / Publications / Students / Courses / CV）
- 无 sidebar，无 topnav bar

**Typography**：
- 完全 system font，未声明 font-family
- 无 CJK 特殊处理
- 标题用 `**bold**` 转换的粗体，正文 plain `<p>`
- 字号没有显式 scale

**Colors**：
- 纯 monochrome — `#000` on `#fff`
- 链接 default browser blue
- 无 accent / 无层级色

**Hero**：
- 头像 `profileIM-XM7.JPG` 紧跟姓名之下，practical 非装饰
- 没有 hero treatment 概念

**Chinese name**：
- **完全不存在** — 整个 source 里只有 "Xiaojuan Ma"
- 麻曉娟三字在 source 中找不到；纯英文站

**Micro-craft**：
- `***` horizontal rule 当 section 分隔（markdown 的水平线）
- 无 hover / 无动画 / 无 shadow / 无圆角
- spacing 完全靠 default

**Aesthetic**：deliberately anti-design。HKUST 顶尖 HCI faculty 选择「绝不在主页上花一分钟设计」— 把所有信号给到 publication list。

**East-Asian sensibility**：零。完全西式 academic plaintext。

---

### 2. Mingming Fan 范明明（HKUST(GZ) APEX）— https://www.mingmingfan.com/

**视觉打分**：5 / 10
比 Ma 多了 visual hierarchy 和实际的双语 bio block，但仍是 academic-template feel。

**Layout**：
- 单页 vertical scroll
- 锚点导航（About / Paper Awards / Publications 等 in-page anchors）
- 无 sidebar；无固定 topnav

**Typography**：
- 看不到显式 font-family；推断 system 衍生
- 中文段落直接和英文混排，无单独 CJK font stack 声明
- H1-H4 语义层级清晰，但视觉差异主要靠浏览器默认

**Colors**：
- 黑字白底 + default link blue
- 论文 thumbnail 引入轻微杂色但整体仍 neutral

**Hero**：
- `official-2025-headshot.jpg` 紧跟主标题
- 接 bilingual bio 段（英文段 + 中文段）

**Chinese name 处理**：
- 「范明明，现任香港科技大学（广州）...」整段中文出现在 bio
- **不是 image，是真实 text** — 比 Pan Hui 进步
- 中英名平行陈述，未做字体区分

**Micro-craft**：
- 论文条目 thumbnail + 标题 + 作者 + PDF link 一致格式
- 几乎无动画 / 无 hover 效果
- 留白靠 default margin

**Aesthetic**：academic-template + utility。功能完整但不见 designer hand。

**East-Asian**：bilingual mixing **存在但不刻意**。`<html lang="en">` + 中文 inline。靠系统 CJK fallback render。

---

### 3. Wei Zeng 曾炜（HKUST(GZ) CMA）— https://zeng-wei.com/

**视觉打分**：4 / 10
干净，但克制到没个性。Top-nav 主流式 academic.

**Layout**：
- 顶部 horizontal nav bar：HOME / RESEARCH / PUBLICATIONS / TEAM / VITA / BOOKMARK
- 主体单列；内容 first
- 无 hero image / 无 banner（即学者照都没在 above-the-fold 抢镜）

**Typography**：
- 无显式 CSS font 声明
- 标题字号偏小
- 全英为主，中文极少出现

**Colors**：black on white + link blue。无 brand color。

**Hero**：**无传统 hero**。直接文字段落开头。

**Chinese name**：source 中**未见「曾炜」**。纯英文身份。

**Micro-craft**：无 animation / 无 transition / 无 shadow。

**Aesthetic**：minimalist content-first，但**和真正的设计 minimalism 不同** — 这是「省时间」的 minimalism，不是「Dieter Rams」的 minimalism。

**East-Asian**：零信号。HKUST(GZ) 学者也可以完全用西式 academic web。

---

### 4. Nan Cao 曹楠（Tongji D&I / iDVx）— http://nancao.org/

**视觉打分**：7 / 10
**本组最 design-conscious 样本**。Tongji 设计创意学院副院长 + data vis × design 交叉，用的是 **al-folio Jekyll theme 的定制版**。

**Layout**：
- 单列 + top toggle nav（mobile-aware）
- 内容分块：Bio / Awards / Service / Personnel
- 移动端 collapsible nav

**Typography**：
- al-folio 默认 system font stack（Latin 用 system UI / Roboto-ish；CJK 走 OS fallback）
- 无显式 Google Fonts import for Latin（vs. al-folio 默认的若干 font 选项）
- 中文段落无单独 CSS class — 直接靠 `font-family: system-ui, -apple-system, "Segoe UI", Roboto, ...` 后接 CJK fallback

**Colors**：
- 白底 + 深灰 `#333`-ish 文字
- al-folio 标志性的极小 accent（hover color、blockquote bar）
- 整体 high-contrast minimalism

**Hero**：
- 左上角 `prof_pic.jpg`（中等尺寸）
- 名字 + affiliation 紧随
- 右/底部 contact 信息
- al-folio 标准 about page 布局

**Chinese name 处理**：
- 「曹楠」作为 substantial heading 与 "Nan Cao" 平行
- **本组唯一把中文名当作 typographic peer 而非装饰**
- 团队成员也是中英双名并列 + pinyin parens

**Micro-craft**：
- al-folio 自带的 fade-in transitions、subtle link hover、generous vertical rhythm
- News timeline 风格 update list
- 移动端 hamburger 顺滑

**Aesthetic**：**al-folio + designer sensibility**。证明 Yanjun 同款 al-folio 也能做到 design-respectable — 关键是 content 的 typographic discipline + 中英平等待遇 + 该有的克制。

**East-Asian**：parallel bilingual 是核心策略。**中英文段落对称呈现，无主次**。中文用系统 CJK fallback，但因为字号/spacing 控制得好，看起来不出戏。

---

### 5. Yuhan Luo 罗宇晗（CityUHK CS / BiWell Lab）— https://yuhanlolo.github.io/me/

**视觉打分**：4 / 10
GitHub Pages 上的 academic template — 干净，但和 Wei Zeng 一样克制到没个性。

**Layout**：
- 顶部 nav（About / Publication / BiWell Lab / Teaching / Misc.）
- 中心化 profile section
- 单列内容流

**Typography**：
- 默认 sans-serif；无显式 font-family
- 主标题 "YUHAN LUO" 全大写
- 无 CJK 字体声明

**Colors**：black on white，无 brand 色。

**Hero**：`assets/img/me.jpg` + "Assistant Professor CS@CityUHK" + office + email。Standard academic.

**Chinese name**：source 中**未见**。纯英文。

**Micro-craft**：无 animation / 无 hover detail。

**Aesthetic**：minimalist academic。功能合格但不出彩。

**East-Asian**：缺席。即使是 CityU 香港语境也没用 bilingual。

---

### 旁注：Pan Hui 許彬（HKUST(GZ) CMA）— https://panhui.people.ust.hk/

**为什么列在旁注而非主榜**：作为 **「中文名当 image 嵌入」的典型反面教材** 列出来对照 — Pan Hui 的中文名是 `images/cname.jpg`，纯 raster 图片，不是 text。这是 2000s web design 时代为了避开字体兼容性留下的遗物。**Yanjun 绝不能这么做**。

视觉打分：2 / 10。整体上比 Xiaojuan Ma 更原始（中文名居然是图）。

---

## Cross-cutting：港澳台 / 大陆 design-conscious 学者主页的视觉模式

### 模式 A：「学术 plaintext / 反设计」（极常见）
- **代表**：Xiaojuan Ma、Wei Zeng、Yuhan Luo、Pan Hui
- **逻辑**：「我的论文就是我的设计 portfolio」
- **共同 traits**：
  - 无 hero treatment / 无 brand color
  - 中文名经常缺席甚至当 image
  - System font + black-on-white + default link blue
  - Spacing 靠默认；layout 靠重力
- **对 Yanjun 的启示**：**al-folio default 比这类还略好** — Yanjun 现在的「丑」是 template 框架的丑，不是这类「反设计」的丑。模式 A 不是模仿对象，是底线对照组。

### 模式 B：「academic-template + functional bilingual」（中流）
- **代表**：Mingming Fan
- **逻辑**：bilingual bio 段证明你能讲中文，但视觉上不投入
- **共同 traits**：
  - 中文段是 real text 不是 image（进步！）
  - 标题层级清晰但视觉对比靠默认
  - 论文条目 thumbnail 化（这是和模式 A 的最大差别 — 至少认真做了论文展示）
- **对 Yanjun 的启示**：**论文 thumbnail 是低成本高回报的 visual upgrade**。

### 模式 C：「al-folio + designer discipline」（罕见但是目标）
- **代表**：Nan Cao
- **逻辑**：用同款主流 academic theme，但 **typography discipline + bilingual parity + content density 控制** 让它脱颖而出
- **关键 traits**：
  - 中文名和英文名等价 typographic peer
  - 团队/学生中英 + pinyin parens 三轨展示
  - News timeline + sectional rhythm 干净
  - Mobile-aware nav
- **对 Yanjun 的启示**：**Yanjun 用同款 al-folio，目标就是模式 C 而不是模式 A/B**。改 theme 不如改使用 theme 的方式。

---

## East-Asian typography handling 的实际现状（重要发现）

**反直觉的结论**：港澳台 / 大陆 design-conscious 学者主页里，**真正认真做 CJK typography 的极少**。绝大多数：
1. 中文名完全缺席（纯英文身份）
2. 中文名当 image 嵌入（Pan Hui 模式）
3. 中文名是 text 但 **靠系统 CJK fallback render，无显式 font-family**（Mingming Fan、Nan Cao 模式）

**没有看到任何一个**显式声明 Source Han Sans / Noto Sans CJK / 思源系列字体 stack 的。这有两个原因：
- 性能：CJK web font 体积巨大（即使 subset 也常 1-2MB），加载体验差
- 实用：现代 OS（macOS / Windows / iOS / Android）自带的系统 CJK 已经足够好（苹方、微软雅黑、PingFang TC、思源在 macOS 已内置）

**对 Yanjun 的实操含义**：
- **不要去 import Noto Sans SC web font** — ROI 很低
- 应该做的是：在 `font-family` stack 里**显式列出 PingFang SC / PingFang TC / 苹方 / Microsoft YaHei / Source Han Sans SC / Noto Sans CJK SC** 作为 fallback，让系统替你 render
- 例：
  ```css
  font-family:
    -apple-system, BlinkMacSystemFont,        /* macOS/iOS Latin */
    "Segoe UI",                                /* Windows Latin */
    "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "PingFang TC",              /* macOS CJK */
    "Microsoft YaHei", "Microsoft JhengHei",   /* Windows CJK */
    "Source Han Sans SC", "Noto Sans CJK SC",  /* fallback */
    sans-serif;
  ```

---

## 3 条可借鉴给 Yanjun 的具体策略

### 策略 1：**al-folio 不丢人，丢人的是不用心** — 学 Nan Cao
**信号**：Tongji 设计学院副院长用同款 al-folio，照样可以是本组视觉打分最高的样本（7/10）。
**给 Yanjun 的具体做法**：
- 保留 al-folio scaffold（不必换 theme）
- 在 `_pages/about.md` 里**让「陈彦筠 / Yanjun Chen」中英名等价并列**（不是「Yanjun Chen (陈彦筠)」附属括号样式）
- 团队/合作者 listing 用「英文名 + 中文名 + pinyin parens」三轨（如果适用）
- News timeline 改成 Nan Cao 那种 chronological 干净排列，不要 al-folio default 的 bullet list 堆叠
- 移动端 nav 必须 hamburger 化（al-folio 自带，但要 verify）

### 策略 2：**中文 hero 字段的 typography discipline** — 系统 CJK fallback 即可，但要显式声明
**信号**：本组**没有一个**站靠 web font 解决 CJK。全部用系统 fallback。
**给 Yanjun 的具体做法**：
- hero 显示「陈彦筠」时**绝对不要嵌入图片**（避免 Pan Hui 模式）
- CSS `font-family` stack **显式列出** PingFang SC + PingFang TC（macOS）、Microsoft YaHei + Microsoft JhengHei（Windows）、Noto Sans CJK SC（fallback）
- 给中文名一个独立的 `letter-spacing` 调整（CJK 不像 Latin，字间距默认偏挤，可以试 `letter-spacing: 0.05em` 给一点呼吸感）
- 中英名垂直叠放 + 略小的中文字号（中文名 0.7-0.8× 英文名字号通常比例对）

### 策略 3：**论文条目用 thumbnail，这是低成本视觉跃迁** — 学 Mingming Fan
**信号**：模式 A 和 B 唯一的视觉差别就是「论文有没有 thumbnail」。这是 al-folio 也支持的（publications 配 `preview` 字段）。
**给 Yanjun 的具体做法**：
- 每篇论文配 teaser 图（图就是论文 fig 1 截图也行，能传达「这是关于什么的论文」即可）
- al-folio `_bibliography/papers.bib` 里加 `preview = {paperN-teaser.png}` 字段
- 图片尺寸控制在 300-500px 宽，统一比例（推荐 16:9 或 4:3 保持一致）
- 这一项做到，立刻从模式 A/B 跳到 ≥模式 C 的视觉档位

---

## 给 Yanjun 的 baseline 对照

**Yanjun 当前 al-folio default 的处境**：
- 比模式 A（Xiaojuan Ma / Yuhan Luo / Wei Zeng）已经强一些 — 至少 al-folio 有 sectional layout、移动端响应、subtle micro-craft
- 比模式 B（Mingming Fan）相当 — 因为模式 B 本质就是 al-folio-ish template + bilingual bio
- 距离模式 C（Nan Cao）的差距，不是 theme 差距，是 **typography discipline + content density**：中文名要平等待遇、论文要 thumbnail、news timeline 要 chronological discipline

**「丑」的真正原因**：al-folio default 给的是模式 A/B 的视觉档位，因为用户没主动做 typography discipline 上的细节。从 default 到 Nan Cao 级别不需要换 theme，需要 ~20 处 small details 的累积。

---

## 数据汇总表

| Site | Visual | CJK 名 | Bilingual | Hero | Thumbnail | Animation | Custom font | Aesthetic |
|------|--------|--------|-----------|------|-----------|-----------|------------|-----------|
| Xiaojuan Ma | 3 | 缺席 | 无 | 平淡 | 无 | 无 | 无 | anti-design |
| Mingming Fan | 5 | 真 text | 段落级 | 标准 | 有 | 微 | 无 | template+ |
| Wei Zeng | 4 | 缺席 | 无 | 无 | 部分 | 无 | 无 | minimalist |
| Nan Cao | 7 | 真 text 平等 | 系统级 | al-folio 标 | 有 | al-folio fade | 无（系统 stack） | designer-aware |
| Yuhan Luo | 4 | 缺席 | 无 | 标准 | 部分 | 无 | 无 | minimalist |
| Pan Hui（旁注） | 2 | image 嵌入 | 假 | 无 | 无 | 无 | 无 | legacy |

**总结**：港澳台 / 大陆 design-conscious 学者主页**整体偏 plaintext**，真正花心思做视觉的极少。Yanjun 的机会窗口很大 — 只要做到 Nan Cao 级别的 al-folio + typography discipline，在本组语境里就是 top-tier。
