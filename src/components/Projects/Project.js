import React from 'react'
import'./projects.css'
import SmallProjects from './SmallProjects/SmallProjects'
import logo from './svg_project.svg'
import { useTranslation } from 'react-i18next'
export default function Project() {
  const {t} = useTranslation() ; 
  return (
    <>
     <div className="container-content">
        <div><img className="svg" src={logo} alt="svg"/></div>
    <div className='Welcome-text text2'>
      <div className='welcome-title'><h1 style={{color: "yellow"}}>{t("Projects")}</h1></div>  
        <p className='p-color' >{t("Projects-txt1")} </p>
        <p className='p-color' > {t("Projects-txt2")}</p>
        <p className='p-color' > {t("Projects-txt3")}</p>
    </div>
    </div>
    <SmallProjects />
    </>
  )
}
