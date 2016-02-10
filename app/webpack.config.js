var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'bootstrap-webpack!./bootstrap.config.js',
        'font-awesome-webpack!./font-awesome.config.js',
        './src/styles/main.less',
        './src/app.js'
    ],

    output: {
        path: path.join(__dirname, '../dist'),
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
            },
            { test: /\.less$/, loader: 'style!css!less'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"/*"url-loader?limit=10000&mimetype=application/font-woff"*/ },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }

};