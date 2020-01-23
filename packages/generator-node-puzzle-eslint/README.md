![Build Status](https://img.shields.io/bundlephobia/min/generator-node-puzzle-babel.svg)
![CircleCI](https://circleci.com/gh/yurikrupnik/generators.svg?style=svg)
![Build Status](https://travis-ci.org/yurikrupnik/generators.svg?branch=master)
![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generators/badge.svg?branch=master)
![codecov](https://codecov.io/gh/yurikrupnik/generators/branch/master/graph/badge.svg)

# generator-node-puzzle-eslint

generator-node-puzzle-eslint creates .eslintrc and .eslintignore files with packages.

## Install

```
npm install --global generator-node-puzzle-eslint
```

## Usage

```
yo node-puzzle-eslint
```

## Extending generator

```
this.composeWith(require.resolve('generator-node-puzzle-eslint'), {
  /* options */
});
```

## Options

-   destination (String, default '') destination path for .babelrc file.
