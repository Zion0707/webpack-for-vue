const baseConfig = require('./webpack.config.base.js');
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
        ],
    },

    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
    },

    // 插件
    plugins: [
        // 清除已打包的生产文件
        new CleanWebpackPlugin(),
        // 开启css从js抽离，避免js加载css导致闪屏问题
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash:8].css',
        }),
        // css 文件压缩
        new OptimizeCssAssetsWebpackPlugin(),
    ],

    mode: 'production',
};

module.exports = merge(baseConfig, prodConfig);
