const baseConfig = require('./webpack.config.base.js');
const { join } = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
    // 开启 source-map 模式
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },

    plugins: [
        // 启用 HMR 热加载，记得把devServer中的hot属性设为true
        new webpack.HotModuleReplacementPlugin(),
    ],

    // 设置测试服务器
    devServer: {
        // 找到打包文件文件
        contentBase: join(__dirname, '../dist'),
        // 开启热更新
        hot: true,
        //防止react路由刷新后，找不到资源
        historyApiFallback: true,
        // 一切服务都启用gzip 压缩
        compress: true,
        // 设置代理服务器
        proxy: {
            '/api': 'http://localhost:7001',
        },
        host: '0.0.0.0',
        port: 3000,
    },

    mode: 'development',
};

module.exports = merge(baseConfig, devConfig);
