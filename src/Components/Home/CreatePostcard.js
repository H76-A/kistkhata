
import React from 'react'

// Style 
import './CreatePostcard.css'

/**
 Bootstrap imports
 */
import {Container , Row , Col ,Button} from "react-bootstrap"
export default function CreatePostcard() {
  return (
    <div className='createpostcard'>
         <Container className='postcard-container'>
        <Row>
          <Col lg={7}>
          <p className='sub-title'>Enjoy easy journey</p>
        <p className='title'>3 steps to get a loyal user</p>
        <div className='img-container'>
        <Container >
            <Row>
                <Col ><div className='img-box'><img alt='pic'src='./Images/image.png' /></div></Col>
                <Col ><div className='img-box'><img alt='video' src='./Images/Video.png'/></div></Col>
                <Col ><div className='img-box'><img  alt='location' src='./Images/Loc.png'/></div></Col>
            </Row>
        </Container>
        </div>
        
        <p className='txt' >Create & ship high-quality augmented reality cards in just a few clicks.</p>
        <Button>Create your live postcard</Button>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
