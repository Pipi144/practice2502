import React from "react";
import "./App.css"

const Header = () => {
 return (
  <div className="ui labeled icon menu headerStyle">
    <a className="item" href="https://www.linkedin.com/feed/" target="_blank">
    <i className="linkedin icon"></i>
    LinkedIn
    </a>
    <a className="item" href="https://www.facebook.com/truongmp/" target="_blank">
      <i class="facebook f icon"></i>
      Facebook
    </a>
    <div className="right menu menuSignature">
     <h1>PiPi</h1>
    </div>
  </div>
 );
}

export default Header;