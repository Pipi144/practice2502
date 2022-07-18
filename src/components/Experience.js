import React from 'react'
import './App.css'
import './Header.scss'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
const Experience = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div className='expSlider' id='expSection'>
      <Carousel
        style={{ width: '100%' }}
        activeIndex={index}
        onSelect={handleSelect}
        fade
      >
        <Carousel.Item style={{ width: '100%', height: '550px' }}>
          <img
            className='d-block w-100'
            src={require('./pic/carousel1.jpg')}
            style={{ borderRadius: '25px', height: '550px' }}
            alt='First slide'
          />
          <Carousel.Caption>
            <h1>Graduation in 2011 majored in Economics</h1>
            <p>University of Economics and Laws, Viet Nam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: '550px' }}>
          <img
            className='d-block w-100'
            src={require('./pic/carousel2.jpeg')}
            style={{ borderRadius: '25px', height: '550px' }}
            alt='First slide'
          />
          <Carousel.Caption>
            <h1>First Job in Australia in 2016</h1>
            <p>
              From waiter to barista to supervisor in 3.5 years, during time at
              school
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: '550px' }}>
          <img
            className='d-block w-100'
            src={require('./pic/BI Degree.jpeg')}
            style={{ borderRadius: '25px', height: '550px' }}
            alt='First slide'
          />
          <Carousel.Caption>
            <h1>Graduated in 2020 majored in Mobile Development</h1>
            <p>Academy of Information Technology</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: '550px' }}>
          <img
            className='d-block w-100'
            src={require('./pic/carousel4.png')}
            style={{ borderRadius: '25px', height: '550px' }}
            alt='First slide'
          />
          <Carousel.Caption>
            <h1>First Freelance product powered by Shopify</h1>
            <p>Best Bean Best Cup Pty Ltd</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Experience
