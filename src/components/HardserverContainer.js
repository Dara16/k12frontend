import React, { useState, useEffect } from 'react';
import Hardserver from "./Hardserver"
import HardserverForm from './HardserverForm'

export default function HardserverContainer() {
    const [hardservers, setHardservers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/hardserver')
            .then(resp => resp.json())
            .then(json => setHardservers(json))

    }, [])

    function populateHardserver() {
        return hardservers.map(hardserver => <Hardserver hardserver={hardserver} key={hardserver._id}/>)
    }

    function createHardserver(hardserver) {
        fetch('http://localhost:5001/hardserver',{
            method: "POST",
            body: JSON.stringify(hardserver),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setHardservers([...hardservers, json]))
        
    }

    return (
        <div>
            <h2>SERVERS</h2>
            <h3>Select Your Device</h3>
            {hardservers && populateHardserver()}
            <div>           
                <HardserverForm createHardserver={createHardserver}/>
                <p></p>
            </div>
        </div>
    )
}