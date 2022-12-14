import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import CoursesLeftNav from "../pages/Courses/CoursesLeftNav";

const CourseLayout = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col lg="3">
                    <CoursesLeftNav />
                </Col>
                <Col lg="9">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default CourseLayout;
