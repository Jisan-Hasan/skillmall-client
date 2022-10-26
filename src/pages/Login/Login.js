import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <Form
            style={{ minWidth: "350px" }}
            className="container-lg w-25 my-5 py-5"
        >
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Form.Text className="text-muted mb-4 d-block">
                Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-muted mt-4 d-block">error</Form.Text>

            <div className="text-center mt-4">
                <p>or sign up with:</p>
                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <FaGoogle />
                </button>

                <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                >
                    <FaGithub />
                </button>
            </div>
        </Form>
    );
};

export default Login;
