import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
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
        manualChunks: (id) => {
          // node_modules 분리
          if (id.includes('node_modules')) {
            // React 코어 - 단일 청크로 유지하여 createContext 에러 방지
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Radix UI (큰 라이브러리)
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            // 차트 (사용 빈도 낮음)
            if (id.includes('recharts')) {
              return 'chart-vendor';
            }
            // 폼 관련
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'form-vendor';
            }
            // 기타 vendor
            return 'vendor';
          }
        },
      },
    },
    // 청크 크기 경고 임계값 (모바일 최적화)
    chunkSizeWarningLimit: 500,
    // CSS 코드 스플리팅
    cssCodeSplit: true,
    // 소스맵 설정
    sourcemap: false, // 프로덕션에서는 비활성화 (보안)
    // Minify 설정 (esbuild 사용, 더 빠름)
    minify: 'esbuild',
    // CommonJS 변환 최적화
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
  },
  // 정적 에셋 최적화
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp'],
});
