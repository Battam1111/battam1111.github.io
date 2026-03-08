export const profile = {
  name: "Yanjun Chen",
  role: "PhD Student",
  department: "Department of Computing",
  institution: "The Hong Kong Polytechnic University",
  location: "Hong Kong",
  email: "yan-jun.chen@connect.polyu.hk",
  github: "https://github.com/Battam1111",
  scholar: "https://scholar.google.com/citations?user=Zg8cX0sAAAAJ&hl=en",
  headline:
    "Research on RLHF, large language models, and embodied AI.",
  summary:
    "I am a PhD student at The Hong Kong Polytechnic University working on reinforcement learning with human feedback, reward modeling, reasoning in large language models, and embodied intelligence.",
  mission:
    "My broader goal is to build learning-based agents that are more reliable, adaptive, and practically useful in complex environments.",
  collaboration:
    "I welcome academic collaboration, visiting opportunities, and research-oriented industry conversations related to RLHF, agent training, reasoning, and embodied AI.",
  researchAreas: [
    "Reinforcement learning with human feedback",
    "Reward modeling",
    "Large language models",
    "LLM reasoning",
    "Embodied AI",
  ],
  biography: [
    "My research sits at the intersection of language-model alignment, reinforcement learning, and embodied intelligence. I am particularly interested in how agents can learn from feedback, reason more effectively, and behave more reliably in open-ended environments.",
    "Across my work, I care about methods that are both rigorous and useful: clear problem formulation, reproducible experiments, and systems that can transfer beyond narrow benchmark settings.",
  ],
  quickFacts: [
    ["Affiliation", "The Hong Kong Polytechnic University"],
    ["Position", "PhD student"],
    ["Department", "Department of Computing"],
    ["Location", "Hong Kong"],
    ["Languages", "Chinese, English, Japanese"],
    ["Core tools", "Python, C/C++"],
  ] as Array<[string, string]>,
};

export type Profile = typeof profile;
