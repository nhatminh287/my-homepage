import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Cấu hình cổng (tuỳ chọn)
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
