// @see https://typedoc.org/guides/arguments/
module.exports = {
    name: 'Second Price Sealed Bid Auction Resolver',
    includeDeclarations: true,
    excludeExternals: true,
    readme: './docs/LIBRARY.md',
    categorizeByGroup: true,
    defaultCategory: 'Other',
    hideGenerator: true,
    ignoreCompilerErrors: false,
    disableOutputCheck: true,
    excludeNotExported: true,
    excludePrivate: true,
    excludeProtected: true,
    logger: 'console',
    mode: 'modules',
    out: './docs/typedoc/',
    theme: 'default', // default|minimal
}
