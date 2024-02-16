import React from 'react'
import './Unlock.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Celebration from '../Assets/celeb.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Unlock() {
  return (
    <div className="unlock">
      <div className="container">
          <h2 className='head'>Unlock Exclusive Benefits</h2>
          <Container>
      <Row>
        <Col className='pt-4'>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridname">
          <Form.Label>PHONE NUMBER</Form.Label>
         <Form.Select style={{borderRadius:'20px',border: '1px solid #333'}} aria-label="Floating label select example">
        <option value="1">+91 India</option>
        <option value="2">+97 UAE</option>
        <option value="3">+96 Saudi Arabia</option>
      </Form.Select>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>.</Form.Label>
          <Form.Control style={{borderRadius:'20px',border: '1px solid #333'}} type="text" placeholder="Enter your number" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" style={{borderRadius:'20px',border: '1px solid #333'}}  placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL [OPTIONAL]</Form.Label>
        <Form.Control type="email" style={{borderRadius:'20px',border: '1px solid #333'}}  placeholder="Enter your email" />
      </Form.Group>
      
      <Button style={{borderRadius:'20px',backgroundColor:'rgb(27, 180, 231)',color:'white'}}  className='button' type="submit">
        CONTINUE
      </Button>
      <br /><br />

      <Form.Text className="text-muted">
      Get ready to receive a secret code [OTP] on your phone
        </Form.Text>
    
       </Col>
        <Col>
        <img src={Celebration} width={'100%'} alt="" />
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  )
}

export default Unlock