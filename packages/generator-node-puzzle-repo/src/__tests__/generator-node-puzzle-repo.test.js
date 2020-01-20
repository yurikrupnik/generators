const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
// const util = require('util');
// const fs = require('fs');
// const fs = require('fs-extra');

const {
    describe,
    test
} = global;

describe('repo generator', () => {
    describe('repo confoig', () => {
        test('repo defaults', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withOptions({

                })
                .then(function() {
                    // assert.file('src/index.jsx');
                    // assert.fileContent('src/index.jsx', 'react');
                });
        });
        // test('react sass exits', function () {
        //     return helpers.run(path.join(__dirname, '../index.js'))
        //         .withOptions({
        //             sass: true
        //         })
        //         .then(function() {
        //             assert.file('src/index.jsx');
        //         });
        // });
        // test('react sass does not exits', function () {
        //     return helpers.run(path.join(__dirname, '../index.js'))
        //         .withOptions({
        //             sass: false
        //         })
        //         .then(function() {
        //             assert.file('src/index.jsx');
        //         });
        // });
    });
});
