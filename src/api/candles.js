import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCandles = () => {
    return axios(`${apiUrl}/candles`)
}

// show function
export const getOneCandle = (candleId) => {
    return axios(`${apiUrl}/candles/${candleId}`)
}