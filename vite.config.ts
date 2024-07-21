import react from "@vitejs/plugin-react-swc";
import postcssNesting from "postcss-nesting";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
