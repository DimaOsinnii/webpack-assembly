const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/index.html',
            inject: 'body',
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
        open: true,
    },
    optimization: {
        splitChunks: {chunks: "all"}
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: __dirname + '/dist',
    },
};