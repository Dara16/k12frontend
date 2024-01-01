import React, { useState } from 'react';

export default function Computer({ computer }) {
    const [infoMode, setInfoMode] = useState(false)

    function toggleInfo() {
        setInfoMode(!infoMode)
    }

    return (
        <div>
            <p>{computer.brand} {computer.deviceName}</p>
            <button onClick={toggleInfo}>Select this device</button>
            <div>
                {infoMode && (
                   <div class='alert'>
                    Your device may have the following vulnerabilities: default username: {computer.defaultUsername}, default password: {computer.defaultPassword}.
                   For more information on your device setup, please visit <a href={ `${computer.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
                   </div>
                )}
            </div>
        </div>
    )
}