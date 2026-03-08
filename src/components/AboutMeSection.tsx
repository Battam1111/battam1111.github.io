export default function AboutMeSection() {
  const blocks = [
    {
      title: "Research themes",
      body:
        "My work spans RLHF, reward modeling, reasoning in large language models, reinforcement learning, and embodied intelligence.",
    },
    {
      title: "Approach",
      body:
        "I care about methods that are both rigorous and usable: clear problem framing, reproducible experiments, and systems that can transfer beyond toy settings.",
    },
    {
      title: "Collaboration",
      body:
        "I am especially interested in collaborations that connect foundational research with practical agent systems, evaluation, and embodied decision-making.",
    },
  ];

  const quickFacts = [
    ["Affiliation", "The Hong Kong Polytechnic University"],
    ["Position", "PhD student"],
    ["Location", "Hong Kong"],
    ["Languages", "Chinese, English, Japanese"],
    ["Core tools", "Python, C/C++"],
    ["Open to", "Academic and research-oriented industry collaboration"],
  ];

  return (
    <section id="about" className="section-shell space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">About</p>
        <h2 className="section-title">Biography and research direction.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          I work at the intersection of language-model alignment,
          reinforcement learning, and embodied intelligence. My broader goal is
          to understand how agents can learn from feedback, reason more
          effectively, and behave more reliably in complex environments.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {blocks.map((block) => (
          <article key={block.title} className="card-surface rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {block.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {block.body}
            </p>
          </article>
        ))}
      </div>

      <div className="card-surface rounded-2xl p-6">
        <p className="eyebrow">Quick facts</p>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="border-t border-[rgba(18,22,27,0.08)] pt-4">
              <dt className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                {label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-[var(--foreground)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
