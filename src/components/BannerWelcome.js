import React from "react";
import "./App.css"

const BannerWelcome = () => {
 return (
  <div className="title">
   <h1 >welcome<br/><br/>recruiter</h1>
   <a href="/src/dowloadFile/Resume.zip" download class="white-mode">Download My Resume</a>
  </div>
 )
}

export default BannerWelcome;