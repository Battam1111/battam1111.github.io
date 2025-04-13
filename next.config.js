/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 新版静态导出方式
  images: {
    unoptimized: true, // ✅ 兼容 GitHub Pages，无需 image optimization
  },
  trailingSlash: true // ✅ GitHub Pages 推荐加 / 结尾
};

module.exports = nextConfig;
