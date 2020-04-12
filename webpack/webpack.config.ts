const path = require('path');
const webpack = require('webpack');
const getEnv = require('./get-env.ts').getEnv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const tsLoaderOptions = {
  projectReferences: true,
  onlyCompileBundledFiles: true,
  transpileOnly: true,
};

module.exports = {
  mode: getEnv(),

  context: path.resolve(__dirname, '../src'),

  entry: {
    app: './index.tsx',
  },

  output: {
    path: path.resolve(__dirname, '../docs/scripts'),
    filename: `[name].${getEnv() === 'development' ? 'dev' : '[hash]'}.bundle.js`,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.css'],
    modules: [path.resolve(__dirname, '../'), 'node_modules'],
  },

  devServer: {
    host: 'localhost',
    inline: true,
    compress: true,
    contentBase: path.resolve(__dirname, '../docs'),
    publicPath: '/scripts/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: { loader: 'ts-loader', options: tsLoaderOptions },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../src'),
      manifest: require('../docs/library/library.json'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(getEnv()),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: path.resolve(__dirname, '../docs/index.html'),
    }),
    new AddAssetHtmlPlugin({
      publicPath: 'scripts/',
      filepath: path.resolve(__dirname, '../docs/library/*.dll.js'),
    }),
  ],

  optimization: {
    minimize: true,
  },
};
