const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

let webConfig = (env = {}) => {
    // environment needs to be set before requiring config, hence config is required below.
    if (env.production === true)
        process.env.NODE_CONFIG_ENV = "production";

    return {
        entry: path.join(APP_DIR, '/index.jsx'),
        output: {
            path: BUILD_DIR,
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
                template: path.join(APP_DIR, "/index.html"),
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin(require('config'))
        ],
        devServer: {
            contentBase: BUILD_DIR,
            hot: true
        }
    }
};

module.exports = webConfig