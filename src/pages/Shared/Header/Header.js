import React, { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { FaLightbulb, FaRegLightbulb, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
    // const [theme, setTheme] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {})
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="fs-1 d-flex align-items-center"
                >
                    <img
                        className="me-1"
                        src="robot-1.png"
                        alt="logo"
                        width="60px"
                        height="40px"
                    />
                    SkillMall
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-4 fs-5">
                        <Link
                            className="me-4 text-decoration-none text-warning"
                            to="/courses"
                        >
                            Courses
                        </Link>
                        <Link className="me-4 text-decoration-none text-warning" to="/blog">
                            Blog
                        </Link>
                        <Link className="text-decoration-none text-warning" to="/faq">
                            FAQ
                        </Link>
                    </Nav>
                    <Nav className="fs-5">
                        <Nav>
                            {user?.uid ? (
                                <>
                                    {user?.photoURL ? (
                                        <Image
                                            className="me-2"
                                            title={user?.displayName}
                                            style={{
                                                height: "40px",
                                                width: "40px",
                                            }}
                                            src={user.photoURL}
                                            roundedCircle
                                        />
                                    ) : (
                                        <FaUser />
                                    )}

                                    <Button variant="danger" onClick={handleSignOut}>
                                        Sign Out
                                    </Button>
                                </>
                            ) : (
                                <Button>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </Button>
                            )}
                            <Form className="mx-2 mt-1">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch"
                                />
                            </Form>
                        </Nav>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            {}
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
