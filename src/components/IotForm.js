import React, { useState } from 'react'

export default function IotForm({createPhone}) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        connectivity: "",
    })
    const [success, setSuccess] = useState(false)

    function toggleSuccess() {
        setSuccess(!success)
    }

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createPhone(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            connectivity: "",
        })

        toggleSuccess()
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
                    <span>Success! We will respond to the email associated with your account within 3 business days</span>
                )}
            </p>
        </div>
    )
}