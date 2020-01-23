import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import path from 'path';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
// import jsdoc from 'rollup-plugin-jsdoc';

const plugins = [
    babel({
        // rootMode: 'upward'
    }),
    resolve({}),
    commonjs({}),
    autoExternal(),
    terser(),
    copy({
        targets: [
            {
                src: 'src/app/templates',
                dest: 'generators/app/'
            },
            {
                src: 'src/react/templates',
                dest: 'generators/react/'
            }
        ]
    })
];

const config = [
    {
        input: 'src/app/index.js',
        output: {
            // file: path.join(cwd, 'generators/app', 'index.js'),
            dir: 'generators/app',
            format: 'cjs'
        },
        plugins
    },
    {
        input: 'src/component/index.js',
        output: {
            // file: path.join(cwd, 'generators/app', 'index.js'),
            dir: 'generators/component',
            format: 'cjs'
        },
        plugins
    }
];

export default config;
