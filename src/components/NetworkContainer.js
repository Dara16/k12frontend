import React, { useState, useEffect } from 'react';
import Network from "./Network"
import NetworkForm from './NetworkForm'
import { BASE_URL } from '../constraints/index';

export default function NetworkContainer() {
    const [networks, setNetworks] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'network')
            .then(resp => resp.json())
            .then(json => setNetworks(json))

    }, [])

    function populateNetworks() {
        return networks.map(network => <Network network={network} key={network._id}/>)
    }

    function updateNetworks(network) {
        setNetworks([...networks, network])
    }

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>NETWORK COMMUNICATION DEVICES</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {networks && populateNetworks()}
                </div>
            )}
            
            <div>           
                <NetworkForm updateNetworks={updateNetworks}/>
            </div>
        </div>
    )
}