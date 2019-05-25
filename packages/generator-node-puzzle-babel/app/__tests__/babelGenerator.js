const helpers = require('yeoman-test');
const path = require('path');
const assert = require('yeoman-assert');

const {
    describe,
    test,
} = global;

describe('Babel Generator', () => {
    test('babelrc file', () => helpers
        .run(path.join(__dirname, '../index.js'))
        .withOptions({
            react: false
        })
        .then(() => {
            assert.file('.babelrc');
            assert.noFileContent('.babelrc', 'react-loadable/babel');
            assert.noFileContent('.babelrc', '@babel/preset-react');
        }));

    test('react option', () => helpers
        .run(path.join(__dirname, '../index.js'))
        .withOptions({
            react: true,
        })
        .then(() => {
            assert.file('.babelrc');
            assert.fileContent('.babelrc', 'react-loadable/babel');
            assert.fileContent('.babelrc', '@babel/preset-react');
        }));

    test('destination option', () => helpers
        .run(path.join(__dirname, '../index.js'))
        .withOptions({
            destination: 'rand'
        })
        .then(() => {
            assert.file('rand/.babelrc');
        }));
});
