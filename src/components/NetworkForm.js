import React, { useState } from 'react'

export default function NetworkForm({createNetwork}) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        deviceType: ""
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
        createNetwork(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            deviceType: ""
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
                <label>Type (e.g Router, Modem, Switch): </label>
                <input onChange={handleChange} name="deviceType" value={formData.deviceType}/>
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