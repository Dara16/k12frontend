import React, { useState } from 'react';
import { BASE_URL } from '../constraints/index';

export default function NetworkForm({ updateNetworks }) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        deviceType: ""
    })
    const [success, setSuccess] = useState("")

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function createNetwork(network) {
        fetch(BASE_URL + 'network',{
            method: "POST",
            body: JSON.stringify(network),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            const {device, message} = json
            updateNetworks(device)
            setSuccess(message)
        })      
    } 

    function handleSubmit(e) {
        e.preventDefault()
        createNetwork(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            deviceType: ""
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
                <label>Type (e.g Router, Modem, Switch): </label>
                <input onChange={handleChange} name="deviceType" value={formData.deviceType}/>
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