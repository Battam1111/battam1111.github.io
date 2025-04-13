export default function AboutMeSection() {
    return (
      <section className="space-y-8" id="about">
        <h2 className="text-3xl font-semibold border-b pb-2">About Me</h2>
  
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          I'm a PhD student based in Hong Kong 🇭🇰, originally from China 🇨🇳. As an INTJ thinker and lifelong learner,
          I explore the frontiers of Artificial Intelligence with a special focus on RLHF (Reinforcement Learning with
          Human Feedback) and Embodied AI 🤖. My mind is always seeking structure, clarity, and elegant solutions.
        </p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="text-lg font-medium">📍 Location</h3>
            <p className="text-gray-600">Based in Hong Kong</p>
          </div>
          <div className="p-4 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="text-lg font-medium">🎯 MBTI</h3>
            <p className="text-gray-600">INTJ – The Architect</p>
          </div>
          <div className="p-4 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="text-lg font-medium">🎓 Education</h3>
            <p className="text-gray-600">PhD @ HK PolyU</p>
          </div>
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-medium">💻 Programming</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Python 🐍</li>
              <li>C/C++ ⚙️</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-medium">🌐 Languages</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Chinese 🇨🇳</li>
              <li>English 🇬🇧</li>
              <li>Japanese 🇯🇵</li>
            </ul>
          </div>
        </div>
  
        <div>
          <h3 className="text-lg font-medium mb-2">🎨 Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["Table Tennis 🏓", "Video Games 🎮", "KTV 🎤", "Science & Tech 📖"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 rounded-full border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  