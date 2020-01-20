import Generator from 'yeoman-generator'
// var Webpack = require('../webpack/app');
var path = require('path');
// var webpack = require('../webpack/app');
// var G = require('generator-webpack-mussia');

// var reduce = require('lodash.reduce');
// const utils = require('./utils');
// const questions = require('./questions');

class AngularGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // this.props.name = path.basename(process.cwd())
        // this.option('type', {
        //     type: String,
        //     required: false,
        //     desc: 'Project name to be included in the package.json',
        //     default: path.basename(process.cwd())
        // });

        this.option('css', {
            type: Boolean,
            required: false,
            desc: 'Include css files',
            default: true
        });

        this.option('sass', {
            type: String,
            required: Boolean,
            desc: 'Include sass files',
            default: false
        });

    }

    async prompting() {
        this.props = await this.prompt([
            // {
            //     type: 'confirm',
            //     name: 'angular-router',
            //     message: 'Would you like to use angul',
            //     default: true,
            //     store: true
            // }
        ]);
    }

    configuring() {
        // console.log('this.options', this.options);
        // console.log('this.props', this.props);
        //
        // this.config.set({
        //     yebla: 'as'
        // });
        // console.log('this.props', this.config);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath('src'),
            this.options,
        );
    }

    installPackages() {
        this.npmInstall([
            'angular'
        ]);
    }

    install() {
        this.installPackages();
    }

    end() {
        console.log('this.name', this.name);
        console.log('AngularGenerator', AngularGenerator.name);
        this.log(`You have finished building angular.`);
    }
}

export default AngularGenerator;
