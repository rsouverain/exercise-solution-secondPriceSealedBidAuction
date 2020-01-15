import { NamedEntityAbstract } from './common/NamedEntityAbstract'
import uuid from 'uuidv4'

/**
 * Represent an agent able to place bids on an auction slot
 */
export class Bidder extends NamedEntityAbstract {

    /**
     * Unique identifier
     */
    public readonly id: string

    /**
     * @param {string} name of the bidder
     *
     * @example
     *
     * ```TypeScript
     * const bidder = new Bidder('John Doe')
     * ```
     */
    constructor (name: string) {
        super(name)
        this.id = uuid()
    }

}
