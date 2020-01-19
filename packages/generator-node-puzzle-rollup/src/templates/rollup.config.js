import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const globals = {
    react: 'React',
    'prop-types': 'PropTypes'
};

const defaultModule = {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            globals
        },
        {
            dir: 'dist/esm',
            format: 'esm',
            globals
        }
    ],
    plugins: [
        external({
            includeDependencies: true,
        }),
        postcss({
            minimize: true,
            modules: true,
            plugins: [autoprefixer()],
        }),
        babel({}),
        resolve({
            extensions: ['.mjs', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
        }),
        commonjs({})
    ]
};

export default defaultModule;
