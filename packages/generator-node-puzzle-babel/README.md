![Build Status](https://img.shields.io/bundlephobia/min/generator-node-puzzle-babel.svg)
![CircleCI](https://circleci.com/gh/yurikrupnik/generators.svg?style=svg)
![Build Status](https://travis-ci.org/yurikrupnik/generators.svg?branch=master)
![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generators/badge.svg?branch=master)
![codecov](https://codecov.io/gh/yurikrupnik/generators/branch/master/graph/badge.svg)

# generator-node-puzzle-babel

generator-node-puzzle-babel creates .babelrc file with support for react plugins and installs the needed packages.

## Install
```
npm install --global generator-node-puzzle-babel
```
## Usage

```
yo node-puzzle-babel
```

## Extending generator
```
this.composeWith(require.resolve('generator-node-puzzle-babel'), {
  /* options */
});
```

## Options
- destination (String, default '') destination path for .babelrc file.
- react (Boolean, default false) include react support.
