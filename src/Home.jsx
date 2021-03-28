import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Images1, { Images2, Images3, Images4 } from './Images';



function Home() {
    useEffect(() =>{
        Aos.init({duration: 2000});
      }, []);
    return (
        <>
        <div className='home_main'>
          <div className='margin1'  data-aos="fade-right"></div>
          
              
          
          <div className='margin2' data-aos="fade-left"></div>
          <div className='intro'>
              <p>Hii Im Ghost,</p>
              <p className="animate__animated animate__fadeIn animate__delay-1s">A <strong style={{color:'limegreen', opacity:'.5',fontSize:'.8rem'}} >
              Frontend Developer</strong></p>
              <p className="animate__animated animate__fadeIn animate__delay-2s" style={{fontSize:'.3rem', opacity:'.5'}}>To Know more about me click on Portfolio</p>
              <p  className="animate__animated animate__fadeIn animate__delay-2s" style={{fontSize:'.3rem', opacity:'.5'}}>To connect with me click on Contact</p>
              <Images1 />
              <Images2 />
              <Images3 />
              <Images4 />
          </div>
          <p style={{fontSize:'.25rem', fontFamily:'sans-serif', color:'white', textAlign:'center', position:'relative', top:'400px'}}>A CopyRight of Ghost, 2021</p>
          </div>  
        </>
    )
}

export default Home
