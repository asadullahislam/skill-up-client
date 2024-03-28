import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Coursemain = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div className='mb-0' style={{ minHeight: '100vh' }}>
                <div className='bg-my-bg-2 pt-5' ><SideNav></SideNav></div>
                <div className='py-5 mb-5'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Coursemain;