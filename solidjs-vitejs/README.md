# Solid.js Project with Vite.js

A [solid.js](https://www.solidjs.com/) project template with [vite.js](https://vitejs.dev/). 

## Requirements

* node.js 14.13.0+
* [yarn](https://yarnpkg.com/)

## Features

* TypeScript (`.tsx`)
* CSS Modules (`.module.css`)
* Hot Module Replacement
* ESLint
* Prettier
* See [vite.js features](https://vitejs.dev/guide/features.html) for more.

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