// All packages, presets, and plugins installed need to be configured here so that webpack
// knows how and what to bundle and what to exclude

// IMPORTS
const path = require('path');
// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // Entry Point
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // PLUGINS
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new CleanWebpackPlugin(), // clears dist folder after each build
    // new MiniCssExtractPlugin({ filename: './src/styles/styles.scss' }),
  ],

  // Output
  output: {
  // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'src', 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // webpack needs to know that js and jsx files need to go through babel before being bundled
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // sass loader
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, // do we need both?
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // Resolve extension issues
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
