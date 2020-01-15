"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericCollection {
    /**
     * @param {Array<T>} list
     */
    constructor(list = []) {
        this._list = list;
    }
    /**
     * @return {Array<T>}
     */
    get items() {
        return this._list;
    }
    /**
     * @return {number}
     */
    get length() {
        return this._list.length;
    }
    /**
     * @param {number} index
     * @return {T}
     */
    get(index) {
        return this._list[index];
    }
    /**
     * @param {T} item
     * @return {GenericCollection<T>}
     */
    add(item) {
        this._list.push(item);
        return this;
    }
    /**
     * @param {number} index
     * @return {GenericCollection<T>}
     */
    removeAtIndex(index) {
        if (this._list[index] !== undefined) {
            delete this._list[index];
        }
        else {
            throw new Error('Unknown index value');
        }
        return this;
    }
    /**
     * Clear all items from this collection
     * @return {GenericCollection<T>}
     */
    clear() {
        this.items.splice(0, this.items.length);
        return this;
    }
}
exports.GenericCollection = GenericCollection;
//# sourceMappingURL=GenericCollection.js.map