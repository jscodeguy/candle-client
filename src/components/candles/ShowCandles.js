import React, {useState, useEffect} from 'react'
import { getOneCandle, removeCandle } from '../../api/candles'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import {showCandleSuccess, showCandleFailure} from '../shared/AutoDismissAlert/messages'
// import EditCandleModal from './EditCandleModal'

const ShowCandle = (props) => {

    const [candle, setCandle] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { id } = useParams()
    console.log('id in showCandle', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneCandle(id)
            .then(res => setCandle(res.data.candle))
            .then(() => {
                msgAlert({
                    heading: 'Here is the candle!',
                    message: showCandleSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No candle found',
                    message: showCandleFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    if (!candle) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{candle.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Scent: {candle.scent}</small><br/>
                            <small>Brand: {candle.brand}</small><br/>
                            <small>How long it will burn: {candle.hoursOfBurn}</small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Candle
                        </Button>
                        <Button className="m-2" variant="danger">
                            Delete Candle
                        </Button>

                    </Card.Footer>
                </Card>
            </Container>
            {/* <EditCandleModal 
                candle={candle}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateCandle={updateCandle}
                handleClose={() => setModalOpen(false)}
            /> */}
        </>
    )
}

export default ShowCandle