import React from 'react'

import './Postcard.css'
import Button from 'react-bootstrap/Button'
export default function Postcard() {
  return (
    <div className='postcard'>
        <p className='sub-title'>More memorable mail</p>
        <p className='title'>One card - endless emotions</p>
        <img alt='card'  src='./Images/card.png'/>
        <p className='txt'>Create & ship high-quality augmented reality cards in just a few clicks.</p>
        <Button>Create your live postcard</Button>
    </div>
  )
}
