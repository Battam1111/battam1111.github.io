---
layout: about
title: About
permalink: /
subtitle: >
  <span lang="en">PhD Candidate, <a href="https://www.polyu.edu.hk/en/comp/">Department of Computing</a>, <a href="https://www.polyu.edu.hk/">The Hong Kong Polytechnic University</a>.</span><span lang="zh"><a href="https://www.polyu.edu.hk/en/comp/">香港理工大学 计算学系</a> 博士候选人。</span><span lang="ja"><a href="https://www.polyu.edu.hk/en/comp/">香港理工大学 計算学科</a> 博士候補者。</span>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p><i class="fa-regular fa-envelope" style="margin-right:0.4em;color:var(--global-text-color-light);"></i><span style="white-space:nowrap;">yan&#8209;jun.chen@connect.polyu.hk</span></p>
    <p><span lang="en">Hong Kong</span><span lang="zh">香港</span><span lang="ja">香港</span></p>
    <p class="profile-links">
      <a href="https://scholar.google.com/citations?user=Zg8cX0sAAAAJ" title="Google Scholar" rel="external nofollow noopener" target="_blank"><i class="ai ai-google-scholar"></i></a>
      <a href="https://github.com/Battam1111" title="GitHub" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://x.com/YanjunChen1111" title="X / Twitter" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="https://orcid.org/0009-0001-9065-9137" title="ORCID" rel="external nofollow noopener" target="_blank"><i class="ai ai-orcid"></i></a>
      <a href="/assets/pdf/cv.pdf" title="CV (PDF)" target="_blank"><i class="fa-regular fa-file-pdf"></i></a>
    </p>
    <p class="profile-cv"><a href="/assets/pdf/cv.pdf" target="_blank"><span lang="en">CV (PDF) &rarr;</span><span lang="zh">简历 (PDF) &rarr;</span><span lang="ja">履歴書 (PDF) &rarr;</span></a></p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 7

latest_posts:
  enabled: false
---

<div lang="en" markdown="1">

A model is trained by other models now: a **reward model** scores it, **verifiers** check it, a **curriculum** decides what it sees. I measure what each of them actually contributes, and whether the model keeps it once they are gone.

I am a PhD candidate in the [Department of Computing](https://www.polyu.edu.hk/en/comp/) at [The Hong Kong Polytechnic University](https://www.polyu.edu.hk/), advised by Prof. [Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) and Prof. [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN).

## Research

Three fields have hit the same wall in their own vocabularies.

**Reward-model evaluation in RLHF.** A reward model's benchmark accuracy fails to predict the policy it trains: varying only accuracy, my first study found an interior optimum, with the real signal in the training dynamics.
{: .angle }
*The Accuracy Paradox in RLHF* (EMNLP 2024).
{: .angle-paper }

**Withdrawable shaping on the action interface.** Aids added to the action interface carry no invariance guarantee, and existing methods keep the correction forever: my second study co-trains a gated shaping aid whose absorption into the base policy is itself measured, so withdrawal is measured rather than hoped for.
{: .angle }
*Under review* (2026).
{: .angle-paper }

**Exact credit for cooperative LLM agents.** One shared outcome hides each decision's share: my third study shows the transcript makes every decision replayable, so per-decision credit is measured exactly instead of estimated.
{: .angle }
*Exact Is Easier: Credit Assignment for Cooperative LLM Agents* (arXiv:2603.06859, in submission).
{: .angle-paper }

One problem, three faces: the models that train a model must be judged from inside training, by their measured effect on it, and kept only for the help it absorbs.

### Where I'm going

My bet: **environments themselves must scale, train, and generalize the way models have.** The road ahead trains these components themselves (reward model, verifier, curriculum) as one team serving one model, and extends beyond text toward embodied systems.

<p class="acknowledgement"><small><em>With thanks to Xiaoyu Shen and Dawei Zhu, whose ongoing mentorship and guidance have shaped much of how I think about research.</em></small></p>

</div>

<div lang="zh" markdown="1">

如今，模型由其他模型来训练：**reward model** 给它打分，**verifier** 给它把关，**curriculum** 决定它看到什么。我测量它们每一个真正贡献了什么，以及模型在它们离场之后还剩下什么。

我是[香港理工大学 计算学系](https://www.polyu.edu.hk/en/comp/)的博士候选人，导师为 [Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) 教授与 [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN) 教授。

## 研究方向

三个领域用各自的术语撞上了同一堵墙。

**RLHF 中的 reward model 评估。** reward model 在 benchmark 上的准确率无法预测它训练出的 policy：仅改变准确率，我的第一项研究发现了一个内部最优点，真正的信号藏在训练动态之中。
{: .angle }
*The Accuracy Paradox in RLHF* (EMNLP 2024).
{: .angle-paper }

**action interface 上可撤回的 shaping。** 加在 action interface 上的辅助不附带不变性保证，而现有方法永远保留这一修正。我的第二项研究联合训练一个门控 shaping 辅助，其吸收到 base policy 的过程本身被测量，使得撤回是被测量的，而非被寄望的。
{: .angle }
*Under review* (2026).
{: .angle-paper }

**协作式 LLM agent 的精确 credit。** 一个共享的结果隐藏了每个决策的贡献份额。我的第三项研究表明，transcript 使得每个决策均可重放，因此 per-decision credit 是被精确测量的，而非被估算的。
{: .angle }
*Exact Is Easier: Credit Assignment for Cooperative LLM Agents* (arXiv:2603.06859, in submission).
{: .angle-paper }

同一个问题的三张面孔：训练模型的那些模型，必须在训练内部、按它们对模型的实测效果来评判，并且只为被模型吸收的帮助而保留。

### 后续方向

我的判断: **环境自身必须像模型一样可扩展、可训练、可泛化。** 今后的方向是把这些部件本身（reward model、verifier、curriculum）作为服务同一个模型的一支团队来训练，并从文本走向具身系统。

<p class="acknowledgement"><small><em>感谢 Xiaoyu Shen 老师与 Dawei Zhu 师兄一直以来的指导与帮助，他们在很多方面塑造了我做研究的方式。</em></small></p>

</div>

<div lang="ja" markdown="1">

モデルはいま、別のモデルたちによって訓練されています。**reward model** が採点し、**verifier** が検証し、**curriculum** が見るものを決めます。私はそれぞれが実際に何を貢献したのか、そしてそれらが去った後にモデルに何が残るのかを測定します。

[香港理工大学 計算学科](https://www.polyu.edu.hk/en/comp/)の博士候補者で、[Wenjie Li (Maggie)](https://www4.comp.polyu.edu.hk/~cswjli/) 教授と [Wei Zhang](https://scholar.google.com.hk/citations?user=Z7u9yEoAAAAJ&hl=zh-CN) 教授の指導を受けています。

## 研究内容

三つの分野が、それぞれの用語で同じ壁にぶつかっています。

**RLHF における reward model の評価。** reward model の benchmark 精度は、それが訓練する policy を予測できません。精度のみを変化させた私の最初の研究は、内側に最適点が存在することを見出し、真の信号は訓練のダイナミクスにあることを示しました。
{: .angle }
*The Accuracy Paradox in RLHF* (EMNLP 2024).
{: .angle-paper }

**action interface 上の撤回可能な shaping。** action interface に付加された補助には不変性の保証がなく、既存の手法は修正を永続的に保持します。私の第二の研究は、ゲート付き shaping 補助を共同訓練し、base policy への吸収過程そのものを測定することで、撤回を希望的観測ではなく測定対象にします。
{: .angle }
*Under review* (2026).
{: .angle-paper }

**協調的 LLM agent の厳密な credit。** 一つの共有された結果は、各決定の寄与分を隠してしまいます。私の第三の研究は、transcript により全ての決定が再現可能であることを示し、per-decision credit を推定ではなく厳密に測定します。
{: .angle }
*Exact Is Easier: Credit Assignment for Cooperative LLM Agents* (arXiv:2603.06859, in submission).
{: .angle-paper }

一つの問題、三つの顔。モデルを訓練するモデルたちは、訓練の内部で、モデルへの実測された効果によって評価されなければなりません。そして、モデルが吸収した助けのためにのみ保持されるべきです。

### これから

私の賭けはこうです: **環境そのものが、モデルと同じようにスケールし、訓練され、汎化される必要があります。** 今後の道筋は、これらの構成要素そのもの（reward model、verifier、curriculum）を一つのモデルに仕える一つのチームとして訓練し、テキストを超えて身体性システムへと拡張することです。

<p class="acknowledgement"><small><em>Xiaoyu Shen 先生と Dawei Zhu 先輩から受けた継続的なご指導とお力添えに深く感謝いたします。私の研究との向き合い方の多くは、お二人からの影響によるものです。</em></small></p>

</div>
