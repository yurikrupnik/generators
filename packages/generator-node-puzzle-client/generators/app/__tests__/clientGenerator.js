const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('Client generator', () => {
    test('Client generator defaults', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .then(function () {
                // assert.file('.eslintrc');
                // assert.fileContent('.eslintrc', 'eslint:recommended');
            });
    });
    test('Client generator defaults', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'react'
            })
            .then(function () {
                // assert.file('.eslintrc');
                // assert.fileContent('.eslintrc', 'eslint:recommended');
            });
    });
});
