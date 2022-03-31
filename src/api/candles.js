import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCandles = (user) => {
    console.log('this is user', user)
    return axios({
        url: `${apiUrl}/candles`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}