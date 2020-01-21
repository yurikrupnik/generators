import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
// import fs from 'fs';
// import jsdoc from 'rollup-plugin-jsdoc';

const cwd = process.cwd();
const input = path.join(cwd, 'src/index.js');
// const input1 = path.join(cwd, 'reactComponent/index.js');

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

// const filters = ['node_nodules', 'generators'];
//
// const inputs = [];

// fs.readdirSync(path.resolve(cwd), (error, files) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('files', files);
//         files.forEach((file) => {
//             const isDirectory = fs.lstatSync(path.resolve(cwd, file)).isDirectory();
//             console.log('isDirectory', isDirectory);
//
//             if (isDirectory) {
//                 inputs.push('ok');
//             }
//         });
//
//         // console.log(typeof file);
//         // console.log(Array.isArray(file));
//
//         // console.log(file);
//         // console.log(isDirectory.isDirectory());
//     }
// });

// console.log('inputs', inputs);
export default [
    {
        input,
        output: [
            {
                dir: 'generators/app',
                format: 'cjs'
            }
        ],
        plugins
    },
    {
        input: path.join(cwd, 'component/index.js'),
        output: {
            dir: 'generators/component',
            format: 'cjs'
        },
        plugins
    }
];
