import React, { useState } from 'react'

export default function FirewallForm({createFirewall}) {
    const [formData, setFormData] = useState({
        brand: "",
        firewallType: "",
        deviceName: "",
        deviceModel: ""
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
        createFirewall(formData)
        setFormData({
            brand: "",
            firewallType: "",
            deviceName: "",
            deviceModel: "",
            storageSize: ""
        })

        toggleSuccess()
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
                    <span>Success! We will respond to the email associated with your account within 3 business days</span>
                )}
            </p>
        </div>
    )
}