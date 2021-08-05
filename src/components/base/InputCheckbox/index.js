import React from 'react'

const InputCheckbox = ({ isChecked, type, style, value, name, handleChange }) => {
  return (
    <>
      {isChecked && (
        <input
          type={type}
          className={`form-check-input ${style}`}
          value={value}
          name={name}
          onChange={handleChange}
          checked={isChecked}
        />
      )}
      {!isChecked && (
        <input
          type={type}
          className={`form-check-input ${style}`}
          value={value}
          name={name}
          onChange={handleChange}
        />
      )}
    </>
  )
}

export default InputCheckbox
