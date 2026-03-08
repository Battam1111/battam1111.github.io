import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogCard from "./BlogCard";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

function getAllBlogMetadata(limit: number = 4): BlogPost[] {
  const dir = path.join(process.cwd(), "src/data/blogs");
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort((left, right) => {
      const leftDate = new Date(
        matter(fs.readFileSync(path.join(dir, left), "utf-8")).data.date,
      ).getTime();
      const rightDate = new Date(
        matter(fs.readFileSync(path.join(dir, right), "utf-8")).data.date,
      ).getTime();

      return rightDate - leftDate;
    });

  return files.slice(0, limit).map((file) => {
    const { data } = matter(fs.readFileSync(path.join(dir, file), "utf-8"));

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
    };
  });
}

export default function BlogSection() {
  const posts = getAllBlogMetadata();

  return (
    <section id="notes" className="section-shell space-y-8">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-2">
          <p className="eyebrow">Writing</p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Selected writing and research notes
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {posts.length === 0 && (
          <p className="text-[var(--muted)]">No notes available yet.</p>
        )}
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            summary={post.summary}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
}
