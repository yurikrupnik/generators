import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
// import jsdoc from 'rollup-plugin-jsdoc';

const cwd = process.cwd();
const input = path.join(cwd, 'src/index.js');

const plugins = [
    babel({
        rootMode: 'upward'
    }),
    resolve({}),
    commonjs({
        // exclude: /node_modules/
    }),
    autoExternal(),
    copy({
        targets: [
            {
                src: 'src/templates',
                dest: 'generators/app/'
            }
        ]
    })
    // jsdoc({
    //     args: ['-d', 'doc'],  // Command-line options passed to JSDoc, Note: use "config" to indicate configuration file, do not use "-c" or "--configure" in "args"
    //     config: path.resolve(process.cwd(), '../..', 'jsdoc.json'),  // Path to the configuration file for JSDoc. Default: jsdoc.json
    // })
];

export default {
    input,
    output: {
        // file: path.join(cwd, 'generators/app', 'index.js'),
        dir: 'generators/app',
        format: 'cjs'
    },
    plugins
};
