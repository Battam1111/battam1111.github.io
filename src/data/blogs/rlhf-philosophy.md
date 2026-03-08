---
title: "RLHF Should Be Treated as Feedback Modeling"
date: "2024-03-12"
summary: "RLHF is often described as reward optimization, but that framing is incomplete. In practice, the real challenge is modeling the structure and limits of feedback."
tags: ["RLHF", "Alignment", "Reward Modeling"]
---

## Why the usual description is incomplete

Reinforcement Learning from Human Feedback is often introduced in a compact and seemingly clear way: humans express preferences, those preferences are converted into a reward signal, and the model is then optimized against that signal.

This description is not wrong, but it encourages the wrong mental model.

It makes RLHF sound like a standard optimization pipeline with a better reward function. The deeper reality is messier. Human feedback is partial, context-dependent, and often internally inconsistent. It reflects judgments under uncertainty, not access to a perfect objective. Once we recognize that, RLHF starts to look less like reward optimization and more like a problem of feedback modeling under uncertainty.

That framing matters because it changes where we expect failures to emerge.

## The bottleneck is often not the optimizer

A lot of attention in RLHF naturally goes to the optimization stage: which reinforcement learning algorithm to use, how to control KL, how to stabilize updates, how to prevent collapse. These questions are important.

But in many practical settings, the decisive bottleneck lies earlier. It lies in how feedback is collected, represented, aggregated, and turned into a usable training signal.

If the reward model overfits, the downstream policy may optimize the wrong target. If the preference data is narrow, the resulting behavior may generalize poorly. If evaluative signals are inconsistent across contexts, the optimized model may appear aligned on benchmark prompts while failing on adjacent ones.

In that sense, RLHF systems are constrained not only by optimization quality, but by the epistemic quality of the feedback channel itself.

## Human feedback is structured, not scalar

One reason the reward-optimization framing is too narrow is that human judgments often contain structure that a scalar score cannot fully preserve.

For example, a human may prefer one response over another because it is more factual, more relevant, more cautious, or better calibrated to uncertainty. Those are different axes of evaluation. When they are collapsed too aggressively into a single signal, part of the useful structure disappears.

This is why reward modeling is not just a technical convenience. It is an attempt to approximate a latent evaluative process. The closer we get to modeling that process faithfully, the more reliable the downstream policy updates can become.

## Better reward models do not automatically imply better behavior

This is also why I think one of the most interesting lessons in RLHF is that stronger reward-model metrics do not always translate into stronger language-model performance. A reward model can become more accurate with respect to a given dataset while simultaneously becoming less useful as a training signal.

That can happen when the model becomes too narrow, too brittle, or too eager to exploit idiosyncratic patterns in the supervision source. In such cases, "better reward modeling" in the local metric sense may actually weaken the downstream learning dynamics.

This is a reminder that the purpose of feedback modeling is not merely to win on reward-model benchmarks. The purpose is to provide learning signals that lead to better agent behavior.

## A more useful perspective

If we treat RLHF as feedback modeling, several priorities become clearer:

- We should care more about how feedback varies across context.
- We should evaluate whether reward signals generalize, not just whether they fit held-out comparisons.
- We should treat uncertainty, disagreement, and missing information as first-class phenomena rather than nuisances to smooth away.
- We should design training pipelines that remain robust even when feedback is imperfect.

This perspective is demanding, but it is closer to the real problem. Human feedback is valuable precisely because it carries nuanced evaluative information. The challenge is that this information is difficult to formalize cleanly.

## Takeaway

RLHF is not simply a story about finding the right objective and then optimizing it well. It is a story about learning from feedback that is informative but imperfect, structured but incomplete, useful but never final.

That is why I find it more productive to think of RLHF as feedback modeling first and optimization second. Once that order is clear, many design decisions in the pipeline start to look different.
