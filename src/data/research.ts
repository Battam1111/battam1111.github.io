interface ResearchItem {
  title: string;
  description: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
  arxivId?: string;
  published?: string;
  citationCount?: number;
}

const research: ResearchItem[] = [
  {
    title: "Reasoning beyond language: A comprehensive survey on latent chain-of-thought reasoning",
    description:
      "A survey of latent chain-of-thought reasoning that maps out how reasoning can emerge beyond explicit verbalized steps, with implications for evaluation, supervision, and model design.",
    tags: ["LLM Reasoning", "Survey", "Chain-of-Thought"],
    pdfUrl: "https://arxiv.org/pdf/2505.16782",
    arxivId: "2505.16782",
    published: "arXiv 2025",
  },
  {
    title: "Unveiling the key factors for distilling chain-of-thought reasoning",
    description:
      "An empirical study of how supervision format, reasoning granularity, and teacher quality affect the distillation of chain-of-thought reasoning into smaller language models.",
    tags: ["LLMs", "CoT Distillation", "Model Compression"],
    pdfUrl: "https://arxiv.org/pdf/2502.18001",
    codeUrl: "https://github.com/EIT-NLP/Distilling-CoT-Reasoning",
    arxivId: "2502.18001",
    published: "ACL Findings 2025",
  },
  {
    title: "The Accuracy Paradox in RLHF: When Better Reward Models Don't Yield Better Language Models",
    description:
      "We show that more accurate reward models do not always yield better RLHF outcomes, highlighting a practical paradox between reward-model quality and downstream language-model performance.",
    tags: ["RLHF", "Alignment", "Reward Models"],
    pdfUrl: "https://arxiv.org/pdf/2410.06554",
    codeUrl: "https://github.com/Battam1111/AccuracyParadox-RLHF",
    arxivId: "2410.06554",
    published: "EMNLP 2024",
  },
  {
    title: "Fine-grained and multi-dimensional metrics for document-level machine translation",
    description:
      "A study of fine-grained evaluation signals for document-level machine translation, with the goal of measuring translation quality beyond coarse aggregate metrics.",
    tags: ["Machine Translation", "Evaluation", "Document MT"],
    published: "NAACL 2025",
  },
  {
    title: "Rethinking Soft Actor-Critic in High-Dimensional Action Spaces: The Cost of Ignoring Distribution Shift",
    description:
      "We revisit Soft Actor-Critic in high-dimensional control and analyze how distribution shift in action sampling can undermine learning stability and final performance.",
    tags: ["Reinforcement Learning", "SAC", "Control"],
    pdfUrl: "https://arxiv.org/pdf/2410.16739",
    arxivId: "2410.16739",
    published: "arXiv 2024",
  },
  {
    title: "Integrating Chain-of-Thought for Multimodal Alignment: A Study on 3D Vision-Language Learning",
    description:
      "A study of how chain-of-thought style reasoning can improve multimodal alignment in 3D vision-language settings through more structured intermediate supervision.",
    tags: ["Multimodal", "Chain-of-Thought", "3D Reasoning"],
    pdfUrl: "https://arxiv.org/pdf/2503.06232",
    arxivId: "2503.06232",
    published: "arXiv 2025",
  },
];

export default research;
