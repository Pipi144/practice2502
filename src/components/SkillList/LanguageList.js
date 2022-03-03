import React from 'react'
import { LanguageArray } from './LanguageArray'
import LanguageItem from './LanguageItem'
const LanguageList = () => {
  const languageList = LanguageArray.map(language =>{
   return <LanguageItem language={language.language} rate={language.rate}/> 
  })
  return (
    <div style={{display: "flex", flexDirection: "column", borderBottom: "1px solid grey"}}>
      {languageList}
    </div>
  )
}

export default LanguageList

