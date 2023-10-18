import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: UserConfigExport = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin()
  ],
  resolve: {
    alias: {
      '~/*': path.resolve(__dirname, './app/*'),
      'test-utils': path.resolve(__dirname, './test/test-utils.tsx'),
      'global-css': path.resolve(__dirname, './app/styles/global.css.ts'),
    },
  },
})

export default config
