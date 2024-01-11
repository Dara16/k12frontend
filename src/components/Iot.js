import React from 'react';
import { Link } from "react-router-dom";

export default function Iot({ iot }) {

    return (
        <div>
            <button className='item-button'><Link to={`/iot/${iot._id}`}>{iot.brand} {iot.deviceName}</Link></button>
        </div>
    )
}