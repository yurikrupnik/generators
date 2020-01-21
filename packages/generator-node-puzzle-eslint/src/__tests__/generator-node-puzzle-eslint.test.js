import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import path from 'path';

const { describe, test } = global;

describe('Eslint generator', () => {
    test('use generator with default options', () =>
        helpers.run(path.join(__dirname, '../index.js')).then(() => {
            assert.file('.eslintrc');
            assert.file('.eslintignore');
            assert.fileContent('.eslintrc', '"parser": "babel-eslint"');
            assert.noFileContent('.eslintrc', 'jsx-a11y');
            assert.noFileContent('.eslintrc', 'airbnb');
            assert.noFileContent('.eslintrc', 'jest');
        }));

    test(
        'use generator with configs and plugins options',
        async () =>
            helpers
                .run(path.join(__dirname, '../index.js'))
                .withOptions({
                    configs: 'airbnb',
                    plugins: 'jest'
                })
                .then(() => {
                    assert.file('.eslintrc');
                    assert.fileContent('.eslintrc', 'airbnb');
                    assert.fileContent('.eslintrc', 'jest');
                }),
        100000
    );

    test(
        'use generator configs and plugins options handle errors',
        async () =>
            helpers
                .run(path.join(__dirname, '../index.js'))
                .withOptions({
                    configs: 'airbnb,none',
                    plugins: 'jest, none'
                })
                .then(() => {
                    assert.file('.eslintrc');
                    assert.fileContent('.eslintrc', 'airbnb');
                    assert.noFileContent('.eslintrc', 'none');
                    assert.fileContent('.eslintrc', 'jest');
                }),
        100000
    );
});
