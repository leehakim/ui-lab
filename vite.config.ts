import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // 전역에서 사용할 SCSS 파일 경로를 지정합니다.
        // 이렇게 하면 모든 scss 파일에서 변수와 믹스인을 별도 import 없이 쓸 수 있습니다.
        additionalData: `@use "@/styles/_variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
