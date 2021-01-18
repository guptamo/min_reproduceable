const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

let config = {
    entry: ['./src/index.js'],
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
    externals: [
        /@material-ui\/.*$/,
        {
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'ReactDOM',
                commonjs: 'ReactDOM',
            }
        }
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        sourceMapFilename: 'hierarchy-builder.map.js',
        library: 'hierarchy-builder'
    }
}

module.exports = (_, argv) => {
    config.output.filename = argv.mode === 'development'
        ? 'hierarchy-builder.js'
        : 'hierarchy-builder.min.js'

    config.devtool = argv.mode === 'development'
        ? 'source-map'
        : false

    return config
}