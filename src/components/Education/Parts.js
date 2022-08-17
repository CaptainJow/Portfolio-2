import React from 'react'
import './education.css'
import './parts.css'
export default function Parts() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
  return (

    <div class="container-content">
        <div className='Card'>
            <div className='card-img uni-one'></div>
            <h3 className='Uni-title'>Ankara Üniversitesi</h3>
            <p className='dates'>09-2019 to 06-2023</p>
            <div className='text-uni-frame'>
            <p className='text-uni'>
                Computer science faculty with a 4 year batchelor degree.
            </p>
            <button className="button-uni" onClick={() => openInNewTab('https://www.ankara.edu.tr/')}>University Website</button>
            </div>
        
           
        </div>
        <div className='Card'>
        <div className='card-img uni-2'></div>
        <h3 className='Uni-title'> Universidad de castilla-La Mancha</h3>
        <p className='dates'>02-2022 to 06-2022</p>
        <div className='text-uni-frame'>
            <p className='text-uni'>
                I was here as an Exchange Student when I participated in the Erasmus Program .
            </p>
            <button className="button-uni" onClick={() => openInNewTab('https://www.uclm.es/')}>University Website</button>
            </div>
        </div>
    </div>
  ) 
}
