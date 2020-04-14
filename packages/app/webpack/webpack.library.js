//@ts-check

const path = require('path');
const webpack = require('webpack');
const getEnv = require('./get-env').getEnv;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: getEnv(),

  context: path.resolve(__dirname, '../src'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.css'],
    modules: [path.resolve(__dirname, '../'), 'node_modules'],
  },

  entry: {
    library: ['react', 'react-dom', 'styled-components'],
  },

  output: {
    filename: `${getEnv() === 'development' ? 'dev' : '[hash]'}.dll.js`,
    path: path.resolve(__dirname, '../docs/library'),
    library: '[name]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../docs/library/[name].json'),
    }),
  ],

  optimization: {
    minimize: true,
  },
};
