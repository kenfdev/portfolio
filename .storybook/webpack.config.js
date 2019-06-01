const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');
const rootPath = path.resolve(__dirname, '../.');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // Extend defaultConfig as you need.
  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          // enable CSS Modules
          modules: true
        }
      },
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../')
  });

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.stories\.ts$/,
    loader: '@storybook/addon-storysource/loader',
    enforce: 'pre'
  });

  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.html'
  );

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  // Return the altered config
  return config;
};
