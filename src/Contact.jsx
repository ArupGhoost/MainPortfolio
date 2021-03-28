import React from 'react'
import { Fb, Git, Insta, Twitt, Yt } from './Images'

function Contact() {
    return (
        <>
          <div className='contact'>
               <h1>My Contact Numbers are</h1>
               <p>xxxxxxx488</p>
               <p>xxxxxxx287</p>
          </div>  
          <div className='email'>
              <h1>My Email ID's are</h1>
              <p>arupbehera243@gmail.com</p>
              <p>arupbehera142@gmail.com</p>
          </div>

          <Fb />
          <Insta />
          <Yt />
          <Twitt />
          <Git />
          
        </>
    )
}

export default Contact
