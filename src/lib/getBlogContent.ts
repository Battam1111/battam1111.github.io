import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

// ✅ 获取指定 slug 对应的博客内容并转为 HTML
export async function getBlogContent(slug: string) {
  // ✅ 拼接 markdown 文件路径
  const filepath = path.join(process.cwd(), "src/data/blogs", `${slug}.md`);

  // ✅ 读取 markdown 文件
  const rawFile = fs.readFileSync(filepath, "utf-8");

  // ✅ 分离 frontmatter 和正文内容
  const { data, content } = matter(rawFile);

  // ✅ 使用 remark + rehype 转换 Markdown -> HTML
  const processed = await remark()
    .use(remarkGfm) // ✅ GitHub 风格支持
    .use(remarkRehype) // ✅ 转为 HTML AST
    .use(rehypeSlug) // ✅ 标题加 id
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap", // ✅ 自动为标题添加锚点链接
      properties: {
        className: ["anchor"],
      },
    })
    .use(rehypeHighlight) // ✅ 自动代码高亮（根据语言）
    .use(rehypeStringify) // ✅ 输出 HTML 字符串
    .process(content);

  // ✅ 返回 metadata 和 HTML 字符串
  return {
    metadata: data,
    contentHtml: processed.toString(),
  };
}
