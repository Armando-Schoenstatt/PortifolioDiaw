import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../../dist/apps/ReactBits",
  },
  plugins: [react()],
});
