import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function HardseverDetails() {
    const [hardserver, setHardserver] = useState([]);
    const { hardserverId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'hardserver/' + hardserverId)
            .then(resp => resp.json())
            .then(json => setHardserver(json))
    }, [hardserverId])

    return (
        <div>
            <h3>{hardserver.brand} {hardserver.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: {hardserver.defaultUsername}, default password: {hardserver.defaultPassword}.
                For more information on your device setup, please visit <a href={ `${hardserver.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}