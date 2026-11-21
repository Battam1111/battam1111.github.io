---
layout: post
lang: en
title: "Why Do Chinese LLMs Struggle with RL?"
date: 2026-11-15
description: "Beyond GPUs and infrastructure, I think there is a more fundamental reason, and it lies in the path Chinese RL took when it started."
tags: [reinforcement-learning, agents, llm-training]
categories: [essays]
---

Whenever the gap between Chinese models and those of OpenAI, Anthropic and Google came up this year, I kept hearing two explanations. One is that there are not enough GPUs, the other that the infrastructure lags behind. Both are true, but I don't think they explain everything. From what I have heard in conversations across the industry, the Chinese labs have all put real effort into long-horizon agentic RL, RL for coding agents above all, and for the most part it never took off. In the end, the gains in capability still came from distillation.

Why does something those three labs can make work fail in China? Beyond GPUs and infrastructure, I think there is a more fundamental reason. It lies in the path Chinese RL took when it started.

First, a little background; if you know it already, skip ahead. To train a large model with RL (reinforcement learning), you give it a task, let it work through to the end, score the result, and adjust the model according to the score. The core difficulty here is called credit assignment. When an attempt ends in success or failure, which of its steps deserve the credit or the blame? With only a few steps, that is easy to answer. When a single attempt runs to hundreds of steps, it becomes the crux of the whole problem.

## Why GRPO worked so well

Large-scale RL in China started from GRPO, which DeepSeek proposed. The idea is simple. The model attempts the same task several times, the scores are compared, and any attempt above the average is reinforced while any below it is pushed down. There is no need to train a separate critic, a model built to estimate how much score is still to come from the current step onward. A critic takes up its own share of GPU memory and compute, and it may not train well anyway.

{% include figs/chinese-llms-and-rl/group.en.html %}

GRPO proved itself on math problems. RL on math takes very few turns. The model thinks, gives an answer, and the episode is over in one or two. In that setting, the signal from comparing within the group, whether this attempt did better or worse than average, is enough to get credit assignment right. It saved memory, needed no critic and worked well, so it quickly became the default way to do RL in China.

## Once tasks get long, it stops working

GRPO's signal is actually coarse. The model has to finish a whole trajectory before it gets a single score, right or wrong, and that score is given to the whole trajectory. If the outcome is right, every step is reinforced; if it is wrong, every step is penalized, no matter which steps were in fact done well.

On simple math problems, a signal this coarse does little harm. But in today's coding agent tasks, a single attempt easily runs to dozens of turns and more than a hundred thousand tokens. When hundreds of decisions share one score, the model cannot tell which step made it succeed and which made it fail.

There is something worse. Comparing within a group only works if some attempts at the same task succeed and some fail. The longer the task, the more steps in a row have to go right, and the more often every attempt fails. When they all fail, they all get the same score, there is nothing to compare, and the compute for that round is wasted. As tasks get longer, GRPO's signal gets scarcer as well as coarser.

{% include figs/chinese-llms-and-rl/long.en.html %}

The bigger the model and the more complex the task, the finer the reward needs to be. That is exactly the direction in which GRPO's approach runs into a wall.

## Why it is so hard to get out

Everyone can see the problem, yet getting out is hard. Most new algorithms are improvements built on GRPO, and the general feeling is that GRPO is already well ahead of the alternatives. But for all the tweaking, the results barely move, because the root problem, a single score at the very end, has not been fixed.

Some have taken a different road with OPD (on-policy distillation), in which a student model works the tasks itself and a teacher model tells it, token by token, what was good and what was not. But OPD needs a good teacher first. And for the teacher to break through the current ceiling and become better than it is now, the only way is still RL.

So it becomes a vicious circle. However the algorithms are optimized, every road leads back to getting RL right first, and RL done the GRPO way cannot get credit assignment right on long tasks.

## What is locked in is a lesson, not code

Saying everyone is locked into GRPO calls for one explanation. Switching from GRPO to a method with a critic is a small change in the code. Why can't teams of several hundred people make the switch?

My reading is that what is locked in is not a choice of algorithm but accumulated capability. OpenAI, Anthropic and Google came all the way up from the RLHF era. Back then the standard recipe was PPO plus a critic plus a reward model, so they were forced to learn how to train a value model, how to keep it from collapsing, and how to keep it in step with a policy that keeps changing. That craft has settled into their teams.

Large-scale RL in China began at exactly the moment GRPO showed you could do very well without a critic. GRPO was designed partly with the GPU shortage in mind, since dropping the critic drops a large chunk of the cost. As a result, the Chinese labs in effect skipped this lesson. Now that tasks are long and a critic is truly needed, what is missing is not a switch but a whole body of engineering intuition that was never built up.

{% include figs/chinese-llms-and-rl/lesson.en.html %}

## What a critic really buys you: the scope of comparison

The difference between a critic and GRPO goes beyond training one more model. It lies in what each of them compares against.

GRPO's baseline comes only from the few attempts at the same task in the same batch, so it is a local comparison. If the whole group fails, it has nothing to go on.

A critic's baseline is learned from all experience, so it is global. It can recognize that the intermediate state in front of it looks a lot like states in other tasks that went on to succeed. So even if not one attempt at this task has succeeded, the critic can borrow experience from elsewhere to tell the model whether a step was a good one.

{% include figs/chinese-llms-and-rl/scope.en.html %}

Long-horizon tasks need exactly this kind of transfer, where a judgment learned on one task can be used midway through another. GRPO only ever looks at the group in front of it, so by its very structure it cannot do this.

## A deeper turn of the circle: who does the judging

If a critic is that good, why is it hard to train? The root cause is that judging whether an intermediate state of a long task is good is almost as hard as finishing the task. The judge has to be at least as smart as whoever does the work.

As far as I know, Google's internal RL relies on exactly this route, a critic or a PRM (process reward model, a model that scores each step). It uses generative methods to label every step, or even every token, and so gives feedback far finer than one score at the end. That is what gets its RL off the ground.

This route rests on a premise that is rarely said out loud. You need a judge stronger than the model being trained. Frontier labs have one, because they can use their own strongest model to judge the process. The strong model marks out good signals, those signals train a stronger model, and the stronger model becomes the judge in the next round. It is a loop that keeps itself turning.

Followers have no judge stronger than themselves. They can only borrow someone else's model, and that leads back to distillation.

So the vicious circle closes twice. Breakthroughs in capability depend on RL, RL depends on good mid-task signals, good mid-task signals depend on a stronger judge, and a stronger judge depends on a breakthrough in capability. First movers can climb on their own. Followers need outside help for every step up.

{% include figs/chinese-llms-and-rl/loop.en.html %}

## So where is the gap?

Putting all this together, here is my conclusion. GRPO was the handiest choice for a follower, and it made the trap deeper, but the trap is rooted further down. At the root, first movers can use their own models to train themselves, and followers cannot. Too few GPUs, too little compute and immature infrastructure add one more layer on top of this structure and widen the gap further.

If this reading is right, more patching on top of GRPO is unlikely to change the picture. What really needs attacking is how to get fine-grained mid-task signals on long tasks, either by training a good critic or by building good process judges. It is a lesson there is no way around, and the sooner it is made up, the better.

This view is based on what I have heard and on my own reasoning. I'd welcome discussion.
