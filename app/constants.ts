import { Quote } from "./types";

export const HeaderData: Quote = {
    id: 0,
    name: 'name',
    last: 'last',
    lowestAsk: 'lowestAsk',
    highestBid: 'highestBid',
    percentChange: 'percentChange',
    baseVolume: 'baseVolume',
    quoteVolume: 'quoteVolume',
    isFrozen: 'isFrozen',
    postOnly: 'postOnly',
    high24hr: 'high24hr',
    low24hr: 'low24hr',
  };
 export const RowsToView = ['name', 'percentChange', 'highestBid', 'last'];