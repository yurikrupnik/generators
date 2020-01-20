const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('angular generator', () => {
    describe('angular config file', () => {
        test('angular client defaults', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({

                })
                .then(function() {
                    assert.file('src/index.js');
                    assert.fileContent('src/index.js', 'angular');
                });
        });
        test('react sass exits', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: true
                })
                .then(function() {
                    assert.file('src/index.js');
                });
        });
        test('react sass does not exits', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: false
                })
                .then(function() {
                    assert.file('src/index.js');
                });
        });

    });
});
