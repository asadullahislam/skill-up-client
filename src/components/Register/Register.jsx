import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        setError(null);
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        const userConfirmPassword = form.confirmPassword.value;
        if (userPassword !== userConfirmPassword) {
            setError("Password didn't match");
            form.password.value = '';
            form.confirmPassword.value = '';
            return;
        }

        console.log(userEmail, userPassword, userName);
        createUser(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Registration Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => setError(error));
        form.reset()
    }
    return (
        <div className='mt-5'>
            <div>
                <div>
                    <Form onSubmit={handleRegister} className='my-form bg-dark text-white p-4 mx-auto rounded-3 shadow mb-5' >
                        <h3 className='text-center fw-bold'>Create An Account</h3>



                        <label className="form-control w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Your Name</span>
                            </div>
                            <input required name='name' type="text" placeholder="Your Full Name" className="input input-bordered w-full text-black max-w-xs" />
                        </label>
                        <label className="form-control w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Email address</span>
                            </div>
                            <input required name='email' type="email" placeholder="Enter email" className="input input-bordered w-full text-black max-w-xs" />
                        </label>

                        <label className="form-control text-black w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input required name='photoURL' type="link" placeholder="Your Photo Url" className="input input-bordered text-black w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input required name='password' type="password" placeholder="Password" className="input input-bordered text-black w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Confirm Password</span>
                            </div>
                            <input required name='confirmPassword' type="password" placeholder="Re-Type Password" className="input text-black input-bordered w-full max-w-xs" />
                        </label>




                        {
                            error ?
                                <div className='py-2 bg-light text-danger text-center rounded'>
                                    <p className='m-0 p-0'>Error!</p>
                                    <small>{error}</small>
                                </div>
                                :
                                <></>
                        }
                        <Button variant="primary" type="submit" className='w-100 my-3'>
                            Register
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Register;