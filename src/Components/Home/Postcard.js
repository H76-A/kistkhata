import React from 'react'

import './Postcard.css'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap'
export default function Postcard() {
  return (
    <div className='postcard'>
      <Container>
        <Row>
          <Col><p className='sub-title'>More memorable mail</p></Col>
        </Row>
        <Row>
          <Col> <p className='title'>One card - endless emotions</p></Col>
        </Row>
        <Row>
          <Col> <img alt='card'  src='./Images/card.png'/></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}><p className='txt'>Create & ship high-quality augmented reality cards in just a few clicks.</p></Col>
        </Row>
        <Row>
          <Col> <Button>Create your live postcard</Button></Col>
        </Row>
      </Container>
      
       
    </div>
  )
}
