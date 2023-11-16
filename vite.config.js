import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "client/src",
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    port: 4000,
  },
  build: {
    outDir: "client/dist",
    sourcemap: true,
  },
});
