import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import "highlight.js/styles/github.css"; // ✅ 可替换为 atom-one-dark.css

// ✅ Props 接口（Next.js 15）
interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ 生成所有静态路径
export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/data/blogs");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
  return files.map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
}

// ✅ 读取并转换 markdown
function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), "src/data/blogs", slug + ".md");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        properties: { className: ["anchor"] },
      }
    )
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(content);

  return {
    metadata: data,
    contentHtml: processed.toString(),
  };
}

// ✅ 渲染页面
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return notFound();

  const { metadata, contentHtml } = post;

  return (
    <main className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-12 space-y-12 md:space-y-0 md:space-x-8 animate-fade-in">
      {/* ✅ 左侧目录占位（未来可动态构建） */}
      <aside className="hidden md:block w-64 sticky top-24 self-start text-sm text-gray-500">
        <p className="mb-3 font-semibold text-gray-700">📚 Table of Contents</p>
        <ul className="space-y-2">
          {/* 🚧 后续可通过 rehype-toc 构建真正的 TOC */}
          <li><a href="#background" className="hover:underline">🧩 Background</a></li>
          <li><a href="#experiment-design" className="hover:underline">🧪 Experiment</a></li>
          <li><a href="#key-findings" className="hover:underline">📈 Findings</a></li>
          <li><a href="#takeaway" className="hover:underline">💡 Takeaway</a></li>
        </ul>
      </aside>

      {/* ✅ 正文内容区 */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        {/* ✅ 标题 + 日期 */}
        <h1 className="text-3xl font-bold mb-1">{metadata.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{metadata.date}</p>

        {/* ✅ 插入 Markdown 渲染内容 */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* ✅ 推荐阅读（可后续替换为动态推荐） */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold mb-2">👀 You might also like:</h2>
          <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
            <li><a href="/blog/rlhf-philosophy" className="hover:underline">RLHF isn’t optimization, it’s dialogue</a></li>
            <li><a href="/blog/embodied-cognition" className="hover:underline">Why AI needs bodies to think</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
