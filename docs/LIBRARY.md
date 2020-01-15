# SPSBAR - Library

## Overview
 
Source files are located in `<projectRoot>/src/`

Files are written using TypeScript and compiled with binary `tsc` into the `<projectRoot>/lib/` folder.
 

## Concepts

An "Auction" can have one or many `AuctionSlot`.

An `AuctionSlot` can hold one `AuctionableItem`, a `reservePrice` for that item, and a `BidCollection`

> NOTE: For this exercise, I started at the slot level since only one item was required.

An `AuctionableItem` is the object or service to be auctioned off.

> NOTE: In a real world situation, `AuctionableItem` should probably be an interface

A `Bidder` represent an agent able to place bids on an `AuctionSlot` trying to win its `AuctionableItem` 

A `Bid` represents the action of a `Bidder` bidding on an `AuctionSlot` for a given `amount` of money.

> NOTE: all amounts are in cents.

## Usage example

```typescript
// Creating an auction slot proposing a Lawn Mower with a reserve price of 100 euros...
const slot = new AuctionSlot(new AuctionableItem('Lawn Mower'), BigInt(10000))

// Creating some agents ready to bid...
const bidderA = new Bidder('John Doe')
const bidderB = new Bidder('Jane Doe')

// Bidders bidding...
slot.placeBid(bidderA, BigInt(12500)) // 125 euros
slot.placeBid(bidderB, BigInt(13000)) // 130 euros

// Retrieving & displaying details about the current winner... 
const winner = slot.winner
if (winner === null) {
    console.log(`No winner !`)
}
else {
    console.log(`Winner is "${winner.bidder}" for "${winner.amount}" cents of euros`)
}

// output -> Winner is "Jane Doe" for "12500" cents of euros

```

 
 ## Compiling
 
Commands from `<projectRoot>`:
```shell script
# Prepare the output directory then compile TypeScript files. 
npm run build

# Same as "build" + test:coverage + typedoc generation  
npm run build:all

# Same as "build" but with watch mode enabled for hot re-compilation during development.
npm run dev
```
 

 
