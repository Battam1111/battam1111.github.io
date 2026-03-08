import { profile } from "@/data/profile";

const emphasis = [
  {
    label: "Research themes",
    value:
      "RLHF, reward modeling, reasoning in LLMs, reinforcement learning, and embodied intelligence.",
  },
  {
    label: "Approach",
    value:
      "Clear problem framing, reproducible experiments, and methods that transfer beyond narrow benchmarks.",
  },
  {
    label: "Collaboration",
    value:
      "Particularly interested in work that connects foundational research with practical agent systems and evaluation.",
  },
];

export default function AboutMeSection() {
  return (
    <section id="about" className="section-shell space-y-10">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="eyebrow">About</p>
            <h2 className="section-title">Biography and research direction.</h2>
          </div>

          <div className="space-y-5">
            {profile.biography.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {profile.collaboration}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {emphasis.map((item) => (
              <div key={item.label} className="border-t border-[var(--line)] pt-4">
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="card-surface h-fit rounded-3xl p-6">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-5 space-y-5">
            {profile.quickFacts.map(([label, value]) => (
              <div
                key={label}
                className="border-t border-[rgba(18,22,27,0.08)] pt-4 first:border-t-0 first:pt-0"
              >
                <dt className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {label}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
