/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import Vue2 from '@vitejs/plugin-vue2';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [Vue2(), Pages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
});
