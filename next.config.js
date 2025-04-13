/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // 防止 export 时出错
    },
    trailingSlash: true, // 兼容 GitHub Pages 的静态路径
  };
  
  module.exports = nextConfig;
  