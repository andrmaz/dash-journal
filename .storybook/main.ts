import {mergeConfig} from 'vite'
import {StorybookConfig} from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.mdx', '../app/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],
  typescript: {
    check: false,
    /* checkOptions: {}, */
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {},
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: {
        alias: {
          'test-utils': path.resolve(__dirname, './test/test-utils.tsx'),
          '~/*': path.resolve(__dirname, './app/*'),
        },
      },
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [],
      },
    })
  },
  /* features: {
    interactionsDebugger: true, // Enable playback controls
  }, */
  docs: {
    autodocs: true,
  },
}
export default config
