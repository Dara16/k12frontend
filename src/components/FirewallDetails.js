import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function FirewallDetails() {
    const [firewall, setFirewall] = useState([]);
    const { firewallId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'firewall/' + firewallId)
            .then(resp => resp.json())
            .then(json => setFirewall(json))
    }, [firewallId])

    return (
        <div className='detail-message'>
            <h3>{firewall.brand} {firewall.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: <strong>{firewall.defaultUsername}</strong>, default password: <strong>{firewall.defaultPassword}</strong>.
                Please ensure your device is protected using a strong password, stored in a safe place. Do not share your username and password.
                For more information on your device setup, please visit <a href={ `${firewall.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}