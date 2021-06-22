import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <div className="menu">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
