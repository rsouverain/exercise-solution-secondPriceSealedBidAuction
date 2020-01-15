import uuid from 'uuidv4'

const { Bidder } = require('../../lib')
const { createBidder } = require('../utilities.ts')


describe(`class Bidder`, () => {
    test(`it should be a blank instantiation of Bidder`, () => {
        const bidder = new Bidder()

        expect.assertions(1)
        expect(bidder instanceof Bidder).toBe(true)
    })

    test(`id -> is uuid4`, () => {
        const bidder = new Bidder()

        expect.assertions(2)
        expect(bidder.id).not.toBeUndefined()
        expect(uuid.is(bidder.id)).toBe(true)
    })
    test(`name -> is the expected value`, () => {
        const expectedValue = 'John Doe'
        const bidder = createBidder()

        expect.assertions(3)
        expect(bidder.name).not.toBeUndefined()
        expect(bidder.name).not.toBeNull()
        expect(bidder.name).toBe(expectedValue)
    })
})


export {}
