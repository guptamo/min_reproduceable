const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './server.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader'],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hierarchy-builder.server.js',
        libraryTarget: 'umd',
        // sourceMapFilename: 'hierarchy-builder.server.map.js',
    },
    plugins: [
        new htmlPlugin({ template: 'index.html' })
    ],
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 3003,
        hot: true,
    }
}