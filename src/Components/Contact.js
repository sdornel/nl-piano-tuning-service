import React from 'react'
import {Form} from 'react-bootstrap'

const Contact = (props) => {
    return (
        <div >
            {/* check https://medium.com/kirsten-werner/using-a-react-form-to-send-information-directly-to-your-email-2c9666f0d63a */}
            {/* need to make the form send an email */}
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="subject" placeholder="subject" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                </Form>
        </div>
    )
}

export default Contact