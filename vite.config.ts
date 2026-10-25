import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const onGitHubActions = (globalThis as { process?: { env?: { GITHUB_ACTIONS?: string } } }).process?.env
  ?.GITHUB_ACTIONS;

export default defineConfig({
  base: onGitHubActions ? "/" : "/",
  plugins: [react(), tailwindcss()],
});
