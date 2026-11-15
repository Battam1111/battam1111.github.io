---
layout: post
title: "LLMs Unified the Input, Coding Unified the Output"
title_zh: "LLM 统一了输入，coding 统一了输出"
title_ja: "LLM は入力を統一し、コーディングは出力を統一した"
date: 2026-11-15
description: "The first unification let models understand anything; this one lets them make anything."
description_zh: "前一次大一统让模型什么都能读懂，这一次让模型什么都能做出来。"
description_ja: "前の大統一でモデルは何でも読み取れるようになり、今回の統一で何でも作り出せるようになります。"
tags: [coding-agents, compression, llm]
categories: [essays]
---
{% raw %}
<div lang="en" markdown="1">

Many people see the coding agent as a tool for writing code, a stronger programming assistant. I have come to think it means far more than that. The coding paradigm is to today what LLMs were to the research of the pre-LLM era, one general approach that brings a whole range of specialized directions under one roof.

If I had to sum up my view in one sentence, it would be that LLMs unified the input and coding unified the output. The first unification let models understand anything; this one lets them make anything.

To explain this, I need to start from the idea that compression is intelligence.

## Compression is intelligence

Ilya Sutskever and others have long said, in all kinds of settings, that compression is intelligence. My own reading goes like this. If a single entity, say a neural network or a human brain, can on its own handle many different tasks and generalize to all sorts of domains, it must have grasped some essential regularities. Those regularities are what let one entity do so many things.

The reverse holds as well. Make one entity do tasks from different domains, which in plain terms means training one model on all kinds of tasks and using a good form to compress everything into it, and it is forced to learn those essentials. Learned separately, each piece can get by on memorized special cases. Learned together, they only fit once you find the regularities they share.

Ilya explained unsupervised learning in exactly these terms in a 2023 talk. He said a good compressor finds the structure that different data share, so compressing a lot of data together teaches more than compressing each piece separately. Jack Rae said the same year that the goal of a foundation model is to compress useful information losslessly, as well as it possibly can.

For LLMs, that good form is the Transformer and its attention architecture, together with the whole pipeline of pretraining, mid-training and post-training. Pretraining pulls the knowledge and information in all kinds of text into one model, so what it learns is general knowledge rather than knowledge specific to one field. Yi Ma's group even started from the goal of compressing data and derived the structure of the Transformer layer by layer, which suggests attention itself can be understood as doing compression.

Model size matters too, of course, but that is more of an engineering question. Once you understand the principle, you can keep making the entity bigger so that it learns more, compresses better and comes closer to the regularities behind the knowledge. A study from HKUST and Tencent tested dozens of public models and found that the better a model compresses data, the stronger its abilities, with the two lying almost on a straight line.

## Covering everything makes it better at each thing

This is how LLMs outclassed pre-LLM AI across the board. Instead of specializing, they cover everything, and that breadth is exactly what makes them better at the specialties.

A DeepMind study gives a very concrete example. A language model trained mainly on text, when used to compress images and speech, did better than PNG, which was designed for images, and FLAC, which was designed for audio. The generalist beat the specialists on their own ground.

This is the same thing Sutton called the bitter lesson. People always want to build rules out of their own reasoning and construct a perfect model, and without exception it runs into trouble in the end. Looking back on seventy years of AI research, Sutton concluded that what wins in the long run is always general methods that can absorb more compute, mainly learning and search. Hard-coding human understanding into a system works in the short run and holds it back in the long run.

In the pre-LLM era, people designed all sorts of network architectures and pipelines to push up benchmark scores, and none of them matched LLMs. Once LLMs arrived, they replaced all of those models and paradigms.

## The same thing has happened again

In the era of coding agents, it has happened again, and more thoroughly.

Look at what the latest models can do. I have watched Fable 5.2 paint a picture stroke by stroke purely by writing code, with a result that looks almost the same as a human painting. It can also build an entire 3D scene in code, and make videos. This used to be unimaginable. To generate video, you needed a dedicated video generation model, such as a diffusion model. Not anymore. Coding alone, as one paradigm, can do almost everything well, robot control included. There are even recent rumors that OpenAI has a model that does robot control well at very low latency.

All of this shows the same thing again and again. The further you go in splitting the model into parts that each do one specialized job, the more surely it all gets unified in the end. Eventually people find it is better to do it with one model.

Some will say one model is too big and too slow for these jobs. But speed can be solved through optimization. A model can be made much faster with almost no loss of ability. That is an engineering problem, not a problem with the paradigm.

## LLMs unified the input, coding unified the output

Why code and not something else? I think the key point is that the two unifications cover the two ends.

LLMs unified the input. They turned every task into text in, text out. Whether it is translation, question answering, writing or reasoning, what comes in is the same kind of thing, and the model understands it with one set of parameters. That unified the understanding end, so the model can read anything.

But understanding alone is not enough. What an LLM outputs is only text, and text by itself cannot touch the world. It can describe a painting but cannot paint one; it can explain how to control a robot but cannot move a single joint. So beyond LLMs, people still had to train separate specialized models for drawing, for video and for controlling machines, and the output end stayed fragmented.

Code fills in exactly that end. Code can express any computation and can also be executed, so the model's output is no longer just text. It becomes action that has an effect on the world. A painting, a 3D scene, a video, a command for a robot, each of them is what you get by running a program. All those specialized output models are folded into a single action, writing a program.

Put the two together and one model goes all the way from reading to doing. The first unification let models understand anything; this one lets them do anything.

## Learning plus search: the bitter lesson in its purest form

This also fits the bitter lesson neatly. Sutton said that what wins in the long run is learning and search. Pretraining is learning. A coding agent writing code, running it, reading the errors and fixing it again is search. The coding agent combines the two, which arguably makes it the purest form of the bitter lesson.

## Generating with code is itself compression

There is one more reason. Generating with code is itself compression. In compression theory, the complexity of a piece of data is defined as the length of the shortest program that can generate it, and this is called Kolmogorov complexity. So when a model paints a picture in code, it is writing a compressed description of that picture. The coding paradigm is not merely compressing in a way that resembles LLMs. It is the most direct form compression takes at the output end. The idea that compression is intelligence, from earlier, and the coding paradigm, here, are really two sides of the same thing.

## Code generates processes, not pixels

Some may think code only suits structured things like charts and geometric figures, and that real paintings and photographs are too complex to have any program shorter than themselves. That underestimates code.

Code generates a process, not pixels. A human painting is made one stroke at a time, so its shortest program is not a table of pixels but that sequence of strokes. A real photograph is produced by light and objects following physical laws, and a ray tracer plus a scene description is itself a program. The only part that truly cannot be compressed is the random detail, and random detail does not need to be reproduced point by point. It only has to be right statistically, and one call to a random number generator in the code is enough for that.

Almost everything in the world comes out of some process. Whatever has a generating process can be written out by some program. That is why I say coding has almost no ceiling.

This is moving very fast. In 2025 Meta published a test that turns compression directly into a programming problem. The model is given a piece of audio, text or DNA data and asked to write the shortest program that generates it. The conclusion at the time was that this was extremely hard even for the strongest models of that generation. A little more than a year later, models can already paint pictures in code that come close to a human's.

## Code is also the best teaching material

The coding paradigm has one more advantage that often gets overlooked. It is very well suited to collecting data, especially data distilled from people.

An ability like generating video is not something people can teach directly. I would not know how to tell a model "this is how video should be generated." But in the form of code, I can teach it. I can teach it how to generate video with code, how to paint with code, how to operate a machine with code. Almost anything coding can do can be taught this way. Passed through the layer of code, human skill becomes something a model can read and learn.

Code can also be run and checked, and you know whether it is right as soon as you run it. That makes it the place where RL gets rewards most easily, too. In [Why Do Chinese LLMs Struggle with RL?](/blog/2026/chinese-llms-and-rl/) I wrote that RL is stuck because it cannot get fine-grained feedback. Code is exactly the field where feedback is cheapest.

And coding itself can do almost anything; the only difference is whether the conditions are in place. It has almost no ceiling.

## Where specialized research goes

So my conclusion is that specialized research may well continue, but all of it will be overtaken by strong coding agent foundation models. Such research may still exist, but like today's expert systems or standalone image classifiers, it will rarely be put to real use. When it comes to practice, people will use the foundation model, unless a specialized solution is genuinely much cheaper.

LLMs unified the input and brought the many directions of the pre-LLM era into one. Coding agents are now unifying the output, and doing the same to today's specialized directions.

## References

- Ilya Sutskever, *An Observation on Generalization*, Simons Institute, 2023.
- Jack Rae, *Compression for AGI*, Stanford MLSys Seminar, 2023.
- Yaodong Yu et al., *White-Box Transformers via Sparse Rate Reduction: Compression Is All There Is?*, JMLR 2024.
- Yuzhen Huang et al., *Compression Represents Intelligence Linearly*, COLM 2024.
- Grégoire Delétang et al., *Language Modeling Is Compression*, ICLR 2024.
- Richard Sutton, *The Bitter Lesson*, 2019.
- Ori Yoran et al., *The KoLMogorov Test: Compression by Code Generation*, ICLR 2025.
- Marcus Hutter, Hutter Prize (since 2006).

</div>

<div lang="zh" markdown="1">

很多人把 coding agent 看成一个写代码的工具，一个更强的编程助手。我越来越觉得，它的意义远不止于此。coding 这个范式之于今天，就像当年 LLM 之于前 LLM 时代的那些研究，一个通用的东西，把一大堆专门的方向收归一统。

如果用一句话概括我的看法，那就是 LLM 统一了输入，coding 统一了输出。前一次大一统让模型什么都能读懂，这一次让模型什么都能做出来。

要说清楚这一点，得先从「压缩即智能」讲起。

## 压缩即智能

Ilya Sutskever 等人很早就在各种场合讲过「压缩即智能」。我自己的理解是，如果一个实体，比如一个神经网络或者一个人脑，单靠自己就能做很多不一样的任务、泛化到各种各样的领域，那它一定掌握了某些本质的规律。正是这些本质的规律，让它能用一个实体干这么多事。

反过来也成立。正因为让同一个实体去做不同领域的任务，说白了就是用一个模型去训练各种任务，用一种好的形式把这些东西都压缩进同一个实体，它才被迫学到这些本质。分开学，每一块都可以靠记住特例蒙混过去；放在一起学，只有找到它们共同的规律，才压得下。

Ilya 在 2023 年的一次报告里正是这么解释无监督学习的。他说，好的压缩器会找出不同数据之间共享的结构，所以把很多数据放在一起压，比分开压学得更深。Jack Rae 同年也讲过，基座模型的目标就是对有用的信息做尽可能好的无损压缩。

对 LLM 来说，这个「好的形式」就是 Transformer 和 attention 架构，以及预训练、中训练、后训练这一整套流程。预训练把各种文本里的知识和信息吸进一个模型，让它掌握的是通用的知识，而不是某个领域专有的知识。马毅团队的工作还从「把数据压缩」这个目标出发，一层层推导出了 Transformer 的结构，可见 attention 本身就可以理解为在做压缩。

模型的大小当然也重要，但那更偏工程。明白了这个道理，就可以把这个实体不断做大，让它学到更多，压得更好，更接近知识背后的规律。港科大与腾讯的研究测了几十个公开模型，发现模型压缩数据压得越好，各项能力就越强，两者几乎是一条直线。

## 做全，反而做得更专

这是 LLM 对前 LLM 时代人工智能的一次全方位降维打击。它不做专，而做全，而这个「全」本身就让它做得更专。

DeepMind 的一项研究给了一个很直观的例子。一个主要用文本训练的语言模型，拿去压缩图像和语音，压得比专门为图像设计的 PNG、专门为音频设计的 FLAC 还要好。通才在专才的地盘上赢了专才。

这和 Sutton 说的「苦涩的教训」是一回事。人类总想用自己的理性去构建规则，构建一个完美的模型，但最后无一例外都会出问题。Sutton 回顾七十年的 AI 研究，结论是长期胜出的总是那些能吃下更多算力的通用方法，主要是学习和搜索；把人的理解硬编码进系统，短期有效，长期反而拖后腿。

前 LLM 时代，大家设计各种各样的网络结构、各种各样的流程去刷分，可这些都不如 LLM。LLM 一来，把这些模型、这些范式全部替代了。

## 同样的事，又发生了一次

到了 coding agent 的时代，这件事又发生了一次，而且更彻底。

看看最新模型的表现。我亲眼看到，Fable 5.2 可以完全用写代码的方式，一笔一画地画出画来，画出的效果和人类的绘画几乎一样；也可以用代码做出一整个 3D 场景，做出视频。以前这是难以想象的。想生成视频，就得有一个专门的视频生成模型，比如 diffusion 模型。现在不用了，单靠 coding 这一个范式，几乎所有事情都能做好，包括机器人控制。最近甚至有传闻，说 OpenAI 有模型能以很低的延迟做好机器人控制。

这些一而再、再而三地说明同一件事。越是往精细里做，把模型拆成若干份、各自去做专门的事，最后越会被收归一统。到头来大家会发现，不如用一个模型去做。

有人会说，一个模型太大，做这些事太慢。但速度可以靠优化解决，模型可以被优化得很快，能力几乎不下降。这是工程问题，不是范式问题。

## LLM 统一了输入，coding 统一了输出

为什么是代码，而不是别的什么？我觉得最关键的一点，是这两次大一统统一的是两头。

LLM 统一的是输入。它把所有任务都变成「文本进、文本出」，不管是翻译、问答、写作还是推理，进来的都是同一种东西，模型用同一套参数去理解。这统一了理解这一端，模型什么都能读懂。

但只有理解还不够。LLM 的输出只是文字，文字本身碰不到世界。它可以描述一幅画，却画不出来；可以讲清楚怎么控制机器人，却动不了一根关节。所以在 LLM 之外，大家仍然要为画图、做视频、控制机器各自训练专门的模型，输出这一端始终是分裂的。

代码补上的正是这一端。代码能表达任何计算，又能被执行，于是模型的输出不再只是文字，而是能对世界起作用的动作。一幅画、一个 3D 场景、一段视频、一条机器人指令，都是一段程序跑出来的结果。各种专门的输出模型，被收进了「写一段程序」这一个动作里。

两次加起来，一个模型从读到做就打通了。前一次大一统让模型什么都能懂，这一次让模型什么都能做。

## 学习加搜索：苦涩的教训最纯粹的形态

这也正好合上了苦涩的教训。Sutton 说长期胜出的是学习和搜索。预训练是学习；coding agent 写代码、运行、看报错、再改，是搜索。coding agent 是这两者合在一起，可以说是苦涩的教训最纯粹的形态。

## 用代码生成，本身就是在压缩

还有一层原因是，用代码生成，本身就是在压缩。在压缩理论里，一段数据的复杂度，定义就是「能生成它的最短程序」有多长，这叫 Kolmogorov 复杂度。所以，模型用代码画出一幅画，就是在给这幅画写一份压缩描述。coding 这个范式不只是「像」LLM 那样在压缩，它就是压缩在输出这一端最直接的形态。前面讲的压缩即智能，和这里讲的 coding，其实是同一件事的两面。

## 代码生成的是过程，不是像素

也许有人会觉得，代码只适合画图表、画几何图形这类有结构的东西，真实的绘画、照片太复杂，没有比它本身更短的程序。但这低估了代码。

代码生成的是过程，而不是像素。人的一幅画是一笔一笔画出来的，它最短的程序不是一张像素表，而是那一串笔触。一张真实的照片，是光照和物体按物理规律造出来的，一套光线追踪加一份场景描述，本身就是一段程序。真正压不掉的，只有那些随机的细节，而随机细节并不需要逐点复现，只要统计上对就行，代码里调用一个随机数就够了。

世界上的东西，几乎都是由某个过程产生的。凡是有生成过程的，就有一段程序能把它写出来。这就是为什么我说 coding 几乎没有上限。

这件事进展得非常快。2025 年 Meta 发表过一个测试，直接把压缩做成编程题，给模型一段音频、文本或 DNA 数据，让它写出能生成这段数据的最短程序。当时的结论是，这对那一代最强的模型都极其困难。一年多以后，模型已经能用代码画出接近人类的画了。

## 代码还是最好的教材

coding 范式还有一个常被忽略的好处，就是非常适合收集数据，尤其是从人类那里蒸馏来的数据。

像生成视频这种能力，人类没法直接教。我不知道该怎么告诉一个模型「视频应该这样生成」。但如果换成代码的形式，我就可以教它，教它怎么用代码生成视频，怎么用代码画画，怎么用代码操控一台机器。几乎任何 coding 能做的事，都能这样教。人的手艺，经过代码这一层，就变成了模型读得懂、学得会的东西。

而且代码能执行、能验证，对不对，运行一下就知道。这让它也成了 RL 最容易拿到奖励的地方。我在[《为何国产大模型训不好 RL？》](/blog/2026/chinese-llms-and-rl/)里说过，RL 卡在拿不到细致的反馈；代码恰恰是反馈最便宜的领域。

而 coding 本身几乎可以做任何事情，差别只在条件够不够。它是一个几乎没有上限的东西。

## 专门的研究会去哪里

所以我的结论是，以后专门的研究可能依然会存在，但都会被强大的 coding agent 基座模型超越。这些研究也许还在，但就像今天的专家系统、单独的图像分类模型一样，很少再被拿来实际用。真要落到实际，大家会用基座模型，除非某个专门的方案真的便宜很多。

LLM 当年统一了输入，把前 LLM 时代的各个方向收归一统；coding agent 正在统一输出，对今天的各个专门方向再做一次。

## 参考

- Ilya Sutskever, *An Observation on Generalization*, Simons Institute, 2023.
- Jack Rae, *Compression for AGI*, Stanford MLSys Seminar, 2023.
- Yaodong Yu et al., *White-Box Transformers via Sparse Rate Reduction: Compression Is All There Is?*, JMLR 2024.
- Yuzhen Huang et al., *Compression Represents Intelligence Linearly*, COLM 2024.
- Grégoire Delétang et al., *Language Modeling Is Compression*, ICLR 2024.
- Richard Sutton, *The Bitter Lesson*, 2019.
- Ori Yoran et al., *The KoLMogorov Test: Compression by Code Generation*, ICLR 2025.
- Marcus Hutter, Hutter Prize（2006 起）.

</div>

<div lang="ja" markdown="1">

コーディングエージェントを、コードを書く道具、より強力なプログラミング支援ツールと見る人は多いと思います。けれども私は、その意味はそれよりはるかに大きいと考えるようになりました。今日のコーディングというパラダイムは、かつての LLM が LLM 以前の研究に対して持っていた意味と同じです。一つの汎用的なものが、数多くの専門的な方向を一つにまとめてしまうのです。

私の考えを一言でまとめるなら、LLM は入力を統一し、コーディングは出力を統一した、ということです。前の大統一でモデルは何でも読み取れるようになり、今回の統一で何でも作り出せるようになります。

これを説明するには、「圧縮は知能である」という話から始める必要があります。

## 圧縮は知能である

Ilya Sutskever たちは早くから、さまざまな場で「圧縮は知能である」と語ってきました。私自身の理解はこうです。ある一つの実体、たとえばニューラルネットワークや人間の脳が、それ一つで多くの異なる課題をこなし、さまざまな分野に汎化できるなら、それは何らかの本質的な規則性をつかんでいるはずです。その本質的な規則性こそが、一つの実体にこれほど多くのことをさせているのです。

逆も成り立ちます。一つの実体に異なる分野の課題をやらせる、つまり一つのモデルでさまざまな課題を訓練し、良い形式でそれらを同じ実体に圧縮して詰め込むからこそ、その実体は本質を学ばざるを得なくなります。別々に学べば、それぞれは特殊な例を覚えるだけでごまかせます。まとめて学べば、共通の規則性を見つけない限り詰め込みきれません。

Ilya は 2023 年のある講演で、まさにこのように教師なし学習を説明しました。良い圧縮器は異なるデータの間で共有されている構造を見つけ出すので、多くのデータをまとめて圧縮するほうが、別々に圧縮するより深く学べる、というのです。同じ年に Jack Rae も、基盤モデルの目標は役に立つ情報をできるだけうまく可逆圧縮することだと述べています。

LLM にとって、その「良い形式」とは Transformer と attention のアーキテクチャ、そして事前学習、中間学習、事後学習という一連の流れです。事前学習はさまざまなテキストに含まれる知識と情報を一つのモデルに取り込み、ある分野に固有の知識ではなく、汎用的な知識を身につけさせます。馬毅（Yi Ma）のチームは、「データを圧縮する」という目標から出発して、Transformer の構造を一層ずつ導き出しました。attention そのものが圧縮をしていると理解できるわけです。

モデルの大きさももちろん重要ですが、それはどちらかといえば工学の問題です。この原理がわかれば、実体をどんどん大きくして、より多くを学ばせ、よりうまく圧縮させ、知識の背後にある規則性に近づけることができます。香港科技大学とテンセントの研究は、数十の公開モデルを調べ、データをうまく圧縮できるモデルほど各種の能力が高く、両者がほぼ一直線に並ぶことを示しました。

## 何でもやることで、かえって専門に強くなる

これは、LLM 以前の人工知能に対して、LLM があらゆる面で次元の違う勝ち方をしたということです。専門に絞るのではなく、何でもやる。そしてその「何でも」こそが、専門分野でもより強くしているのです。

DeepMind のある研究が、とてもわかりやすい例を示しています。主にテキストで訓練された言語モデルを画像や音声の圧縮に使ったところ、画像専用に設計された PNG や、音声専用に設計された FLAC よりもよく圧縮できたのです。万能選手が、専門家の土俵で専門家に勝ちました。

これは Sutton の言う「苦い教訓」と同じことです。人間はいつも自分の理性で規則を組み立て、完璧なモデルを作ろうとしますが、最後には例外なく問題が出てきます。Sutton は七十年にわたる AI 研究を振り返り、長い目で見て勝つのは、より多くの計算を取り込める汎用的な方法、主に学習と探索だと結論づけました。人間の理解をシステムに直接書き込むと、短期的には効いても、長期的にはかえって足を引っ張ります。

LLM 以前の時代、人々はさまざまなネットワーク構造や処理の流れを設計してスコアを競いましたが、どれも LLM には及びませんでした。LLM が現れると、そうしたモデルやパラダイムはすべて置き換えられました。

## 同じことが、もう一度起きた

コーディングエージェントの時代になって、同じことがもう一度、しかもより徹底的に起きました。

最新のモデルを見てください。私はこの目で、Fable 5.2 がコードを書くだけで一筆一筆絵を描き、人間の絵とほとんど変わらない仕上がりにするのを見ました。コードで 3D のシーンを丸ごと作ることも、動画を作ることもできます。以前は考えられないことでした。動画を生成したければ、拡散モデルのような専用の動画生成モデルが必要だったのです。いまはその必要がありません。コーディングという一つのパラダイムだけで、ロボットの制御も含め、ほとんどのことがうまくできます。最近は、OpenAI には非常に低い遅延でロボットをうまく制御できるモデルがある、という噂まであります。

これらは何度も同じことを示しています。細かく分けて、モデルをいくつにも分割し、それぞれに専門の仕事をさせるほど、最後には一つにまとめられていく。結局、一つのモデルでやったほうがいいと誰もが気づくことになります。

一つのモデルでは大きすぎて、こうしたことをやらせるには遅すぎる、と言う人もいるでしょう。しかし速度は最適化で解決できます。モデルは能力をほとんど落とさずに、ずっと速くできます。これは工学の問題であって、パラダイムの問題ではありません。

## LLM は入力を統一し、コーディングは出力を統一した

なぜコードなのか、ほかの何かではないのか。いちばん大事なのは、二度の大統一がそれぞれ両端を統一しているという点だと思います。

LLM が統一したのは入力です。あらゆる課題を「テキストを入れて、テキストを出す」形に変えました。翻訳でも質疑応答でも、文章を書くことでも推論でも、入ってくるのは同じ種類のもので、モデルは同じパラメータでそれを理解します。こうして理解の側が統一され、モデルは何でも読み取れるようになりました。

しかし理解だけでは足りません。LLM の出力は文字にすぎず、文字それ自体は世界に触れられません。絵を描写することはできても、描くことはできません。ロボットをどう制御するかを説明できても、関節一つ動かせません。だから LLM とは別に、絵を描く、動画を作る、機械を制御するといったことのために、それぞれ専用のモデルを訓練する必要があり、出力の側はずっとばらばらのままでした。

コードが埋めたのは、まさにこの側です。コードはどんな計算でも表現でき、しかも実行できます。だからモデルの出力はもはや文字だけではなく、世界に働きかける動作になります。一枚の絵、一つの 3D シーン、一本の動画、一つのロボットへの指令。どれもプログラムを走らせた結果です。さまざまな専用の出力モデルが、「プログラムを書く」という一つの動作に収められたのです。

二つを合わせると、一つのモデルで読むことからやることまでがつながります。前の大統一でモデルは何でも理解できるようになり、今回の統一で何でもできるようになります。

## 学習と探索：苦い教訓のもっとも純粋なかたち

これは苦い教訓ともぴったり重なります。Sutton は、長い目で見て勝つのは学習と探索だと言いました。事前学習は学習です。コーディングエージェントがコードを書き、実行し、エラーを読み、また直すのは探索です。コーディングエージェントはこの二つを合わせたもので、苦い教訓のもっとも純粋なかたちだと言えます。

## コードで生成することは、それ自体が圧縮である

もう一つ理由があります。コードで生成することは、それ自体が圧縮なのです。圧縮の理論では、あるデータの複雑さは「それを生成できる最短のプログラム」の長さで定義され、これをコルモゴロフ複雑性と呼びます。ですから、モデルがコードで一枚の絵を描くのは、その絵の圧縮された記述を書いていることになります。コーディングというパラダイムは、LLM のように圧縮しているのに「似ている」だけではありません。出力の側における、圧縮のもっとも直接的なかたちなのです。最初に述べた「圧縮は知能である」と、ここで述べたコーディングは、同じことの表と裏です。

## コードが生み出すのは過程であって、ピクセルではない

コードが向いているのはグラフや幾何学図形のような構造のあるものだけで、本物の絵や写真は複雑すぎて、それ自体より短いプログラムなどない、と思う人もいるかもしれません。しかしそれは、コードを過小評価しています。

コードが生み出すのは過程であって、ピクセルではありません。人間の絵は一筆一筆描かれたもので、その最短のプログラムはピクセルの表ではなく、その筆の運びの連なりです。本物の写真は、光と物体が物理法則に従って作り出したもので、レイトレーシングとシーンの記述の組み合わせは、それ自体が一つのプログラムです。本当に圧縮できないのはランダムな細部だけですが、ランダムな細部は一点ずつ再現する必要はなく、統計的に正しければ十分です。コードの中で乱数を一つ呼び出せば足ります。

世界にあるものは、ほとんどが何らかの過程から生まれています。生成の過程があるものなら、それを書き出すプログラムがあります。コーディングにはほとんど上限がないと私が言うのは、このためです。

この分野の進歩は非常に速いです。2025 年に Meta は、圧縮をそのままプログラミングの問題にしたテストを発表しました。音声、テキスト、DNA のデータを与え、それを生成できる最短のプログラムをモデルに書かせるものです。当時の結論は、その世代で最強のモデルにとっても極めて難しい、というものでした。それから一年あまりで、モデルはコードで人間に近い絵を描けるようになっています。

## コードは最良の教材でもある

コーディングというパラダイムには、見過ごされがちな利点がもう一つあります。データ、とくに人間から蒸留したデータを集めるのにとても向いているのです。

動画を生成するような能力は、人間が直接教えることができません。「動画はこうやって生成するものだ」とモデルにどう伝えればいいのか、私にはわかりません。けれどもコードの形にすれば、教えることができます。コードで動画を生成する方法、コードで絵を描く方法、コードで機械を操作する方法を教えればいいのです。コーディングでできることなら、ほとんど何でもこうして教えられます。人間の技は、コードという層を通すことで、モデルが読んで学べるものになります。

しかもコードは実行でき、検証できます。正しいかどうかは、走らせてみればわかります。そのため、RL がもっとも報酬を得やすい場所にもなっています。[『中国の大規模モデルは、なぜ RL がうまくいかないのか』](/blog/2026/chinese-llms-and-rl/)で書いたように、RL がつまずいているのは細かいフィードバックが得られないからです。コードは、まさにフィードバックがもっとも安く手に入る分野です。

そしてコーディングそのものは、ほとんど何でもできます。違いは条件がそろっているかどうかだけです。ほとんど上限のないものなのです。

## 専門の研究はどこへ向かうのか

ですから私の結論はこうです。専門の研究はこれからも残るかもしれませんが、どれも強力なコーディングエージェントの基盤モデルに追い越されていくでしょう。そうした研究はなお存在するかもしれません。しかし、今日のエキスパートシステムや単独の画像分類モデルと同じように、実際に使われることはまれになります。いざ実用となれば、ある専門的な方法が本当にずっと安上がりでもない限り、人々は基盤モデルを使うでしょう。

LLM はかつて入力を統一し、LLM 以前の時代のさまざまな方向を一つにまとめました。コーディングエージェントはいま出力を統一し、今日のさまざまな専門の方向に対して、同じことをもう一度しています。

## 参考文献

- Ilya Sutskever, *An Observation on Generalization*, Simons Institute, 2023.
- Jack Rae, *Compression for AGI*, Stanford MLSys Seminar, 2023.
- Yaodong Yu et al., *White-Box Transformers via Sparse Rate Reduction: Compression Is All There Is?*, JMLR 2024.
- Yuzhen Huang et al., *Compression Represents Intelligence Linearly*, COLM 2024.
- Grégoire Delétang et al., *Language Modeling Is Compression*, ICLR 2024.
- Richard Sutton, *The Bitter Lesson*, 2019.
- Ori Yoran et al., *The KoLMogorov Test: Compression by Code Generation*, ICLR 2025.
- Marcus Hutter, Hutter Prize（2006 年から）.

</div>
{% endraw %}
