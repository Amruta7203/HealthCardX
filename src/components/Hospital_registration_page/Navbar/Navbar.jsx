import React from 'react'
import Logo from '../../../assets/logo.png';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">HealthCardX</div>
      <ul className='header-menu'>
            <li><a href="">About Us</a></li>
            <li><a href="">Home</a></li>
        </ul>
    </div>
  )
}

export default Navbar