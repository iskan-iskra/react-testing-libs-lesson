import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Убедитесь, что здесь указано 'jsdom'
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "**/*.test-vite.js"],
    },
  },
});
