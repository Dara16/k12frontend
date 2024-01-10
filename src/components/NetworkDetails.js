import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function NetworkDetails() {
    const [network, setNetwork] = useState([]);
    const { networkId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'network/' + networkId)
            .then(resp => resp.json())
            .then(json => setNetwork(json))
    }, [networkId])

    return (
        <div className='detail-message'>
            <h3>{network.brand} {network.deviceName} {network.deviceType}</h3>
            <p>Your device may have the following vulnerabilities: default username: <strong>{network.defaultUsername}</strong>, default password: <strong>{network.defaultPassword}</strong>.
                Please ensure your device is protected using a strong password, stored in a safe place. Do not share your username and password.
                For more information on your device setup, please visit <a href={ `${network.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}