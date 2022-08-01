import path from "path";
import { defineConfig } from "vite";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@app": `${pathSrc}/main.ts`,
      "@scenes": `${pathSrc}/scenes`,
      "@entities": `${pathSrc}/entities`,
    },
  },
});
