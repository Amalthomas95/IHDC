import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/real-estate-house.png'
function Header() {
  return (
   
        <Navbar className="bg-body-tertiary">
          <Container className='Head'>
        <Navbar.Brand href="/">
          <img className='Image' src={logo} alt="logo" />
        </Navbar.Brand>
        <h4 className='m-auto'>XYZ SYSTEMS LLP.</h4>
        </Container>
        </Navbar> 
        
    
  )
}

export default Header