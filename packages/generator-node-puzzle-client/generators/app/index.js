var Generator = require('yeoman-generator/lib');
// var path = require('path');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');

module.exports = class ClientGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.types = ['react', 'vue', 'angular'];

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
                message: 'Choose client side library/framework',
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

    configuring() {}

    writing() {
        const { props } = this;
        const { sass } = props;
        if (props.viewEngine === 'react') {
            this.composeWith(require.resolve('../react/generators/app'), {
                sass,
                // srr: true
            });
        } else if (props.viewEngine === 'vue') {
            this.composeWith(require.resolve('../vue/generators/app'), {
                sass
            });
        } else if (props.viewEngine === 'angular') {
            this.composeWith(require.resolve('../angular/generators/app'), {
                sass
            });
        }
    }

    _handleClientWebpackPackages() {
        const {options} = this;
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
        ].concat(sass), {'save-dev': true});
    }

    install() {
        // this._handleClientWebpackPackages();
    }

    end() {
        this.log(`You have finished building ClientGenerator.`);
    }
};
