import React from 'react'

import './ForCustomer.css'

import {Row ,Col , Container,Form,Button} from 'react-bootstrap'
import Footer from '../../Components/Home/Footer'

export default function ForCustomer() {
  return (
    <div className='forcustomer'>
        <Container>
            <Row>
                <Col lg={1}></Col>
                <Col lg={4}> <img alt='recangula'  src='./Images/Rectangle.png'/></Col>
                <Col lg={7}><p className='sub-title'>Title for the article</p>
                <p className='txt'>That said, when it comes to landing pages, popups, and even emails, shorter testimonials tend to be more effective. Ideally, you’ll want to be writing quote testimonials of 50 words or less. Video page testimonialsAnswering these questions in a testimonial is crucial for establishing social proof and provides an example of how your product can get the client where they want to be.</p>
                <p className='txt'>2 days ago . 100 views</p>
                </Col>
            </Row>
        </Container>
        <section className='proposal'>
        <Container >
          <Row>
            <Col lg={6}></Col>
            <Col lg={4}><p className='proposal-txt'>Get a flexible proposal for your business</p>
        <Form.Control size="lg" type="text" placeholder="name@mail.com"  className="input-field"/>
            <Button variant="primary" type="submit">
            Get a proposal
                </Button></Col>
          </Row>
        </Container>
        
      </section>
     
    </div>
  )
}
