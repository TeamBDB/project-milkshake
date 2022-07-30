import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: {
      "@app": `${pathSrc}/App.vue`,
      "@scenes": `${pathSrc}/scenes`,
    },
  },
  plugins: [vue()],
  server: {
    port: 3000,
  },
});
