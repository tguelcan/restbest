<img src="https://raw.githubusercontent.com/tguelcan/restbest/master/logo.png" width="400">

[![Build Status](https://travis-ci.com/tguelcan/restbest.svg?branch=master)](https://travis-ci.com/tguelcan/restbest) 
[![Coverage Status](https://coveralls.io/repos/github/tguelcan/restbest/badge.svg?branch=master)](https://coveralls.io/github/tguelcan/restbest?branch=master) 
[![dependencies Status](https://david-dm.org/tguelcan/restbest/status.svg)](https://david-dm.org/tguelcan/restbest) 
[![devDependencies Status](https://david-dm.org/tguelcan/restbest/dev-status.svg)](https://david-dm.org/tguelcan/restbest?type=dev) 
[![Maintainability](https://api.codeclimate.com/v1/badges/5945843900d6de10a55c/maintainability)](https://codeclimate.com/github/tguelcan/restbest/maintainability)

**restbest is a customizable rest backend and productive generator (CRUD). It is based on NodeJS, Restify, Mongodb and Mongoose.**

- RESTful - It follows the best practices
- BABEL7 - with ESLint
- User registration API - Using restify-jwt-community
- Listing query strings - q, page, limit, fields etc. already provided by restify-mongoose
- Standard error responses - restify-errors
- Unit and integration tests - Using Jest
- Continuous integration support - Using Travis CI
- API docs generator - Using apidoc

## Commands

After you clone this repository, these commands are available in `package.json`.
You can use npm or yarn.

```bash
yarn test # test using Jest
yarn run test:coverage # test and open the coverage report in the browser
yarn run lint # lint using ESLint
yarn run dev # run the API in development mode
yarn run docs # generate API docs
yarn run build # build into /lib
yarn run serve # serve from /lib
yarn run generate # generate a new /api endpoint
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ yarn run dev
Restify server listening on http://0.0.0.0:9000, in development mode
```

## Use the Endpoint Generator
```bash
$ yarn run generate
Name of the endpoint in singular like "message" or "article"
```

#### it generates the following files 
- src
    - api
        - article
            - index.js
            - controller.js
            - model.js
- test
    - api
        - article.test.js

## Todo
- Add Auth
    - Local Auth ✔️
    - Roles ✔️
    - Social Auth 
- Add a generator ✔️

## License

[MIT](https://opensource.org/licenses/MIT)
