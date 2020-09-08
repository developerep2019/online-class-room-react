import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    console.log(props)
    const { image, name, instructor, price } = props.courseInfo;
    return (
        <div>
            <div className="card d-flex float-left cards">
                <img src={image} className="card-img-top" alt="card image top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>{instructor}</small>
                    <h6>Price : ${price}</h6>
                    <button className="btn btn-success" onClick={props.handleAddCourse}><FontAwesomeIcon icon={faBook} /> Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;