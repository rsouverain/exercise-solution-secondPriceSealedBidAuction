const { AuctionSlotWinner } = require('../../lib')
const { createScenario1AuctionSlotPopulated } = require('../utilities.ts')

describe(`class AuctionSlotWinner`, () => {
    test(`constructor -> is throwing with blank instantiation`, () => {
        expect.assertions(1)
        expect(() => new AuctionSlotWinner()).toThrow()
    })

    test(`constructor -> is throwing (undefined winningBid)`, () => {
        const slot = createScenario1AuctionSlotPopulated()

        expect.assertions(1)
        expect(() => new AuctionSlotWinner(undefined, slot.bidCollection.get(0))).toThrow()
    })

    test(`constructor -> is not throwing (undefined amountBid)`, () => {
        const slot = createScenario1AuctionSlotPopulated()

        expect.assertions(1)
        expect(() => new AuctionSlotWinner(slot.bidCollection.get(1), undefined)).not.toThrow()
    })

    test(`constructor -> is not throwing with valid arguments`, () => {
        const slot = createScenario1AuctionSlotPopulated()

        expect.assertions(1)
        expect(() => new AuctionSlotWinner(slot.bidCollection.get(1), slot.bidCollection.get(0))).not.toThrow()
    })

    test(`amount -> is the expected '110' value from amountBid.amount`, () => {
        const slot = createScenario1AuctionSlotPopulated()
        const someWinner = new AuctionSlotWinner(slot.bidCollection.get(1), slot.bidCollection.get(0))

        expect.assertions(2)
        expect(someWinner.amount).toBe(BigInt(110 * 100))
        expect(someWinner.amount).toBe(slot.bidCollection.get(0).amount)
    })

    test(`bidder -> is the one from winningBid.bidder`, () => {
        const slot = createScenario1AuctionSlotPopulated()
        const someWinner = new AuctionSlotWinner(slot.bidCollection.get(1), slot.bidCollection.get(0))
        expect.assertions(1)
        expect(someWinner.bidder.id).toBe(slot.bidCollection.get(1).bidder.id)
    })
})

export {}
