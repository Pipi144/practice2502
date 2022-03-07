import React from "react";
import "./App.css"
import Scroll from 'react-scroll';

const Link = Scroll.ScrollLink;

const BannerWelcome = () => {
 return (
  <div className="title">
   <h1 >welcome<br/><br/>recruiter</h1>
   <div className="sideMenu">
         <a>My Profile</a>
    <a>Skills</a>
    <a>Experience</a>
    <a>Greeting</a>
   </div>
   
  </div>
 )
}

export default BannerWelcome;