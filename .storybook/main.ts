import {UserConfig, mergeConfig} from 'vite'

import type {StorybookViteConfig} from '@storybook/builder-vite'

const config: StorybookViteConfig = {
  stories: ['../app/**/*.stories.mdx', '../app/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: ((await import('../vite.config')).default as UserConfig).resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [],
      },
    })
  },
  features: {
    interactionsDebugger: true, // Enable playback controls
  },
}

export default config