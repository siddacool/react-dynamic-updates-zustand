import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import chunkNames from './vite-chunk-names';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: chunkNames,
      },
    },
  },
});
