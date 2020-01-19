import Base from 'yeoman-generator';
// var Webpack = require('../webpack/app');
// var path = require('path');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');
class ReactGenerator extends Base {
    constructor(args, opts) {
        super(args, opts);
        console.log('args', args);
        console.log('opts', opts);

        this.argument('appname', {
            type: String,
            required: false
        });

        this.option('css', {
            type: Boolean,
            required: false,
            desc: 'Include css files',
            default: true
        });

        this.option('sass', {
            type: Boolean, // todo check that
            required: Boolean,
            desc: 'Include sass files',
            default: false
        });

        this.option('ssr', {
            type: Boolean,
            required: Boolean,
            desc: 'Include server side rendering',
            default: false
        });
    }

    configuring() {
        this.config.set({
            extentions: '.jsx',
            sos: 'yes'
        });
    }

    writing() {
        // this.fs.extendJSON(this.destinationPath('package.json'), this._getDefaultPackage());
        this.fs.extendJSON(this.destinationPath('package.json'), {
            name: 'came-from-react'
        });
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath('src'),
            this.options,
        );
    }

    _installPackages() {
        this.npmInstall([
            'angular',
            'prop-types',
            'react-dom',
            'react-router',
            'react-router-dom'
        ]);
    }

    _installDevPackages() {
        this.npmInstall([
            '@babel/preset-react',
            'eslint-plugin-jsx-a11y',
            'eslint-plugin-react',
            'react-testing-library'
        ], { 'save-dev': true });
    }

    install() {
        this._installPackages();
        // this._installDevPackages();
    }

    conflicts() { // todo test
        const json = this.fs.readJSON(this.destinationPath('package.json'));
        if (json) {
            // this.fs.extendJSON(this.destinationPath('package.json'), {
            //     name: 'plo'
            // });
        } else {
            this.fs.extendJSON(this.destinationPath('package.json'), {
                name: 'as',
                version: '0.0.0',
                engines: { node: '>=6' },
                scripts: {},
                main: 'index.ksx',
                dependencies: {},
                devDependencies: {}
            });
        }
        const lint = this.fs.readJSON(this.destinationPath('.eslintrc'));
        const babel = this.fs.readJSON(this.destinationPath('.babelrc'));
        if (lint) {
            this.fs.extendJSON(this.destinationPath('.eslintrc'), {
                rules: {
                    'react/jsx-indent': [2, 4], // personal
                    'react/jsx-indent-props': 0, // personal
                    'jsx-a11y/anchor-is-valid': ['error', {
                        components: ['Link'],
                        specialLink: ['to'],
                        aspects: ['noHref', 'invalidHref', 'preferButton']
                    }]
                },
                extends: ['airbnb'] // overwrites arrays
            });
        } else {
            this.fs.extendJSON(this.destinationPath('.eslintrc'), {
                rules: {
                    'react/jsx-indent': [2, 4], // personal
                    'react/jsx-indent-props': 0, // personal
                    'jsx-a11y/anchor-is-valid': ['error', {
                        components: ['Link'],
                        specialLink: ['to'],
                        aspects: ['noHref', 'invalidHref', 'preferButton']
                    }]
                },
                extends: ['airbnb'] // overwrites arrays
            });
        }

        if (babel) { // todo test
            this.fs.extendJSON(this.destinationPath('.babelrc'), {
                presets: babel.presets.concat('@babel/preset-react'),
                plugins: babel.plugins.concat('react-loadable/babel')
            });
        }
    }

    end() {
        this.log(`You have finished building ReactGenerator.`);
    }
};

export default ReactGenerator;
