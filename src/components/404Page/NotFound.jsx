import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <Container className='d-flex justify-content-center mt-5'>
            <div className='nf-image'>
                <Image className='w-100' src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif'></Image>
                <h3 className='text-center mt-4'>Back to <Link to={'/'}>Home</Link></h3>
            </div>
            
        </Container>
    );
};

export default NotFound;