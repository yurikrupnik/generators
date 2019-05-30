const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('jest Generator', () => {
    test('default run', () => helpers
        .run(path.join(__dirname, '../index.js'))
        .then(() => {
            assert.file('package.json');
        }));

    test('css option', () => helpers
        .run(path.join(__dirname, '../index.js'))
        .withOptions({
            css: true
        })
        .then(() => {
            assert.file('package.json');
        }));

    describe('e2e options', () => {
        test('with e2e true', () => helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                e2e: true
            })
            .then(() => {
                assert.file('package.json');
            }));
        test('with e2e true and path passesd', () => helpers
            .run(path.join(__dirname, '../index.js'))
            .withOptions({
                e2e: true,
                e2ePath: '2e2'
            })
            .then(() => {
                assert.file('2e2');
            }));
    });
});
