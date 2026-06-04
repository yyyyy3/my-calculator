import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my-calculator/', // 這裡請再次確認是否與 GitHub 儲存庫名稱一致
  plugins: [vue()]
})