import React from 'react'
import './Button.scss'

const Button = ({ label = '', onClick, customClass = '' }) => {
  return (
    <div className={`button-wrapper ${customClass}`}>
      <button className='button-wrapper__button' onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
