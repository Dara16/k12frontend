import React, { useState, useEffect } from 'react';
import Computer from "./Computer"
import ComputerForm from './ComputerForm';
import { BASE_URL } from '../constraints/index';

export default function ComputersContainer() {
    const [computers, setComputers] = useState([]);

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

    return (
        <div>
            <h2>COMPUTERS</h2>
            <h3>Select Your Device</h3>
            {computers && populateComputers()}
            <div>           
                <ComputerForm createComputer={createComputer}/>
                <p></p>
            </div>
            <div>
                
            </div>
        </div>
    )
}