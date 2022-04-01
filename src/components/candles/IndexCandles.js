import React, { useState, useEffect } from 'react'
import { getAllCandles } from '../../api/candles'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS syntax
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}
const IndexCandles = (props) => {
    const [candles, setCandles] = useState(null)
    const {msgAlert, user} = props
    console.log('this is props', props)
    useEffect(() => {
        getAllCandles(user)
            .then(res => {
                setCandles(res.data.candles)
                console.log('this is res', res)
            })
            .then(() =>
                msgAlert({
                    heading: 'Candles index! Success!',
                    message: messages.indexCandleSuccess,
                    variant: 'success',
                }))
                .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: messages.indexCandleFailure,
                    variant: 'danger',
                }))
            .catch(error=> console.error)
    }, [])

    if (!candles) {
        return <p>loading...</p>
    } else if (candles.length === 0) {
        return <p>no candles yet, go add some</p>
    }

    let candleCards

    if (candles.length > 0) {
        candleCards = candles.map(candle => (
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            <Card key={candle.id} style={{ width: '30%' }} className="m-2">
                
                <Card.Body>
                    <Card.Text>
                        <Link to={`/candles/${candle._id}`}>View {candle.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>All the candles</h3>
            <div style={cardContainerLayout}>
                {candleCards}
            </div>
        </>
    )
}

export default IndexCandles