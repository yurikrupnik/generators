// import Generator from 'yeoman-generator';
// import License from 'generator-license';
// import path from 'path';

const Generator = require('yeoman-generator/lib');
const License = require('generator-license');
const path = require('path');

// import mkdirp from 'mkdirp';
// const basename = require('path').basename;
// var mkdirp = require('mkdirp');
// import cp from 'child_process';
// import util from 'util';

// const exec = util.promisify(cp.exec);

module.exports = class AppGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.types = [
            {
                value: 'polyrepo',
                name: 'Polyrepo'
            },
            {
                value: 'monorepo',
                name: 'Monorepo'
            }
        ];

        this.stacks = [
            {
                value: 'fullstack',
                name: 'Fullstack'
            },
            {
                value: 'client',
                name: 'Client'
            },
            {
                value: 'server',
                name: 'Server'
            }
        ];

        // this.argument('name', {
        //     type: String,
        //     required: true
        // });

        this.option('source', {
            type: String,
            required: false,
            desc: 'Project files root source directory',
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

        this.option('license', {
            type: String,
            required: false,
            desc: 'Override default MIT license',
            default: 'ISC'
        });

        this.option('username', {
            type: String,
            required: false,
            desc: 'Github username',
            default: this.user.git.name()
        });
    }

    initializing() {
        const { username, license } = this.options;
        // console.log('license', license);
        // console.log('username', username);
        this.composeWith(
            {
                Generator: License,
                path: require.resolve('generator-license')
            },
            {
                license: this.options.license,
                name: this.user.git.name(),
                email: this.user.git.email()
            }
        );
        // this.composeWith(require.resolve('generator-license'));
    }

    // async _buildCodeSrcFolder() {
    //     const { source, username } = this.options;
    //     // console.log('username', username);
    //     // mkdirp(source, (error) => {
    //     //     if (error) {
    //     //         console.log('error', error);
    //     //     }
    //     // });
    // }

    prompting() {
        // await this._buildCodeSrcFolder();
        // const { projectType } = this.props;
        // const { options } = this;
        // const { codeSrc } = options;
        // this.composeWith(require.resolve('generator-license'));
        // this.props = await this.prompt(this.getQuestions());
        // this.composeWith(require.resolve('../babel/AppGenerator'));
        // this.composeWith(require.resolve('../assets/AppGenerator'), {
        //     path: `${codeSrc}/assets`
        // });
        // this.composeWith(require.resolve('../jest/AppGenerator'));
        // this.composeWith(require.resolve('../eslint/AppGenerator'));
        // this.composeWith(require.resolve('../webpack/AppGenerator'));
        //
        // if (projectType === 'fullstack') {
        //     this.composeWith(require.resolve('../client/generators/AppGenerator'), {
        //         fullstack: true
        //     });
        //     this.composeWith(require.resolve('../server/generators/AppGenerator'), {
        //         fullstack: true
        //     });
        // }
        // if (projectType === 'client') {
        //     this.composeWith(require.resolve('../client/generators/AppGenerator'));
        // } else if (projectType === 'server') {
        //     this.composeWith(require.resolve('../server/generators/AppGenerator'),);
        // }
    }

    configuring() {
        // exec('npx lerna init');
        // this.config.set({
        //     // yes: true
        // });
    }

    getQuestions() {
        return [
            {
                type: 'list',
                name: 'type',
                message: 'Repository type',
                choices: this.types,
                store: true
            },
            {
                type: 'list',
                name: 'stack',
                message: 'Repository stacks',
                choices: this.stacks,
                store: true
            }
        ];
    }

    _isReactIncludedInProject() {
        // console.log('this.config.getAll()', this.config.getAll());
        const { promptValues } = this.config.getAll();
        return promptValues && promptValues.viewEngine === 'react';
    }

    _getDefaultPackage() {
        const { codeSrc, name, username } = this.options;
        const filePrefix = this._isReactIncludedInProject() ? 'jsx' : 'js';
        return {
            name,
            version: '0.0.0',
            description: '',
            engines: { node: '12' },
            scripts: {},
            repository: {
                type: 'git',
                url: `git+https://github.com/${username}/${name}.git`
            },
            keywords: [],
            author: '',
            license: 'ISC',
            bugs: {
                url: `https://github.com/${username}/${name}/issues`
            },
            homepage: `https://github.com/${username}/${name}#readme`,
            main: `${codeSrc}/index.${filePrefix}`,
            dependencies: {},
            devDependencies: {},
            prettier: {
                singleQuote: true,
                arrowParens: 'always',
                printWidth: 100,
                tabWidth: 4
            },
            husky: {
                hooks: {
                    'pre-commit': 'npm run lint'
                }
            }
        };
    }

    _createPackage() {
        const exists = this.fs.exists(this.destinationPath('package.json'));
        console.log('exists', exists);
        this.fs.extendJSON(this.destinationPath('package.json'), this._getDefaultPackage());
        const a = this.fs.exists(this.destinationPath('package.json'));
        console.log('exists', a);
    }

    writing() {
        this._createPackage();
    }

    end() {
        // eslint-disable-line
        console.log(`end of ${AppGenerator.name} generator`); // eslint-disable-line
    }
};

// export default AppGenerator;
