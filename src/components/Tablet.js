import React from 'react';
import { Link } from "react-router-dom";

export default function Tablet({ tablet }) {

    return (
        <div>
            <button className='item-button'><Link to={`/tablet/${tablet._id}`}>{tablet.brand} {tablet.deviceName}</Link></button>
        </div>
    )
}