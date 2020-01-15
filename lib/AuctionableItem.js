"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NamedEntityAbstract_1 = require("./common/NamedEntityAbstract");
/**
 * Represents an item able to be auctioned
 */
class AuctionableItem extends NamedEntityAbstract_1.NamedEntityAbstract {
    /**
     * @param {string} name of the bidder
     *
     * @example
     *
     * ```TypeScript
     * const item = new AuctionableItem('Lawn Mower')
     * ```
     */
    constructor(name) {
        super(name);
    }
}
exports.AuctionableItem = AuctionableItem;
//# sourceMappingURL=AuctionableItem.js.map