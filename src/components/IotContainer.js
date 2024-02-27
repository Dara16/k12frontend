import React, { useState, useEffect } from 'react';
import Iot from "./Iot"
import IotForm from './IotForm'
import { BASE_URL } from '../constraints/index';

export default function IotContainer() {
    const [iots, setIots] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'iot')
            .then(resp => resp.json())
            .then(json => setIots(json))

    }, [])

    function populateIots() {
        return iots.map(iot => <Iot iot={iot} key={iot._id}/>)
    }

    function updateIots(iot) {
        setIots([...iots, iot])
    }

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>IoT DEVICES</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {iots && populateIots()}
                </div>
            )}
            
            <div>           
                <IotForm updateIots={updateIots}/>
            </div>
        </div>
    )
}