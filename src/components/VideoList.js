import React from 'react'
import "./App.css"
import { Carousel, CarouselItem } from 'react-bootstrap'
import Vid1 from "./Video/guitar.mp4"
import Vid2 from "./Video/piano.mp4"
import ReactPlayer from 'react-player'
import { useState } from "react";
import {Element} from "react-scroll"
const VideoList = () => {
 const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 const videoProperties = [
  {id: 1,
  title: "Thank You For The Music",
  src: Vid2,
  credit: "Thank You For Spending Time To Visit My Resume Website, I Hope We Will Work Together"
  },
 ]
  return (
    <div className="expSlider" style={{textAlign: "center"}} id="videoList">
    <h1 style={{textShadow: "5px 5px grey", fontFamily: "sans-serif", color: "black"}}>Have A Good Day, Let's Enjoy Some Music Played By Me</h1>
      <Carousel style={{width: "100%"}} activeIndex={index} onSelect={handleSelect} fade interval={null}>
       {videoProperties.map(videoObj =>{
        return (
         <CarouselItem key={videoObj.id} style={{width: "100%", height: "400px"}}>
          <ReactPlayer 
           url={videoObj.src}
           width= "100%"
           pip= {true}
           controls= {true}
           playing= {true}
           style={{borderRadius: "25px", height: "400px"}}
          />
          <Carousel.Caption>
           <h1>{videoObj.title}</h1>
           <p style={{color: "white"}}>{videoObj.credit}</p>
          </Carousel.Caption>
         </CarouselItem>
        )
       })}
       <CarouselItem style={{width: "100%", height: "400px"}}>
          <img  src={require("./pic/thankyou.jpeg")} className="d-block w-100" style={{borderRadius: "25px", height: "400px"}}/>
          <Carousel.Caption>
           <h1>Thank you for your valuable time</h1>
           <p style={{color: "lightblue"}}>Have a good day</p>
          </Carousel.Caption>
         </CarouselItem>
      </Carousel>
    </div>
  )
}

export default VideoList
