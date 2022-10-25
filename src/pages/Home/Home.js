import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Home = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row className="d-lg-flex justify-content-between align-items-center">
                    <Col lg="6">
                        <Image className="img-fluid w-75" src="robot-1.png" />
                    </Col>
                    <Col lg="6">
                        <h1>Better Future Learn the Secrets Life Success.</h1>
                        <p>
                            Better future at volutpat diam ut. Purus sit amet
                            luctus venenatis lectus magna dui sapien eget mi
                            proin sed libero enim sed. Tempor orci eu lobortis
                            elementum nibh tellus molestie at urna condimentum
                            mattis pellentesque id nibh tortor id.
                        </p>
                        <div className="d-md-flex justify-content-between">
                            <div>
                                <h2>4.8</h2>
                                <p>Rating Course</p>
                            </div>
                            <div>
                                <h2>6+</h2>
                                <p>Online Courses</p>
                            </div>
                            <div>
                                <h2>15 k+</h2>
                                <p>Students Enrolled</p>
                            </div>
                        </div>
                        <div>
                            <Button className="me-2" variant="primary">
                                See Courses
                            </Button>
                            <Button variant="outline-dark">Login</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
