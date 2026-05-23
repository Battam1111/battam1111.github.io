---
layout: post
title: "Why Environment-Centric AI"
title_zh: "为什么是 Environment-Centric AI"
title_ja: "なぜ Environment-Centric AI なのか"
date: 2026-05-23
description: A short statement of why I treat the training environment as a first-class object of study, and what that buys you over the usual model-centric reading of LLM training.
description_zh: 一段简短的陈述，说明我为什么把训练环境当作一等研究对象，以及这样做相比常见的"以模型为中心"读法多带来了什么。
description_ja: 訓練環境を一級の研究対象として扱う理由と、それが通常のモデル中心の LLM 訓練の読み方に対して何をもたらすか、についての短い表明。
tags: [research, environment-centric-ai, framing]
categories: [research]
---

<div lang="en" markdown="1">

Here is a question I keep returning to.

When a language model trained with RLHF refuses to ground its answer in the source material it was supposed to read, what was *actually* wrong?

The reflex answer is that the model is too small, the algorithm is too crude, or the reward signal was noisy. All of these can be true. But none of them, on their own, explain why the same base model trained under a slightly different setup *would have* learned to ground its answer in the source. The thing that changed across those two runs is not the model and not the algorithm. It is the **environment** the model was trained in: what evidence it saw, what objective it was rewarded against, at what granularity that reward arrived, on which task distribution, evaluated against which criterion.

Most LLM research talks about these as hyperparameters or implementation details. I think they are the object of study.

## The Sutton boundary, applied

Sutton and Barto's definition of an RL environment is strict: the environment is everything outside the agent that the agent cannot unilaterally alter. Rewards are external because they define the task; the agent cannot redefine its own task. The boundary is an *analytical* choice, but the rule is consistent.

Apply this rule to LLM post-training:

- The model's weights are the agent.
- The optimization algorithm (PPO, GRPO, DPO) is the procedure by which the agent updates itself.
- Everything else, **the reward model, the task distribution, the observation structure, the curriculum, the verifier, the evaluation set**, is the environment.

That last list is what most papers casually call "the training setup". I want to call it what it is.

## A specific structural property

LLM environments have a property classical RL environments do not. The transition function is degenerate. Given the current token sequence and the next token sampled, the next state is exactly `concat(state, token)`. There is no stochastic dynamics on the environment side; all the randomness is in the agent's sampling.

This is the strange and useful part. In classical RL, environments are interesting because their dynamics are interesting. In LLMs, the dynamics are trivial. What is left for the environment to do? Three things, all on the interface:

1. Decide what evidence the model receives (observation interface).
2. Decide what behavior is rewarded (reward interface).
3. Decide which problems the model sees and is evaluated on (distribution and evaluation interface).

That is exactly where the variation across LLM training setups lives. It is not a coincidence that the levers researchers actually pull, prompt formatting, RM choice, RLVR versus RLHF, outcome versus process reward, curriculum, eval coverage, all land on those three interfaces. The degenerate dynamics force the design surface there.

## What this changes

If the environment is the object of study, then the first question for any failure mode is not "what should we change about the model" but **"what about the environment made this failure rational"**. The reward model trained on length-biased preferences is the environment teaching the model that longer is better. The benchmark that scores accuracy without checking grounding is the environment telling the model that fluent guesses count as correct.

The grounding failure is not a model failure. It is the model's correct response to a specific environment.

This reframe gives you two things at once: a diagnostic posture (decompose the environment, locate the lever) and a redesign posture (change the lever, predict the effect). Most current work has the diagnostic part implicit. I want to make it explicit and operational.

## The longer bet

The bigger version of this is harder to defend in a single note, so I will only state it: I think the next jump in what AI systems can do will come from making the *environment* itself the thing that scales, trains, and generalizes, the way models have. Today the model is a first-class object that scales gracefully and that we know how to train. The environment is a hand-crafted artifact, fragile and bespoke. That asymmetry is where the headroom is.

My two papers so far are early stakes in that direction. The Accuracy Paradox in RLHF (EMNLP 2024) shows that a single environment-side property, reward-model accuracy, has non-monotonic effects on the agent it trains. C3, Exact Is Easier (in submission), exploits the degenerate-transition structure to make per-agent credit exactly computable in cooperative multi-agent LLM environments, replacing every approximate critic and trajectory baseline. Both are about treating the environment as a designed object and reaching for what falls out when you do.

What I am building toward in the next year is a framework for decomposing LLM training environments along a small set of axes, showing that the axis values predict which failure modes occur, and then closing the loop by re-designing the environment to fix the failure. If that sounds like a long arc, it is. This is a note about *why*, not a roadmap.

I will write more on the *how* when there is more of it to write.

---

*This is the first note. If you want the formal pieces, they are on the [publications page](/publications/). If you want to argue, I am at [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk).*

</div>

<div lang="zh" markdown="1">

我一直在反复回到这样一个问题。

当一个用 RLHF 训练出来的语言模型拒绝在它本应阅读的源材料上给出有依据的回答时，**真正出错的是什么**？

直觉的答案是：模型太小、算法太粗糙、奖励信号有噪声。这些都可能是对的。但单独看任何一条，都不能解释为什么同一个 base model 换一个稍有不同的训练设置，**就**会学会在源材料里找依据。两次训练之间发生变化的，既不是模型也不是算法，而是模型所处的**环境**：它看到了什么证据、被针对什么目标奖励、奖励以什么粒度到来、在哪种任务分布上训练、对照什么标准被评估。

绝大部分 LLM 研究把这些当作超参数或实现细节。我认为它们才是研究对象。

## 应用 Sutton 边界

Sutton 与 Barto 对 RL 环境的定义很严格：环境是 agent 在训练期间**无法单方面改变**的所有外部事物。奖励是外部的，因为奖励定义任务；agent 不能重新定义自己面对的任务。这条边界是一种**分析上的选择**，但规则是一致的。

把这条规则套到 LLM post-training 上：

- 模型的参数 = agent。
- 优化算法（PPO、GRPO、DPO）= agent 更新自身的程序。
- 剩下的一切 ——**reward model、任务分布、观测格式、curriculum、verifier、评测集** —— 都属于环境。

这最后一串清单，多数论文随口把它叫做"训练设置"。我想把它叫它本来的名字。

## 一个具体的结构性属性

LLM 环境有一条经典 RL 环境没有的性质：**转移函数是退化的**。给定当前 token 序列和采样出来的下一个 token，下一个状态就**正好**是 `concat(state, token)`。环境侧没有任何随机动力学；所有的随机性都在 agent 的采样过程里。

这一点既奇怪又有用。在经典 RL 里，环境之所以有意思，是因为动力学本身有意思。在 LLM 里，动力学是平凡的。那环境还剩下什么可做？三件事，都发生在接口上：

1. 决定模型接收到什么证据（观测接口）。
2. 决定什么行为被奖励（奖励接口）。
3. 决定模型面对的问题集和被评估的标准（分布与评测接口）。

LLM 训练设置之间真正有意义的差异，恰好就发生在这三个接口上。研究者实际去扳的杠杆 —— prompt 格式、RM 选择、RLVR 还是 RLHF、outcome reward 还是 process reward、curriculum、评测覆盖 —— 全部落在这三个接口上，这不是巧合。退化的动力学把全部设计自由度都挤到了这里。

## 这改变了什么

如果环境就是研究对象，那么面对任何一种失败模式时，第一个问题就不该是"模型要改什么"，而是 **"环境哪一处让这种失败变成了合理结果"**。一个在长度有偏的偏好数据上训出来的 reward model，是环境在告诉模型"更长就是更好"。一个只看 accuracy 不查 grounding 的 benchmark，是环境在告诉模型"流畅的猜测也算正确"。

Grounding 失败不是模型失败，而是模型对某个特定环境做出的正确反应。

这种重新框架同时给出两样东西：一种诊断姿态（分解环境、定位杠杆）和一种重设计姿态（动杠杆、预测效果）。当下大部分工作都把诊断这一步隐含掉了。我想把它显化出来、变得可操作。

## 更长远的赌注

更大的版本一篇 note 撑不起来，所以我只点一下：我相信 AI 系统下一次能力跳跃，会来自让**环境本身**像模型那样可以 scale、被训练、被泛化。今天，模型是一等公民对象，能优雅地 scale，我们也知道怎么训练它。环境则是一件手工搭建的器物，脆弱而 bespoke。这个不对称就是空间所在。

我目前的两篇论文是这条路上的早期赌注。The Accuracy Paradox in RLHF（EMNLP 2024）说明，单一一个环境侧属性 —— reward model 的 accuracy —— 对它训练出的 agent 具有非单调影响。C3，Exact Is Easier（投稿中），利用退化转移结构使得协作式多智能体 LLM 环境中每个 agent 的反事实贡献可被精确计算，从而替代了所有近似 critic 与 trajectory baseline。两篇都是把环境当成一个 designed object，去探索这样做之后会落下什么。

接下来一年我要建的，是一套把 LLM 训练环境沿一组小因素分解的框架，证明这些因素的取值能预测哪种失败模式会出现，然后通过重新设计环境闭合环路、修复失败。如果这听起来像一段很长的弧线，那它确实是。这篇 note 讲的是**为什么**，不是路线图。

等手里关于**怎么做**的材料够多了，我会再写。

---

*这是第一篇 note。要看正式发表的部分，请到[论文页](/publications/)。要找我辩论，邮箱 [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk)。*

</div>

<div lang="ja" markdown="1">

私が繰り返し戻ってくる問いがある。

RLHF で訓練された言語モデルが、本来読むべきソース資料に対して根拠を持って答えることを拒んだとき、**実際に何が間違っていたのか**。

反射的に出る答えはこうだ。モデルが小さすぎる、アルゴリズムが粗すぎる、報酬信号にノイズが多い。どれも本当でありうる。しかし、どれ一つだけを取り出しても、なぜ同じ base model が少し違う設定で訓練されたら**ソース資料に基づいて答えるように学習しただろう**、という事実を説明できない。二回の実行のあいだで変わったのはモデルでもアルゴリズムでもない。変わったのはモデルが訓練された**環境**である。どんな証拠を見たか、どんな目的に対して報酬を受けたか、その報酬がどの粒度で届いたか、どんな課題分布で訓練したか、どんな基準に照らして評価されたか。

ほとんどの LLM 研究はこれらをハイパーパラメータか実装の細部として扱う。私はこれらこそが研究対象だと思う。

## Sutton 境界を当てはめる

Sutton と Barto による RL 環境の定義は厳格だ。環境とは agent が訓練中に**一方的に変更できない**外部のすべてである。報酬は外部にある、なぜなら報酬は課題を定義するからだ。agent は自分の課題を再定義できない。この境界は**分析上の選択**だが、ルールは一貫している。

このルールを LLM post-training に当てはめる。

- モデルの重みが agent。
- 最適化アルゴリズム（PPO、GRPO、DPO）は agent が自分自身を更新する手続き。
- それ以外のすべて —— **reward model、課題分布、観測フォーマット、curriculum、verifier、評価セット** —— が環境。

この最後のリストを、ほとんどの論文はさりげなく「訓練のセットアップ」と呼ぶ。私はこれを本来の名前で呼びたい。

## 一つの具体的な構造的性質

LLM 環境には古典的な RL 環境にはない性質がある。**遷移関数が退化している**のだ。現在の token 列と次にサンプルされた token が与えられれば、次の状態はちょうど `concat(state, token)` である。環境側に確率的な動力学はない。すべてのランダム性は agent のサンプリングの中にある。

これは奇妙でかつ有用な点だ。古典的な RL では、環境が興味深いのは動力学そのものが興味深いからだった。LLM では動力学は自明だ。では環境に残された仕事は何か。三つ、いずれもインターフェース上にある。

1. モデルが受け取る証拠を決める（観測インターフェース）。
2. どの振る舞いが報酬を受けるかを決める（報酬インターフェース）。
3. モデルが直面する問題と、評価される基準を決める（分布と評価のインターフェース）。

LLM 訓練のセットアップ間の本当に意味のある差は、ちょうどここに集中している。研究者が実際に動かすレバー —— prompt の整形、RM の選び方、RLVR か RLHF か、outcome reward か process reward か、curriculum、評価カバレッジ —— がすべてこの三つのインターフェースに落ちるのは偶然ではない。退化した動力学が設計の自由度をすべてここに押し込めている。

## これが何を変えるか

環境が研究対象であるなら、あらゆる失敗モードに対して最初に問うべきは「モデルの何を変えるか」ではなく **「環境のどこがその失敗を合理化させたのか」** であるべきだ。長さバイアスのある選好データで訓練された reward model は、環境が「長いほど良い」とモデルに教えている。grounding を確認せず accuracy だけを見るベンチマークは、環境が「流暢な推測も正答として数える」とモデルに伝えている。

Grounding の失敗はモデルの失敗ではない。特定の環境に対する、モデルの正しい反応である。

このリフレームは二つのことを同時に与えてくれる。診断の姿勢（環境を分解し、レバーを特定する）と、再設計の姿勢（レバーを動かし、効果を予測する）。今の研究の多くは診断の部分を暗黙にしている。私はそれを明示的かつ操作可能にしたい。

## より長期の賭け

これより大きな版は note 一篇では擁護しきれないので、述べるだけに留める。AI システムの次の能力の跳躍は、**環境そのもの**を、モデルがそうしているように scale し、訓練され、汎化されるようにすることから来ると私は考えている。今日、モデルは優雅に scale する first-class object であり、訓練の仕方も分かっている。環境のほうは手作りの工芸品で、脆く、特注品だ。この非対称こそ、伸びしろのある場所だ。

これまでの私の二本の論文は、その方向への早期の賭けである。The Accuracy Paradox in RLHF（EMNLP 2024）は、単一の環境側属性である reward model の accuracy が、それが訓練する agent に対して非単調な効果を持つことを示した。C3、Exact Is Easier（投稿中）は、退化した遷移構造を利用して、協調的なマルチエージェント LLM 環境における各 agent の反事実的貢献を厳密に計算可能にし、近似的な critic と trajectory baseline をすべて置き換える。どちらも、環境を designed object として扱い、そう扱った時に何が落ちてくるかを掬い上げたものだ。

これから一年で私が組み立てようとしているのは、LLM の訓練環境を小さな軸の集合に沿って分解するフレームワークだ。それぞれの軸の値がどの失敗モードを生むかを予測できることを示し、最後に環境を再設計することで失敗を直し、ループを閉じる。長い弧に聞こえるなら、その通りだ。これは**なぜ**についての note であり、ロードマップではない。

**どう**やるかについて書くに足る材料が溜まったら、また書く。

---

*これが最初の note である。正式な研究を見たければ [publications ページ](/publications/) へ。議論したければ [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk) まで。*

</div>
