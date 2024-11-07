import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import prof_img from '../../assets/prof_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={prof_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello, myself Amay kulkarni. I have recently completed my B.E. from Marathwada Mitra Mandals college of Engineering Pune in Electronics and Telecommunication branch. My native state is Parbhani and from there I have completed my HSC and SSC.</p>
                    <p>Skillset I have is HTMl, CSS, JAVASCRIPT, C++, SQL and Reactjs.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About