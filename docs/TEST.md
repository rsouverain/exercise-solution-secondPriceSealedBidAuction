# SPSBAR - Tests

 
 ## Overview
 
 I decided to use Jest, a test framework I already have some experience with.
 
 Jest config file is located in `<projectRoot>/jest.config.js`
 
 ## Code Testing
 
 Actual test files are located in `<projectRoot>/test/__tests__`
 
 ```shell script
# Compile TS files then run all tests.
 npm run test

# Run all tests, but don't compile TS files.
 npm run test:nobuild

# Run tests in interactive watch mode during development (best works on linux based OS host machine and terminals)
 npm run test:dev
 ```

 
 ## Code Coverage
 
Reports are located in `<projectRoot>/test/.coverage`

Commands from `<projectRoot>`:
```shell script
# Compile TS files then run all tests with code coverage collection enabled. 
npm run test:coverage

# Run all tests with code coverage collection enabled but don't compile TS files.
npm run test:coverage:nobuild
```
 

 
