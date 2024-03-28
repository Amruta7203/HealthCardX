import React from 'react'
import './Hero.css'
import Header from '../Header/Header';
import mask0 from '../../assets/mask0.png';
import mask1 from '../../assets/mask1.png';
import mask2 from '../../assets/mask2.png';
import mask3 from '../../assets/mask3.png';
import mask4 from '../../assets/mask4.png';
import mask5 from '../../assets/mask5.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-hero">
            <Header/>

            <div className="hero-text">
                <span>Transforming</span>
                <span>Healthcare Data</span>
                <span>Security</span>
            </div>
            <div className="hero-subText">
                <span>A secure and efficient platform for managing data to empower patients and transform how healthcare is delivered.</span>
            </div>
            <button className='register-btn'>Register Your Hospital</button>
            <div className='hero-logintext'>Register your hospital for secure doctor access. Once authorized by our team, doctors can log in directly to view patient data.</div>
            <button className='login-btn'>Login</button>
        </div>
        
        <div className="right-hero">
            <div className="mask0">
                <img src={mask0} alt="" className='image0' />
            </div>
            <div className="mask1">
                <img src={mask1} alt="" className='image1'/>
            </div>
            <div className="mask2">
                <img src={mask2} alt="" className='image0'/>
            </div>
            <div className="mask3">
                <img src={mask3} alt="" className='image3'/>
            </div>
            <div className="mask4">
                <img src={mask4} alt="" className='image4'/>
            </div>
            <div className="mask5">
                <img src={mask5} alt="" className='image5'/>
            </div>
        </div>
    </div>
  )
}

export default Hero