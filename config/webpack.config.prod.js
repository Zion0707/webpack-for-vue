const baseConfig = require('./webpack.config.base.js');
const { rmDir } = require('./webpack.config.utils.js');
const { resolve } = require('path');

// 清空dist的旧文件
rmDir(resolve(__dirname, '../dist'), function () {});

module.exports = {
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
    },

    mode: 'production',

    ...baseConfig,
};
