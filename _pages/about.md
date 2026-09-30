---
layout: about
title: About
permalink: /
subtitle: >
  <span lang="en">PhD Candidate, <a href="https://www.polyu.edu.hk/en/comp/">Department of Computing</a>, <a href="https://www.polyu.edu.hk/">The Hong Kong Polytechnic University</a>.</span><span lang="zh"><a href="https://www.polyu.edu.hk/en/comp/">香港理工大学 计算学系</a> 博士候选人。</span><span lang="ja"><a href="https://www.polyu.edu.hk/en/comp/">香港理工大学 コンピューティング学科</a> 博士候補者。</span>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false
  # Location shows Singapore during the MSRA internship; switch it back to Hong Kong / 香港 / 香港 when the internship ends.
  more_info: >
    <p class="profile-name">Yanjun Chen</p>
    <p class="profile-role"><span lang="en">PhD Candidate, PolyU</span><span lang="zh">博士候选人 · 理大</span><span lang="ja">博士候補者 · PolyU</span></p>
    <div class="profile-links">
      <a class="pl-mail" href="mailto:yan-jun.chen@connect.polyu.hk"><i class="fa-regular fa-envelope"></i><span>yan&#8209;jun.chen@connect.polyu.hk</span></a>
      <span class="pl-loc"><i class="fa-solid fa-location-dot"></i><span><span lang="en">Singapore</span><span lang="zh">新加坡</span><span lang="ja">シンガポール</span></span></span>
      <a href="https://scholar.google.com/citations?user=Zg8cX0sAAAAJ" rel="external nofollow noopener" target="_blank"><i class="ai ai-google-scholar"></i><span>Google Scholar</span></a>
      <a href="https://github.com/Battam1111" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i><span>GitHub</span></a>
      <a href="https://x.com/YanjunChen1111" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-x-twitter"></i><span>X</span></a>
      <a href="https://orcid.org/0009-0001-9065-9137" rel="external nofollow noopener" target="_blank"><i class="ai ai-orcid"></i><span>ORCID</span></a>
      <a class="pl-cv" href="/assets/pdf/cv.pdf" target="_blank"><i class="fa-regular fa-file-pdf"></i><span><span lang="en">CV</span><span lang="zh">简历</span><span lang="ja">履歴書</span></span></a>
    </div>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 7

latest_posts:
  enabled: false
---

<div lang="en" markdown="1">

I am a PhD candidate in the [Department of Computing](https://www.polyu.edu.hk/en/comp/) at [The Hong Kong Polytechnic University](https://www.polyu.edu.hk/), advised by Prof. [Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) and Prof. [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN), with joint doctoral training at the Eastern Institute of Technology (EIT), Ningbo. I am currently a research intern at Microsoft Research Asia, Singapore.

In reinforcement learning, models are **trainable**. The environments that train them are **not**. I want to make the environment trainable, the way models are, and with it to lift the ceiling of what AI can become.

## Research

Making the pieces around a model trainable starts with knowing what they actually do in training, and which signal can say exactly what each step is worth.

**Reward-model accuracy and training outcomes in RLHF.** The reward model is the most typical piece of a training environment and is usually judged by its accuracy. Yet moderately accurate reward models train better language models than the most accurate ones, so a piece's worth has to be judged inside training.
{: .angle }
*The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models* (EMNLP 2024).
{: .angle-paper }

**Exact credit for LLM agent teams.** What each message in a team of LLM agents was worth has mostly been predicted, but when the team communicates through a shared context and everything a downstream agent reads is written into the trace, the trace is the state. One message can then be replaced and the run continued to its end, which makes its credit exact. For an LLM, much of the environment arrives as context (retrieved text, tool outputs, prompts), and that is where the same method points next: assigning credit to those pieces as well.
{: .angle }
*The Trace Is the State: Exact Credit Assignment for LLM Agent Teams* (arXiv:2603.06859, in submission).
{: .angle-paper }

**When a policy absorbs action shaping.** Reward shaping has a theorem guaranteeing that a potential-based term can be removed; the same practice on the action channel, a training-time offset, has none. A trainable policy absorbs an offset its own output layer can reproduce exactly, and once absorbed, the offset can be removed with the return almost unchanged.
{: .angle }
*Action Shaping: Policies Absorb What They Can Express* (arXiv:2609.32752, in submission).
{: .angle-paper }

### Where I'm Going

The destination: an environment that learns alongside the model it trains, from language to embodied agents. The path runs through credit: **credit should not stop at the agent's boundary.** Once trustworthy learning signals reach the pieces around the model, the environment can begin to learn.

<p class="acknowledgement"><small><em>With thanks to Xiaoyu Shen and Dawei Zhu, whose ongoing mentorship and guidance have shaped much of how I think about research.</em></small></p>

</div>

<div lang="zh" markdown="1">

我是[香港理工大学 计算学系](https://www.polyu.edu.hk/en/comp/)的博士候选人，师从 [Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) 教授与 [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN) 教授，并在东方理工（EIT，宁波）联合培养。目前在微软亚洲研究院（新加坡）做研究实习。

在强化学习里，模型是**可以训练的**。训练模型的环境，**还不行**。我想让环境也变得可训练，像模型一样，并以此把 AI 的上限抬上去。

## 研究方向

要让模型周围的组件也能训练，先得知道它们在训练里究竟起什么作用，以及什么信号能精确告诉我们每一步值多少。

**RLHF 中 reward model 的准确率与训练效果。** reward model 是训练环境里最典型的组件，通常按准确率评判。但中等准确率的 reward model 反而比最准的训出更好的语言模型，所以组件值多少，得放进训练里看。
{: .angle }
*The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models* (EMNLP 2024).
{: .angle-paper }

**LLM agent 团队的精确 credit。** LLM agent 团队里每条消息值多少，过去大多靠预测；但当团队通过共享上下文交流、下游 agent 读到的一切都写进记录（trace）时，记录就是状态。这时换掉一条消息、真实续跑到结束，它的 credit 就能精确算出。对 LLM 来说，环境大多以上下文的形式到达模型（检索到的文本、工具返回、提示词），同一个办法接下来指向的正是这些组件：给它们也分配 credit。
{: .angle }
*The Trace Is the State: Exact Credit Assignment for LLM Agent Teams* (arXiv:2603.06859, in submission).
{: .angle-paper }

**action shaping 何时被 policy 吸收。** reward shaping 有定理保证基于势函数的项可以拿掉，action channel 上的同类做法（训练时加的偏移）没有。可训练的 policy 会吸收它自己输出层能精确复现的偏移，吸收后拿掉，回报几乎不变。
{: .angle }
*Action Shaping: Policies Absorb What They Can Express* (arXiv:2609.32752, in submission).
{: .angle-paper }

### 往哪里去

终局：环境与模型一起学习，从语言走向具身智能体。去那里的路，经过 credit assignment（信用分配）：**credit 不该停在 agent 的边界上。** 当可信的学习信号能到达模型周围的组件，环境就能开始学习。

<p class="acknowledgement"><small><em>感谢 Xiaoyu Shen 老师与 Dawei Zhu 师兄一直以来的指导与帮助，他们在很多方面塑造了我做研究的方式。</em></small></p>

</div>

<div lang="ja" markdown="1">

[香港理工大学 コンピューティング学科](https://www.polyu.edu.hk/en/comp/)の博士候補者で、[Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) 教授と [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN) 教授の指導のもと、東方理工（EIT、寧波）との共同育成プログラムに参加しています。現在、Microsoft Research Asia（シンガポール）のリサーチインターンでもあります。

強化学習において、モデルは**訓練できる**。モデルを訓練する環境は、**まだできない**。私はその環境を、モデルと同じように訓練できるものにしたい。そしてそれによって、AI の到達点を引き上げたいのです。

## 研究内容

モデルの周りの構成要素まで訓練できるようにするには、まず、それらが訓練の中で実際に何をしているのか、そして一歩ごとの価値をどの信号なら正確に言えるのかを知る必要がある。

**RLHF における reward model の精度と訓練結果。** reward model は訓練環境の中で最も典型的な構成要素で、ふつうは精度で評価される。しかし、中程度の精度の reward model のほうが最も精度の高いものより良い言語モデルを訓練するので、構成要素の価値は訓練の内側で判断する必要がある。
{: .angle }
*The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models* (EMNLP 2024).
{: .angle-paper }

**LLM agent チームの厳密な credit。** LLM agent のチームで各メッセージの価値はこれまで主に予測されてきたが、チームが共有コンテキストを通じてやり取りし、下流の agent が読むものがすべて記録（trace）に書き込まれるなら、記録がそのまま状態になる。このとき一つのメッセージを差し替えて最後まで実際に走らせれば、その credit は厳密に求まる。LLM にとって環境の多くはコンテキストとして届く（検索されたテキスト、ツールの返り値、プロンプト）ので、同じ方法が次に向かう先は、こうした構成要素にも credit を割り当てることだ。
{: .angle }
*The Trace Is the State: Exact Credit Assignment for LLM Agent Teams* (arXiv:2603.06859, in submission).
{: .angle-paper }

**action shaping が policy に吸収されるとき。** reward shaping には、ポテンシャルに基づく項を取り除けることを保証する定理があるが、action channel 上の同じ実践（訓練時に加えるオフセット）にはない。訓練可能な policy は、自分の出力層が正確に再現できるオフセットを吸収し、吸収された後に外してもリターンはほとんど変わらない。
{: .angle }
*Action Shaping: Policies Absorb What They Can Express* (arXiv:2609.32752, in submission).
{: .angle-paper }

### これから

目指す先は、モデルとともに学ぶ環境です。言語から身体性エージェントへ。そこへ至る道は credit assignment（貢献度の割り当て）にあります。**credit は agent の境界で止まるべきではない。** 信頼できる学習信号がモデルの周りの構成要素にまで届いたとき、環境は学び始めることができます。

<p class="acknowledgement"><small><em>Xiaoyu Shen 先生と Dawei Zhu 先輩から受けた継続的なご指導とお力添えに深く感謝いたします。私の研究との向き合い方の多くは、お二人からの影響によるものです。</em></small></p>

</div>
