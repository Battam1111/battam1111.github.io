import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  date,
  summary,
  tags = [],
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="card-surface h-full rounded-3xl p-6 transition-transform duration-200 group-hover:-translate-y-1">
        <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Note
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between text-sm text-[var(--muted)]">
          <span>{date}</span>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(18,22,27,0.08)] px-2 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs">+{tags.length - 3}</span>
              )}
            </div>
          )}
        </div>

        <p className="mt-5 text-sm leading-7 text-[var(--muted)] line-clamp-3">
          {summary}
        </p>

        <div className="mt-6 flex items-center text-sm font-medium text-[var(--foreground)]">
          Read more
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
