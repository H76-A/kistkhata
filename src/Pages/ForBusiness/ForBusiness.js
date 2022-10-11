import React from 'react'

import Footer from '../../Components/Home/Footer'
/**
 Bootstrap
 */
import {Container,Row ,Col} from 'react-bootstrap'

 //Style
 import './ForBusiness.css'
 

 import {Button,Form} from 'react-bootstrap'
export default function ForBusiness() {
  return (
    <div className='forbusiness'>
      <section>
      <p className='sub-title'>Business case</p>
      <p className='title'>Title for business case</p>
      </section>
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
