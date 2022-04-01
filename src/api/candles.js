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
// PATCH -> update function
export const updateCandle = (user, updatedCandle) => {
    console.log('user', user)
    console.log('this is newCandle', updatedCandle)
    return axios({
        url: `${apiUrl}/candles/${updatedCandle.id}`,
        method: 'PATCH',
        data: { candle: updatedCandle }
    })
}
// DELETE -> remove function
export const removeCandle = (user, candleId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/candles/${candleId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}