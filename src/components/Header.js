import React from 'react'
import './App.css'
import './Header.scss'

const Header = () => {
  return (
    <div className='aos' data-aos='fade-out'>
      <div className='header'>
        <div className='ui labeled icon menu headerStyle'>
          <a className='item' href='https://www.linkedin.com/feed/'>
            <i className='inverted linkedin icon'></i>
            LinkedIn
          </a>
          <a className='item' href='https://www.facebook.com/truongmp/'>
            <i class='inverted facebook f icon'></i>
            Facebook
          </a>
          <div className='right menu menuSignature wrapper'>
            <h1>I'm Peter</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
