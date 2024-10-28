import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
import compression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
   // Compresión Brotli
   compression({
    algorithm: 'brotliCompress',
    ext: '.br' // Archivos con extensión .br para Brotli
  }),
  // Compresión gzip
  compression({
    algorithm: 'gzip',
    ext: '.gz' // Archivos con extensión .gz para gzip
  }),
    Inspect()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
});