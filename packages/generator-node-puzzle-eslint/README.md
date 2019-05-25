![Build Status](https://img.shields.io/bundlephobia/min/generator-node-puzzle-eslint.svg)
![CircleCI](https://circleci.com/gh/yurikrupnik/generators.svg?style=svg)
![Build Status](https://travis-ci.org/yurikrupnik/generators.svg?branch=master)
![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generators/badge.svg?branch=master)
![codecov](https://codecov.io/gh/yurikrupnik/generators/branch/master/graph/badge.svg)

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
