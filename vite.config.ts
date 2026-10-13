import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static site: no backend, no environment variables, no secrets.
export default defineConfig({
  // GitHub Pages project sites live at /<repo-name>/ — must match the repo name exactly (case-sensitive).
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  build: { target: "es2020", sourcemap: false },
});
