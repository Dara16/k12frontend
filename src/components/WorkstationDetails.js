import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function WorkstationDetails() {
    const [workstation, setWorkstation] = useState([]);
    const { workstationId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'workstation/' + workstationId)
            .then(resp => resp.json())
            .then(json => setWorkstation(json))
    }, [workstationId])

    return (
        <div>
            <h3>{workstation.brand} {workstation.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: {workstation.defaultUsername}, default password: {workstation.defaultPassword}.
                For more information on your device setup, please visit <a href={ `${workstation.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}