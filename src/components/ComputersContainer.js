import React, { useState, useEffect } from 'react';
import Computer from "./Computer"

export default function ComputersContainer() {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/computer')
            .then(resp => resp.json())
            .then(json => setComputers(json))

    }, [])

    function populateComputers() {
        return computers.map(computer => <Computer computer={computer}/>)
    }

    return (
        <div>
            <h2>COMPUTERS</h2>
            <h3>Select Your Device</h3>
            {computers && populateComputers()}
        </div>
    )
}