import React from 'react';
import { Link } from "react-router-dom";

export default function Firewall({ firewall }) {

    return (
        <div>
            <button className='item-button'><Link to={`/firewall/${firewall._id}`}>{firewall.brand} {firewall.deviceName}</Link></button>
        </div>
    )
}