import React from 'react'
import "./App.css"

const Contact = () => {
  return (
   <div className='contactContainer'>
    <div className='contactComponent'>
      <h1 style={{fontWeight: "bold", color: "white"}}>Contact</h1>
      <p style={{fontStyle: "italic"}}>“Tolerated failure imprints learning better than success.”</p>
      <h5>Dave Snowden</h5>
      <div className='linkContainer'>
       <div className='linkItem'>
       <i className="inverted big linkedin icon"></i>
       <p>https://www.linkedin.com/in/minh-thanh-phat-truong-37a867165</p> 
       </div>
       <div className='linkItem'>
       <i className="inverted big phone icon"></i>
       <p>+61 468 345 457</p> 
       </div>
       <div className='linkItem'>
       <i class="envelope inverted big outline icon"></i>
       <p>petertp144@gmail.com</p> 
       </div>
      </div>
    </div>
   </div>
  )
}

export default Contact
