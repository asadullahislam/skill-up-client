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
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Form onSubmit={handleLogin} className='my-form bg-dark text-white p-4 mx-auto rounded-3 shadow mb-5'>
                        <h3 className='text-center'>Log In</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Text className='d-block'>
                            <small> Didn't have a Account? <Link to='/register'>Create New.</Link></small>
                        </Form.Text>

                        <Button variant="primary" type="submit" className='w-100 my-3'>
                            Log in
                        </Button>
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
                </Col>
            </Row>
        </Container>
    );
};

export default Login;