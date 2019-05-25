const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(process.cwd(), 'app'),
    target: 'node',
    // node: {
    //     __dirname: false,
    //     __filename: true,
    // },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        chunkFilename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'templates', to: 'templates' }
        ]),
    ]
};
