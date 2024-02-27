import React, { useState } from 'react'
import { BASE_URL } from '../constraints/index';

export default function FirewallForm({ updateFirewalls }) {
    const [formData, setFormData] = useState({
        brand: "",
        firewallType: "",
        deviceName: "",
        deviceModel: ""
    })
    const [success, setSuccess] = useState("")

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
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
        .then((json) => {
            const {device, message} = json
            updateFirewalls(device)
            setSuccess(message)
        })    
    }

    function handleSubmit(e) {
        e.preventDefault()
        createFirewall(formData)
        setFormData({
            brand: "",
            firewallType: "",
            deviceName: "",
            deviceModel: "",
            storageSize: ""
        })
    }


    return (
        <div>
            <form className='form'>
                <h4>Don't see your device? Add now</h4>
                <label>Brand: </label>
                <input onChange={handleChange} name="brand" value={formData.brand}/>
                <label>Type (e.g Hardware or Software): </label>
                <input onChange={handleChange} name="firewallType" value={formData.firewallType}/>
                <label>Name: </label>
                <input onChange={handleChange} name="deviceName" value={formData.deviceName}/>
                <label>Model: </label>
                <input onChange={handleChange} name="deviceModel" value={formData.deviceModel}/>
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