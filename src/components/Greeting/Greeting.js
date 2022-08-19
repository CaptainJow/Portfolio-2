import React from 'react'
import './greeting.css'
import logo from './svg.svg'
import {FaInstagram, FaLinkedin, FaRegSmileWink, FaTwitter } from 'react-icons/fa'
export default function Greeting() {
  return (
    <div className="container-content">
        <div className='Welcome-text'>
          <div className='welcome-title '><h1 className='animate-charcter' >Merhaba size</h1> <h1 className='emo'> <FaRegSmileWink/></h1></div>  
            <p>I'm Yousef Alsarraj .I am a computer science student , planning to become a Full stack developer.</p>
            <p>
            through out my learning journy I have aquired some valuable skills that will be explained in details.
            </p>
            <div className='socials'>
            <a className='social-logo' href='https://twitter.com/Captain_Jow' rel="noreferrer" target="_blank"   ><FaTwitter /></a>
            <a className='social-logo' href='https://www.instagram.com/yusuf.sarraj/'  rel="noreferrer" target="_blank"><FaInstagram /></a>
            <a className='social-logo' href='https://www.linkedin.com/in/yousef-alsarraj-36166423a/' rel="noreferrer" target="_blank" ><FaLinkedin /></a>
            </div>
        
        </div>
        <div><img className="svg" src={logo} alt="Paris"/></div>
    </div>
  )
}
