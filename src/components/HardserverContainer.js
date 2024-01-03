import React, { useState, useEffect } from 'react';
import Hardserver from "./Hardserver"
import HardserverForm from './HardserverForm'
import { BASE_URL } from '../constraints/index';

export default function HardserverContainer() {
    const [hardservers, setHardservers] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        fetch(BASE_URL + 'hardserver')
            .then(resp => resp.json())
            .then(json => setHardservers(json))

    }, [])

    function populateHardserver() {
        return hardservers.map(hardserver => <Hardserver hardserver={hardserver} key={hardserver._id}/>)
    }

    function createHardserver(hardserver) {
        fetch(BASE_URL + 'hardserver',{
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

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>SERVERS</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {hardservers && populateHardserver()}
                </div>
            )}

            <div>           
                <HardserverForm createHardserver={createHardserver}/>
            </div>
        </div>
    )
}