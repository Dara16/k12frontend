import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function TabletDetails() {
    const [tablet, setTablet] = useState([]);
    const { tabletId } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'tablet/' + tabletId)
            .then(resp => resp.json())
            .then(json => setTablet(json))
    }, [tabletId])

    return (
        <div>
            <h3>{tablet.brand} {tablet.deviceName}</h3>
            <p>Your device may have the following vulnerabilities: default username: {tablet.defaultUsername}, default password: {tablet.defaultPassword}.
                For more information on your device setup, please visit <a href={ `${tablet.userGuides}`} target="_blank" rel="noreferrer">this documentation </a>.
            </p>
        </div>
    )
}