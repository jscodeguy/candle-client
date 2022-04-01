import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CandleForm from '../shared/CandleForm'

const EditCandleModal = (props) => {
    const { user, show, handleClose, updateCandle, msgAlert, triggerRefresh } = props
    const [candle, setCandle] = useState(props.candle)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setCandle(prevCandle => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
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

        console.log('the candle to submit', candle)
        updateCandle(user, candle)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Candle Updated! Success!',
                    message: 'good job',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'bad job',
                    variant: 'danger',
                }))
        console.log('this is the candle', candle)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <CandleForm 
                    candle={candle}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit candle!"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditCandleModal