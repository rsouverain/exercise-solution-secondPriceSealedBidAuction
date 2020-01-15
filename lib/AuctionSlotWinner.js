"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bid_1 = require("./Bid");
/**
 * Represent a bid on an auction slot by a Bidder
 * @class
 */
class AuctionSlotWinner {
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
    constructor(winningBid, amountBid) {
        if (!(winningBid instanceof Bid_1.Bid)) {
            throw new Error('winningBid must be an instanceof Bid');
        }
        this.winningBid = winningBid;
        this.amountBid = amountBid;
    }
    /**
     * Amount the winning bidder will have to pay
     * In cents.
     */
    get amount() {
        return this.amountBid === null ?
            this.winningBid.slot.reservePrice : this.amountBid.amount;
    }
    /**
     * The winning Bidder
     */
    get bidder() {
        return this.winningBid.bidder;
    }
}
exports.AuctionSlotWinner = AuctionSlotWinner;
//# sourceMappingURL=AuctionSlotWinner.js.map