import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-calculator/',   // 設定為您的 GitHub 儲存庫名稱
})
