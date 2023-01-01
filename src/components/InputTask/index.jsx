import React from 'react'
import './InputTask.scss'

const InputTask = ({ placeholder = '', customClass = '', onChange }) => {
  return (
    <div className={`input-task-wrapper ${customClass}`}>
      <input className='input-task-wrapper__input' type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputTask
