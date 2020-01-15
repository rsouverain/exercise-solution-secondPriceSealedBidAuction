const { NamedEntityAbstract } = require('../../../lib/common/NamedEntityAbstract')

/**
 * @return {NamedEntityAbstract}
 * @private
 * @todo improve return type
 */
const extendAbstractClass = (): any => {
    return class extends NamedEntityAbstract {}
}

describe(`abstract class NamedEntityAbstract`, () => {
    test(`"someClassInstance" should be a blank instantiation of a class extending NamedEntityAbstract`, () => {
        const someClassInstance = new (extendAbstractClass())()

        expect.assertions(2)
        expect(someClassInstance instanceof NamedEntityAbstract).toBe(true)
        expect(someClassInstance.name).toBeUndefined()
    })

    test(`"someClassInstance.name" should be the expected string`, () => {
        const expectedValue = 'John Doe'
        const someClassInstance = new (extendAbstractClass())(expectedValue)

        expect.assertions(2)
        expect(someClassInstance.name).not.toBeUndefined()
        expect(someClassInstance.name).toBe(expectedValue)
    })
})


export {}
