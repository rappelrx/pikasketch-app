import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                <Link to="/create">Create New Pokemon</Link>
                <Link to="/view">View All Pokemon</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;