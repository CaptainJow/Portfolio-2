import React from 'react'
import'./projects.css'
import SmallProjects from './SmallProjects/SmallProjects'
import logo from './svg_project.svg'

export default function Project() {
  return (
    <>
     <div className="container-content">
        <div><img className="svg" src={logo} alt="svg"/></div>
    <div className='Welcome-text text2'>
      <div className='welcome-title'><h1 style={{color: "yellow"}}> Education</h1></div>  
        <p className='p-color' > these Small Projects make use of my different skills , but alot of my progects dont have a git page .</p>
        <p className='p-color' > so I only adeded the Projects that are either deployed or have a git hubpage </p>
    </div>
    </div>
    <SmallProjects />
    </>
  )
}
