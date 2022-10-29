/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vitest/config'
import {mergeConfig} from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./test/setup-test-env.ts'],
    },
  })
)
