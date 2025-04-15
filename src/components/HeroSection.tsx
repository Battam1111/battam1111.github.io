"use client";

// ✅ 引入核心 hook
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ✅ 头像轮播图路径（建议使用优化格式 jpg/webp）
const profileImages = [
  "/PersonalAlbums/pic1.jpg",
  "/PersonalAlbums/pic2.jpg",
  "/PersonalAlbums/pic3.jpg",
];

// ✅ 主组件
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ 自动轮播切换
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // ✅ 手势滑动处理
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? goToPrevImage() : goToNextImage();
    }
    touchStartX.current = null;
  };

  const goToNextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % profileImages.length);
  const goToPrevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? profileImages.length - 1 : prev - 1
    );

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-12 md:space-y-0 animate-fade-in"
    >
      {/* ✅ 左侧文字区域 */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
          Hi, I’m <span className="text-purple-600 dark:text-purple-400">Yanjun Chen</span>.
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          PhD in <strong>RLHF</strong> & <strong>Embodied AI</strong>. | INTJ.
          <br />
          <em className="text-gray-500 dark:text-gray-400">Builder of thinking agents.</em>
        </p>

        <p className="text-sm italic text-gray-500 dark:text-gray-400">
          Let’s explore minds that learn.
        </p>

        {/* ✅ CTA 按钮区域 */}
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

      {/* ✅ 右侧图像轮播区域 */}
      <div className="flex-1 flex flex-col items-center relative">
        <div
          className="relative w-[300px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg hover:shadow-xl cursor-pointer transition-all dark:border-gray-700"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            clickX < rect.width / 2 ? goToPrevImage() : goToNextImage();
          }}
        >
          {profileImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Yanjun Chen ${index + 1}`}
              fill
              sizes="300px"
              className={`absolute object-contain p-4 top-0 left-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* ✅ 圆点指示器 */}
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
