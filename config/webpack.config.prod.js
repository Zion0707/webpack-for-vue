const baseConfig = require('./webpack.config.base.js');
const { resolve } = require('path');

module.exports = {
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
    },

    mode: 'production',

    ...baseConfig,
};
