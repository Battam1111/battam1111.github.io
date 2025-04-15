// ✅ BlogSection.tsx - 重构版（视觉、结构、行为全面升级）

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "./BlogCard";
import Link from "next/link";

// ✅ 接口：博客元数据
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

// ✅ 可传参的博客获取函数（默认取 4 篇）
function getAllBlogMetadata(limit: number = 4): BlogPost[] {
  const dir = path.join(process.cwd(), "src/data/blogs");
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => {
      const aContent = fs.readFileSync(path.join(dir, a), "utf-8");
      const bContent = fs.readFileSync(path.join(dir, b), "utf-8");
      const aDate = new Date(matter(aContent).data.date).getTime();
      const bDate = new Date(matter(bContent).data.date).getTime();
      return bDate - aDate; // 最新优先
    });

  return files.slice(0, limit).map((file) => {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(content);

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
    };
  });
}

// ✅ BlogSection 主组件
export default function BlogSection() {
  const posts = getAllBlogMetadata();

  return (
    <section id="blog" className="space-y-8 animate-fade-in">
      {/* ✅ 主标题 */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold border-b pb-2">📝 Blog</h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          View All →
        </Link>
      </div>

      {/* ✅ 卡片列表区域 */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length === 0 && (
          <p className="text-gray-500 col-span-2">No blog posts found.</p>
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
