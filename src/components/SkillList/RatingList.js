import React from 'react'
import RatingItem from './RatingItem'
import SkillArray from './SkillArray'
const RatingList = () => {
  const skillList = SkillArray.map(skill =>{
   return <RatingItem language={skill.language} rate={skill.rate}/> 
  })
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {skillList}
    </div>
  )
}

export default RatingList
