import React, { useState, useEffect } from 'react';
import Phone from "./Phone"
import PhoneForm from './PhoneForm'
import { BASE_URL } from '../constraints/index';

export default function PhoneContainer() {
    const [phones, setPhones] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'phone')
            .then(resp => resp.json())
            .then(json => setPhones(json))
    }, [])

    function populatePhones() {
        return phones.map(phone => <Phone phone={phone} key={phone._id}/>)
    }

    function updatePhones(phone) {
        setPhones([...phones, phone])
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
                    {phones && populatePhones()}
                </div>
            )}
            
            <div>           
                <PhoneForm updatePhones={updatePhones}/>
            </div>
        </div>
    )
}