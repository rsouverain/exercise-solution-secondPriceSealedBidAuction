/**
 * Represents an entity able to have a name.
 * @class
 */
export abstract class NamedEntityAbstract {

    /**
     * Name of the entity
     */
    public name: string

    /**
     * @param {string} name name of the entity
     */
    public constructor (name: string) {
        this.name = name
    }

}
