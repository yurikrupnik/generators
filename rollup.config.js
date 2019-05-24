import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import reduce from 'lodash/reduce'; // eslint-disable-line
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
    })
];

export default {
    input,
    output: {
        file: path.join(name, 'dist', 'cjs', `${fileName}`),
        format: 'cjs'
    },
    external: filter,
    plugins
};
