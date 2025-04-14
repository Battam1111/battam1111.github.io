import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// ✅ 定义元信息类型
interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

// ✅ 获取所有博客 metadata（本地文件 -> Markdown frontmatter）
function getAllPostMetadata(): BlogMeta[] {
  const blogDir = path.join(process.cwd(), "src/data/blogs");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".md"))
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
    });
}

// ✅ 页面组件
export default function BlogPage() {
  const posts = getAllPostMetadata();

  return (
    <main className="space-y-12 max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold border-b pb-4">📝 Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.length === 0 && (
          <p className="text-gray-500 col-span-2">No blog posts found.</p>
        )}

        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer space-y-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700 text-sm">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
