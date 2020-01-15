"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = __importDefault(require("uuidv4"));
/**
 * Represent a bid on an auction slot by a Bidder, for a given amount of money
 *
 */
class Bid {
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
    constructor(bidder, slot, amount) {
        this.id = uuidv4_1.default();
        this.bidder = bidder;
        this.slot = slot;
        this.amount = amount;
    }
}
exports.Bid = Bid;
//# sourceMappingURL=Bid.js.map