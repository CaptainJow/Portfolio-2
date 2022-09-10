import React from 'react' ;
import './education.css' ;
import './parts.css' ; 
import { useTranslation } from "react-i18next";
export default function Parts() {
const {t} = useTranslation() ; 
  return (

    <div className="container-cards">
    <div className="card">
      <div className="box">
        <div className="content">
          
          <div className='uni-one card-img'></div>
          <h1>{t("Ankara-uni")}</h1>
          <p className='text-al'>{t("Ankara-uni-txt")}</p>
          <a href='https://www.ankara.edu.tr/' rel="noreferrer" target="_blank" >{t("University-web")}</a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="box">
        <div className="content">
          <div className='uni-2 card-img'></div>
          <h1>{t("Uclm-uni")}</h1>
          <p className='text-al'>{t("Uclm-uni-txt")}</p>
          <a href='https://www.uclm.es/?sc_lang=en' rel="noreferrer" target="_blank">{t("University-web")}</a>
        </div>
      </div>
    </div>
  </div>
  ) 
}
