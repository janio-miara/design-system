/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import css from 'rollup-plugin-import-css'
import image from '@rollup/plugin-image'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
    dts(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@fortawesome/free-solid-svg-icons',
        'date-fns/locale',
        'polished',
        'styled-components',
        /react.*/,
        '@fortawesome/react-fontawesome',
      ],
      plugins: [image(), css(), json(), typescript(), terser()],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
