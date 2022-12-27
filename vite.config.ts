import type {UserConfigExport} from 'vite'
import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: UserConfigExport = defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'test-utils': path.resolve(__dirname, './test/test-utils.tsx'),
      '~/*': path.resolve(__dirname, './app/*'),
    },
  },
})

export default config
