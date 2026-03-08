import { ExternalLink, FileText, Github } from "lucide-react";
import type { DisplayPublication } from "@/lib/scholar";

interface ResearchCardProps {
  publication: DisplayPublication;
}

function cleanVenue(value: string) {
  return value.replace(/\s+,/g, ",").trim();
}

export default function ResearchCard({ publication }: ResearchCardProps) {
  const {
    title,
    description,
    tags,
    pdfUrl,
    codeUrl,
    arxivId,
    published,
    authors,
    venue,
    scholarUrl,
    citationCount,
  } = publication;

  return (
    <article className="card-surface rounded-3xl p-6">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {published || cleanVenue(venue)}
          </p>
          <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)]">
            {title}
          </h3>
        </div>
        <div className="min-w-20 text-right">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Citations
          </p>
          <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
            {citationCount}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
        {description}
      </p>

      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        {authors}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[rgba(18,22,27,0.08)] bg-[rgba(43,64,88,0.06)] px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
        {scholarUrl && (
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
          >
            <ExternalLink size={16} />
            Scholar
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
          >
            <FileText size={16} />
            PDF
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {arxivId && (
          <a
            href={`https://arxiv.org/abs/${arxivId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
          >
            <ExternalLink size={16} />
            arXiv
          </a>
        )}
      </div>
    </article>
  );
}
