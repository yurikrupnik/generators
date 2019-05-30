import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import autoExternal from 'rollup-plugin-auto-external';

const name = process.cwd();
const input = path.join(name, 'src/index.js');

const fileName = 'index.js';
const plugins = [
    babel({
        rootMode: 'upward',
    }),
    resolve({}),
    commonjs({
        // exclude: /node_modules/
    }),
    autoExternal()
];

export default {
    input,
    output: [
        {
            file: path.join(name, 'app', 'cmj', `${fileName}`),
            format: 'cjs'
        },
        {
            file: path.join(name, 'app', 'esm', `${fileName}`),
            format: 'esm'
        }
    ],
    plugins
};
