import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const { courses } = useContext(AuthContext);
    return (

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

            {
                courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
            }
        </div>


    );
};

export default Courses;