import React,  { useState } from 'react';

export default function Tablet({ tablet }) {
    const [infoMode, setInfoMode] = useState(false)

    function toggleInfo() {
        setInfoMode(!infoMode)
    }

    return (
        <div>
            <p>{tablet.brand} {tablet.deviceName}</p>
            <button onClick={toggleInfo}>Select this device</button>
            <div>
                {infoMode && (
                   <div class='alert'>
                    Your device may have the following vulnerabilities: default username: {tablet.defaultUsername}, default password: {tablet.defaultPassword}.
                    For more information on your device setup, please visit <a href={ `${tablet.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
                   </div>
                )}
            </div>
        </div>
    )
}