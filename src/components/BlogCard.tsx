import Link from "next/link";

export interface BlogCardProps {
  slug: string;               // ✅ markdown 文件名（不含后缀）
  title: string;              // ✅ 博客标题
  date: string;               // ✅ 发布时间
  summary: string;            // ✅ 摘要
  tags?: string[];            // ✅ 可选标签数组
}

// ✅ 博客卡片组件（首页或列表页中使用）
export default function BlogCard({
  slug,
  title,
  date,
  summary,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-6 border rounded-xl bg-white space-y-3 shadow-sm hover:shadow-md transition cursor-pointer group">
        {/* ✅ 标题 */}
        <h3 className="text-xl font-semibold group-hover:text-blue-700 transition">{title}</h3>

        {/* ✅ 日期 */}
        <p className="text-sm text-gray-400">{date}</p>

        {/* ✅ 摘要 */}
        <p className="text-gray-700 text-sm">{summary}</p>

        {/* ✅ 标签展示 */}
        {tags && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ✅ 内部跳转提示 */}
        <p className="text-sm text-blue-600 pt-2 group-hover:underline inline-block">
          Read more →
        </p>
      </div>
    </Link>
  );
}
