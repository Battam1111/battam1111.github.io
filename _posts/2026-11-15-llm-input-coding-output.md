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
_styles: |
  .ef-css-start{}
  /* Figures of the text essays (essay_figs.py). Colours come from the site's own tokens, so both themes follow.
     One meaning per colour in every figure: accent = works / has a signal / the one model; grey = fails or is absent;
     a dashed empty box = the thing that is missing. */
  .ef { margin: 2.2em 0; font-family: var(--font-text); color: var(--ink); }
  .post-content #markdown-content > div[lang] > .gf.ef { max-width: var(--col); }
  .post-content #markdown-content > div[lang] > .gf.ef-wide { max-width: 56rem; }
  .ef-box { background: var(--surface); border-radius: var(--radius-2); padding: 22px 24px 24px; }
  .ef-h { font-weight: 600; font-size: 1rem; line-height: 1.5; margin: 0 0 18px; color: var(--ink); }
  .ef-cap { font-size: var(--step--1); line-height: 1.65; color: var(--ink-3); margin-top: 10px; padding: 0 2px; }
  .ef-note { font-size: var(--step--1); line-height: 1.55; color: var(--ink-2); margin: 0; }
  .ef-legend { display: flex; flex-wrap: wrap; gap: 6px 18px; margin: 16px 0 0; font-size: var(--step--1); color: var(--ink-2); }
  .ef-legend span { display: inline-flex; align-items: center; gap: 6px; }
  .ef-dot { display: inline-block; width: 14px; height: 14px; border-radius: 50%; box-sizing: border-box; flex: none; }
  .ef-dot.ok { background: var(--accent); }
  .ef-dot.bad { border: 1.5px solid var(--ink-3); }
  .ef-node { box-sizing: border-box; border: 1.5px solid var(--rule-strong); border-radius: 8px; padding: 9px 12px; background: var(--bg); font-size: 0.9rem; line-height: 1.45; }
  .ef-node.on { border-color: var(--accent-line); background: var(--accent-tint); color: var(--accent-strong); }
  .ef-node.none { border-style: dashed; border-color: var(--ink-3); background: transparent; color: var(--ink-3); }
  .ef-arr { color: var(--ink-3); text-align: center; line-height: 1; font-size: 1rem; }
  .ef-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ef-pane { border: 1px solid var(--rule); border-radius: 8px; padding: 14px 16px 16px; background: var(--bg); display: flex; flex-direction: column; gap: 10px; min-width: 0; }
  .ef-pane h4 { margin: 0; font-size: var(--step--1); font-weight: 600; letter-spacing: 0.02em; color: var(--ink-3); }
  .ef-pane.on h4 { color: var(--accent); }
  
  /* group: six attempts at one task, set against the group's average */
  .ef-grp { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0 8px; position: relative; }
  .ef-grp-col { display: flex; flex-direction: column; align-items: center; }
  .ef-grp-n { font-size: var(--step--2); color: var(--ink-3); height: 22px; font-variant-numeric: tabular-nums; }
  .ef-slot { height: 34px; display: flex; align-items: center; justify-content: center; }
  .ef-slot .ef-dot { width: 20px; height: 20px; }
  .ef-verdict { margin-top: 8px; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; background: var(--surface-2); color: var(--ink-3); }
  .ef-verdict.up { background: var(--accent-tint); color: var(--accent); }
  .ef-grp-avg { position: absolute; left: 0; right: 0; top: 56px; border-top: 1.5px dashed var(--ink-3); pointer-events: none; }
  .ef-dash { display: inline-block; width: 22px; border-top: 1.5px dashed var(--ink-3); }
  
  /* long: drag the task length */
  .ef-ctl { display: grid; grid-template-columns: auto auto 1fr; align-items: center; gap: 8px 12px; margin-bottom: 16px; font-size: 0.9rem; }
  .ef-ctl output { font-weight: 600; font-variant-numeric: tabular-nums; min-width: 2.2em; color: var(--accent); }
  .ef-ctl input[type=range] { width: 100%; accent-color: var(--accent); margin: 0; }
  .ef-presets { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 8px; }
  .ef button { font: inherit; font-size: var(--step--1); padding: 5px 12px; border: 1px solid var(--rule-strong); border-radius: 999px; background: var(--bg); color: var(--ink-2); cursor: pointer; }
  .ef button:hover { border-color: var(--accent-line); color: var(--accent); }
  .ef-tracks { position: relative; margin: 26px 30px 0 0; }
  .ef-track { position: relative; height: 10px; margin: 0 0 7px; background: var(--surface-2); border-radius: 5px; }
  .ef-bar { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 5px; background: var(--ink-3); opacity: 0.55; transition: width 160ms ease; }
  .ef-track.ok .ef-bar { background: var(--accent); opacity: 1; }
  .ef-mark { position: absolute; right: -28px; top: -6px; width: 22px; text-align: center; font-size: 0.85rem; line-height: 22px; color: var(--ink-3); }
  .ef-track.ok .ef-mark { color: var(--accent); font-weight: 600; }
  .ef-endline { position: absolute; top: -8px; bottom: 0; width: 0; border-left: 1.5px solid var(--ink); transition: left 160ms ease; }
  .ef-endline span { position: absolute; top: -18px; left: 0; transform: translateX(-50%); white-space: nowrap; font-size: var(--step--2); color: var(--ink-2); }
  .ef-endline.far span { transform: translateX(-100%); }
  .ef-endline.near span { transform: none; }
  .ef-axis { display: flex; justify-content: space-between; margin: 2px 30px 0 0; font-size: var(--step--2); color: var(--ink-3); font-variant-numeric: tabular-nums; }
  .ef-tiles { display: grid; grid-template-columns: 1fr 1fr 1.5fr; gap: 10px; margin-top: 18px; }
  .ef-tile { background: var(--bg); border: 1px solid var(--rule); border-radius: 8px; padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .ef-tile .k { font-size: var(--step--2); color: var(--ink-3); }
  .ef-tile .v { font-size: 1.15rem; font-weight: 600; line-height: 1.35; font-variant-numeric: tabular-nums; color: var(--accent); }
  .ef-tile .s { font-size: var(--step--2); line-height: 1.5; color: var(--ink-3); }
  .ef-tile.dead .v { color: var(--ink-2); }
  
  /* lesson: two rows, three stages */
  .ef-lesson { display: grid; grid-template-columns: 7.2em repeat(3, 1fr); gap: 10px 8px; align-items: stretch; }
  .ef-lesson .hd { font-size: var(--step--2); color: var(--ink-3); align-self: end; padding: 0 2px; }
  .ef-lesson .who { font-size: var(--step--1); font-weight: 600; align-self: center; line-height: 1.4; }
  .ef-lesson .ef-node { position: relative; display: flex; align-items: center; }
  .ef-lesson .ef-node + .ef-node::before { content: "→"; position: absolute; left: -9px; top: 50%; transform: translate(-50%, -50%); color: var(--ink-3); font-size: 0.8rem; background: var(--surface); line-height: 1; }
  
  /* scope: one group against everything seen so far */
  .ef-scope-art { height: 150px; display: flex; align-items: center; justify-content: center; }
  .ef-scope-art svg { width: 100%; height: 100%; }
  .ef-group8 { display: grid; grid-template-columns: repeat(4, 14px); gap: 12px; padding: 16px 20px; border: 1.5px dashed var(--ink-3); border-radius: 10px; }
  .ef svg .s { fill: var(--accent); }
  .ef svg .f { fill: none; stroke: var(--ink-3); stroke-width: 1.4; }
  .ef svg .ring { fill: none; stroke: var(--accent); stroke-width: 1.6; }
  .ef svg .halo { fill: var(--accent-tint); stroke: var(--accent-line); stroke-width: 1; stroke-dasharray: 4 4; }
  
  /* loop: the same cycle, turning and stuck */
  .ef-cycle { position: relative; padding-left: 26px; display: flex; flex-direction: column; gap: 4px; }
  .ef-cycle::before { content: ""; position: absolute; left: 7px; top: 20px; bottom: 20px; width: 14px; border: 1.5px solid var(--ink-3); border-right: 0; border-radius: 9px 0 0 9px; }
  .ef-cycle::after { content: ""; position: absolute; left: 17px; top: 16px; border: 5px solid transparent; border-left-color: var(--ink-3); border-right: 0; }
  .ef-pane.on .ef-cycle::before { border-color: var(--accent); }
  .ef-pane.on .ef-cycle::after { border-left-color: var(--accent); }
  .ef-back { font-size: var(--step--1); line-height: 1.5; color: var(--ink-2); margin: 0; padding-left: 26px; }
  .ef-pane.on .ef-back { color: var(--accent-strong); }
  .ef-side { font-size: var(--step--1); line-height: 1.5; color: var(--ink-2); margin: 0 0 0 26px; padding: 6px 0 6px 12px; border-left: 2px solid var(--rule-strong); }
  
  /* ends: everything in as text, everything out as code */
  .ef-ends { display: grid; grid-template-columns: 1fr auto auto auto 1fr; align-items: center; gap: 10px; }
  .ef-chips { display: flex; flex-direction: column; gap: 6px; }
  .ef-chip { border: 1px solid var(--rule-strong); border-radius: 6px; padding: 5px 10px; font-size: var(--step--1); background: var(--bg); text-align: center; line-height: 1.4; }
  .ef-via { display: flex; flex-direction: column; align-items: center; gap: 2px; font-size: var(--step--2); color: var(--accent); font-weight: 600; letter-spacing: 0.04em; }
  .ef-via::after { content: "→"; font-size: 1.1rem; font-weight: 400; color: var(--ink-3); line-height: 1; }
  .ef-model { border: 1.5px solid var(--accent); background: var(--accent-tint); color: var(--accent-strong); border-radius: 12px; padding: 22px 16px; font-weight: 600; text-align: center; line-height: 1.4; }
  .ef-ends-sub { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--rule); font-size: var(--step--1); color: var(--ink-2); }
  .ef-ends-sub b { display: block; color: var(--ink); font-weight: 600; }
  .ef-ends-sub div:last-child { text-align: right; }
  
  /* compress: share of the raw size left after compression */
  .ef-bgroup + .ef-bgroup { margin-top: 18px; }
  .ef-bg-t { display: block; font-size: var(--step--1); font-weight: 600; margin-bottom: 8px; color: var(--ink-2); }
  .ef-brow { display: grid; grid-template-columns: 14.5em 1fr 3.6em; align-items: center; gap: 10px; margin-bottom: 6px; font-size: var(--step--1); }
  .ef-brow .t { height: 14px; background: var(--surface-2); border-radius: 3px; overflow: hidden; }
  .ef-brow .b { display: block; height: 100%; background: var(--ink-3); opacity: 0.6; border-radius: 3px; }
  .ef-brow .n { font-variant-numeric: tabular-nums; text-align: right; color: var(--ink-2); }
  .ef-brow.on .b { background: var(--accent); opacity: 1; }
  .ef-brow.on .l, .ef-brow.on .n { color: var(--accent-strong); font-weight: 600; }
  .ef-axisnote { font-size: var(--step--2); color: var(--ink-3); margin: 10px 0 0; }
  
  /* output: one model per kind of output, then one program */
  .ef-lanes { display: flex; flex-direction: column; gap: 6px; }
  .ef-lane { display: grid; grid-template-columns: 1fr 1.2em 1fr; align-items: center; gap: 4px; }
  .ef-lane .ef-node { padding: 6px 10px; font-size: var(--step--1); text-align: center; }
  .ef-chain { display: flex; flex-direction: column; gap: 4px; }
  .ef-chain .ef-node { text-align: center; }
  .ef-outs { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .ef-outs .ef-node { text-align: center; padding: 6px 10px; font-size: var(--step--1); }
  .ef-f-output .ef-pane:first-child { justify-content: space-between; }
  
  /* strokes: a picture made by a short program */
  .ef-paint { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: 16px; align-items: stretch; }
  .ef-canvas { position: relative; }
  .ef-canvas canvas { display: block; width: 100%; height: auto; aspect-ratio: 720 / 450; border-radius: 6px; background: #efe7d8; }
  .ef-codebox { display: flex; flex-direction: column; min-width: 0; min-height: 0; border: 1px solid var(--rule); border-radius: 6px; background: var(--bg); overflow: hidden; }
  .ef-codebox h4 { margin: 0; padding: 7px 12px; font-size: var(--step--2); font-weight: 600; color: var(--ink-3); border-bottom: 1px solid var(--rule); letter-spacing: 0.03em; }
  .ef-codebox pre { margin: 0; padding: 10px 12px; flex: 1 1 0; min-height: 180px; overflow: auto; font: 11px/1.55 var(--font-mono); color: var(--ink-2); background: transparent; border: 0; border-radius: 0; white-space: pre; tab-size: 2; }
  .ef-paintbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; margin-top: 14px; }
  .ef-sizes { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; }
  .ef-sizes .ef-tile:last-child .v { color: var(--ink-2); }
  
  @media (max-width: 640px) {
    .ef-box { padding: 18px 16px 20px; }
    .ef-two { grid-template-columns: 1fr; }
    .ef-tiles { grid-template-columns: 1fr 1fr; }
    .ef-tiles .ef-tile:last-child { grid-column: 1 / -1; }
    .ef-lesson { grid-template-columns: 1fr; gap: 6px; }
    .ef-lesson .hd { display: none; }
    .ef-lesson .who { margin-top: 10px; }
    .ef-lesson .ef-node + .ef-node::before { content: "↓"; left: 50%; top: -4px; }
    .ef-ends { grid-template-columns: 1fr; }
    .ef-chips { flex-direction: row; flex-wrap: wrap; justify-content: center; }
    .ef-via::after { content: "↓"; }
    .ef-model { padding: 14px 16px; }
    .ef-ends-sub, .ef-sizes { grid-template-columns: 1fr; }
    .ef-ends-sub div:last-child { text-align: left; }
    .ef-brow { grid-template-columns: 1fr 3.6em; }
    .ef-brow .l { grid-column: 1 / -1; }
    .ef-paint { grid-template-columns: 1fr; }
    .ef-codebox pre { max-height: 220px; min-height: 0; flex: none; }
  }
  @media print { .ef button, .ef-ctl input { display: none; } }
  .ef-css-end{}
---
{% raw %}
<div lang="en" markdown="1">

Many people see the coding agent as a tool for writing code, a stronger programming assistant. I have come to think it means far more than that. The coding paradigm is to today what LLMs were to the research of the pre-LLM era, one general approach that brings a whole range of specialized directions under one roof.

If I had to sum up my view in one sentence, it would be that LLMs unified the input and coding unified the output. The first unification let models understand anything; this one lets them make anything.

<figure class="gf ef ef-f-ends" id="ef-ends-en"><div class="ef-box"><p class="ef-h">Two unifications, one at each end</p><div class="ef-ends"><div class="ef-chips"><span class="ef-chip">translation</span><span class="ef-chip">question answering</span><span class="ef-chip">writing</span><span class="ef-chip">reasoning</span></div><span class="ef-via">TEXT</span><span class="ef-model">one model</span><span class="ef-via">CODE</span><div class="ef-chips"><span class="ef-chip">a painting</span><span class="ef-chip">a 3D scene</span><span class="ef-chip">a video</span><span class="ef-chip">a robot command</span></div></div><div class="ef-ends-sub"><div><b>LLMs unified the input</b>Everything comes in as text, so the model can read anything</div><div><b>Coding unified the output</b>Everything goes out as a program that runs, so the model can make anything</div></div></div><figcaption class="ef-cap">The first unification opened up the understanding end. This one opens up the output end.</figcaption></figure>

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

<figure class="gf ef ef-f-compress" id="ef-compress-en"><div class="ef-box"><p class="ef-h">A language model trained mainly on text beats the purpose-built formats at compressing images and speech</p><div class="ef-bgroup"><span class="ef-bg-t">Images (ImageNet patches)</span><div class="ef-brow on"><span class="l">Language model, Chinchilla 70B</span><span class="t"><span class="b" style="width:43.4%"></span></span><span class="n">43.4%</span></div><div class="ef-brow"><span class="l">PNG, designed for images</span><span class="t"><span class="b" style="width:58.5%"></span></span><span class="n">58.5%</span></div></div><div class="ef-bgroup"><span class="ef-bg-t">Speech (LibriSpeech)</span><div class="ef-brow on"><span class="l">Language model, Chinchilla 70B</span><span class="t"><span class="b" style="width:16.4%"></span></span><span class="n">16.4%</span></div><div class="ef-brow"><span class="l">FLAC, designed for audio</span><span class="t"><span class="b" style="width:30.3%"></span></span><span class="n">30.3%</span></div></div><p class="ef-axisnote">Share of the raw size left after compression. Smaller is better.</p></div><figcaption class="ef-cap">Data from Delétang et al., <em>Language Modeling Is Compression</em> (ICLR 2024).</figcaption></figure>

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

<figure class="gf ef ef-f-output" id="ef-output-en"><div class="ef-box"><p class="ef-h">At the output end, one model per kind of output gives way to writing a program</p><div class="ef-two"><div class="ef-pane"><h4>Before</h4><div class="ef-lanes"><div class="ef-lane"><span class="ef-node">LLM</span><span class="ef-arr">→</span><span class="ef-node">text</span></div><div class="ef-lane"><span class="ef-node">image model</span><span class="ef-arr">→</span><span class="ef-node">images</span></div><div class="ef-lane"><span class="ef-node">video model</span><span class="ef-arr">→</span><span class="ef-node">video</span></div><div class="ef-lane"><span class="ef-node">control model</span><span class="ef-arr">→</span><span class="ef-node">robot actions</span></div></div><p class="ef-note">Text by itself cannot touch the world, and every other kind of output needs its own specialized model.</p></div><div class="ef-pane on"><h4>Now</h4><div class="ef-chain"><span class="ef-node on">one model</span><span class="ef-arr">↓</span><span class="ef-node on">writes a program</span><span class="ef-arr">↓</span><span class="ef-node on">runs it</span><span class="ef-arr">↓</span></div><div class="ef-outs"><span class="ef-node">a painting</span><span class="ef-node">a 3D scene</span><span class="ef-node">a video</span><span class="ef-node">a robot command</span></div></div></div></div><figcaption class="ef-cap">All those specialized output models are folded into a single action, writing a program.</figcaption></figure>

Put the two together and one model goes all the way from reading to doing. The first unification let models understand anything; this one lets them do anything.

## Learning plus search: the bitter lesson in its purest form

This also fits the bitter lesson neatly. Sutton said that what wins in the long run is learning and search. Pretraining is learning. A coding agent writing code, running it, reading the errors and fixing it again is search. The coding agent combines the two, which arguably makes it the purest form of the bitter lesson.

## Generating with code is itself compression

There is one more reason. Generating with code is itself compression. In compression theory, the complexity of a piece of data is defined as the length of the shortest program that can generate it, and this is called Kolmogorov complexity. So when a model paints a picture in code, it is writing a compressed description of that picture. The coding paradigm is not merely compressing in a way that resembles LLMs. It is the most direct form compression takes at the output end. The idea that compression is intelligence, from earlier, and the coding paradigm, here, are really two sides of the same thing.

## Code generates processes, not pixels

Some may think code only suits structured things like charts and geometric figures, and that real paintings and photographs are too complex to have any program shorter than themselves. That underestimates code.

Code generates a process, not pixels. A human painting is made one stroke at a time, so its shortest program is not a table of pixels but that sequence of strokes. A real photograph is produced by light and objects following physical laws, and a ray tracer plus a scene description is itself a program. The only part that truly cannot be compressed is the random detail, and random detail does not need to be reproduced point by point. It only has to be right statistically, and one call to a random number generator in the code is enough for that.

<figure class="gf ef ef-f-strokes ef-wide" id="ef-strokes-en"><div class="ef-box"><p class="ef-h">This picture is painted stroke by stroke by a short program</p><div class="ef-paint"><div class="ef-canvas"><canvas width="720" height="450" role="img" aria-label="A dusk landscape painted by the program"></canvas><noscript><p class="ef-note">Turn on JavaScript to see the picture.</p></noscript></div><div class="ef-codebox"><h4>The program</h4></div></div><div class="ef-paintbar"><button type="button">Paint it again</button><button type="button">New random details</button></div><div class="ef-sizes"><div class="ef-tile"><span class="k">This program</span><span class="v"></span></div><div class="ef-tile"><span class="k">The same picture stored pixel by pixel (720×450, 3 bytes per pixel)</span><span class="v"></span><span class="s"></span></div></div></div><script>(function(){var f=document.getElementById("ef-strokes-en"),SRC="function paint(S, R) {\n  var W = 720, H = 450, hz = 250, i, k, x, y, t, a;\n  var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48];\n  var sun = \"rgb(255,232,180)\";\n  function mix(p, q, t) {\n    return \"rgb(\" + [0, 1, 2].map(function (j) {\n      return Math.round(p[j] + (q[j] - p[j]) * t);\n    }) + \")\";\n  }\n  /* sky: broad strokes, cool on top, warm near the horizon */\n  for (i = 0; i < 240; i++) {\n    y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3);\n    S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5,\n      16 + R() * 12, mix(top, glow, t), 0.5);\n  }\n  /* sun: short strokes around a centre, low in the sky */\n  for (i = 0; i < 60; i++) {\n    a = R() * 6.28; k = R() * 30;\n    S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k,\n      480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k,\n      9, sun, 0.7);\n  }\n  /* three ridges, the nearer the darker */\n  for (k = 0; k < 3; k++) {\n    for (x = -10; x < W + 10; x += 4) {\n      y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1)\n        + 9 * Math.sin(x / 21 + k);\n      S(x, y + R() * 5, x + R() * 16 - 8, hz + 2,\n        6, mix(glow, ink, 0.42 + k * 0.22), 0.7);\n    }\n  }\n  /* water: short level strokes that mirror the sky */\n  for (i = 0; i < 300; i++) {\n    y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz);\n    S(x - 25 - R() * 45, y, x + 25 + R() * 45, y,\n      2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45);\n  }\n  /* the sun's path on the water */\n  for (i = 0; i < 70; i++) {\n    y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55);\n    S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6);\n  }\n  /* the near bank, then two pines on it */\n  for (i = 0; i < 90; i++) {\n    x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04;\n    S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9);\n  }\n  for (k = 0; k < 2; k++) {\n    x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72;\n    S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95);\n    for (i = 1; i < 16; i++) {\n      a = 5 + i * (2.6 + k * 0.4);\n      S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n      S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n    }\n  }\n}",T={"unit": "{} bytes", "ratio": "about {} times the program"},cv=f.querySelector("canvas"),x=cv.getContext("2d"),W=720,H=450,d=Math.min(window.devicePixelRatio||1,2),seed=7,Q=[],raf=0,started=false;function paint(S, R) { var W = 720, H = 450, hz = 250, i, k, x, y, t, a; var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48]; var sun = "rgb(255,232,180)"; function mix(p, q, t) { return "rgb(" + [0, 1, 2].map(function (j) { return Math.round(p[j] + (q[j] - p[j]) * t); }) + ")"; } /* sky: broad strokes, cool on top, warm near the horizon */ for (i = 0; i < 240; i++) { y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3); S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5, 16 + R() * 12, mix(top, glow, t), 0.5); } /* sun: short strokes around a centre, low in the sky */ for (i = 0; i < 60; i++) { a = R() * 6.28; k = R() * 30; S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k, 480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k, 9, sun, 0.7); } /* three ridges, the nearer the darker */ for (k = 0; k < 3; k++) { for (x = -10; x < W + 10; x += 4) { y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1) + 9 * Math.sin(x / 21 + k); S(x, y + R() * 5, x + R() * 16 - 8, hz + 2, 6, mix(glow, ink, 0.42 + k * 0.22), 0.7); } } /* water: short level strokes that mirror the sky */ for (i = 0; i < 300; i++) { y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz); S(x - 25 - R() * 45, y, x + 25 + R() * 45, y, 2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45); } /* the sun's path on the water */ for (i = 0; i < 70; i++) { y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55); S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6); } /* the near bank, then two pines on it */ for (i = 0; i < 90; i++) { x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04; S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9); } for (k = 0; k < 2; k++) { x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72; S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95); for (i = 1; i < 16; i++) { a = 5 + i * (2.6 + k * 0.4); S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); } } } cv.width=W*d;cv.height=H*d;var pre=document.createElement("pre");pre.textContent=SRC;f.querySelector(".ef-codebox").appendChild(pre);var fmt=function(n){return n.toLocaleString("en-US")},v=f.querySelectorAll(".ef-sizes .v");v[0].textContent=T.unit.replace("{}",fmt(SRC.length));v[1].textContent=T.unit.replace("{}",fmt(W*H*3));f.querySelector(".ef-sizes .s").textContent=T.ratio.replace("{}",fmt(Math.round(W*H*3/SRC.length)));function one(q){x.globalAlpha=q[6];x.strokeStyle=q[5];x.lineWidth=q[4];x.beginPath();x.moveTo(q[0],q[1]);x.lineTo(q[2],q[3]);x.stroke()}function go(){cancelAnimationFrame(raf);var s=seed;Q=[];paint(function(){Q.push(arguments)},function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296});x.setTransform(d,0,0,d,0,0);x.globalAlpha=1;x.fillStyle="#efe7d8";x.fillRect(0,0,W,H);x.lineCap="round";var i=0,per=Math.ceil(Q.length/170),still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(function step(){var e=still?Q.length:Math.min(i+per,Q.length);for(;i<e;i++)one(Q[i]);if(i<Q.length)raf=requestAnimationFrame(step)})()}var b=f.querySelectorAll("button");b[0].onclick=go;b[1].onclick=function(){seed=Math.floor(Math.random()*1e9);go()};if("IntersectionObserver" in window){new IntersectionObserver(function(es,ob){if(es[0].isIntersecting&&!started){started=true;ob.disconnect();go()}},{threshold:.35}).observe(cv)}else{go()}})();</script><figcaption class="ef-cap">The picture stores no pixels at all. It stores how to paint: the sky first, then the sun, the far ridges and the water, and last the trees on the near bank. Where each stroke lands and how it wobbles come from random numbers. Change the random numbers and every detail changes, yet it is still the same picture. The byte count covers only the program shown here, not the basic action of making one stroke.</figcaption></figure>

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

<figure class="gf ef ef-f-ends" id="ef-ends-zh"><div class="ef-box"><p class="ef-h">两次大一统，统一的是两头</p><div class="ef-ends"><div class="ef-chips"><span class="ef-chip">翻译</span><span class="ef-chip">问答</span><span class="ef-chip">写作</span><span class="ef-chip">推理</span></div><span class="ef-via">文本</span><span class="ef-model">一个模型</span><span class="ef-via">代码</span><div class="ef-chips"><span class="ef-chip">一幅画</span><span class="ef-chip">3D 场景</span><span class="ef-chip">一段视频</span><span class="ef-chip">机器人指令</span></div></div><div class="ef-ends-sub"><div><b>LLM 统一了输入</b>进来的都是文本，模型什么都能读懂</div><div><b>coding 统一了输出</b>出去的都是能运行的程序，模型什么都能做出来</div></div></div><figcaption class="ef-cap">前一次大一统打通了理解这一端，这一次打通的是输出这一端。</figcaption></figure>

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

<figure class="gf ef ef-f-compress" id="ef-compress-zh"><div class="ef-box"><p class="ef-h">主要用文本训练的语言模型，压缩图像和语音都赢了专用的格式</p><div class="ef-bgroup"><span class="ef-bg-t">图像（ImageNet 图块）</span><div class="ef-brow on"><span class="l">语言模型 Chinchilla 70B</span><span class="t"><span class="b" style="width:43.4%"></span></span><span class="n">43.4%</span></div><div class="ef-brow"><span class="l">PNG，专为图像设计</span><span class="t"><span class="b" style="width:58.5%"></span></span><span class="n">58.5%</span></div></div><div class="ef-bgroup"><span class="ef-bg-t">语音（LibriSpeech）</span><div class="ef-brow on"><span class="l">语言模型 Chinchilla 70B</span><span class="t"><span class="b" style="width:16.4%"></span></span><span class="n">16.4%</span></div><div class="ef-brow"><span class="l">FLAC，专为音频设计</span><span class="t"><span class="b" style="width:30.3%"></span></span><span class="n">30.3%</span></div></div><p class="ef-axisnote">压缩后占原始大小的比例，越小越好。</p></div><figcaption class="ef-cap">数据来自 Delétang 等，<em>Language Modeling Is Compression</em>（ICLR 2024）。</figcaption></figure>

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

<figure class="gf ef ef-f-output" id="ef-output-zh"><div class="ef-box"><p class="ef-h">输出这一端，从各训各的模型，变成写一段程序</p><div class="ef-two"><div class="ef-pane"><h4>以前</h4><div class="ef-lanes"><div class="ef-lane"><span class="ef-node">LLM</span><span class="ef-arr">→</span><span class="ef-node">文字</span></div><div class="ef-lane"><span class="ef-node">画图模型</span><span class="ef-arr">→</span><span class="ef-node">图</span></div><div class="ef-lane"><span class="ef-node">视频模型</span><span class="ef-arr">→</span><span class="ef-node">视频</span></div><div class="ef-lane"><span class="ef-node">控制模型</span><span class="ef-arr">→</span><span class="ef-node">机器人动作</span></div></div><p class="ef-note">文字本身碰不到世界，其余每一种输出都要一个专门的模型。</p></div><div class="ef-pane on"><h4>现在</h4><div class="ef-chain"><span class="ef-node on">一个模型</span><span class="ef-arr">↓</span><span class="ef-node on">写一段程序</span><span class="ef-arr">↓</span><span class="ef-node on">运行</span><span class="ef-arr">↓</span></div><div class="ef-outs"><span class="ef-node">一幅画</span><span class="ef-node">3D 场景</span><span class="ef-node">一段视频</span><span class="ef-node">机器人指令</span></div></div></div></div><figcaption class="ef-cap">各种专门的输出模型，被收进了「写一段程序」这一个动作里。</figcaption></figure>

两次加起来，一个模型从读到做就打通了。前一次大一统让模型什么都能懂，这一次让模型什么都能做。

## 学习加搜索：苦涩的教训最纯粹的形态

这也正好合上了苦涩的教训。Sutton 说长期胜出的是学习和搜索。预训练是学习；coding agent 写代码、运行、看报错、再改，是搜索。coding agent 是这两者合在一起，可以说是苦涩的教训最纯粹的形态。

## 用代码生成，本身就是在压缩

还有一层原因是，用代码生成，本身就是在压缩。在压缩理论里，一段数据的复杂度，定义就是「能生成它的最短程序」有多长，这叫 Kolmogorov 复杂度。所以，模型用代码画出一幅画，就是在给这幅画写一份压缩描述。coding 这个范式不只是「像」LLM 那样在压缩，它就是压缩在输出这一端最直接的形态。前面讲的压缩即智能，和这里讲的 coding，其实是同一件事的两面。

## 代码生成的是过程，不是像素

也许有人会觉得，代码只适合画图表、画几何图形这类有结构的东西，真实的绘画、照片太复杂，没有比它本身更短的程序。但这低估了代码。

代码生成的是过程，而不是像素。人的一幅画是一笔一笔画出来的，它最短的程序不是一张像素表，而是那一串笔触。一张真实的照片，是光照和物体按物理规律造出来的，一套光线追踪加一份场景描述，本身就是一段程序。真正压不掉的，只有那些随机的细节，而随机细节并不需要逐点复现，只要统计上对就行，代码里调用一个随机数就够了。

<figure class="gf ef ef-f-strokes ef-wide" id="ef-strokes-zh"><div class="ef-box"><p class="ef-h">这幅画，是一段程序一笔一笔画出来的</p><div class="ef-paint"><div class="ef-canvas"><canvas width="720" height="450" role="img" aria-label="程序画出的一幅黄昏山水"></canvas><noscript><p class="ef-note">打开 JavaScript 才能看到这幅画。</p></noscript></div><div class="ef-codebox"><h4>程序</h4></div></div><div class="ef-paintbar"><button type="button">重画一遍</button><button type="button">换一组随机细节</button></div><div class="ef-sizes"><div class="ef-tile"><span class="k">这段程序</span><span class="v"></span></div><div class="ef-tile"><span class="k">逐像素存这幅画（720×450，每个像素 3 字节）</span><span class="v"></span><span class="s"></span></div></div></div><script>(function(){var f=document.getElementById("ef-strokes-zh"),SRC="function paint(S, R) {\n  var W = 720, H = 450, hz = 250, i, k, x, y, t, a;\n  var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48];\n  var sun = \"rgb(255,232,180)\";\n  function mix(p, q, t) {\n    return \"rgb(\" + [0, 1, 2].map(function (j) {\n      return Math.round(p[j] + (q[j] - p[j]) * t);\n    }) + \")\";\n  }\n  /* sky: broad strokes, cool on top, warm near the horizon */\n  for (i = 0; i < 240; i++) {\n    y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3);\n    S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5,\n      16 + R() * 12, mix(top, glow, t), 0.5);\n  }\n  /* sun: short strokes around a centre, low in the sky */\n  for (i = 0; i < 60; i++) {\n    a = R() * 6.28; k = R() * 30;\n    S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k,\n      480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k,\n      9, sun, 0.7);\n  }\n  /* three ridges, the nearer the darker */\n  for (k = 0; k < 3; k++) {\n    for (x = -10; x < W + 10; x += 4) {\n      y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1)\n        + 9 * Math.sin(x / 21 + k);\n      S(x, y + R() * 5, x + R() * 16 - 8, hz + 2,\n        6, mix(glow, ink, 0.42 + k * 0.22), 0.7);\n    }\n  }\n  /* water: short level strokes that mirror the sky */\n  for (i = 0; i < 300; i++) {\n    y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz);\n    S(x - 25 - R() * 45, y, x + 25 + R() * 45, y,\n      2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45);\n  }\n  /* the sun's path on the water */\n  for (i = 0; i < 70; i++) {\n    y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55);\n    S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6);\n  }\n  /* the near bank, then two pines on it */\n  for (i = 0; i < 90; i++) {\n    x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04;\n    S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9);\n  }\n  for (k = 0; k < 2; k++) {\n    x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72;\n    S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95);\n    for (i = 1; i < 16; i++) {\n      a = 5 + i * (2.6 + k * 0.4);\n      S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n      S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n    }\n  }\n}",T={"unit": "{} 字节", "ratio": "约是程序的 {} 倍"},cv=f.querySelector("canvas"),x=cv.getContext("2d"),W=720,H=450,d=Math.min(window.devicePixelRatio||1,2),seed=7,Q=[],raf=0,started=false;function paint(S, R) { var W = 720, H = 450, hz = 250, i, k, x, y, t, a; var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48]; var sun = "rgb(255,232,180)"; function mix(p, q, t) { return "rgb(" + [0, 1, 2].map(function (j) { return Math.round(p[j] + (q[j] - p[j]) * t); }) + ")"; } /* sky: broad strokes, cool on top, warm near the horizon */ for (i = 0; i < 240; i++) { y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3); S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5, 16 + R() * 12, mix(top, glow, t), 0.5); } /* sun: short strokes around a centre, low in the sky */ for (i = 0; i < 60; i++) { a = R() * 6.28; k = R() * 30; S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k, 480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k, 9, sun, 0.7); } /* three ridges, the nearer the darker */ for (k = 0; k < 3; k++) { for (x = -10; x < W + 10; x += 4) { y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1) + 9 * Math.sin(x / 21 + k); S(x, y + R() * 5, x + R() * 16 - 8, hz + 2, 6, mix(glow, ink, 0.42 + k * 0.22), 0.7); } } /* water: short level strokes that mirror the sky */ for (i = 0; i < 300; i++) { y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz); S(x - 25 - R() * 45, y, x + 25 + R() * 45, y, 2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45); } /* the sun's path on the water */ for (i = 0; i < 70; i++) { y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55); S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6); } /* the near bank, then two pines on it */ for (i = 0; i < 90; i++) { x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04; S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9); } for (k = 0; k < 2; k++) { x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72; S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95); for (i = 1; i < 16; i++) { a = 5 + i * (2.6 + k * 0.4); S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); } } } cv.width=W*d;cv.height=H*d;var pre=document.createElement("pre");pre.textContent=SRC;f.querySelector(".ef-codebox").appendChild(pre);var fmt=function(n){return n.toLocaleString("en-US")},v=f.querySelectorAll(".ef-sizes .v");v[0].textContent=T.unit.replace("{}",fmt(SRC.length));v[1].textContent=T.unit.replace("{}",fmt(W*H*3));f.querySelector(".ef-sizes .s").textContent=T.ratio.replace("{}",fmt(Math.round(W*H*3/SRC.length)));function one(q){x.globalAlpha=q[6];x.strokeStyle=q[5];x.lineWidth=q[4];x.beginPath();x.moveTo(q[0],q[1]);x.lineTo(q[2],q[3]);x.stroke()}function go(){cancelAnimationFrame(raf);var s=seed;Q=[];paint(function(){Q.push(arguments)},function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296});x.setTransform(d,0,0,d,0,0);x.globalAlpha=1;x.fillStyle="#efe7d8";x.fillRect(0,0,W,H);x.lineCap="round";var i=0,per=Math.ceil(Q.length/170),still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(function step(){var e=still?Q.length:Math.min(i+per,Q.length);for(;i<e;i++)one(Q[i]);if(i<Q.length)raf=requestAnimationFrame(step)})()}var b=f.querySelectorAll("button");b[0].onclick=go;b[1].onclick=function(){seed=Math.floor(Math.random()*1e9);go()};if("IntersectionObserver" in window){new IntersectionObserver(function(es,ob){if(es[0].isIntersecting&&!started){started=true;ob.disconnect();go()}},{threshold:.35}).observe(cv)}else{go()}})();</script><figcaption class="ef-cap">画里没有存任何一个像素，存的是怎么画：先铺天空，再画太阳、远山和水面，最后是近处的树。笔触的位置和抖动来自随机数，换一组随机数，细节全变了，画还是那幅画。字节数只算图里这段程序，不算「画一笔」这个基本动作。</figcaption></figure>

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

<figure class="gf ef ef-f-ends" id="ef-ends-ja"><div class="ef-box"><p class="ef-h">二度の大統一が、それぞれ両端を統一した</p><div class="ef-ends"><div class="ef-chips"><span class="ef-chip">翻訳</span><span class="ef-chip">質疑応答</span><span class="ef-chip">文章を書く</span><span class="ef-chip">推論</span></div><span class="ef-via">テキスト</span><span class="ef-model">一つのモデル</span><span class="ef-via">コード</span><div class="ef-chips"><span class="ef-chip">一枚の絵</span><span class="ef-chip">3D シーン</span><span class="ef-chip">一本の動画</span><span class="ef-chip">ロボットへの指令</span></div></div><div class="ef-ends-sub"><div><b>LLM は入力を統一した</b>入ってくるものはすべてテキストで、モデルは何でも読み取れる</div><div><b>コーディングは出力を統一した</b>出ていくものはすべて実行できるプログラムで、モデルは何でも作り出せる</div></div></div><figcaption class="ef-cap">前の大統一は理解の側をつなぎ、今回の統一は出力の側をつなぎます。</figcaption></figure>

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

<figure class="gf ef ef-f-compress" id="ef-compress-ja"><div class="ef-box"><p class="ef-h">主にテキストで訓練された言語モデルが、画像でも音声でも専用の形式よりよく圧縮した</p><div class="ef-bgroup"><span class="ef-bg-t">画像（ImageNet のパッチ）</span><div class="ef-brow on"><span class="l">言語モデル Chinchilla 70B</span><span class="t"><span class="b" style="width:43.4%"></span></span><span class="n">43.4%</span></div><div class="ef-brow"><span class="l">PNG、画像専用の形式</span><span class="t"><span class="b" style="width:58.5%"></span></span><span class="n">58.5%</span></div></div><div class="ef-bgroup"><span class="ef-bg-t">音声（LibriSpeech）</span><div class="ef-brow on"><span class="l">言語モデル Chinchilla 70B</span><span class="t"><span class="b" style="width:16.4%"></span></span><span class="n">16.4%</span></div><div class="ef-brow"><span class="l">FLAC、音声専用の形式</span><span class="t"><span class="b" style="width:30.3%"></span></span><span class="n">30.3%</span></div></div><p class="ef-axisnote">圧縮後のサイズが元のサイズに占める割合。小さいほど良い。</p></div><figcaption class="ef-cap">データは Delétang ほか <em>Language Modeling Is Compression</em>（ICLR 2024）より。</figcaption></figure>

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

<figure class="gf ef ef-f-output" id="ef-output-ja"><div class="ef-box"><p class="ef-h">出力の側は、種類ごとの専用モデルから、プログラムを書くことへ</p><div class="ef-two"><div class="ef-pane"><h4>以前</h4><div class="ef-lanes"><div class="ef-lane"><span class="ef-node">LLM</span><span class="ef-arr">→</span><span class="ef-node">文字</span></div><div class="ef-lane"><span class="ef-node">画像モデル</span><span class="ef-arr">→</span><span class="ef-node">絵</span></div><div class="ef-lane"><span class="ef-node">動画モデル</span><span class="ef-arr">→</span><span class="ef-node">動画</span></div><div class="ef-lane"><span class="ef-node">制御モデル</span><span class="ef-arr">→</span><span class="ef-node">ロボットの動作</span></div></div><p class="ef-note">文字それ自体は世界に触れられず、ほかの出力にはそれぞれ専用のモデルが必要でした。</p></div><div class="ef-pane on"><h4>いま</h4><div class="ef-chain"><span class="ef-node on">一つのモデル</span><span class="ef-arr">↓</span><span class="ef-node on">プログラムを書く</span><span class="ef-arr">↓</span><span class="ef-node on">実行する</span><span class="ef-arr">↓</span></div><div class="ef-outs"><span class="ef-node">一枚の絵</span><span class="ef-node">3D シーン</span><span class="ef-node">一本の動画</span><span class="ef-node">ロボットへの指令</span></div></div></div></div><figcaption class="ef-cap">さまざまな専用の出力モデルが、「プログラムを書く」という一つの動作に収められました。</figcaption></figure>

二つを合わせると、一つのモデルで読むことからやることまでがつながります。前の大統一でモデルは何でも理解できるようになり、今回の統一で何でもできるようになります。

## 学習と探索：苦い教訓のもっとも純粋なかたち

これは苦い教訓ともぴったり重なります。Sutton は、長い目で見て勝つのは学習と探索だと言いました。事前学習は学習です。コーディングエージェントがコードを書き、実行し、エラーを読み、また直すのは探索です。コーディングエージェントはこの二つを合わせたもので、苦い教訓のもっとも純粋なかたちだと言えます。

## コードで生成することは、それ自体が圧縮である

もう一つ理由があります。コードで生成することは、それ自体が圧縮なのです。圧縮の理論では、あるデータの複雑さは「それを生成できる最短のプログラム」の長さで定義され、これをコルモゴロフ複雑性と呼びます。ですから、モデルがコードで一枚の絵を描くのは、その絵の圧縮された記述を書いていることになります。コーディングというパラダイムは、LLM のように圧縮しているのに「似ている」だけではありません。出力の側における、圧縮のもっとも直接的なかたちなのです。最初に述べた「圧縮は知能である」と、ここで述べたコーディングは、同じことの表と裏です。

## コードが生み出すのは過程であって、ピクセルではない

コードが向いているのはグラフや幾何学図形のような構造のあるものだけで、本物の絵や写真は複雑すぎて、それ自体より短いプログラムなどない、と思う人もいるかもしれません。しかしそれは、コードを過小評価しています。

コードが生み出すのは過程であって、ピクセルではありません。人間の絵は一筆一筆描かれたもので、その最短のプログラムはピクセルの表ではなく、その筆の運びの連なりです。本物の写真は、光と物体が物理法則に従って作り出したもので、レイトレーシングとシーンの記述の組み合わせは、それ自体が一つのプログラムです。本当に圧縮できないのはランダムな細部だけですが、ランダムな細部は一点ずつ再現する必要はなく、統計的に正しければ十分です。コードの中で乱数を一つ呼び出せば足ります。

<figure class="gf ef ef-f-strokes ef-wide" id="ef-strokes-ja"><div class="ef-box"><p class="ef-h">この絵は、短いプログラムが一筆ずつ描いたものです</p><div class="ef-paint"><div class="ef-canvas"><canvas width="720" height="450" role="img" aria-label="プログラムが描いた夕暮れの風景"></canvas><noscript><p class="ef-note">この絵を見るには JavaScript を有効にしてください。</p></noscript></div><div class="ef-codebox"><h4>プログラム</h4></div></div><div class="ef-paintbar"><button type="button">もう一度描く</button><button type="button">ランダムな細部を変える</button></div><div class="ef-sizes"><div class="ef-tile"><span class="k">このプログラム</span><span class="v"></span></div><div class="ef-tile"><span class="k">同じ絵をピクセルごとに保存（720×450、1 ピクセル 3 バイト）</span><span class="v"></span><span class="s"></span></div></div></div><script>(function(){var f=document.getElementById("ef-strokes-ja"),SRC="function paint(S, R) {\n  var W = 720, H = 450, hz = 250, i, k, x, y, t, a;\n  var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48];\n  var sun = \"rgb(255,232,180)\";\n  function mix(p, q, t) {\n    return \"rgb(\" + [0, 1, 2].map(function (j) {\n      return Math.round(p[j] + (q[j] - p[j]) * t);\n    }) + \")\";\n  }\n  /* sky: broad strokes, cool on top, warm near the horizon */\n  for (i = 0; i < 240; i++) {\n    y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3);\n    S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5,\n      16 + R() * 12, mix(top, glow, t), 0.5);\n  }\n  /* sun: short strokes around a centre, low in the sky */\n  for (i = 0; i < 60; i++) {\n    a = R() * 6.28; k = R() * 30;\n    S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k,\n      480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k,\n      9, sun, 0.7);\n  }\n  /* three ridges, the nearer the darker */\n  for (k = 0; k < 3; k++) {\n    for (x = -10; x < W + 10; x += 4) {\n      y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1)\n        + 9 * Math.sin(x / 21 + k);\n      S(x, y + R() * 5, x + R() * 16 - 8, hz + 2,\n        6, mix(glow, ink, 0.42 + k * 0.22), 0.7);\n    }\n  }\n  /* water: short level strokes that mirror the sky */\n  for (i = 0; i < 300; i++) {\n    y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz);\n    S(x - 25 - R() * 45, y, x + 25 + R() * 45, y,\n      2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45);\n  }\n  /* the sun's path on the water */\n  for (i = 0; i < 70; i++) {\n    y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55);\n    S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6);\n  }\n  /* the near bank, then two pines on it */\n  for (i = 0; i < 90; i++) {\n    x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04;\n    S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9);\n  }\n  for (k = 0; k < 2; k++) {\n    x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72;\n    S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95);\n    for (i = 1; i < 16; i++) {\n      a = 5 + i * (2.6 + k * 0.4);\n      S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n      S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17,\n        4.5, mix(ink, top, 0.12), 0.9);\n    }\n  }\n}",T={"unit": "{} バイト", "ratio": "プログラムの約 {} 倍"},cv=f.querySelector("canvas"),x=cv.getContext("2d"),W=720,H=450,d=Math.min(window.devicePixelRatio||1,2),seed=7,Q=[],raf=0,started=false;function paint(S, R) { var W = 720, H = 450, hz = 250, i, k, x, y, t, a; var top = [36, 56, 112], glow = [246, 162, 92], ink = [24, 30, 48]; var sun = "rgb(255,232,180)"; function mix(p, q, t) { return "rgb(" + [0, 1, 2].map(function (j) { return Math.round(p[j] + (q[j] - p[j]) * t); }) + ")"; } /* sky: broad strokes, cool on top, warm near the horizon */ for (i = 0; i < 240; i++) { y = R() * hz; x = R() * W; t = Math.pow(y / hz, 1.3); S(x - 100, y + R() * 10 - 5, x + 100, y + R() * 10 - 5, 16 + R() * 12, mix(top, glow, t), 0.5); } /* sun: short strokes around a centre, low in the sky */ for (i = 0; i < 60; i++) { a = R() * 6.28; k = R() * 30; S(480 + Math.cos(a) * k, 122 + Math.sin(a) * k, 480 + Math.cos(a + 0.9) * k, 122 + Math.sin(a + 0.9) * k, 9, sun, 0.7); } /* three ridges, the nearer the darker */ for (k = 0; k < 3; k++) { for (x = -10; x < W + 10; x += 4) { y = hz - 70 + k * 26 + 24 * Math.sin(x / (110 - k * 25) + k * 2.1) + 9 * Math.sin(x / 21 + k); S(x, y + R() * 5, x + R() * 16 - 8, hz + 2, 6, mix(glow, ink, 0.42 + k * 0.22), 0.7); } } /* water: short level strokes that mirror the sky */ for (i = 0; i < 300; i++) { y = hz + 4 + R() * (H - hz); x = R() * W; t = (y - hz) / (H - hz); S(x - 25 - R() * 45, y, x + 25 + R() * 45, y, 2.5 + t * 5, mix(glow, top, Math.pow(t, 0.6)), 0.45); } /* the sun's path on the water */ for (i = 0; i < 70; i++) { y = hz + 6 + R() * 180; x = 480 + (R() - 0.5) * (26 + (y - hz) * 0.55); S(x - 12 - R() * 8, y, x + 12 + R() * 8, y, 2.5, sun, 0.6); } /* the near bank, then two pines on it */ for (i = 0; i < 90; i++) { x = R() * 280 - 30; y = 428 + R() * 26 + x * 0.04; S(x - 30, y, x + 30, y + 3, 9, mix(ink, top, 0.1), 0.9); } for (k = 0; k < 2; k++) { x = 96 + k * 76; y = 432 - k * 10; t = 250 - k * 72; S(x, y, x, y - t, 5, mix(ink, top, 0), 0.95); for (i = 1; i < 16; i++) { a = 5 + i * (2.6 + k * 0.4); S(x - a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); S(x + a, y - t + i * t / 17 + 9 + R() * 5, x, y - t + i * t / 17, 4.5, mix(ink, top, 0.12), 0.9); } } } cv.width=W*d;cv.height=H*d;var pre=document.createElement("pre");pre.textContent=SRC;f.querySelector(".ef-codebox").appendChild(pre);var fmt=function(n){return n.toLocaleString("en-US")},v=f.querySelectorAll(".ef-sizes .v");v[0].textContent=T.unit.replace("{}",fmt(SRC.length));v[1].textContent=T.unit.replace("{}",fmt(W*H*3));f.querySelector(".ef-sizes .s").textContent=T.ratio.replace("{}",fmt(Math.round(W*H*3/SRC.length)));function one(q){x.globalAlpha=q[6];x.strokeStyle=q[5];x.lineWidth=q[4];x.beginPath();x.moveTo(q[0],q[1]);x.lineTo(q[2],q[3]);x.stroke()}function go(){cancelAnimationFrame(raf);var s=seed;Q=[];paint(function(){Q.push(arguments)},function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296});x.setTransform(d,0,0,d,0,0);x.globalAlpha=1;x.fillStyle="#efe7d8";x.fillRect(0,0,W,H);x.lineCap="round";var i=0,per=Math.ceil(Q.length/170),still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;(function step(){var e=still?Q.length:Math.min(i+per,Q.length);for(;i<e;i++)one(Q[i]);if(i<Q.length)raf=requestAnimationFrame(step)})()}var b=f.querySelectorAll("button");b[0].onclick=go;b[1].onclick=function(){seed=Math.floor(Math.random()*1e9);go()};if("IntersectionObserver" in window){new IntersectionObserver(function(es,ob){if(es[0].isIntersecting&&!started){started=true;ob.disconnect();go()}},{threshold:.35}).observe(cv)}else{go()}})();</script><figcaption class="ef-cap">絵にはピクセルが一つも保存されていません。保存されているのは描き方です。まず空を塗り、次に太陽、遠くの山並み、水面、最後に手前の木を描きます。筆の位置や揺れは乱数から来ています。乱数を変えると細部はすべて変わりますが、絵は同じ絵のままです。バイト数は図のプログラムだけを数えたもので、「一筆描く」という基本の動作は含みません。</figcaption></figure>

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
