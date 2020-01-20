import Generator from 'yeoman-generator';
import ReactGenerator from 'generator-node-puzzle-react';
import VueGenerator from 'generator-node-puzzle-vue';
import AngularGenerator from 'generator-node-puzzle-angular';
// var path = require('path');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');
class ClientGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.types = ['react', 'vue', 'angular'];
        // this.composeWith({
        //     Generator: ReactGenerator,
        //     path: require.resolve('generator-node-puzzle-react')
        // });
        this.option('type', {
            type: String,
            required: false,
            default: this.types[0],
            desc: 'Include webpack config type'
        });

        this.option('yebal');

        this.option('css', {
            type: Boolean,
            required: false,
            default: true,
            desc: 'Include .css files'
        });

        this.option('sass', {
            type: Boolean,
            required: false,
            default: false,
            desc: 'Include SASS .scss files'
        });
    }

    async prompting() {
        this.props = await this.prompt([
            {
                type: 'list',
                name: 'viewEngine',
                message: 'Choose app side library/framework',
                choices: [
                    {
                        value: 'react',
                        name: 'React'
                    },
                    {
                        value: 'vue',
                        name: 'Vue'
                    },
                    {
                        value: 'angular',
                        name: 'Angular'
                    }
                ],
                store: true
            },
            {
                type: 'confirm',
                name: 'sass',
                message: 'Would you like to use SASS to compile CSS',
                default: true,
                store: true
            }
        ]);
    }

    writing() {
        // this.fs.extendJSON(this.destinationPath('package.json'), {
        //     name: 'al'
        // });
        const { props } = this;
        const { sass } = props;
        if (props.viewEngine === 'react') {
            this.composeWith({
                Generator: ReactGenerator,
                path: require.resolve('generator-node-puzzle-react')
            }, {
                appname: 'cs'
            });
        } else if (props.viewEngine === 'vue') {
            this.composeWith({
                Generator: VueGenerator,
                path: require.resolve('generator-node-puzzle-vue')
            }, {
                sass
            });
        } else if (props.viewEngine === 'angular') {
            this.composeWith({
                Generator: AngularGenerator,
                path: require.resolve('generator-node-puzzle-angular')
            }, {
                sass
                // arguments: []
            });
        }
    }

    _handleClientWebpackPackages() {
        const { options } = this;
        const sass = options.sass ? ['node-sass', 'sass-loader'] : [];
        // const loadableDev = options.loadable ? ['@babel/plugin-syntax-dynamic-import'] : [];
        this.npmInstall([
            'css-hot-loader',
            'css-loader',
            'html-webpack-plugin',
            'terser-webpack-plugin',
            'identity-obj-proxy',
            'mini-css-extract-plugin',
            'optimize-css-assets-webpack-plugin',
            'style-loader',
            'webpack-dev-server'
        ].concat(sass), { 'save-dev': true });
    }

    install() {
        // this._handleClientWebpackPackages();
        // this.composeWith({
        //     Generator: ReactGenerator,
        //     path: require.resolve('generator-node-puzzle-react')
        // });
    }

    end() {
        this.log('You have finished building ClientGenerator.');
    }
}

export default ClientGenerator;
