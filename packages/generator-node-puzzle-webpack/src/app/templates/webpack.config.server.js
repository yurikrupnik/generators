const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const dotenv = require('dotenv');
const json = require('./package');

const filename = 'server.js';

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    isProd ? dotenv.config() : require('./src/config');
    return {
        context: path.resolve(__dirname, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'] // todo
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        node: false,
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry: './server.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].js',
            filename
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/, // todo
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    // todo
                    test: /\.(css|scss)$/, // todo
                    use: [
                        'css-loader',
                        {
                            // todo
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.PORT': JSON.stringify(process.env.PORT)
            }),
            new GenerateJsonPlugin(
                'package.json',
                Object.assign({}, json, {
                    main: filename,
                    scripts: {
                        start: `node ${filename}`
                    },
                    devDependencies: {}
                })
            ),
            argv.watch
                ? new NodemonPlugin({
                      script: path.resolve(__dirname, 'dist', filename),
                      watch: path.resolve(__dirname, 'dist', filename),
                      verbose: true
                  })
                : () => {}
        ]
    };
};
