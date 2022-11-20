import React,{useState} from 'react'
import { Col, Row, InputGroup} from 'react-bootstrap'
import './hero.css'
import house from '../../images/house.jpg'
import ContactForm from './ContactForm'


const Hero = () => {
  return (
    <div className='hero-section container mx-auto px-4'>
    <Row>
      <Col xs={12} md={6} lg={6} className="px-4">
        <div className='hero-details'>
        <img src={house} alt="house"/>
        <h4 className='my-3'>Shareholders Feedback</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. velit esse cillum dolore eu fugiat nulla pariatur</span>
        </div>
     </Col>
      <Col xs={12} md={6} lg={6} className="mx-auto">
        <ContactForm />
      </Col>
    </Row>
    </div>
   
   )
}

export default Hero