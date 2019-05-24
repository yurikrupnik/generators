import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import reduce from 'lodash/reduce'; // eslint-disable-line
import autoExternal from 'rollup-plugin-auto-external';
import pkg from './package.json';

const name = process.cwd();
const input = path.join(name, 'app/index.js');
const filter = reduce(
    Object.assign({}, pkg.peerDependencies, pkg.dependencies),
    (acc, val, key) => acc.concat(key), []
);

const fileName = 'index.js';
const plugins = [
    babel({
        rootMode: 'upward',
    }),
    resolve({}),
    commonjs({
        exclude: /node_modules/
    }),
    autoExternal(),
    // terser()
];

export default {
    input,
    output: {
        file: path.join(name, 'dist', `${fileName}`),
        format: 'cjs'
    },
    external: filter,
    plugins
};
