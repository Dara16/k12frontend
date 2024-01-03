import React from 'react';
import { Link } from "react-router-dom";

export default function Computer({ computer }) {

    return (
        <div>
            <button className='item-button'><Link to={`/computer/${computer._id}`}>{computer.brand} {computer.deviceName}</Link></button>
        </div>
    )
}