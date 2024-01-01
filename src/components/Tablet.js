import React from 'react';
import { Link } from "react-router-dom";

export default function Tablet({ tablet }) {

    return (
        <div>
            <Link to={`/tablet/${tablet._id}`}><p>{tablet.brand} {tablet.deviceName}</p></Link>
        </div>
    )
}