var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }

};