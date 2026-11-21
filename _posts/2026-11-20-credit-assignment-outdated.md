---
layout: post
lang: en
title: "Is Credit Assignment Outdated?"
date: 2026-11-20
description: "Methods go out of date; problems do not. The era of long-horizon tasks and agents is exactly when credit assignment most needs solving in its own right."
tags: [reinforcement-learning, agents, llm-training]
categories: [essays]
---

A few days ago I published [Why Do Chinese LLMs Struggle with RL?](/blog/2026/chinese-llms-and-rl/), and its version on Xiaohongshu (RedNote) drew more than a hundred comments. One kind of reply kept coming back. Hardly anyone uses a critic any more, it went; the leading labs have dropped PPO, and some have gone back to the simpler REINFORCE. A critic works at small scale but does not fit how things scale up. A critic has to predict the future, which may be harder than solving the task itself. Someone also said that if one RL trajectory takes days to run, you should not do RL on that task at all and just use SFT. Follow these remarks to their end and you arrive at one conclusion, that long-horizon credit assignment is outdated. Nor is this view confined to the comments; plenty of people in the field think credit assignment is no longer useful, that its time has passed.

Let me put it plainly. There is no such thing as credit assignment going out of date. Calling it outdated may sound like standing at the frontier, but it confuses a problem with a method, and in RL that is an elementary mistake. It is a problem that is always there in RL, and the only things that change are how hard it is to solve and whether it needs solving in its own right. The era of long-horizon tasks and agents is exactly when it most needs solving in its own right.

{% include figs/credit-assignment-outdated/papers.en.html %}

First, a little background, which readers who know it can skip. When RL trains a large model, the model gets a single score only after it finishes a whole task. Credit assignment is the question of which steps deserve the credit, or the blame, once that task has succeeded or failed.

## Problem and Methods

What those remarks call outdated is really specific methods such as PPO and the critic. Methods do go out of date. The problem does not. As long as a model gets one score only after finishing a whole task, that score has to be shared out among the steps somehow.

GRPO does not get around the problem either. It compares the score of a whole trajectory with the group's average and hands that difference, unchanged, to every token. If the attempt was right, every step is reinforced together; if it was wrong, every step is penalized together. This is the coarsest way to split the score, but it is still a way to split it.

{% include figs/credit-assignment-outdated/split.en.html %}

So "no critic" means a different way of splitting, not that the problem went away. Nor were the critic, process supervision and PPO ever tied together. PPO falling out of fashion does not make the critic useless, still less credit assignment. Tying a problem to one method, then declaring the problem outdated because the method is out of fashion, is a step of reasoning that does not hold.

## The Short-Horizon Era

Not solving it in its own right does not mean the problem is absent. It only means that in that period it was easy, and a coarse split was enough. On this point, much of what those remarks say is right.

First, on short-horizon tasks such as math problems, there are very few places where a real choice is made. Wang et al., in [a 2025 paper](https://arxiv.org/abs/2506.01939), looked at the entropy of each token in a reasoning trace, that is, how unsure the model is at that position, and found that only about a fifth of the tokens have high entropy. These tokens are like forks in the road and decide which way the reasoning goes, while the other four fifths mostly just carry on. Updating only that fifth matched updating every token on an 8B model and did clearly better on 14B and 32B. With few forks and a short road, even an equal split gives each fork a large enough share.

{% include figs/credit-assignment-outdated/fork.en.html %}

Second, sampling is cheap. A math problem is done quickly, and attempting the same problem dozens of times costs little, so more samples can make up for a coarse signal. Yue et al. ([NeurIPS 2025](https://arxiv.org/abs/2504.13837)) also found that on math and coding problems, what a model can solve after RL hardly goes beyond what the base model can solve given a few more tries.

Finally, a critic really is hard to train. It has to predict the future, and a critic that estimates badly is sometimes worse than simply splitting the score evenly. On the theory side, Jia, Rakhlin and Xie proved in [an ICML 2025 paper](https://arxiv.org/abs/2502.10581) that supervision on outcomes alone is statistically not much harder than step-by-step process supervision, with a gap of at most a polynomial factor in the number of steps.

All of this is true, but taken together it says one thing. On short-horizon tasks the problem is easy and does not need solving in its own right. The same theory paper even proves that when you can roll out again from a step, the advantage function (how much better this step is than average) is itself the optimal process reward model. When outcome supervision learns well, it is getting the credit right inside the algorithm; it just does not do so as a separate piece. As for that polynomial factor in the number of steps, my reading is that it can be ignored on a problem of a few steps and cannot be ignored at a few hundred.

## The Agent Era

In agentic RL, every one of the conditions that made the problem easy is gone.

First, the forks have become very many. A single coding-agent attempt easily runs to dozens of turns and over a hundred thousand tokens, and in every turn, which file to read, which line to change and whether to run the tests are real choices. One wrong turn wastes everything after it, and the steps that were right before it are penalized along with it.

{% include figs/credit-assignment-outdated/blame.en.html %}

Second, sampling itself is no longer cheap. When a larger model runs agentic tasks, one trajectory takes a few days at best and a week or two at worst, so making up for a coarse signal by sampling a few more times is not an option. The longer the task, the more often every attempt in a group fails, and then comparing within the group yields no signal at all, as I wrote in *Why Do Chinese LLMs Struggle with RL?*

Finally, environments as they are now are harder to deal with. Zhang's [2026 survey](https://arxiv.org/abs/2604.09459) is devoted to exactly this problem and lists reasons why agentic RL makes credit assignment harder, for example that the model cannot see the whole state of the environment, that how the environment changes is not decided by the model's actions alone, that you cannot freely go back to a step in the middle and start again, and that whether an intermediate step was right is hard to verify. The survey collects methods built for this problem between January 2024 and July 2026, and its core methods alone number 56. This year NeurIPS also accepted [a paper](https://arxiv.org/abs/2605.08013) on how to share a command-line agent's final score out among its individual actions. An outdated problem does not produce dozens of new solutions in little more than two years.

So calling it outdated gets the timing exactly backwards. The time when credit assignment could most safely be ignored was the era of math problems. The time when it can least be ignored is now.

## The Premise of "Outdated"

Not solving credit assignment in its own right has a cost. The cost is filling the gap with sheer sampling, running the same task dozens or hundreds of times until the group holds both successes and failures, then relying on large batches to average a coarse signal into a direction. With enough GPUs and data this certainly works, and GRPO can be trained by brute force.

{% include figs/credit-assignment-outdated/cost.en.html %}

So behind "outdated" lies an assumption, that GPUs and data are unlimited and every long-horizon task can be run as many times as it takes. By that logic, we might as well say we have unlimited GPUs and data and get everything right in one go. In reality, nobody has that.

Closely related is another common line. Seeing that data matters, people neglect algorithms, or even decide that only data matters. Data does matter, and nobody denies it. But data mattering does not imply that algorithms do not. Everyone knows that training base models has become more and more of an engineering effort, and that should make it all the clearer that no link in the chain can fail. If any one of data, algorithms, infrastructure or environments breaks, it drags the whole chain down. Why, then, would anyone think one link is what matters most and the rest hardly matter? Good data only gives you the potential to train RL well; whether that potential is realized depends on how the algorithm makes use of every score. Recognizing data alone is a little like a child who has just learned a new word and uses it to explain everything. It sounds knowledgeable, but it is naive.

{% include figs/credit-assignment-outdated/chain.en.html %}

As for "just use SFT", that is another way around the problem. When the problem gets hard, stop doing that kind of task. But that kind of task is exactly what agents are for.

Methods go out of date; problems do not. In the era of long-horizon tasks and agents, credit assignment is not an old question to put down but one there is no way around.
