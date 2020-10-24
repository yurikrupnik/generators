import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    babel({}),
    resolve({}),
    commonjs({}),
    autoExternal(),
    terser(),
    copy({
        targets: [
            {
                src: 'src/app/templates',
                dest: 'generators/app/',
            },
        ],
    }),
];

const config = {
    input: 'src/app/index.js',
    output: {
        dir: 'generators/app',
        format: 'cjs',
    },
    plugins,
};

export default config;
