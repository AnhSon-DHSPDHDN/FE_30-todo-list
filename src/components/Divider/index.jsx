import React from 'react';
import './Divider.scss'

export default function Divider({ customClass }) {
  return (
    <div className={`divider ${customClass}`}></div>
  )
}
