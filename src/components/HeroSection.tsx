"use client";

// ✅ 导入 React hook
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ✅ 轮播图片路径（确保图片在 public/PersonalAlbums 中）
const profileImages = [
  "/PersonalAlbums/pic1.jpg",
  "/PersonalAlbums/pic2.jpg",
  "/PersonalAlbums/pic3.jpg",
];

// ✅ HeroSection 主组件
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // 当前图像索引
  const [, setIsTransitioning] = useState(false); // 控制动画
  const touchStartX = useRef<number | null>(null); // 手势起点
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 自动轮播定时器

  // ✅ 下一张图片
  const goToNextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % profileImages.length);
  };

  // ✅ 上一张图片
  const goToPrevImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? profileImages.length - 1 : prev - 1
    );
  };

  // ✅ 自动轮播启动
  useEffect(() => {
    intervalRef.current = setInterval(goToNextImage, 6000); // 每6秒切换
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // ✅ 清除动画标记
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // ✅ 触摸开始
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // ✅ 触摸结束
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      deltaX > 0 ? goToPrevImage() : goToNextImage();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-12 md:space-y-0 animate-fade-in"
    >
      {/* ✅ 左侧内容区 */}
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight dark:text-white">
          Hi, I’m <span className="text-purple-600">Yanjun Chen</span>.
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          PhD in <strong>RLHF</strong> & <strong>Embodied AI</strong>. | INTJ.
          <em className="text-gray-500 block">Builder of thinking agents.</em>
        </p>
        <p className="text-sm italic text-gray-500">
          Let’s explore minds that learn.
        </p>

        {/* ✅ CTA */}
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

      {/* ✅ 右侧图像区 */}
      <div className="flex-1 flex flex-col items-center relative">
        {/* ✅ 圆形图像容器（保持比例 + 居中） */}
        <div
          className="relative w-[300px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg hover:shadow-xl cursor-pointer transition-all dark:border-gray-600"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            clickX < rect.width / 2 ? goToPrevImage() : goToNextImage();
          }}
        >
          {/* ✅ 多张图片重叠，当前一张显示 */}
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
