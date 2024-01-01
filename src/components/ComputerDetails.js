import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function ComputerDetails() {
    const [computer, setComputer] = useState([]);
    const { computerId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'computer/' + computerId)
            .then(resp => resp.json())
            .then(json => setComputer(json))
    }, [computerId])

    return (
        <div>
            <h3>{computer.brand} {computer.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: {computer.defaultUsername}, default password: {computer.defaultPassword}.
                For more information on your device setup, please visit <a href={ `${computer.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}