import React, { useState, useEffect } from 'react';
import Tablet from "./Tablet"
import TabletForm from './TabletForm'
import { BASE_URL } from '../constraints/index';

export default function TabletsContainer() {
    const [tablets, setTablets] = useState([]);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        fetch(BASE_URL + 'tablet')
            .then(resp => resp.json())
            .then(json => setTablets(json))

    }, [])

    function populateTablets() {
        return tablets.map(tablet => <Tablet tablet={tablet} key={tablet._id}/>)
    }

    function updateTablets(tablet) {
        setTablets([...tablets, tablet])
    }   

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <div>
            <h2>TABLETS</h2>
            <button className='select-device' onClick={toggleDropdown}><strong>Select Your Device ▼ </strong></button>
            {dropdown && (
                <div className='items'>
                    {tablets && populateTablets()}
                </div>
            )}
            
            <div>           
                <TabletForm updateTablets={updateTablets}/>
            </div>
        </div>
    )
}