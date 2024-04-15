import React from 'react'
import './TextField.css'
const TextField = ({ label, inputProps, onChange, value, required  }) => {
  return (
    <div className="container">
      <label className="label">{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        value={value}
        required={required} 
      />
    </div>
  )
}

export default TextField