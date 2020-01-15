# SPSBAR - Documentation

### Installation & Requirements

Head over to [./INSTALL.md](./INSTALL.md)


### Project structure overview

Features:
* Code base: NodeJS 10.x & [TypeScript](https://www.typescriptlang.org)
* Code linter: [Eslint](https://eslint.org/)
* Code testing and coverage: [Jest](https://jestjs.io)
    
Folders:

* __docker__: for hosting docker files required for a quick & pre installed runtime environment. Start/Stop the docker stack from this directory. I used it during the development phase. (optional)
* __src__: Where the actual source files of this project's resulting library are located.
* __lib__: TypeScript files from `./src` are compiled into this directory. This is the actual distributable directory.
* __test__: Hold all files related to testing. I decided to use Jest, a test framework I already have some experience with.
    * __.coverage__: Hold Jest's test coverage reports after having ran `npm run test:coverage`
    * __ __tests__ __: Jest will look for `*.test.js` or `*.spec.js` files in this directory. The actual tests to be ran.
* __node_modules__: Vendors installed with `npm install` that may be required for development purposes. I tried to NOT use any external vendor except for compiling, testing, and linting code.


### Library

To get a sense of how the library is working, head over to [./LIBRARY.md](./LIBRARY.md)

### Tests

To learn how to run tests, as well as code coverage, head over to [./TEST.md](./TEST.md)
