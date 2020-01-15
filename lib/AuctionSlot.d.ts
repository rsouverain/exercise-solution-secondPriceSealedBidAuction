import { AuctionableItem } from './AuctionableItem';
import { Bidder } from './Bidder';
import { Bid } from './Bid';
import { BidCollection } from './BidCollection';
import { AuctionSlotWinner } from './AuctionSlotWinner';
/**
 * Represent an auction's slot for an item.
 */
export declare class AuctionSlot {
    /**
     * Unique identifier
     */
    readonly id: string;
    /**
     * The item to be auctioned
     * @type {AuctionableItem}
     */
    readonly item: AuctionableItem;
    /**
     * The minimum price this item can be auctioned off.
     * In cents.
     * @type {bigint}
     */
    readonly reservePrice: bigint;
    /**
     * @type {BidCollection}
     */
    readonly bidCollection: BidCollection;
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
    constructor(item: AuctionableItem, reservePrice: bigint);
    /**
     * Allows for a [[Bidder]] to place a bid of a given amount for the current slot's item.
     * @param {Bidder} bidder The bidder placing this bid
     * @param {bigint} amount The amount the bidder has bidden. In cents.
     * @return {Bid}
     */
    placeBid(bidder: Bidder, amount: bigint): Bid;
    /**
     * Returns the current winning resultset at any given time during the auction's timespan.
     * @return {AuctionSlotWinner | null}
     */
    readonly winner: AuctionSlotWinner | null;
}
//# sourceMappingURL=AuctionSlot.d.ts.map