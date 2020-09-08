import React, { useState } from 'react';
import courseData from '../../data/data.json';
import './courses.css'
import Course from '../Header/Course/Course';

const Courses = () => {
    const first12 = courseData.slice(0, 12)
    const [course, setCourse] = useState(first12);
    const handleAddCourse = ()=> {
        console.log('added');
    }
    return (
        <div className="main-container d-flex">
            <div className="course-container col-md-10">
                {
                    course.map(course => <Course courseInfo = {course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>

            <div className="cart-container cold-md-2">
                <h4>This is Cart</h4>
            </div>
        </div>
    );
};

export default Courses;