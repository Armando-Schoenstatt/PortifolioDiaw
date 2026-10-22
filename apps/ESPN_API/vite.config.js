import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ESPN_PATH, handleEspn } from "./api/_espn.js";

function espnApi() {
  const middleware = (req, res, next) => {
    if (new URL(req.url, "http://localhost").pathname !== ESPN_PATH) return next();
    handleEspn(req, res).catch(next);
  };

  return {
    name: "espn-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), espnApi()],
  build: {
    emptyOutDir: true,
    outDir: "../../dist/apps/ESPN_API",
  },
});
