import React from 'react'
import'./smallProjects.css'

export default function SmallProjects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='container-projects'>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/LuGuDu/todoapp')}>
        <div><h2 className="Title-Project">ToDoList</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">by building this project I was able to understand more about the MVC project design.
            it was aslo my first introduction into ruby . 
          </p>
          <p  className="Title-Project">HTML , CSS , JS , Ruby</p>
        </div>
      </div>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/CaptainJow/Hastane')}>
        <div><h2 className="Title-Project">Hospital Reservation</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">This Project was my First time learning how to use a DataBase , and Got fimiliar with the asp.net. 
          </p>
          <p  className="Title-Project">HTML , CSS , JS , C#</p>
        </div>
      </div>
      <div className="wrapper"  onClick={() => openInNewTab('https://github.com/CaptainJow/Portfolio-2')}>
        <div><h2 className="Title-Project">Portfolio</h2></div>
        <div className="text-project">
          <p className="Pragraf-text">it is this project that you are viewing , I learned how to use react in better way
          </p>
          <p  className="Title-Project">HTML , CSS , JS(REACT)</p>
        </div>
      </div>
    </div>
  )
}
