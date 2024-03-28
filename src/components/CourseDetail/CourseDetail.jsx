import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./CourseDetails.css"
import { FaCartArrowDown, FaFileDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetail = () => {
    const course = useLoaderData();

    const ref = React.createRef();
    console.log(course);
    return (


        <div>


            <div>

                <div>

                    <div>

                        <div>
                            <Image className='w-100 rounded' src={course.picture}></Image>
                        </div>

                        <div className='grid grid-cols-1 gap-5' >
                            <h3 className='font-bold text-2xl'>{course.name}</h3>
                            <p>Rating: <span className='bg-warning px-3 py-1 rounded'>{course.rating}</span> </p>
                            <div className='font-bold'><p>Price:{course.price} </p></div>
                        </div>
                    </div>

                </div>
                <div className='mt-5'>
                    <div>
                        <h3 className='text-3xl font-bold mb-5'>Description</h3>
                        <hr />
                        <p className='text-muted text-justify'>{course.details}</p>
                    </div>
                </div>

                {/* <div className=' text-white' lg={3}>
                    <Link to={`/courses/course/${course._id}/purchase`}><Button className='btn btn-lg my-3 fw-bold border border-0 my-button-1 w-100'><FaCartArrowDown></FaCartArrowDown> Get Premium Access</Button></Link>
                    <Pdf targetRef={ref} filename={course.name} scale={0.9}>
                        {({ toPdf }) => <Button className='btn ' onClick={toPdf}> <FaFileDownload></FaFileDownload> Download Pdf</Button>}
                    </Pdf>
                </div> */}
            </div>


        </div >
        // <Card>
        //     <Card.Header as="h5">Course Details</Card.Header>
        //     <Card.Body>
        //         <Card.Title>{course.name}</Card.Title>
        //         <Card.Img src={course.picture} />
        //         <Card.Text>
        //             {course.details}
        //         </Card.Text>
        //         <div className='w-100 d-flex justify-content-between'>
        //             <div>Rating: {course.rating}</div>
        //             <div className='fw-bold text-danger'>Price {course.price}</div>
        //         </div>
        //         <div className='d-flex justify-contend-end'>
        //         <Link className='mt-auto' to={`/courses/course/${course._id}/purchase`}><Button variant="primary" className='w-100 my-3'>Get Premium Access</Button></Link>
        //         </div>
        //     </Card.Body>
        // </Card>

    )
};

export default CourseDetail;