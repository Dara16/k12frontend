import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function IotDetails() {
    const [iot, setIot] = useState([]);
    const { iotId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'iot/' + iotId)
            .then(resp => resp.json())
            .then(json => setIot(json))
    }, [iotId])

    return (
        <div className='detail-message'>
            <h3>{iot.brand} {iot.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: <strong>{iot.defaultUsername}</strong>, default password: <strong>{iot.defaultPassword}</strong>.
                Please ensure your device is protected using a strong password, stored in a safe place. Do not share your username and password.
                For more information on your device setup, please visit <a href={ `${iot.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}