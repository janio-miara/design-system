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
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { displayName: true, fileName: false }],
          ['babel-plugin-react-compiler'],
        ],
      },
    }),
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
    dts({ include: ['src', 'src/index.tsx'], insertTypesEntry: true, outDir: 'dist' }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
      plugins: [image(), css(), json(), typescript(), terser()],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
