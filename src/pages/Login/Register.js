import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Form style={{minWidth: "350px"}} className="container-lg w-25 my-5 py-5">
                <Form.Group className="mb-4" >
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Full Name" required/>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="profile photo url" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted mb-4 d-block">
                    Already have an account? <Link to="/login">Login</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-muted mt-4 d-block">error
                </Form.Text>
            </Form>
    );
};

export default Register;
