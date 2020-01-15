// const { Bid } = require('../../lib')
const { GenericCollection } = require('../../../lib/common/GenericCollection')

const createSomeCollectionClass = (): any => {
    return class extends GenericCollection<string> {}
}

const createPredefinedListOfItem = (): Array<string> => {
    return ['itemA', 'itemB', 'itemC']
}


describe(`class GenericCollection`, () => {
    test(`constructor -> it should be a blank instantiation of GenericCollection`, () => {
        const collection = new (createSomeCollectionClass())()

        expect.assertions(1)
        expect(collection instanceof GenericCollection).toBe(true)
        // expect(Array.isArray(collection)).toBe(true)
    })

    test(`constructor & length -> it should have the same number of items`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())(list)

        expect.assertions(1)
        expect(collection.length).toBe(list.length)
    })

    test(`add(...) & length -> it should have one item`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())(list)
        const item = 'Another Added Item'
        collection.add(item)

        expect.assertions(1)
        expect(collection.length).toBe(4)
    })

    test(`get(...) -> items should equals expected ones`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())(list)

        const resultItemA = collection.get(0)
        const resultItemB = collection.get(1)
        const resultItemC = collection.get(2)

        expect.assertions(3)
        expect(resultItemA).toBe(list[0])
        expect(resultItemB).toBe(list[1])
        expect(resultItemC).toBe(list[2])
    })

    test(`removeAtIndex(...) -> items are removed`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())([...list])
        collection.removeAtIndex(1)

        const resultItemA = collection.get(0)
        const resultItemB = collection.get(1)
        const resultItemC = collection.get(2)

        expect.assertions(4)
        expect(resultItemA).toBe(list[0])

        expect(resultItemB).toBeUndefined()
        expect(resultItemB).not.toBe(list[1])

        expect(resultItemC).toBe(list[2])
    })

    test(`.removeAtIndex(...) -> is throwing when presented with an invalid index`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())([...list])

        expect.assertions(1)
        expect(() => collection.removeAtIndex(5)).toThrow()
    })

    test(`.items -> is traversable`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())(list)

        expect.assertions(list.length)
        for (const [index, item] of Object.entries(collection.items)) {
            expect(item).toBe(list[parseInt(index)])
        }
    })

    test(`.clear().length -> has 0 items`, () => {
        const list = createPredefinedListOfItem()
        const collection = new (createSomeCollectionClass())(list)

        expect.assertions(1)
        expect(collection.clear().length).toBe(0)
    })

})

export {}
