import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const Destination = () => {
    return (
        <Container className='mt-4 pt-4'>
            <h4 className='text-primary text-center mb-4'>Welcome to <span className='text-success'>Travel Guru</span></h4>
            <Form className='w-50 mx-auto'>
                <Form.Group className='mb-3'>
                    <Form.Label className='text-muted'>Origin</Form.Label>
                    <Form.Control type='text' name='origin' placeholder='Enter your origin' required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='text-muted'>Destination</Form.Label>
                    <Form.Control type='text' name='destination' placeholder='Enter your destination' required />
                </Form.Group>
                <Row className='mb-3'>
                    <Col className='mb-3'>
                        <Form.Group>
                            <Form.Label className='text-muted'>From</Form.Label>
                            <Form.Control type='text' name='from' placeholder='Date' required />
                        </Form.Group>
                    </Col>
                    <Col className='mb-3'>
                        <Form.Group>
                            <Form.Label className='text-muted'>To</Form.Label>
                            <Form.Control type='text' name='to' placeholder='Date' required />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className='d-grid'>
                    <Button className='' variant='warning' type='submit'><Link className='text-decoration-none text-dark' to={`/category/0`}>Start Booking</Link></Button>
                </Form.Group>
            </Form>
        </Container >
    );
};

export default Destination;