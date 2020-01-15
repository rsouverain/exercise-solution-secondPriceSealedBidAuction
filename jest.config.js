/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
    // The test environment that will be used for testing
    testEnvironment: 'node',

    /*
        An array of file extensions your modules use.
        If you require modules without specifying a file extension,
        these are the extensions Jest will look for, in left-to-right order.
     */
    moduleFileExtensions: ['js', 'ts'],

    /*
        A map from regular expressions to paths to transformers.
        A transformer is a module that provides a synchronous function for transforming source files.
        For example, if you wanted to be able to use a new language feature in your modules or tests that isn't yet supported by node,
        you might plug in one of many compilers that compile a future version of JavaScript to a current one.
     */
    transform: {
        // '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
        '^.+\\.tsx?$': 'ts-jest',
    },

    /*
        An array of regexp pattern strings that are matched against all source file paths before transformation.
        If the test path matches any of the patterns, it will not be transformed.
     */
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
        '/.coverage',
    ],


    // A list of paths to directories that Jest should use to search for files in.
    'roots': [
        '<rootDir>/test/__tests__/',
        '<rootDir>/test/',
    ],

    /*
        The glob patterns Jest uses to detect test files.
        By default it looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders,
        as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js).
        It will also find files called test.js or spec.js.
     */
    testMatch: [
        '**/test/__tests__/**/(*.)?(spec|test).(js|ts)',
        '**/test/__tests__/**/**.(spec|test).(js|ts)',
    ],

    /*
        An array of glob patterns indicating a set of files for which coverage information should be collected.
        If a file matches the specified glob pattern,
        coverage information will be collected for it even if no tests exist for this file and it's never required in the test suite.
     */
    collectCoverageFrom: [
        'lib/**/*.js',
        'lib/**.js',
    ],

    // A list of reporter names that Jest uses when writing coverage reports.
    coverageReporters: [
        'text-summary',
        'json',
        'lcov',
        'text',
        'clover',
        'html',
    ],

    /*
        An array of regexp pattern strings that are matched against all file paths before executing the test.
        If the file path matches any of the patterns, coverage information will be skipped.
        These pattern strings match against the full path.
        Use the <rootDir> string token to include the path to your project's root directory to prevent it from
        accidentally ignoring all of your files in different environments that may have different root directories.
        Example: ["<rootDir>/build/", "<rootDir>/node_modules/"].
     */
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/lib/index.js',
    ],

    // The directory where Jest should output its coverage files.
    coverageDirectory: './test/.coverage',

    // This option allows you to use a custom watch plugins.
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],

    // A set of global variables that need to be available in all test environments.
    globals: {},
}
