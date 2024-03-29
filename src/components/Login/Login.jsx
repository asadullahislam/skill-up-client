import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';


const Login = () => {
    const { providerLoginWithGoogle, providerLoginWithGithub, userLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState(null);
    const handleLogin = (event) => {
        setError(null);
        event.preventDefault();
        const form = event.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        console.log(userEmail, userPassword);
        userLogin(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Log in Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => setError("Invalid Email & Password"));
        form.reset();

    }
    const handleGoogleLogIn = () => {
        providerLoginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Log in Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });

    }
    const handleGitHubLogIn = () => {
        providerLoginWithGithub(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Log in Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });

    }
    return (
        <div className='mt-5'>
            <div>
                <div>
                    <Form onSubmit={handleLogin} className='w-1/2 text-white p-4 mrounded-3 shadow mb-5 mx-auto'>
                        <h3 className='text-center'>Log In</h3>
                        <label className="form-control w-full mx-auto max-w-xs text-center ">
                            <div className="label">
                                <span className="label-text">Email address</span>
                            </div>
                            <input name='email' type="email" placeholder="Enter email" className="input input-bordered text-black w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full mx-auto max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs text-black" />
                        </label>



                        <button className="btn btn-success" type="submit">  Log in</button>
                        {/* <Button variant="primary" type="submit" className='w-100 my-3'>
                            Log in
                        </Button> */}
                        {
                            error ?
                                <div className='py-2 bg-light text-danger text-center rounded'>
                                    <p className='m-0 p-0'>Error!</p>
                                    <small>{error}</small>
                                </div>
                                :
                                <></>
                        }
                        <hr></hr>
                        <p className='text-center'>Or</p>
                        <Button className='w-100 rounded-0 py-3 border border-0 login-btn' onClick={handleGoogleLogIn} > <FaGoogle />  Sign in with Google</Button>
                        <Button className='w-100 rounded-0 py-3 mt-3 border border-0 login-btn' onClick={handleGitHubLogIn} > <FaGithub />  Sign in with GitHub</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;