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
            desc: 'Destination path of a component',
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
        const { path, name } = this.options;
        const destination = Path.join(path, name);
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(destination),
            {
                name
            },
        );
    }
}

export default ReactComponentGenerator;
