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

describe('react reactComponent generator', () => {
    describe('copy files', () => {
        test('react client defaults', function () {
            return helpers.run(path.join(__dirname, '../index.js'))
                .withArguments(['ComponentName'])
                .withOptions({
                    // name: 'yebal'
                    // path: 'lol/es'
                })
                .then(function() {
                    // assert.file('ComponentName/__tests__');
                    // assert.fileContent('src/index.jsx', 'react');
                });
        });
    });

});
