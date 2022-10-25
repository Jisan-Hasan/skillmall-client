import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CoursesLeftNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCourses(data))
        .catch(error => {
            console.log(error);
        })
    }, []);
    console.log(courses);
    return (
        <div>
            <h4>All Courses</h4>
            {
                courses.map(course => <p key={course.id}>{course.title}</p>)
            }
        </div>
    );
};

export default CoursesLeftNav;