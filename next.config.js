/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // src/pages 폴더를 제외하고 app 폴더만 사용
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Cloudflare Pages 호환성 - static export 사용
  output: 'export',
  trailingSlash: true,
  // 정적 파일 최적화
  compress: false, // static export에서는 compress 불가
  // 환경 변수
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://donworry.kr',
  },
};

module.exports = nextConfig;
