
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from "react-icons/fa";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Signed Out Successful!");
            })
            .catch(error => console.error(error));
    }

    const navItems = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/courses'><li><a>Courses</a></li></Link>
        <Link to='/faq'><li><a>FAQ</a></li></Link>
        <Link to='/'><li><a>Blog</a></li></Link>




    </>

    const userLogSome = <>

        <div className='grid grid-cols-2  gap-3 '>
            <div>
                {
                    user?.uid ?
                        <>
                            {user.uid ? <p>{user.displayName ? user.displayName : 'User'}</p> : <></>}
                            <div className='flex lg:text-center justify-center pe-3 py-2'>
                                {user?.photoURL ?
                                    <Image alt='p' className='border border-light border-3' title={user?.displayName} style={{ height: '30px', width: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    :
                                    <FaUser title={user.displayName ? user.displayName : user.email} className='text-white'></FaUser>
                                }
                            </div>
                        </>

                        : <></>
                }
            </div>

            <div>
                {
                    user?.uid ?
                        <Link onClick={handleLogOut}><Button variant="light">Log Out</Button></Link>
                        :
                        <Link to='/login'><Button variant="light">Log in</Button></Link>
                }
            </div>

        </div>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">


                            {navItems}
                            {userLogSome}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Skill Up</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navItems}
                        {userLogSome}
                        <Nav>
                            <ToggleSwitch label="Theme"></ToggleSwitch>
                        </Nav>
                    </ul>
                </div>


            </div>








        </div>

    );
};

export default Header;