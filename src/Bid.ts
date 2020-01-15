import { Bidder } from './Bidder'
import { AuctionSlot } from './AuctionSlot'
import uuid from 'uuidv4'

/**
 * Represent a bid on an auction slot by a Bidder, for a given amount of money
 *
 */
export class Bid {

    /**
     * Unique identifier
     */
    public readonly id: string

    /**
     * The bidder placing this bid
     */
    public readonly bidder: Bidder

    /**
     * The slot this bid is placed on
     */
    public readonly slot: AuctionSlot

    /**
     * The amount the bidder has bidden.
     * In cents.
     */
    public readonly amount: bigint

    /**
     * @param {Bidder} bidder The bidder placing this bid
     * @param {AuctionSlot} slot The slot this bid is placed on
     * @param {bigint} amount The amount the bidder has bidden. In cents.
     *
     * @example
     *
     * ```TypeScript
     * const bidder = new Bidder('John Doe')
     * const slot = new AuctionSlot(new AuctionableItem('Lawn Mower'), BigInt(10000))
     * const bid = new Bid(bidder, slot, BigInt(50000))
     * ```
     */
    constructor (bidder: Bidder, slot: AuctionSlot, amount: bigint) {
        this.id = uuid()
        this.bidder = bidder
        this.slot = slot
        this.amount = amount
    }

}
