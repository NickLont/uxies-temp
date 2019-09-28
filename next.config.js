// Next.js automatically reads all configurations from this file
/* eslint-disable */
const composePlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

module.exports = composePlugins([
  [withCss],
  [withSass, {
    webpack (config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          // If the file size is equal or greater than the limit file-loader will be used (by default) and all query parameters are passed to it
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })

      return config
    }
  }]
])
