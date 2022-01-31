import axios, { AxiosPromise, AxiosResponse } from 'axios';
const baseUrl = 'https://poloniex.com';
const axiosInstance = axios.create({ baseURL: baseUrl });
export interface apiQuote {
    id: string,
    last: string,
    lowestAsk: string,
    highestBid: string,
    percentChange:string,
    baseVolume: string,
    quoteVolume: string,
    isFrozen: string,
    postOnly: string,
    high24hr: string,
    low24hr: string
}
export interface Quote {
    id: string,
    name: string,
    last: string,
    lowestAsk: string,
    highestBid: string,
    percentChange:string,
    baseVolume: string,
    quoteVolume: string,
    isFrozen: string,
    postOnly: string,
    high24hr: string,
    low24hr: string
}

export interface Answer {
    [key: string]: apiQuote
}
export async function getQuotes(): Promise<Quote[]|undefined> {
    console.log('getting result')
    const res: AxiosResponse<Answer,any> = await axiosInstance.get('public?command=returnTicker')
    if (res && res.status == 200) {
       return Object.entries(res.data).map(([key, value]) => ({name: key, ...value }))
    } 
}