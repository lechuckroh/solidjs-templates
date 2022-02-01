# Solid.js Project with Vite.js

A [solid.js](https://www.solidjs.com/) project template with [vite.js](https://vitejs.dev/). 

## Requirements

* node.js 14.13.0+
* [yarn](https://yarnpkg.com/)

## Features

* TypeScript (`.tsx`)
* CSS Modules (`.module.css`)
* Hot Module Replacement
* Jest for testing
* ESLint for static code analysis
* Prettier for code formatting
* See [vite.js features](https://vitejs.dev/guide/features.html) for more.
* Yarn plugins
    * [interactive-tools](https://github.com/yarnpkg/berry/tree/master/packages/plugin-interactive-tools)
    * [typescript](https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript)

## Usage

```shell
# install dependencies
$ yarn install

# run dev server
$ yarn start
# or
$ yarn dev
```

### production build

```
# production build
$ yarn build

# run production server
$ yarn serve
```

### docker

```
# production build
$ yarn build

# build docker image
$ yarn docker:build

# start docker container
$ yarn docker:run

# stop docker container
$ yarn docker:stop
```

### Testing

Use [jest](https://jestjs.io/) for testing.
```shell
$ yarn test
```

### eslint

Use [eslint](https://eslint.org/) to lint source codes.

```shell
$ yarn eslint
```

### prettier

Use [prettier](https://prettier.io/) to format source codes.

```shell
$ yarn prettier
```
