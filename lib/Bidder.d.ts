import { NamedEntityAbstract } from './common/NamedEntityAbstract';
/**
 * Represent an agent able to place bids on an auction slot
 */
export declare class Bidder extends NamedEntityAbstract {
    /**
     * Unique identifier
     */
    readonly id: string;
    /**
     * @param {string} name of the bidder
     *
     * @example
     *
     * ```TypeScript
     * const bidder = new Bidder('John Doe')
     * ```
     */
    constructor(name: string);
}
//# sourceMappingURL=Bidder.d.ts.map