import React from 'react';
import { Link } from "react-router-dom";

export default function Workstation({ workstation }) {

    return (
        <div>
           <button className='item-button'><Link to={`/workstation/${workstation._id}`}>{workstation.brand} {workstation.deviceName}</Link></button>

        </div>
    )
}