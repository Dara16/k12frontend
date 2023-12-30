import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <div>
                <h1>K12 DATA SOLUTIONS</h1>
            </div>
            <h3>Select Your Device Type</h3>
            <NavLink to="/computer">Computer</NavLink>
        </div>
    )
}