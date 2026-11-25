---
layout: about
title: About
permalink: /

# The home page, top to bottom (_layouts/about.liquid lays it out):
#   first screen: name (from _config.yml), role, affiliation, thesis, now, links, photo;
#   selected papers: first-author papers only, each with a figure taken from the paper itself;
#   the body of this file: the thread that ties them, then the acknowledgement;
#   writing (from the posts), news (from _news), open source, teaching and service, contact.
# The Research Intern half of the role line goes when the MSRA internship ends (so does the README sentence).
role: >
  <span lang="en"><span class="role-part"><strong>PhD Candidate</strong>, <a href="https://www.polyu.edu.hk/">The Hong Kong Polytechnic University</a></span> <span class="sep" aria-hidden="true">·</span> <span class="role-part"><strong>Research Intern</strong>, Microsoft Research Asia, Singapore</span></span><span lang="zh"><span class="role-part"><strong>博士生</strong>，<a href="https://www.polyu.edu.hk/">香港理工大学</a></span> <span class="sep" aria-hidden="true">·</span> <span class="role-part"><strong>研究实习生</strong>，微软亚洲研究院（新加坡）</span></span><span lang="ja"><span class="role-part"><strong>博士候補者</strong>、<a href="https://www.polyu.edu.hk/">香港理工大学</a></span> <span class="sep" aria-hidden="true">·</span> <span class="role-part"><strong>リサーチインターン</strong>、Microsoft Research Asia（シンガポール）</span></span>
affiliation: >
  <span lang="en"><a href="https://www.polyu.edu.hk/en/comp/">Department of Computing</a>, advised by Prof. <a href="https://www4.comp.polyu.edu.hk/~cswjli/">Wenjie Li (Maggie)</a> and Prof. <a href="https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN">Wei Zhang</a>, with joint doctoral training at the Eastern Institute of Technology (EIT), Ningbo.</span><span lang="zh"><a href="https://www.polyu.edu.hk/en/comp/">计算学系</a>，师从 <a href="https://www4.comp.polyu.edu.hk/~cswjli/">Wenjie Li (Maggie)</a> 教授与 <a href="https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN">Wei Zhang</a> 教授，并在东方理工（EIT，宁波）联合培养。</span><span lang="ja"><a href="https://www.polyu.edu.hk/en/comp/">コンピューティング学科</a>。<a href="https://www4.comp.polyu.edu.hk/~cswjli/">Wenjie Li (Maggie)</a> 教授と <a href="https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN">Wei Zhang</a> 教授の指導のもと、東方理工（EIT、寧波）との共同育成プログラムに参加しています。</span>
thesis: >
  <span lang="en">In reinforcement learning, models are <strong>trainable</strong>. The environments that train them are <strong>not</strong>. I want to make the environment trainable, the way models are, and with it to lift the ceiling of what AI can become.</span><span lang="zh">在强化学习里，模型是<strong>可以训练的</strong>。训练模型的环境，<strong>还不行</strong>。我想让环境也变得可训练，像模型一样，并以此把 AI 的上限抬上去。</span><span lang="ja">強化学習において、モデルは<strong>訓練できる</strong>。モデルを訓練する環境は、<strong>まだできない</strong>。私はその環境を、モデルと同じように訓練できるものにしたい。そしてそれによって、AI の到達点を引き上げたいのです。</span>
# What I am working on now, as my own direction (never the topic of the internship). The layout adds a pointer to the
# featured note after it.
now: >
  <span lang="en">Agentic RL, and what a training environment actually teaches a long-horizon agent.</span><span lang="zh">agentic RL，以及训练环境到底教会了长程 agent 什么。</span><span lang="ja">agentic RL、そして訓練環境が長期タスクの agent に実際に何を教えているのか。</span>
photo: prof_pic.jpg
# The Chinese platforms, after the academic links of the first screen. WeChat has no address, so it is text only.
platforms:
  - href: https://www.xiaohongshu.com/user/profile/640ae5a5000000000f011e55
    label: <span lang="en">Xiaohongshu</span><span lang="zh">小红书</span><span lang="ja">小紅書</span>
  - href: https://space.bilibili.com/8378592
    label: <span lang="en">Bilibili</span><span lang="zh">B站</span><span lang="ja">bilibili</span>
  - href: https://www.zhihu.com/people/xing-zhe-qian-mian
    label: <span lang="en">Zhihu</span><span lang="zh">知乎</span><span lang="ja">Zhihu</span>
  - label: '<span lang="en">WeChat: 升云迹</span><span lang="zh">公众号：升云迹</span><span lang="ja">WeChat：升云迹</span>'

# First-author papers only (notes go under Writing). The figure is the paper's own Figure 1, never a redrawn one.
# Papers under review carry no venue name.
papers:
  - title: "The Trace Is the State: Exact Credit Assignment for LLM Agent Teams"
    image: paper-trace-fig1.png
    width: 1600
    height: 915
    alt: "Figure 1 of the paper: credit from predicted counterfactuals, beside credit from executed counterfactuals when the trace is the state"
    venue: <span lang="en">arXiv 2026 · in submission</span><span lang="zh">arXiv 2026 · 在投</span><span lang="ja">arXiv 2026 · 投稿中</span>
    arxiv: "2603.06859"
    code: https://github.com/EIT-EAST-Lab/C3
    text: >
      <span lang="en">What each message in a team of LLM agents was worth has mostly been predicted, but when the team communicates through a shared context and everything a downstream agent reads is written into the trace, the trace is the state. One message can then be replaced and the run continued to its end, which makes its credit exact. For an LLM, much of the environment arrives as context (retrieved text, tool outputs, prompts), and that is where the same method points next: assigning credit to those pieces as well.</span><span lang="zh">LLM agent 团队里每条消息值多少，过去大多靠预测；但当团队通过共享上下文交流、下游 agent 读到的一切都写进记录（trace）时，记录就是状态。这时换掉一条消息、真实续跑到结束，它的 credit 就能精确算出。对 LLM 来说，环境大多以上下文的形式到达模型（检索到的文本、工具返回、提示词），同一个办法接下来指向的正是这些组件：给它们也分配 credit。</span><span lang="ja">LLM agent のチームで各メッセージの価値はこれまで主に予測されてきたが、チームが共有コンテキストを通じてやり取りし、下流の agent が読むものがすべて記録（trace）に書き込まれるなら、記録がそのまま状態になる。このとき一つのメッセージを差し替えて最後まで実際に走らせれば、その credit は厳密に求まる。LLM にとって環境の多くはコンテキストとして届く（検索されたテキスト、ツールの返り値、プロンプト）ので、同じ方法が次に向かう先は、こうした構成要素にも credit を割り当てることだ。</span>
  - title: "The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models"
    image: paper-paradox-fig1.png
    width: 1600
    height: 799
    alt: "Figure 1 of the paper: language model performance over reward model accuracy and training steps, highest at moderate accuracy"
    venue: EMNLP 2024
    arxiv: "2410.06554"
    code: https://github.com/EIT-NLP/AccuracyParadox-RLHF
    text: >
      <span lang="en">The reward model is the most typical piece of a training environment and is usually judged by its accuracy. Yet moderately accurate reward models train better language models than the most accurate ones, so a piece's worth has to be judged inside training.</span><span lang="zh">reward model 是训练环境里最典型的组件，通常按准确率评判。但中等准确率的 reward model 反而比最准的训出更好的语言模型，所以组件值多少，得放进训练里看。</span><span lang="ja">reward model は訓練環境の中で最も典型的な構成要素で、ふつうは精度で評価される。しかし、中程度の精度の reward model のほうが最も精度の高いものより良い言語モデルを訓練するので、構成要素の価値は訓練の内側で判断する必要がある。</span>
    note: >
      <span lang="en">Princeton's <em>What Makes a Reward Model a Good Teacher?</em> (NeurIPS 2025) opens with this finding; the ACL 2025 tutorial <em>Synthetic Data in the Era of LLMs</em> gives it a full slide.</span><span lang="zh">普林斯顿的 <em>What Makes a Reward Model a Good Teacher?</em>（NeurIPS 2025）在开篇引用了这一发现；ACL 2025 教程 <em>Synthetic Data in the Era of LLMs</em> 用一整页讲了它。</span><span lang="ja">プリンストンの <em>What Makes a Reward Model a Good Teacher?</em>（NeurIPS 2025）は冒頭でこの発見を引いている。ACL 2025 のチュートリアル <em>Synthetic Data in the Era of LLMs</em> でも、スライド一枚を割いて取り上げられた。</span>

# Co-authored papers, one line each under the thread.
coauthored:
  - title: "FastDSAC: Unlocking the Potential of Maximum Entropy RL in High-Dimensional Humanoid Control"
    venue: NeurIPS 2026
    arxiv: "2603.12612"
  - title: "Reasoning Beyond Language: A Comprehensive Survey on Latent Chain-of-Thought Reasoning"
    venue: EMNLP 2026 Findings
    arxiv: "2505.16782"
  - title: "Unveiling the Key Factors for Distilling Chain-of-Thought Reasoning"
    venue: ACL 2025 Findings
    arxiv: "2502.18001"

open_source:
  - name: shortcut-scan
    href: https://github.com/Battam1111/shortcut-scan
    text: >
      <span lang="en">Scans agent RL transcripts for two behaviors: touching the files that grade the agent, and leaving a script where a compiled program was asked for.</span><span lang="zh">在 agent 的 RL 训练记录里扫两种行为：碰给它打分的文件，以及在该交编译产物的地方留一个脚本。</span><span lang="ja">agent の RL 訓練記録から二つの振る舞いを探す。採点用のファイルに触れること、そしてコンパイル済みのプログラムの代わりにスクリプトを置くこと。</span>
  - name: C3
    href: https://github.com/EIT-EAST-Lab/C3
    text: <span lang="en">Exact credit assignment for LLM agent teams, the code of <em>The Trace Is the State</em>.</span><span lang="zh">LLM agent 团队的精确 credit assignment，<em>The Trace Is the State</em> 的代码。</span><span lang="ja">LLM agent チームの厳密な credit assignment。<em>The Trace Is the State</em> のコード。</span>
  - name: AccuracyParadox-RLHF
    href: https://github.com/EIT-NLP/AccuracyParadox-RLHF
    text: <span lang="en">The experiments of <em>The Accuracy Paradox in RLHF</em>.</span><span lang="zh"><em>The Accuracy Paradox in RLHF</em> 的实验代码。</span><span lang="ja"><em>The Accuracy Paradox in RLHF</em> の実験コード。</span>
  - name: OmniSeek
    href: https://github.com/Battam1111/omniseek
    text: <span lang="en">A self-hosted deep-retrieval engine for AI agents.</span><span lang="zh">给 AI agent 用的自托管深度检索引擎。</span><span lang="ja">AI agent のためのセルフホスト型の深い検索エンジン。</span>
  - name: Myco
    href: https://github.com/Battam1111/Myco
    text: <span lang="en">Persistent memory infrastructure for AI agents.</span><span lang="zh">给 AI agent 用的持久记忆基础设施。</span><span lang="ja">AI agent のための永続メモリ基盤。</span>

social: true

# News on the home page: milestones only (notes have their own block), the latest five.
announcements:
  enabled: true
  limit: 5
---

<div lang="en" markdown="1">

Making the pieces around a model trainable starts with knowing what they actually do in training, and which signal can say exactly what each step is worth.

The destination: an environment that learns alongside the model it trains. The path runs through credit: **credit should not stop at the agent's boundary.** Once trustworthy learning signals reach the pieces around the model, the environment can begin to learn.

<p class="acknowledgement"><small><em>With thanks to Xiaoyu Shen and Dawei Zhu, whose ongoing mentorship and guidance have shaped much of how I think about research.</em></small></p>

</div>

<div lang="zh" markdown="1">

要让模型周围的组件也能训练，先得知道它们在训练里究竟起什么作用，以及什么信号能精确告诉我们每一步值多少。

终局：环境与模型一起学习。去那里的路，经过 credit assignment（信用分配）：**credit 不该停在 agent 的边界上。** 当可信的学习信号能到达模型周围的组件，环境就能开始学习。

<p class="acknowledgement"><small><em>感谢 Xiaoyu Shen 老师与 Dawei Zhu 师兄一直以来的指导与帮助，他们在很多方面塑造了我做研究的方式。</em></small></p>

</div>

<div lang="ja" markdown="1">

モデルの周りの構成要素まで訓練できるようにするには、まず、それらが訓練の中で実際に何をしているのか、そして一歩ごとの価値をどの信号なら正確に言えるのかを知る必要がある。

目指す先は、モデルとともに学ぶ環境です。そこへ至る道は credit assignment（貢献度の割り当て）にあります。**credit は agent の境界で止まるべきではない。** 信頼できる学習信号がモデルの周りの構成要素にまで届いたとき、環境は学び始めることができます。

<p class="acknowledgement"><small><em>Xiaoyu Shen 先生と Dawei Zhu 先輩から受けた継続的なご指導とお力添えに深く感謝いたします。私の研究との向き合い方の多くは、お二人からの影響によるものです。</em></small></p>

</div>
