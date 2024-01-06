import React from 'react';
import { Link } from "react-router-dom";

export default function Phone({ phone }) {

    return (
        <div>
            <button className='item-button'><Link to={`/phone/${phone._id}`}>{phone.brand} {phone.deviceName}</Link></button>
        </div>
    )
}