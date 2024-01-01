import React from 'react';
import { Link } from "react-router-dom";

export default function Hardserver({ hardserver }) {


    return (
        <div>
            <Link to={`/hardserver/${hardserver._id}`}><p>{hardserver.brand} {hardserver.deviceName}</p></Link>
        </div>
    )
}