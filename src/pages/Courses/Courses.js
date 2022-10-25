import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Row className="mt-4">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
            ))}
        </Row>
    );
};

export default Courses;
