import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "./BlogCard";

// ✅ 本地读取 Markdown frontmatter 的函数
function getAllBlogMetadata() {
  const dir = path.join(process.cwd(), "src/data/blogs");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
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

// ✅ 主页中的博客区域
export default function BlogSection() {
  const posts = getAllBlogMetadata();

  return (
    <section className="space-y-8" id="blog">
      <h2 className="text-3xl font-semibold border-b pb-2">Blog</h2>

      <div className="grid md:grid-cols-2 gap-8">
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
