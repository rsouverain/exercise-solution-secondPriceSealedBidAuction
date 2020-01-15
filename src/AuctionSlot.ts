import { AuctionableItem } from './AuctionableItem'
import { Bidder } from './Bidder'
import { Bid } from './Bid'
import { BidCollection } from './BidCollection'
import { AuctionSlotWinner } from './AuctionSlotWinner'
import uuid from 'uuidv4'

/**
 * Represent an auction's slot for an item.
 */
export class AuctionSlot {

    /**
     * Unique identifier
     */
    public readonly id: string

    /**
     * The item to be auctioned
     * @type {AuctionableItem}
     */
    public readonly item: AuctionableItem

    /**
     * The minimum price this item can be auctioned off.
     * In cents.
     * @type {bigint}
     */
    public readonly reservePrice: bigint

    /**
     * @type {BidCollection}
     */
    public readonly bidCollection = new BidCollection()

    /**
     * @param {AuctionableItem} item The item to be auctioned
     * @param {bigint} reservePrice the minimum price this item can be auctioned off. In cents.
     *
     * @example
     *
     * ```TypeScript
     * const slot = new AuctionSlot(new AuctionableItem('Lawn Mower'), BigInt(10000))
     * ```
     */
    constructor (item: AuctionableItem, reservePrice: bigint) {
        this.id = uuid()
        this.item = item
        this.reservePrice = reservePrice
    }

    /**
     * Allows for a [[Bidder]] to place a bid of a given amount for the current slot's item.
     * @param {Bidder} bidder The bidder placing this bid
     * @param {bigint} amount The amount the bidder has bidden. In cents.
     * @return {Bid}
     */
    public placeBid (bidder: Bidder, amount: bigint): Bid {
        const bid = new Bid(bidder, this, amount)
        this.bidCollection.add(bid)
        return bid
    }

    /**
     * Returns the current winning resultset at any given time during the auction's timespan.
     * @return {AuctionSlotWinner | null}
     */
    get winner (): AuctionSlotWinner|null {
        let winner = null
        const bids = this.bidCollection.items
        const bidsLength = bids.length
        let firstHighestBid = null
        let secondHighestNonWinningBid = null

        // console.log('************bidsLength>>>', bidsLength)
        // Detection of firstHighestBid...
        for (let i = 0; i < bidsLength; i++) {
            const previousBid = bids[i - 1] !== undefined ? bids[i - 1] : null
            const currentBid = bids[i]
            // console.log('i>>>', i)
            // console.log('currentBid>>>', currentBid)

            if (
                currentBid.amount >= this.reservePrice &&
                (
                    previousBid === null ||
                    currentBid.amount > previousBid.amount
                ) &&
                (
                    firstHighestBid === null ||
                    firstHighestBid.id !== currentBid.id &&
                    currentBid.amount > firstHighestBid.amount
                )
            ) {
                firstHighestBid = currentBid
            }

            // !!! Tests Scenario 9 & 10 fails if detection of secondHighestNonWinningBid code is within this for-loop  !!!
            // Would have been better for perfs to not use a second loop
        }

        // Detection of secondHighestNonWinningBid...
        if (firstHighestBid !== null) {
            for (let i = 0; i < bidsLength; i++) {
                const currentBid = bids[i]
                if (
                    currentBid.amount >= this.reservePrice &&
                    firstHighestBid.id !== currentBid.id &&
                    firstHighestBid.amount >= currentBid.amount &&
                    firstHighestBid.bidder.id !== currentBid.bidder.id &&

                    (
                        secondHighestNonWinningBid === null ||
                        currentBid.amount > secondHighestNonWinningBid.amount
                    )
                ) {
                    secondHighestNonWinningBid = currentBid
                }
            }
        }

        if (firstHighestBid !== null) {
            winner = new AuctionSlotWinner(firstHighestBid, secondHighestNonWinningBid)
        }

        return winner
    }

}
