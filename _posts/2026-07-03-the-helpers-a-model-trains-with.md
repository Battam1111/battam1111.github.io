---
layout: post
title: "The Helpers a Model Trains With"
title_zh: "一个模型的训练帮手"
title_ja: "モデルが訓練で得る補助たち"
date: 2026-07-03
description: "What a learner's helpers actually contribute, measured from inside training and counted by what survives their withdrawal. Supersedes the earlier note 'Why Environment-Centric AI'."
description_zh: "learner 的帮手究竟贡献了什么：在训练内部测量，按撤走后留存的能力计数。本文替代此前的 'Why Environment-Centric AI'。"
description_ja: "learner の補助が実際に何を貢献しているのか。訓練の内部から測定し、補助を取り除いた後に残る能力で計数します。以前のノート 'Why Environment-Centric AI' に代わる声明です。"
tags: [research, training-environments, credit, framing]
categories: [research]
---
<div lang="en" markdown="1">

A learner is trained inside an apparatus of helpers: a reward model that scores it, verifiers that check it, a curriculum that feeds it, shaping aids that steer it. The learner is the one model that ships; the helpers stay behind, and their own scores do not tell you what they did to it. My work makes these helpers accountable: their effect on the learner measured from inside training rather than assumed, and their contribution counted by what the learner can still do once they are withdrawn.

A note on terminology. Everything in this apparatus may itself be trained, so "learner" does not mean "the only thing that learns." It means the beneficiary: the one model that ships while the helpers are withdrawn. The reward model may learn, the curriculum may adapt, the verifier may be fine-tuned. They are still helpers, because none of them is the product. The learner is the product.

## Three fields, one wall

Three fields have hit the same wall, each in its own vocabulary.

**Reward-model evaluation in RLHF.** A reward model's benchmark accuracy fails to predict the policy it trains, specifically under policy optimization (best-of-N selection is a different regime where static scoring still works). My first study, The Accuracy Paradox in RLHF (EMNLP 2024), varied only accuracy and found an interior optimum: beyond a threshold, higher accuracy produced a worse policy. The real signal was in the training dynamics, the shape of the reward distribution and the KL trajectory, not the benchmark number. The field's own evaluation line now documents the same disconnect: Frick et al. (2024) on evaluating reward models, and RewardBench 2 (Malik et al., 2025), which finds accuracy necessary but not sufficient. The recognized mechanism is reward overoptimization, the Goodhart effect in RL terms (Gao, Schulman and Hilton, ICML 2023).

**Withdrawable shaping on the action interface.** Ng, Harada and Russell (1999) proved that potential-based reward shaping leaves the optimal policy invariant, and that guarantee is both necessary and sufficient for the reward interface. The action interface has no such theorem. This is still the live frontier in 2025: Forbes et al. (ICML 2025) study action-dependent optimality-preserving shaping, which is exactly the gap. In practice, residual policy learning (Silver et al., 2018; Johannink et al., 2019) keeps the learned correction attached at deployment forever. My second study (under review) co-trains a gated shaping aid on the action output whose absorption into the base policy is itself measured: the aid's magnitude rises then decays about tenfold as the base absorbs it. Withdrawal is measured rather than hoped for.

**Exact credit for cooperative LLM agents.** When multiple agents produce one shared outcome, no single decision's contribution is visible in the outcome alone. This is the credit-assignment problem (the term is Minsky's, 1961). Inside one differentiable model, backpropagation answers it (Rumelhart, Hinton and Williams, 1986). Between the models of a training system, no gradient propagates. Removal-based estimates are structurally biased: removing an agent changes what every downstream agent sees. My third study, Exact Is Easier (arXiv:2603.06859, in submission), shows that the transcript IS the state in text-mediated systems. Any decision can be checkpointed and replayed with one action swapped, so per-decision credit is exact in identification. Only Monte Carlo variance remains.

## Why measurement must live inside training

The regime-dependence lemma ties these three stories together. The field's own evidence shows that the same reward model produces different downstream outcomes under different training regimes: on-policy versus off-policy, policy optimization versus best-of-N. If the effect depends on the regime, no static benchmark can predict it in principle, because the benchmark does not know your regime. Measuring from inside training is not a preference. It is the response that regime-dependence forces.

## Help you own versus help you rent

The withdrawal criterion draws a line between two products.

One lineage grounds it. Instructional scaffolding (Wood, Bruner and Ross, 1976) includes withdrawal in the concept itself: the tutor's support is designed to wither away as the learner gains competence. Knowledge distillation (Hinton, Vinyals and Dean, 2015) defines success by the deployed model that runs on its own at inference. In both traditions, the help is temporary by design, and the product is measured after the help is removed.

Today's trend runs the other way. Test-time compute keeps verifiers and search attached at inference, renting the capability per query. Both regimes are legitimate, but they are different products. A withdrawal test is what tells you which one you actually built: capability in the weights, or capability in the ensemble.

## Where this goes

The road ahead trains the helpers themselves (reward model, verifier, curriculum) as one team serving one learner, each credited per decision for its share of the learner's progress, each kept only as long as its help survives withdrawal. The valuation tools the field already trusts (Shapley-style attribution, data valuation, difference rewards) point at the data and the model; I point them at the components of the training environment itself. The bet is the same one I made when I started: environments themselves must scale, train, and generalize the way models have.

---

*This note supersedes [Why Environment-Centric AI](/blog/2026/why-environment-centric-ai/) (May 2026). The name did not survive contact with the field's own vocabulary, but the problem did. This is the current statement.*

*Papers are on the [publications page](/publications/). If you want to argue, I am at [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk).*

</div>

<div lang="zh" markdown="1">

learner 在一组帮手构成的装置中被训练：打分的 reward model、把关的 verifier、编排材料的 curriculum、修正动作的 shaping 辅助。learner 是最终上线的那一个模型；帮手们留在训练过程里，而它们自己的指标并不能告诉你它们对 learner 做了什么。我的工作让这些帮手可问责：它们对 learner 的效果在训练内部被测量，而非被假设；它们的贡献按 learner 在帮手撤走之后仍能做到的事来计数。

关于术语的一个说明。装置中的每个组件本身都可能被训练，所以"learner"并不意味着"唯一在学习的东西"，而是指受益者：帮手被撤走后仍然上线的那一个模型。reward model 可以学习，curriculum 可以自适应，verifier 可以被微调，它们仍然是帮手，因为它们都不是产品。learner 才是产品。

## 三个领域，同一堵墙

三个领域用各自的术语撞上了同一堵墙。

**RLHF 中的 reward model 评估。** reward model 在 benchmark 上的准确率无法预测它训练出的 policy，这一点具体指 policy optimization 场景（best-of-N selection 是另一种体制，静态评分在那里仍然有效）。我的第一项研究 The Accuracy Paradox in RLHF (EMNLP 2024) 仅改变准确率，发现了一个内部最优点：超过某个阈值后，更高的准确率反而产生更差的 policy。真正的信号在训练动态中，在 reward 分布的形状和 KL trajectory 中，而不在 benchmark 数字中。领域自身的评估路线如今也记录了同样的脱节：Frick et al. (2024) 关于 reward model 评估的工作，以及 RewardBench 2 (Malik et al., 2025)，后者发现准确率是必要的但不充分的。公认的机制是 reward overoptimization，即 RL 语境下的 Goodhart 效应 (Gao, Schulman and Hilton, ICML 2023)。

**action interface 上可撤回的 shaping。** Ng, Harada and Russell (1999) 证明了基于势函数的 reward shaping 使最优 policy 保持不变，且这一保证对 reward interface 而言是充要的。action interface 没有这样的定理。这在 2025 年仍是活跃前沿：Forbes et al. (ICML 2025) 研究的 action-dependent optimality-preserving shaping，正是这一缺口。实践中，residual policy learning (Silver et al., 2018; Johannink et al., 2019) 把学到的修正在部署时永久保留。我的第二项研究（在审）联合训练一个作用于 action 输出的门控 shaping 辅助，其向 base policy 的吸收过程本身被测量：辅助的幅度先上升后衰减约十倍，随着 base 将其吸收。撤回是被测量的，而非被寄望的。

**协作式 LLM agent 的精确 credit。** 多个 agent 产出一个共享结果时，单个决策的贡献在结果中不可见。这就是 credit-assignment 问题（术语出自 Minsky, 1961）。在单个可微模型内部，backpropagation 解决了它 (Rumelhart, Hinton and Williams, 1986)。在训练系统的多个模型之间，没有梯度传播。基于移除的估计存在结构性偏差：移除一个 agent 会改变所有下游 agent 看到的东西。我的第三项研究 Exact Is Easier (arXiv:2603.06859, 投稿中) 表明，在文本媒介的系统中 transcript 就是状态。任何决策都可以被 checkpoint 并以替换一个动作的方式重放，因此 per-decision credit 在 identification 上是精确的，仅剩 Monte Carlo 方差。

## 为什么测量必须在训练内部

regime-dependence 把这三条线索串在了一起。领域自身的证据表明，同一个 reward model 在不同的训练体制下产出不同的下游结果：on-policy 与 off-policy，policy optimization 与 best-of-N。如果效果取决于体制，那么原则上没有静态 benchmark 能预测它，因为 benchmark 不知道你的体制。在训练内部测量不是一种偏好，而是 regime-dependence 强制要求的应对。

## 拥有的帮助 与 租用的帮助

撤回标准在两种产品之间画出一条线。

一条脉络把它锚定。instructional scaffolding (Wood, Bruner and Ross, 1976) 在概念本身就包含了撤回：辅导者的支持被设计为随着学习者能力增长而逐渐消退。knowledge distillation (Hinton, Vinyals and Dean, 2015) 以部署后独立运行的那个模型来定义成功。在这两个传统里，帮助在设计上就是临时的，产品在帮助移除之后才被衡量。

今天的趋势走的是另一个方向。test-time compute 在推理时保留 verifier 和搜索，按每次查询租用能力。两种体制都是合理的，但它们是不同的产品。撤回测试告诉你实际构建的是哪一种：能力存在于权重之中，还是能力存在于集成之中。

## 后续方向

今后的方向是把帮手本身（reward model、verifier、curriculum）作为服务同一个 learner 的一支团队来训练，每个帮手按其对 learner 进步的逐决策贡献被计入 credit，每个帮手只在其帮助经受住撤回检验时才被保留。领域已经信赖的估值工具（Shapley 式归因、data valuation、difference rewards）指向数据和模型；我把它们指向训练环境的组件本身。赌注和我开始时一样：环境自身必须像模型一样可扩展、可训练、可泛化。

---

*本文替代 [Why Environment-Centric AI](/blog/2026/why-environment-centric-ai/)（2026 年 5 月）。那个名字没能经受住领域自身术语的检验，但问题本身留了下来。这是当前的陈述。*

*论文在[论文页](/publications/)。要和我辩论，邮箱 [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk)。*

</div>

<div lang="ja" markdown="1">

learner は一群の補助の中で訓練されます。採点する reward model、検証する verifier、教材を配する curriculum、行動を修正する shaping 補助。learner こそが最終的に実用へ送り出されるモデルであり、補助は訓練の中に留まります。そして、補助自身のスコアからは、それらが learner に何をしたかは分かりません。私の研究はこれらの補助に説明責任を持たせます。補助が learner に及ぼした効果を、仮定ではなく訓練内部で測定し、補助の貢献を、補助を取り除いた後に learner がなお発揮できる能力によって計数します。

用語について一つ補足します。この装置の中のどの要素も訓練されうるので、「learner」は「学習している唯一のもの」を意味しません。受益者を指します。補助が取り除かれた後に実用へ送り出される、あの一つのモデルです。reward model は学習するかもしれませんし、curriculum は適応するかもしれませんし、verifier はファインチューニングされるかもしれません。それでも補助です。なぜなら、どれも製品ではないからです。learner が製品です。

## 三つの分野、同じ壁

三つの分野が、それぞれの用語で同じ壁にぶつかっています。

**RLHF における reward model の評価。** reward model の benchmark 精度は、それが訓練する policy を予測できません。これは特に policy optimization について言えることです（best-of-N selection は別の体制であり、静的な採点がまだ機能します）。私の最初の研究 The Accuracy Paradox in RLHF (EMNLP 2024) は精度のみを変化させ、内側に最適点があることを見出しました。ある閾値を超えると、より高い精度がかえって劣った policy を生んだのです。真の信号は訓練のダイナミクスにありました。reward 分布の形状と KL trajectory の中にあり、benchmark の数字にはありませんでした。分野自身の評価の系譜も今では同じ断絶を記録しています。Frick et al. (2024) による reward model 評価の研究、そして RewardBench 2 (Malik et al., 2025) は、精度が必要条件ではあるが十分条件ではないと結論づけています。認識されているメカニズムは reward overoptimization、RL の文脈での Goodhart 効果です (Gao, Schulman and Hilton, ICML 2023)。

**action interface 上の撤回可能な shaping。** Ng, Harada and Russell (1999) は、ポテンシャルベースの reward shaping が最適 policy を不変に保つことを証明し、その保証は reward interface に対して必要十分であることを示しました。action interface にはそのような定理がありません。2025 年現在もこれは最前線です。Forbes et al. (ICML 2025) が研究する action-dependent optimality-preserving shaping は、まさにこのギャップです。実際には、residual policy learning (Silver et al., 2018; Johannink et al., 2019) は学習された修正をデプロイ時に永続的に保持します。私の第二の研究（査読中）は、action 出力上のゲート付き shaping 補助を共同訓練し、base policy への吸収過程そのものを測定します。補助の大きさは上昇した後、base が吸収するにつれて約 10 倍減衰します。撤回は希望的観測ではなく、測定対象です。

**協調的 LLM agent の厳密な credit。** 複数の agent が一つの共有された結果を生むとき、個々の決定の貢献はその結果だけからは見えません。これが credit-assignment 問題です（用語は Minsky による、1961 年）。一つの微分可能なモデルの内部では backpropagation がこれに答えます (Rumelhart, Hinton and Williams, 1986)。訓練システムの複数モデル間では勾配は伝播しません。除去ベースの推定には構造的なバイアスがあります。ある agent を除去すると、下流のすべての agent が見るものが変わってしまうからです。私の第三の研究 Exact Is Easier (arXiv:2603.06859, 投稿中) は、テキストを介したシステムでは transcript がそのまま状態であることを示します。どの決定も checkpoint して、一つの行動を差し替えて再現できます。したがって per-decision credit は identification において厳密であり、残るのは Monte Carlo の分散のみです。

## なぜ測定は訓練の内部になければならないか

regime-dependence がこの三つの物語を結びつけます。分野自身のエビデンスが示すように、同じ reward model が異なる訓練体制のもとで異なる下流の結果を生みます。on-policy か off-policy か、policy optimization か best-of-N か。効果が体制に依存するなら、原理的にどの静的 benchmark もそれを予測できません。benchmark はあなたの体制を知らないからです。訓練内部で測定することは好みの問題ではありません。regime-dependence が強いる応答です。

## 所有する助け と 借りる助け

撤回の基準は、二つの製品の間に線を引きます。

一つの系譜がこれを根拠づけます。instructional scaffolding (Wood, Bruner and Ross, 1976) は概念そのものに撤回を含んでいます。指導者の支援は、学習者の能力が育つにつれて消えていくように設計されています。knowledge distillation (Hinton, Vinyals and Dean, 2015) は、推論時に単独で動作するデプロイ後のモデルによって成功を定義します。どちらの伝統でも、助けは設計上一時的であり、製品は助けが取り除かれた後に評価されます。

今日のトレンドは逆方向です。test-time compute は推論時に verifier と探索を付けたまま保持し、クエリごとに能力をレンタルします。どちらの体制も正当ですが、異なる製品です。撤回テストが教えてくれるのは、実際に何を作ったかということです。能力が重みの中にあるのか、アンサンブルの中にあるのか。

## これから

今後の道筋は、補助そのもの（reward model、verifier、curriculum）を一つの learner に仕える一つのチームとして訓練し、各補助の learner の進歩への寄与を決定ごとに credit として計数し、その助けが撤回に耐える限りにおいてのみ保持することです。分野がすでに信頼している評価ツール（Shapley 式の帰属、data valuation、difference rewards）はデータとモデルに向けられています。私はそれらを訓練環境のコンポーネントそのものに向けます。賭けは始めた時と同じです。環境そのものが、モデルと同じようにスケールし、訓練され、汎化されなければなりません。

---

*このノートは [Why Environment-Centric AI](/blog/2026/why-environment-centric-ai/)（2026 年 5 月）に代わるものです。あの名前は分野自身の用語との接触に耐えられませんでしたが、問題そのものは残りました。これが現在の声明です。*

*論文は[論文ページ](/publications/)にあります。議論したい方は [yan-jun.chen@connect.polyu.hk](mailto:yan-jun.chen@connect.polyu.hk) まで。*

</div>
