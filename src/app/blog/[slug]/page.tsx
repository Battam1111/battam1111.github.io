import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

/**
 * 注意：在 Next.js 15 中，params 被视为异步。
 * 为了兼容 `output: 'export'` 并避免 `params.slug` 报错，
 * 我们采用「同步 + 传递 Promise<{slug: string}> + await params」的写法。
 */
interface Props {
  // ✅ params 为 Promise<{ slug: string }>
  params: Promise<{ slug: string }>;
}

/**
 * ============================
 *  1) 生成静态路由 (slug)
 * ============================
 */
export function generateStaticParams() {
  // ✅ 读取 /src/data/blogs 下所有 .md 文件，并生成 slug
  const blogDir = path.join(process.cwd(), "src/data/blogs");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

/**
 * ============================
 *  2) 同步 处理 Markdown
 * ============================
 *
 * 使用 remark + rehype 的 同步 pipeline: .processSync()
 * 这样就能保证在这里无 async/await，完全本地解析
 * 且与 `output: 'export'` 静态模式兼容。
 */

// 🏷 相关 remark/rehype 插件 (需在 package.json 安装)
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

// ✅ 引入高亮样式 (可换其他主题，如 `atom-one-dark.css`)
import "highlight.js/styles/github.css";

/**
 * 同步读取 + 转换 MD
 */
function getPostDataSync(slug: string) {
  // 拼接绝对路径
  const filePath = path.join(process.cwd(), "src/data/blogs", slug + ".md");
  // 文件不存在则返回 null
  if (!fs.existsSync(filePath)) return null;

  // 读取文件并分离 frontmatter
  const rawFile = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawFile);

  // remark + rehype 同步方式: .processSync()
  const processed = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug) // 标题加 id
    .use(
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        // 这段 className: ["anchor"] 便于自定义样式
        properties: { className: ["anchor"] },
      },
    )
    .use(rehypeHighlight) // 代码块高亮
    .use(rehypeStringify)
    .processSync(content); // 同步处理

  const contentHtml = processed.toString();

  return {
    metadata: data,
    contentHtml,
  };
}

/**
 * ============================
 *  3) 页面组件
 * ============================
 *
 * 强调：在 Next.js 15 中，参数 `params` 被视为异步 => Promise<{slug}>
 * 所以必须写 async function + await params，方可避免 "should be awaited" 错误。
 */
export default async function BlogDetailPage({ params }: Props) {
  // ✅ 先 await params 以取得 slug
  const localParams = await params;
  const { slug } = localParams;

  // 然后同步读取 .md
  const post = getPostDataSync(slug);
  if (!post) return notFound();

  const { metadata, contentHtml } = post;
  if (!metadata) return notFound();

  // 🔑 这里可以加更多元数据
  // (如果想SEO可在 layout.tsx / metadata.ts 里做)
  
  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-12 px-4">
      {/* 标题 + 日期 */}
      <h1 className="text-3xl font-bold">{metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{metadata.date}</p>

      {/* Markdown 转换后的 HTML */}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/**
       * ⚠️ 样式请写在 globals.css 或 tailwind 中
       * 例如 globals.css:
       *
       * pre code {
       *   display: block;
       *   overflow-x: auto;
       *   padding: 1rem;
       *   background: #f2f2f2;
       *   border-radius: 4px;
       * }
       *
       * h2:hover .anchor {
       *   opacity: 1;
       * }
       * .anchor {
       *   margin-left: 0.5rem;
       *   opacity: 0.4;
       *   transition: opacity 0.2s;
       * }
       * ...
       */}
    </article>
  );
}
