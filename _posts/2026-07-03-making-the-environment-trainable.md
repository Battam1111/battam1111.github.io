---
layout: post
title: "Making the Environment Trainable"
title_zh: "让环境训练起来"
title_ja: "環境を訓練できるものにする"
date: 2026-07-03
description: "Models became trainable; the environment never got that deal. Today it is not even a single thing. What it takes to change that, laid out as a stack of problems, and why the ceiling moves if the stack gets built."
description_zh: "模型变得可训练了，环境从未得到这份待遇，而且它今天甚至不是一个整体。把改变这件事所需的东西摊开成一叠问题，并说明为什么这叠楼造起来，上限就会动。"
description_ja: "モデルは訓練できるものになりましたが、環境はその取引を受け取っていません。しかも今日、環境は一つのまとまりですらない。それを変えるために何が要るかを問題の積み重ねとして描き、積み上がれば天井が動く理由を述べます。"
tags: [research, training-environments, roadmap, framing]
categories: [research]
---
<div lang="en" markdown="1">

Models became trainable. The sentence sounds trivial, but it is the single fact behind a decade of progress: give a system a signal for how it is doing and a way to improve on it, and scale does the rest. The environment a model learns in never got that deal.

It is worth being precise about what the model side actually received. Backpropagation gave every parameter a share of the blame for every error, which is to say it solved credit assignment inside the network. Once that signal existed, improvement stopped being a craft and became a budget: more data, more compute, better models. Everything we call scaling rests on that loop running billions of times without a human in it.

Now look at the other side of the training run. The environment is not even a single thing. There is a reward model over here, trained on preference data and judged by its accuracy. There are verifiers over there, judged by agreement rates. A curriculum somewhere else, assembled by heuristics and judged by intuition. Each piece is built separately, evaluated separately, and swapped separately. Not one of them is judged by the only thing that makes it worth having: what it does to the model it exists to train. The environment is not a system. It is a pile.

A pile cannot be trained. That is the honest reason the environment never got the model side's deal, and it is why I do not think of "make the environment trainable" as one problem. It is a stack of problems, each standing on the one below.

**Measurement.** Can you read what a single piece does to the model? Today you mostly cannot. A reward model's benchmark accuracy fails to predict the policy it trains; the effect only shows up inside the training run itself. Until this layer works, everything above it is guesswork.

**Credit.** A model is trained by many pieces at once, and they produce one outcome together. Whose share is whose? Take a piece out and re-run, and you have changed what every other piece sees; the answer comes back wrong in a way more sampling cannot fix. Credit has to be computed, not approximated by deletion.

**Training a piece.** A measured effect can become the piece's own training signal. This is where the environment stops being infrastructure and starts improving. It carries an obligation the model side never had: the piece must be withdrawable, with the gain staying with the model after it is gone. Otherwise what you improved is not the model but the ensemble around it.

**The team.** Pieces trained together, serving one model, have to coordinate rather than interfere. Joint shaping is known to break where individual shaping succeeds, so this layer is not a free consequence of the one below it.

**Generalization.** An environment that trains one model well should carry to the next model, the next task, and eventually past text. This is the layer where the bet pays off, and the one furthest from current evidence.

My three studies so far live on the first two layers, with a first step into the third: measurement where the standard metric fails, exact credit where outcomes are shared, and one training-time piece that is absorbed and then withdrawn. That is deliberate. The stack collapses without its ground floor, and the ground floor is the part nobody had built.

Why believe the ceiling moves if the stack gets built? Because models increasingly learn from experience their environments generate: tasks proposed, outputs scored, mistakes checked. The environment is the factory of that experience. A model that improves inside a fixed factory converges to what the factory can teach; the factory itself has to improve for the ceiling to move. The field has seen this once before: features used to be hand-crafted, then they became learned, and that single change renamed the field. The environment is the largest hand-crafted stage left.

So the bet, stated once more: environments themselves must scale, train, and generalize the way models have. I am starting where the stack starts, with measurement. [The companion note](/blog/2026/why-measurement-comes-first/) lays out why that order is forced, not chosen.

*This note replaces an earlier statement of my direction written under a different name. The name did not survive; the ambition did.*

</div>
<div lang="zh" markdown="1">

模型变得可训练了。这句话听起来平平无奇，但过去十年的全部进展都站在这个单一事实上：给一个系统一个"它做得如何"的信号，再给它一条按信号改进的路，剩下的交给规模。而模型在其中学习的环境，从来没有得到过这份待遇。

值得把模型那一侧得到的东西说精确。反向传播让每一个参数分担每一次错误的责任，也就是说，它在网络内部解决了 credit assignment。这个信号一旦存在，改进就不再是手艺，而是预算：更多数据、更多算力、更好的模型。我们称之为 scaling 的一切，都建立在这个回路无人值守地转了亿万次之上。

再看训练的另一侧。环境甚至不是一个整体。这边是一个 reward model，用偏好数据训练，按准确率评判；那边是一批 verifier，按一致率评判；别处还有一个 curriculum，靠启发式拼起来，靠直觉评判。每个部件被单独构建、单独评估、单独更换。没有一个部件是按它唯一的存在理由来评判的：它对它要训练的那个模型做了什么。环境不是一个系统，是一堆零件。

一堆零件是训练不起来的。这就是环境从未得到那份待遇的诚实原因，也是为什么我不把"让环境训练起来"当成一个问题。它是一叠问题，每一层踩在下一层上。

**测量。** 你能读出单个部件对模型做了什么吗？今天基本不能。reward model 的 benchmark 准确率无法预测它训练出的 policy；效果只在训练过程内部显形。这一层不通，上面的一切都是猜。

**Credit。** 模型同时被许多部件训练，它们共同产出一个结果。谁的份额是谁的？把一个部件拿掉重跑，你已经改变了其它所有部件看到的东西；答案会错，而且加样本也修不好。credit 必须被计算出来，不能靠删除去近似。

**训练单个部件。** 测得的效果可以变成部件自己的训练信号。环境从这里开始不再是基础设施，开始改进。这一层带着模型那侧从来没有的义务：部件必须可撤除，收益要留在模型身上。否则你改进的就不是模型，而是围着它的那套系统。

**团队。** 一起训练、服务同一个模型的部件们，必须协同而不是互相干扰。联合塑造在单独塑造成功的地方会失败，这是已知的；所以这一层不是下一层的免费推论。

**泛化。** 把一个模型训练得好的环境，应该能带到下一个模型、下一个任务，并最终越出文本。这是赌注兑现的一层，也是离现有证据最远的一层。

我的三项研究目前住在前两层，并向第三层迈出了第一步：在标准指标失效处做测量，在结果共享处做精确 credit，以及一个被吸收然后撤除的训练期部件。这是有意的。没有地基，这叠楼会塌，而地基恰恰是没人造过的那部分。

凭什么相信楼造起来上限就会动？因为模型越来越多地从环境生产的经验中学习：被提出的任务、被打分的输出、被检查的错误。环境就是这些经验的工厂。在固定的工厂里改进的模型，会收敛到工厂能教的东西为止；要让上限动，工厂本身必须进步。这个领域见过一次同样的事：特征曾经是手工造的，后来变成学出来的，仅这一个变化就让领域改了名字。环境是剩下的最大一块手工阶段。

所以赌注再说一遍：环境自身必须像模型一样可扩展、可训练、可泛化。我从这叠楼的起点开工，从测量开始。[姊妹篇](/blog/2026/why-measurement-comes-first/)会说明这个顺序为什么是被迫的，不是选的。

*本文取代我早前以另一个名字写下的方向陈述。名字没有留下来，志向留下来了。*

</div>
<div lang="ja" markdown="1">

モデルは訓練できるものになりました。当たり前に聞こえますが、この十年の進歩はすべて、この一つの事実の上に立っています。システムに「いまどれくらいうまくやれているか」という信号を与え、その信号に沿って改善する道を与えれば、あとはスケールが引き受けてくれる。しかし、モデルがその中で学ぶ環境は、この取引を一度も受け取っていません。

モデル側が受け取ったものを、正確に言っておく価値があります。誤差逆伝播は、すべてのパラメータにすべての誤りの責任を分担させました。つまり、ネットワークの内部で credit assignment を解いたのです。この信号が存在した瞬間から、改善は職人技ではなく予算の問題になりました。より多くのデータ、より多くの計算、より良いモデル。私たちが scaling と呼ぶすべては、このループが人の手を離れて何十億回も回った上に成り立っています。

訓練のもう一方の側を見てください。環境は、一つのまとまりですらありません。こちらには preference データで訓練され、精度で評価される reward model。あちらには一致率で評価される verifier たち。別の場所には、ヒューリスティックで組まれ、直感で評価される curriculum。どの部品も別々に作られ、別々に評価され、別々に交換されます。それが存在する唯一の理由、つまり訓練対象のモデルに何をしたかで評価される部品は、一つもありません。環境はシステムではなく、部品の山です。

部品の山は訓練できません。これが、環境があの取引を受け取れなかった正直な理由であり、私が「環境を訓練できるものにする」を一つの問題と見なさない理由です。それは問題の積み重ねであり、各層は下の層の上に立っています。

**測定。** 一つの部品がモデルに何をしたか、読み取れますか。今日ではほとんど読み取れません。reward model の benchmark 精度は、それが訓練する policy を予測できません。効果は訓練の過程の内部でしか姿を現しません。この層が機能しない限り、その上のすべては当て推量です。

**Credit。** モデルは多くの部品に同時に訓練され、部品たちは一つの結果を共同で生み出します。どの取り分が誰のものか。部品を一つ外して再実行すれば、他のすべての部品が見るものを変えてしまっています。答えは間違い、しかもサンプルを増やしても直らない間違い方をします。credit は計算されなければならず、削除で近似してはいけません。

**部品の訓練。** 測定された効果は、部品自身の訓練信号になりえます。ここから環境はインフラであることをやめ、改善を始めます。ただしこの層には、モデル側にはなかった義務が伴います。部品は撤回可能でなければならず、得られたものは部品が去った後もモデルの側に残らなければなりません。さもなければ、改善したのはモデルではなく、モデルを取り囲むアンサンブルの方です。

**チーム。** 同じ一つのモデルに仕えながら共に訓練される部品たちは、干渉ではなく協調しなければなりません。個別の shaping が成功する場面で、結合した shaping が壊れることは知られています。この層は、下の層からの無料の帰結ではないのです。

**汎化。** 一つのモデルをうまく訓練した環境は、次のモデルへ、次のタスクへ、やがてテキストの外へ持ち越せるべきです。賭けが回収されるのはこの層であり、現在の証拠から最も遠いのもこの層です。

私の三つの研究はいま、最初の二つの層に住んでいて、第三の層に最初の一歩を踏み出しています。標準的な指標が壊れる場所での測定、結果が共有される場所での厳密な credit、そして吸収された後に撤回される一つの訓練時部品。これは意図的です。土台がなければこの積み重ねは崩れますし、土台こそ、誰も作っていなかった部分だからです。

積み重ねができれば天井が動くと、なぜ信じられるのか。モデルはますます、環境が生み出す経験から学ぶようになっているからです。提案されるタスク、採点される出力、検査される誤り。環境はその経験の工場です。固定された工場の中で改善するモデルは、工場が教えられるところまでで収束します。天井を動かすには、工場そのものが進歩しなければなりません。この分野は同じことを一度見ています。特徴量は手作りでしたが、学習されるものに変わり、その一つの変化が分野の名前を変えました。環境は、残された最大の手作りの段階です。

だから、賭けをもう一度。環境そのものが、モデルと同じようにスケールし、訓練され、汎化される必要があります。私はこの積み重ねの出発点、測定から始めます。[姉妹編](/blog/2026/why-measurement-comes-first/)では、この順序が選択ではなく必然である理由を述べます。

*このノートは、以前に別の名前のもとで書いた方向性の表明に代わるものです。名前は残りませんでしたが、志は残りました。*

</div>
