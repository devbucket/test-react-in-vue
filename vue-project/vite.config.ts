import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      root: "./",
    }),
    vue(),
  ],
});
