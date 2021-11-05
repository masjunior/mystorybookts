module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    // '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states'
  ],
  'typescript': {
    'reactDocgen': 'react-docgen-typescript',
    'reactDocgenTypescriptOptions': {
      'compilerOptions': {
        'allowSyntheticDefaultImports': false,
        'esModuleInterop': false,
      },
    }
  }
}