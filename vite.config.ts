import vue from '@vitejs/plugin-vue';
import path from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  base: '/portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
