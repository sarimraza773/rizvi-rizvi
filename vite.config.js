import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use BASE_PATH for GitHub Pages project sites (e.g., "/repo-name/").
// Defaults to "/" for local dev and deployments at the domain root.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
});
