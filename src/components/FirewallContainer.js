import React, { useState, useEffect } from 'react';
import Firewall from "./Firewall"
import FirewallForm from './FirewallForm'
import { BASE_URL } from '../constraints/index';

export default function FirewallContainer() {
    const [firewalls, setFirewalls] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'firewall')
            .then(resp => resp.json())
            .then(json => setFirewalls(json))

    }, [])

    function populateFirewalls() {
        return firewalls.map(firewall => <Firewall firewall={firewall} key={firewall._id}/>)
    }

    function createFirewall(firewall) {
        fetch(BASE_URL + 'firewall',{
            method: "POST",
            body: JSON.stringify(firewall),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setFirewalls([...firewalls, json]))
        
    }

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>PHONES</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {firewalls && populateFirewalls()}
                </div>
            )}
            
            <div>           
                <FirewallForm createFirewall={createFirewall}/>
            </div>
        </div>
    )
}