import React from 'react'
import { useState } from 'react'
import './Dropdown.css'
import Arrow from '../../../assets/dropdown.png'

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick = {(e) => setIsActive(!isActive)}>
        Hospital Name*
        <img src={Arrow} alt="" className='dropdown-icon'/>
      </div>
    {isActive && (
      <div className="dropdown-content">
      <div className="dropdown-item">
        Abcd
      </div>
      <div className="dropdown-item">
        defg
      </div>
    </div>
    )}
    </div>
  )
}

export default Dropdown