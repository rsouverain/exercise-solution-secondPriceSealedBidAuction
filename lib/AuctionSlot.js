"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bid_1 = require("./Bid");
const BidCollection_1 = require("./BidCollection");
const AuctionSlotWinner_1 = require("./AuctionSlotWinner");
const uuidv4_1 = __importDefault(require("uuidv4"));
/**
 * Represent an auction's slot for an item.
 */
class AuctionSlot {
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
    constructor(item, reservePrice) {
        /**
         * @type {BidCollection}
         */
        this.bidCollection = new BidCollection_1.BidCollection();
        this.id = uuidv4_1.default();
        this.item = item;
        this.reservePrice = reservePrice;
    }
    /**
     * Allows for a [[Bidder]] to place a bid of a given amount for the current slot's item.
     * @param {Bidder} bidder The bidder placing this bid
     * @param {bigint} amount The amount the bidder has bidden. In cents.
     * @return {Bid}
     */
    placeBid(bidder, amount) {
        const bid = new Bid_1.Bid(bidder, this, amount);
        this.bidCollection.add(bid);
        return bid;
    }
    /**
     * Returns the current winning resultset at any given time during the auction's timespan.
     * @return {AuctionSlotWinner | null}
     */
    get winner() {
        let winner = null;
        const bids = this.bidCollection.items;
        const bidsLength = bids.length;
        let firstHighestBid = null;
        let secondHighestNonWinningBid = null;
        // console.log('************bidsLength>>>', bidsLength)
        // Detection of firstHighestBid...
        for (let i = 0; i < bidsLength; i++) {
            const previousBid = bids[i - 1] !== undefined ? bids[i - 1] : null;
            const currentBid = bids[i];
            // console.log('i>>>', i)
            // console.log('currentBid>>>', currentBid)
            if (currentBid.amount >= this.reservePrice &&
                (previousBid === null ||
                    currentBid.amount > previousBid.amount) &&
                (firstHighestBid === null ||
                    firstHighestBid.id !== currentBid.id &&
                        currentBid.amount > firstHighestBid.amount)) {
                firstHighestBid = currentBid;
            }
            // !!! Tests Scenario 9 & 10 fails if detection of secondHighestNonWinningBid code is within this for-loop  !!!
            // Would have been better for perfs to not use a second loop
        }
        // Detection of secondHighestNonWinningBid...
        if (firstHighestBid !== null) {
            for (let i = 0; i < bidsLength; i++) {
                const currentBid = bids[i];
                if (currentBid.amount >= this.reservePrice &&
                    firstHighestBid.id !== currentBid.id &&
                    firstHighestBid.amount >= currentBid.amount &&
                    firstHighestBid.bidder.id !== currentBid.bidder.id &&
                    (secondHighestNonWinningBid === null ||
                        currentBid.amount > secondHighestNonWinningBid.amount)) {
                    secondHighestNonWinningBid = currentBid;
                }
            }
        }
        if (firstHighestBid !== null) {
            winner = new AuctionSlotWinner_1.AuctionSlotWinner(firstHighestBid, secondHighestNonWinningBid);
        }
        return winner;
    }
}
exports.AuctionSlot = AuctionSlot;
//# sourceMappingURL=AuctionSlot.js.map