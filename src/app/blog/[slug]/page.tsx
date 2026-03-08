import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import "highlight.js/styles/github.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/data/blogs");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
  return files.map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
}

function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), "src/data/blogs", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(content);

  return {
    metadata: data,
    contentHtml: processed.toString(),
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return notFound();

  const { metadata, contentHtml } = post;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <article className="space-y-8">
        <header className="border-b border-[var(--line)] pb-8">
          <Link
            href="/blog"
            className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Back to notes
          </Link>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] text-[var(--foreground)]">
            {metadata.title}
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)]">{metadata.date}</p>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
