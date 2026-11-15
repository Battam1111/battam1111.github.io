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

Whenever the gap between Chinese models and those of OpenAI, Anthropic and Google came up this year, I kept hearing two explanations. One is that there are not enough GPUs, the other that the infrastructure lags behind. Both are true, but I don't think they explain everything. From what I have heard in conversations across the industry, the Chinese labs have all put real effort into long-horizon agentic RL, RL for coding agents above all, and for the most part it never took off. In the end, the gains in capability still came from distillation.

Why does something those three labs can make work fail in China? Beyond GPUs and infrastructure, I think there is a more fundamental reason. It lies in the path Chinese RL took when it started.

First, a little background; if you know it already, skip ahead. To train a large model with RL (reinforcement learning), you give it a task, let it work through to the end, score the result, and adjust the model according to the score. The core difficulty here is called credit assignment. When an attempt ends in success or failure, which of its steps deserve the credit or the blame? With only a few steps, that is easy to answer. When a single attempt runs to hundreds of steps, it becomes the crux of the whole problem.

## Why GRPO worked so well

Large-scale RL in China started from GRPO, which DeepSeek proposed. The idea is simple. The model attempts the same task several times, the scores are compared, and any attempt above the average is reinforced while any below it is pushed down. There is no need to train a separate critic, a model built to estimate how much score is still to come from the current step onward. A critic takes up its own share of GPU memory and compute, and it may not train well anyway.

<figure class="gf ef ef-f-group" id="ef-group-en"><div class="ef-box"><p class="ef-h">How GRPO works: attempt the same task several times and compare each attempt with the group's average</p><div class="ef-grp"><div class="ef-grp-col"><span class="ef-grp-n">1</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">2</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">3</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">4</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">5</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">6</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-avg"></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>right</span><span><span class="ef-dot bad"></span>wrong</span><span><i class="ef-dash"></i>the group's average</span><span>↑ above average, reinforced</span><span>↓ below average, pushed down</span></p></div><figcaption class="ef-cap">No separate critic to train. As long as some attempts in the group succeed and some fail, the comparison tells you which to reinforce.</figcaption></figure>

GRPO proved itself on math problems. RL on math takes very few turns. The model thinks, gives an answer, and the episode is over in one or two. In that setting, the signal from comparing within the group, whether this attempt did better or worse than average, is enough to get credit assignment right. It saved memory, needed no critic and worked well, so it quickly became the default way to do RL in China.

## Once tasks get long, it stops working

GRPO's signal is actually coarse. The model has to finish a whole trajectory before it gets a single score, right or wrong, and that score is given to the whole trajectory. If the outcome is right, every step is reinforced; if it is wrong, every step is penalized, no matter which steps were in fact done well.

On simple math problems, a signal this coarse does little harm. But in today's coding agent tasks, a single attempt easily runs to dozens of turns and more than a hundred thousand tokens. When hundreds of decisions share one score, the model cannot tell which step made it succeed and which made it fail.

There is something worse. Comparing within a group only works if some attempts at the same task succeed and some fail. The longer the task, the more steps in a row have to go right, and the more often every attempt fails. When they all fail, they all get the same score, there is nothing to compare, and the compute for that round is wasted. As tasks get longer, GRPO's signal gets scarcer as well as coarser.

<figure class="gf ef ef-f-long" id="ef-long-en"><div class="ef-box"><p class="ef-h">The longer the task, the more steps one score has to cover, and the more often a whole group fails</p><div class="ef-ctl"><label for="ef-long-en-r">Steps in one attempt</label><output for="ef-long-en-r">40</output><input type="range" id="ef-long-en-r" min="1" max="400" value="40"><div class="ef-presets"><button type="button" data-n="2">math problem, 2 steps</button><button type="button" data-n="30">30 steps</button><button type="button" data-n="300">coding agent, 300 steps</button></div></div><div class="ef-tracks"><div class="ef-track"><span class="ef-bar" style="width:9.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:2.75%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><span class="ef-endline" style="left:10.00%"><span>end</span></span></div><div class="ef-axis"><span>0</span><span>100</span><span>200</span><span>300</span><span>400</span></div><div class="ef-tiles"><div class="ef-tile"><span class="k">Succeeded in this group</span><span class="v">3 / 8</span></div><div class="ef-tile"><span class="k">One score covers</span><span class="v">40 steps</span></div><div class="ef-tile"><span class="k">Comparing within the group</span><span class="v">some succeed, some fail: there is a signal</span><span class="s">Under these assumptions, all 8 fail about 2% of the time</span></div></div></div><script>(function(){var f=document.getElementById("ef-long-en"),F=[36, 0, 120, 11, 0, 230, 69, 0],T={"steps": "{} steps", "mixed": "some succeed, some fail: there is a signal", "dead": "all fail: no signal", "prob": "Under these assumptions, all 8 fail about {}% of the time"},r=f.querySelector("input"),o=f.querySelector("output"),tr=f.querySelectorAll(".ef-track"),el=f.querySelector(".ef-endline"),ti=f.querySelectorAll(".ef-tile"),v=f.querySelectorAll(".ef-tile .v"),s=f.querySelector(".ef-tile .s");function up(){var n=+r.value,a=0;o.textContent=n;tr.forEach(function(t,i){var fi=F[i],ok=fi>n,len=fi===0?n:Math.min(fi,n);if(ok)a++;t.classList.toggle("ok",ok);t.querySelector(".ef-bar").style.width=Math.max(len/400*100,.8)+"%";t.querySelector(".ef-mark").textContent=ok?"\u2713":"\u2715"});el.style.left=n/400*100+"%";el.classList.toggle("far",n>340);el.classList.toggle("near",n<40);v[0].textContent=a+" / 8";v[1].textContent=T.steps.replace("{}",n);v[2].textContent=a?T.mixed:T.dead;ti[2].classList.toggle("dead",!a);var p=Math.pow(1-.6*Math.pow(.99,n),8)*100;s.textContent=T.prob.replace("{}",p<1?"<1":Math.round(p))}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">A worked example, not a measurement. Assume each attempt has a 60% chance of starting in the right direction, and after that each step has a 1% chance of going wrong, with one wrong step failing the task. The figure shows one group of 8 attempts drawn under these assumptions. Blue attempts succeed, grey ones fail, and a grey bar stops at the step where it went wrong.</figcaption></figure>

The bigger the model and the more complex the task, the finer the reward needs to be. That is exactly the direction in which GRPO's approach runs into a wall.

## Why it is so hard to get out

Everyone can see the problem, yet getting out is hard. Most new algorithms are improvements built on GRPO, and the general feeling is that GRPO is already well ahead of the alternatives. But for all the tweaking, the results barely move, because the root problem, a single score at the very end, has not been fixed.

Some have taken a different road with OPD (on-policy distillation), in which a student model works the tasks itself and a teacher model tells it, token by token, what was good and what was not. But OPD needs a good teacher first. And for the teacher to break through the current ceiling and become better than it is now, the only way is still RL.

So it becomes a vicious circle. However the algorithms are optimized, every road leads back to getting RL right first, and RL done the GRPO way cannot get credit assignment right on long tasks.

## What is locked in is a lesson, not code

Saying everyone is locked into GRPO calls for one explanation. Switching from GRPO to a method with a critic is a small change in the code. Why can't teams of several hundred people make the switch?

My reading is that what is locked in is not a choice of algorithm but accumulated capability. OpenAI, Anthropic and Google came all the way up from the RLHF era. Back then the standard recipe was PPO plus a critic plus a reward model, so they were forced to learn how to train a value model, how to keep it from collapsing, and how to keep it in step with a policy that keeps changing. That craft has settled into their teams.

Large-scale RL in China began at exactly the moment GRPO showed you could do very well without a critic. GRPO was designed partly with the GPU shortage in mind, since dropping the critic drops a large chunk of the cost. As a result, the Chinese labs in effect skipped this lesson. Now that tasks are long and a critic is truly needed, what is missing is not a switch but a whole body of engineering intuition that was never built up.

<figure class="gf ef ef-f-lesson" id="ef-lesson-en"><div class="ef-box"><p class="ef-h">Switching to a critic is a few lines of code. What is missing is the lesson that was never learned</p><div class="ef-lesson"><span class="hd"></span><span class="hd">Where they started</span><span class="hd">What they were forced to learn</span><span class="hd">Now that tasks are long and need a critic</span><span class="who">OpenAI, Anthropic, Google</span><span class="ef-node on">The standard recipe of the RLHF era: PPO plus a critic plus a reward model</span><span class="ef-node on">How to train a value model, keep it from collapsing, and keep it in step with a changing policy</span><span class="ef-node on">The craft is already in the team</span><span class="who">Chinese labs</span><span class="ef-node">GRPO: very good results without a critic</span><span class="ef-node none">This lesson was skipped</span><span class="ef-node">What is missing is not a switch but a body of engineering intuition</span></div></div><figcaption class="ef-cap">What is locked in is accumulated capability, not a choice of algorithm.</figcaption></figure>

## What a critic really buys you: the scope of comparison

The difference between a critic and GRPO goes beyond training one more model. It lies in what each of them compares against.

GRPO's baseline comes only from the few attempts at the same task in the same batch, so it is a local comparison. If the whole group fails, it has nothing to go on.

A critic's baseline is learned from all experience, so it is global. It can recognize that the intermediate state in front of it looks a lot like states in other tasks that went on to succeed. So even if not one attempt at this task has succeeded, the critic can borrow experience from elsewhere to tell the model whether a step was a good one.

<figure class="gf ef ef-f-scope" id="ef-scope-en"><div class="ef-box"><p class="ef-h">GRPO compares only within the group in front of it. A critic compares against all experience</p><div class="ef-two"><div class="ef-pane"><h4>GRPO: a local comparison</h4><div class="ef-scope-art"><div class="ef-group8"><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span></div></div><p class="ef-note">All 8 attempts at this task fail. The scores are the same, so there is nothing to compare.</p></div><div class="ef-pane on"><h4>Critic: a global comparison</h4><div class="ef-scope-art"><svg viewBox="0 0 300 150" role="img" aria-label="Intermediate states from many tasks; the current step falls among those that went on to succeed"><circle class="halo" cx="196" cy="66" r="52"/><circle class="f" cx="137" cy="83" r="4.6"/><circle class="s" cx="174" cy="34" r="4.6"/><circle class="f" cx="153" cy="92" r="4.6"/><circle class="f" cx="36" cy="49" r="4.6"/><circle class="f" cx="35" cy="115" r="4.6"/><circle class="f" cx="204" cy="15" r="4.6"/><circle class="f" cx="280" cy="95" r="4.6"/><circle class="f" cx="14" cy="79" r="4.6"/><circle class="f" cx="27" cy="35" r="4.6"/><circle class="f" cx="78" cy="14" r="4.6"/><circle class="f" cx="140" cy="67" r="4.6"/><circle class="f" cx="138" cy="46" r="4.6"/><circle class="f" cx="289" cy="119" r="4.6"/><circle class="s" cx="208" cy="51" r="4.6"/><circle class="f" cx="74" cy="48" r="4.6"/><circle class="f" cx="122" cy="120" r="4.6"/><circle class="f" cx="118" cy="135" r="4.6"/><circle class="f" cx="247" cy="10" r="4.6"/><circle class="f" cx="69" cy="128" r="4.6"/><circle class="f" cx="142" cy="137" r="4.6"/><circle class="f" cx="121" cy="19" r="4.6"/><circle class="s" cx="186" cy="111" r="4.6"/><circle class="f" cx="38" cy="18" r="4.6"/><circle class="f" cx="233" cy="33" r="4.6"/><circle class="s" cx="215" cy="27" r="4.6"/><circle class="s" cx="190" cy="25" r="4.6"/><circle class="f" cx="86" cy="136" r="4.6"/><circle class="s" cx="235" cy="50" r="4.6"/><circle class="f" cx="258" cy="37" r="4.6"/><circle class="f" cx="287" cy="38" r="4.6"/><circle class="f" cx="82" cy="110" r="4.6"/><circle class="f" cx="102" cy="49" r="4.6"/><circle class="s" cx="178" cy="58" r="4.6"/><circle class="f" cx="53" cy="128" r="4.6"/><circle class="f" cx="63" cy="106" r="4.6"/><circle class="s" cx="241" cy="88" r="4.6"/><circle class="f" cx="167" cy="121" r="4.6"/><circle class="f" cx="15" cy="45" r="4.6"/><circle class="f" cx="59" cy="58" r="4.6"/><circle class="s" cx="204" cy="86" r="4.6"/><circle class="f" cx="15" cy="128" r="4.6"/><circle class="f" cx="206" cy="135" r="4.6"/><circle class="f" cx="145" cy="105" r="4.6"/><circle class="f" cx="31" cy="81" r="4.6"/><circle class="s" cx="216" cy="101" r="4.6"/><circle class="f" cx="232" cy="129" r="4.6"/><circle class="f" cx="109" cy="99" r="4.6"/><circle class="f" cx="262" cy="123" r="4.6"/><circle class="s" cx="173" cy="89" r="4.6"/><circle class="f" cx="182" cy="130" r="4.6"/><circle class="f" cx="67" cy="32" r="4.6"/><circle class="f" cx="264" cy="96" r="4.6"/><circle class="f" cx="256" cy="60" r="4.6"/><circle class="f" cx="99" cy="28" r="4.6"/><circle class="f" cx="248" cy="102" r="4.6"/><circle class="f" cx="87" cy="38" r="4.6"/><circle class="s" cx="196" cy="66" r="5.4"/><circle class="ring" cx="196" cy="66" r="10"/></svg></div><p class="ef-note">The state in front of it looks a lot like states in other tasks that went on to succeed, so this step was a good one.</p></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>states that went on to succeed</span><span><span class="ef-dot bad"></span>states that went on to fail</span><span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle class="s" cx="11" cy="11" r="5"/><circle class="ring" cx="11" cy="11" r="9.5"/></svg>the step in question</span></p></div><figcaption class="ef-cap">Even if not one attempt at this task has succeeded, a critic can borrow experience from elsewhere to tell the model whether a step was good.</figcaption></figure>

Long-horizon tasks need exactly this kind of transfer, where a judgment learned on one task can be used midway through another. GRPO only ever looks at the group in front of it, so by its very structure it cannot do this.

## A deeper turn of the circle: who does the judging

If a critic is that good, why is it hard to train? The root cause is that judging whether an intermediate state of a long task is good is almost as hard as finishing the task. The judge has to be at least as smart as whoever does the work.

As far as I know, Google's internal RL relies on exactly this route, a critic or a PRM (process reward model, a model that scores each step). It uses generative methods to label every step, or even every token, and so gives feedback far finer than one score at the end. That is what gets its RL off the ground.

This route rests on a premise that is rarely said out loud. You need a judge stronger than the model being trained. Frontier labs have one, because they can use their own strongest model to judge the process. The strong model marks out good signals, those signals train a stronger model, and the stronger model becomes the judge in the next round. It is a loop that keeps itself turning.

Followers have no judge stronger than themselves. They can only borrow someone else's model, and that leads back to distillation.

So the vicious circle closes twice. Breakthroughs in capability depend on RL, RL depends on good mid-task signals, good mid-task signals depend on a stronger judge, and a stronger judge depends on a breakthrough in capability. First movers can climb on their own. Followers need outside help for every step up.

<figure class="gf ef ef-f-loop" id="ef-loop-en"><div class="ef-box"><p class="ef-h">The same loop. First movers can keep it turning on their own. Followers cannot</p><div class="ef-two"><div class="ef-pane on"><h4>First movers</h4><div class="ef-cycle"><span class="ef-node on">Use their own strongest model as the judge</span><span class="ef-arr">↓</span><span class="ef-node on">It marks good signals for every step</span><span class="ef-arr">↓</span><span class="ef-node on">RL trains a stronger model</span></div><p class="ef-back">↺ The stronger model becomes the judge in the next round.</p></div><div class="ef-pane"><h4>Followers</h4><div class="ef-cycle"><span class="ef-node none">A judge stronger than themselves: none</span><span class="ef-arr">↓</span><span class="ef-node">No fine-grained mid-task signals</span><span class="ef-arr">↓</span><span class="ef-node">RL cannot produce a breakthrough</span></div><p class="ef-back">↺ So there is still no stronger judge.</p><p class="ef-side">They can only borrow someone else's model, which leads back to distillation.</p></div></div></div><figcaption class="ef-cap">Breakthroughs in capability depend on RL, RL depends on good mid-task signals, good mid-task signals depend on a stronger judge, and a stronger judge depends on a breakthrough in capability.</figcaption></figure>

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

<figure class="gf ef ef-f-group" id="ef-group-zh"><div class="ef-box"><p class="ef-h">GRPO 的做法：同一道题做几遍，每一次都和这一组的平均分比</p><div class="ef-grp"><div class="ef-grp-col"><span class="ef-grp-n">1</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">2</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">3</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">4</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">5</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">6</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-avg"></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>做对</span><span><span class="ef-dot bad"></span>做错</span><span><i class="ef-dash"></i>这一组的平均分</span><span>↑ 高于平均，鼓励</span><span>↓ 低于平均，压低</span></p></div><figcaption class="ef-cap">不用另外训练 critic。只要这一组里有成有败，比一比就知道该鼓励哪一次。</figcaption></figure>

GRPO 当时是在数学题上奏效的。数学题的 RL 轮数很少，模型想一想、给出答案，一两轮就结束了。在这种情况下，靠组内比较拿到的那个「这次比平均好还是差」的信号，就足以把 credit assignment 做好。省显存，又不用训 critic，效果还好，它很快成了国内做 RL 的默认选择。

## 任务一变长，它就不灵了

GRPO 的信号其实很粗。模型要把一整条轨迹做完，才拿到一个对或错的分数，而这个分数是给整条轨迹的。做对了，每一步都被鼓励；做错了，每一步都被惩罚，不管其中哪几步其实做得很好。

在简单数学题上，这样粗一点没关系。可现在的 coding agent 任务，一次尝试动辄几十轮、十多万个 token。几百个决定共享一个分数，模型分不清是哪一步让它成功、哪一步让它失败。

还有一层更要命。组内比较要起作用，前提是同一道题的几次尝试里有成有败。任务越长，中间要连续做对的步骤越多，几次尝试全部失败的情况就越普遍。全部失败的时候，大家分数一样，比较不出任何差别，这一轮的算力等于白花。任务越长，GRPO 能拿到的信号越少，而不只是越粗。

<figure class="gf ef ef-f-long" id="ef-long-zh"><div class="ef-box"><p class="ef-h">任务越长，一个分数要管的步数越多，一组尝试也越容易全部失败</p><div class="ef-ctl"><label for="ef-long-zh-r">一次尝试有多少步</label><output for="ef-long-zh-r">40</output><input type="range" id="ef-long-zh-r" min="1" max="400" value="40"><div class="ef-presets"><button type="button" data-n="2">数学题，2 步</button><button type="button" data-n="30">30 步</button><button type="button" data-n="300">coding agent，300 步</button></div></div><div class="ef-tracks"><div class="ef-track"><span class="ef-bar" style="width:9.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:2.75%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><span class="ef-endline" style="left:10.00%"><span>终点</span></span></div><div class="ef-axis"><span>0</span><span>100</span><span>200</span><span>300</span><span>400</span></div><div class="ef-tiles"><div class="ef-tile"><span class="k">这一组里做成的</span><span class="v">3 / 8</span></div><div class="ef-tile"><span class="k">一个分数要管</span><span class="v">40 步</span></div><div class="ef-tile"><span class="k">组内比较</span><span class="v">有成有败，有信号</span><span class="s">照这个假设，8 次全部失败的概率约 2%</span></div></div></div><script>(function(){var f=document.getElementById("ef-long-zh"),F=[36, 0, 120, 11, 0, 230, 69, 0],T={"steps": "{} 步", "mixed": "有成有败，有信号", "dead": "全部失败，没有信号", "prob": "照这个假设，8 次全部失败的概率约 {}%"},r=f.querySelector("input"),o=f.querySelector("output"),tr=f.querySelectorAll(".ef-track"),el=f.querySelector(".ef-endline"),ti=f.querySelectorAll(".ef-tile"),v=f.querySelectorAll(".ef-tile .v"),s=f.querySelector(".ef-tile .s");function up(){var n=+r.value,a=0;o.textContent=n;tr.forEach(function(t,i){var fi=F[i],ok=fi>n,len=fi===0?n:Math.min(fi,n);if(ok)a++;t.classList.toggle("ok",ok);t.querySelector(".ef-bar").style.width=Math.max(len/400*100,.8)+"%";t.querySelector(".ef-mark").textContent=ok?"\u2713":"\u2715"});el.style.left=n/400*100+"%";el.classList.toggle("far",n>340);el.classList.toggle("near",n<40);v[0].textContent=a+" / 8";v[1].textContent=T.steps.replace("{}",n);v[2].textContent=a?T.mixed:T.dead;ti[2].classList.toggle("dead",!a);var p=Math.pow(1-.6*Math.pow(.99,n),8)*100;s.textContent=T.prob.replace("{}",p<1?"<1":Math.round(p))}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">示意计算，不是实测。假设每次尝试有六成机会方向对；方向对了以后，每一步还有 1% 的可能出错，错一步整题就失败。图里是照这个假设取的一组 8 次尝试，蓝色是做成的，灰色是失败的，灰条停在哪里，就是在哪一步出的错。</figcaption></figure>

模型越大、任务越复杂，对奖励精细程度的要求就越高。GRPO 这套办法恰好在这个方向上走不通。

## 为什么出不来

问题是大家看得到的，可是很难跳出来。现在大多数新算法都是在 GRPO 的基础上改进的，大家也普遍觉得 GRPO 已经比其他办法好不少。可是改来改去，也就那样，因为根上的问题，就是只有终点那一个分数，并没有被改掉。

也有人另辟蹊径，去做 OPD（on-policy distillation，在线蒸馏，就是让学生模型自己做题，由老师模型逐个 token 告诉它哪里好、哪里不好）。但 OPD 的前提是先有一个好老师。老师要突破上限、做得比现在更好，还是只能靠 RL。

这就成了一个死循环。算法再怎么优化，绕来绕去都得先把 RL 做好；而在 GRPO 这套办法里做 RL，长程任务的 credit assignment 又做不好。

## 锁住的是一课，不是一段代码

说大家被 GRPO 锁死了，有一处需要解释。从 GRPO 换成带 critic 的做法，在代码上是很小的改动，几百人的团队为什么换不过去？

我的理解是，锁住的不是算法选项，而是能力的积累。OpenAI、Anthropic、Google 是从 RLHF 那个年代一路走过来的。那时的标准做法就是 PPO 加 critic 加奖励模型，他们被迫学会了怎么训价值模型、怎么不让它训崩、怎么让它跟得上正在变化的策略。这些手艺沉淀在团队里。

国内大规模做 RL，恰好是从 GRPO 证明「不要 critic 也能做得很好」那一刻开始的。GRPO 的出发点本身就有卡不够的考量，省掉 critic 就省掉一大块开销。结果国内相当于跳过了这一课。等到任务变长、真正需要 critic 的时候，缺的不是一个开关，而是一整套没有攒下来的工程手感。

<figure class="gf ef ef-f-lesson" id="ef-lesson-zh"><div class="ef-box"><p class="ef-h">换成 critic 只是改几行代码，缺的是没攒下来的那一课</p><div class="ef-lesson"><span class="hd"></span><span class="hd">起步时的做法</span><span class="hd">被迫学会的</span><span class="hd">任务变长、需要 critic 时</span><span class="who">OpenAI、Anthropic、Google</span><span class="ef-node on">RLHF 年代的标准做法：PPO 加 critic 加奖励模型</span><span class="ef-node on">怎么训价值模型，怎么不让它训崩，怎么让它跟上正在变化的策略</span><span class="ef-node on">手艺已经沉淀在团队里</span><span class="who">国内</span><span class="ef-node">GRPO：不要 critic 也能做得很好</span><span class="ef-node none">这一课被跳过了</span><span class="ef-node">缺的不是一个开关，是一整套工程手感</span></div></div><figcaption class="ef-cap">锁住的不是算法选项，而是能力的积累。</figcaption></figure>

## critic 到底好在哪：比较的范围不同

critic 和 GRPO 的区别，不只是「多训一个模型」，而在于它们拿什么作比较。

GRPO 的基准只来自同一道题、同一批的那几次尝试，是一种局部的比较。这一组全挂了，它就一无所知。

critic 的基准是从所有经验里学出来的，是全局的。它能认出「眼下这个中间状态，很像别的题里那些后来做成了的状态」。所以哪怕这道题一次都没做对，critic 也能借别处的经验，告诉模型这一步走得好不好。

<figure class="gf ef ef-f-scope" id="ef-scope-zh"><div class="ef-box"><p class="ef-h">GRPO 只和眼前这一组比，critic 和所有经验比</p><div class="ef-two"><div class="ef-pane"><h4>GRPO：局部的比较</h4><div class="ef-scope-art"><div class="ef-group8"><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span></div></div><p class="ef-note">这道题的 8 次尝试全部失败，分数一样，比不出任何差别。</p></div><div class="ef-pane on"><h4>critic：全局的比较</h4><div class="ef-scope-art"><svg viewBox="0 0 300 150" role="img" aria-label="许多题目的中间状态，眼下这一步落在后来做成的那一片里"><circle class="halo" cx="196" cy="66" r="52"/><circle class="f" cx="137" cy="83" r="4.6"/><circle class="s" cx="174" cy="34" r="4.6"/><circle class="f" cx="153" cy="92" r="4.6"/><circle class="f" cx="36" cy="49" r="4.6"/><circle class="f" cx="35" cy="115" r="4.6"/><circle class="f" cx="204" cy="15" r="4.6"/><circle class="f" cx="280" cy="95" r="4.6"/><circle class="f" cx="14" cy="79" r="4.6"/><circle class="f" cx="27" cy="35" r="4.6"/><circle class="f" cx="78" cy="14" r="4.6"/><circle class="f" cx="140" cy="67" r="4.6"/><circle class="f" cx="138" cy="46" r="4.6"/><circle class="f" cx="289" cy="119" r="4.6"/><circle class="s" cx="208" cy="51" r="4.6"/><circle class="f" cx="74" cy="48" r="4.6"/><circle class="f" cx="122" cy="120" r="4.6"/><circle class="f" cx="118" cy="135" r="4.6"/><circle class="f" cx="247" cy="10" r="4.6"/><circle class="f" cx="69" cy="128" r="4.6"/><circle class="f" cx="142" cy="137" r="4.6"/><circle class="f" cx="121" cy="19" r="4.6"/><circle class="s" cx="186" cy="111" r="4.6"/><circle class="f" cx="38" cy="18" r="4.6"/><circle class="f" cx="233" cy="33" r="4.6"/><circle class="s" cx="215" cy="27" r="4.6"/><circle class="s" cx="190" cy="25" r="4.6"/><circle class="f" cx="86" cy="136" r="4.6"/><circle class="s" cx="235" cy="50" r="4.6"/><circle class="f" cx="258" cy="37" r="4.6"/><circle class="f" cx="287" cy="38" r="4.6"/><circle class="f" cx="82" cy="110" r="4.6"/><circle class="f" cx="102" cy="49" r="4.6"/><circle class="s" cx="178" cy="58" r="4.6"/><circle class="f" cx="53" cy="128" r="4.6"/><circle class="f" cx="63" cy="106" r="4.6"/><circle class="s" cx="241" cy="88" r="4.6"/><circle class="f" cx="167" cy="121" r="4.6"/><circle class="f" cx="15" cy="45" r="4.6"/><circle class="f" cx="59" cy="58" r="4.6"/><circle class="s" cx="204" cy="86" r="4.6"/><circle class="f" cx="15" cy="128" r="4.6"/><circle class="f" cx="206" cy="135" r="4.6"/><circle class="f" cx="145" cy="105" r="4.6"/><circle class="f" cx="31" cy="81" r="4.6"/><circle class="s" cx="216" cy="101" r="4.6"/><circle class="f" cx="232" cy="129" r="4.6"/><circle class="f" cx="109" cy="99" r="4.6"/><circle class="f" cx="262" cy="123" r="4.6"/><circle class="s" cx="173" cy="89" r="4.6"/><circle class="f" cx="182" cy="130" r="4.6"/><circle class="f" cx="67" cy="32" r="4.6"/><circle class="f" cx="264" cy="96" r="4.6"/><circle class="f" cx="256" cy="60" r="4.6"/><circle class="f" cx="99" cy="28" r="4.6"/><circle class="f" cx="248" cy="102" r="4.6"/><circle class="f" cx="87" cy="38" r="4.6"/><circle class="s" cx="196" cy="66" r="5.4"/><circle class="ring" cx="196" cy="66" r="10"/></svg></div><p class="ef-note">眼下这个中间状态，很像别的题里那些后来做成了的状态，所以这一步走得不错。</p></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>后来做成了的状态</span><span><span class="ef-dot bad"></span>后来失败的状态</span><span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle class="s" cx="11" cy="11" r="5"/><circle class="ring" cx="11" cy="11" r="9.5"/></svg>眼下这一步</span></p></div><figcaption class="ef-cap">哪怕这道题一次都没做对，critic 也能借别处的经验，告诉模型这一步走得好不好。</figcaption></figure>

长程任务需要的恰恰是这种经验的迁移，在一道题里学到的判断，能用到另一道题的中途。GRPO 每次只看眼前这一组，结构上就做不到这一点。

## 死循环的更深一圈：谁来当评判

既然 critic 这么好，为什么难训？根本原因是，要判断一个长程任务的中间状态好不好，几乎和把任务做完一样难。评判的人，至少得和做事的人一样聪明。

据我了解，Google 内部做 RL 依赖的正是 critic 或 PRM（过程奖励模型，给每一步打分的模型）这条路，用生成式的方法给每一步、甚至更细到每个 token 做标注，给出比终点一个分数细得多的反馈，RL 才训得起来。

这条路有一个不常被说出来的前提，就是手里得有一个比被训模型更强的评判者。前沿实验室有，它们可以拿自己最强的模型当过程评判。强模型标出好的信号，训出更强的模型，这个更强的模型又成为下一轮的评判。这是一个能自己转起来的循环。

追赶者没有比自己更强的评判者，只能去借别人的模型，而这又回到了蒸馏。

于是死循环闭合了两次。能力突破靠 RL，RL 靠好的中途信号，好的中途信号靠更强的评判者，更强的评判者又靠能力突破。先发者能自己往上走，追赶者每往上一步都要借外力。

<figure class="gf ef ef-f-loop" id="ef-loop-zh"><div class="ef-box"><p class="ef-h">同一个循环，先发者能自己转起来，追赶者转不起来</p><div class="ef-two"><div class="ef-pane on"><h4>先发者</h4><div class="ef-cycle"><span class="ef-node on">拿自己最强的模型当评判</span><span class="ef-arr">↓</span><span class="ef-node on">给每一步标出好的信号</span><span class="ef-arr">↓</span><span class="ef-node on">RL 训出更强的模型</span></div><p class="ef-back">↺ 更强的模型，成为下一轮的评判。</p></div><div class="ef-pane"><h4>追赶者</h4><div class="ef-cycle"><span class="ef-node none">比自己更强的评判者：没有</span><span class="ef-arr">↓</span><span class="ef-node">细的中途信号拿不到</span><span class="ef-arr">↓</span><span class="ef-node">RL 训不出突破</span></div><p class="ef-back">↺ 所以还是没有更强的评判者。</p><p class="ef-side">只能去借别人的模型，这又回到了蒸馏。</p></div></div></div><figcaption class="ef-cap">能力突破靠 RL，RL 靠好的中途信号，好的中途信号靠更强的评判者，更强的评判者又靠能力突破。</figcaption></figure>

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

<figure class="gf ef ef-f-group" id="ef-group-ja"><div class="ef-box"><p class="ef-h">GRPO のやり方：同じ課題を何回か解かせ、それぞれをそのグループの平均と比べる</p><div class="ef-grp"><div class="ef-grp-col"><span class="ef-grp-n">1</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">2</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">3</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">4</span><span class="ef-slot"><span class="ef-dot ok"></span></span><span class="ef-slot"></span><span class="ef-verdict up">↑</span></div><div class="ef-grp-col"><span class="ef-grp-n">5</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-col"><span class="ef-grp-n">6</span><span class="ef-slot"></span><span class="ef-slot"><span class="ef-dot bad"></span></span><span class="ef-verdict">↓</span></div><div class="ef-grp-avg"></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>正解</span><span><span class="ef-dot bad"></span>不正解</span><span><i class="ef-dash"></i>このグループの平均</span><span>↑ 平均より上、強める</span><span>↓ 平均より下、弱める</span></p></div><figcaption class="ef-cap">critic を別に訓練する必要はありません。グループの中に成功と失敗が混じっていれば、比べるだけでどの試行を強めるべきかがわかります。</figcaption></figure>

GRPO が成果を上げたのは、数学の問題でした。数学の RL はターン数がごく少なく、モデルが考えて答えを出せば、一、二ターンで終わります。この条件なら、グループ内の比較から得られる「今回は平均より良かったか、悪かったか」という信号だけで、credit assignment は十分にこなせます。メモリを節約でき、critic も要らず、しかも効果が高い。GRPO はたちまち、中国で RL をやるときの定番になりました。

## タスクが長くなると、効かなくなる

GRPO の信号は、実はかなり粗いものです。モデルは軌跡を一本最後までやり終えて、ようやく正解か不正解かの点数を一つもらいます。しかもその点数は、軌跡全体に対して与えられます。正解なら全ステップが強められ、不正解なら全ステップが罰せられます。そのうちのどのステップが実はよくできていたかは関係ありません。

簡単な数学の問題なら、この程度の粗さは問題になりません。しかし今のコーディングエージェントの課題では、一回の試行が数十ターン、十数万トークンに及ぶのが当たり前です。数百もの判断が一つの点数を分け合っていては、どのステップが成功につながり、どのステップが失敗を招いたのか、モデルには見分けがつきません。

さらに深刻な問題があります。グループ内の比較が働くには、同じ課題への何回かの試行の中に、成功と失敗が混じっていなければなりません。タスクが長くなるほど、途中で続けて正しくこなすべきステップが増え、すべての試行が失敗することが多くなります。全部失敗すれば点数はみな同じで、比べても差は何も出ず、その回の計算はまるごと無駄になります。タスクが長くなるほど、GRPO が得られる信号は粗くなるうえに、少なくもなっていくのです。

<figure class="gf ef ef-f-long" id="ef-long-ja"><div class="ef-box"><p class="ef-h">タスクが長いほど、一つの点数が受け持つステップは増え、グループが全滅しやすくなる</p><div class="ef-ctl"><label for="ef-long-ja-r">一回の試行のステップ数</label><output for="ef-long-ja-r">40</output><input type="range" id="ef-long-ja-r" min="1" max="400" value="40"><div class="ef-presets"><button type="button" data-n="2">数学の問題、2 ステップ</button><button type="button" data-n="30">30 ステップ</button><button type="button" data-n="300">コーディングエージェント、300 ステップ</button></div></div><div class="ef-tracks"><div class="ef-track"><span class="ef-bar" style="width:9.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:2.75%"></span><span class="ef-mark">✕</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track ok"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✓</span></div><div class="ef-track"><span class="ef-bar" style="width:10.00%"></span><span class="ef-mark">✕</span></div><span class="ef-endline" style="left:10.00%"><span>終わり</span></span></div><div class="ef-axis"><span>0</span><span>100</span><span>200</span><span>300</span><span>400</span></div><div class="ef-tiles"><div class="ef-tile"><span class="k">このグループで成功した数</span><span class="v">3 / 8</span></div><div class="ef-tile"><span class="k">一つの点数が受け持つ</span><span class="v">40 ステップ</span></div><div class="ef-tile"><span class="k">グループ内の比較</span><span class="v">成功と失敗が混じる、信号あり</span><span class="s">この仮定では、8 回すべてが失敗する確率は約 2%</span></div></div></div><script>(function(){var f=document.getElementById("ef-long-ja"),F=[36, 0, 120, 11, 0, 230, 69, 0],T={"steps": "{} ステップ", "mixed": "成功と失敗が混じる、信号あり", "dead": "全部失敗、信号なし", "prob": "この仮定では、8 回すべてが失敗する確率は約 {}%"},r=f.querySelector("input"),o=f.querySelector("output"),tr=f.querySelectorAll(".ef-track"),el=f.querySelector(".ef-endline"),ti=f.querySelectorAll(".ef-tile"),v=f.querySelectorAll(".ef-tile .v"),s=f.querySelector(".ef-tile .s");function up(){var n=+r.value,a=0;o.textContent=n;tr.forEach(function(t,i){var fi=F[i],ok=fi>n,len=fi===0?n:Math.min(fi,n);if(ok)a++;t.classList.toggle("ok",ok);t.querySelector(".ef-bar").style.width=Math.max(len/400*100,.8)+"%";t.querySelector(".ef-mark").textContent=ok?"\u2713":"\u2715"});el.style.left=n/400*100+"%";el.classList.toggle("far",n>340);el.classList.toggle("near",n<40);v[0].textContent=a+" / 8";v[1].textContent=T.steps.replace("{}",n);v[2].textContent=a?T.mixed:T.dead;ti[2].classList.toggle("dead",!a);var p=Math.pow(1-.6*Math.pow(.99,n),8)*100;s.textContent=T.prob.replace("{}",p<1?"<1":Math.round(p))}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">説明のための計算で、実測ではありません。各試行は 6 割の確率で正しい方向に進み、そのあとは各ステップが 1% の確率で誤り、一つ誤ると課題全体が失敗すると仮定しています。図はこの仮定のもとで選んだ 8 回の試行です。青は成功、灰色は失敗で、灰色の棒が止まっているところが誤ったステップです。</figcaption></figure>

モデルが大きくなり、タスクが複雑になるほど、報酬にはより細かさが求められます。GRPO のやり方は、ちょうどこの方向で行き詰まります。

## なぜ抜け出せないのか

問題は誰の目にも見えているのに、抜け出すのは難しいのです。いま出ている新しいアルゴリズムの多くは GRPO を土台にした改良で、GRPO はほかの方法よりかなり優れているという見方も広く共有されています。けれども、いくら手を加えても大きくは変わりません。根本の問題、つまり最後に点数が一つあるだけという点が、そのまま残っているからです。

別の道を探る人もいて、OPD（on-policy distillation、オンポリシー蒸留）に取り組んでいます。生徒モデルに自分で課題を解かせ、教師モデルがトークンごとに、どこが良くてどこが悪いかを教えるやり方です。ただし OPD には、まず良い教師がいることが前提になります。そして教師が今の上限を破って、いまより良くなるには、やはり RL に頼るしかありません。

こうして堂々めぐりになります。アルゴリズムをどれだけ磨いても、回り回って、まず RL をうまくやらなければなりません。ところが GRPO のやり方で RL をやる限り、長いタスクの credit assignment はうまくいかないのです。

## 縛っているのはコードではなく、飛ばした授業

みんなが GRPO に縛られていると言うなら、説明しておくべきことが一つあります。GRPO から critic を使うやり方に切り替えるのは、コードの上ではごく小さな変更です。数百人規模のチームが、なぜ切り替えられないのでしょうか。

私の理解では、縛られているのはアルゴリズムの選択肢ではなく、能力の蓄積です。OpenAI、Anthropic、Google は RLHF の時代からずっと歩んできました。当時の標準的なやり方は、PPO に critic と報酬モデルを組み合わせるものでした。彼らは否応なく、価値モデルをどう訓練するか、どうすれば訓練が崩れないか、変わり続ける方策にどう追いつかせるかを身につけました。その腕前が、チームの中に蓄えられています。

中国で大規模な RL が始まったのは、ちょうど GRPO が「critic なしでも十分うまくいく」と示したその時でした。GRPO の発想にはもともと GPU 不足への配慮があり、critic を省けば大きな出費が省けます。その結果、中国はこの授業を飛ばしたも同然になりました。タスクが長くなり、critic が本当に必要になったいま、足りないのはスイッチ一つではありません。蓄えてこなかったエンジニアリングの勘の、そのすべてです。

<figure class="gf ef ef-f-lesson" id="ef-lesson-ja"><div class="ef-box"><p class="ef-h">critic への切り替えは数行のコード。足りないのは、蓄えてこなかった授業のほう</p><div class="ef-lesson"><span class="hd"></span><span class="hd">出発点のやり方</span><span class="hd">否応なく身につけたこと</span><span class="hd">タスクが長くなり、critic が必要になったとき</span><span class="who">OpenAI、Anthropic、Google</span><span class="ef-node on">RLHF 時代の標準：PPO に critic と報酬モデル</span><span class="ef-node on">価値モデルをどう訓練するか、どう崩さないか、変わり続ける方策にどう追いつかせるか</span><span class="ef-node on">腕前はすでにチームの中にある</span><span class="who">中国</span><span class="ef-node">GRPO：critic なしでも十分うまくいく</span><span class="ef-node none">この授業は飛ばされた</span><span class="ef-node">足りないのはスイッチではなく、エンジニアリングの勘のすべて</span></div></div><figcaption class="ef-cap">縛られているのはアルゴリズムの選択肢ではなく、能力の蓄積です。</figcaption></figure>

## critic の何が良いのか：比べる範囲が違う

critic と GRPO の違いは、「モデルをもう一つ訓練する」ことにとどまりません。何と比べるかが違うのです。

GRPO の基準は、同じ課題、同じバッチの数回の試行からしか得られません。局所的な比較です。そのグループが全滅すれば、何もわかりません。

critic の基準は、あらゆる経験から学んだもので、全体を見渡したものです。「いま目の前にある途中の状態は、ほかの課題で後に成功した状態によく似ている」と見分けられます。だから、この課題で一度も正解できていなくても、critic はほかで得た経験を借りて、このステップが良かったかどうかをモデルに伝えられます。

<figure class="gf ef ef-f-scope" id="ef-scope-ja"><div class="ef-box"><p class="ef-h">GRPO は目の前のグループとしか比べない。critic はあらゆる経験と比べる</p><div class="ef-two"><div class="ef-pane"><h4>GRPO：局所的な比較</h4><div class="ef-scope-art"><div class="ef-group8"><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span><span class="ef-dot bad"></span></div></div><p class="ef-note">この課題の 8 回の試行はすべて失敗。点数はみな同じで、比べても差は出ません。</p></div><div class="ef-pane on"><h4>critic：全体を見渡した比較</h4><div class="ef-scope-art"><svg viewBox="0 0 300 150" role="img" aria-label="多くの課題の途中の状態。いまのステップは、後に成功した状態の集まりの中にある"><circle class="halo" cx="196" cy="66" r="52"/><circle class="f" cx="137" cy="83" r="4.6"/><circle class="s" cx="174" cy="34" r="4.6"/><circle class="f" cx="153" cy="92" r="4.6"/><circle class="f" cx="36" cy="49" r="4.6"/><circle class="f" cx="35" cy="115" r="4.6"/><circle class="f" cx="204" cy="15" r="4.6"/><circle class="f" cx="280" cy="95" r="4.6"/><circle class="f" cx="14" cy="79" r="4.6"/><circle class="f" cx="27" cy="35" r="4.6"/><circle class="f" cx="78" cy="14" r="4.6"/><circle class="f" cx="140" cy="67" r="4.6"/><circle class="f" cx="138" cy="46" r="4.6"/><circle class="f" cx="289" cy="119" r="4.6"/><circle class="s" cx="208" cy="51" r="4.6"/><circle class="f" cx="74" cy="48" r="4.6"/><circle class="f" cx="122" cy="120" r="4.6"/><circle class="f" cx="118" cy="135" r="4.6"/><circle class="f" cx="247" cy="10" r="4.6"/><circle class="f" cx="69" cy="128" r="4.6"/><circle class="f" cx="142" cy="137" r="4.6"/><circle class="f" cx="121" cy="19" r="4.6"/><circle class="s" cx="186" cy="111" r="4.6"/><circle class="f" cx="38" cy="18" r="4.6"/><circle class="f" cx="233" cy="33" r="4.6"/><circle class="s" cx="215" cy="27" r="4.6"/><circle class="s" cx="190" cy="25" r="4.6"/><circle class="f" cx="86" cy="136" r="4.6"/><circle class="s" cx="235" cy="50" r="4.6"/><circle class="f" cx="258" cy="37" r="4.6"/><circle class="f" cx="287" cy="38" r="4.6"/><circle class="f" cx="82" cy="110" r="4.6"/><circle class="f" cx="102" cy="49" r="4.6"/><circle class="s" cx="178" cy="58" r="4.6"/><circle class="f" cx="53" cy="128" r="4.6"/><circle class="f" cx="63" cy="106" r="4.6"/><circle class="s" cx="241" cy="88" r="4.6"/><circle class="f" cx="167" cy="121" r="4.6"/><circle class="f" cx="15" cy="45" r="4.6"/><circle class="f" cx="59" cy="58" r="4.6"/><circle class="s" cx="204" cy="86" r="4.6"/><circle class="f" cx="15" cy="128" r="4.6"/><circle class="f" cx="206" cy="135" r="4.6"/><circle class="f" cx="145" cy="105" r="4.6"/><circle class="f" cx="31" cy="81" r="4.6"/><circle class="s" cx="216" cy="101" r="4.6"/><circle class="f" cx="232" cy="129" r="4.6"/><circle class="f" cx="109" cy="99" r="4.6"/><circle class="f" cx="262" cy="123" r="4.6"/><circle class="s" cx="173" cy="89" r="4.6"/><circle class="f" cx="182" cy="130" r="4.6"/><circle class="f" cx="67" cy="32" r="4.6"/><circle class="f" cx="264" cy="96" r="4.6"/><circle class="f" cx="256" cy="60" r="4.6"/><circle class="f" cx="99" cy="28" r="4.6"/><circle class="f" cx="248" cy="102" r="4.6"/><circle class="f" cx="87" cy="38" r="4.6"/><circle class="s" cx="196" cy="66" r="5.4"/><circle class="ring" cx="196" cy="66" r="10"/></svg></div><p class="ef-note">いま目の前にある途中の状態は、ほかの課題で後に成功した状態によく似ている。だから、このステップは良かったとわかります。</p></div></div><p class="ef-legend"><span><span class="ef-dot ok"></span>後に成功した状態</span><span><span class="ef-dot bad"></span>後に失敗した状態</span><span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle class="s" cx="11" cy="11" r="5"/><circle class="ring" cx="11" cy="11" r="9.5"/></svg>いまのステップ</span></p></div><figcaption class="ef-cap">この課題で一度も正解できていなくても、critic はほかで得た経験を借りて、このステップが良かったかどうかをモデルに伝えられます。</figcaption></figure>

長いタスクに必要なのは、まさにこうした経験の転移です。ある課題で身につけた判断を、別の課題の途中で使えることです。GRPO はいつも目の前のグループしか見ないので、構造上これができません。

## 堂々めぐりのさらに奥：誰が評価するのか

critic がそれほど良いなら、なぜ訓練が難しいのでしょうか。根本の理由は、長いタスクの途中の状態が良いかどうかを判断するのが、タスクをやり遂げるのとほとんど同じくらい難しいことにあります。評価する側は、少なくとも実行する側と同じくらい賢くなければなりません。

私の知る限り、Google の社内の RL は、まさに critic や PRM（プロセス報酬モデル、各ステップに点数をつけるモデル）の道に頼っています。生成的な手法で各ステップ、さらには各トークンにまでラベルを付け、最後の点数一つよりはるかに細かいフィードバックを与えることで、ようやく RL が回るのです。

この道には、あまり口にされない前提があります。訓練するモデルより強い評価者が手元にいることです。最前線の研究所にはそれがあり、自社で最も強いモデルを、過程を評価する役に使えます。強いモデルが良い信号をつけ、それでもっと強いモデルを訓練し、そのもっと強いモデルが次の回の評価者になります。自分で回り続けるループです。

追う側には、自分より強い評価者がいません。他社のモデルを借りるしかなく、それはまた蒸留に戻ることを意味します。

こうして堂々めぐりは二重に閉じます。能力の突破には RL が要り、RL には良い途中の信号が要り、良い途中の信号にはもっと強い評価者が要り、もっと強い評価者には能力の突破が要ります。先行する側は自力で上っていけますが、追う側は一段上るたびに外の力を借りなければなりません。

<figure class="gf ef ef-f-loop" id="ef-loop-ja"><div class="ef-box"><p class="ef-h">同じループでも、先行する側は自力で回せて、追う側は回せない</p><div class="ef-two"><div class="ef-pane on"><h4>先行する側</h4><div class="ef-cycle"><span class="ef-node on">自社で最も強いモデルを評価者にする</span><span class="ef-arr">↓</span><span class="ef-node on">各ステップに良い信号をつける</span><span class="ef-arr">↓</span><span class="ef-node on">RL でもっと強いモデルを訓練する</span></div><p class="ef-back">↺ もっと強いモデルが、次の回の評価者になります。</p></div><div class="ef-pane"><h4>追う側</h4><div class="ef-cycle"><span class="ef-node none">自分より強い評価者：いない</span><span class="ef-arr">↓</span><span class="ef-node">細かい途中の信号が得られない</span><span class="ef-arr">↓</span><span class="ef-node">RL で突破できない</span></div><p class="ef-back">↺ だから、もっと強い評価者はやはりいません。</p><p class="ef-side">他社のモデルを借りるしかなく、それはまた蒸留に戻ることを意味します。</p></div></div></div><figcaption class="ef-cap">能力の突破には RL が要り、RL には良い途中の信号が要り、良い途中の信号にはもっと強い評価者が要り、もっと強い評価者には能力の突破が要ります。</figcaption></figure>

## では、差はどこにあるのか

これらを合わせて考えると、私の結論はこうです。GRPO は追う側の立場で最も手に取りやすい選択で、この苦境をさらに深めましたが、苦境の根はもっと下にあります。根にあるのは、先行する側は自分のモデルで自分を訓練できるのに、追う側にはそれができないということです。GPU と計算の不足、インフラの未成熟は、この構造の上で差をさらに一段広げています。

この見立てが正しければ、GRPO の上で手直しを続けても、局面はなかなか変わりません。本当に取り組むべきは、長いタスクで細かい途中の信号をどう得るかです。critic をきちんと訓練するか、過程の評価をきちんと作るか。避けて通れない授業で、補習は早いほどいいのです。

以上は、耳にしたことと自分なりの推論から導いた考えです。ご意見をいただければ幸いです。

</div>
{% endraw %}
