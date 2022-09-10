import React from 'react'
import './education.css'
import Parts from './Parts'
import logo from './svg2.svg'
import { useTranslation } from "react-i18next";
export default function Education() {
  const {t} = useTranslation() ; 
  return (
    <>
    <div style={{marginBottom :" 5rem "}} className="container-content">
            <div><img className="svg2" src={logo} alt="svg"/></div>
            <div className='Welcome-text text2'>
            <div className='welcome-title'>
              <h1 style={{color: "yellow"}}> {t("Education")}</h1></div>  
              <p style={{fontSize: "30px" } }>{t("Education-txt")} </p>
          </div>
        </div>
          <Parts />
          </>

  )
}
