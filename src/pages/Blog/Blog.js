import React from "react";
import { Card, Container } from "react-bootstrap";

const Blog = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Popular Blogs.</h2>

            <Card>
                <Card.Header as="h5">What is cors?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Cross-origin resource sharing is a mechanism that allows
                        restricted resources on a web page to be requested from
                        another domain outside the domain from which the first
                        resource was served. A web page may freely embed
                        cross-origin images, stylesheets, scripts, iframes, and
                        videos.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-4">
                <Card.Header as="h5">
                    Why are you using `firebase`? What other options do you have
                    to implement authentication?
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase Authentication provides backend services,
                        easy-to-use SDKs, and ready-made UI libraries to
                        authenticate users to your app. It supports
                        authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and
                        Twitter, and more.
                        <h6 className="mt-2">
                            Other User Authentication Platforms
                        </h6>
                        <ul>
                            <li>STYTCH</li>
                            <li>Okta</li>
                            <li>Keycloak</li>
                            <li>Frontegg</li>
                            <li>Authress</li>
                            <li>Supabase</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-4">
                <Card.Header as="h5">
                    How does the private route work?
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        The private route component is similar to the public
                        route, the only change is that redirect URL and
                        authenticate condition. If the user is not authenticated
                        he will be redirected to the login page and the user can
                        only access the authenticated routes If he is
                        authenticated (Logged in). Private Routes in React
                        Router (also called Protected Routes) require a user
                        being authorized to visit a route
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-4">
                <Card.Header as="h5">
                    What is Node? How does Node work?
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Node. js is a JavaScript runtime environment that
                        achieves low latency and high throughput by taking a
                        “non-blocking” approach to serving requests. In other
                        words, Node. js wastes no time or resources on waiting
                        for I/O requests to return. It is a used as backend
                        service where javascript works on the server-side of the
                        application. This way javascript is used on both
                        frontend and backend. Node. js runs on chrome v8 engine
                        which converts javascript code into machine code, it is
                        highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;
