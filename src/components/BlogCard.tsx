// ✅ BlogCard.tsx - 极致视觉 + 信息引导 + 动效优化版本

import Link from "next/link";

export interface BlogCardProps {
  slug: string;               // ✅ 博客标识 slug
  title: string;              // ✅ 博客标题
  date: string;               // ✅ 发布时间
  summary: string;            // ✅ 简要摘要
  tags?: string[];            // ✅ 可选标签列表
}

export default function BlogCard({
  slug,
  title,
  date,
  summary,
  tags = [],
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer space-y-4 hover:-translate-y-1">
        {/* ✅ 标题 */}
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-700 transition-colors">
          {title}
        </h3>

        {/* ✅ 日期 + 标签 */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs text-gray-400">+{tags.length - 3}</span>
              )}
            </div>
          )}
        </div>

        {/* ✅ 分隔线 */}
        <div className="h-[1px] bg-gradient-to-r from-gray-200/70 to-transparent my-1"></div>

        {/* ✅ 摘要内容（最多显示 3 行） */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>

        {/* ✅ “Read More” 行 */}
        <div className="pt-2 flex items-center text-sm text-blue-600 group-hover:text-blue-800 transition">
          Read more
          <svg
            className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
