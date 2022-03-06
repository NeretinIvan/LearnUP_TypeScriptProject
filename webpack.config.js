const path = require('path');
const HtmlWeppackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: [/node_modules/],
                use: ['ts-loader']
            }       
        ]
    },
    plugins: [
        new HtmlWeppackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    }
}