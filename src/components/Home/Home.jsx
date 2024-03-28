
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaCode, FaChartLine, FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Container className='p-0 m-0' >
                <Image className='w-100' src='/images/banner1.png' ></Image>
            </Container>
            <Container fluid className='p-0 m-0'>
                <div className='grid grid-cols-1 gap-7'>

                    <div>
                        <div className='pb-5 mt-10'>
                            <h1 className='text-4xl font-bold'><FaCode /></h1>
                        </div>
                        <h3 className='text-4xl font-bold mb-5'>#1 Developing Course</h3>
                        <p>Get the best courses of Developing and Be the best Developer </p>
                    </div>
                    <div>
                        <div>
                            <div className='pb-4'>
                                <h1 className='text-4xl font-bold'><FaChartLine /></h1>
                            </div>
                            <h3 className='text-4xl font-bold mb-5'>Student Analysis</h3>
                            <p>Deep Analysis on your Learning and quize.</p>
                        </div>
                    </div>
                    <div>
                        <div className='pb-4'>
                            <h1 className='text-4xl font-bold'><FaHeadset /></h1>
                        </div>
                        <h3 className='text-4xl font-bold mb-5'>24/7 Support</h3>
                        <p>An Expert Team is always there to help and support you.</p>
                    </div>
                </div>

                <div>

                    <div>
                        <h1>We provide the best Courses to be Skilled</h1>
                    </div>

                    <div><Link to={'/courses'}><Button className='btn btn-lg bg-light text-dark fw-bold px-5 py-3'>Get Started</Button></Link></div>
                </div>

            </Container>
        </>
    );
};

export default Home;