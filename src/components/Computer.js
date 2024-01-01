import React from 'react';
import { Link } from "react-router-dom";

export default function Computer({ computer }) {

    return (
        <div>
            <Link to={`/computer/${computer._id}`}><p>{computer.brand} {computer.deviceName}</p></Link>
        </div>
    )
}