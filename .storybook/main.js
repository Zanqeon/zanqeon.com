const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.js',
    './styleguide/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]' // this gives readable classnames (storybook only)
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../src'),
                path.resolve(__dirname, './styleguide')
              ]
            }
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            sourceMap: true,
            resources: path.resolve(__dirname, '../src/assets/scss/variables/index.scss')
          },
        }
      ]
    })

    return config
  }
}
