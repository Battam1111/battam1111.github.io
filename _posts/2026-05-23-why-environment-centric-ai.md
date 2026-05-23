---
layout: post
title: "Why Environment-Centric AI"
date: 2026-05-23
description: A short statement of why I treat the training environment as a first-class object of study, and what that buys you over the usual model-centric reading of LLM training.
tags: [research, environment-centric-ai, framing]
categories: [research]
---

Here is a question I keep returning to.

When a language model trained with RLHF refuses to ground its answer in the source material it was supposed to read, what was *actually* wrong?

The reflex answer is that the model is too small, the algorithm is too crude, or the reward signal was noisy. All of these can be true. But none of them, on their own, explain why the same base model trained under a slightly different setup *would have* learned to ground its answer in the source. The thing that changed across those two runs is not the model and not the algorithm. It is the **environment** the model was trained in: what evidence it saw, what objective it was rewarded against, at what granularity that reward arrived, on which task distribution, evaluated against which criterion.

Most LLM research talks about these as hyperparameters or implementation details. I think they are the object of study.

## The Sutton boundary, applied

Sutton and Barto's definition of an RL environment is strict: the environment is everything outside the agent that the agent cannot unilaterally alter. Rewards are external because they define the task; the agent cannot redefine its own task. The boundary is an *analytical* choice, but the rule is consistent.

Apply this rule to LLM post-training:

- The model's weights are the agent.
- The optimization algorithm (PPO, GRPO, DPO) is the procedure by which the agent updates itself.
- Everything else, **the reward model, the task distribution, the observation format, the curriculum, the verifier, the evaluation set**, is the environment.

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
