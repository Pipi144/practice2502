import React from 'react'
import './App.css'
import { Link } from 'react-scroll'
import { Navbar, Container, Nav } from 'react-bootstrap'

const BannerWelcome = () => {
  return (
    <div className='title'>
      <h1>
        welcome
        <br />
        <br />
        recruiter
      </h1>
      <div className='sideMenu'>
        <Navbar expand='lg' expand={false}>
          <Container
            style={{
              display: 'flex !important',
              flexDirection: 'row',
              justifyContent: 'end',
              backgroundColor: 'transparent',
              alignItems: 'end',
            }}
          >
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <i className='arrow square down icon big inverted'></i>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link style={{ border: '0.5px solid black' }}>
                  <Link
                    to='profileSection'
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={300}
                  >
                    My Profile
                  </Link>
                </Nav.Link>

                <Nav.Link style={{ border: '0.5px solid black' }}>
                  <Link
                    to='expSection'
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={300}
                  >
                    Experiences
                  </Link>
                </Nav.Link>

                <Nav.Link style={{ border: '0.5px solid black' }}>
                  <Link
                    to='skillSection'
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={300}
                  >
                    Skills
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default BannerWelcome
