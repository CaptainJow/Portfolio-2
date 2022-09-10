import React from 'react'
import'./smallProjects.css'
import { useTranslation } from 'react-i18next'
export default function SmallProjects() {
   const {t} = useTranslation() ; 
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='container-projects'>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/LuGuDu/todoapp')}>
        <div><h2 className="Title-Project">ToDoList</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">{t("ToDoList")}</p>
          <p  className="Title-Project">HTML , CSS , JS , Ruby</p>
        </div>
      </div>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/CaptainJow/Hastane')}>
        <div><h2 className="Title-Project">Hospital Reservation</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">{t("Hospital")}</p>
          <p  className="Title-Project">HTML , CSS , JS , C#</p>
        </div>
      </div>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/CaptainJow/Portfolio-2')}>
        <div><h2 className="Title-Project">Portfolio</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">{t("Portfolio")}
          </p>
          <p  className="Title-Project">HTML , CSS , JS(REACT)</p>
        </div>
      </div>
    </div>
  )
}
