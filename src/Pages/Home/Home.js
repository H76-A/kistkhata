import React from 'react'


/**********
components
**********/
import CreatePostcard from '../../Components/Home/CreatePostcard'
import Header from '../../Components/Home/Header'
import List from '../../Components/Home/List'
import Postcard from '../../Components/Home/Postcard'
import Qr from '../../Components/Home/Qr'
import Footer from '../../Components/Home/Footer'
export default function Home() {
  return (
    <div>
        <Header />
        <Postcard />
        <Qr />
        <List />
        <CreatePostcard />
        
    </div>
  )
}