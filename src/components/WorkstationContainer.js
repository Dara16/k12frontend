import React, { useState, useEffect } from 'react';
import Workstation from "./Workstation"
import WorkstationForm from './WorkstationForm'

export default function WorkstationsContainer() {
    const [workstations, setWorkstations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/workstation')
            .then(resp => resp.json())
            .then(json => setWorkstations(json))

    }, [])

    function populateWorkstations() {
        return workstations.map(workstation => <Workstation workstation={workstation} key={workstation._id}/>)
    }

    function createWorkstation(workstation) {
        fetch('http://localhost:5001/workstation',{
            method: "POST",
            body: JSON.stringify(workstation),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setWorkstations([...workstations, json]))
        
    }

    return (
        <div>
            <h2>WORKSTATIONS</h2>
            <h3>Select Your Device</h3>
            {workstations && populateWorkstations()}
            <div>           
                <WorkstationForm createWorkstation={createWorkstation}/>
                <p></p>
            </div>
        </div>
    )
}