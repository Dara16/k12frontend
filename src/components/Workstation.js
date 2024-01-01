import React, { useState } from 'react';

export default function Workstation({ workstation }) {
    const [infoMode, setInfoMode] = useState(false)

    function toggleInfo() {
        setInfoMode(!infoMode)
    }

    return (
        <div>
            <p>{workstation.brand} {workstation.deviceName}</p>
            <button onClick={toggleInfo}>Select this device</button>
            <div>
                {infoMode && (
                    <div class="alert">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                        Your device may have the following vulnerabilities: default username: {workstation.defaultUsername}, default password: {workstation.defaultPassword}.
                        For more information on your device setup, please visit <a href= {`${workstation.userGuides}`} target="_blank" rel="noreferrer" >this documentation</a>.
                    </div>
                )}
            </div>
        </div>
    )
}