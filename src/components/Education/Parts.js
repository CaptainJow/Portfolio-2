import React from 'react'
import './education.css'
import './parts.css'
export default function Parts() {
  return (

    <div className="container-cards">
    <div className="card">
      <div className="box">
        <div className="content">
          
          <div className='uni-one card-img'></div>
          <h1>Ankara University</h1>
          <p className='text-al'>Computer science faculty with a 4 year batchelor degree, this is where my Computer software engineering life starts .</p>
          <a href='https://www.ankara.edu.tr/' rel="noreferrer" target="_blank" >University website</a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="box">
        <div className="content">
          <div className='uni-2 card-img'></div>
          <h1>University of Castilla-La Mancha</h1>
          <p className='text-al'>I was here as an Exchange Student when I participated in the Erasmus Program , I practiced my how to deploy and make projects from scratch here</p>
          <a href='https://www.uclm.es/?sc_lang=en' rel="noreferrer" target="_blank">University website</a>
        </div>
      </div>
    </div>
  </div>
  ) 
}
