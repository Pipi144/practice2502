import React from "react";
import "./App.css"
import { Link } from "react-scroll"


const BannerWelcome = () => {
 return (
  <div className="title">
   <h1 >welcome<br/><br/>recruiter</h1>
   <div className="sideMenu">
    <Link
     to="profileSection" 
     spy={true} 
     smooth={true} 
     offset={-5} 
     duration={500}>
     My Profile</Link>
    <Link
     to="expSection" 
     spy={true} 
     smooth={true} 
     offset={-5} 
     duration={500}>
     Experiences</Link>
     <Link
     to="skillSection" 
     spy={true} 
     smooth={true} 
     offset={-5} 
     duration={500}>
     Skills</Link>
   </div>
   
  </div>
 )
}

export default BannerWelcome;