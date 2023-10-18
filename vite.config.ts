import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://egordidenko.github.io/webcomponents-to-react',
  plugins: [react()],
});
