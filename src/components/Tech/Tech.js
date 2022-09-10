import React from 'react'
import './tech.css'
import { useTranslation } from "react-i18next";
export default function Tech() {
  const { t,} = useTranslation();
  return (
    <div className='who-am' >
        <h1 className='welcome-title'>{t("Parts")}</h1>
        <div className='container-progress'>
        <table  >
        <tbody>
        <tr>
          <th><h2>HTML</h2></th>
          <th><div className='progress'>
                <div  className='progress-value1'>
                </div>
            </div></th>
        </tr>
        <tr>
          <td><h2>CSS</h2></td>
          <td><div className='progress'>
                <div className='progress-value2'>
                </div>
            </div></td>
        </tr>
        <tr>
          <td><h2>JAVA SCRIPT</h2></td>
          <td><div className='progress'>
                <div className='progress-value3'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C</h2></td>
          <td><div className='progress'>
                <div  className='progress-value4'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C++</h2></td>
          <td><div className='progress'>
                <div className='progress-value5'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>C#</h2></td>
          <td><div className='progress'>
                <div  className='progress-value6'>
                </div>
            </div></td>

        </tr>
        <tr>
          <td><h2>Rubey</h2></td>
          <td><div className='progress'>
                <div  className='progress-value7'>
                </div>
            </div>
            </td>

        </tr>
        <tr>
          <td><h2>JAVA</h2></td>
          <td><div className='progress'>
                <div className='progress-value8'>
                </div>
            </div></td>

        </tr>
        </tbody>
      </table>
    
        </div>
    </div>
  )
}
