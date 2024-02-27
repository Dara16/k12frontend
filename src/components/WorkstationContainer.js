import React, { useState, useEffect } from 'react';
import Workstation from "./Workstation";
import WorkstationForm from './WorkstationForm';
import { BASE_URL } from '../constraints/index';

export default function WorkstationsContainer() {
    const [workstations, setWorkstations] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        fetch(BASE_URL + 'workstation')
            .then(resp => resp.json())
            .then(json => setWorkstations(json))

    }, [])

    function populateWorkstations() {
        return workstations.map(workstation => <Workstation workstation={workstation} key={workstation._id}/>)
    }

    function updateWorkstations(workstation) {
        setWorkstations([...workstations, workstation]) 
    }

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>WORKSTATIONS</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {workstations && populateWorkstations()}
                </div>
            )}
            
            <div>           
                <WorkstationForm updateWorkstations={updateWorkstations}/>
            </div>
        </div>
    )
}