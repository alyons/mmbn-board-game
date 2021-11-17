const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../site/**/*.stories.mdx',
    '../site/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essential',
    '@react-theming/storybook-addon'
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        }
      },
      // module: {
      //   ...config.module,
      //   rules: [
      //     ...config.module.rules,
      //     {
      //       test: /\.(ico|svg|jpg|jpeg|png|webm|mp4|avif|webp)$/,
      //       loader: 'file-loader'
      //     }
      //   ]
      // }
    }
  }
};
