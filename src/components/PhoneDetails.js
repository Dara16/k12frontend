import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function PhoneDetails() {
    const [phone, setPhone] = useState([]);
    const { phoneId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'phone/' + phoneId)
            .then(resp => resp.json())
            .then(json => setPhone(json))
    }, [phoneId])

    return (
        <div>
            <h3>{phone.brand} {phone.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: {phone.defaultUsername}, default password: {phone.defaultPassword}.
                Please ensure your device is protected using a strong password, stored in a safe place. Do not share your username and password.
                For more information on your device setup, please visit <a href={ `${phone.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}