const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets/keyboard_ico.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractWebpackPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devServer: {
    port: 4200,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractWebpackPlugin.loader,
          options: {

          },
        },
        'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
};
