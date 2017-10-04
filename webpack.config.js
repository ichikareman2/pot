var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/web/index.jsx',
  output: {
    path: BUILD_DIR + '/web',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              include: APP_DIR,
              loader: 'babel-loader'
          },
          {
              test: /\.css/,
              include: APP_DIR,
              loader: 'style-loader!css-loader'
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: APP_DIR + "/web/index.html",
      })
  ],
  devServer: {
      contentBase: './web/build'
  }
};

module.exports = config;