![Build Status](https://img.shields.io/github/repo-size/yurikrupnik/generator-node-puzzle-eslint.svg)
![Build Status](https://img.shields.io/github/languages/code-size/yurikrupnik/generator-node-puzzle-eslint.svg)
![Build Status](https://img.shields.io/bundlephobia/min/generator-node-puzzle-eslint.svg)`
![CircleCI](https://circleci.com/gh/yurikrupnik/generator-node-puzzle-eslint.svg?style=svg)
[![CircleCI](https://circleci.com/gh/yurikrupnik/generators.svg?style=svg)](https://circleci.com/gh/yurikrupnik/generators)
[![Build Status](https://travis-ci.org/yurikrupnik/generators.svg?branch=master)](https://travis-ci.org/yurikrupnik/generators)
[![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generators/badge.svg?branch=master)](https://coveralls.io/github/yurikrupnik/generators?branch=master)
![codecov](https://codecov.io/gh/yurikrupnik/generator-node-puzzle-eslint/branch/master/graph/badge.svg)
![BCH compliance](https://bettercodehub.com/edge/badge/yurikrupnik/generator-node-puzzle-eslint?branch=master)
![dependencies Status](https://david-dm.org/yurikrupnik/generator-node-puzzle-eslint/status.svg)
![devDependencies Status](https://david-dm.org/yurikrupnik/generator-node-puzzle-eslint/dev-status.svg)
![peerDependencies Status](https://david-dm.org/yurikrupnik/generator-node-puzzle-eslint/peer-status.svg)
# generator-node-puzzle-eslint

generator-node-puzzle-eslint creates .eslintrc file with support for plugins and configs.

## Install
```
npm install --global generator-node-puzzle-eslint
```
## Usage
Example using eslint-config-airbrb
```
yo eslinter --configs=airbnb
```

## Extending generator
```
this.composeWith(require.resolve('generator-node-puzzle-eslint'), {
  /* options */
});
```

## Options
- plugins (String, default '') list of plugins separated by , .
- configs (String, default '') list of plugins separated by , .
