import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./CourseCard.css";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
    console.log(course.details.length);
    const shortDetails = course.details.slice(0, 100);
    return (
        <Col sm={12} lg={4}>
            <Card className=''>
                <Card.Img variant="top" src={course.picture} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='font-bold'>{course.name}</Card.Title>
                    <Card.Text>
                        <small>{shortDetails}... <span className='text-primary'>Read More</span></small>
                    </Card.Text>
                    <div className='mt-auto w-100 d-flex justify-content-between align-items-center'>
                        <div className='text-4xl text-yellow-400'> <p className='m-0 p-0'><FaStar ></FaStar> {course.rating}</p></div>
                        <h4 className=' text-2xl font-bold'>{course.price}</h4>
                    </div>
                    <Link className='mt-auto' to={`/courses/course/${course._id}`}><Button variant="light" className='btn'>Enroll Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;