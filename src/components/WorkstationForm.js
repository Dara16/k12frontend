import React, { useState } from 'react';
import { BASE_URL } from '../constraints/index';

export default function WorkstationForm({ updateWorkstations }) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        operatingSystem: "",
        ram: "",
        storageSize: ""
    })
    const [success, setSuccess] = useState(false)

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function createWorkstation(workstation) {
        fetch(BASE_URL + 'workstation',{
            method: "POST",
            body: JSON.stringify(workstation),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            const {device, message} = json
            updateWorkstations(device)
            setSuccess(message)
        })        
    }

    function handleSubmit(e) {
        e.preventDefault()
        createWorkstation(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            operatingSystem: "",
            ram: "",
            storageSize: ""
        })
    }


    return (
        <div>
            <form className='form'>
                <h4>Don't see your device? Add now</h4>
                <label>Brand: </label>
                <input onChange={handleChange} name="brand" value={formData.brand}/>
                <label>Device Name: </label>
                <input onChange={handleChange} name="deviceName" value={formData.deviceName}/>
                <label>Model: </label>
                <input onChange={handleChange} name="deviceModel" value={formData.deviceModel}/>
                <label>Operating System: </label>
                <input onChange={handleChange} name="operatingSystem" value={formData.operatingSystem}/>
                <label>RAM: </label>
                <input onChange={handleChange} name="ram" value={formData.ram}/>
                <label>Storage: </label>
                <input onChange={handleChange} name="storageSize" value={formData.storageSize}/>
                <br/>
                <button onClick={handleSubmit}>Add Device</button>
            </form>
            <p>
                {success && (
                    <span>{success}</span>
                )}
            </p>
        </div>
    )
}