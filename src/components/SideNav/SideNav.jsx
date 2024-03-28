import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ListGroupItem } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaChevronRight } from "react-icons/fa";
import "./SideNav.css";

const SideNav = () => {
    const { courses } = useContext(AuthContext);
    return (
        <div className='bg-transparent'>
            {
                courses.map(course => <Link key={course._id} to={`course/${course._id}`}>

                    <div className='grid grid-cols-1 bg-white'>
                        <div className='border  p-3 m-1 text-purple-500 shadow-sm'>
                            <p className='p-0 m-0 gap-0'><li>{course.name}</li></p>
                        </div>
                    </div>

                </Link>
                )
            }
        </div>
    );
};

export default SideNav;