import React from "react";
import { Container } from "react-bootstrap";
import {
    FaCopyright,
    FaFacebook,
    FaMailBulk,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitch,
    FaTwitterSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black mt-5 py-5">
            <Container>
                <div className="d-lg-flex justify-content-between text-white">
                    <div>
                        <img
                            className="me-1"
                            src="robot-1.png"
                            alt="logo"
                            width="80px"
                            height="80px"
                        />
                        <h2 className="mt-2">Skill Mall</h2>
                        <h6>Learn Skill First, Then Think For Earn</h6>
                    </div>
                    <div>
                        <h5>Important Links</h5>
                        <div className="mt-3">
                            <p>
                                <Link to="/courses" className="text-decoration-none text-white">
                                    Courses
                                </Link>
                            </p>
                            <p>
                                <Link to="/blog" className="text-decoration-none text-white">
                                    Blogs
                                </Link>
                            </p>
                            <p>
                                <Link to="/faq" className="text-decoration-none text-white">
                                    FAQ
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <div className="mt-3">
                            <p>
                                <FaPhoneAlt /> 01720001535
                            </p>
                            <p>
                                <FaMailBulk /> skillmall@gmail.com
                            </p>
                            <p>
                                <FaMapMarkerAlt /> NotunBazar, Vatara, Dhaka
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="text-center text-primary mt-5">
                    <FaFacebook size="1.5em" className="me-3" />
                    <FaTwitterSquare size="1.5em" className="me-3" />
                    <FaYoutubeSquare size="1.5em" className="me-3" />
                    <FaTwitch size="1.5em" />
                </div>
                <div className="text-center text-white mt-3 d-flex align-items-center justify-content-center">
                    <FaCopyright className="me-2" />  Jisan Hasan, 2022
                </div>
            </Container>
        </div>
    );
};

export default Footer;
