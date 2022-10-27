import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoursesLeftNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://skillmall.vercel.app/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // console.log(courses);
    return (
        <div>
            <h4>All Courses</h4>
            <Card className="mt-3">
                <ListGroup variant="flush">
                    {courses.map((course) => (
                        <ListGroup.Item key={course.id}>
                            <Link to={`/courses/${course.id}`} className="text-decoration-none text-black">{course.title}</Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
};

export default CoursesLeftNav;
