import Generator from 'yeoman-generator';
import Component from 'generator-node-puzzle-react-component';
import path from 'path';
// const basename = require('path').basename;
// var mkdirp = require('mkdirp');

class ComponentGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        // console.log('args', args);
        // console.log('opts', opts);

        // this.option('shit', {
        //     type: String,
        //     default: ''
        // });

        this.composeWith(
            {
                Generator: Component,
                path: require.resolve('generator-node-puzzle-react-component')
            },
            {
                // ...opts,
                arguments: args
            }
        );
    }
    //
    // async _buildCodeSrcFolder() {
    //     const { codeSrc } = this.options;
    //     // mkdirp(codeSrc, (error) => {
    //     //     if (error) {
    //     //         console.log('error', error);
    //     //     }
    //     // });*
    // }
    //

    // async prompting() {
    //     // await this._buildCodeSrcFolder();
    //     // const { projectType } = this.props;
    //     // const { options } = this;
    //     // const { codeSrc } = options;
    //
    //     this.composeWith(require.resolve('generator-license'));
    //     this.props = await this.prompt(this.getQuestions());
    //
    //     // this.composeWith(require.resolve('../babel/AppGenerator'));
    //     // this.composeWith(require.resolve('../assets/AppGenerator'), {
    //     //     path: `${codeSrc}/assets`
    //     // });
    //
    // this.composeWith(require.resolve('../jest/AppGenerator'));
    //     // this.composeWith(require.resolve('../eslint/AppGenerator'));
    //     // this.composeWith(require.resolve('../webpack/AppGenerator'));
    //     //
    //
    //     // if (projectType === 'fullstack') {
    //     //     this.composeWith(require.resolve('../client/generators/AppGenerator'), {
    //     //         fullstack: true
    //     //     });
    //     //     this.composeWith(require.resolve('../server/generators/AppGenerator'), {
    //     //         fullstack: true
    //     //     });
    //     // }
    //     // if (projectType === 'client') {
    //     //     this.composeWith(require.resolve('../client/generators/AppGenerator'));
    //     // } else if (projectType === 'server') {
    //     //     this.composeWith(require.resolve('../server/generators/AppGenerator'),);
    //     // }
    // }
    //
    // configuring() {
    //     this.config.set({
    //         yes: true
    //     });
    // }
    //
    // getQuestions() {
    //     return [
    //         {
    //             type: 'list',
    //             name: 'projectType',
    //             message: 'Node AppGenerator type?',
    //             choices: this.types,
    //             store: true
    //         }
    //     ];
    // }
    //
    // _isReactIncludedInProject() {
    //     const { promptValues } = this.config.getAll();
    //     return promptValues && promptValues.viewEngine === 'react';
    // }
    //
    // _getDefaultPackage() {
    //     const { codeSrc, name } = this.options;
    //     const filePrefix = this._isReactIncludedInProject() ? 'jsx' : 'js';
    //     return {
    //         name,
    //         version: '0.0.0',
    //         engines: { node: '>=6' },
    //         scripts: {},
    //         main: `${codeSrc}/index.${filePrefix}`,
    //         dependencies: {},
    //         devDependencies: {}
    //     };
    // }
    //
    // _createPackage() {
    //     this.fs.extendJSON(this.destinationPath('package.json'), this._getDefaultPackage());
    // }
    //
    //
    // writing() {
    //     // this._createPackage();
    // }
    //
    end() {
        console.log(`end of ${ComponentGenerator.name} generator`);
    }
}

export default ComponentGenerator;