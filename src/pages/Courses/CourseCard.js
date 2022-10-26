import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { id, title, instructor, rating, students, time, lesson, fee, img } =
        course;
    return (
        <Col lg={6}>
            <Card className="mb-3">
                <Card.Img className="img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><Link className="text-decoration-none text-white" to={`/courses/${course.id}`}>See Details</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;
