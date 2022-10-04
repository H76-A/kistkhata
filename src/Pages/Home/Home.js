import React from 'react'

/**********
components
**********/
import Header from '../../Components/Home/Header'
import List from '../../Components/Home/List'
import Postcard from '../../Components/Home/Postcard'
import Qr from '../../Components/Home/Qr'

export default function Home() {
  return (
    <div>
        <Header />
        <Postcard />
        <Qr />
        <List />
    </div>
  )
}