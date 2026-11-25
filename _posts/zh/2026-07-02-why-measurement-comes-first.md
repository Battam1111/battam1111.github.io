---
layout: post
lang: zh
title: "为什么测量必须先行"
date: 2026-07-02
description: "三个领域各用各的语言撞上同一堵墙。体制依赖性迫使测量进入训练过程内部，而撤除测试决定什么才算贡献。"
tags: [research, measurement, credit, framing]
categories: [research]
---

三个领域撞上了同一堵墙，各说各的语言。

在 RLHF 里，这堵墙是：reward model 的 benchmark 准确率无法预测它训练出的 policy。我的第一项研究同时改变 reward model 的准确率与它的训练步数，发现了一个内部最优点：过了某个点，更准确的 reward model 训练出更差的 policy。表现最好的 reward model 与最准的那个，在给出的奖励分布上、在所训 policy 的 KL 散度上，也都不一样。领域自己的评估路线此后在更大尺度上记录了同样的脱节：RewardBench 2 承认准确率是必要而不充分的，Frick 等人报告 benchmark 高分与下游 RLHF 表现在头部模型中呈负相关。公认的机制是 reward overoptimization，穿着 RL 外衣的 Goodhart 定律（Gao、Schulman 与 Hilton，ICML 2023）。Best-of-N 选择是另一种体制，静态分数在那里仍然管用；崩坏发生在 policy optimization 里。

在控制领域，这堵墙是：所有人依赖的那条定理止步于 reward。Ng、Harada 与 Russell（1999）证明了基于势函数的 reward shaping 保持最优 policy 不变，而且这一保证在那里是充要的。action channel 没有这样的定理，这至今仍是活跃前沿（Forbes 等，ICML 2025）。实践显示了代价：在 action 上学到的修正，要么部署时一直留着（residual policy learning 就把它留在固定的 base 上），要么在没有保证的情况下拿掉。我的第二项研究在 action 输出上联合训练一个门控 shaping 项，并直接测量它向 base policy 的吸收：base 可训练、且自己的输出层能精确复现这一项时，就会把它吸收；门先升起、再自行回落，之后拿掉这一项几乎不花代价。撤除因此是被测量的，而不是被寄望的。

在协作式 LLM 系统里，这堵墙是：一个共享的结果，没有办法拆分。这是这个领域里最老的名字：credit-assignment 问题，Minsky 于 1961 年命名。在单个可微模型内部，反向传播回答了它。在训练系统的模型与模型之间，没有梯度流动，而一种标准的变通办法（把一个部件拿掉重跑）带着结构性偏差：移除改变了所有读到它的下游部件收到的东西，样本再多也消不掉这份偏差。我的第三项研究表明，在 LLM agent 团队里，只要下游 agent 读到的一切都写进了记录（trace），这个变通就不必要，因为此时记录就是状态。团队中的 agent 只读记录时，这一点由构造保证；只有记录之外的隐藏状态不在保证之内。在任何一个决策点，都可以换掉一条消息、真实续跑到拿到奖励为止，此前的一切保持原样，这就是反事实续跑（counterfactual continuation）。per-decision credit 由此在识别意义上精确，只剩采样方差。

同一堵墙，三种语言。但为什么修法必须是"在训练过程内部测量"，而不是"在外面造更好的基准"？因为领域自己的证据显示效果是体制依赖的。同一个 reward model 在不同训练体制下给出不同的下游结果：on-policy 对 off-policy，policy optimization 对 best-of-N。静态基准无法预测一个依赖于它并不知道的体制的效果。这不是方法论口味，这是体制依赖性强加的结论。

底下还有第二条原理，它决定什么才算贡献。一个训练期部件可以用两种方式帮忙：把能力写进模型的权重，或者只要自己一直挂着就把系统撑住。把这件事做对的传统，都把撤除写进了概念本身。教学脚手架（Wood、Bruner 与 Ross，1976）把辅导者的支持定义为随学习者胜任而逐渐消退之物。蒸馏（Hinton、Vinyals 与 Dean，2015）用部署时独自运行的小模型来衡量成功。而当下领域的很大一部分在往反方向走：test-time compute 把 verifier 和搜索永久挂在推理上，按次租用能力。两者都是正当的产品，但它们是不同的产品；只有撤除测试能告诉你造出来的是哪一个：能力在权重里，还是能力在系统里。

把两条原理放在一起，整个纲领的顺序就自己掉出来了。在能计算每个部件的贡献之前，你没法按贡献去训练环境的部件；你没法在训练之外计算它，因为效果依赖体制；而在它经受住部件撤除之前，你根本不能称它为贡献。测量不是计划里谦虚的那部分。它是地基。[姊妹篇](/blog/2026/making-the-environment-trainable/)描述地基之上的楼层。
