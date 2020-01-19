import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';

const name = process.cwd();
const input = path.join(name, 'src/index.js');

// const fileName = 'index.js';
const plugins = [
    babel({
        rootMode: 'upward',
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
                dest: 'dist/generators/app/'
            }
        ]
    })
];

export default {
    input,
    output: [
        {
            file: path.join(name, 'dist/generators/app', 'index.cjs.js'),
            format: 'cjs'
        },
        {
            file: path.join(name, 'dist/generators/app', 'index.ems.js'),
            format: 'esm'
        }
    ],
    plugins
};
