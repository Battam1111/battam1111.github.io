"use client";

// ✅ 引入必要的 Hooks 和库
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";

// ✅ 头像轮播图路径列表（确保图片放在 public/PersonalAlbums 目录）
const profileImages = [
  "/PersonalAlbums/pic1.jpg",
  "/PersonalAlbums/pic2.jpg",
  "/PersonalAlbums/pic3.jpg",
];

// ✅ HeroSection 主组件
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // 当前展示的图像索引
  const touchStartX = useRef<number | null>(null); // 手势滑动起点 X 坐标
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 轮播定时器

  // ✅ 初始化粒子系统（tsparticles）
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  // ✅ 自动轮播效果，每 6 秒切换一张图片
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // ✅ 手势交互：记录起点
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // ✅ 手势交互：判断滑动方向并切换图片
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? goToPrevImage() : goToNextImage();
    }
    touchStartX.current = null;
  };

  // ✅ 向前切换图像
  const goToNextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % profileImages.length);

  // ✅ 向后切换图像
  const goToPrevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? profileImages.length - 1 : prev - 1
    );

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-16 space-y-12 md:space-y-0 animate-fade-in"
    >
      {/* ✅ 粒子背景层（科技感增强） */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 60 },
            color: { value: "#c084fc" },
            links: { enable: true, color: "#a855f7", distance: 120 },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
            opacity: { value: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* ✅ 左侧介绍文字区域 */}
      <div className="flex-1 space-y-5 text-center md:text-left z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Hi, I’m{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Yanjun Chen
          </span>
          .
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          PhD in <strong>RLHF</strong> & <strong>Embodied AI</strong>. | INTJ.
          <br />
          <em className="text-gray-500 dark:text-gray-400">
            Builder of thinking agents.
          </em>
        </p>

        <p className="text-sm italic text-gray-500 dark:text-gray-400">
          Let’s explore minds that learn.
        </p>

        {/* ✅ CTA 按钮组 */}
        <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-900 hover:text-white transition dark:border-gray-500 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-full border border-blue-500 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-black"
          >
            View CV
          </a>
        </div>
      </div>

      {/* ✅ 右侧头像 + 动效 + 立体背景 */}
      <div className="flex-1 flex flex-col items-center relative z-10">
        {/* ✅ 椭圆容器 + 模糊背景 + 光晕效果 */}
        <div
          className="relative w-[260px] sm:w-[300px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[42%/50%] border-4 border-white dark:border-gray-700 shadow-2xl backdrop-blur-md bg-white/10 backdrop-saturate-200 cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            clickX < rect.width / 2 ? goToPrevImage() : goToNextImage();
          }}
        >
          {/* ✅ 动态切换 + 镜头推拉感（framer-motion） */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={profileImages[currentIndex]}
                alt={`Yanjun Chen ${currentIndex + 1}`}
                fill
                sizes="100%"
                // ✅ 关键：顶部对齐，保证头像不会「下移」，避免上方留白
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ✅ 指示器小圆点 */}
        <div className="flex space-x-2 mt-4">
          {profileImages.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
