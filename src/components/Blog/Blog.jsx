import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import "./Blog.css";

const Blog = () => {
    return (
        <>
            <Container fluid className='blog-header bg-primary text-light d-flex justify-content-center align-items-center'>
                <h1 className='text-center fw-bold'>Blog</h1>
            </Container>
            <Container className='my-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <h3>What is cors?</h3> </Accordion.Header>
                        <Accordion.Body>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h3>Why are you using firebase? What other options do you have to implement authentication?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Google Firebase allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.
                            </p>
                            <p>
                                <h4>Firebase Alternatives</h4>
                                <ul>
                                    <li>Supabase</li>
                                    <li>Kuzzle</li>
                                    <li>Back4App</li>
                                    <li>MongoDB</li>
                                    <li>Passport</li>
                                    <li>Octa</li>
                                    <li>JSON Web Token</li>
                                </ul>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h3>How does the private route work?</h3></Accordion.Header>
                        <Accordion.Body>
                            The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h3>What is Node? How does Node work?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Node.js, which is a run-time environment that includes everything required to execute a program written in JavaScript.
                            </p>
                            <p>
                                Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.
                                In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

export default Blog;