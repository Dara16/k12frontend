import React, { useState, useEffect } from 'react';
import Computer from "./Computer"
import ComputerForm from './ComputerForm';
import { BASE_URL } from '../constraints/index';

export default function ComputersContainer() {
    const [computers, setComputers] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'computer')
            .then(resp => resp.json())
            .then(json => setComputers(json))

    }, [])

    function populateComputers() {
        return computers.map(computer => <Computer computer={computer} key={computer._id}/>)
    }

    function createComputer(computer) {
        fetch(BASE_URL + 'computer',{
            method: "POST",
            body: JSON.stringify(computer),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setComputers([...computers, json]))
        
    }

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>COMPUTERS</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {computers && populateComputers()}
                </div>
            )}
            
            <div>           
                <ComputerForm createComputer={createComputer}/>
            </div>
        </div>
    )
}