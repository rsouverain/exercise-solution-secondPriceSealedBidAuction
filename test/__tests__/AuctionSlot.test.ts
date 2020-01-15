import uuid from 'uuidv4'

const { AuctionSlot, AuctionableItem } = require('../../lib')
const {
    createItemizedAuctionSlot,
    testWinnerScenario,
    createScenario1AuctionSlotPopulated,
    createScenario2AuctionSlotPopulated,
    createScenario3AuctionSlotPopulated,
    createScenario4AuctionSlotPopulated,
    createScenario5AuctionSlotPopulated,
    createScenario6AuctionSlotPopulated,
    createScenario7AuctionSlotPopulated,
    createScenario8AuctionSlotPopulated,
    createScenario9AuctionSlotPopulated,
    createScenario10AuctionSlotPopulated,
    createScenario11AuctionSlotPopulated,
} = require('../utilities.ts')

describe(`class AuctionSlot`, () => {
    test(`require AuctionSlot`, () => {
        const AuctionSlot = require('../../lib').AuctionSlot
        const slot = new AuctionSlot()

        expect.assertions(1)
        expect(slot instanceof AuctionSlot).toBe(true)
    })

    test(`item -> should be an instance of AuctionableItem`, () => {
        const slot = createItemizedAuctionSlot()
        expect.assertions(1)
        expect(slot.item instanceof AuctionableItem).toBe(true)
    })

    test(`id -> is uuid4`, () => {
        const slot = new AuctionSlot()

        expect.assertions(2)
        expect(slot.id).not.toBeUndefined()
        expect(uuid.is(slot.id)).toBe(true)
    })

    test(`reservePrice -> should be with a valid reservePrice`, () => {
        const slot = createItemizedAuctionSlot()
        expect.assertions(2)
        expect(slot.reservePrice).not.toBeUndefined()
        expect(slot.reservePrice > 0).toBe(true)
    })


    // ------ .winner SCENARIOS -------

    describe(`.winner -> ****** SCENARIOS ******`, () => {
        test(`1 -> The initial example: Winner is 'E' for 130, the bid from 'A'`, () => {
            testWinnerScenario(
                createScenario1AuctionSlotPopulated(),
                'E',
                130,
                'A'
            )
        })
        test(`2 -> No second bid above the reserve price (100): Winner is 'C' for 100 (the reserve price)`, () => {
            testWinnerScenario(
                createScenario2AuctionSlotPopulated(),
                'C',
                100,
                null
            )
        })
        test(`3 -> Nobody's bid is greater or equal to the reserve price (100): No winner !`, () => {
            testWinnerScenario(
                createScenario3AuctionSlotPopulated(),
                null,
                null,
                null
            )
        })
        test(`4 -> High amounts (bigint), Winner is 'A' for 90071992547408, the bid from 'B'`, () => {
            testWinnerScenario(
                createScenario4AuctionSlotPopulated(),
                'A',
                90071992547408,
                'B'
            )
        })
        test(`5 -> Everybody bids the same amount (110) above reserve price (100): Winner is 'A' for 110, the bid from 'B'`, () => {
            testWinnerScenario(
                createScenario5AuctionSlotPopulated(),
                'A',
                110,
                'B'
            )
        })
        test(`6 -> Everybody bids the same amount (50) below the reserve price (100): No winner !`, () => {
            testWinnerScenario(
                createScenario6AuctionSlotPopulated(),
                null,
                null,
                null
            )
        })
        test(`7 -> Nobody bids (hashtag BankruptSoon !): No winner !`, () => {
            testWinnerScenario(
                createScenario7AuctionSlotPopulated(),
                null,
                null,
                null
            )
        })
        test(`8 -> ONLY ONE BID. it is (150) above reserve price (100): Winner is 'A' for 100 (the reserve price)`, () => {
            testWinnerScenario(
                createScenario8AuctionSlotPopulated(),
                'A',
                100,
                null
            )
        })
        test(`9 -> Multiple winning price bids possible, the first one is placed before the winning bidder: Winner is 'D' for 100, the bid from 'B'`, () => {
            testWinnerScenario(
                createScenario9AuctionSlotPopulated(),
                'D',
                100,
                'B'
            )
        })
        test(`10 -> Winning bidder is last to place its bid: Winner is 'D' for 100, the bid from 'B'`, () => {
            testWinnerScenario(
                createScenario10AuctionSlotPopulated(),
                'D',
                100,
                'B'
            )
        })
        test(`11 -> Only one bidder with multiple bids above and below the reserve price: Winner is 'A' for 100 (the reserve price)`, () => {
            testWinnerScenario(
                createScenario11AuctionSlotPopulated(),
                'A',
                100,
                null
            )
        })
    })
})

export {}
