const { Bid } = require('../../lib')
import uuid from 'uuidv4'

describe(`class Bid`, () => {
    test(`it should be a blank instantiation of Bid`, () => {
        const bid = new Bid()

        expect.assertions(1)
        expect(bid instanceof Bid).toBe(true)
    })

    test(`id -> is uuid4`, () => {
        const bid = new Bid()

        expect.assertions(2)
        expect(bid.id).not.toBeUndefined()
        expect(uuid.is(bid.id)).toBe(true)
    })
})

export {}
