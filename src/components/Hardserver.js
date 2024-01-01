import React, { useState } from 'react';

export default function Hardserver({ hardserver }) {
    const [infoMode, setInfoMode] = useState(false)

    function toggleInfo() {
        setInfoMode(!infoMode)
    }

    return (
        <div>
            <p>{hardserver.brand} {hardserver.deviceName}</p>
            <button onClick={toggleInfo}>Select this device</button>
            <div>
                {infoMode && (
                   <div class='alert'>
                    Your device may have the following vulnerabilities: default username: {hardserver.defaultUsername}, default password: {hardserver.defaultPassword}.
                   For more information on your device setup, please visit <a href={ `${hardserver.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
                   </div>
                )}
            </div>
        </div>
    )
}