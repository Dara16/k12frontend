import React from 'react';

export default function Tablet({ tablet }) {

    return (
        <div>
            <p>{tablet.brand} {tablet.deviceName}</p>
        </div>
    )
}