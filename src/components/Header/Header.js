import React from 'react';
import './header.css';
import logo from '../../data/logo.png'
const Header = () => {

    return (
        <div className='text-center'>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <a href="" className="nav-link"><img src={logo} className="nav-link" alt="" className="headerImg"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Courses <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;