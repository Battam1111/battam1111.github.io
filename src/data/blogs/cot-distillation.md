---
title: "Test1"
date: "2025-02-28"
summary: "How granularity, supervision format, and teacher models affect CoT distillation into smaller LMs across 7 benchmarks."
tags: ["LLMs", "CoT Distillation", "Model Compression"]
---

## 🧩 Background

Chain-of-Thought (CoT) prompting enables powerful multi-step reasoning in LLMs. But transferring this ability into **small language models (SLMs)** remains a major challenge.

---

## 🧪 Experiment Design

We study three axes:

1. **Granularity** of intermediate steps  
2. **Supervision format**: explanation-only vs answer+reasoning  
3. **Teacher model**: GPT-3.5 vs GPT-4

7 datasets are used: GSM8K, SVAMP, DROP, etc.

---

## 📈 Key Findings

- Fine-grained step supervision leads to **more generalizable reasoning**  
- Answer-only distillation fails to transfer reasoning skills  
- GPT-4 outputs yield more structured logic chains than GPT-3.5

---

## 💡 Takeaway

Distillation is not copying — it’s **translation**.

> “The way we teach reasoning determines what reasoning emerges.”
