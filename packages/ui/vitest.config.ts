import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookVuePlugin } from '@storybook/vue3-vite/vite-plugin'

export default mergeConfig(
  viteConfig as never,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'yarn storybook --ci',
      }),
      storybookVuePlugin(),
    ],
    test: {
      exclude: ['./src/**/*.spec.ts'],
      // Glob pattern to find story files
      include: ['./src/**/*.stories.?(m)[jt]s?(x)'],
      // Enable browser mode
      browser: {
        enabled: true,
        name: 'chromium',
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
      },
      // Disabling isolation is faster and similar to how tests are isolated in Storybook itself.
      // Consider removing this, if you have flaky tests.
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  }),
)
