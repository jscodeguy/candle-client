import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CandleForm = ({ candle, handleSubmit, handleChange}) => (
    
    <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="what is the name of the candle?"
                    value={candle.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Scent</Form.Label>
                <Form.Control 
                    placeholder="what scent is the candle?"
                    value={candle.scent}
                    name='scent'
                    onChange={handleChange}
                />
                <Form.Label>Brand</Form.Label>
                <Form.Control 
                    placeholder="what brand of candle is it?"
                    value={candle.brand}
                    name='brand'
                    onChange={handleChange}
                />
                <Form.Label>Burn length</Form.Label>
                <Form.Control 
                    placeholder="how many hours can it burn?"
                    value={candle.hoursOfBurn}
                    type="number"
                    name='hoursOfBurn'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
  
)
  export default CandleForm