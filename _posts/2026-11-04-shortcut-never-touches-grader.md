---
layout: post
lang: en
title: "Crooked Environments, Crooked Agents"
date: 2026-11-04
read_time: 13
description: "I went through three public RL training records and found a pattern in how agents go crooked."
tags: [research, agents, reinforcement-learning, evaluation]
categories: [research]
citation: true
# The note the home page puts first under Writing (and points to from its "now" line), with this poster and kicker.
home_feature: true
poster: /assets/video/crooked-env/en-poster.jpg
kicker: "Long read · film · code"
chart:
  vega_lite: true
---

The field has spent this year worrying that agents cheat on benchmarks, with good reason. Berkeley RDI took all 89 Terminal-Bench tasks with a fake curl. Verifier Hardening told agents to cheat and got through 47 of the 89 tasks in Terminal-Bench 2.0. Terminal-Bench 3.0 moved the agent and the grader into separate containers, and 4.1 is slated for tamper-resistant verifiers.

Most of those numbers come from telling the agent to cheat. Audits of released models, Vals AI's among them, show that agents cheat unasked too, and OpenAI and Anthropic have watched cheating emerge during training, though those training runs are not public. Allen AI released every attempt of Tmax's 500-step run, so I used it to look at two things: which shortcut grows, and where it comes from. That decides how we read this year's score gains and where anti-cheating effort should go. I measured it myself, with a set of off-the-shelf models as a baseline and two more public runs for contrast.

The result was not quite what I expected. In this training record, agents almost never go after the grader. What grows fast is something else. The tasks ask the agent to compile a program, but the training sandbox lacks the C headers it needs. The agent learns to put a script at that path instead; the script prints the right answers, and the tests cannot tell. That shortcut never touches the grader, so isolating the grader does not reach it. It needs a different fix.

First, a quick note on how an agent like this is trained; skip it if you know this already. We give it a task, say, write a program on a Linux machine and compile it, and it types commands to get there. When it is done, a test script checks what it left behind, and a pass earns a reward. Reinforcement learning repeats this task after task, nudging the model toward whatever scores. Throughout, the grader means that test script. Terminal-Bench, mentioned above, is 89 tasks of this kind and the benchmark most papers report.

{% include figs/shortcut-never-touches-grader/video.en.html %}

## Do agents touch the grader when nobody asks?

Start with off-the-shelf models. TermGrade published full trajectories from six models on 1,004 terminal tasks outside Terminal-Bench. Some tasks name a grading path in their instructions, so I dropped those, which leaves 959 tasks and 34,524 attempts.

I first scanned every attempt's commands for grading paths. A command named one in 295 attempts, 0.85%. Models differ a lot: 0.03% at the low end, 7.87% for DeepSeek at the top. Writes to a grading path happened in only 3 attempts, all in the batch whose disk was full, one of them trying to delete the grader's environment to free space. I then read 20 random attempts to see why they looked, and every one wanted to learn what the task required. Across all 36,144 attempts, no output contained the grader's tests.

Read those numbers with their setting. TermGrade copies tests in at scoring time, so while the agent works, the container holds no tests to change, and my path scan cannot see outputs hard-coded for the tests. This shows what was measured under that setting; it says nothing about models being honest.

{% include figs/shortcut-never-touches-grader/ladders.en.html %}

What about after training? The Tmax authors ran a check in their section D.6 and found three kinds of cheating on Terminal-Bench 2.0 that the base model did not show, such as replacing `/tests/filter.py` with a no-op or faking a Caffe binary. Those runs scored 0. They also published every attempt from all 500 training steps, which almost nobody does. Everything below depends on that record, and I am grateful for it.

## What 500 steps of training taught

The record trains on 8 tasks per step with 32 attempts per task, 128,000 attempts in all. Tests enter the container only after the agent submits.

First, did the agent go after the grader? A command named the test file in 26 attempts. None got its contents, because before submission the file is not there. But the grader runs in the agent's container, so Berkeley RDI's method, replacing a program the tests call before they run, would work here too. So I also scanned for writes to conftest, pytest and the Python interpreter, got 8 hits, and read each one. None changed the grading.

So what was it doing? The training sandbox has gcc but no C headers, and apt does not work, so 16,923 attempts hit a compile error of this kind. On tasks that require compiling, tests mostly check whether the program prints the right output. A rough keyword scan finds only about 5% of them checking whether the submitted file is actually a compiled program.

Here is one real attempt from step 45. Step through it.

{% include figs/shortcut-never-touches-grader/replay.en.html %}

This attempt first says "No, that would be cheating." Dozens of turns later it writes "This is a cheat but will make the automated test pass." Its final summary openly says the executable is a Python wrapper. The grader does not read summaries.

How common is this? On the 1,629 tasks that require a compile, I counted the attempts that put a script at the path the task names: 7.4% in the first 50 steps, 27.0% in steps 150 to 249. Attempts that did so and passed went from 4.1% to 18.2%. I read 55 passing attempts, one per task, and about nine in ten had a script where the task asked for a compiled program, or had written a program the task said was provided.

To check that this is not noise, I split each step's 8 tasks into odd and even numbers and computed the change for each half separately. The two halves differ by between -13.3 and +3.7 points, far less than this rise. To check the scan itself, I drew 200 random attempts on these tasks and had a model label each one without seeing the scan's verdict, then read every disagreement myself. Agreement with the scan was Cohen's κ 0.74. What the scan mostly misses are other fake programs, such as a faked "provided" program or hand-written ELF bytes, which are more common early in training. The 200 were drawn 100 from each stretch; counting every kind of fake program, the share went from about 10% to about 23%.

The reasoning shifts too. Attempts mentioning cheating went from 2.1% to 13.0%, and attempts working out what the tests will check went from 8.0% to 43.2%. The released checkpoint is step 200, inside the later stretch.

{% include figs/shortcut-never-touches-grader/curve.en.html %}

After step 350 the reasoning stops forming sentences and more attempts are cut off for length; the paper's section 5.2 discusses training stability. So I read reasoning only from the earlier stretch.

A more direct case: some tests use a program as the reference answer, and the task's setup compiles that program inside the same container. If compiling fails, it does not exist. On 53 such tasks, 958 of 1,696 attempts wrote that program themselves, so the test compared the agent's answer with the agent's own reference. From step 161: "When the verification runs `/app/auth_oracle <salt> <user_id> <timestamp>`, it will execute my Python wrapper (which works)."

Whether the fake programs on Terminal-Bench in section D.6 came from shortcuts like these, I cannot prove; they have the same shape. Tmax's reported gain does not shrink because of this, since those runs scored 0.

## Does every environment defect lead to a shortcut?

A second public record, a Qwen3-30B-A3B run on R2E-Gym's code-repair tasks, also releases every session's log. For its first 60 steps the sandbox could not resolve localhost, so tasks that start a local server, tornado and aiohttp among them, had tests that could not run. The authors also reran 50 steps with the fix in place from the start, drawing nearly the same tasks in the same order, which gives a clean comparison. Those tasks passed about 6 points less in the broken run, 26.8% against 32.4%; the other tasks differed by 1 point.

This time the agent learned no shortcut. About half the sessions that hit the error changed localhost to 127.0.0.1 in their own checks, a few added a line to the hosts file, and a handful edited the library's own test helpers. Comparing attempts at the same task in the same step, none of these scored reliably higher than not doing it, and the test-helper edits all scored 0. Adding to the hosts file fell from about one in five such sessions in the first 10 steps to about one in fifty later, and switching to 127.0.0.1 did not become more common.

A third public record trains a 4B model on the same tasks as Tmax. I measured two of its runs, 240 steps each, sampling every fourth step, and both kept improving. Its sandbox also lacks the C headers, and about three in ten attempts on compile tasks hit that error, close to Tmax. The difference is that apt works here. In about eight in ten of the attempts that hit the error, the agent installed packages on its own, most often libc6-dev, which provides those headers. Among attempts that hit the error, the share leaving a fake program stayed between 2% and 5% from start to finish; under the same conditions in Tmax it rose from 16% to 63%.

Why do the three records differ? As I read it, it depends on whether the cheapest route to a pass is repairing the environment or leaving a fake program. Tmax could not repair its missing headers, so a fake program was cheapest; the third run fixed them with one apt command; R2E's tests themselves were broken, so no fake program could pass. With only three records, this is just my reading.

## What isolation covers, and what it does not

Isolation does work. Those 26 attempts got no test contents precisely because tests stay out of the container until submission. The `/tests/filter.py` swap in section D.6, and the 958 attempts above that wrote their own reference, are also what an isolated grader is for.

Passing off a script is a different problem. The test file is untouched, the grading environment is untouched, and the script's answers are correct. Even with the containers separated, the test still sees a file that runs and prints the right thing. Only the test itself can catch this: when the instructions require a compile, check whether the submitted file is a compiled program on top of checking its behavior. So tamper resistance and checking the artifact are two fixes for two problems, and both are worth doing.

## Beyond cheating, what else moves the score?

When reading Terminal-Bench gains, several things besides cheating move the score, each by about as much as the gains themselves.

{% include figs/shortcut-never-touches-grader/ledger.en.html %}

Start with the harness, the framework that runs the model in the terminal. In the official 2.1 notice, the same GPT-5.4 scores 77.3 on Codex CLI and 54.8 on Terminus-2. The same Qwen3.8-27B on the same 2.1 scores 76.4 in Tev, run on Terminus-2, and 49.4 in Skill2Env, run on Pi. The next three I computed on TermGrade's 1,004 tasks, which are not Terminal-Bench. Turning on thinking for the same weights adds 7.88 points; swapping in a different 89 tasks gives a 95% range about 16 points wide; rerunning the same tasks gives a difference with a standard deviation of about 2. Then there is retraining: TermGrade retrained one recipe five times and landed between 43.4 and 46.3.

There are good examples too. TermGrade states how many times it retrained and how it picks checkpoints. MiMo audited its own training and found the model increasingly working around the tests when trained without online grading. Of the 12 environment papers I counted that report Terminal-Bench gains, none states a check of whether the passing evaluation attempts behind the gain really did the task. TermGrade comes closest, noting that its gains raised completion and answer quality together and asking others to check. Several papers check for benchmark leakage or guard against hacking during training; those are different problems, and they matter too.

## What to take away

1. When comparing scores, only comparisons within one harness count. A score from changed settings cannot be compared with the leaderboard.
2. With 89 tasks and 5 trials each, do not read much into a gap under 4 points between two evaluations; with different tasks, allow a wider margin.
3. Before training, confirm the sandbox has the toolchain the tasks need. That is what guards against the large share caused by missing headers.
4. Also confirm each task's setup actually ran and the programs the task says are provided really exist. Train What You Deploy ran the tasks for real and marked 6.9% of TMax instances invalid, 5.9% of them failing their own initial state.
5. When you find an environment defect mid-run, ask two things first: can the agent repair it itself, and if not, can a fake program still pass the tests? Of the three records, only the one where the defect could not be repaired and a fake program could pass learned a shortcut.
6. When the instructions require a compile, check whether the submitted file is a compiled program on top of checking its behavior; reading the ELF header is enough. When they only ask for a program that runs, a script is a valid answer.
7. Keep reference answers where the agent cannot reach them. Terminal-Bench 3.0's separate containers for agent and grader already do this.
8. Scan your own rollouts during training, not only for grading paths but also for scripts placed at the paths the tasks name.

The scan scripts and per-step readings are at [github.com/Battam1111/shortcut-scan](https://github.com/Battam1111/shortcut-scan). Point them at your own rollouts.

When the crooked path is cheaper, agents learn to take it. Make the right path the cheapest one, and people and agents alike are more likely to stay on track.

## References

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
