import path from 'path';
// import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
// const util = require('util');
// const fs = require('fs');
// const fs = require('fs-extra');

const { describe, test } = global;

describe('react generator', () => {
    describe('react config file', () => {
        test('react app defaults', () =>
            helpers.run(path.join(__dirname, '../index.js')).then(() => {
                // assert.file('src/index.jsx');
                // assert.fileContent('src/index.jsx', 'react');
            }));

        test('react sass exits', () =>
            helpers
                .run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: true,
                })
                .then(() => {
                    // assert.file('src/index.jsx');
                }));

        test('react sass exits', () =>
            helpers
                .run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: false,
                })
                .then(() => {
                    // assert.file('src/index.jsx');
                }));

        test('react sass exits', () =>
            helpers
                .run(path.join(__dirname, '../index.js'))
                .withOptions({
                    sass: true,
                })
                .then(() => {
                    // assert.file('src/index.jsx');
                }));
        // test('react app defaults', () => {
        //     return helpers
        //         .run(path.join(__dirname, '../index.js'))
        //         .withOptions({})
        //         .then(() => {
        //             assert.file('src/index.jsx');
        //             assert.fileContent('src/index.jsx', 'react');
        //         });
        // });
        // test('react sass exits', () => {
        //     return helpers
        //         .run(path.join(__dirname, '../index.js'))
        //         .withOptions({
        //             sass: true
        //         })
        //         .then(() => {
        //             assert.file('src/index.jsx');
        //         });
        // });
        // test('react sass does not exits', () => {
        //     return helpers
        //         .run(path.join(__dirname, '../index.js'))
        //         .withOptions({
        //             sass: false
        //         })
        //         .then(() => {
        //             assert.file('src/index.jsx');
        //         });
        // });
    });

    // describe('overwrite eslint config to use airbnb', () => {
    //     // todo
    //     test('react app defaults', () => {
    //         return (
    //             helpers
    //                 .run(path.join(__dirname, '../index.js'))
    //                 .inTmpDir((dir) => {
    //                     // `dir` is the path to the new temporary directory
    //                     const eslintDefault = {
    //                         parser: 'babel-eslint',
    //                         rules: {
    //                             indent: [2, 4],
    //                             'comma-dangle': 0,
    //                             'no-underscore-dangle': 1
    //                         },
    //                         extends: ['eslint:recommended', 'plugin:node/recommended']
    //                     };
    //                     //
    //                     // // old fs
    //                     // fs.writeFileSync(
    //                     //     path.join(__dirname, '../templates/.eslintrc'),
    //                     //     util.inspect(eslintDefault),
    //                     //     dir
    //                     // );
    //                     //
    //                     const eslintPath = path.join(__dirname, '../templates');
    //                     // // console.log('pa', pa);
    //                     //
    //                     fs.copySync(eslintPath, dir);
    //                 })
    //                 // .withOptions({})
    //                 .then(() => {
    //                     // assert.file('.eslintrc');
    //                     // assert.fileContent('src/index.jsx', 'react');
    //                 })
    //         );
    //     });
    // });
});
