---
layout: page
permalink: /publications/
title: Publications
title_zh: 论文
title_ja: 論文
description: "Complete list of Yanjun Chen's papers: peer-reviewed publications, preprints, and works in submission on training environments, reward models, credit assignment, and reinforcement learning."
description_zh: 陈彦筠的论文完整列表：训练环境、reward model、credit assignment 与强化学习方向，含经同行评议的发表、预印本与在投稿件。
description_ja: 陳彥筠の論文一覧：訓練環境、reward model、credit assignment、強化学習をめぐる査読論文、プレプリント、投稿中の原稿。
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## Peer-reviewed

<div class="publications">

{% bibliography --query @*[pub_type=peer_reviewed] %}

</div>

## Preprints & under review

<div class="publications">

{% bibliography --query @*[pub_type=preprint] %}

</div>
