/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 启用静态导出
    images: {
      unoptimized: true, // 关闭 image 优化，适配 GitHub Pages
    },
    trailingSlash: true, // 每个页面结尾添加 /，避免 GitHub Pages 路径错误
  };
  
  module.exports = nextConfig;
  