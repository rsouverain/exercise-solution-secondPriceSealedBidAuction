const { AuctionableItem } = require('../../lib')

describe(`class AuctionableItem`, () => {

    test(`it should be a blank instantiation of AuctionableItem`, () => {
        const item = new AuctionableItem()

        expect.assertions(2)
        expect(item instanceof AuctionableItem).toBe(true)
        expect(item.name).toBeUndefined()
    })

    test(`item.name should be the expected string`, () => {
        const expectedString = 'Item One'

        expect.assertions(1)
        const item = new AuctionableItem(expectedString)
        expect(item.name).toBe(expectedString)
    })

})

export {}
