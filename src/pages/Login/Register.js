import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
    const { createUser, error, setError, updateUserProfile } =
        useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError("");
                handleUpdateUserProfile(name, photoURL);
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });

        // console.log(name, photoURL, email, password);
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((e) => console.log(e));
    };
    return (
        <Form
            onSubmit={handleSubmit}
            style={{ minWidth: "350px" }}
            className="container-lg w-25 my-5 py-5"
        >
            <Form.Group className="mb-4">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                    name="photo"
                    type="text"
                    placeholder="profile photo url"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />
            </Form.Group>
            <Form.Text className="text-muted mb-4 d-block">
                Already have an account? <Link to="/login">Login</Link>
            </Form.Text>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger mt-4 d-block">{error}</Form.Text>
        </Form>
    );
};

export default Register;
