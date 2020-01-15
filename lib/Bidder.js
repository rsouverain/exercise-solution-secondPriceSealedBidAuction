"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamedEntityAbstract_1 = require("./common/NamedEntityAbstract");
const uuidv4_1 = __importDefault(require("uuidv4"));
/**
 * Represent an agent able to place bids on an auction slot
 */
class Bidder extends NamedEntityAbstract_1.NamedEntityAbstract {
    /**
     * @param {string} name of the bidder
     *
     * @example
     *
     * ```TypeScript
     * const bidder = new Bidder('John Doe')
     * ```
     */
    constructor(name) {
        super(name);
        this.id = uuidv4_1.default();
    }
}
exports.Bidder = Bidder;
//# sourceMappingURL=Bidder.js.map