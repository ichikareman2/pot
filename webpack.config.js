let webpack = require('webpack');
let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'src');

let webConfig = {
  entry: path.join(APP_DIR, '/web/index.jsx'),
  output: {
    path: path.join(BUILD_DIR, '/web'),
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
        template: path.join(APP_DIR, "/web/index.html"),
      })
  ],
  devServer: {
      contentBase: path.join(BUILD_DIR,'/web')
  }
};

let apiConfig = {
    entry: path.join(APP_DIR, '/index.jsx')
}

module.exports = webConfig;