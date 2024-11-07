import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
// import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

 const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
      <h1>Amay Kulkarni</h1>
        <img src={theme_pattern} alt="" />
        <ul className="navmenu">
            <li><AnchorLink className = "anchor-link" href = "#home"><p onClick={() =>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className = "anchor-link" offset = {50} href = "#about"><p onClick={() =>setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className = "anchor-link" offset = {50} href = "#education"><p onClick={() =>setMenu("education")}>Education</p></AnchorLink></li>
            <li><AnchorLink className = "anchor-link" offset = {50} href = "#project"><p onClick={() =>setMenu("project")}>Project</p></AnchorLink></li>
            <li><AnchorLink className = "anchor-link" offset = {50} href = "#contact"><p onClick={() =>setMenu("contact<Anchorlink></Anchorlink>")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className = "anchor-link" offset = {50} href = "#contact">
            connect With Me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar


//{menu==="home"?<img src={underline} alt=''/>:<></>}
//{menu==="about"?<img src={underline} alt=''/>:<></>}
//{menu==="education"?<img src={underline} alt=''/>:<></>}
//{menu==="project"?<img src={underline} alt=''/>:<></>}
//{menu==="contact"?<img src={underline} alt=''/>:<></>}