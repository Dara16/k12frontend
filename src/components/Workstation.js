import React from 'react';

export default function Workstation({ workstation }) {

    return (
        <div>
            <p>{workstation.brand} {workstation.deviceName}</p>
        </div>
    )
}