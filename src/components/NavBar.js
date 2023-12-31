import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
            </div>
        </div>
    )
}