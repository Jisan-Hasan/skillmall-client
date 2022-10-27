import React from "react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const course = useLoaderData();
    const {
        id,
        title,
        instructor,
        rating,
        students,
        time,
        lesson,
        fee,
        img,
        details,
        content,
    } = course;
    return (
        <>
            <Navbar className="rounded px-2" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>{title}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="white">
                                <FaRegFilePdf className="text-white" />
                            </Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid">
                <Image className="img-fluid mx-auto" src={img} />
            </div>
            <div>
                <h5>{details}</h5>
                <p>
                    Instructor: <span className="">{instructor}</span>
                </p>
                <h4>Fee: {fee}</h4>
                <p>Rating: {rating}</p>
                <h4>What you will learn: </h4>
                <ul>
                    {content.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                    ))}
                </ul>
                <Link
                    size="lg"
                    to={`/courses/checkout/${id}`}
                    className="text-decoration-none text-white"
                >
                    <div className="d-grid gap-2 mt-5">
                        <Button variant="primary" size="lg">
                            Get Premium Access
                        </Button>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default CourseDetails;
