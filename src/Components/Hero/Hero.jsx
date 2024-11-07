import React from 'react'
import './Hero.css'
import prof_img from '../../assets/prof_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={prof_img} alt=""/>
        <h1><span>I'm Amay Kulkarni,</span>student from India</h1>
        <p>Fresher looking for a job</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className = "anchor-link" offset = {50} href = "#contact">
            connect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="/resume.pdf" download="Amay_Kulkarni_Resume.pdf">
          My Resume
        </a></div>
        </div>
    </div>
  )
}

export default Hero