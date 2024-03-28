import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <>
            <div className=' text-9xl font-bold text-light text-purple-500 flex justify-center text-center'>
                <h1 className='text-center fw-bold'>FAQs</h1>
            </div>
            <div className='my-5 grid grid-cols-1 gap-5'>


                <div>
                    <div className='mb-3'>
                        <h3 className='text-3xl font-semibold '>How to enroll a course?</h3>
                    </div>
                    <li>
                        Select your desire course and go to get premium access. You need to Log in first. If you don't have an account you must register an account first.
                    </li>
                </div>


                <div>

                    <div className='text-3xl font-bold '>
                        <h3>Is the course provide certificate?</h3>
                    </div>
                    <li>
                        Yes. We will provide Certificate after completing particular course.
                    </li>
                </div>


                <div>
                    <div className='text-3xl font-bold'>
                        <h3>How to contact?</h3>
                    </div>
                    <li>
                        Get help from support@skillup.com.
                    </li>
                </div>

            </div>
        </>
    );
};

export default FAQ;