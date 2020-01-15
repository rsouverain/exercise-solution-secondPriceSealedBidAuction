import { Bidder } from './Bidder';
import { Bid } from './Bid';
/**
 * Represent a bid on an auction slot by a Bidder
 * @class
 */
export declare class AuctionSlotWinner {
    /**
     * The winning bid
     */
    protected readonly winningBid: Bid;
    /**
     * The second non-winning bid
     */
    protected readonly amountBid: Bid | null;
    /**
     * @param {Bid} winningBid
     * @param {Bid | null} amountBid
     *
     * @example
     *
     * ```TypeScript
     * const slot = new AuctionSlot(new AuctionableItem('Lawn Mower'), BigInt(10000))
     * const bidderA = new Bidder('John Doe')
     * const bidderB = new Bidder('Jane Doe')
     * const bidA = new Bid(bidderA, slot, BigInt(20000))
     * const bidB = new Bid(bidderB, slot, BigInt(50000))
     * const winner = new AuctionSlotWinner(bidB, bidA)
     * ```
     */
    constructor(winningBid: Bid, amountBid: Bid | null);
    /**
     * Amount the winning bidder will have to pay
     * In cents.
     */
    readonly amount: bigint;
    /**
     * The winning Bidder
     */
    readonly bidder: Bidder;
}
//# sourceMappingURL=AuctionSlotWinner.d.ts.map