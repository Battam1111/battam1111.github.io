import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

function getAllPostMetadata(): BlogMeta[] {
  const blogDir = path.join(process.cwd(), "src/data/blogs");
  const files = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"));

  return files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags || [],
      };
    })
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
}

export default function BlogPage() {
  const posts = getAllPostMetadata();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <div className="space-y-10">
        <header className="space-y-4 border-b border-[var(--line)] pb-8">
          <p className="eyebrow">Notes</p>
          <h1 className="section-title">Research notes and essays.</h1>
          <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
            Writing on RLHF, large language models, embodied AI, and adjacent
            questions that do not fit neatly inside a paper.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.length === 0 && (
            <p className="text-[var(--muted)]">No notes available yet.</p>
          )}
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-surface rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                {post.date}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {post.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(18,22,27,0.08)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
