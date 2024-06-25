import React from 'react'
import './Footer.css'
import ftl from '../Assets/logo_big.png'
import whts from '../Assets/whatsapp_icon.png'
import pint from '../Assets/pintester_icon.png'
import insta from '../Assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={ftl} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pint} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whts} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
           <hr/>
            <p>Copyright @ 2024 -All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer