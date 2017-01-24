const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: 'public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ],
    },
    resolve: {
        alias: { 'pickadate': 'pickadate/lib/picker' }
    },
    devtool: "inline-source-map",
};