"use client";

// ✅ 引入图标（Lucide React 图标库）
import { ExternalLink, FileText, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

// ✅ 定义类型接口
interface ResearchCardProps {
  title: string;
  description: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
  arxivId?: string;
  published?: string;
  citationCount?: number;
}

// ✅ 标签颜色映射规则（可根据关键词匹配颜色）
const tagColorMap: { [key: string]: string } = {
  RLHF: "bg-purple-100 text-purple-700",
  "Chain-of-Thought": "bg-blue-100 text-blue-700",
  CoT: "bg-blue-100 text-blue-700",
  Multimodal: "bg-pink-100 text-pink-700",
  LLMs: "bg-yellow-100 text-yellow-800",
  SAC: "bg-green-100 text-green-800",
  "Multi-agent RL": "bg-orange-100 text-orange-800",
  "Graph Networks": "bg-teal-100 text-teal-800",
};

export default function ResearchCard({
  title,
  description,
  tags,
  pdfUrl,
  codeUrl,
  arxivId,
  published,
  citationCount,
}: ResearchCardProps) {
  // ✅ 折叠状态（初始从 localStorage 加载）
  const [expanded, setExpanded] = useState<boolean>(false); // 固定默认值 false

  // ✅ 组件挂载后读取 localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`research-expanded-${title}`);
      if (saved !== null) {
        setExpanded(saved === "true");
      }
    }
  }, [title]);
  
  // ✅ 同步折叠状态写入 localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`research-expanded-${title}`, expanded.toString());
    }
  }, [expanded, title]);

  // ✅ 摘要内容处理
  const shortDescription = description.slice(0, 180) + (description.length > 180 ? "..." : "");

  return (
    <div className="border p-6 rounded-xl shadow-sm bg-white space-y-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
      {/* ✅ 标题 */}
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>

      {/* ✅ 摘要区域 */}
      <div className="text-gray-700 leading-snug text-sm space-y-1">
        {expanded ? description : shortDescription}
        {description.length > 180 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-xs text-blue-600 hover:underline mt-1"
          >
            {expanded ? (
              <>
                <ChevronUp size={14} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                Show More
              </>
            )}
          </button>
        )}
      </div>

      {/* ✅ 标签区域 */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const color = tagColorMap[tag] || "bg-gray-100 text-gray-700";
          return (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded-full font-medium ${color}`}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* ✅ 链接按钮区域 */}
      <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
          >
            <FileText size={16} />
            PDF
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            className="flex items-center gap-1 text-green-600 hover:text-green-800 transition"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {arxivId && (
          <a
            href={`https://arxiv.org/abs/${arxivId}`}
            target="_blank"
            className="flex items-center gap-1 text-gray-600 hover:text-black transition"
          >
            <ExternalLink size={16} />
            arXiv
          </a>
        )}
      </div>

      {/* ✅ 元信息：发表时间 + 被引用次数 */}
      {(published || citationCount !== undefined) && (
        <div className="text-xs text-gray-500 pt-2 flex justify-between items-center">
          <span className="italic">{published}</span>
          {citationCount !== undefined && (
            <span
              className="hover:text-black transition"
              title={`Last citation update: ${new Date().getFullYear()}`}
            >
              Cited {citationCount}×
            </span>
          )}
        </div>
      )}
    </div>
  );
}
