const baseConfig = require('./webpack.config.base.js');
const { join } = require('path');

module.exports = {
    devServer: {
        contentBase: join(__dirname, '../dist'),
        hot: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:7001',
        },
        host: '0.0.0.0',
        port: 3000,
    },

    mode: 'development',

    ...baseConfig,
};
