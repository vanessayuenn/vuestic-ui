import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookVuePlugin } from '@storybook/vue3-vite/vite-plugin'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'yarn storybook',
      }),
      storybookVuePlugin(),
    ],
    test: {
      // Glob pattern to find story files
      include: ['./src/**/*.stories.?(m)[jt]s?(x)'],
      exclude: ['./src/**/*.spec.ts'],
      // Enable browser mode
      browser: {
        enabled: true,
        name: 'chromium',
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
      },
      // Speed up tests and better match how they run in Storybook itself
      // https://vitest.dev/config/#isolate
      // Consider removing this if you have flaky tests
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  })
)
