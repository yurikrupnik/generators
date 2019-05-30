import Base from 'yeoman-generator';

class JestGenerator extends Base {
    constructor(args, opts) {
        super(args, opts);
        this.option('testEnvironment', {
            type: String,
            required: false,
            desc: 'Test Environment',
            default: 'jsdom'
        });

        this.option('destinationPath', {
            type: String,
            required: false,
            desc: 'Destination path',
            default: ''
        });

        this.option('e2ePath', {
            type: String,
            required: false,
            desc: 'e2e folder path',
            default: 'e2e'
        });

        this.option('e2e', {
            type: Boolean,
            required: false,
            desc: 'Include e2e',
            default: false
        });

        this.option('css', {
            type: Boolean,
            required: false,
            desc: 'Include css to config',
            default: false
        });
    }

    writing() {
        const { e2ePath, e2e } = this.options;

        if (e2e) {
            this.fs.copyTpl(
                this.templatePath('e2e'),
                this.destinationPath(e2ePath)
            );
        }
    }

    installDevPackages() {
        const { css, e2e } = this.options;
        this.npmInstall([
            'jest',
        ].concat(css ? 'identity-obj-proxy' : ''), { 'save-dev': true });

        if (e2e) {
            this.npmInstall([
                'puppeteer',
            ], { 'save-dev': true });
        }
    }

    install() {
        this.installDevPackages();
    }

    conflict() {
        this.updatePackageJson();
    }

    updatePackageJson() {
        this.fs.extendJSON(
            this.destinationPath('package.json'),
            {
                scripts: this.handleScriptsPkg(),
                jest: this.handleJestPkg(),
            }
        );
    }

    handleScriptsPkg() {
        const {
            destinationPath, e2ePath, e2e
        } = this.options;
        const scripts = {
            test: `jest ${destinationPath}`,
            'test:watch': `jest ${destinationPath} --watch`,
            'test:coverage': `jest ${destinationPath} --coverage`,
        };

        const e2eScripts = {
            'test:e2e': `jest ${e2ePath}/`,
        };

        return Object.assign({}, scripts, e2e ? e2eScripts : {});
    }

    handleJestPkg() {
        const {
            css,
            testEnvironment
        } = this.options;

        const jestConfig = {
            testEnvironment,
            modulePathIgnorePatterns: [
                '<rootDir>/.*/__mocks__'
            ]
        };

        if (css) {
            jestConfig.moduleNameMapper = {
                '\\.(css|less|scss)$': 'identity-obj-proxy'
            };
        }

        return jestConfig;
    }
}

export default JestGenerator;
