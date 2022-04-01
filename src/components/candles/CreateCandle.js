import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createCandle } from '../../api/candles'
import {createCandleSuccess, createCandleFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import CandleForm from '../shared/CandleForm'

// create pet renders a form and calls createPet function
// maybe redirect(navigate) to the new pet show page
// props we'll need are user, msgAlert
const CreateCandle = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [candle, setCandle] = useState({name: '', scent: '', brand: '', hoursOfBurn: ''})
    console.log('candle in create', candle)
    //  an empty pet object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()

        setCandle((prevCandle) => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.hoursOfBurn)
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log('prevCandle', prevCandle)
            console.log('updatedValue', updatedValue)

            return {...prevCandle, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createCandle(user, candle)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/candles/${res.data.candle._id}`)})
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Candle Added! Success!',
                    message: createCandleSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: createCandleFailure,
                    variant: 'danger',
                }))
    }

    return (
        <CandleForm 
            candle={candle}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new candle!"
        />
    )
}

export default CreateCandle