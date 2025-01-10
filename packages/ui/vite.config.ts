import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false, // *.d.tsを消さないため
    lib: {
      entry: resolve(__dirname, "src/main.ts"), // Entry pointとなるファイルを指定
      formats: ["es"], // FormatはESMに限定
    },
    rollupOptions: {
      external: ["vue"], // Vueをライブラリのバンドルに含めないようにする
    },
  },
});
