import React from 'react';
import Header from './Header';
import './App.css'
import BannerWelcome from './BannerWelcome';
import MyInfo from './MyInfo';
import Experience from './Experience';
import SkillList from './SkillList/SkillList';
import VideoList from './VideoList';
class App extends React.Component {
  render() {
   return (
    <div className="appBody">
      <Header />
      <BannerWelcome/>
      <MyInfo />
      <Experience/>
      <SkillList/>
      <VideoList />
    </div> 
   );
  }
}
export default App;