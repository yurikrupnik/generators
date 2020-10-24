import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

const { describe, test } = global;

describe('webpack generator', () => {
    test('webpack server', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'server',
            })
            .then(() => {
                assert.file('webpack.config.js');
            }));
    test('webpack client', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'client',
            })
            .then(() => {
                assert.file('webpack.config.js');
            }));
    test('webpack fullstack', () =>
        helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                type: 'fullstack',
            })
            .then(() => {
                assert.file('webpack.config.server.js');
                assert.file('webpack.config.client.js');
            }));
});
