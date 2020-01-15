import {
    AuctionableItem,
    AuctionSlot,
    Bid,
    // BidCollection,
    Bidder,
} from '../lib'

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function getRandomInt (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


/**
 * @return {Bidder}
 */
export function createBidder (name: string|undefined): Bidder {
    return new Bidder(name || 'John Doe')
}

/**
 * @return {AuctionableItem}
 */
export function createAuctionableItem (): AuctionableItem {
    return new AuctionableItem('AdImpression')
}

export function createScenarioBidders (): {
    bidderA: Bidder;
    bidderB: Bidder;
    bidderC: Bidder;
    bidderD: Bidder;
    bidderE: Bidder;
    } {
    return {
        bidderA: createBidder('A'),
        bidderB: createBidder('B'),
        bidderC: createBidder('C'),
        bidderD: createBidder('D'),
        bidderE: createBidder('E'),
    }
}

/**
 * @return {AuctionSlot}
 */
export function createItemizedAuctionSlot (reservePrice: bigint|undefined): AuctionSlot {
    reservePrice = reservePrice === undefined ? BigInt(getRandomInt(90, 120) * 100) : reservePrice
    return new AuctionSlot(createAuctionableItem(), reservePrice)
}


// export function createRandomBidCollection (): BidCollection {
//     const bidCollection = new BidCollection()
//     const slot = createItemizedAuctionSlot(BigInt(100 * 100))
//     const bidders = [
//         createBidder('A'),
//         createBidder('B'),
//         createBidder('C'),
//         createBidder('D'),
//         createBidder('E'),
//     ]
//     for (const bidder of bidders) {
//         bidCollection.add(new Bid(bidder, slot, BigInt(getRandomInt(1, 500) * 100)))
//     }
//     return bidCollection
// }

/**
 * @todo improve type declaration any/AuctionSlot / TS2749
 * @param {AuctionSlot} slot
 * @param {string | null} expectedWinningBidderName
 * @param {number | null} expectedWinningPrice
 * @param {string | null} expectedPriceBidderName
 */
export function testWinnerScenario (slot: any, expectedWinningBidderName: string|null, expectedWinningPrice: number|null, expectedPriceBidderName: string|null): void {
    const winner = slot.winner

    expect.assertions(2)
    expect(winner).not.toBeUndefined()
    if (expectedWinningBidderName !== null && expectedWinningPrice !== null) {
        expect.assertions(7)
        expect(winner)
            .not.toBeNull()

        expect(winner.bidder.name)
            .toBe(expectedWinningBidderName)

        expect(winner.amount === BigInt(expectedWinningPrice * 100))
            .toBe(true)

        expect(winner.amount >= slot.reservePrice)
            .toBe(true)

        expect(winner.amountBid ? winner.winningBid.bidder.id === winner.amountBid.bidder.id : false)
            .toBe(false)

        if (expectedPriceBidderName === null || expectedPriceBidderName === undefined) {
            expect(winner.amountBid)
                .toBeNull()
        }
        else {
            expect(winner.amountBid ? winner.amountBid.bidder.name === expectedPriceBidderName : false)
                .toBe(true)
        }
    }
    else {
        expect(winner)
            .toBeNull()
    }
}

/**
 * @return {AuctionSlot}
 */
export function createScenario1AuctionSlotEmpty (): AuctionSlot {
    return createItemizedAuctionSlot(BigInt(100 * 100))
}

// ------------- SCENARIOS -------------

/**
 * SCENARIO 1 - initial example
 * @return {AuctionSlot}
 */
export function createScenario1AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderC, bidderD, bidderE } = createScenarioBidders()

    // First wave of bid
    slot.placeBid(bidderA, BigInt(110 * 100))
    slot.placeBid(bidderC, BigInt(125 * 100))
    slot.placeBid(bidderD, BigInt(105 * 100))
    slot.placeBid(bidderE, BigInt(132 * 100))

    // Second wave of bid
    slot.placeBid(bidderA, BigInt(130 * 100)) // Winning amount
    slot.placeBid(bidderD, BigInt(115 * 100))
    slot.placeBid(bidderE, BigInt(135 * 100)) // Winning Bidder

    // Third and last wave of bid
    slot.placeBid(bidderD, BigInt(90 * 100))
    slot.placeBid(bidderE, BigInt(140 * 100))

    return slot
}

/**
 * SCENARIO 2 - No second bid above the reserve price
 * @return {AuctionSlot}
 */
export function createScenario2AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    // First wave of bid
    slot.placeBid(bidderA, BigInt(10 * 100))
    slot.placeBid(bidderB, BigInt(11 * 100))
    slot.placeBid(bidderC, BigInt(120 * 100)) // Winning Bidder, amount = 100 (reserve)
    slot.placeBid(bidderD, BigInt(50 * 100))

    // Second wave of bid
    slot.placeBid(bidderA, BigInt(99 * 100))
    slot.placeBid(bidderD, BigInt(82 * 100))
    slot.placeBid(bidderE, BigInt(87 * 100))

    return slot
}

/**
 * SCENARIO 3 - NO WINNER
 * @return {AuctionSlot}
 */
export function createScenario3AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    // First wave of bid
    slot.placeBid(bidderA, BigInt(10 * 100))
    slot.placeBid(bidderB, BigInt(11 * 100))
    slot.placeBid(bidderC, BigInt(50 * 100))

    // Second wave of bid
    slot.placeBid(bidderD, BigInt(99 * 100))
    slot.placeBid(bidderE, BigInt(82 * 100))
    slot.placeBid(bidderA, BigInt(87 * 100))

    return slot
}

/**
 * SCENARIO 4 - High amount numbers
 * @return {AuctionSlot}
 */
export function createScenario4AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    slot.placeBid(bidderA, BigInt(1111111111 * 100))
    slot.placeBid(bidderA, BigInt(90071992547409 * 100)) // Winning Bidder

    slot.placeBid(bidderB, BigInt(7777777777 * 100))
    slot.placeBid(bidderB, BigInt(90071992547408 * 100)) // Winning amount

    slot.placeBid(bidderC, BigInt(5555555555 * 100))
    slot.placeBid(bidderC, BigInt(6666666666 * 100))

    slot.placeBid(bidderD, BigInt(2222222222 * 100))
    slot.placeBid(bidderD, BigInt(3333333333 * 100))

    slot.placeBid(bidderE, BigInt(1111111111 * 100))
    slot.placeBid(bidderE, BigInt(2222222222 * 100))

    return slot
}

/**
 * SCENARIO 5 - Everybody bids the same
 * We assume the winning bidder is the first to place the winning bid (place order/date)
 * @return {AuctionSlot}
 */
export function createScenario5AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    slot.placeBid(bidderA, BigInt(110 * 100)) // Winning Bidder, amount = 100 (reserve)
    slot.placeBid(bidderB, BigInt(110 * 100))
    slot.placeBid(bidderC, BigInt(110 * 100))
    slot.placeBid(bidderD, BigInt(110 * 100))
    slot.placeBid(bidderE, BigInt(110 * 100))

    return slot
}

/**
 * SCENARIO 6 - Everybody bids the same amount (50) below the reserve price (100): No winner !
 * @return {AuctionSlot}
 */
export function createScenario6AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    slot.placeBid(bidderA, BigInt(50 * 100))
    slot.placeBid(bidderB, BigInt(50 * 100))
    slot.placeBid(bidderC, BigInt(50 * 100))
    slot.placeBid(bidderD, BigInt(50 * 100))
    slot.placeBid(bidderE, BigInt(50 * 100))

    return slot
}

/**
 * SCENARIO 7 - Nobody bids
 * @return {AuctionSlot}
 */
export function createScenario7AuctionSlotPopulated (): AuctionSlot {
    return createScenario1AuctionSlotEmpty()
}

/**
 * SCENARIO 8 - only one bid above reserve price
 * @return {AuctionSlot}
 */
export function createScenario8AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA } = createScenarioBidders()

    // First wave of bid
    slot.placeBid(bidderA, BigInt(150 * 100))

    return slot
}

/**
 * SCENARIO 9 - Winner is above reserve price, multiple winning price bids possible
 * @return {AuctionSlot}
 */
export function createScenario9AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    // First wave of bid - below reserve
    slot.placeBid(bidderA, BigInt(11 * 100))
    slot.placeBid(bidderB, BigInt(20 * 100))
    slot.placeBid(bidderC, BigInt(8 * 100))
    slot.placeBid(bidderD, BigInt(7 * 100))
    slot.placeBid(bidderE, BigInt(14 * 100))

    // Second wave of bid - around reserve
    slot.placeBid(bidderA, BigInt(99 * 100))
    slot.placeBid(bidderB, BigInt(100 * 100)) // Winning amount
    slot.placeBid(bidderD, BigInt(101 * 100)) // Winning bidder
    slot.placeBid(bidderC, BigInt(100 * 100)) // <--- because of this one, this is not possible to establish a valid winning price in one scoop.
    slot.placeBid(bidderE, BigInt(11 * 100)) // Ralph Wiggum

    return slot
}

/**
 * SCENARIO 10 - Winner is above reserve price and last to place its bid
 * @return {AuctionSlot}
 */
export function createScenario10AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA, bidderB, bidderC, bidderD, bidderE } = createScenarioBidders()

    // First wave of bid - below reserve
    slot.placeBid(bidderA, BigInt(11 * 100))
    slot.placeBid(bidderB, BigInt(20 * 100))
    slot.placeBid(bidderC, BigInt(8 * 100))
    slot.placeBid(bidderD, BigInt(7 * 100))
    slot.placeBid(bidderE, BigInt(14 * 100))

    // Second wave of bid - around reserve
    slot.placeBid(bidderA, BigInt(99 * 100))
    slot.placeBid(bidderB, BigInt(100 * 100)) // Winning amount
    slot.placeBid(bidderD, BigInt(101 * 100)) // Winning bidder
    slot.placeBid(bidderC, BigInt(10 * 100))
    slot.placeBid(bidderE, BigInt(11 * 100))

    return slot
}

/**
 * SCENARIO 11 - Only one bidder with multiple bids above and below the reserve price:
 * Winner is 'A' for 100 (the reserve price)
 * @return {AuctionSlot}
 */
export function createScenario11AuctionSlotPopulated (): AuctionSlot {
    const slot = createScenario1AuctionSlotEmpty()
    const { bidderA } = createScenarioBidders()

    slot.placeBid(bidderA, BigInt(11 * 100))
    slot.placeBid(bidderA, BigInt(50 * 100))
    slot.placeBid(bidderA, BigInt(20 * 100))
    slot.placeBid(bidderA, BigInt(90 * 100))
    slot.placeBid(bidderA, BigInt(100 * 100))
    slot.placeBid(bidderA, BigInt(110 * 100))
    slot.placeBid(bidderA, BigInt(80 * 100))
    slot.placeBid(bidderA, BigInt(109 * 100))

    return slot
}
