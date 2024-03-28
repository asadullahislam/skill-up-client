import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Purchase.css';

const Purchase = () => {
    const course = useLoaderData();
    return (
        <div className='mt-5' style={{minHeight: '70vh'}}>
            <h1 className='mb-5 text-center'>Checkout</h1>
            <div className='bg-dark text-light checkout-box mx-auto py-5 px-3'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5>Buy the course: {course.name}</h5>
                            <div><Button disabled className='btn rounded-5 fw-bold btn-info border border-0'>{course.price}</Button></div>
                        </Col>
                        <Col className='d-flex justify-content-end' lg={4}>
                            <Button className='btn-light px-4' >Purchase Now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Purchase;