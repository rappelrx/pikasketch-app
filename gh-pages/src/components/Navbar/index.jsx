import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

/**
 * Navbar component with buttons that link to pages.
 */
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>PikaSketch</h1>
            </div>
            <div className="nav-buttons">
                <Link to="/pikasketch-app/create">Create New Pokemon</Link>
                <Link to="/pikasketch-app/view">View All Pokemon</Link>
            </div>
        </div>
    );
};

export default Navbar;