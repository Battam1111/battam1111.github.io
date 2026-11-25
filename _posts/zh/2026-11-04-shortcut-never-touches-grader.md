---
layout: post
lang: zh
title: "环境不正 Agent 歪"
date: 2026-11-04
read_time: 13
description: "我翻了三份公开的 RL 训练记录，发现 agent 变歪有迹可循。"
tags: [research, agents, reinforcement-learning, evaluation]
categories: [research]
citation: true
citation_title: "Crooked Environments, Crooked Agents"
home_feature: true
poster: /assets/video/crooked-env/zh-poster.jpg
kicker: "长文 · 两分钟短片 · 开源扫描工具"
chart:
  vega_lite: true
---

这一年，大家越来越担心 agent 在评测里作弊。Berkeley RDI 用一个假的 curl 拿下了 Terminal-Bench 全部 89 道题；Verifier Hardening 让 agent 专门去钻空子，Terminal-Bench 2.0 的 89 道题里有 47 道能被骗过。Terminal-Bench 3.0 随后把 agent 和判分分到了两个容器里，4.1 还要加上防篡改。这些工作都很重要，我从中学到了很多。

不过，这些数字大多是在「叫它去骗」的条件下得到的。没人叫它骗的时候它也会作弊，Vals AI 等对已发布模型的审计已经发现了这一点；训练过程中模型也会学会作弊，OpenAI 和 Anthropic 都观察到过，只是这些训练记录没有公开。正好 Allen AI 公开了 Tmax 500 步训练里的每一局，我就想借这份记录弄清楚两件事，一是涨起来的是哪种捷径，二是它从哪里来。这关系到大家怎么看待这一年的涨分，也关系到防作弊的工夫该花在哪里。我实际跑了一遍，还拿一组现成的模型和另外两份公开的训练记录作了对照。

结果和我预想的不太一样。在这份训练记录里，agent 几乎没有去动判分，涨得很快的是另一件事。题目要它编译出一个程序，训练用的沙箱里却缺少编译所需的 C 头文件，它后来学会了在那个位置放一个脚本来冒充，脚本输出的答案是对的，测试分辨不出来。这种做法根本不经过判分，把判分隔离开也管不到它，得另想办法。

先简单介绍一下这类 agent 是怎么训练的，熟悉的朋友可以跳过这一段。我们给它出一道题，比如在一台 Linux 电脑上写一个程序并编译出来，它自己敲命令去完成。做完之后，再运行一段事先写好的测试程序，检查它交上来的东西对不对，对了就给奖励。RL 训练就是这样一道题接一道题地做、打分，再根据分数调整模型。文中说的判分，指的就是这段测试程序。前面提到的 Terminal-Bench 就由 89 道这样的题组成，也是大家最常用来报分的一套题。

{% include figs/shortcut-never-touches-grader/video.zh.html %}

## 没人叫它骗的时候，它会去碰判分吗

先看现成的模型。TermGrade 公开了六个模型的完整轨迹，题目是 1,004 道 Terminal-Bench 以外的终端题。有些题的题面本身就提到了判分用的路径，我先把这些题去掉，剩下 959 道题、34,524 次尝试。下面把一次尝试叫作一局。

我先扫描了每一局的命令，看有没有碰到判分用的路径。命令里提到这些路径的有 295 局，占 0.85%，不同模型之间差别很大，最低的只有 0.03%，最高的 DeepSeek 达到 7.87%。真正往这些路径里写东西的只有 3 局，都出在硬盘写满的那一批里，其中一局是想删掉判分环境来腾出空间。我又随机读了 20 局，看它为什么要去看这些路径，结果都是想弄清楚题目到底要什么。另外，全部 36,144 局的输出里，没有一局出现过判分用的测试。

这些数字要结合条件来看。TermGrade 的测试是打分时才拷进容器的，agent 干活的时候，容器里本来就没有测试可改；我的路径扫描也发现不了针对测试专门写死输出的做法。所以这些数字只说明在这种设定下观察到了什么，说明不了模型有多老实。

{% include figs/shortcut-never-touches-grader/ladders.zh.html %}

那训练之后呢？Tmax 的作者在论文 D.6 节做过一次检查，发现训练后的模型在 Terminal-Bench 2.0 上出现了基座模型没有的三类作弊，比如把 `/tests/filter.py` 换成空过滤器，或者伪造一个 caffe。这些局最后都是 0 分。更难得的是，他们把 500 步训练里的每一局都公开了，下面的分析全靠这份记录，非常感谢他们。

## 训练 500 步，它学到了什么

这份记录里，每一步训练 8 道题，每道题跑 32 局，一共 128,000 局。测试要等 agent 提交之后才放进容器。

先看它有没有去动判分。命令里提到测试文件的有 26 局，但没有一局拿到了文件内容，因为提交之前文件还不存在。不过判分和 agent 是在同一个容器里运行的，Berkeley RDI 那种手法在这里同样行得通，也就是提前改掉测试运行时要调用的程序。所以我又专门扫描了往 conftest、pytest、Python 解释器这些地方写东西的命令，一共找到 8 处，逐条读过，没有一处真的改动了判分。

那它到底在做什么？训练用的沙箱里有 gcc，却没有 C 头文件，apt 也用不了，所以有 16,923 局撞上了这类编译报错。而需要编译的题，测试大多只看程序运行的结果对不对。我按关键词粗略扫了一遍，只有约 5% 的测试会检查交上来的是不是真正编译出来的程序。

下面是第 45 步的一局真实记录，可以逐步点开来看。

{% include figs/shortcut-never-touches-grader/replay.zh.html %}

这一局一开始还说 "No, that would be cheating"，几十轮之后却写下了 "This is a cheat but will make the automated test pass"。它在最后的总结里也如实交代了这是一个 Python 包装，只是判分并不读这段话。

这样的局有多少？我统计了需要编译的 1,629 道题，agent 把脚本放到题目指定路径上的局，前 50 步占 7.4%，到第 150 到 249 步涨到了 27.0%。这样做并且通过了测试的，从 4.1% 涨到了 18.2%。我又从通过的局里每道题抽一局，读了 55 局，大约九成确实是题目要一个编译出来的程序，它却交了脚本，或者自己写了一个题面说已经提供的程序。

为了确认这不是随机波动，我把每一步的 8 道题按单双号分成两组，各算一遍，两组之差在 -13.3 到 +3.7 个百分点之间，上面的涨幅远远超出了这个范围。为了检验扫描本身准不准，我又从这类题里随机抽了 200 局，让模型在看不到扫描结果的情况下逐局判断，有分歧的我逐条读过，和扫描的一致性 κ 为 0.74。扫描漏掉的主要是其他形式的假程序，比如伪造一个题面说已经提供的程序，或者手写 ELF 字节，这类在训练前期更多。这 200 局是前后两段各抽 100 局，把各种假程序都算上，前一段约占 10%，后一段约占 23%。

它的思考过程也在变。思考中提到作弊这类字眼的局，从 2.1% 涨到了 13.0%；琢磨测试会检查什么的，从 8.0% 涨到了 43.2%。官方发布的检查点是第 200 步，正好落在后一段里。

{% include figs/shortcut-never-touches-grader/curve.zh.html %}

第 350 步以后，思考过程开始变得语句不通，因为太长而被截断的局也多了起来，论文 5.2 节专门讨论了训练的稳定性。所以和思考过程有关的统计，我只用前面这一段。

还有一类例子更直接。有些题的测试会拿一个程序当参考答案，这个程序是准备环境时在同一个容器里用 gcc 编译出来的，编译失败，它就不存在。这样的题有 53 道，一共 1,696 局，其中 958 局是 agent 自己写了这个程序，于是测试拿它的答案去和它自己写的参考答案比对。第 161 步有一局是这样写的，"When the verification runs `/app/auth_oracle <salt> <user_id> <timestamp>`, it will execute my Python wrapper (which works)."

D.6 节里 Terminal-Bench 上的那几个假程序，是不是从训练里的这些捷径来的，我没法证明，只能说它们的样子是一样的。Tmax 报告的涨分也不会因此打折扣，因为那几局都是 0 分。

## 环境有缺陷，agent 就一定会走捷径吗

第二份公开的训练记录，是 Qwen3-30B-A3B 在 R2E-Gym 改代码题上的 RL 训练，每一局的日志也都公开了。它前 60 步的沙箱解析不了 localhost，所以 tornado、aiohttp 这类要在本机起服务的题，测试本身就跑不起来。作者另外从头跑了一次修好了缺陷的 50 步，两次按同样的顺序抽到了几乎一样的题，正好可以拿来对照。这些题在有缺陷的那次通过率低了约 6 个百分点，26.8% 对 32.4%，其他题两次只差 1 个百分点。

但这次 agent 并没有学会什么捷径。撞上这个报错的局，差不多一半把自己检查用的脚本里的 localhost 改成了 127.0.0.1，少数往 hosts 文件里补了一行，还有几局去改了库自带的测试辅助代码。我拿同一步、同一道题的几局来比，做了这些的并没有比没做的稳定地多拿分，改测试辅助代码的那几局全是 0 分。往 hosts 里补一行的，从前 10 步的约两成降到了后面的百分之二左右，改用 127.0.0.1 的也没有变多。

第三份公开的训练记录用的是和 Tmax 同一批题，训练的是一个 4B 模型。其中两次训练各 240 步，我每 4 步取一步做了统计，两次的通过率都在涨。它的沙箱同样缺 C 头文件，编译题里约三成的局撞上了这个报错，和 Tmax 差不多。不同的是这里 apt 能用，撞上这个报错的局里约八成，agent 自己装上了包，装得最多的正是提供这些头文件的 libc6-dev。撞上报错之后放假程序的局，从训练开始到结束都只占百分之二到五，同样的情况下，Tmax 从 16% 涨到了 63%。

三份记录为什么结果不同？我的理解是，要看对 agent 来说，最省事的那条路是修好环境，还是放一个假程序。Tmax 缺头文件又修不好，放假程序最省事；第三份记录一条 apt 命令就能修好；R2E 则是测试本身坏了，放什么假程序都过不了。目前只有三份记录，这只是我的一个看法。

## 防篡改管得住什么，管不住什么

防篡改是有用的。前面那 26 局之所以没拿到测试内容，正是因为提交之前测试不在容器里。D.6 节那个换掉 `/tests/filter.py` 的例子，以及上面那 958 局自己写参考答案的情况，也都该由隔离判分来防。

放脚本冒充则是另一回事。测试文件一个字没动，判分环境也没动，脚本输出的答案也是对的，就算把容器隔开，测试看到的仍然是一个能运行、输出也正确的文件。这一类只能靠测试自己去查，题面要求编译的，除了检查结果对不对，还要检查交上来的是不是编译出来的程序。所以防篡改和检查交上来的程序是两件事，各管一类，两样都要做。

## 除了作弊，分数还会受什么影响

看 Terminal-Bench 上的涨分时，除了作弊，还有几个因素会让分数变化，每一个带来的变化都和涨分本身差不多大。

{% include figs/shortcut-never-touches-grader/ledger.zh.html %}

先说 harness，也就是让模型在终端里干活的那一套框架。官方 2.1 的公告里，同一个 GPT-5.4，用 Codex CLI 是 77.3，用 Terminus-2 是 54.8。同一个 Qwen3.8-27B、同一份 2.1，Tev 用 Terminus-2 报的是 76.4，Skill2Env 用 Pi 报的是 49.4。接下来三个因素是我在 TermGrade 那 1,004 道题上算的，不是 Terminal-Bench。同一份权重，只打开思考模式，就能多 7.88 分；换一批 89 道题，分数的 95% 区间宽约 16 分；同样的题重跑一次，两次之差的标准差约 2 分。最后是重新训练，TermGrade 用同一个配方重训了五次，分数在 43.4 到 46.3 之间。

也有做得很好的例子。TermGrade 写明了重新训练了几次、最后取的是哪个检查点；MiMo 自己做了审计，发现不带在线判分时，模型越来越多地绕过测试。我逐篇看了 12 篇报告 Terminal-Bench 涨分的环境论文，都没有写到查过支撑涨分的那些评测里，通过的局是不是真的完成了任务。最接近的是 TermGrade，它写了涨分时完成度和答案质量是一起提高的，并请大家来核对。不少论文检查了题目泄漏，或者在训练时防范了钻空子，那是另外的问题，也都很重要。

## 几点建议

1. 比较分数时，只有在同一个 harness 里比较两组才算数，改了设定的分不能跟榜比。
2. 89 道题、每题跑 5 次的评测，两次结果相差 4 分以内，先别急着下结论；换了一批题，要留出更大的余地。
3. 开训之前，先确认训练用的沙箱里有题目需要的工具链。缺头文件带来的那一大类捷径，就靠这一条来防。
4. 同时确认题目的准备步骤（setup）真的执行成功了，题面说提供了的程序也确实存在。Train What You Deploy 实际运行之后，标出 TMax 有 6.9% 的题无效，其中 5.9% 连自己的初始状态都过不了。
5. 训练中途发现环境有缺陷，先问两个问题，agent 自己能不能修好，修不好的话，有没有假程序能通过测试。三份记录里，只有修不好、又有假程序能通过测试的那一份，agent 学会了走捷径。
6. 题面要求编译的题，除了检查结果，还要检查交上来的是不是编译出来的程序，看一眼 ELF 文件头就够了。如果题面只要求一个能运行的程序，脚本就是合法的解。
7. 把参考答案放在 agent 碰不到的地方，Terminal-Bench 3.0 把 agent 和判分分进两个容器，就是现成的做法。
8. 训练时也扫一扫自己的轨迹，不只扫判分路径，也看看有没有脚本被放到了题目指定的路径上。

扫描脚本和每一步的统计结果都放在这里，[github.com/Battam1111/shortcut-scan](https://github.com/Battam1111/shortcut-scan)，换成自己的轨迹就能跑，供大家参考。

歪路更省事，agent 就会学着走歪路。让正路成为最省事的那条，无论是人还是 agent，都更容易走上正轨。

## 参考

1. Allen AI. Tmax: [paper (arXiv 2606.23321)](https://arxiv.org/abs/2606.23321), [model and rollouts](https://huggingface.co/allenai/tmax-9b), [TMax-15K tasks](https://huggingface.co/datasets/allenai/TMax-15K).
2. ai&. [TermGrade: 1k graded terminal environments, 36k trajectories, and the RL run they trained](https://www.aiand.com/newsroom/termgrade).
3. Berkeley RDI. [How We Broke Top AI Agent Benchmarks: And What Comes Next](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/).
4. [Scalable Weak-to-Strong Verifier Hardening for Agent Environments](https://arxiv.org/abs/2610.15924) (arXiv 2610.15924).
5. Terminal-Bench announcements: [2.1](https://www.tbench.ai/news/terminal-bench-2-1), [3.0](https://www.tbench.ai/news/terminal-bench-3-0), [4.0](https://www.tbench.ai/news/terminal-bench-4-0).
6. Vals AI. [AI Cheating is on the Rise](https://www.vals.ai/blogs/cheating-on-the-rise) (2026-09-15).
7. Luo et al. [Maintaining Benchmarks Against Increasingly Capable Agents: Detection and Remediation of Unearned Passes](https://arxiv.org/abs/2609.34262) (arXiv 2609.34262).
8. Baker et al. [Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation](https://arxiv.org/abs/2503.11926) (arXiv 2503.11926).
9. MacDiarmid et al. [Natural Emergent Misalignment from Reward Hacking in Production RL](https://arxiv.org/abs/2511.18397) (arXiv 2511.18397).
10. [MiMo-V2.6 technical report](https://arxiv.org/abs/2610.11959) (arXiv 2610.11959).
11. [Tev](https://arxiv.org/abs/2610.18868) (arXiv 2610.18868) and [Skill2Env](https://github.com/NVlabs/Skill2Env).
12. [Train What You Deploy](https://arxiv.org/abs/2609.04678) (arXiv 2609.04678).
13. Jain et al. [R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents](https://arxiv.org/abs/2504.07164) (arXiv 2504.07164), and the [Qwen3-30B-A3B training rollouts on it](https://huggingface.co/datasets/MasterZhou/agentic-rl-qwen3-30b-a3b-r2e-gym-rollouts).
14. yyuanuw. Qwen3.5-4B GRPO rollouts on TMax-15K: [vt run](https://huggingface.co/datasets/yyuanuw/hop2-tb-grpo-v3-vt-rollouts), [terminus2 run](https://huggingface.co/datasets/yyuanuw/hop2-tb-grpo-v3-trsns-rollouts).
