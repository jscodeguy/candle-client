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

// POST -> create function
export const createCandle = (user, newCandle) => {
    console.log('user', user)
    console.log('this is newCandle', newCandle)
    return axios({
        url: `${apiUrl}/candles`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { candle: newCandle }
    })
}