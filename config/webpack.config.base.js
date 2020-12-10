// 基础配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // 入口
    entry: resolve(__dirname, '../src/index.js'),

    // 加载项
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                },
            },
            {
                test: /\.(ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                },
            },
        ],
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            favicon: resolve(__dirname, '../src/statics/icons/favicon.png'),
        }),
        new VueLoaderPlugin(),
    ],

    // 别名
    resolve: {
        alias: {
            _less: resolve(__dirname, '../src/less'),
            _pages: resolve(__dirname, '../src/pages'),
            _statics: resolve(__dirname, '../src/statics'),
        },
        extensions: ['.js', '.vue', '.css', '.less'],
    },
};
