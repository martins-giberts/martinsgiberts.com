const path = require('path');
const webpack = require('webpack');
const getEnv = require('./getEnv.ts').getEnv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../src'),

  mode: getEnv(),

  entry: './index.tsx',

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../docs'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    host: '0.0.0.0',
    inline: true,
    // stats: 'errors-only',
    compress: true,
    contentBase: path.resolve(__dirname, '../docs'),
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../content')],
        use: {
          loader: 'awesome-typescript-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['*.js'], { root: path.resolve(__dirname, '../docs'), exclude: ['CNAME'] }),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, '../src/template.html'),
      template: path.resolve(__dirname, '../docs/index.html'),
      filename: path.resolve(__dirname, '../docs/index.html'),
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../src'),
      manifest: require('../docs/library/library.json'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(getEnv()),
    }),
  ],

  optimization: {
    minimize: true,
  },
};
