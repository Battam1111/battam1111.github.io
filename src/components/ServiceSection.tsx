const serviceItems = [
  {
    title: "Academic service",
    body:
      "Conference reviewing, workshop organization, and community service contributions will be listed here when ready for publication.",
  },
  {
    title: "Professional activities",
    body:
      "Reading groups, research communities, and other forms of scholarly engagement can be added here over time.",
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">Service</p>
        <h2 className="section-title">Academic and professional service.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          A standard academic homepage usually documents how the researcher
          contributes to the broader community, not only through papers and
          code, but also through service.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {serviceItems.map((item) => (
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
