import React from 'react'
import { Rating } from 'semantic-ui-react'
const RatingItem = ({language, rate}) => {
  return (
    <div style={{display: "flex", flexDirection:"row", marginTop:"15px"}}>
      <p style={{fontWeight:"bold"}}>{language}</p>
      <div style={{justifyContent: "end", width: "100%", display: "flex", marginRight: "50px"}}>
        <Rating icon="star" defaultRating={rate} maxRating={5}/>
      </div>
      
    </div>
  )
}

export default RatingItem

