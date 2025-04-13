export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Hi, I’m Yanjun Chen.
      </h1>
      <p className="text-lg text-gray-600">
        PhD in RLHF & Embodied AI. | INTJ. Builder of thinking agents.
      </p>
      <p className="italic text-gray-500">Let’s explore minds that learn.</p>

      <div className="flex space-x-4 pt-6">
        <a
          href="#contact"
          className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
          target="_blank"
        >
          View CV
        </a>
      </div>
    </section>
  );
}
