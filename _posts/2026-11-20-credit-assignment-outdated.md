---
layout: post
title: "Is Credit Assignment Outdated?"
title_zh: "Credit Assignment 过时了？"
title_ja: "Credit Assignment は時代遅れなのか"
date: 2026-11-20
description: "Methods go out of date; problems do not. The era of long-horizon tasks and agents is exactly when credit assignment most needs solving in its own right."
description_zh: "方法会过时，问题不会。长程任务和 agent 的时代，恰恰是最需要专门去解 credit assignment 的时候。"
description_ja: "方法は時代遅れになっても、問題は時代遅れになりません。長いホライズンのタスクとエージェントの時代こそ、credit assignment にわざわざ取り組む必要が最も大きい時期です。"
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
  
  /* swatches shared by the essay-C legends: accent = reinforced, grey = penalized, outline = left alone */
  .ef-sw { display: inline-block; width: 16px; height: 10px; border-radius: 2px; flex: none; }
  .ef-sw.up { background: var(--accent); }
  .ef-sw.dn { background: var(--ink-3); opacity: 0.6; }
  .ef-sw.flat { border: 1px solid var(--rule-strong); background: var(--bg); }
  .ef-sw.bar { width: 6px; height: 14px; background: var(--accent); }
  .ef button.on { border-color: var(--accent-line); background: var(--accent-tint); color: var(--accent-strong); }
  
  /* split: one score shared out per step, two ways */
  .ef-split { display: grid; grid-template-columns: minmax(0, 1.25fr) 4.6em minmax(0, 1fr) minmax(0, 1fr); gap: 7px 12px; align-items: center; font-size: var(--step--1); }
  .ef-split .hd { font-size: var(--step--2); color: var(--ink-3); line-height: 1.35; align-self: end; overflow-wrap: normal; word-break: normal; }
  .ef-split .st { line-height: 1.35; color: var(--ink-2); }
  .ef-split .pv { font-variant-numeric: tabular-nums; color: var(--ink-3); text-align: right; }
  .ef-split .err { color: var(--ink); font-weight: 600; }
  .ef-split .dv { position: relative; height: 14px; background: var(--surface-2); border-radius: 3px; }
  .ef-split .dv::before { content: ""; position: absolute; left: 50%; top: -3px; bottom: -3px; border-left: 1px solid var(--ink-3); }
  .ef-split .dv i { position: absolute; top: 2px; bottom: 2px; border-radius: 2px; }
  .ef-split .dv i.up { left: 50%; background: var(--accent); }
  .ef-split .dv i.dn { right: 50%; background: var(--ink-3); opacity: 0.6; }
  
  /* fork: a passage of tokens, bar height = how unsure the model is there */
  .ef-fork { display: flex; flex-wrap: wrap; gap: 10px 2px; align-items: flex-end; margin-top: 16px; }
  .ef-fork.sp { gap: 10px 6px; }
  .ef-fork .tk { display: inline-flex; flex-direction: column; align-items: center; gap: 3px; transition: opacity 160ms ease; }
  .ef-fork .tk s { display: flex; align-items: flex-end; height: 24px; text-decoration: none; }
  .ef-fork .tk i { display: block; width: 6px; min-height: 2px; border-radius: 2px; background: var(--ink-3); opacity: 0.45; }
  .ef-fork .tk b { font-weight: 400; font-size: 0.95rem; line-height: 1.4; color: var(--ink-2); white-space: nowrap; }
  .ef-fork .tk.hi i { background: var(--accent); opacity: 1; }
  .ef-fork .tk.hi b { color: var(--accent-strong); font-weight: 600; background: var(--accent-tint); border-radius: 4px; padding: 0 3px; }
  .ef-fork.only .tk:not(.hi) { opacity: 0.22; }
  
  /* blame: a 24-turn attempt, penalized as a whole or turn by turn */
  .ef-brow2 + .ef-brow2 { margin-top: 14px; }
  .ef-brow2 .lab { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2px 12px; margin: 0 0 6px; font-size: var(--step--1); }
  .ef-brow2 .lab span { color: var(--ink-3); font-variant-numeric: tabular-nums; }
  .ef-f-blame .cells { display: grid; grid-template-columns: repeat(24, minmax(0, 1fr)); gap: 3px; }
  .ef-f-blame .c { aspect-ratio: 1 / 1; border-radius: 3px; box-sizing: border-box; }
  .ef-f-blame .c.dn { background: var(--ink-3); opacity: 0.6; }
  .ef-f-blame .c.up { background: var(--accent); }
  .ef-f-blame .c.flat { border: 1px solid var(--rule-strong); background: var(--bg); }
  .ef-f-blame .c.err { background: var(--ink-3); display: flex; align-items: center; justify-content: center; }
  .ef-f-blame .c.err::after { content: "✕"; color: var(--bg); font-size: 0.6rem; font-weight: 700; line-height: 1; }
  .ef-f-blame .cells.ax { margin: 4px 0 12px; }
  .ef-f-blame .cells.ax span { font-size: var(--step--2); color: var(--ink-3); text-align: center; font-variant-numeric: tabular-nums; white-space: nowrap; display: flex; justify-content: center; overflow: visible; }
  
  /* thesis: a timeline; grey methods come and go, the accent bar (the problem) runs the whole way, tasks widen */
  .ef-tl .ln { font-size: var(--step--2); font-weight: 600; color: var(--ink-3); letter-spacing: 0.03em; margin: 16px 0 6px; }
  .ef-tl .ln:first-child { margin-top: 0; }
  .ef-tl .row + .row { margin-top: 9px; }
  .ef-tl .t, .ef-tl .mk { display: block; font-size: var(--step--1); line-height: 1.4; color: var(--ink-2); margin-bottom: 3px; }
  .ef-tl .b { display: block; height: 10px; border-radius: 5px; background: var(--ink-3); opacity: 0.55; }
  .ef-tl .b.fade { background: linear-gradient(90deg, var(--ink-3) 65%, transparent); }
  .ef-tl .prob { display: block; border-radius: 8px; padding: 9px 12px; background: var(--accent); color: var(--bg); font-weight: 600; font-size: 0.9rem; text-align: center; }
  .ef-tl .wedge { height: 38px; background: linear-gradient(90deg, var(--accent-tint), var(--accent-line)); clip-path: polygon(0 46%, 100% 0, 100% 100%, 0 54%); margin-bottom: 6px; }
  .ef-tl .mk { margin-bottom: 1px; }
  .ef-tl .axis { position: relative; height: 1.5em; border-top: 1px solid var(--rule-strong); margin-top: 12px; }
  .ef-tl .axis span { position: absolute; top: 4px; transform: translateX(-50%); font-size: var(--step--2); color: var(--ink-3); font-variant-numeric: tabular-nums; }
  .ef-tl .axis span:first-child { transform: none; }
  
  /* chain: a chain hanging from a bar, the trained model at the bottom; a broken ring drops the rest */
  .ef-hang svg { display: block; width: 100%; max-width: 340px; }
  .ef-hang ellipse { fill: none; stroke: var(--accent); stroke-width: 7; transition: stroke 300ms ease; }
  .ef-hang .broken > ellipse { stroke: var(--ink-3); stroke-dasharray: 76 24; stroke-dashoffset: -12; }
  .ef-hang .hook { fill: none; stroke: var(--ink-3); stroke-width: 4; stroke-linecap: round; }
  .ef-hang text { fill: var(--ink); font-size: 15px; font-family: var(--font-text); }
  .ef-hang text .sub { fill: var(--ink-3); font-size: 12px; }
  .ef-hang .w line { stroke: var(--ink-3); stroke-width: 3; }
  .ef-hang .w rect { fill: var(--accent-tint); stroke: var(--accent-line); stroke-width: 1.5; }
  .ef-hang .w text { fill: var(--accent-strong); font-size: 14px; font-weight: 600; }
  .ef-hang .rest { transition: transform 600ms cubic-bezier(0.5, 0, 0.8, 0.6), opacity 600ms ease; }
  .ef-hang .rest.fall { transform: translateY(46px); opacity: 0.25; }
  .ef-f-chain .msg { margin: 6px 0 8px; font-size: var(--step--1); font-weight: 600; color: var(--ink); }
  .ef-f-chain .ef-presets { margin-top: 8px; }
  
  /* cost: one dot per attempt needed */
  .ef-tiles2 { grid-template-columns: 1fr 1.6fr; margin-top: 4px; }
  .ef-dots { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 16px; min-height: 12px; }
  .ef-dots .d { width: 10px; height: 10px; border-radius: 50%; box-sizing: border-box; border: 1.4px solid var(--ink-3); }
  .ef-more { font-size: var(--step--2); color: var(--ink-3); margin: 6px 0 0; min-height: 1em; }
  
  @media (max-width: 640px) {
    .ef-split { grid-template-columns: minmax(0, 1.15fr) 3.7em minmax(0, 1fr) minmax(0, 1fr); gap: 7px 7px; }
    .ef-f-blame .cells { gap: 2px; }
    .ef-tiles.ef-tiles2 { grid-template-columns: 1fr 1.4fr; }
    .ef-tiles.ef-tiles2 .ef-tile:last-child { grid-column: auto; }
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

A few days ago I published [Why Do Chinese LLMs Struggle with RL?](/blog/2026/chinese-llms-and-rl/), and its version on Xiaohongshu (RedNote) drew more than a hundred comments. One kind of reply kept coming back. Hardly anyone uses a critic any more, it went; the leading labs have dropped PPO, and some have gone back to the simpler REINFORCE. A critic works at small scale but does not fit how things scale up. A critic has to predict the future, which may be harder than solving the task itself. Someone also said that if one RL trajectory takes days to run, you should not do RL on that task at all and just use SFT. Follow these remarks to their end and you arrive at one conclusion, that long-horizon credit assignment is outdated. Nor is this view confined to the comments; plenty of people in the field think credit assignment is no longer useful, that its time has passed.

Let me put it plainly. There is no such thing as credit assignment going out of date. Calling it outdated may sound like standing at the frontier, but it confuses a problem with a method, and in RL that is an elementary mistake. It is a problem that is always there in RL, and the only things that change are how hard it is to solve and whether it needs solving in its own right. The era of long-horizon tasks and agents is exactly when it most needs solving in its own right.

<figure class="gf ef ef-f-thesis" id="ef-thesis-en"><div class="ef-box"><p class="ef-h">Methods come and go, the problem stays, and tasks keep getting longer</p><div class="ef-tl"><p class="ln">Methods in fashion</p><div class="row"><span class="t" style="margin-left:5.0%">PPO with a critic</span><span class="b fade" style="margin-left:5.0%;width:80.0%"></span></div><div class="row"><span class="t" style="margin-right:0.5%;text-align:right">GRPO and its kin, no critic</span><span class="b" style="margin-left:71.0%;width:28.5%"></span></div><div class="row"><span class="t" style="margin-right:4.0%;text-align:right">New methods built for credit assignment; one survey collects 56</span><span class="b" style="margin-left:70.0%;width:26.0%"></span></div><p class="ln">The problem</p><span class="prob">The problem of credit assignment, always there</span><p class="ln">How long one attempt is</p><div class="wedge"></div><span class="mk" style="margin-left:52.0%">↑ one chat reply</span><span class="mk" style="margin-right:22.0%;text-align:right">↑ a math problem, a few steps</span><span class="mk" style="margin-right:4.0%;text-align:right">↑ a coding agent, dozens to hundreds of turns</span><div class="axis"><span style="left:0.0%">2017</span><span style="left:30.0%">2020</span><span style="left:60.0%">2023</span><span style="left:90.0%">2026</span></div></div></div><figcaption class="ef-cap">An illustration with years on the horizontal axis. PPO was proposed in 2017 and later became, with a critic, the standard recipe of RLHF; GRPO was proposed in 2024; the survey covers methods from January 2024 to July 2026. The bottom band only shows tasks getting longer; its width is not measured.</figcaption></figure>

First, a little background, which readers who know it can skip. When RL trains a large model, the model gets a single score only after it finishes a whole task. Credit assignment is the question of which steps deserve the credit, or the blame, once that task has succeeded or failed.

## Problem and Methods

What those remarks call outdated is really specific methods such as PPO and the critic. Methods do go out of date. The problem does not. As long as a model gets one score only after finishing a whole task, that score has to be shared out among the steps somehow.

GRPO does not get around the problem either. It compares the score of a whole trajectory with the group's average and hands that difference, unchanged, to every token. If the attempt was right, every step is reinforced together; if it was wrong, every step is penalized together. This is the coarsest way to split the score, but it is still a way to split it.

<figure class="gf ef ef-f-split" id="ef-split-en"><div class="ef-box"><p class="ef-h">One score, two ways to split it</p><div class="ef-split"><span class="hd">Step</span><span class="hd">Chance of success</span><span class="hd">Same share for every step (GRPO)</span><span class="hd">Step by step (critic)</span><span class="st">1. read the problem</span><span class="pv">55%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">2. name the unknowns</span><span class="pv">65%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:9.2%"></i></span><span class="st">3. set up the equation</span><span class="pv">70%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">4. tidy it up</span><span class="pv">72%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:1.8%"></i></span><span class="st err">5. flip a sign moving a term</span><span class="pv err">20%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:48.0%"></i></span><span class="st">6. keep simplifying</span><span class="pv">15%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">7. solve</span><span class="pv">10%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">8. write the answer</span><span class="pv">0%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:9.2%"></i></span></div><p class="ef-legend"><span><i class="ef-sw up"></i>reinforced</span><span><i class="ef-sw dn"></i>penalized</span></p></div><figcaption class="ef-cap">An illustration; the numbers are made up. This attempt ends wrong, and the group's average is 50%. With the same share for every step, all eight steps are penalized, including the four that were right. A critic looks at how much each step moved the chance of eventually succeeding, reinforcing a step that raised it and penalizing one that lowered it, so most of the blame lands on the step that flipped the sign.</figcaption></figure>

So "no critic" means a different way of splitting, not that the problem went away. Nor were the critic, process supervision and PPO ever tied together. PPO falling out of fashion does not make the critic useless, still less credit assignment. Tying a problem to one method, then declaring the problem outdated because the method is out of fashion, is a step of reasoning that does not hold.

## The Short-Horizon Era

Not solving it in its own right does not mean the problem is absent. It only means that in that period it was easy, and a coarse split was enough. On this point, much of what those remarks say is right.

First, on short-horizon tasks such as math problems, there are very few places where a real choice is made. Wang et al., in [a 2025 paper](https://arxiv.org/abs/2506.01939), looked at the entropy of each token in a reasoning trace, that is, how unsure the model is at that position, and found that only about a fifth of the tokens have high entropy. These tokens are like forks in the road and decide which way the reasoning goes, while the other four fifths mostly just carry on. Updating only that fifth matched updating every token on an 8B model and did clearly better on 14B and 32B. With few forks and a short road, even an equal split gives each fork a large enough share.

<figure class="gf ef ef-f-fork" id="ef-fork-en"><div class="ef-box"><p class="ef-h">In a stretch of reasoning, only a few tokens are real choices that set the direction</p><div class="ef-presets"><button type="button" class="on">All tokens</button><button type="button">Forking tokens only</button></div><div class="ef-fork sp"><span class="tk hi"><s><i style="height:89%"></i></s><b>Let</b></span><span class="tk"><s><i style="height:16%"></i></s><b>the</b></span><span class="tk"><s><i style="height:17%"></i></s><b>two</b></span><span class="tk"><s><i style="height:19%"></i></s><b>numbers</b></span><span class="tk"><s><i style="height:16%"></i></s><b>be</b></span><span class="tk"><s><i style="height:19%"></i></s><b>x</b></span><span class="tk"><s><i style="height:4%"></i></s><b>and</b></span><span class="tk"><s><i style="height:11%"></i></s><b>y.</b></span><span class="tk hi"><s><i style="height:98%"></i></s><b>Since</b></span><span class="tk"><s><i style="height:14%"></i></s><b>x+y=10</b></span><span class="tk"><s><i style="height:18%"></i></s><b>and</b></span><span class="tk"><s><i style="height:6%"></i></s><b>xy=21,</b></span><span class="tk"><s><i style="height:12%"></i></s><b>x</b></span><span class="tk"><s><i style="height:8%"></i></s><b>and</b></span><span class="tk"><s><i style="height:13%"></i></s><b>y</b></span><span class="tk"><s><i style="height:13%"></i></s><b>are</b></span><span class="tk"><s><i style="height:4%"></i></s><b>the</b></span><span class="tk"><s><i style="height:7%"></i></s><b>roots</b></span><span class="tk"><s><i style="height:8%"></i></s><b>of</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t²−10t+21=0.</b></span><span class="tk"><s><i style="height:16%"></i></s><b>Wait*,</b></span><span class="tk hi"><s><i style="height:76%"></i></s><b>first</b></span><span class="tk"><s><i style="height:17%"></i></s><b>check</b></span><span class="tk"><s><i style="height:6%"></i></s><b>the</b></span><span class="tk"><s><i style="height:14%"></i></s><b>discriminant,</b></span><span class="tk"><s><i style="height:6%"></i></s><b>100−84=16</b></span><span class="tk"><s><i style="height:4%"></i></s><b>>0,</b></span><span class="tk hi"><s><i style="height:96%"></i></s><b>so</b></span><span class="tk"><s><i style="height:7%"></i></s><b>the</b></span><span class="tk"><s><i style="height:7%"></i></s><b>roots</b></span><span class="tk"><s><i style="height:20%"></i></s><b>are</b></span><span class="tk"><s><i style="height:18%"></i></s><b>real.</b></span><span class="tk hi"><s><i style="height:80%"></i></s><b>Thus</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t=3</b></span><span class="tk"><s><i style="height:13%"></i></s><b>or</b></span><span class="tk"><s><i style="height:15%"></i></s><b>t=7.</b></span></div><p class="ef-legend"><span><i class="ef-sw bar"></i>The taller the bar, the less sure the model is at that position (higher entropy)</span></p></div><script>(function(){var f=document.getElementById("ef-fork-en"),k=f.querySelector(".ef-fork"),b=f.querySelectorAll(".ef-presets button");b.forEach(function(x,i){x.onclick=function(){k.classList.toggle("only",i===1);b.forEach(function(y,j){y.classList.toggle("on",j===i)})}})})();</script><figcaption class="ef-cap">An illustration; the bar heights are not measured. The paper finds that high-entropy tokens are mostly words like wait, however, thus and suppose, which mark a turn, a step forward or an assumption, while low-entropy tokens are mostly word endings, pieces of formulas and code. Updating only this high-entropy fifth is what the paper does.</figcaption></figure>

Second, sampling is cheap. A math problem is done quickly, and attempting the same problem dozens of times costs little, so more samples can make up for a coarse signal. Yue et al. ([NeurIPS 2025](https://arxiv.org/abs/2504.13837)) also found that on math and coding problems, what a model can solve after RL hardly goes beyond what the base model can solve given a few more tries.

Finally, a critic really is hard to train. It has to predict the future, and a critic that estimates badly is sometimes worse than simply splitting the score evenly. On the theory side, Jia, Rakhlin and Xie proved in [an ICML 2025 paper](https://arxiv.org/abs/2502.10581) that supervision on outcomes alone is statistically not much harder than step-by-step process supervision, with a gap of at most a polynomial factor in the number of steps.

All of this is true, but taken together it says one thing. On short-horizon tasks the problem is easy and does not need solving in its own right. The same theory paper even proves that when you can roll out again from a step, the advantage function (how much better this step is than average) is itself the optimal process reward model. When outcome supervision learns well, it is getting the credit right inside the algorithm; it just does not do so as a separate piece. As for that polynomial factor in the number of steps, my reading is that it can be ignored on a problem of a few steps and cannot be ignored at a few hundred.

## The Agent Era

In agentic RL, every one of the conditions that made the problem easy is gone.

First, the forks have become very many. A single coding-agent attempt easily runs to dozens of turns and over a hundred thousand tokens, and in every turn, which file to read, which line to change and whether to run the tests are real choices. One wrong turn wastes everything after it, and the steps that were right before it are penalized along with it.

<figure class="gf ef ef-f-blame" id="ef-blame-en"><div class="ef-box"><p class="ef-h">One coding-agent attempt that goes wrong at turn 10</p><div class="ef-brow2"><p class="lab"><b>Same share for every turn</b><span>Right turns penalized anyway: 9</span></p><div class="cells"><span class="c dn" title="turn 1"></span><span class="c dn" title="turn 2"></span><span class="c dn" title="turn 3"></span><span class="c dn" title="turn 4"></span><span class="c dn" title="turn 5"></span><span class="c dn" title="turn 6"></span><span class="c dn" title="turn 7"></span><span class="c dn" title="turn 8"></span><span class="c dn" title="turn 9"></span><span class="c dn" title="turn 10"></span><span class="c dn" title="turn 11"></span><span class="c dn" title="turn 12"></span><span class="c dn" title="turn 13"></span><span class="c dn" title="turn 14"></span><span class="c dn" title="turn 15"></span><span class="c dn" title="turn 16"></span><span class="c dn" title="turn 17"></span><span class="c dn" title="turn 18"></span><span class="c dn" title="turn 19"></span><span class="c dn" title="turn 20"></span><span class="c dn" title="turn 21"></span><span class="c dn" title="turn 22"></span><span class="c dn" title="turn 23"></span><span class="c dn" title="turn 24"></span></div></div><div class="ef-brow2"><p class="lab"><b>Turn by turn</b><span>Right turns penalized anyway: 0</span></p><div class="cells"><span class="c up" title="turn 1"></span><span class="c up" title="turn 2"></span><span class="c up" title="turn 3"></span><span class="c up" title="turn 4"></span><span class="c up" title="turn 5"></span><span class="c up" title="turn 6"></span><span class="c up" title="turn 7"></span><span class="c up" title="turn 8"></span><span class="c up" title="turn 9"></span><span class="c err" title="turn 10"></span><span class="c flat" title="turn 11"></span><span class="c flat" title="turn 12"></span><span class="c flat" title="turn 13"></span><span class="c flat" title="turn 14"></span><span class="c flat" title="turn 15"></span><span class="c flat" title="turn 16"></span><span class="c flat" title="turn 17"></span><span class="c flat" title="turn 18"></span><span class="c flat" title="turn 19"></span><span class="c flat" title="turn 20"></span><span class="c flat" title="turn 21"></span><span class="c flat" title="turn 22"></span><span class="c flat" title="turn 23"></span><span class="c flat" title="turn 24"></span></div></div><div class="cells ax"><span>1</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>10</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>24</span></div><p class="ef-note">Turns 1 to 9 read the code, run the tests and find the broken function. Turn 10 gets a condition wrong. The next 14 turns chase the new errors it caused, and in the end the tests fail.</p><p class="ef-legend"><span><i class="ef-sw up"></i>right, reinforced</span><span><i class="ef-sw dn"></i>penalized</span><span><i class="ef-sw flat"></i>left alone</span></p></div><figcaption class="ef-cap">An illustration. Turn-by-turn credit is the ideal case. In practice it has to be estimated with a critic, a process reward model or something like them, and a poor estimate splits the credit wrong. The longer the task, the more steps an equal split wrongs.</figcaption></figure>

Second, sampling itself is no longer cheap. When a larger model runs agentic tasks, one trajectory takes a few days at best and a week or two at worst, so making up for a coarse signal by sampling a few more times is not an option. The longer the task, the more often every attempt in a group fails, and then comparing within the group yields no signal at all, as I wrote in *Why Do Chinese LLMs Struggle with RL?*

Finally, environments as they are now are harder to deal with. Zhang's [2026 survey](https://arxiv.org/abs/2604.09459) is devoted to exactly this problem and lists reasons why agentic RL makes credit assignment harder, for example that the model cannot see the whole state of the environment, that how the environment changes is not decided by the model's actions alone, that you cannot freely go back to a step in the middle and start again, and that whether an intermediate step was right is hard to verify. The survey collects methods built for this problem between January 2024 and July 2026, and its core methods alone number 56. This year NeurIPS also accepted [a paper](https://arxiv.org/abs/2605.08013) on how to share a command-line agent's final score out among its individual actions. An outdated problem does not produce dozens of new solutions in little more than two years.

So calling it outdated gets the timing exactly backwards. The time when credit assignment could most safely be ignored was the era of math problems. The time when it can least be ignored is now.

## The Premise of "Outdated"

Not solving credit assignment in its own right has a cost. The cost is filling the gap with sheer sampling, running the same task dozens or hundreds of times until the group holds both successes and failures, then relying on large batches to average a coarse signal into a direction. With enough GPUs and data this certainly works, and GRPO can be trained by brute force.

<figure class="gf ef ef-f-cost" id="ef-cost-en"><div class="ef-box"><p class="ef-h">Filling the gap with samples, the longer the task, the faster the attempts needed per task climb</p><div class="ef-ctl"><label for="ef-cost-en-r">Steps in one attempt</label><output for="ef-cost-en-r">300</output><input type="range" id="ef-cost-en-r" min="1" max="400" value="300"><div class="ef-presets"><button type="button" data-n="2">math problem, 2 steps</button><button type="button" data-n="30">30 steps</button><button type="button" data-n="300">coding agent, 300 steps</button></div></div><div class="ef-tiles ef-tiles2"><div class="ef-tile"><span class="k">Chance that one attempt succeeds</span><span class="v">2.9%</span></div><div class="ef-tile"><span class="k">Attempts needed per task</span><span class="v">78</span><span class="s">to be 90% sure the group holds at least one success</span></div></div><div class="ef-dots" aria-label="Each dot is one attempt"><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span></div><p class="ef-more"></p><p class="ef-legend"><span><span class="ef-dot bad"></span>Each dot is one attempt</span></p></div><script>(function(){var f=document.getElementById("ef-cost-en"),T={"unit": "{}", "more": "{} more not drawn"},M=240,r=f.querySelector("input"),o=f.querySelector("output"),v=f.querySelectorAll(".ef-tile .v"),box=f.querySelector(".ef-dots"),more=f.querySelector(".ef-more");function up(){var n=+r.value,p=.6*Math.pow(.99,n),g=Math.ceil(Math.log(.1)/Math.log(1-p)),k=Math.min(g,M);o.textContent=n;v[0].textContent=(p*100).toFixed(1)+"%";v[1].textContent=T.unit.replace("{}",g);while(box.children.length<k){var s=document.createElement("span");s.className="d";box.appendChild(s)}while(box.children.length>k)box.removeChild(box.lastChild);more.textContent=g>M?T.more.replace("{}",g-M):""}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">A worked example, not a measurement, under the same assumptions as the task-length figure in Why Do Chinese LLMs Struggle with RL? Each attempt has a 60% chance of starting in the right direction, after which each step has a 1% chance of going wrong, and one wrong step fails the task. On long-horizon tasks a single attempt already takes a long time to run; multiply by the number of attempts and you arrive at the assumption that GPUs and data never run out.</figcaption></figure>

So behind "outdated" lies an assumption, that GPUs and data are unlimited and every long-horizon task can be run as many times as it takes. By that logic, we might as well say we have unlimited GPUs and data and get everything right in one go. In reality, nobody has that.

Closely related is another common line. Seeing that data matters, people neglect algorithms, or even decide that only data matters. Data does matter, and nobody denies it. But data mattering does not imply that algorithms do not. Everyone knows that training base models has become more and more of an engineering effort, and that should make it all the clearer that no link in the chain can fail. If any one of data, algorithms, infrastructure or environments breaks, it drags the whole chain down. Why, then, would anyone think one link is what matters most and the rest hardly matter? Good data only gives you the potential to train RL well; whether that potential is realized depends on how the algorithm makes use of every score. Recognizing data alone is a little like a child who has just learned a new word and uses it to explain everything. It sounds knowledgeable, but it is naive.

<figure class="gf ef ef-f-chain" id="ef-chain-en"><div class="ef-box"><p class="ef-h">Training is a chain; if any link breaks, the whole chain goes down</p><div class="ef-hang"><svg viewBox="0 0 300 394" role="img" aria-label="Training is a chain; if any link breaks, the whole chain goes down"><path class="hook" d="M20 4 H100 M60 4 V20"/><g class="lk0"><ellipse cx="60" cy="52" rx="21" ry="34" pathLength="100"/><text x="100" y="58">data</text><g class="rest"><g class="lk1"><ellipse cx="60" cy="114" rx="21" ry="34" pathLength="100"/><text x="100" y="114">algorithms<tspan x="100" dy="19" class="sub">credit assignment included</tspan></text><g class="rest"><g class="lk2"><ellipse cx="60" cy="176" rx="21" ry="34" pathLength="100"/><text x="100" y="182">infrastructure</text><g class="rest"><g class="lk3"><ellipse cx="60" cy="238" rx="21" ry="34" pathLength="100"/><text x="100" y="244">environments</text><g class="rest"><g class="w"><line x1="60" y1="272" x2="60" y2="296"/><rect x="8" y="296" width="190" height="46" rx="8"/><text x="103" y="325" text-anchor="middle">the trained model</text></g></g></g></g></g></g></g></g></g></svg></div><p class="msg">Every link holds, so the model trains</p><p class="ef-note">Press a button below to break one link</p><div class="ef-presets"><button type="button" class="lk">data</button><button type="button" class="lk">algorithms</button><button type="button" class="lk">infrastructure</button><button type="button" class="lk">environments</button><button type="button" class="rs">Restore</button></div></div><script>(function(){var f=document.getElementById("ef-chain-en"),T={"ok": "Every link holds, so the model trains", "bad": "“{}” broke, and the whole chain went down"},N=["data", "algorithms", "infrastructure", "environments"],b=f.querySelectorAll(".lk"),s=f.querySelector("svg"),m=f.querySelector(".msg"),r=f.querySelector(".rs");function set(k){for(var i=0;i<4;i++){var g=s.querySelector(".lk"+i);g.classList.toggle("broken",i===k);g.querySelector(".rest").classList.toggle("fall",i===k)}b.forEach(function(x,i){x.classList.toggle("on",i===k)});m.textContent=k<0?T.ok:T.bad.replace("{}",N[k])}b.forEach(function(x,i){x.onclick=function(){set(i)}});r.onclick=function(){set(-1)}})();</script><figcaption class="ef-cap">An illustration. Recognizing only one link is like thinking a chain needs only one strong link.</figcaption></figure>

As for "just use SFT", that is another way around the problem. When the problem gets hard, stop doing that kind of task. But that kind of task is exactly what agents are for.

Methods go out of date; problems do not. In the era of long-horizon tasks and agents, credit assignment is not an old question to put down but one there is no way around.

</div>

<div lang="zh" markdown="1">

前几天我发了[《为何国产大模型训不好 RL？》](/blog/2026/chinese-llms-and-rl/)，小红书上那一版收到了一百多条评论。其中有一类声音反复出现，大意是 critic 已经没什么人用了，头部几家连 PPO 都不用，有的甚至改回了更简单的 REINFORCE；critic 小规模时好使，但不符合 scale up 的规律；critic 要预测未来，这件事可能比做题本身还难。还有人说，如果 RL 跑一条轨迹要几天，那这种任务干脆别做 RL，SFT 一下就好了。顺着这些话往下推，结论就是长程的 credit assignment（信用分配）已经过时了。这种看法也不只在评论区，圈子里觉得 credit assignment 没用了、过时了的人并不少。

我想把话说得直白一点，credit assignment 就不存在过时的说法。说它过时，听上去像是站在了前沿，其实是把问题和方法混为一谈，放在 RL 里，这是常识性的错误。它是 RL 里一个始终都在的问题，变的只是它好不好解、需不需要专门去解。而长程任务和 agent 的时代，恰恰是最需要专门去解它的时候。

<figure class="gf ef ef-f-thesis" id="ef-thesis-zh"><div class="ef-box"><p class="ef-h">方法换了又换，问题一直都在，任务越来越长</p><div class="ef-tl"><p class="ln">流行的方法</p><div class="row"><span class="t" style="margin-left:5.0%">PPO 加 critic</span><span class="b fade" style="margin-left:5.0%;width:80.0%"></span></div><div class="row"><span class="t" style="margin-right:0.5%;text-align:right">GRPO 一类，不用 critic</span><span class="b" style="margin-left:71.0%;width:28.5%"></span></div><div class="row"><span class="t" style="margin-right:4.0%;text-align:right">专门解 credit assignment 的新方法，一份综述收了 56 个</span><span class="b" style="margin-left:70.0%;width:26.0%"></span></div><p class="ln">问题</p><span class="prob">credit assignment 这个问题，一直都在</span><p class="ln">一次尝试有多长</p><div class="wedge"></div><span class="mk" style="margin-left:52.0%">↑ 一轮对话</span><span class="mk" style="margin-right:22.0%;text-align:right">↑ 数学题，几步</span><span class="mk" style="margin-right:4.0%;text-align:right">↑ coding agent，几十上百轮</span><div class="axis"><span style="left:0.0%">2017</span><span style="left:30.0%">2020</span><span style="left:60.0%">2023</span><span style="left:90.0%">2026</span></div></div></div><figcaption class="ef-cap">示意，横轴是年份。PPO 是 2017 年提出的，后来和 critic 一起成了 RLHF 的标准做法；GRPO 是 2024 年提出的；那份综述收录的是 2024 年 1 月到 2026 年 7 月之间的方法。最下面一条只表示任务越来越长，宽度不是实测。</figcaption></figure>

先简单交代一下背景，熟悉的朋友可以跳过。用 RL 训练大模型，模型要做完一整件事才拿到一个分数。credit assignment 要解决的就是，这件事最后成了或者败了，功劳和责任该算在哪一步头上。

## 问题与方法

开头那些说法，说过时的其实是 PPO、critic 这些具体的方法。方法当然会过时，问题本身过时不了。只要模型是做完一整件事才拿到一个分数，这个分数就总得分到每一步上去。

GRPO 也没有绕开这个问题。它把整条轨迹的分数和同组的平均分比一比，再把这个差原样分给每一个 token，做对了每一步一起鼓励，做错了每一步一起惩罚。这是最粗的一种分法，但仍然是一种分法。

<figure class="gf ef ef-f-split" id="ef-split-zh"><div class="ef-box"><p class="ef-h">同一个分数，两种分法</p><div class="ef-split"><span class="hd">步骤</span><span class="hd">能做成的把握</span><span class="hd">整条均分（GRPO）</span><span class="hd">逐步估值（critic）</span><span class="st">1. 读题</span><span class="pv">55%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">2. 设未知数</span><span class="pv">65%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:9.2%"></i></span><span class="st">3. 列方程</span><span class="pv">70%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">4. 整理方程</span><span class="pv">72%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:1.8%"></i></span><span class="st err">5. 移项时符号写反</span><span class="pv err">20%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:48.0%"></i></span><span class="st">6. 接着化简</span><span class="pv">15%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">7. 解出结果</span><span class="pv">10%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">8. 写下答案</span><span class="pv">0%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:9.2%"></i></span></div><p class="ef-legend"><span><i class="ef-sw up"></i>鼓励</span><span><i class="ef-sw dn"></i>惩罚</span></p></div><figcaption class="ef-cap">示意，数字只为说明。这次尝试最后做错了，组里的平均分是五成。整条均分时，八步一起被罚，前四步做对了也不例外。critic 的分法看的是每一步让「最后能做成的把握」变了多少，变大就鼓励，变小就惩罚，于是责任大多落在写反符号的那一步。</figcaption></figure>

所以「不用 critic」说的是换了一种分法，不是问题消失了。critic、过程监督和 PPO 也从来不是绑在一起的，PPO 不流行了，不代表 critic 没用，更不代表 credit assignment 没用。把问题和某一种方法绑在一起，方法不流行了，问题就跟着被宣布过时，这一步推理是不成立的。

## 短程任务时代

不专门解，不等于问题不在，只是那段时间它好解，粗的分法就够用。在这一点上，开头那些说法有不少是对的。

首先，在数学这类短程任务上，真正做选择的地方很少。Wang 等人在 [2025 年的一篇论文](https://arxiv.org/abs/2506.01939)里看了推理过程中每个 token 的熵，也就是模型在这个位置有多拿不准，发现只有约两成 token 的熵高。这些 token 像岔路口，决定推理往哪个方向走；其余八成基本是顺着往下写。只对这两成做更新，在 8B 模型上效果和全部更新相当，在 14B、32B 上明显更好。岔路口少、路又短，平均分下去，岔路口也能分到够用的一份。

<figure class="gf ef ef-f-fork" id="ef-fork-zh"><div class="ef-box"><p class="ef-h">一段推理里，真正拿不准、决定方向的 token 只有少数</p><div class="ef-presets"><button type="button" class="on">全部 token</button><button type="button">只看分叉 token</button></div><div class="ef-fork"><span class="tk hi"><s><i style="height:89%"></i></s><b>设</b></span><span class="tk"><s><i style="height:16%"></i></s><b>这两个数</b></span><span class="tk"><s><i style="height:17%"></i></s><b>为</b></span><span class="tk"><s><i style="height:19%"></i></s><b>x</b></span><span class="tk"><s><i style="height:16%"></i></s><b>和</b></span><span class="tk"><s><i style="height:19%"></i></s><b>y</b></span><span class="tk"><s><i style="height:4%"></i></s><b>，</b></span><span class="tk hi"><s><i style="height:85%"></i></s><b>由</b></span><span class="tk"><s><i style="height:19%"></i></s><b>题意</b></span><span class="tk"><s><i style="height:14%"></i></s><b>x+y=10</b></span><span class="tk"><s><i style="height:18%"></i></s><b>，</b></span><span class="tk"><s><i style="height:6%"></i></s><b>xy=21</b></span><span class="tk"><s><i style="height:12%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:79%"></i></s><b>于是</b></span><span class="tk"><s><i style="height:13%"></i></s><b>x</b></span><span class="tk"><s><i style="height:13%"></i></s><b>和</b></span><span class="tk"><s><i style="height:4%"></i></s><b>y</b></span><span class="tk"><s><i style="height:7%"></i></s><b>是</b></span><span class="tk"><s><i style="height:8%"></i></s><b>方程</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t²−10t+21=0</b></span><span class="tk"><s><i style="height:16%"></i></s><b>的</b></span><span class="tk"><s><i style="height:7%"></i></s><b>两个根</b></span><span class="tk"><s><i style="height:17%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:76%"></i></s><b>等等</b></span><span class="tk"><s><i style="height:14%"></i></s><b>，</b></span><span class="tk hi"><s><i style="height:76%"></i></s><b>先</b></span><span class="tk"><s><i style="height:4%"></i></s><b>检查</b></span><span class="tk"><s><i style="height:18%"></i></s><b>判别式</b></span><span class="tk"><s><i style="height:7%"></i></s><b>，</b></span><span class="tk"><s><i style="height:7%"></i></s><b>100−84=16</b></span><span class="tk"><s><i style="height:20%"></i></s><b>>0</b></span><span class="tk"><s><i style="height:18%"></i></s><b>，</b></span><span class="tk hi"><s><i style="height:80%"></i></s><b>所以</b></span><span class="tk"><s><i style="height:19%"></i></s><b>有</b></span><span class="tk"><s><i style="height:13%"></i></s><b>实根</b></span><span class="tk"><s><i style="height:15%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:78%"></i></s><b>因此</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t=3</b></span><span class="tk"><s><i style="height:15%"></i></s><b>或</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t=7</b></span><span class="tk"><s><i style="height:18%"></i></s><b>。</b></span></div><p class="ef-legend"><span><i class="ef-sw bar"></i>柱子越高，模型在这个位置越拿不准（熵越高）</span></p></div><script>(function(){var f=document.getElementById("ef-fork-zh"),k=f.querySelector(".ef-fork"),b=f.querySelectorAll(".ef-presets button");b.forEach(function(x,i){x.onclick=function(){k.classList.toggle("only",i===1);b.forEach(function(y,j){y.classList.toggle("on",j===i)})}})})();</script><figcaption class="ef-cap">示意，柱高不是实测。论文统计发现，熵高的 token 多是 wait、however、thus、suppose 这类表示转折、推进、引入假设的词；熵低的多是词的后半截、公式和代码片段。只对熵高的这两成做更新，就是那篇论文的做法。</figcaption></figure>

其次，采样也便宜。一道数学题很快就做完，同一道题做几十遍都不贵，粗信号的不足可以靠多采样补上。Yue 等人（[NeurIPS 2025](https://arxiv.org/abs/2504.13837)）还发现，在数学和代码题上，RL 之后模型能做对的题，基本没有超出基座模型多采几次就能做对的范围。

最后，critic 也确实难训。它要预测未来，一个估不准的 critic，有时还不如把分数平均分下去。理论上，Jia、Rakhlin 和 Xie 在 [ICML 2025 的一篇论文](https://arxiv.org/abs/2502.10581)里证明，只看结果的监督，在统计上并不比逐步的过程监督难多少，差距最多是步数的多项式倍。

这些都对，但放在一起看，说的是同一件事，在短程任务上这个问题好解，不必专门去解。就连那篇理论论文自己也证明了，能反复试做的时候，优势函数（这一步比平均水平好多少）本身就是最优的过程奖励模型。结果监督学得好，其实是在算法内部把 credit 分对了，只是没有单独拿出来做。而那个「步数的多项式倍」，我的理解是，在几步的题上可以忽略，到了几百步就不能不管了。

## Agent 时代

到了 agentic RL，上面这几个让问题好解的条件，一条一条都没了。

首先是所谓的岔路口变得非常多。一次 coding agent 的尝试动辄几十轮、十多万个 token，每一轮读哪个文件、改哪一行、跑不跑测试，都是真正的选择。一处走错，后面全白干，前面做对的也跟着一起挨罚。

<figure class="gf ef ef-f-blame" id="ef-blame-zh"><div class="ef-box"><p class="ef-h">一次 coding agent 的尝试，错在第 10 轮</p><div class="ef-brow2"><p class="lab"><b>整条均分</b><span>做对了也被罚的轮数 9</span></p><div class="cells"><span class="c dn" title="第 1 轮"></span><span class="c dn" title="第 2 轮"></span><span class="c dn" title="第 3 轮"></span><span class="c dn" title="第 4 轮"></span><span class="c dn" title="第 5 轮"></span><span class="c dn" title="第 6 轮"></span><span class="c dn" title="第 7 轮"></span><span class="c dn" title="第 8 轮"></span><span class="c dn" title="第 9 轮"></span><span class="c dn" title="第 10 轮"></span><span class="c dn" title="第 11 轮"></span><span class="c dn" title="第 12 轮"></span><span class="c dn" title="第 13 轮"></span><span class="c dn" title="第 14 轮"></span><span class="c dn" title="第 15 轮"></span><span class="c dn" title="第 16 轮"></span><span class="c dn" title="第 17 轮"></span><span class="c dn" title="第 18 轮"></span><span class="c dn" title="第 19 轮"></span><span class="c dn" title="第 20 轮"></span><span class="c dn" title="第 21 轮"></span><span class="c dn" title="第 22 轮"></span><span class="c dn" title="第 23 轮"></span><span class="c dn" title="第 24 轮"></span></div></div><div class="ef-brow2"><p class="lab"><b>逐步分配</b><span>做对了也被罚的轮数 0</span></p><div class="cells"><span class="c up" title="第 1 轮"></span><span class="c up" title="第 2 轮"></span><span class="c up" title="第 3 轮"></span><span class="c up" title="第 4 轮"></span><span class="c up" title="第 5 轮"></span><span class="c up" title="第 6 轮"></span><span class="c up" title="第 7 轮"></span><span class="c up" title="第 8 轮"></span><span class="c up" title="第 9 轮"></span><span class="c err" title="第 10 轮"></span><span class="c flat" title="第 11 轮"></span><span class="c flat" title="第 12 轮"></span><span class="c flat" title="第 13 轮"></span><span class="c flat" title="第 14 轮"></span><span class="c flat" title="第 15 轮"></span><span class="c flat" title="第 16 轮"></span><span class="c flat" title="第 17 轮"></span><span class="c flat" title="第 18 轮"></span><span class="c flat" title="第 19 轮"></span><span class="c flat" title="第 20 轮"></span><span class="c flat" title="第 21 轮"></span><span class="c flat" title="第 22 轮"></span><span class="c flat" title="第 23 轮"></span><span class="c flat" title="第 24 轮"></span></div></div><div class="cells ax"><span>1</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>10</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>24</span></div><p class="ef-note">第 1 到 9 轮读代码、跑测试、找到出错的函数；第 10 轮改错了一处判断条件；之后 14 轮都在修被它带出来的新报错，最后测试没过。</p><p class="ef-legend"><span><i class="ef-sw up"></i>做对了，鼓励</span><span><i class="ef-sw dn"></i>惩罚</span><span><i class="ef-sw flat"></i>不加不减</span></p></div><figcaption class="ef-cap">示意。逐步分配是理想的情况，实际要靠 critic、过程奖励模型这类办法去估，估不准就会分错。任务越长，整条均分冤枉的步数越多。</figcaption></figure>

其次是采样本身不再便宜。大一点的模型跑 agentic 任务，一条轨迹出来短则几天，慢则一两周，靠多采几遍去补粗信号，这条路走不通。任务一长，同一组尝试全部失败也越来越常见，组内一比，什么信号都拿不到，这一点在《为何国产大模型训不好 RL？》里写过。

最后，当前这个版本的环境也更难对付了。Zhang 在 [2026 年的一篇综述](https://arxiv.org/abs/2604.09459)里专门梳理了这个问题，列出了 agentic RL 让 credit assignment 更难的几个原因，比如模型看不全环境的状态，环境怎么变不全由模型决定，不能随意回到中间某一步重来，中间步骤的对错很难验证。这篇综述收录了 2024 年 1 月到 2026 年 7 月之间专门解这个问题的方法，核心方法就有 56 个。今年 NeurIPS 也收了[一篇工作](https://arxiv.org/abs/2605.08013)，研究怎么把命令行 agent 的最终分数分到每一步操作上。一个过时的问题，不会在两年多里冒出几十种新解法。

所以说它过时，时机恰好说反了。credit assignment 最可以不管的，是数学题那段时间；最不能不管的，就是现在。

## 「过时」的前提

不专门解 credit assignment，并不是没有代价。代价是用采样量去硬填，同一个任务多跑几十上百遍，直到组里有成有败，再靠大 batch 把粗信号平均出方向。卡和数据都足够多的时候，这当然可以，GRPO 力大砖飞也能训起来。

<figure class="gf ef ef-f-cost" id="ef-cost-zh"><div class="ef-box"><p class="ef-h">靠采样硬填，任务越长，每道题要跑的遍数涨得越快</p><div class="ef-ctl"><label for="ef-cost-zh-r">一次尝试有多少步</label><output for="ef-cost-zh-r">300</output><input type="range" id="ef-cost-zh-r" min="1" max="400" value="300"><div class="ef-presets"><button type="button" data-n="2">数学题，2 步</button><button type="button" data-n="30">30 步</button><button type="button" data-n="300">coding agent，300 步</button></div></div><div class="ef-tiles ef-tiles2"><div class="ef-tile"><span class="k">一次尝试做成的概率</span><span class="v">2.9%</span></div><div class="ef-tile"><span class="k">每道题至少要跑</span><span class="v">78 遍</span><span class="s">才有九成把握让这一组里至少做成一次</span></div></div><div class="ef-dots" aria-label="每个点是一次尝试"><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span></div><p class="ef-more"></p><p class="ef-legend"><span><span class="ef-dot bad"></span>每个点是一次尝试</span></p></div><script>(function(){var f=document.getElementById("ef-cost-zh"),T={"unit": "{} 遍", "more": "还有 {} 遍没画出来"},M=240,r=f.querySelector("input"),o=f.querySelector("output"),v=f.querySelectorAll(".ef-tile .v"),box=f.querySelector(".ef-dots"),more=f.querySelector(".ef-more");function up(){var n=+r.value,p=.6*Math.pow(.99,n),g=Math.ceil(Math.log(.1)/Math.log(1-p)),k=Math.min(g,M);o.textContent=n;v[0].textContent=(p*100).toFixed(1)+"%";v[1].textContent=T.unit.replace("{}",g);while(box.children.length<k){var s=document.createElement("span");s.className="d";box.appendChild(s)}while(box.children.length>k)box.removeChild(box.lastChild);more.textContent=g>M?T.more.replace("{}",g-M):""}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">示意计算，不是实测，假设和《为何国产大模型训不好 RL？》里任务变长那张图一样，每次尝试有六成机会方向对，之后每一步有 1% 的可能出错，错一步整题就失败。在长程任务上，一次尝试本身就要跑很久，遍数再一乘，就是卡和数据要用不完的那个假设。</figcaption></figure>

所以「过时」的背后，其实藏着一个假设，就是卡和数据都用不完，每个长程任务都能跑足够多遍。照这个思路，那干脆说我们有用不完的卡和数据，一口气全做到位就好了。可现实里，没有谁有这样的条件。

与此相连的，还有一种常见的论调，看到 data 重要，就忽略算法，乃至觉得只有 data 重要。data 当然重要，这一点没有人否认。可 data 重要，推不出算法不重要。谁都知道，现在基模训练越来越工程化，那就更应该明白每个环节都不能出问题的道理，data、算法、infra、环境，哪一环掉链子，整条链都会被拖垮。为什么会觉得某一个环节才是最重要的，其他都不重要呢？好的 data 只是让你有了训好 RL 的潜力，能不能把这份潜力训出来，还要看算法怎么用好每一个分数。只认 data 这一样东西，有点像小孩子刚学会一个新词，就拿它去解释一切，听上去懂行，其实很幼稚。

<figure class="gf ef ef-f-chain" id="ef-chain-zh"><div class="ef-box"><p class="ef-h">训练是一条链，哪一环掉链子，整条链都会被拖垮</p><div class="ef-hang"><svg viewBox="0 0 300 394" role="img" aria-label="训练是一条链，哪一环掉链子，整条链都会被拖垮"><path class="hook" d="M20 4 H100 M60 4 V20"/><g class="lk0"><ellipse cx="60" cy="52" rx="21" ry="34" pathLength="100"/><text x="100" y="58">data</text><g class="rest"><g class="lk1"><ellipse cx="60" cy="114" rx="21" ry="34" pathLength="100"/><text x="100" y="114">算法<tspan x="100" dy="19" class="sub">包括 credit assignment</tspan></text><g class="rest"><g class="lk2"><ellipse cx="60" cy="176" rx="21" ry="34" pathLength="100"/><text x="100" y="182">infra</text><g class="rest"><g class="lk3"><ellipse cx="60" cy="238" rx="21" ry="34" pathLength="100"/><text x="100" y="244">环境</text><g class="rest"><g class="w"><line x1="60" y1="272" x2="60" y2="296"/><rect x="8" y="296" width="190" height="46" rx="8"/><text x="103" y="325" text-anchor="middle">训出来的模型</text></g></g></g></g></g></g></g></g></g></svg></div><p class="msg">每一环都在，能训出来</p><p class="ef-note">点下面的按钮，让其中一环断开</p><div class="ef-presets"><button type="button" class="lk">data</button><button type="button" class="lk">算法</button><button type="button" class="lk">infra</button><button type="button" class="lk">环境</button><button type="button" class="rs">复原</button></div></div><script>(function(){var f=document.getElementById("ef-chain-zh"),T={"ok": "每一环都在，能训出来", "bad": "「{}」出了问题，整条链被拖垮"},N=["data", "算法", "infra", "环境"],b=f.querySelectorAll(".lk"),s=f.querySelector("svg"),m=f.querySelector(".msg"),r=f.querySelector(".rs");function set(k){for(var i=0;i<4;i++){var g=s.querySelector(".lk"+i);g.classList.toggle("broken",i===k);g.querySelector(".rest").classList.toggle("fall",i===k)}b.forEach(function(x,i){x.classList.toggle("on",i===k)});m.textContent=k<0?T.ok:T.bad.replace("{}",N[k])}b.forEach(function(x,i){x.onclick=function(){set(i)}});r.onclick=function(){set(-1)}})();</script><figcaption class="ef-cap">示意。只认其中一环，就像以为链条只要一环结实就够了。</figcaption></figure>

至于「SFT 一下就好」，那是另一种绕法，问题一难，就不做这类任务了。可 agent 要做的，正是这类任务。

方法会过时，问题不会。到了长程任务和 agent 的时代，credit assignment 不是该放下的旧题，而是绕不过去的那一道。

</div>

<div lang="ja" markdown="1">

先日、[『中国の大規模モデルは、なぜ RL がうまくいかないのか』](/blog/2026/chinese-llms-and-rl/)を公開したところ、小紅書（RedNote）版には百件を超えるコメントが付きました。その中に、繰り返し出てくる声がありました。critic はもうほとんど誰も使っていない。トップの各社は PPO すら使っておらず、もっと単純な REINFORCE に戻したところもある。critic は小規模ならうまくいくが、scale up の法則には合わない。critic は未来を予測しなければならず、それは課題を解くこと自体より難しいかもしれない。さらに、RL で一本の軌跡を走らせるのに何日もかかるなら、そんな課題はいっそ RL をやめて SFT で済ませればいい、という人もいました。こうした意見をたどっていくと、長いホライズンの credit assignment（貢献度の割り当て）はもう時代遅れだ、という結論に行き着きます。こうした見方はコメント欄に限りません。credit assignment はもう役に立たない、時代遅れだと考えている人は、この分野に少なくありません。

はっきり言いましょう。credit assignment が時代遅れになるということは、そもそもありません。時代遅れだと言うと最先端に立っているように聞こえますが、実際には問題と方法を混同しており、RL においては初歩的な誤りです。これは RL にずっとある問題で、変わるのは、解きやすいかどうか、わざわざ取り組む必要があるかどうかだけです。そして長いホライズンのタスクとエージェントの時代こそ、わざわざ取り組む必要が最も大きい時期なのです。

<figure class="gf ef ef-f-thesis" id="ef-thesis-ja"><div class="ef-box"><p class="ef-h">方法は入れ替わり、問題はずっとあり、タスクは長くなっていく</p><div class="ef-tl"><p class="ln">はやりの方法</p><div class="row"><span class="t" style="margin-left:5.0%">PPO と critic</span><span class="b fade" style="margin-left:5.0%;width:80.0%"></span></div><div class="row"><span class="t" style="margin-right:0.5%;text-align:right">GRPO の仲間、critic なし</span><span class="b" style="margin-left:71.0%;width:28.5%"></span></div><div class="row"><span class="t" style="margin-right:4.0%;text-align:right">credit assignment のための新しい方法。一つのサーベイだけで 56</span><span class="b" style="margin-left:70.0%;width:26.0%"></span></div><p class="ln">問題</p><span class="prob">credit assignment という問題は、ずっとある</span><p class="ln">一回の試行の長さ</p><div class="wedge"></div><span class="mk" style="margin-left:52.0%">↑ 一回の対話の返答</span><span class="mk" style="margin-right:22.0%;text-align:right">↑ 数学の問題、数ステップ</span><span class="mk" style="margin-right:4.0%;text-align:right">↑ コーディングエージェント、数十から数百ターン</span><div class="axis"><span style="left:0.0%">2017</span><span style="left:30.0%">2020</span><span style="left:60.0%">2023</span><span style="left:90.0%">2026</span></div></div></div><figcaption class="ef-cap">説明のための図で、横軸は年です。PPO は 2017 年に提案され、のちに critic と組んで RLHF の標準になりました。GRPO は 2024 年の提案です。サーベイが集めたのは 2024 年 1 月から 2026 年 7 月までの方法です。いちばん下の帯はタスクが長くなっていくことを示すだけで、幅は実測ではありません。</figcaption></figure>

まず背景を簡単に説明します。ご存じの方は読み飛ばしてください。RL で大規模モデルを訓練するとき、モデルは一つの課題を最後までやり終えて、はじめて一つの点数を受け取ります。credit assignment が解こうとしているのは、その課題が最後に成功したり失敗したりしたとき、手柄と責任をどのステップに帰すべきか、という問題です。

## 問題と方法

冒頭の意見が時代遅れだと言っているのは、実は PPO や critic といった具体的な方法です。方法はもちろん時代遅れになります。しかし問題そのものは時代遅れになりません。モデルが一つの課題をやり終えてはじめて一つの点数を受け取る限り、その点数はどうにかして各ステップに分けなければなりません。

GRPO もこの問題を避けてはいません。軌跡全体の点数を同じグループの平均点と比べ、その差をそのまますべての token に配ります。正解なら全ステップをまとめて強め、不正解なら全ステップをまとめて弱めます。これは最も粗い分け方ですが、それでも一つの分け方です。

<figure class="gf ef ef-f-split" id="ef-split-ja"><div class="ef-box"><p class="ef-h">同じ点数を、二通りに分ける</p><div class="ef-split"><span class="hd">ステップ</span><span class="hd">成功の見込み</span><span class="hd">全体に均等に（GRPO）</span><span class="hd">一歩ずつ見積もる（critic）</span><span class="st">1. 問題を読む</span><span class="pv">55%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">2. 未知数を置く</span><span class="pv">65%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:9.2%"></i></span><span class="st">3. 方程式を立てる</span><span class="pv">70%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:4.6%"></i></span><span class="st">4. 式を整理する</span><span class="pv">72%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="up" style="width:1.8%"></i></span><span class="st err">5. 移項で符号を間違える</span><span class="pv err">20%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:48.0%"></i></span><span class="st">6. そのまま簡単にする</span><span class="pv">15%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">7. 解を出す</span><span class="pv">10%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:4.6%"></i></span><span class="st">8. 答えを書く</span><span class="pv">0%</span><span class="dv"><i class="dn" style="width:46.2%"></i></span><span class="dv"><i class="dn" style="width:9.2%"></i></span></div><p class="ef-legend"><span><i class="ef-sw up"></i>強める</span><span><i class="ef-sw dn"></i>弱める</span></p></div><figcaption class="ef-cap">説明のための例で、数字は作ったものです。この試行は最後に間違え、グループの平均は 5 割でした。全体に均等に分けると 8 ステップすべてが弱められ、正しかった最初の 4 ステップも例外ではありません。critic の分け方は、各ステップが「最後に成功する見込み」をどれだけ動かしたかを見ます。上げれば強め、下げれば弱めるので、責任の大半は符号を間違えたステップに落ちます。</figcaption></figure>

つまり「critic を使わない」とは分け方を変えたということであって、問題が消えたということではありません。critic、過程の監督、PPO も、もともと一体のものではありません。PPO がはやらなくなったからといって critic が役に立たないことにはならず、まして credit assignment が役に立たないことにはなりません。問題をある一つの方法と結びつけ、方法がはやらなくなったら問題まで時代遅れだと宣言する。この推論は成り立ちません。

## 短いホライズンの時代

わざわざ取り組まないことは、問題がないことを意味しません。その時期には解きやすく、粗い分け方で足りていたというだけです。この点では、冒頭の意見の多くは正しいのです。

まず、数学の問題のような短いホライズンのタスクでは、本当に選択が行われる場所はごくわずかです。Wang ほかは [2025 年の論文](https://arxiv.org/abs/2506.01939)で、推論の過程の各 token のエントロピー、つまりモデルがその位置でどれだけ迷っているかを調べ、エントロピーの高い token は全体の約 2 割しかないことを見つけました。これらの token は分かれ道のようなもので、推論がどちらへ進むかを決めます。残りの 8 割は、ほぼ流れのままに書き進められているだけです。この 2 割だけを更新すると、8B のモデルではすべてを更新したのと同等の効果があり、14B と 32B では明らかに上回りました。分かれ道が少なく道も短ければ、均等に分けても、分かれ道に十分な分け前が届きます。

<figure class="gf ef ef-f-fork" id="ef-fork-ja"><div class="ef-box"><p class="ef-h">推論の中で、本当に迷っていて方向を決めるトークンはごく一部</p><div class="ef-presets"><button type="button" class="on">すべてのトークン</button><button type="button">分岐トークンだけ</button></div><div class="ef-fork"><span class="tk"><s><i style="height:14%"></i></s><b>二つの</b></span><span class="tk"><s><i style="height:16%"></i></s><b>数を</b></span><span class="tk"><s><i style="height:17%"></i></s><b>x,</b></span><span class="tk"><s><i style="height:19%"></i></s><b>y</b></span><span class="tk"><s><i style="height:16%"></i></s><b>と</b></span><span class="tk hi"><s><i style="height:98%"></i></s><b>おく</b></span><span class="tk"><s><i style="height:4%"></i></s><b>。</b></span><span class="tk"><s><i style="height:11%"></i></s><b>題意</b></span><span class="tk hi"><s><i style="height:98%"></i></s><b>より</b></span><span class="tk"><s><i style="height:14%"></i></s><b>x+y=10</b></span><span class="tk"><s><i style="height:18%"></i></s><b>,</b></span><span class="tk"><s><i style="height:6%"></i></s><b>xy=21</b></span><span class="tk"><s><i style="height:12%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:79%"></i></s><b>よって</b></span><span class="tk"><s><i style="height:13%"></i></s><b>x,</b></span><span class="tk"><s><i style="height:13%"></i></s><b>y</b></span><span class="tk"><s><i style="height:4%"></i></s><b>は</b></span><span class="tk"><s><i style="height:7%"></i></s><b>t²−10t+21=0</b></span><span class="tk"><s><i style="height:8%"></i></s><b>の</b></span><span class="tk"><s><i style="height:19%"></i></s><b>二つの</b></span><span class="tk"><s><i style="height:16%"></i></s><b>解</b></span><span class="tk"><s><i style="height:7%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:94%"></i></s><b>待って</b></span><span class="tk"><s><i style="height:6%"></i></s><b>、</b></span><span class="tk hi"><s><i style="height:89%"></i></s><b>まず</b></span><span class="tk"><s><i style="height:6%"></i></s><b>判別式</b></span><span class="tk"><s><i style="height:4%"></i></s><b>を</b></span><span class="tk"><s><i style="height:18%"></i></s><b>確かめる</b></span><span class="tk"><s><i style="height:7%"></i></s><b>。</b></span><span class="tk"><s><i style="height:7%"></i></s><b>100−84=16</b></span><span class="tk"><s><i style="height:20%"></i></s><b>>0</b></span><span class="tk hi"><s><i style="height:96%"></i></s><b>なので</b></span><span class="tk"><s><i style="height:9%"></i></s><b>実数解</b></span><span class="tk"><s><i style="height:19%"></i></s><b>が</b></span><span class="tk"><s><i style="height:13%"></i></s><b>ある</b></span><span class="tk"><s><i style="height:15%"></i></s><b>。</b></span><span class="tk hi"><s><i style="height:78%"></i></s><b>したがって</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t=3</b></span><span class="tk"><s><i style="height:15%"></i></s><b>または</b></span><span class="tk"><s><i style="height:19%"></i></s><b>t=7</b></span><span class="tk"><s><i style="height:18%"></i></s><b>。</b></span></div><p class="ef-legend"><span><i class="ef-sw bar"></i>棒が高いほど、モデルはその位置で迷っている（エントロピーが高い）</span></p></div><script>(function(){var f=document.getElementById("ef-fork-ja"),k=f.querySelector(".ef-fork"),b=f.querySelectorAll(".ef-presets button");b.forEach(function(x,i){x.onclick=function(){k.classList.toggle("only",i===1);b.forEach(function(y,j){y.classList.toggle("on",j===i)})}})})();</script><figcaption class="ef-cap">説明のための図で、棒の高さは実測ではありません。論文の集計では、エントロピーの高いトークンの多くは wait、however、thus、suppose のように、話の転換や前進、仮定の導入を表す語でした。エントロピーの低いトークンの多くは、単語の後半や数式、コードの断片です。この高エントロピーの 2 割だけを更新するのが、その論文のやり方です。</figcaption></figure>

次に、サンプリングも安価です。数学の問題はすぐに解き終わるので、同じ問題を何十回解かせても大した費用にはならず、粗い信号の足りなさはサンプルを増やせば補えます。Yue ほか（[NeurIPS 2025](https://arxiv.org/abs/2504.13837)）はさらに、数学やコードの問題では、RL の後にモデルが解けるようになった問題が、ベースモデルに何回か多く試させれば解ける範囲をほとんど超えていないことを見つけています。

最後に、critic は実際に訓練が難しいものです。未来を予測しなければならず、見積もりの外れた critic は、点数を均等に分けるより悪いことさえあります。理論面では、Jia、Rakhlin、Xie が [ICML 2025 の論文](https://arxiv.org/abs/2502.10581)で、結果だけを見る監督は、一歩ずつの過程の監督と比べて統計的にそれほど難しくなく、差はせいぜいステップ数の多項式倍であることを証明しました。

どれも正しいのですが、並べてみると言っていることは同じです。短いホライズンのタスクでは、この問題は解きやすく、わざわざ取り組む必要がないということです。その理論の論文自身も、あるステップから何度も試し直せる場合には、アドバンテージ関数（このステップが平均よりどれだけ良いか）そのものが最適な過程報酬モデルになることを証明しています。結果の監督がうまく学べているとき、それはアルゴリズムの内側で credit を正しく分けているのであって、それを独立した部品として取り出していないだけです。そしてあの「ステップ数の多項式倍」は、私の理解では、数ステップの問題なら無視できても、数百ステップになれば無視できなくなります。

## エージェントの時代

agentic RL では、この問題を解きやすくしていた条件が、一つ残らずなくなりました。

まず、いわゆる分かれ道が非常に多くなりました。コーディングエージェントの一回の試行は、しばしば数十ターン、十数万 token に及びます。どのファイルを読むか、どの行を直すか、テストを走らせるかどうか、各ターンのそれぞれが本当の選択です。一か所で道を誤ればその後はすべて無駄になり、それまで正しくこなしたステップまで巻き添えで弱められます。

<figure class="gf ef ef-f-blame" id="ef-blame-ja"><div class="ef-box"><p class="ef-h">コーディングエージェントの一回の試行。間違いは 10 ターン目</p><div class="ef-brow2"><p class="lab"><b>全体に均等に</b><span>正しかったのに弱められたターン 9</span></p><div class="cells"><span class="c dn" title="1 ターン目"></span><span class="c dn" title="2 ターン目"></span><span class="c dn" title="3 ターン目"></span><span class="c dn" title="4 ターン目"></span><span class="c dn" title="5 ターン目"></span><span class="c dn" title="6 ターン目"></span><span class="c dn" title="7 ターン目"></span><span class="c dn" title="8 ターン目"></span><span class="c dn" title="9 ターン目"></span><span class="c dn" title="10 ターン目"></span><span class="c dn" title="11 ターン目"></span><span class="c dn" title="12 ターン目"></span><span class="c dn" title="13 ターン目"></span><span class="c dn" title="14 ターン目"></span><span class="c dn" title="15 ターン目"></span><span class="c dn" title="16 ターン目"></span><span class="c dn" title="17 ターン目"></span><span class="c dn" title="18 ターン目"></span><span class="c dn" title="19 ターン目"></span><span class="c dn" title="20 ターン目"></span><span class="c dn" title="21 ターン目"></span><span class="c dn" title="22 ターン目"></span><span class="c dn" title="23 ターン目"></span><span class="c dn" title="24 ターン目"></span></div></div><div class="ef-brow2"><p class="lab"><b>一ターンずつ</b><span>正しかったのに弱められたターン 0</span></p><div class="cells"><span class="c up" title="1 ターン目"></span><span class="c up" title="2 ターン目"></span><span class="c up" title="3 ターン目"></span><span class="c up" title="4 ターン目"></span><span class="c up" title="5 ターン目"></span><span class="c up" title="6 ターン目"></span><span class="c up" title="7 ターン目"></span><span class="c up" title="8 ターン目"></span><span class="c up" title="9 ターン目"></span><span class="c err" title="10 ターン目"></span><span class="c flat" title="11 ターン目"></span><span class="c flat" title="12 ターン目"></span><span class="c flat" title="13 ターン目"></span><span class="c flat" title="14 ターン目"></span><span class="c flat" title="15 ターン目"></span><span class="c flat" title="16 ターン目"></span><span class="c flat" title="17 ターン目"></span><span class="c flat" title="18 ターン目"></span><span class="c flat" title="19 ターン目"></span><span class="c flat" title="20 ターン目"></span><span class="c flat" title="21 ターン目"></span><span class="c flat" title="22 ターン目"></span><span class="c flat" title="23 ターン目"></span><span class="c flat" title="24 ターン目"></span></div></div><div class="cells ax"><span>1</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>10</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span>24</span></div><p class="ef-note">1 から 9 ターン目でコードを読み、テストを走らせ、壊れている関数を見つけます。10 ターン目で条件を一つ書き間違えます。その後の 14 ターンはそこから出た新しいエラーの修正に追われ、最後にテストは通りません。</p><p class="ef-legend"><span><i class="ef-sw up"></i>正しい、強める</span><span><i class="ef-sw dn"></i>弱める</span><span><i class="ef-sw flat"></i>強めも弱めもしない</span></p></div><figcaption class="ef-cap">説明のための例です。一ターンずつ分けるのは理想の場合で、実際には critic や過程報酬モデルのような方法で見積もるしかなく、見積もりが外れれば分け方も外れます。タスクが長いほど、均等に分けたときに濡れ衣を着せられるステップは増えます。</figcaption></figure>

次に、サンプリングそのものがもう安くありません。大きめのモデルで agentic なタスクを走らせると、一本の軌跡が出てくるまでに短くて数日、長ければ一、二週間かかります。何回か多くサンプリングして粗い信号を補うという道は通れません。タスクが長くなるほど、グループの試行がすべて失敗することも増え、グループ内で比べても何の信号も得られません。これは『中国の大規模モデルは、なぜ RL がうまくいかないのか』で書いたとおりです。

最後に、いまの環境はさらに手ごわくなっています。Zhang は [2026 年のサーベイ](https://arxiv.org/abs/2604.09459)でこの問題を正面から整理し、agentic RL で credit assignment が難しくなる理由を挙げています。たとえば、モデルが環境の状態をすべて見られないこと、環境がどう変わるかはモデルの行動だけでは決まらないこと、途中のあるステップに自由に戻ってやり直せないこと、途中のステップが正しかったかどうかを検証しにくいことです。このサーベイは、2024 年 1 月から 2026 年 7 月までにこの問題のために作られた方法を集めており、中心的な方法だけで 56 にのぼります。今年の NeurIPS も、コマンドラインのエージェントの最終的な点数を一つひとつの操作にどう分けるかを研究した[論文](https://arxiv.org/abs/2605.08013)を採択しました。時代遅れの問題から、2 年あまりで何十もの新しい解き方が出てくることはありません。

つまり、時代遅れだと言うのは、タイミングがちょうど逆なのです。credit assignment を最も放っておけたのは数学の問題の時期で、最も放っておけないのは、まさにいまです。

## 「時代遅れ」の前提

credit assignment にわざわざ取り組まないことには、代償があります。その代償とは、サンプリングの量で力ずくで埋めることです。同じ課題を何十回、何百回と走らせ、グループの中に成功と失敗がそろうまで待ち、大きな batch で粗い信号を平均して方向を出します。GPU とデータが十分にあれば、もちろんそれでも構いません。GRPO も力ずくで訓練できます。

<figure class="gf ef ef-f-cost" id="ef-cost-ja"><div class="ef-box"><p class="ef-h">サンプリングで力ずくで埋めると、タスクが長いほど、一つの課題に要る試行回数は急に増える</p><div class="ef-ctl"><label for="ef-cost-ja-r">一回の試行のステップ数</label><output for="ef-cost-ja-r">300</output><input type="range" id="ef-cost-ja-r" min="1" max="400" value="300"><div class="ef-presets"><button type="button" data-n="2">数学の問題、2 ステップ</button><button type="button" data-n="30">30 ステップ</button><button type="button" data-n="300">コーディングエージェント、300 ステップ</button></div></div><div class="ef-tiles ef-tiles2"><div class="ef-tile"><span class="k">一回の試行が成功する確率</span><span class="v">2.9%</span></div><div class="ef-tile"><span class="k">一つの課題に要る試行</span><span class="v">78 回</span><span class="s">グループに少なくとも一回の成功があると 9 割の確かさで言えるまで</span></div></div><div class="ef-dots" aria-label="点一つが一回の試行"><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span></div><p class="ef-more"></p><p class="ef-legend"><span><span class="ef-dot bad"></span>点一つが一回の試行</span></p></div><script>(function(){var f=document.getElementById("ef-cost-ja"),T={"unit": "{} 回", "more": "描いていない残り {} 回"},M=240,r=f.querySelector("input"),o=f.querySelector("output"),v=f.querySelectorAll(".ef-tile .v"),box=f.querySelector(".ef-dots"),more=f.querySelector(".ef-more");function up(){var n=+r.value,p=.6*Math.pow(.99,n),g=Math.ceil(Math.log(.1)/Math.log(1-p)),k=Math.min(g,M);o.textContent=n;v[0].textContent=(p*100).toFixed(1)+"%";v[1].textContent=T.unit.replace("{}",g);while(box.children.length<k){var s=document.createElement("span");s.className="d";box.appendChild(s)}while(box.children.length>k)box.removeChild(box.lastChild);more.textContent=g>M?T.more.replace("{}",g-M):""}r.oninput=up;f.querySelectorAll("button").forEach(function(b){b.onclick=function(){r.value=b.dataset.n;up()}});up()})();</script><figcaption class="ef-cap">説明のための計算で、実測ではありません。仮定は『中国の大規模モデルは、なぜ RL がうまくいかないのか』のタスクの長さの図と同じで、各試行は 6 割の確率で正しい方向に進み、そのあとは各ステップが 1% の確率で誤り、一つ誤ると課題全体が失敗します。長いホライズンのタスクでは一回の試行だけでも長い時間がかかり、それに回数を掛ければ、GPU とデータが尽きないという仮定にたどり着きます。</figcaption></figure>

つまり「時代遅れ」の裏には、GPU とデータが使い切れないほどあり、どの長いホライズンのタスクも必要なだけ走らせられる、という仮定が隠れています。その考え方でいくなら、いっそ使い切れないほどの GPU とデータがあることにして、一気にすべてやり切ればいいということになります。しかし現実には、そんな条件を持っている人はいません。

これと地続きの、よく聞く論調もあります。データが重要だと知ると、アルゴリズムを軽んじ、果てはデータだけが重要だと考えるというものです。データが重要なのはもちろんで、誰も否定していません。しかし、データが重要だからといって、アルゴリズムが重要でないことにはなりません。ベースモデルの訓練がますますエンジニアリングになっていることは誰もが知っています。それならなおさら、どの工程も失敗してはならないという道理がわかるはずです。データ、アルゴリズム、インフラ、環境のどれか一つでも崩れれば、全体が引きずり倒されます。それなのに、なぜある一つの工程だけが最も重要で、ほかは重要でないと考えるのでしょうか。良いデータは RL をうまく訓練できる可能性を与えるだけで、その可能性を引き出せるかどうかは、アルゴリズムが一つひとつの点数をどう生かすかにかかっています。データ一つしか認めないのは、新しい言葉を覚えたばかりの子どもが、何でもその言葉で説明しようとするのに少し似ています。通っぽく聞こえても、実際には幼稚です。

<figure class="gf ef ef-f-chain" id="ef-chain-ja"><div class="ef-box"><p class="ef-h">訓練は一本の鎖。どの輪が切れても、鎖全体が引きずり倒される</p><div class="ef-hang"><svg viewBox="0 0 300 394" role="img" aria-label="訓練は一本の鎖。どの輪が切れても、鎖全体が引きずり倒される"><path class="hook" d="M20 4 H100 M60 4 V20"/><g class="lk0"><ellipse cx="60" cy="52" rx="21" ry="34" pathLength="100"/><text x="100" y="58">データ</text><g class="rest"><g class="lk1"><ellipse cx="60" cy="114" rx="21" ry="34" pathLength="100"/><text x="100" y="114">アルゴリズム<tspan x="100" dy="19" class="sub">credit assignment を含む</tspan></text><g class="rest"><g class="lk2"><ellipse cx="60" cy="176" rx="21" ry="34" pathLength="100"/><text x="100" y="182">インフラ</text><g class="rest"><g class="lk3"><ellipse cx="60" cy="238" rx="21" ry="34" pathLength="100"/><text x="100" y="244">環境</text><g class="rest"><g class="w"><line x1="60" y1="272" x2="60" y2="296"/><rect x="8" y="296" width="190" height="46" rx="8"/><text x="103" y="325" text-anchor="middle">訓練されたモデル</text></g></g></g></g></g></g></g></g></g></svg></div><p class="msg">どの輪もそろっていて、訓練できる</p><p class="ef-note">下のボタンを押して、どれか一つの輪を切ってみてください</p><div class="ef-presets"><button type="button" class="lk">データ</button><button type="button" class="lk">アルゴリズム</button><button type="button" class="lk">インフラ</button><button type="button" class="lk">環境</button><button type="button" class="rs">元に戻す</button></div></div><script>(function(){var f=document.getElementById("ef-chain-ja"),T={"ok": "どの輪もそろっていて、訓練できる", "bad": "「{}」が壊れ、鎖全体が倒れた"},N=["データ", "アルゴリズム", "インフラ", "環境"],b=f.querySelectorAll(".lk"),s=f.querySelector("svg"),m=f.querySelector(".msg"),r=f.querySelector(".rs");function set(k){for(var i=0;i<4;i++){var g=s.querySelector(".lk"+i);g.classList.toggle("broken",i===k);g.querySelector(".rest").classList.toggle("fall",i===k)}b.forEach(function(x,i){x.classList.toggle("on",i===k)});m.textContent=k<0?T.ok:T.bad.replace("{}",N[k])}b.forEach(function(x,i){x.onclick=function(){set(i)}});r.onclick=function(){set(-1)}})();</script><figcaption class="ef-cap">説明のための図です。一つの輪だけを認めるのは、鎖は一つの輪さえ丈夫なら足りると考えるようなものです。</figcaption></figure>

「SFT で済ませればいい」というのも、別の回り道です。問題が難しくなったら、その種のタスクをやめてしまう。しかしエージェントがやるべきことは、まさにその種のタスクなのです。

方法は時代遅れになっても、問題は時代遅れになりません。長いホライズンのタスクとエージェントの時代に、credit assignment は手放してよい古い問題ではなく、避けて通れない問題です。

</div>
{% endraw %}
