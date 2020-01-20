import Generator from 'yeoman-generator';
import path from 'path';
// const basename = require('path').basename;
// var mkdirp = require('mkdirp');

class MonorepoGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        // console.log('constocutor opts type',  opts.type);
        // console.log('constocutor opts codeSrc',  opts.codeSrc);
        // console.log('constocutor opts name',  opts.name);


        // this.types = [
        //     {
        //         value: 'fullstack',
        //         name: 'Fullstack'
        //     },
        //     {
        //         value: 'client',
        //         name: 'Client'
        //     },
        //     {
        //         value: 'server',
        //         name: 'Server'
        //     }
        // ];

        this.option('codeSrc', {
            type: String,
            required: false,
            desc: 'Project files root name',
            default: 'src'
        });

        this.option('type', {
            type: String,
            required: false,
            desc: 'Project type',
            default: ''
        });

        this.option('name', {
            type: String,
            required: false,
            desc: 'Project name to be included in the package.json',
            default: path.basename(process.cwd())
        });
    }

    async _buildCodeSrcFolder() {
        const { codeSrc } = this.options;
        // mkdirp(codeSrc, (error) => {
        //     if (error) {
        //         console.log('error', error);
        //     }
        // });*
    }

    async prompting() {
        // this.props = await this.prompt(this.getQuestions());
        // await this._buildCodeSrcFolder();
        // const { projectType } = this.props;
        // const { options } = this;
        // const { codeSrc } = options;

        // this.composeWith(require.resolve('generator-license'));

        // this.composeWith(require.resolve('../babel/app'));
        // this.composeWith(require.resolve('../assets/app'), {
        //     path: `${codeSrc}/assets`
        // });

        // this.composeWith(require.resolve('../jest/app'));
        // this.composeWith(require.resolve('../eslint/app'));
        // this.composeWith(require.resolve('../webpack/app'));
        //

        // if (projectType === 'fullstack') {
        //     this.composeWith(require.resolve('../client/generators/app'), {
        //         fullstack: true
        //     });
        //     this.composeWith(require.resolve('../server/generators/app'), {
        //         fullstack: true
        //     });
        // }
        // if (projectType === 'client') {
        //     this.composeWith(require.resolve('../client/generators/app'));
        // } else if (projectType === 'server') {
        //     this.composeWith(require.resolve('../server/generators/app'),);
        // }
    }

    configuring() {
        this.config.set({
            yes: true
        });
    }

    getQuestions() {
        return [
            {
                type: 'list',
                name: 'projectType',
                message: 'Node app type?',
                choices: this.types,
                store: true
            }
        ];
    }

    _isReactIncludedInProject() {
        const { promptValues } = this.config.getAll();
        return promptValues && promptValues.viewEngine === 'react';
    }

    _getDefaultPackage() {
        const { codeSrc, name } = this.options;
        const filePrefix = this._isReactIncludedInProject() ? 'jsx' : 'js';
        return {
            name,
            version: '0.0.0',
            engines: { node: '>=6' },
            scripts: {},
            main: `${codeSrc}/index.${filePrefix}`,
            dependencies: {},
            devDependencies: {}
        };
    }

    _createPackage() {
        this.fs.extendJSON(this.destinationPath('package.json'), this._getDefaultPackage());
    }


    writing() {
        this._createPackage();
    }

    end() {

    }
}

export default MonorepoGenerator;
