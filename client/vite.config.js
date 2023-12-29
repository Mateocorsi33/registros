// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que esté apuntando al directorio correcto
    assetsDir: '.',
  },
  css: {
    postcss: './postcss.config.js',
  },
});


// outDir: '../public/client',