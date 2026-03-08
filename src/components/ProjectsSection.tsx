import { ExternalLink, FileText, Github } from "lucide-react";
import { getProjectHighlights } from "@/lib/scholar";

export default function ProjectsSection() {
  const projects = getProjectHighlights();

  return (
    <section id="projects" className="section-shell space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Code and reproducible artifacts.</h2>
        <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
          Selected repositories and reproducible research artifacts related to
          my publications. This section is especially useful for readers who
          want to evaluate implementation quality or explore follow-up work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card-surface rounded-3xl p-6">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {project.published ?? "Research code"}
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(18,22,27,0.08)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
              >
                <Github size={16} />
                Repository
              </a>
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
                >
                  <FileText size={16} />
                  Paper
                </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
              >
                <ExternalLink size={16} />
                Open
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
