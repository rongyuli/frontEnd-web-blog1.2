const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            additionalData: `
                            @myblue: #081272;
                            @myyellow: #ffba00;`,
                        },
                    },
                ],
            },
            { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
            { test: /\.html$/i, loader: 'html-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        publicPath: './',
    },
    mode: 'development',
}
