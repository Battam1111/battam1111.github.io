import { ExternalLink } from "lucide-react";
import type { ScholarSnapshot } from "@/lib/scholar";
import { formatSyncDate, getRecentPublications } from "@/lib/scholar";

interface NewsSectionProps {
  scholar: ScholarSnapshot;
}

export default function NewsSection({ scholar }: NewsSectionProps) {
  const recent = getRecentPublications(4);

  return (
    <section id="updates" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">Updates</p>
        <h2 className="section-title">Recent academic activity.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          A compact view of recent publications and the current Google Scholar
          snapshot. This section is meant to give collaborators, faculty, and
          industry researchers a fast overview of ongoing activity.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface rounded-3xl p-6">
          <p className="eyebrow">Snapshot</p>
          <div className="mt-5 space-y-4">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Google Scholar currently lists{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {scholar.totalPublications} publications
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {scholar.metrics.citations} citations
              </span>
              , with an h-index of{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {scholar.metrics.hIndex}
              </span>
              .
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Last synchronization: {formatSyncDate(scholar.updatedAt)}.
            </p>
            <a
              href={scholar.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition hover:underline"
            >
              View full Scholar profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="card-surface rounded-3xl p-6">
          <p className="eyebrow">Recent publications</p>
          <div className="mt-5 space-y-5">
            {recent.map((publication) => (
              <div
                key={publication.title}
                className="border-t border-[rgba(18,22,27,0.08)] pt-5 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {publication.year ?? "Recent"}
                    </p>
                    <a
                      href={publication.url ?? scholar.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-lg font-semibold leading-snug text-[var(--foreground)] transition hover:underline"
                    >
                      {publication.title}
                    </a>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {publication.venue}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Citations
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      {publication.citationCount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
