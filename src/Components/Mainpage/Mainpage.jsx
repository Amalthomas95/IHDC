import React from 'react'
import './Mainpage.css'
import Subheader from '../Subheader/Subheader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Membership from  '../Assets/membership.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Assets/img1.jpg';
import Image2 from '../Assets/img2.jpg';
import Image3 from '../Assets/img3.jpg';
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div>
        <Subheader/>
        <div className="heading">
          <div className="container p-2">
          <h4 style={{color:'black'}} className='head'>New Arrival</h4>
           <h6 style={{textEmphasisColor:'lightseagreen', textDecoration:'underline'}}>JOIN TODAY</h6>
         <div className='container'>
      <Row>
        <Col className='pt-4'>
        <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Membership} />
      </Card>

        <Button style={{ font:'bold', width: '18rem',borderRadius: '50px',backgroundColor:'whitesmoke',color: 'lightseagreen',height:'33px',fontWeight:'bold' }} className='button'>JOIN NOW</Button>
        
        </Col>
        <Col>
        <h4 style={{textDecoration:'underline'}} className='heads'>Unlock Premium Features Now</h4>
        <div className="corousel">
<div className="container pt-2 ">
<Carousel fade>
      <Carousel.Item>
      <Card style={{ width: '18rem',borderRadius: '15px',border: '1px solid #333' }}>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}} className='text'>Lower  <br />Interest Rates</Card.Title>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem',borderRadius: '15px',border: '1px solid #333'  }}>
      <Card.Img variant="top" src={Image2}  />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}  >Interest <br />Free Payments</Card.Title>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem',borderRadius: '15px',border: '1px solid #333' }}>
    <Card.Img variant="top" src={Image3} className='image' />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Discount On <br /> Materials</Card.Title>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
  <div className="button">
    <Link to={'/Unlock'}>
    <Button style={{borderRadius: '50px',marginLeft:'50px',backgroundColor:'lightseagreen',color:'white'}} className='buton' >UNLOCK NOW</Button>
    </Link>
  </div>
  <div className="button">
    <Button style={{borderRadius: '50px',marginLeft:'70px',width:'170px',height:'33px',backgroundColor:'lightseagreen',color:'white'}} className='btn' >DETAILS</Button>
  </div>

  
</div>


        </div>
        </Col>
      </Row>
      </div>
          </div>
        </div>
    </div>
  )
}

export default Mainpage