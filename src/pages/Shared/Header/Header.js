import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
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
                    <Nav className="me-auto fs-5">
                        <Link className="me-3 text-decoration-none" to="/courses">Courses</Link>
                        <Link className="me-3 text-decoration-none" to="/blog">Blog</Link>
                        <Link className="text-decoration-none" to="/faq">FAQ</Link>
                    </Nav>
                    <Nav className="fs-5">
                        <Nav.Link href="#deets">Dark</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            User
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
