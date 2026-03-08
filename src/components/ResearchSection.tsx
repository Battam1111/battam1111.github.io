import { ExternalLink } from "lucide-react";
import type { ScholarSnapshot } from "@/lib/scholar";
import {
  formatSyncDate,
  getFeaturedPublications,
  getPublicationList,
} from "@/lib/scholar";
import ResearchCard from "./ResearchCard";

interface ResearchSectionProps {
  scholar: ScholarSnapshot;
}

export default function ResearchSection({ scholar }: ResearchSectionProps) {
  const featured = getFeaturedPublications();
  const publications = getPublicationList();
  const metrics = [
    {
      label: "Total citations",
      value: scholar.metrics.citations,
      secondary: `${scholar.metrics.recentLabel} ${scholar.metrics.citationsRecent}`,
    },
    {
      label: "h-index",
      value: scholar.metrics.hIndex,
      secondary: `${scholar.metrics.recentLabel} ${scholar.metrics.hIndexRecent}`,
    },
    {
      label: "i10-index",
      value: scholar.metrics.i10Index,
      secondary: `${scholar.metrics.recentLabel} ${scholar.metrics.i10IndexRecent}`,
    },
    {
      label: "Publications",
      value: scholar.totalPublications,
      secondary: `Refreshed ${formatSyncDate(scholar.updatedAt)}`,
    },
  ];

  return (
    <section className="section-shell space-y-10" id="research">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Research</p>
          <h2 className="section-title">Publications and scholarly profile.</h2>
          <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
            My publications span RLHF, reward modeling, reasoning in LLMs,
            reinforcement learning, and embodied intelligence. Citation metrics
            and publication metadata below are synchronized from my public
            Google Scholar profile.
          </p>
        </div>

        <a
          href={scholar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
        >
          Open Google Scholar
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="card-surface rounded-2xl p-5">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {metric.label}
            </p>
            <p className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {metric.secondary}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Selected work</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            Representative papers
          </h3>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {featured.map((publication) => (
            <ResearchCard
              key={publication.title}
              publication={publication}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">Full list</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            Full publication list
          </h3>
        </div>

        <div className="card-surface overflow-x-auto rounded-3xl">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(18,22,27,0.08)] text-sm text-[var(--muted)]">
                <th className="px-6 py-4 font-medium">Year</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Venue</th>
                <th className="px-6 py-4 font-medium">Citations</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((publication) => (
                <tr
                  key={publication.title}
                  className="border-b border-[rgba(18,22,27,0.06)] align-top last:border-b-0"
                >
                  <td className="px-6 py-4 text-sm text-[var(--muted)]">
                    {publication.year ?? "—"}
                  </td>
                  <td className="px-6 py-4">
                    {publication.scholarUrl ? (
                      <a
                        href={publication.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--foreground)] underline-offset-4 transition hover:underline"
                      >
                        {publication.title}
                      </a>
                    ) : (
                      <span className="font-medium text-[var(--foreground)]">
                        {publication.title}
                      </span>
                    )}
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {publication.authors}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--muted)]">
                    {publication.published || publication.venue}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--foreground)]">
                    {publication.citationCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
