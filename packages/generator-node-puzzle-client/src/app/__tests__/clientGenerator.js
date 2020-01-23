const helpers = require('yeoman-test');
// const assert = require('yeoman-assert');
const path = require('path');

const { describe, test } = global;

describe('Client generator', () => {
    test('Client generator defaults', () =>
        helpers.run(path.join(__dirname, '../index.js')).then(() => {
            // assert.file('.eslintrc');
            // assert.file('.eslintignore');
            // assert.fileContent('.eslintrc', '"parser": "babel-eslint"');
            // assert.noFileContent('.eslintrc', 'jsx-a11y');
            // assert.noFileContent('.eslintrc', 'airbnb');
            // assert.noFileContent('.eslintrc', 'jest');
        }));

    test('Client generator react', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                sass: true
            })
            .withPrompts({
                stack: 'react'
            })
            .then(() => {}));
    test('Client generator vue', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withPrompts({
                stack: 'vue'
            })
            .then(() => {}));
    test('Client generator angular', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withPrompts({
                stack: 'angular'
            })
            .then(() => {}));
});
