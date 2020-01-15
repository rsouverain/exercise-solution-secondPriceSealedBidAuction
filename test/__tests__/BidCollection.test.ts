const { BidCollection } = require('../../lib')
const { GenericCollection } = require('../../lib/common/GenericCollection')
const {
    createScenario1AuctionSlotPopulated,
    createScenario5AuctionSlotPopulated,
} = require('../utilities.ts')

describe(`class BidCollection`, () => {
    test(`constructor -> it should be a blank instantiation of BidCollection`, () => {
        const collection = new BidCollection()

        expect.assertions(1)
        expect(collection instanceof BidCollection).toBe(true)
    })
    test(`constructor -> it should be an instance of GenericCollection`, () => {
        const collection = new BidCollection()

        expect.assertions(1)
        expect(collection instanceof GenericCollection).toBe(true)
    })
})

export {}
