import { Bidder } from './Bidder';
import { AuctionSlot } from './AuctionSlot';
/**
 * Represent a bid on an auction slot by a Bidder, for a given amount of money
 *
 */
export declare class Bid {
    /**
     * Unique identifier
     */
    readonly id: string;
    /**
     * The bidder placing this bid
     */
    readonly bidder: Bidder;
    /**
     * The slot this bid is placed on
     */
    readonly slot: AuctionSlot;
    /**
     * The amount the bidder has bidden.
     * In cents.
     */
    readonly amount: bigint;
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
    constructor(bidder: Bidder, slot: AuctionSlot, amount: bigint);
}
//# sourceMappingURL=Bid.d.ts.map