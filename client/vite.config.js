// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: 'src/main.jsx' // Cambia esto por la ruta correcta de tu archivo de entrada
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
});
