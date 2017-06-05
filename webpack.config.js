var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 3030,
        historyApiFallback: true
    },

    context: path.join(__dirname, '/'),
    plugins: [
        new CopyWebpackPlugin([
            { from: 'images', to: 'images' },
            { from: 'style', to: 'style'},
            { from: 'resources', to: 'resources'}
        ])
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i,
                loader: 'file-loader'
            }
        ]
    }
}

module.exports = config;