import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 코드 스플리팅 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI 라이브러리
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
          ],
          // 차트 및 데이터 시각화
          'chart-vendor': ['recharts'],
          // 폼 관련
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    // 청크 크기 경고 임계값 증가 (큰 라이브러리 포함)
    chunkSizeWarningLimit: 1000,
    // CSS 코드 스플리팅
    cssCodeSplit: true,
    // 소스맵 설정
    // 프로덕션: false (보안 및 성능)
    // 개발: true (디버깅)
    // 'hidden' 옵션: 소스맵 생성하지만 .map 파일은 서버에만 저장 (보안 유지)
    sourcemap: false, // 프로덕션에서는 비활성화 (보안)
    // Minify 설정 (esbuild 사용, 더 빠름)
    minify: 'esbuild',
  },
  // 정적 에셋 최적화
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp'],
});
