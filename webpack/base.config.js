const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const webpack = require('webpack')
const {resolve} = require('path')

const BUILD_DIR = resolve(__dirname, '../build')
const APP_DIR = resolve(__dirname, '../app')
const CONTENT_DIR = resolve(__dirname, '../content')

module.exports = function (env) {
  return {
    entry: [
      'react-hot-loader/patch',
      APP_DIR + '/index.js',
    ],

    output: {
      path: BUILD_DIR,
      publicPath: '/build/',
      filename: '[name].[' + (env === 'prod' ? 'chunkhash' : 'hash') + '].js',
      sourceMapFilename: '[name].[hash].map'
    },

    resolve: {
      extensions: [".js", ".jsx"]
    },

    context: resolve(__dirname, '../app'),

    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    },

    module: {
      loaders : [
        {
          test : /\.jsx?/,
          include : [APP_DIR, CONTENT_DIR],
          loaders : [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          loaders: [
            'html-loader'
          ]
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '../app/template.html'),
        filename: resolve(__dirname, '../index.html'),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module){
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      }),
      new WebpackCleanupPlugin()
    ]
  }
}
