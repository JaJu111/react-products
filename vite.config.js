import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.NODE_ENV === 'production' ? '/react-products/' : '/';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'es2020', // Совместимость с Node.js 14
  },
  server: {
    port: 3000, // Укажите нужный порт
  },
  base: basePath, // Укажите имя репозитория
});