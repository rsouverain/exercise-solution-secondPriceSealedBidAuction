export class GenericCollection<T> {

    protected readonly _list: Array<T>

    /**
     * @param {Array<T>} list
     */
    constructor (list: Array<T> = []) {
        this._list = list
    }

    /**
     * @return {Array<T>}
     */
    get items (): Array<T> {
        return this._list
    }

    /**
     * @return {number}
     */
    get length (): number {
        return this._list.length
    }

    /**
     * @param {number} index
     * @return {T}
     */
    public get (index: number): T {
        return this._list[index]
    }

    /**
     * @param {T} item
     * @return {GenericCollection<T>}
     */
    public add (item: T): GenericCollection<T> {
        this._list.push(item)
        return this
    }

    /**
     * @param {number} index
     * @return {GenericCollection<T>}
     */
    public removeAtIndex (index: number): GenericCollection<T> {
        if (this._list[index] !== undefined) {
            delete this._list[index]
        }
        else {
            throw new Error('Unknown index value')
        }
        return this
    }

    /**
     * Clear all items from this collection
     * @return {GenericCollection<T>}
     */
    public clear (): GenericCollection<T> {
        this.items.splice(0, this.items.length)
        return this
    }

}
