import React, { useState, useEffect } from 'react';
import Tablet from "./Tablet"
import TabletForm from './TabletForm'
import { BASE_URL } from '../constraints/index';

export default function TabletsContainer() {
    const [tablets, setTablets] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + 'tablet')
            .then(resp => resp.json())
            .then(json => setTablets(json))

    }, [])

    function populateTablets() {
        return tablets.map(tablet => <Tablet tablet={tablet} key={tablet._id}/>)
    }

    function createTablet(tablet) {
        fetch(BASE_URL + 'tablet',{
            method: "POST",
            body: JSON.stringify(tablet),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setTablets([...tablets, json]))
        
    }

    return (
        <div>
            <h2>TABLETS</h2>
            <h3>Select Your Device</h3>
            {tablets && populateTablets()}
            <div>           
                <TabletForm createTablet={createTablet}/>
                <p></p>
            </div>
        </div>
    )
}