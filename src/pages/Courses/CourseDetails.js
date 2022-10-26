import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, title, instructor, rating, students, time, lesson, fee, img } = course;
    return (
        <div>
            <p>{course.title}</p>
        </div>
    );
};

export default CourseDetails;