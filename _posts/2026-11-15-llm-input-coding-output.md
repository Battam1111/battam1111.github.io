---
layout: post
lang: en
title: "LLMs Unified the Input, Coding Unified the Output"
date: 2026-11-15
description: "The first unification let models understand anything; this one lets them make anything."
tags: [coding-agents, compression, llm]
categories: [essays]
---

Many people see the coding agent as a tool for writing code, a stronger programming assistant. I have come to think it means far more than that. The coding paradigm is to today what LLMs were to the research of the pre-LLM era, one general approach that brings a whole range of specialized directions under one roof.

If I had to sum up my view in one sentence, it would be that LLMs unified the input and coding unified the output. The first unification let models understand anything; this one lets them make anything.

{% include figs/llm-input-coding-output/ends.en.html %}

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

{% include figs/llm-input-coding-output/compress.en.html %}

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

{% include figs/llm-input-coding-output/output.en.html %}

Put the two together and one model goes all the way from reading to doing. The first unification let models understand anything; this one lets them do anything.

## Learning plus search: the bitter lesson in its purest form

This also fits the bitter lesson neatly. Sutton said that what wins in the long run is learning and search. Pretraining is learning. A coding agent writing code, running it, reading the errors and fixing it again is search. The coding agent combines the two, which arguably makes it the purest form of the bitter lesson.

## Generating with code is itself compression

There is one more reason. Generating with code is itself compression. In compression theory, the complexity of a piece of data is defined as the length of the shortest program that can generate it, and this is called Kolmogorov complexity. So when a model paints a picture in code, it is writing a compressed description of that picture. The coding paradigm is not merely compressing in a way that resembles LLMs. It is the most direct form compression takes at the output end. The idea that compression is intelligence, from earlier, and the coding paradigm, here, are really two sides of the same thing.

## Code generates processes, not pixels

Some may think code only suits structured things like charts and geometric figures, and that real paintings and photographs are too complex to have any program shorter than themselves. That underestimates code.

Code generates a process, not pixels. A human painting is made one stroke at a time, so its shortest program is not a table of pixels but that sequence of strokes. A real photograph is produced by light and objects following physical laws, and a ray tracer plus a scene description is itself a program. The only part that truly cannot be compressed is the random detail, and random detail does not need to be reproduced point by point. It only has to be right statistically, and one call to a random number generator in the code is enough for that.

{% include figs/llm-input-coding-output/strokes.en.html %}

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
