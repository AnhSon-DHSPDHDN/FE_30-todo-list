import React from 'react'
import './InputTask.scss'

const InputTask = ({ placeholder = '', customClass = '', onChange, value }) => {
  return (
    <div className={`input-task-wrapper ${customClass}`}>
      <input className='input-task-wrapper__input' type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value} />
    </div>
  )
}

export default InputTask
