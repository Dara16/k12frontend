import React, { useState } from 'react'
import { BASE_URL } from '../constraints/index';

export default function IotForm({ updateIots }) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        connectivity: ""
    })
    const [success, setSuccess] = useState("")

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function createIot(iot) {
        fetch(BASE_URL + 'iot',{
            method: "POST",
            body: JSON.stringify(iot),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            const {device, message} = json
            updateIots(device)
            setSuccess(message)
        })     
    }

    function handleSubmit(e) {
        e.preventDefault()
        createIot(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            connectivity: ""
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
                <label>Connectivity (e.g Wi-Fi, Bluetooth): </label>
                <input onChange={handleChange} name="connectivity" value={formData.connectivity}/>
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