import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { id, details, title, instructor, rating, students, time, lesson, fee, img } =
        course;
    return (
        <Col lg={6}>
            <Card className="mb-3">
                <Card.Img
                    style={{ maxHeight: "250px" }}
                    className="img-fluid"
                    variant="top"
                    src={img}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div>Rating: {rating}</div>
                        <div>Fee: {fee}</div>
                        <div>Instructor: {instructor}</div>
                    </Card.Text>
                    <Card.Text>
                        {details.length > 100 ? details.slice(0,100) + "..." : details}
                    </Card.Text>
                    <Button variant="primary">
                        <Link
                            className="text-decoration-none text-white"
                            to={`/courses/${course.id}`}
                        >
                            See Details
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;
