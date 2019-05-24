const Generator = require('yeoman-generator/lib');
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(require('child_process').exec);

module.exports = class EslintGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.extendsArray = [];
        this.plugins = [];
        this.packages = new Set(['eslint', 'babel-eslint']);
        this.argument('configs', { type: String, required: false, default: '' });
        this.argument('plugins', { type: String, required: false, default: '' });

        this.option('personal', {
            type: Boolean,
            required: false,
            default: false
        });
    }

    _handlePeerDependenciesPackages(packages) {
        const extraPackages = packages.reduce((acc, next) => {
            Object.keys(next).map(v => acc.add(v));
            return acc;
        }, new Set());
        this.packages = new Set([...this.packages, ...extraPackages]);
    }

    async configuring() {
        const { configs, plugins } = this.options;
        if (configs.length) {
            await Promise.all(this._createPromises('config', configs, this.extendsArray, true))
                .then(this._handlePeerDependenciesPackages.bind(this));
        }
        if (plugins.length) {
            await Promise.all(this._createPromises('plugin', plugins, this.plugins))
                .then((res) => {
                    const extraPackages = res.reduce((acc, next) => {
                        if (next.name) {
                            acc.add(next.name);
                        }
                        return acc;
                    }, new Set());

                    this.packages = new Set([...this.packages, ...extraPackages]);
                });
        }
    }

    _createPromises(type, data, storage, peer = false) {
        return data.split(',')
            .reduce(
                (acc, next) => acc.concat(exec(`npm info eslint-${type}-${next} ${peer ? 'peerDependencies' : ''} --json`)
                    .then(({ stdout }) => {
                        // if (stdout) {
                        storage.push(next);
                        // }

                        if (type === 'config' && stdout) {
                            this.packages.add(`eslint-${type}-${next}`);
                        }
                        return JSON.parse(stdout);
                    })
                    .catch((err) => {
                        this.log(chalk.red(`command ${next} ${err.cmd} failed`));
                        return {};
                    })), []
            );
    }

    writing() {
        this.fs.extendJSON(this.destinationPath('package.json'), {
            scripts: {
                lint: 'eslint .'
            }
        });

        const { extendsArray, plugins } = this;
        const { personal } = this.options;
        this.fs.copyTpl(
            this.templatePath('.*'),
            this.destinationPath(),
            { extendsArray, personal, plugins }
        );
    }

    install() {
        this.npmInstall(Array.from(this.packages), { 'save-dev': true });
    }
}

export default EslintGenerator;
