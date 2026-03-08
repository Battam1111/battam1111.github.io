import Image from "next/image";
import type { ScholarSnapshot } from "@/lib/scholar";
import { formatSyncDate } from "@/lib/scholar";

interface HeroSectionProps {
  scholar: ScholarSnapshot;
}

export default function HeroSection({ scholar }: HeroSectionProps) {
  const researchAreas = [
    "Reinforcement learning with human feedback",
    "Reward modeling",
    "Large language models",
    "Embodied AI",
  ];

  const metrics = [
    {
      label: "Citations",
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
      secondary: `Last synced ${formatSyncDate(scholar.updatedAt)}`,
    },
  ];

  return (
    <section
      id="top"
      className="grid min-h-[calc(100vh-8rem)] gap-10 border-b border-[var(--line)] py-10 md:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] md:items-center md:py-14"
    >
      <div className="space-y-7">
        <p className="eyebrow">Yanjun Chen / PhD Student</p>
        <div className="space-y-4">
          <h1 className="display-title max-w-4xl text-[clamp(3.4rem,8vw,6.6rem)] font-semibold leading-[0.92] text-[var(--foreground)]">
            Yanjun Chen
          </h1>
          <p className="max-w-3xl text-lg font-medium text-[var(--foreground)] md:text-xl">
            PhD student, Department of Computing, The Hong Kong Polytechnic University
          </p>
          <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            I am a PhD student at The Hong Kong Polytechnic University. My
            research focuses on reinforcement learning with human feedback,
            reward modeling, large language models, and embodied AI. I am
            interested in methods that make learning-based agents more reliable,
            adaptive, and practically useful.
          </p>
          <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
            I welcome academic collaboration, visiting opportunities, and
            research-oriented industry conversations in RLHF, agent training,
            reasoning, and embodied intelligence.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {researchAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[rgba(18,22,27,0.08)] bg-[rgba(43,64,88,0.06)] px-3 py-1 text-sm text-[var(--muted)]"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:yan-jun.chen@connect.polyu.hk"
            className="rounded-full border border-[var(--foreground)] px-4 py-2 font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
          >
            Email
          </a>
          <a
            href={scholar.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] px-4 py-2 font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            Google Scholar
          </a>
          <a
            href="https://github.com/Battam1111"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] px-4 py-2 font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--line)] px-4 py-2 font-medium text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            Contact
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="card-surface rounded-2xl p-5">
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
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

        <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Current topics: {scholar.interests.join(" / ")}.
        </p>
      </div>

      <div className="justify-self-center">
        <div className="card-surface relative overflow-hidden rounded-[2rem] p-3">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(43,64,88,0.15),transparent)]" />
          <div className="relative overflow-hidden rounded-[1.4rem] border border-[rgba(18,22,27,0.08)] bg-[var(--accent-soft)]">
            <Image
              src="/PersonalAlbums/pic1.jpg"
              alt="Portrait of Yanjun Chen"
              width={520}
              height={640}
              priority
              className="h-auto w-[min(88vw,420px)] object-cover"
            />
          </div>
          <div className="relative flex items-center justify-between gap-6 px-2 pb-2 pt-4 text-sm text-[var(--muted)]">
            <div>
              <p className="font-medium text-[var(--foreground)]">
                Department of Computing
              </p>
              <p>The Hong Kong Polytechnic University</p>
            </div>
            <p className="mono text-[11px] uppercase tracking-[0.2em]">
              Academic homepage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
