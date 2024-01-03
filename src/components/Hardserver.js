import React from 'react';
import { Link } from "react-router-dom";

export default function Hardserver({ hardserver }) {


    return (
        <div>
            <button className='item-button'><Link to={`/hardserver/${hardserver._id}`}>{hardserver.brand} {hardserver.deviceName}</Link></button>
        </div>
    )
}