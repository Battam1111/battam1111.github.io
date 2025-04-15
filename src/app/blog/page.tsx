// ✅ BlogPage.tsx — 极致优化版本：结构清晰、视觉美学、导航导向

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// ✅ 博客元数据类型
interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

// ✅ 获取博客 metadata（支持排序）
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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 按时间降序
}

// ✅ 主页面组件
export default function BlogPage() {
  const posts = getAllPostMetadata();

  // ✅ 获取所有唯一标签
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags || []))
  );

  return (
    <main className="space-y-10 max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      {/* ✅ 标题部分 */}
      <header className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">📝 Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm">
          Thoughts, experiments, and insights across RLHF, LLMs, Embodied AI, and beyond.
        </p>
      </header>

      {/* ✅ 标签导航 */}
      <section className="flex flex-wrap gap-2">
        <span className="text-sm text-gray-500 mr-2 pt-1">Tags:</span>
        {allTags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </section>

      {/* ✅ 博客列表 */}
      <section className="grid md:grid-cols-2 gap-8">
        {posts.length === 0 && (
          <p className="text-gray-500 col-span-2">No blog posts found.</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer space-y-2 group"
          >
            <h2 className="text-xl font-semibold group-hover:text-blue-700">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-blue-600 group-hover:underline pt-1">
              Read more →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
