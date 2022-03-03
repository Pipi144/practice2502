import React from 'react'
import "../App.css"
import RatingList from './RatingList'
import LanguageList from './LanguageList'
const SkillList = () => {
  return (
    <div className="skillListStyle">
      <div className='textSkillStyle'>
       <h1 style={{fontSize: "50px", fontFamily: "fantasy", color: "gray", letterSpacing:"3px"}}>Career Abilities</h1>
       <p style={{fontStyle: "italic"}}>"Learning never exhausts the mind."</p>
       <p>Leonardo Davinci</p>
      </div>
      <div className='ratingSectionStyle'>
       <h3>Skills</h3>
       <RatingList/>
      </div>
      <div className='ratingSectionStyle'>
       <h3>Language</h3>
       <LanguageList />
      </div>
    </div>
  )
}

export default SkillList

