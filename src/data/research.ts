const research = [
  {
    title: "The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models",
    description:
      "We uncover a paradox where moderately accurate reward models outperform stronger ones in RLHF training. This challenges the assumption that better reward models yield better language models.",
    tags: ["RLHF", "Alignment", "Reward Models"],
    pdfUrl: "https://arxiv.org/pdf/2410.06554",
    codeUrl: "https://github.com/EIT-NLP/AccuracyParadox-RLHF",
    arxivId: "2410.06554",
    published: "EMNLP 2024",
    citationCount: 1,
  },
  {
    title: "Integrating Chain-of-Thought for Multimodal Alignment: A Study on 3D Vision-Language Learning",
    description:
      "We explore integrating CoT into 3D vision-language alignment, showing significant gains through structured reasoning with our 3D-CoT benchmark.",
    tags: ["Multimodal", "Chain-of-Thought", "3D Reasoning"],
    pdfUrl: "https://arxiv.org/pdf/2503.06232",
    arxivId: "2503.06232",
    published: "arXiv 2025",
    citationCount: 0,
  },
  {
    title: "Corrected Soft Actor Critic for Continuous Control",
    description:
      "We improve SAC by correcting action sampling bias introduced by tanh, achieving better convergence and performance on standard benchmarks.",
    tags: ["Reinforcement Learning", "SAC", "Control"],
    pdfUrl: "https://arxiv.org/pdf/2410.16739",
    arxivId: "2410.16739",
    published: "arXiv 2024",
    citationCount: 0,
  },
  {
    title: "Instruction-Tuned LLMs Succeed in Document-Level MT Without Fine-Tuning—But BLEU Turns a Blind Eye",
    description:
      "We show instruction-tuned LLMs excel in docMT without fine-tuning. BLEU fails to capture improvements, and GPT-4 proves to be a better evaluator.",
    tags: ["LLMs", "Document MT", "Evaluation"],
    pdfUrl: "https://arxiv.org/pdf/2410.20941",
    codeUrl: "https://github.com/EIT-NLP/BLEUless_DocMT",
    arxivId: "2410.20941",
    published: "arXiv 2024",
    citationCount: 2,
  },
  {
    title: "Unveiling the Key Factors for Distilling Chain-of-Thought Reasoning",
    description:
      "We dissect how granularity, supervision format, and teacher models affect CoT distillation into small language models across 7 datasets.",
    tags: ["LLMs", "CoT Distillation", "Model Compression"],
    pdfUrl: "https://arxiv.org/pdf/2502.18001",
    codeUrl: "https://github.com/EIT-NLP/Distilling-CoT-Reasoning",
    arxivId: "2502.18001",
    published: "arXiv 2025",
    citationCount: 4,
  },
  {
    title: "Breaking the Pre-Planning Barrier: Real-Time Adaptive Coordination of Mission and Charging UAVs Using Graph RL",
    description:
      "We introduce HGAM, a novel heterogeneous graph-based multi-agent RL model that enables real-time UAV coordination without pre-planned paths.",
    tags: ["Multi-agent RL", "Graph Networks", "UAVs"],
    pdfUrl: "https://arxiv.org/pdf/2501.14488",
    arxivId: "2501.14488",
    published: "arXiv 2025",
    citationCount: 0,
  },
];

export default research;
