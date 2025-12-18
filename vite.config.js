import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set the base path to '/' by default.  If you deploy to GitHub Pages under
  base: '/',
});
