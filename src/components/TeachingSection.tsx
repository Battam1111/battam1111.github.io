const teachingItems = [
  {
    title: "Teaching",
    body:
      "Course, TA, and instructional experience will be documented here. A fuller teaching record and teaching materials page are planned.",
  },
  {
    title: "Mentoring",
    body:
      "Supervision, informal mentoring, reading groups, and project guidance will be added as this section grows.",
  },
];

export default function TeachingSection() {
  return (
    <section id="teaching" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">Teaching</p>
        <h2 className="section-title">Teaching and mentoring.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          Teaching is a core part of academic life. This section will be used
          to document course support, mentoring activities, and teaching
          materials as they become available.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teachingItems.map((item) => (
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
