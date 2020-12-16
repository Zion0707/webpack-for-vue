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
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],
                    plugins: ['syntax-dynamic-import'],
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'imgs/[hash:8].[ext]',
                },
            },
            {
                exclude: /\.(html|vue|js|png|jpg|jpeg|gif|svg|css|less)$/,
                loader: 'file-loader',
            },
        ],
    },

    // 插件
    plugins: [
        // html模板
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            favicon: resolve(__dirname, '../src/statics/icons/favicon.png'),
        }),
        // vue加载器
        new VueLoaderPlugin(),
    ],

    // 别名
    resolve: {
        alias: {
            _less: resolve(__dirname, '../src/less'),
            _pages: resolve(__dirname, '../src/pages'),
            _statics: resolve(__dirname, '../src/statics'),
            _components: resolve(__dirname, '../src/components'),
        },
        extensions: ['.js', '.vue', '.css', '.less'],
    },
};
