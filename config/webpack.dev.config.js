const HtmlWebpackPlugin = require('html-webpack-plugin');

const extendConfig = require('./webpack.shared');


module.exports = extendConfig((config) => {
    return {
        plugins: [...config.plugins,
            new HtmlWebpackPlugin({
                template: 'app/index.html',
                inject: true
            })
        ],
        devServer: {
            contentBase: 'build',
            proxy: {
                '/api/*': 'http://localhost:8080'
            }
        }
    };
}, true);
