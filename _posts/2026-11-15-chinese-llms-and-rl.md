---
layout: post
title: "Why Do Chinese LLMs Struggle with RL?"
title_zh: "为何国产大模型训不好 RL？"
title_ja: "中国の大規模モデルは、なぜ RL がうまくいかないのか"
date: 2026-11-15
description: "Beyond GPUs and infrastructure, I think there is a more fundamental reason, and it lies in the path Chinese RL took when it started."
description_zh: "卡和 infra 之外，我认为还有一个更根本的原因，它藏在国内 RL 起步时走的那条路里。"
description_ja: "GPU とインフラのほかに、もっと根本的な理由があると私は考えています。それは、中国の RL が始まったときに選んだ道に潜んでいます。"
tags: [reinforcement-learning, agents, llm-training]
categories: [essays]
---
{% raw %}
<div lang="en" markdown="1">

Whenever the gap between Chinese models and those of OpenAI, Anthropic and Google came up this year, I kept hearing two explanations. One is that there are not enough GPUs, the other that the infrastructure lags behind. Both are true, but I don't think they explain everything. From what I have heard in conversations across the industry, the Chinese labs have all put real effort into long-horizon agentic RL, RL for coding agents above all, and for the most part it never took off. In the end, the gains in capability still came from distillation.

Why does something those three labs can make work fail in China? Beyond GPUs and infrastructure, I think there is a more fundamental reason. It lies in the path Chinese RL took when it started.

First, a little background; if you know it already, skip ahead. To train a large model with RL (reinforcement learning), you give it a task, let it work through to the end, score the result, and adjust the model according to the score. The core difficulty here is called credit assignment. When an attempt ends in success or failure, which of its steps deserve the credit or the blame? With only a few steps, that is easy to answer. When a single attempt runs to hundreds of steps, it becomes the crux of the whole problem.

## Why GRPO worked so well

Large-scale RL in China started from GRPO, which DeepSeek proposed. The idea is simple. The model attempts the same task several times, the scores are compared, and any attempt above the average is reinforced while any below it is pushed down. There is no need to train a separate critic, a model built to estimate how much score is still to come from the current step onward. A critic takes up its own share of GPU memory and compute, and it may not train well anyway.

GRPO proved itself on math problems. RL on math takes very few turns. The model thinks, gives an answer, and the episode is over in one or two. In that setting, the signal from comparing within the group, whether this attempt did better or worse than average, is enough to get credit assignment right. It saved memory, needed no critic and worked well, so it quickly became the default way to do RL in China.

## Once tasks get long, it stops working

GRPO's signal is actually coarse. The model has to finish a whole trajectory before it gets a single score, right or wrong, and that score is given to the whole trajectory. If the outcome is right, every step is reinforced; if it is wrong, every step is penalized, no matter which steps were in fact done well.

On simple math problems, a signal this coarse does little harm. But in today's coding agent tasks, a single attempt easily runs to dozens of turns and more than a hundred thousand tokens. When hundreds of decisions share one score, the model cannot tell which step made it succeed and which made it fail.

There is something worse. Comparing within a group only works if some attempts at the same task succeed and some fail. The longer the task, the more steps in a row have to go right, and the more often every attempt fails. When they all fail, they all get the same score, there is nothing to compare, and the compute for that round is wasted. As tasks get longer, GRPO's signal gets scarcer as well as coarser.

The bigger the model and the more complex the task, the finer the reward needs to be. That is exactly the direction in which GRPO's approach runs into a wall.

## Why it is so hard to get out

Everyone can see the problem, yet getting out is hard. Most new algorithms are improvements built on GRPO, and the general feeling is that GRPO is already well ahead of the alternatives. But for all the tweaking, the results barely move, because the root problem, a single score at the very end, has not been fixed.

Some have taken a different road with OPD (on-policy distillation), in which a student model works the tasks itself and a teacher model tells it, token by token, what was good and what was not. But OPD needs a good teacher first. And for the teacher to break through the current ceiling and become better than it is now, the only way is still RL.

So it becomes a vicious circle. However the algorithms are optimized, every road leads back to getting RL right first, and RL done the GRPO way cannot get credit assignment right on long tasks.

## What is locked in is a lesson, not code

Saying everyone is locked into GRPO calls for one explanation. Switching from GRPO to a method with a critic is a small change in the code. Why can't teams of several hundred people make the switch?

My reading is that what is locked in is not a choice of algorithm but accumulated capability. OpenAI, Anthropic and Google came all the way up from the RLHF era. Back then the standard recipe was PPO plus a critic plus a reward model, so they were forced to learn how to train a value model, how to keep it from collapsing, and how to keep it in step with a policy that keeps changing. That craft has settled into their teams.

Large-scale RL in China began at exactly the moment GRPO showed you could do very well without a critic. GRPO was designed partly with the GPU shortage in mind, since dropping the critic drops a large chunk of the cost. As a result, the Chinese labs in effect skipped this lesson. Now that tasks are long and a critic is truly needed, what is missing is not a switch but a whole body of engineering intuition that was never built up.

## What a critic really buys you: the scope of comparison

The difference between a critic and GRPO goes beyond training one more model. It lies in what each of them compares against.

GRPO's baseline comes only from the few attempts at the same task in the same batch, so it is a local comparison. If the whole group fails, it has nothing to go on.

A critic's baseline is learned from all experience, so it is global. It can recognize that the intermediate state in front of it looks a lot like states in other tasks that went on to succeed. So even if not one attempt at this task has succeeded, the critic can borrow experience from elsewhere to tell the model whether a step was a good one.

Long-horizon tasks need exactly this kind of transfer, where a judgment learned on one task can be used midway through another. GRPO only ever looks at the group in front of it, so by its very structure it cannot do this.

## A deeper turn of the circle: who does the judging

If a critic is that good, why is it hard to train? The root cause is that judging whether an intermediate state of a long task is good is almost as hard as finishing the task. The judge has to be at least as smart as whoever does the work.

As far as I know, Google's internal RL relies on exactly this route, a critic or a PRM (process reward model, a model that scores each step). It uses generative methods to label every step, or even every token, and so gives feedback far finer than one score at the end. That is what gets its RL off the ground.

This route rests on a premise that is rarely said out loud. You need a judge stronger than the model being trained. Frontier labs have one, because they can use their own strongest model to judge the process. The strong model marks out good signals, those signals train a stronger model, and the stronger model becomes the judge in the next round. It is a loop that keeps itself turning.

Followers have no judge stronger than themselves. They can only borrow someone else's model, and that leads back to distillation.

So the vicious circle closes twice. Breakthroughs in capability depend on RL, RL depends on good mid-task signals, good mid-task signals depend on a stronger judge, and a stronger judge depends on a breakthrough in capability. First movers can climb on their own. Followers need outside help for every step up.

## So where is the gap?

Putting all this together, here is my conclusion. GRPO was the handiest choice for a follower, and it made the trap deeper, but the trap is rooted further down. At the root, first movers can use their own models to train themselves, and followers cannot. Too few GPUs, too little compute and immature infrastructure add one more layer on top of this structure and widen the gap further.

If this reading is right, more patching on top of GRPO is unlikely to change the picture. What really needs attacking is how to get fine-grained mid-task signals on long tasks, either by training a good critic or by building good process judges. It is a lesson there is no way around, and the sooner it is made up, the better.

This view is based on what I have heard and on my own reasoning. I'd welcome discussion.

</div>

<div lang="zh" markdown="1">

这一年聊到国内大模型和 OpenAI、Anthropic、Google 的差距，最常听到的解释有两条，一是卡不够，二是 infra 不如人。这两条都对，但我觉得解释不了全部。据我在业内交流中听到的情况，国内各家都投入做过长程的 agentic RL，尤其是 coding agent 的 RL，但普遍没有训起来，能力的提升最终还是靠蒸馏。

三家能跑通的事，国内为什么跑不通？卡和 infra 之外，我认为还有一个更根本的原因。它藏在国内 RL 起步时走的那条路里。

先简单交代一下背景，熟悉的朋友可以跳过。用 RL（强化学习）训练大模型，做法是给模型一道题，让它自己做完，再给结果打分，然后根据分数调整模型。这里有一个核心难题，叫 credit assignment（信用分配），说的是一次尝试最后成了或者败了，功劳和责任该记给其中的哪一步。一道题只有几步时，这不难；一次尝试有几百步时，这就成了整件事的关键。

## GRPO 为什么曾经那么好用

国内大规模做 RL，起点是 DeepSeek 提出的 GRPO。它的做法很简洁，同一道题让模型做好几遍，比较这几遍的得分，比平均分高的那次就鼓励，比平均分低的就压低。它不需要额外训练一个 critic。critic 是一个专门估计「从当前这一步往后，大概能拿多少分」的模型，训练它要多占一份显存、多花一份算力，而且还不一定训得好。

GRPO 当时是在数学题上奏效的。数学题的 RL 轮数很少，模型想一想、给出答案，一两轮就结束了。在这种情况下，靠组内比较拿到的那个「这次比平均好还是差」的信号，就足以把 credit assignment 做好。省显存，又不用训 critic，效果还好，它很快成了国内做 RL 的默认选择。

## 任务一变长，它就不灵了

GRPO 的信号其实很粗。模型要把一整条轨迹做完，才拿到一个对或错的分数，而这个分数是给整条轨迹的。做对了，每一步都被鼓励；做错了，每一步都被惩罚，不管其中哪几步其实做得很好。

在简单数学题上，这样粗一点没关系。可现在的 coding agent 任务，一次尝试动辄几十轮、十多万个 token。几百个决定共享一个分数，模型分不清是哪一步让它成功、哪一步让它失败。

还有一层更要命。组内比较要起作用，前提是同一道题的几次尝试里有成有败。任务越长，中间要连续做对的步骤越多，几次尝试全部失败的情况就越普遍。全部失败的时候，大家分数一样，比较不出任何差别，这一轮的算力等于白花。任务越长，GRPO 能拿到的信号越少，而不只是越粗。

模型越大、任务越复杂，对奖励精细程度的要求就越高。GRPO 这套办法恰好在这个方向上走不通。

## 为什么出不来

问题是大家看得到的，可是很难跳出来。现在大多数新算法都是在 GRPO 的基础上改进的，大家也普遍觉得 GRPO 已经比其他办法好不少。可是改来改去，也就那样，因为根上的问题，就是只有终点那一个分数，并没有被改掉。

也有人另辟蹊径，去做 OPD（on-policy distillation，在线蒸馏，就是让学生模型自己做题，由老师模型逐个 token 告诉它哪里好、哪里不好）。但 OPD 的前提是先有一个好老师。老师要突破上限、做得比现在更好，还是只能靠 RL。

这就成了一个死循环。算法再怎么优化，绕来绕去都得先把 RL 做好；而在 GRPO 这套办法里做 RL，长程任务的 credit assignment 又做不好。

## 锁住的是一课，不是一段代码

说大家被 GRPO 锁死了，有一处需要解释。从 GRPO 换成带 critic 的做法，在代码上是很小的改动，几百人的团队为什么换不过去？

我的理解是，锁住的不是算法选项，而是能力的积累。OpenAI、Anthropic、Google 是从 RLHF 那个年代一路走过来的。那时的标准做法就是 PPO 加 critic 加奖励模型，他们被迫学会了怎么训价值模型、怎么不让它训崩、怎么让它跟得上正在变化的策略。这些手艺沉淀在团队里。

国内大规模做 RL，恰好是从 GRPO 证明「不要 critic 也能做得很好」那一刻开始的。GRPO 的出发点本身就有卡不够的考量，省掉 critic 就省掉一大块开销。结果国内相当于跳过了这一课。等到任务变长、真正需要 critic 的时候，缺的不是一个开关，而是一整套没有攒下来的工程手感。

## critic 到底好在哪：比较的范围不同

critic 和 GRPO 的区别，不只是「多训一个模型」，而在于它们拿什么作比较。

GRPO 的基准只来自同一道题、同一批的那几次尝试，是一种局部的比较。这一组全挂了，它就一无所知。

critic 的基准是从所有经验里学出来的，是全局的。它能认出「眼下这个中间状态，很像别的题里那些后来做成了的状态」。所以哪怕这道题一次都没做对，critic 也能借别处的经验，告诉模型这一步走得好不好。

长程任务需要的恰恰是这种经验的迁移，在一道题里学到的判断，能用到另一道题的中途。GRPO 每次只看眼前这一组，结构上就做不到这一点。

## 死循环的更深一圈：谁来当评判

既然 critic 这么好，为什么难训？根本原因是，要判断一个长程任务的中间状态好不好，几乎和把任务做完一样难。评判的人，至少得和做事的人一样聪明。

据我了解，Google 内部做 RL 依赖的正是 critic 或 PRM（过程奖励模型，给每一步打分的模型）这条路，用生成式的方法给每一步、甚至更细到每个 token 做标注，给出比终点一个分数细得多的反馈，RL 才训得起来。

这条路有一个不常被说出来的前提，就是手里得有一个比被训模型更强的评判者。前沿实验室有，它们可以拿自己最强的模型当过程评判。强模型标出好的信号，训出更强的模型，这个更强的模型又成为下一轮的评判。这是一个能自己转起来的循环。

追赶者没有比自己更强的评判者，只能去借别人的模型，而这又回到了蒸馏。

于是死循环闭合了两次。能力突破靠 RL，RL 靠好的中途信号，好的中途信号靠更强的评判者，更强的评判者又靠能力突破。先发者能自己往上走，追赶者每往上一步都要借外力。

## 所以差距在哪

把这些放在一起看，我的结论是，GRPO 是追赶者处境里最顺手的选择，它让这个困境更深，但困境的根在更下面。根上是先发者能用自己的模型训练自己，追赶者做不到。卡和算力不够、infra 不够成熟，是在这个结构上又放大了一层。

如果这个判断是对的，那么在 GRPO 上继续修修补补，很难改变局面。真正要攻的，是怎么在长程任务里拿到细粒度的中途信号，要么把 critic 训好，要么把过程评判做好。这是一门绕不过去的课，早补比晚补好。

以上是我根据听到的情况和自己的推演得出的看法，欢迎讨论。

</div>

<div lang="ja" markdown="1">

この一年、中国の大規模モデルと OpenAI、Anthropic、Google との差が話題になるたびに、よく耳にした説明は二つでした。一つは GPU が足りないこと、もう一つはインフラが見劣りすることです。どちらも正しいのですが、それだけでは説明しきれないと私は思っています。業界の人たちとの話から聞いている限りでは、中国の各社はどこも長いタスクでのエージェント RL、とくにコーディングエージェントの RL に力を注いできましたが、多くはものになりませんでした。能力の伸びは、結局のところ蒸留に頼ることになりました。

三社でうまくいくことが、なぜ中国ではうまくいかないのか。GPU とインフラのほかに、もっと根本的な理由があると私は考えています。それは、中国の RL が始まったときに選んだ道に潜んでいます。

まず、背景を簡単に説明しておきます。ご存じの方は読み飛ばしてください。RL（強化学習）で大規模モデルを訓練するときは、モデルに課題を一つ与えて最後まで自分で解かせ、結果を採点し、その点数に応じてモデルを調整します。ここには credit assignment（貢献度の割り当て）と呼ばれる中心的な難題があります。ある試行が最終的に成功したとき、あるいは失敗したとき、その手柄や責任を途中のどのステップに帰すべきか、という問題です。課題が数ステップしかなければ、難しくはありません。しかし一回の試行が数百ステップに及ぶと、これがすべてを左右します。

## なぜ GRPO はあれほどうまくいったのか

中国で大規模な RL が始まったとき、出発点になったのは DeepSeek が提案した GRPO でした。やり方は簡潔です。同じ課題をモデルに何回か解かせ、それぞれの点数を比べて、平均より高かった試行は強め、低かった試行は弱めます。critic を別に訓練する必要もありません。critic とは、「いまのステップから先で、だいたい何点取れそうか」を見積もる専用のモデルです。訓練するには GPU メモリも計算もそのぶん余計にかかり、しかもうまく訓練できるとは限りません。

GRPO が成果を上げたのは、数学の問題でした。数学の RL はターン数がごく少なく、モデルが考えて答えを出せば、一、二ターンで終わります。この条件なら、グループ内の比較から得られる「今回は平均より良かったか、悪かったか」という信号だけで、credit assignment は十分にこなせます。メモリを節約でき、critic も要らず、しかも効果が高い。GRPO はたちまち、中国で RL をやるときの定番になりました。

## タスクが長くなると、効かなくなる

GRPO の信号は、実はかなり粗いものです。モデルは軌跡を一本最後までやり終えて、ようやく正解か不正解かの点数を一つもらいます。しかもその点数は、軌跡全体に対して与えられます。正解なら全ステップが強められ、不正解なら全ステップが罰せられます。そのうちのどのステップが実はよくできていたかは関係ありません。

簡単な数学の問題なら、この程度の粗さは問題になりません。しかし今のコーディングエージェントの課題では、一回の試行が数十ターン、十数万トークンに及ぶのが当たり前です。数百もの判断が一つの点数を分け合っていては、どのステップが成功につながり、どのステップが失敗を招いたのか、モデルには見分けがつきません。

さらに深刻な問題があります。グループ内の比較が働くには、同じ課題への何回かの試行の中に、成功と失敗が混じっていなければなりません。タスクが長くなるほど、途中で続けて正しくこなすべきステップが増え、すべての試行が失敗することが多くなります。全部失敗すれば点数はみな同じで、比べても差は何も出ず、その回の計算はまるごと無駄になります。タスクが長くなるほど、GRPO が得られる信号は粗くなるうえに、少なくもなっていくのです。

モデルが大きくなり、タスクが複雑になるほど、報酬にはより細かさが求められます。GRPO のやり方は、ちょうどこの方向で行き詰まります。

## なぜ抜け出せないのか

問題は誰の目にも見えているのに、抜け出すのは難しいのです。いま出ている新しいアルゴリズムの多くは GRPO を土台にした改良で、GRPO はほかの方法よりかなり優れているという見方も広く共有されています。けれども、いくら手を加えても大きくは変わりません。根本の問題、つまり最後に点数が一つあるだけという点が、そのまま残っているからです。

別の道を探る人もいて、OPD（on-policy distillation、オンポリシー蒸留）に取り組んでいます。生徒モデルに自分で課題を解かせ、教師モデルがトークンごとに、どこが良くてどこが悪いかを教えるやり方です。ただし OPD には、まず良い教師がいることが前提になります。そして教師が今の上限を破って、いまより良くなるには、やはり RL に頼るしかありません。

こうして堂々めぐりになります。アルゴリズムをどれだけ磨いても、回り回って、まず RL をうまくやらなければなりません。ところが GRPO のやり方で RL をやる限り、長いタスクの credit assignment はうまくいかないのです。

## 縛っているのはコードではなく、飛ばした授業

みんなが GRPO に縛られていると言うなら、説明しておくべきことが一つあります。GRPO から critic を使うやり方に切り替えるのは、コードの上ではごく小さな変更です。数百人規模のチームが、なぜ切り替えられないのでしょうか。

私の理解では、縛られているのはアルゴリズムの選択肢ではなく、能力の蓄積です。OpenAI、Anthropic、Google は RLHF の時代からずっと歩んできました。当時の標準的なやり方は、PPO に critic と報酬モデルを組み合わせるものでした。彼らは否応なく、価値モデルをどう訓練するか、どうすれば訓練が崩れないか、変わり続ける方策にどう追いつかせるかを身につけました。その腕前が、チームの中に蓄えられています。

中国で大規模な RL が始まったのは、ちょうど GRPO が「critic なしでも十分うまくいく」と示したその時でした。GRPO の発想にはもともと GPU 不足への配慮があり、critic を省けば大きな出費が省けます。その結果、中国はこの授業を飛ばしたも同然になりました。タスクが長くなり、critic が本当に必要になったいま、足りないのはスイッチ一つではありません。蓄えてこなかったエンジニアリングの勘の、そのすべてです。

## critic の何が良いのか：比べる範囲が違う

critic と GRPO の違いは、「モデルをもう一つ訓練する」ことにとどまりません。何と比べるかが違うのです。

GRPO の基準は、同じ課題、同じバッチの数回の試行からしか得られません。局所的な比較です。そのグループが全滅すれば、何もわかりません。

critic の基準は、あらゆる経験から学んだもので、全体を見渡したものです。「いま目の前にある途中の状態は、ほかの課題で後に成功した状態によく似ている」と見分けられます。だから、この課題で一度も正解できていなくても、critic はほかで得た経験を借りて、このステップが良かったかどうかをモデルに伝えられます。

長いタスクに必要なのは、まさにこうした経験の転移です。ある課題で身につけた判断を、別の課題の途中で使えることです。GRPO はいつも目の前のグループしか見ないので、構造上これができません。

## 堂々めぐりのさらに奥：誰が評価するのか

critic がそれほど良いなら、なぜ訓練が難しいのでしょうか。根本の理由は、長いタスクの途中の状態が良いかどうかを判断するのが、タスクをやり遂げるのとほとんど同じくらい難しいことにあります。評価する側は、少なくとも実行する側と同じくらい賢くなければなりません。

私の知る限り、Google の社内の RL は、まさに critic や PRM（プロセス報酬モデル、各ステップに点数をつけるモデル）の道に頼っています。生成的な手法で各ステップ、さらには各トークンにまでラベルを付け、最後の点数一つよりはるかに細かいフィードバックを与えることで、ようやく RL が回るのです。

この道には、あまり口にされない前提があります。訓練するモデルより強い評価者が手元にいることです。最前線の研究所にはそれがあり、自社で最も強いモデルを、過程を評価する役に使えます。強いモデルが良い信号をつけ、それでもっと強いモデルを訓練し、そのもっと強いモデルが次の回の評価者になります。自分で回り続けるループです。

追う側には、自分より強い評価者がいません。他社のモデルを借りるしかなく、それはまた蒸留に戻ることを意味します。

こうして堂々めぐりは二重に閉じます。能力の突破には RL が要り、RL には良い途中の信号が要り、良い途中の信号にはもっと強い評価者が要り、もっと強い評価者には能力の突破が要ります。先行する側は自力で上っていけますが、追う側は一段上るたびに外の力を借りなければなりません。

## では、差はどこにあるのか

これらを合わせて考えると、私の結論はこうです。GRPO は追う側の立場で最も手に取りやすい選択で、この苦境をさらに深めましたが、苦境の根はもっと下にあります。根にあるのは、先行する側は自分のモデルで自分を訓練できるのに、追う側にはそれができないということです。GPU と計算の不足、インフラの未成熟は、この構造の上で差をさらに一段広げています。

この見立てが正しければ、GRPO の上で手直しを続けても、局面はなかなか変わりません。本当に取り組むべきは、長いタスクで細かい途中の信号をどう得るかです。critic をきちんと訓練するか、過程の評価をきちんと作るか。避けて通れない授業で、補習は早いほどいいのです。

以上は、耳にしたことと自分なりの推論から導いた考えです。ご意見をいただければ幸いです。

</div>
{% endraw %}
