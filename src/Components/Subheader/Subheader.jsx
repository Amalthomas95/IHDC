import React from 'react'
import './Subheader.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Subheader() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav className="Subheader m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Transactions">Transactions</Nav.Link>
            <Nav.Link href="/Journal">Journal</Nav.Link>
          </Nav>
          <i class="fa fa-user-plus "> </i>
          </Navbar.Collapse>
       </Container>
    </Navbar>
    </div>
  )
}

export default Subheader