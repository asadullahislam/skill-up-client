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
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Form onSubmit={handleRegister} className='my-form bg-dark text-white p-4 mx-auto rounded-3 shadow mb-5' >
                        <h3 className='text-center fw-bold'>Create An Account</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control required name='name' type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required name='email' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control required name='photoURL' type="link" placeholder="Your Photo Url" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required name='confirmPassword' type="password" placeholder="Re-Type Password" />
                        </Form.Group>
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
                </Col>
            </Row>
            
        </Container>
    );
};

export default Register;