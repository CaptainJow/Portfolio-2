import React from 'react'
import './tech.css'

export default function Tech() {
  return (
    <div className='who-am' >
        <h1 className='welcome-title'>in this Part I will show some of my skills :</h1>
        <div className='container-progress'>
        <table>
        <tr>
          <th><h2>HTML</h2></th>
          <th><div className='progress'>
                <div style={{width: "250px"}} className='progress-value1'>
                </div>
            </div></th>
        </tr>
        <tr>
          <td><h2>CSS</h2></td>
          <td><div className='progress'>
                <div style={{width:"30%"}} className='progress-value2'>
                </div>
            </div></td>
        </tr>
        <tr>
          <td><h2>JAVA SCRIPT</h2></td>
          <td><div className='progress'>
                <div style={{width: "170px"}} className='progress-value3'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C</h2></td>
          <td><div className='progress'>
                <div style={{width: "250px"}} className='progress-value4'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C++</h2></td>
          <td><div className='progress'>
                <div style={{width: "230px"}} className='progress-value5'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C#</h2></td>
          <td><div className='progress'>
                <div style={{width: "200px"}} className='progress-value6'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>Rubey</h2></td>
          <td><div className='progress'>
                <div style={{width: "100px"}} className='progress-value7'>
                </div>
            </div>
            </td>

        </tr>
        <tr>
          <td><h2>JAVA</h2></td>
          <td><div className='progress'>
                <div style={{width: "150px"}} className='progress-value8'>
                </div>
            </div></td>

        </tr>
      </table>
    
        </div>
    </div>
  )
}
