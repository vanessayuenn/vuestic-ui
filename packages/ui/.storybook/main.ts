import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts"],
  staticDirs: ['public'],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },
  docs: {},
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
