import React, { useState } from 'react'

export default function HardserverForm({createHardserver}) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        systemRequirements: "",
        ram: "",
        storageSize: ""
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
        createHardserver(formData)
        setFormData({
            brand: "",
            deviceName: "",
            deviceModel: "",
            systemRequirements: "",
            ram: "",
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
                <label>Device Name: </label>
                <input onChange={handleChange} name="deviceName" value={formData.deviceName}/>
                <label>Model: </label>
                <input onChange={handleChange} name="deviceModel" value={formData.deviceModel}/>
                <label>System Requirements: </label>
                <input onChange={handleChange} name="systemRequirements" value={formData.systemRequirements}/>
                <label>RAM: </label>
                <input onChange={handleChange} name="ram" value={formData.ram}/>
                <label>Storage: </label>
                <input onChange={handleChange} name="storageSize" value={formData.storageSize}/>
                <br/>
                <button onClick={handleSubmit}>Add Device</button>
            </form>
            <p>
                {success && (
                    <span>Device submitted successfully. We will respond to the email associated with your account within 3 business days</span>
                )}
            </p>
        </div>
    )
}