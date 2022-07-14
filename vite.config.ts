import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx() //插件使用
  ],
  resolve: { // 配置别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8088
  }
})
