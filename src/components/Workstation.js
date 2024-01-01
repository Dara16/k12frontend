import React from 'react';
import { Link } from "react-router-dom";

export default function Workstation({ workstation }) {

    return (
        <div>
            <Link to={`/workstation/${workstation._id}`}><p>{workstation.brand} {workstation.deviceName}</p></Link>

        </div>
    )
}