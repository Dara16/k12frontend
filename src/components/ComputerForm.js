import React, { useState } from 'react'

export default function ComputerForm({createComputer}) {
    const [formData, setFormData] = useState({
        brand: "",
        deviceName: "",
        deviceModel: "",
        operatingSystem: "",
        ram: "",
        storageSize: ""
    })

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createComputer(formData)
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
        <form className='computer-form'>
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
    )
}