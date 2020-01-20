const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('vue generator', () => {
    describe('vue config file', () => {
        test('vue client defaults', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({

                })
                .then(function() {
                    assert.file('src/index.js');
                    assert.fileContent('src/index.js', 'vue');
                });
        });
        test('vue sass exits', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: true
                })
                .then(function() {
                    assert.file('src/index.js');
                });
        });
        test('vue sass does not exits', function () {
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
