const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('webpack generator', () => {
    test('webpack server', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'server',
            })
            .then(function () {
                assert.file('webpack.config.js');
            });
    });
    test('webpack client', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'client',
            })
            .then(function () {
                assert.file('webpack.config.js');
            });
    });
    test('webpack fullstack', function () {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'fullstack',
            })
            .then(function () {
                assert.file('webpack.config.server.js');
                assert.file('webpack.config.client.js');
            });
    });
});
