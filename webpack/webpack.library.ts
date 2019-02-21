const path = require('path');
const webpack = require('webpack');
const getEnv = require('./getEnv.ts').getEnv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: getEnv(),

  context: path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [path.resolve(__dirname, '../'), 'node_modules'],
  },

  entry: {
    library: ['react', 'react-dom', 'styled-components'],
  },

  output: {
    filename: '[hash].dll.js',
    path: path.resolve(__dirname, '../docs/library'),
    library: '[name]',
  },

  plugins: [
    new CleanWebpackPlugin(['index.html', 'library/*.js'], { root: path.resolve(__dirname, '../docs') }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      // template: path.resolve(__dirname, '../docs/index.html'),
      filename: path.resolve(__dirname, '../docs/index.html'),
    }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../docs/library/[name].json'),
    }),
  ],

  optimization: {
    minimize: true,
  },
};
