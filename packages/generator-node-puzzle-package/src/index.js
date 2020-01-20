import Generator from 'yeoman-generator';
// import License from 'generator-license';
// import path from 'path';
// import mkdirp from 'mkdirp';
// const basename = require('path').basename;
// var mkdirp = require('mkdirp');

class PackageGenerator extends Generator {
    // constructor(args, opts) {
    //     super(args, opts);
    //
    //     // console.log('constocutor opts type',  opts.type);
    //     // console.log('constocutor opts codeSrc',  opts.codeSrc);
    //     // console.log('constocutor opts name',  opts.name);
    //
    //
    //     this.types = [
    //         {
    //             value: 'fullstack',
    //             name: 'Fullstack'
    //         },
    //         {
    //             value: 'client',
    //             name: 'Client'
    //         },
    //         {
    //             value: 'server',
    //             name: 'Server'
    //         }
    //     ];
    //
    //     this.option('codeSrc', {
    //         type: String,
    //         required: false,
    //         desc: 'Project files root name',
    //         default: 'src'
    //     });
    //
    //     this.option('type', {
    //         type: String,
    //         required: false,
    //         desc: 'Project type',
    //         default: ''
    //     });
    //
    //     this.option('name', {
    //         type: String,
    //         required: false,
    //         desc: 'Project name to be included in the package.json',
    //         default: path.basename(process.cwd())
    //     });
    //
    //     this.option('license', {
    //         type: String,
    //         required: false,
    //         desc: 'Override default MIT license',
    //         default: 'MIT'
    //     });
    // }
    // initializing() {
    //     // console.log('this.user.git', this.user.git);
    //     // this.git = {
    //     //     user: {
    //     //         name: this.user.git.name(),
    //     //         email: this.user.git.email()
    //     //     }
    //     // };
    //
    //
    //     // console.log(this.user.git.name());
    //     // const a = await this.user.github.username();
    //     // console.log('a', a);
    //     // console.log(this.git.user.name);
    //     // console.log('type', this.options.type);
    //     // console.log('thus', this.option('name'));
    //     this.composeWith({
    //         Generator: License,
    //         path: require.resolve('generator-license')
    //     }, {
    //         // defaultLicense: this.options.license,
    //         license: this.options.license,
    //         name: this.user.git.name(),
    //         email: this.user.git.email()
    //     });
    //     // console.log('s', s);
    //     // this.composeWith(require.resolve('generator-license'));
    // }

    // async _buildCodeSrcFolder() {
    //     const { codeSrc } = this.options;
    //     mkdirp(codeSrc, (error) => {
    //         if (error) {
    //             console.log('error', error);
    //         }
    //     });
    // }
    //
    // async prompting() {
    //     // await this._buildCodeSrcFolder();
    //     // const { projectType } = this.props;
    //     // const { options } = this;
    //     // const { codeSrc } = options;
    //
    //     // this.composeWith(require.resolve('generator-license'));
    //     this.props = await this.prompt(this.getQuestions());
    //
    //     // this.composeWith(require.resolve('../babel/AppGenerator'));
    //     // this.composeWith(require.resolve('../assets/AppGenerator'), {
    //     //     path: `${codeSrc}/assets`
    //     // });
    //
    //     // this.composeWith(require.resolve('../jest/AppGenerator'));
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
    //         // yes: true
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

    end() {
        console.log(`end of ${PackageGenerator.name} generator`);
    }
}

export default PackageGenerator;
