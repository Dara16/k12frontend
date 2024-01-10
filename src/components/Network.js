import React from 'react';
import { Link } from "react-router-dom";

export default function Network({ network }) {

    return (
        <div>
            <button className='item-button'><Link to={`/network/${network._id}`}>{network.brand} {network.deviceName} {network.deviceType}</Link></button>
        </div>
    )
}