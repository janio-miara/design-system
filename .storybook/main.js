module.exports = {
  staticDir: ['../public'],
  stories: ['../src/components/**/stories.tsx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
}
