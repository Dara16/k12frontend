import React from 'react';
import { Link } from 'react-router-dom';

export default function Computer({ computer }) {

    return (
        <div>
            <p>{computer.brand} {computer.deviceName}</p>
        </div>
    )
}