import React from 'react'
import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Instagram from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
         <img src={Facebook} alt="" /> 
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
        
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Realtions</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
         <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> 1997-2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer