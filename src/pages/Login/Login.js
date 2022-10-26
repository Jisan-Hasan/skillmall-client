import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return (
            <Form style={{minWidth: "350px"}} className="container-lg w-25 my-5 py-5">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted mb-4 d-block">
                    Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted mt-4 d-block">error
                </Form.Text>
            </Form>
        
    );
};

export default Login;
