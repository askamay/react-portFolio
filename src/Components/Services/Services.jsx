import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title">
            <h1>My Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="education-container">
            {Services_Data.map((education,index) => {
                return <div key={index} className='education-format'>
                    <h3>{education.s_no}</h3>
                    <h2>{education.s_name}</h2>
                    <p>{education.s_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services