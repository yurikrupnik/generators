const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv');
const VueLoaderPlugin = require('vue-loader/src/plugin');
const sassVars = require('./src/theme.js');
const sassFuncs = require('./sassHelper');

const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const alias = reduce(
    json.dependencies,
    (acc, v, k) => {
        acc[k] = path.resolve(cwd, 'node_modules', k);
        return acc;
    },
    {}
);

module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    const config = isProd ? {} : require('./src/config'); // eslint-disable-line global-require

    return {
        context: path.resolve(__dirname, 'src'), // todo
        optimization: {
            minimizer: [isProd ? new TerserPlugin() : () => {}, new OptimizeCSSAssetsPlugin({})]
        },
        target: 'web',
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.vue'], // todo
            alias: {
                ...alias,
                vue: 'vue/dist/vue.js' // todo
            }
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './client.jsx', // todo
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist/assets'),
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/, // todo
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.vue$/, // todo
                    loader: 'vue-loader'
                },
                {
                    test: /\.(html)$/, // todo
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.(css|scss)$/, // todo
                    use: [
                        'css-hot-loader',
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: isProd
                                    ? '[hash:base64]'
                                    : '[local]--[hash:base64:5]'
                            }
                        },
                        {
                            // todo
                            loader: 'sass-loader',
                            options: {
                                functions: sassFuncs(sassVars)
                            }
                        }
                    ]
                },
                {
                    // todo
                    test: /\.ejs$/,
                    use: 'raw-loader'
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
            new HtmlWebpackPlugin({
                // todo
                template: 'index.ejs', // todo
                filename: 'index.ejs', // todo
                favicon: 'assets/favicon.ico',
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css'
            }),
            new BundleAnalyzerPlugin({}),
            new VueLoaderPlugin()
        ],
        devServer: {
            // when not prod - NODE_ENV_DOCKER taken from docker-compose env
            // todo client and fullstack
            port: config.port + 1,
            open: true,
            host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
            proxy: {
                '/': { target: `http://localhost:${config.port}` }
            }
        }
    };
};
