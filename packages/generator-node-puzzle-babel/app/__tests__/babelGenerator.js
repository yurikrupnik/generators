const helpers = require('yeoman-test');
const path = require('path');
const assert = require('yeoman-assert');

const {
    describe,
    test,
} = global;

describe('Babel Generator', () => {
    test('babelrc file', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                react: false
            })
            .then(function () {
                assert.file('.babelrc');
                assert.noFileContent('.babelrc', 'react-loadable/babel');
                assert.noFileContent('.babelrc', '@babel/preset-react');
            });
    });

    test('react option', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                react: true,
            })
            .then(function () {
                assert.file('.babelrc');
                assert.fileContent('.babelrc', 'react-loadable/babel');
                assert.fileContent('.babelrc', '@babel/preset-react');
            });
    });

    test('destination option', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                destination: 'rand'
            })
            .then(function () {
                assert.file('rand/.babelrc');
            });
    });
});
