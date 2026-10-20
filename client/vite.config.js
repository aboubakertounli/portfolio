import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const clientRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: clientRoot,
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://127.0.0.1:3001",
    },
  },
  build: {
    outDir: path.resolve(clientRoot, "../dist"),
    emptyOutDir: true,
  },
});
