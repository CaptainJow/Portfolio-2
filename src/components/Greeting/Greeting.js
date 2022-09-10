import React from 'react' ;
import './greeting.css' ; 
import logo from './svg.svg' ;
import {FaGithub, FaInstagram, FaLinkedin, FaRegSmileWink } from 'react-icons/fa' ; 
import { useTranslation } from "react-i18next";
export default function Greeting() {
  const { t} = useTranslation();
  return (
    <div className="container-content">
        <div className='Welcome-text'>
          <div className='welcome-title '><h1 className='animate-charcter' >{t("Welcome")}</h1> <h1 className='emo'> <FaRegSmileWink/></h1></div>  
            <p>{t("Welcome-txt1")}</p>
            <p>{t("Welcome-txt2")}</p>
            <div className='socials'>
            <a className='social-logo' href='https://github.com/CaptainJow' rel="noreferrer" target="_blank"   ><FaGithub /></a>
            <a className='social-logo' href='https://www.instagram.com/yusuf.sarraj/'  rel="noreferrer" target="_blank"><FaInstagram /></a>
            <a className='social-logo' href='https://www.linkedin.com/in/yousef-alsarraj-36166423a/' rel="noreferrer" target="_blank" ><FaLinkedin /></a>
            </div>
          </div>
        <div><img className="svg" src={logo} alt="Paris"/></div>
    </div>
  )
}
