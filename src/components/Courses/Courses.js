import React, { useState } from 'react';
import courseData from '../../data/data.json';
import './courses.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Courses = () => {
    const first12 = courseData.slice(0, 12)
    const [course, setCourse] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course)=> {
        const newCart = [...cart , course];
        setCart(newCart);

    }
    return (
        <div className="main-container d-flex">
            <div className="course-container col-md-9">
                {
                    course.map(course => <Course courseInfo = {course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>

            <div className="cart-container cold-md-3">
                <br/>
                <Cart cart ={cart} price={cart.price}></Cart>
            </div>
        </div>
    );
};

export default Courses;