import React from 'react';
import { Link } from 'react-router-dom';

export default function Computer({ computer }) {
    console.log(computer)
    return (
        <div>
            <Link to={`/computer/${computer.computerId}`} ><p>{computer.brand} {computer.deviceName}</p></Link>
        </div>
    )
}