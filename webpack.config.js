var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: path.join(__dirname, './src/InputMask.js'),

    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'] }
        ]
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'InputMask.js',
        library: 'InputMask',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}
