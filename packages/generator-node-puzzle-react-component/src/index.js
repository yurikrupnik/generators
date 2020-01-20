import Path from 'path';
import Generator from 'yeoman-generator';

class ReactComponentGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true
        });

        this.option('css', {
            type: Boolean,
            required: false,
            desc: 'Include default .css file',
            default: true,
        });

        this.option('css', {
            type: Boolean,
            required: false,
            desc: 'Include .scss file',
            default: false,
        });


        this.option('path', {
            type: String,
            required: false,
            desc: 'Destination path of a reactComponent',
            default: ''
        });

        this.option('name', {
            type: String,
            required: true,
            desc: 'Component name',
            default: ''
        });
    }

    writing() {
        this.config.set({
            location: 'src/ass'
        });
        const { path, name } = this.options;
        const destination = Path.join(path, name);
        const config = this.config.getAll();
        console.log('config', config);
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(destination),
            { name },
        );
    }

    end() {
        console.log(`end of react component generator`);
    }
}

export default ReactComponentGenerator;
