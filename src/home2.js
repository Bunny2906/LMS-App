import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from './navbar2'
import Footer from './footer'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.jpg'
import image12 from './images/image12.jpg'
import image13 from './images/image13.jpg'
import image14 from './images/image14.jpg'
import image15 from './images/image15.jpg'
import image16 from './images/image16.jpg'
import image17 from './images/image17.jpg'
import image18 from './images/image18.jpg'
import image19 from './images/image19.jpg'
import image20 from './images/image20.jpg'
import image21 from './images/image21.jpg'
const Home2 = () => {
  return (
    <div className='home2'>
        <Navbar2 />
        <div className='logoutpage'>
            <h1 className='maintext'>A place where you can find books,get their description and add/remove them from Favourites❤️ </h1>
              <div className='first'>
                <img src={image7}></img>
                <img src={image8}></img>
                <img src={image9}></img>
                <img src={image10}></img>
                <img src={image12}></img>
                <img src={image12}></img>
                <img src={image13}></img>
                <img src={image14}></img>
                <img src={image15}></img>
                <img src={image16}></img>
                <img src={image17}></img>
                <img src={image18}></img>
                <img src={image19}></img>
                <img src={image11}></img>
                <img src={image20}></img>
                <img src={image21}></img>
              </div>
              <h4 >To get more.....<Link to="/signin"><button>Login</button></Link></h4>
            <h1>“A reader lives a thousand lives before he dies . . . The man who never reads lives only once.”</h1>
        </div>
        <Footer />
    </div>
  )
}
export default Home2;
