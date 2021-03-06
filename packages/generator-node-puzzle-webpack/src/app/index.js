import Base from 'yeoman-generator';

class WebpackGenerator extends Base {
    constructor(args, opts) {
        super(args, opts);
        this.option('type', {
            type: String,
            required: false,
            desc: 'Client base stack',
            default: 'client',
        });
    }

    writing() {
        const { options } = this;
        if (options.type === 'client') {
            this.fs.copyTpl(
                this.templatePath('webpack.config.client.js'),
                this.destinationPath('webpack.config.js'),
                this.options
            );
        }
        if (options.type === 'server') {
            this.fs.copyTpl(
                this.templatePath('webpack.config.server.js'),
                this.destinationPath('webpack.config.js'),
                this.options
            );
        }
        if (options.type === 'fullstack') {
            this.fs.copyTpl(
                this.templatePath('webpack.config.server.js'),
                this.destinationPath('webpack.config.server.js'),
                this.options
            );
            this.fs.copyTpl(
                this.templatePath('webpack.config.client.js'),
                this.destinationPath('webpack.config.client.js'),
                this.options
            );
        }
    }

    _installDevPackages() {
        this.npmInstall(['webpack', 'webpack-cli', 'webpack-bundle-analyzer'], {
            'save-dev': true,
        });
    }

    install() {
        this._installDevPackages();
    }
}

export default WebpackGenerator;
