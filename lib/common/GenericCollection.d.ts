export declare class GenericCollection<T> {
    protected readonly _list: Array<T>;
    /**
     * @param {Array<T>} list
     */
    constructor(list?: Array<T>);
    /**
     * @return {Array<T>}
     */
    readonly items: Array<T>;
    /**
     * @return {number}
     */
    readonly length: number;
    /**
     * @param {number} index
     * @return {T}
     */
    get(index: number): T;
    /**
     * @param {T} item
     * @return {GenericCollection<T>}
     */
    add(item: T): GenericCollection<T>;
    /**
     * @param {number} index
     * @return {GenericCollection<T>}
     */
    removeAtIndex(index: number): GenericCollection<T>;
    /**
     * Clear all items from this collection
     * @return {GenericCollection<T>}
     */
    clear(): GenericCollection<T>;
}
//# sourceMappingURL=GenericCollection.d.ts.map