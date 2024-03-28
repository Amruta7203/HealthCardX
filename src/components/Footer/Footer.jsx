import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-l">
        <span className="title">HealthCardX</span>
        <span className="phn-no">+91 9483753468</span>
        <div className="line"></div>
      </div>
      
      <div className="footer-middle">
        <span className="text">SITEMAP</span>
        <ul className='list'>
          <li>Home</li>
          <li>About Us</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
      
      <div className="footer-r">
        <span className="text">For more information:</span>
        <span className="sub-text">Please contact us at <span className='email'>healthcardx4@gmail.com</span> if you have any questions about this Privacy Policy.</span>
        
        <div className="query-box">
          <input type="text" placeholder='Your Query' className='query-input'/>
          <button className='send-btn'>Send</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-line">Transform healthcare data management today</div>
        <div className="copyright">&copy; 2024 HealthCardX. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer