const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

const { MODE } = process.env;
const DEVTOOL =
  MODE === 'production' ? 'cheap-module-source-map' : 'inline-source-map';

module.exports = {
  mode: MODE,
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: DEVTOOL,
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /[\.js]$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'image/[name].[ext]?[hash]',
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'font/[name].[ext]?[hash]',
      //         //publicPath: './dist/image/',
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    // modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.js'],
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@stylesheets': path.resolve(__dirname, 'src/stylesheets'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      inject: 'body',
    }),
  ],
};
