import React from 'react';
import Header from './Header';
import './App.css'
import BannerWelcome from './BannerWelcome';
import MyInfo from './MyInfo';
import SkillRating from './SkillRating';
import Experience from './Experience';

class App extends React.Component {
  render() {
   return (
    <div className="appBody">
      <Header />
      <BannerWelcome/>
      <MyInfo />
      <Experience style={{maxHeight: "500px !important" }}/>
    </div> 
   );
  }
}
export default App;