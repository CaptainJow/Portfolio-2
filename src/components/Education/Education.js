import React from 'react'
import './education.css'
import Parts from './Parts'
import logo from './svg2.svg'

export default function Education() {
  return (
    <>
        <div class="container-content">
        <div><img className="svg2" src={logo} /></div>
    <div className='Welcome-text text2'>
      <div className='welcome-title'><h1 style={{color: "yellow"}}> Education</h1></div>  
        <p style={{fontSize: "30px" } }>In this section I will include my University study and Programs : </p>
    </div>
    </div>
    <Parts />
    </>

  )
}
