
"use client";

import { useState, useMemo, useEffect } from "react";
import researchData from "@/data/research";
import ResearchCard from "./ResearchCard";
import { Bar } from "react-chartjs-2";
import { Search } from "lucide-react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function ResearchSection() {
  // ✅ 本地状态
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // ✅ 修复 hydration 的关键：仅在客户端加载图表
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ 所有唯一标签（缓存计算）
  const allTags = useMemo(() => {
    return Array.from(new Set(researchData.flatMap((item) => item.tags)));
  }, []);

  // ✅ 搜索 & 标签筛选逻辑
  const filtered = useMemo(() => {
    return researchData.filter((item) => {
      const inTag = activeTag ? item.tags.includes(activeTag) : true;
      const inText =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      return inTag && inText;
    });
  }, [query, activeTag]);

  // ✅ 标签频率统计（缓存）
  const tagFrequency = useMemo(() => {
    const count: Record<string, number> = {};
    researchData.forEach((item) =>
      item.tags.forEach((tag) => {
        count[tag] = (count[tag] || 0) + 1;
      })
    );
    return count;
  }, []);

  return (
    <section className="space-y-12" id="research">
      <h2 className="text-3xl font-semibold border-b pb-2">Research</h2>

      {/* ✅ 搜索框 */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by keyword or title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ 标签筛选按钮 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs px-3 py-1 rounded-full border ${
            activeTag === null
              ? "bg-black text-white"
              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-3 py-1 rounded-full border ${
              activeTag === tag
                ? "bg-black text-white"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ✅ 图表区域：仅客户端渲染 */}
      {isClient && (
        <div className="max-w-3xl mx-auto bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Research Topic Distribution
          </h3>
          <Bar
            data={{
              labels: Object.keys(tagFrequency),
              datasets: [
                {
                  label: "Topic Frequency",
                  data: Object.values(tagFrequency),
                  backgroundColor: Object.keys(tagFrequency).map((tag) => {
                    const tagColorMap: Record<string, string> = {
                      RLHF: "#a78bfa",
                      CoT: "#60a5fa",
                      "Chain-of-Thought": "#60a5fa",
                      Multimodal: "#f472b6",
                      LLMs: "#facc15",
                      SAC: "#34d399",
                      "Graph Networks": "#2dd4bf",
                      "Multi-agent RL": "#fb923c",
                    };
                    return tagColorMap[tag] || "#e5e7eb";
                  }),
                  borderRadius: 6,
                  barThickness: 26,
                },
              ],
            }}
            options={{
              animation: { duration: 1000, easing: "easeOutQuart" },
              plugins: {
                tooltip: {
                  backgroundColor: "#111827",
                  titleColor: "#ffffff",
                  bodyColor: "#e5e7eb",
                },
                legend: { display: false },
              },
              scales: {
                x: {
                  ticks: { color: "#6b7280", font: { size: 12 } },
                  grid: {
                    color: "#e5e7eb",
                    // @ts-ignore ✅ Chart.js 实际支持，但类型中未声明
                    borderDash: [4, 4],
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                    color: "#6b7280",
                    font: { size: 12 },
                  },
                  grid: {
                    color: "#f3f4f6",
                    drawTicks: false,
                  },
                },
              },
            }}
          />
        </div>
      )}

      {/* ✅ 研究成果卡片列表 */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.length === 0 && (
          <p className="text-gray-500 col-span-2">No results found.</p>
        )}
        {filtered.map((item) => (
          <ResearchCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}