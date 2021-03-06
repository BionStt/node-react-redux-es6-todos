var webpack = require('webpack');
var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, './dist/server/public/'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            include: /client/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './',
        outputPath: path.join(__dirname, './dist/server/public/')
    },
    plugins: [
        new WriteFilePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
};