import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <div>
                <h1>K-12 DATA SOLUTIONS</h1>
            </div>
            <h3>Select Your Device Type</h3>
            <NavLink to="/computer">Computer</NavLink>
            <NavLink to="/tablet">Tablet</NavLink>
            <NavLink to="/workstation">Workstation</NavLink>
            <NavLink to="/hardserver">Server</NavLink>
            <NavLink to="/phone">Mobile Phone</NavLink>
            <NavLink to="/firewall">Firewall</NavLink>
            <NavLink to="/network">Network Communication Device</NavLink>
            <NavLink to="/iot">IoT Device</NavLink>
        </div>
    )
}