import React from 'react'
import footer_logo from '../../assets/logo_big.png'

import instagram from '../../assets/instagram_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
import pinterest from '../../assets/pintester_icon.png' 
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
      
        
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Outlets</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className='footer-social-icon'>

  <div className='footer-icons-container'>
    <img src={instagram} alt="instagram" />
  </div>
  <div className='footer-icons-container'>
    <img src={pinterest} alt="pinterest" />
  </div>
  <div className='footer-icons-container'>
    <img src={whatsapp} alt="whatsapp" />
  </div>
      </div>
      <div className='footer-copyright'>
<hr />
<p> Sesugh Asa Copyright @2024 - All rights researved</p>
      </div>
    </div>
  )
}

export default Footer
