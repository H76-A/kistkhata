import React from 'react'

// Styele
import './Header.css'
// Bootstrap Imports
import { Container,Row,Col, Button } from 'react-bootstrap'

export default function Header() {
  return (
        <header className='header '>
            <Container>
                <Row>
                    <Col lg={5}>
                   
                    <p className='sub-title'>Mail is boring. </p>
                    <p className='title'>Unstationery isn’t!</p>
                    <p className='txt'>Send a postcard that comes to life and increase your customers engagement</p>
                    <Button className='header-btn'>Create your live postcard</Button>
                    </Col>
                    <Col lg={7}>
                        <div className='img-box'>
                        <img alt='hand image' src='./Images/hand.png' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
