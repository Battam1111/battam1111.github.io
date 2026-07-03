---
layout: post
title: "Why Measurement Comes First"
title_zh: "为什么测量必须先行"
title_ja: "なぜ測定が最初なのか"
date: 2026-07-02
description: "Three fields hit the same wall in their own vocabularies. Regime-dependence forces measurement inside the training run, and the withdrawal test decides what counts as a contribution at all."
description_zh: "三个领域各用各的语言撞上同一堵墙。体制依赖性迫使测量进入训练过程内部，而撤除测试决定什么才算贡献。"
description_ja: "三つの分野がそれぞれの言葉で同じ壁にぶつかりました。体制依存性が測定を訓練の内部へと強い、撤回テストが何を貢献と呼べるかを決めます。"
tags: [research, measurement, credit, framing]
categories: [research]
---
<div lang="en" markdown="1">

Three fields have hit the same wall, each in its own vocabulary.

In RLHF, the wall is that a reward model's benchmark accuracy fails to predict the policy it trains. My first study varied only accuracy, holding everything else fixed, and found an interior optimum: past a point, the more accurate reward model trained the worse policy, and the signal that actually tracked the outcome lived in the training dynamics, the shape of the rewards and the KL trajectory. The field's own evaluation line has since documented the same disconnect at scale: RewardBench 2 concedes that accuracy is necessary but not sufficient, and Frick et al. report a negative correlation between benchmark score and downstream RLHF performance among the top models. The recognized mechanism is reward overoptimization, Goodhart's law in RL clothing (Gao, Schulman and Hilton, ICML 2023). Best-of-N selection is a different regime where static scores still work; policy optimization is where they break.

In control, the wall is that the one theorem everyone relies on stops at the reward. Ng, Harada and Russell (1999) proved potential-based reward shaping leaves the optimal policy invariant, and that the guarantee is necessary and sufficient there. The action interface has no such theorem, and this is still the live frontier (Forbes et al., ICML 2025). Practice shows the cost: residual policy learning keeps its learned correction attached at deployment forever, because nothing says removal is safe. My second study co-trains a gated shaping term on the action output and measures its absorption into the base policy directly: the term's magnitude rises, then decays roughly tenfold as the base soaks it up, so withdrawal is measured rather than hoped for.

In cooperative LLM systems, the wall is one shared outcome and no way to split it. This is the oldest name in the field: the credit-assignment problem, coined by Minsky in 1961. Inside a single differentiable model, backpropagation answers it. Between the models of a training system, no gradient flows, and the standard workaround, removing a piece and re-running, is structurally biased: removal changes what every downstream piece observes, so more samples converge on the wrong number. My third study shows that in text-mediated systems the workaround is unnecessary, because the transcript is the state. Any decision can be checkpointed and replayed with one action swapped while everything before it stays fixed. Per-decision credit becomes exact in identification, with only sampling variance left.

One wall, three vocabularies. But why must the fix be measurement from inside the run, rather than better benchmarks outside it? Because the field's own evidence shows the effect is regime-dependent. The same reward model produces different downstream results under different training regimes: on-policy against off-policy, policy optimization against best-of-N. A static benchmark cannot predict an effect that depends on a regime the benchmark does not know. This is not a preference for one methodology over another. It is what regime-dependence forces.

There is a second principle underneath, and it decides what counts as a contribution at all. A training-time piece can help in two ways: it can build capability into the model's weights, or it can prop up the system for as long as it stays attached. The traditions that got this right made withdrawal part of the concept. Instructional scaffolding (Wood, Bruner and Ross, 1976) defines the tutor's support as something that withers away as competence grows. Distillation (Hinton, Vinyals and Dean, 2015) measures success on the small model running alone at deployment. Much of the current field runs the other way: test-time compute keeps verifiers and search attached at inference, renting capability per query. Both are legitimate products. They are different products, and only a withdrawal test tells you which one you actually built: capability in the weights, or capability in the ensemble.

Put the two principles together and the order of the whole program falls out. You cannot train the pieces of an environment on their contribution until you can compute each piece's contribution; you cannot compute it from outside the run, because the effect is regime-dependent; and you cannot call it a contribution at all until it survives the piece's removal. Measurement is not the modest part of the plan. It is the ground floor, and [the companion note](/blog/2026/making-the-environment-trainable/) describes the floors above it.

</div>
<div lang="zh" markdown="1">

三个领域撞上了同一堵墙，各说各的语言。

在 RLHF 里，这堵墙是：reward model 的 benchmark 准确率无法预测它训练出的 policy。我的第一项研究只改变准确率、固定其余一切，发现了一个内部最优点：过了某个点，更准确的 reward model 训练出更差的 policy，而真正追踪结果的信号住在训练动态里：奖励的分布形态与 KL 轨迹。领域自己的评估路线此后在更大尺度上记录了同样的脱节：RewardBench 2 承认准确率是必要而不充分的，Frick 等人报告 benchmark 高分与下游 RLHF 表现在头部模型中呈负相关。公认的机制是 reward overoptimization，穿着 RL 外衣的 Goodhart 定律（Gao、Schulman 与 Hilton，ICML 2023）。Best-of-N 选择是另一种体制，静态分数在那里仍然管用；崩坏发生在 policy optimization 里。

在控制领域，这堵墙是：所有人依赖的那条定理止步于 reward。Ng、Harada 与 Russell（1999）证明了基于势函数的 reward shaping 保持最优 policy 不变，而且这一保证在那里是充要的。action 接口没有这样的定理，这至今仍是活跃前沿（Forbes 等，ICML 2025）。实践显示了代价：residual policy learning 把学到的修正永久带在部署里，因为没有任何东西保证移除是安全的。我的第二项研究在 action 输出上联合训练一个门控 shaping 项，并直接测量它向 base policy 的吸收：该项的幅度先升起，随后随着 base 将其吸干而衰减约十倍。撤除因此是被测量的，而不是被寄望的。

在协作式 LLM 系统里，这堵墙是：一个共享的结果，没有办法拆分。这是这个领域里最老的名字：credit-assignment 问题，Minsky 于 1961 年命名。在单个可微模型内部，反向传播回答了它。在训练系统的模型与模型之间，没有梯度流动，而标准的变通办法（把一个部件拿掉重跑）带着结构性偏差：移除改变了所有下游部件观察到的东西，样本越多，收敛到的错数越精确。我的第三项研究证明，在文本中介的系统里这个变通根本不必要，因为 transcript 就是状态。任何决策都可以设检查点、换掉一个动作重放，此前的一切保持原样。per-decision credit 由此在识别意义上精确，只剩采样方差。

同一堵墙，三种语言。但为什么修法必须是"在训练过程内部测量"，而不是"在外面造更好的基准"？因为领域自己的证据显示效果是体制依赖的。同一个 reward model 在不同训练体制下给出不同的下游结果：on-policy 对 off-policy，policy optimization 对 best-of-N。静态基准无法预测一个依赖于它并不知道的体制的效果。这不是方法论口味，这是体制依赖性强加的结论。

底下还有第二条原理，它决定什么才算贡献。一个训练期部件可以用两种方式帮忙：把能力写进模型的权重，或者只要自己一直挂着就把系统撑住。把这件事做对的传统，都把撤除写进了概念本身。教学脚手架（Wood、Bruner 与 Ross，1976）把辅导者的支持定义为随学习者胜任而逐渐消退之物。蒸馏（Hinton、Vinyals 与 Dean，2015）用部署时独自运行的小模型来衡量成功。而当下领域的很大一部分在往反方向走：test-time compute 把 verifier 和搜索永久挂在推理上，按次租用能力。两者都是正当的产品，但它们是不同的产品；只有撤除测试能告诉你造出来的是哪一个：能力在权重里，还是能力在系统里。

把两条原理放在一起，整个纲领的顺序就自己掉出来了。在能计算每个部件的贡献之前，你没法按贡献去训练环境的部件；你没法在训练之外计算它，因为效果依赖体制；而在它经受住部件撤除之前，你根本不能称它为贡献。测量不是计划里谦虚的那部分。它是地基。[姊妹篇](/blog/2026/making-the-environment-trainable/)描述地基之上的楼层。

</div>
<div lang="ja" markdown="1">

三つの分野が同じ壁にぶつかりました。それぞれ自分の言葉で。

RLHF では、壁はこうです。reward model の benchmark 精度は、それが訓練する policy を予測できません。私の最初の研究は精度だけを変え、他のすべてを固定して、内側に最適点があることを見つけました。ある点を越えると、より正確な reward model がより悪い policy を訓練したのです。結果を実際に追跡していた信号は、訓練のダイナミクスの中にありました。報酬の分布の形と、KL の軌跡です。分野自身の評価の系譜も、その後この断絶をより大きなスケールで記録しています。RewardBench 2 は精度が必要条件ではあるが十分条件ではないと認め、Frick らは benchmark 上位のモデルにおいてスコアと下流の RLHF 性能が負の相関を示すと報告しました。認められているメカニズムは reward overoptimization、RL の衣をまとった Goodhart の法則です（Gao、Schulman、Hilton、ICML 2023）。Best-of-N による選択は別の体制であり、静的なスコアはそこではまだ機能します。壊れるのは policy optimization の中です。

制御の分野では、壁はこうです。誰もが頼るあの定理は、reward で止まっています。Ng、Harada、Russell（1999）は、ポテンシャルに基づく reward shaping が最適 policy を不変に保つことを証明し、その保証がそこでは必要十分であることを示しました。action インターフェースにはそのような定理がなく、これは今なお活発な最前線です（Forbes ら、ICML 2025）。実践はその代償を示しています。residual policy learning は、学習した補正をデプロイに永久に付けたままにします。取り外しが安全だと言ってくれるものが何もないからです。私の第二の研究は、action 出力の上にゲート付きの shaping 項を共同訓練し、それが base policy に吸収されていく過程を直接測定します。その項の大きさは一度立ち上がり、base が吸い取るにつれておよそ十分の一まで減衰します。撤回は、希望ではなく測定の対象になります。

協調的な LLM システムでは、壁はこうです。共有された一つの結果があり、それを分割する方法がない。これはこの分野で最も古い名前を持つ問題です。credit-assignment 問題、Minsky が 1961 年に名付けました。単一の微分可能なモデルの内部では、誤差逆伝播がこれに答えます。訓練システムのモデルとモデルの間には勾配が流れず、標準的な回避策（部品を一つ外して再実行する）には構造的なバイアスがあります。除去は下流のすべての部品が観測するものを変えてしまうので、サンプルを増やすほど、間違った数に正確に収束していきます。私の第三の研究は、テキストを介したシステムではこの回避策がそもそも不要であることを示します。transcript がそのまま状態だからです。どの決定もチェックポイントを取り、一つの行動だけを差し替えて再生でき、それ以前のすべては固定されたままです。per-decision credit はこうして識別の意味で厳密になり、残るのはサンプリングの分散だけです。

同じ壁、三つの言葉。しかし、なぜ直し方が「訓練の内部からの測定」であって「外側のより良いベンチマーク」ではないのでしょうか。分野自身の証拠が、効果は体制依存だと示しているからです。同じ reward model が、異なる訓練体制のもとで異なる下流の結果を生みます。on-policy と off-policy、policy optimization と best-of-N。静的なベンチマークは、自分の知らない体制に依存する効果を予測できません。これは方法論の好みではありません。体制依存性が強いる結論です。

その下にはもう一つの原理があり、それが何を貢献と呼べるかを決めます。訓練時の部品は二つの仕方で役に立てます。能力をモデルの重みの中に築くか、あるいは自分が付いている間だけシステムを支えるか。これを正しく扱ってきた伝統は、撤回を概念そのものに書き込んでいました。教育の足場かけ（Wood、Bruner、Ross、1976）は、指導者の支えを、学習者の力が育つにつれて消えていくものとして定義します。蒸留（Hinton、Vinyals、Dean、2015）は、デプロイ時に単独で動く小さなモデルで成功を測ります。いまの分野の大きな部分は逆方向に走っています。test-time compute は verifier と探索を推論に付けたままにし、能力をクエリごとに借りています。どちらも正当な製品です。しかし別々の製品であり、どちらを作ったのかを教えてくれるのは撤回テストだけです。能力は重みの中にあるのか、アンサンブルの中にあるのか。

二つの原理を合わせると、プログラム全体の順序がひとりでに落ちてきます。各部品の貢献を計算できるようになるまでは、貢献に基づいて環境の部品を訓練することはできません。訓練の外側からは計算できません。効果が体制に依存するからです。そして部品の除去に耐えるまでは、それをそもそも貢献と呼ぶことができません。測定は計画の中の控えめな部分ではありません。土台です。[姉妹編](/blog/2026/making-the-environment-trainable/)が、その上の階を描いています。

</div>
