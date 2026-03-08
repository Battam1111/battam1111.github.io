import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function CVSection() {
  return (
    <section id="cv" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">CV</p>
        <h2 className="section-title">Curriculum vitae and materials.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          A dedicated CV link is planned as part of this homepage. Until a
          finalized public version is added, please contact me directly if you
          need a current CV or supporting materials.
        </p>
      </div>

      <div className="card-surface rounded-3xl p-6">
        <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Coming soon
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Public CV download
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              A polished public CV and selected supporting materials will be
              linked here in a later update.
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
          >
            <Mail size={16} />
            Request by email
          </a>
        </div>
      </div>
    </section>
  );
}
