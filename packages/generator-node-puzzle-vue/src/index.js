import Generator from 'yeoman-generator';

class VueGenerator extends Generator {
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
            {
                type: 'confirm',
                name: 'vue-router',
                message: 'Would you like to use Vue-Router',
                default: true,
                store: true
            }
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
            'vue'
        ]);
    }

    install() {
        this.installPackages();
    }

    end() {
        this.log(`You have finished building Vue.`);
    }
}

export default VueGenerator;
