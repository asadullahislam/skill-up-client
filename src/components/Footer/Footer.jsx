import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='m-0 p-0'>
            <footer className="text-center text-white bg-dark">

                <div className="container p-4 pb-0">

                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <Link to={'/register'}><button type="button" className="btn btn-outline-light btn-rounded">
                                Sign up!
                            </button></Link>
                        </p>
                    </section>

                </div>



                <div className="text-center p-3">
                    © 2022 Copyright:
                    <a className="text-white" href="https://facebook.com/rezwan.rr">Rezwan Ibne Amin</a>
                </div>

            </footer>
        </Container >
    );
};

export default Footer;