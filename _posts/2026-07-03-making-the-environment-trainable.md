---
layout: post
lang: en
title: "Making the Environment Trainable"
date: 2026-07-03
description: "Models became trainable; the environment never got that deal. Today it is not even a single thing. What it takes to change that, laid out as a stack of problems, and why the ceiling moves if the stack gets built."
tags: [research, training-environments, roadmap, framing]
categories: [research]
---

Models became trainable. The sentence sounds trivial, but it is the single fact behind a decade of progress: give a system a signal for how it is doing and a way to improve on it, and scale does the rest. The environment a model learns in never got that deal.

It is worth being precise about what the model side actually received. Backpropagation gave every parameter a share of the blame for every error, which is to say it solved credit assignment inside the network. Once that signal existed, improvement stopped being a craft and became a budget: more data, more compute, better models. Everything we call scaling rests on that loop running billions of times without a human in it.

Now look at the other side of the training run. The environment is not even a single thing. There is a reward model over here, trained on preference data and judged by its accuracy. There are verifiers over there, judged by agreement rates. A curriculum somewhere else, assembled by heuristics and judged by intuition. Each piece is built separately, evaluated separately, and swapped separately. Not one of them is judged by the only thing that makes it worth having: what it does to the model it exists to train. The environment is not a system. It is a pile.

A pile cannot be trained. That is the honest reason the environment never got the model side's deal, and it is why I do not think of "make the environment trainable" as one problem. It is a stack of problems, each standing on the one below.

**Measurement.** Can you read what a single piece does to the model? Today you mostly cannot. A reward model's benchmark accuracy fails to predict the policy it trains; the effect has to be read inside the training run itself. Until this layer works, everything above it is guesswork.

**Credit.** A model is trained by many pieces at once, and they produce one outcome together. Whose share is whose? Take a piece out and re-run, and you have changed what every piece downstream of it sees; the answer comes back biased in a way more sampling cannot fix. Credit has to be computed by running the counterfactual, not predicted or approximated by deletion.

**Training a piece.** A measured effect can become the piece's own training signal. This is where the environment stops being infrastructure and starts improving. It carries an obligation the model side never had: the piece must be withdrawable, with the gain staying with the model after it is gone. Otherwise what you improved is not the model but the ensemble around it.

**The team.** Pieces trained together, serving one model, have to coordinate rather than interfere. Joint shaping is known to break where individual shaping succeeds, so this layer is not a free consequence of the one below it.

**Generalization.** An environment that trains one model well should carry to the next model, the next task, and eventually past text. This is the layer where the bet pays off, and the one furthest from current evidence.

My three studies so far live on the first two layers, with a first step into the third: measurement where the standard metric fails, exact credit where outcomes are shared, and one training-time piece that is absorbed and then withdrawn. That is deliberate. The stack collapses without its ground floor, and the ground floor is the part nobody had built.

Why believe the ceiling moves if the stack gets built? Because models increasingly learn from experience their environments generate: tasks proposed, outputs scored, mistakes checked. The environment is the factory of that experience. A model that improves inside a fixed factory converges to what the factory can teach; the factory itself has to improve for the ceiling to move. The field has seen this once before: features used to be hand-crafted, then they became learned, and that single change renamed the field. The environment is the largest hand-crafted stage left.

So the bet, stated once more: environments themselves must scale, train, and generalize the way models have. I am starting where the stack starts, with measurement. [The companion note](/blog/2026/why-measurement-comes-first/) lays out why that order is forced, not chosen.

*This note replaces an earlier statement of my direction written under a different name. The name did not survive; the ambition did.*
