// ✅ AboutMeSection.tsx - 全面优化版本（语义+视觉+结构+动画）

export default function AboutMeSection() {
  // ✅ 兴趣爱好列表（可扩展）
  const interests = [
    "Table Tennis 🏓",
    "Video Games 🎮",
    "KTV 🎤",
    "Science & Tech 📖",
  ];

  // ✅ 基本信息卡片（Location / MBTI / Education）
  const basicInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Based in Hong Kong",
    },
    {
      icon: "🎯",
      label: "MBTI",
      value: "INTJ – The Architect",
    },
    {
      icon: "🎓",
      label: "Education",
      value: "PhD @ HK PolyU",
    },
  ];

  // ✅ 技能分类列表（语言 / 编程）
  const skillGroups = [
    {
      icon: "💻",
      label: "Programming",
      items: ["Python 🐍", "C/C++ ⚙️"],
    },
    {
      icon: "🌐",
      label: "Languages",
      items: ["Chinese 🇨🇳", "English 🇬🇧", "Japanese 🇯🇵"],
    },
  ];

  return (
    <section
      id="about"
      className="space-y-12 animate-fade-in"
    >
      {/* ✅ 主标题 */}
      <h2 className="text-3xl font-bold border-b pb-2">About Me</h2>

      {/* ✅ 简介段落 */}
      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
        I&apos;m a PhD student based in Hong Kong 🇭🇰, originally from China 🇨🇳.
        As an INTJ thinker and lifelong learner, I explore the frontiers of
        Artificial Intelligence with a special focus on RLHF (Reinforcement
        Learning with Human Feedback) and Embodied AI 🤖. My mind is always
        seeking structure, clarity, and elegant solutions.
      </p>

      {/* ✅ 第一行：基本信息卡片（Location / MBTI / Education） */}
      <div className="grid md:grid-cols-3 gap-6">
        {basicInfo.map(({ icon, label, value }) => (
          <div
            key={label}
            className="p-5 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition group"
          >
            <h3 className="text-lg font-semibold flex items-center gap-1 group-hover:text-blue-700 transition">
              {icon} {label}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{value}</p>
          </div>
        ))}
      </div>

      {/* ✅ 第二行：技能组（编程 & 语言） */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map(({ icon, label, items }) => (
          <div
            key={label}
            className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition group"
          >
            <h3 className="text-lg font-semibold flex items-center gap-1 group-hover:text-blue-700 transition">
              {icon} {label}
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ✅ 第三行：兴趣爱好标签 */}
      <div>
        <h3 className="text-lg font-semibold mb-3">🎨 Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full text-sm text-gray-700 bg-gray-100 border hover:bg-gray-200 transition"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
