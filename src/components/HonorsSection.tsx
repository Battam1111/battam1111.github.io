const honorsItems = [
  {
    title: "Awards and honors",
    body:
      "Scholarships, distinctions, awards, and recognitions will be collected here as a concise record.",
  },
  {
    title: "Selected milestones",
    body:
      "Notable research milestones, invited activities, or other professional highlights can also be summarized in this section.",
  },
];

export default function HonorsSection() {
  return (
    <section id="honors" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">Honors</p>
        <h2 className="section-title">Awards, honors, and milestones.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          This section will be used to record distinctions and major milestones
          in a format that is easy for academic and industry readers to scan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {honorsItems.map((item) => (
          <article key={item.title} className="card-surface rounded-3xl p-6">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Coming soon
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
