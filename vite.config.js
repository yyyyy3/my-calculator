import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/night-owl/',   // 設定為您的 GitHub 儲存庫名稱
})