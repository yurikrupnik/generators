const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('assets generator', () => {
    test('assets generator default options', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({})
            .withPrompts({})
            .then(() => {
                assert.file('assets');
            });
    });
    test('assets generate with path option', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                path: 'src/assets'
            })
            .then(function () {
                assert.file('src/assets');
                assert.file('src/assets/download.jpeg');
                assert.file('src/assets/IF-pin1.png');
                assert.file('src/assets/favicon.ico');
            });
    });
});
