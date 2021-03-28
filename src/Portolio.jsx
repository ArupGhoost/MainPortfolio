import React from 'react'
import { HardWork, ImagesB, ImagesC, ImagesH, ImagesJ, ImagesR, Self, Team } from './Images'

function Portolio() {
    return (
        <>
          <div className='main_port'>
                 <div className='white_sheet animate__animated animate__fadeIn animate__delay-1s'>
                      <p className="animate__animated animate__fadeIn animate__delay-2s">Hii, I am Arup Kumar Behera</p>
                      <p className="animate__animated animate__fadeIn animate__delay-2s">My Age is 24</p>
                      <p className="animate__animated animate__fadeIn animate__delay-3s">I from Talcher, Odisha</p>
                      <p className="animate__animated animate__fadeIn animate__delay-3s">My friends call me Ghost(I think you got your answer) :)</p>
                      <p className="animate__animated animate__fadeIn animate__delay-4s"> And Im a Front-End Developer</p>
                      <img className="animate__animated animate__fadeIn animate__delay-4s" src='/Images/IMG_20210318_120341.jpg' alt='ghostimage'/>
                 </div>
                 <div className='green_sheet'>
                    <p>I have learnt :-</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>React(Hooks)</p>
                    <p>Bootstrap</p>
                    
                    <ImagesH/>
                    <ImagesC />
                    <ImagesJ />
                    <ImagesR />
                    <ImagesB />
                    
                 </div>
                 <div className='any_color'>
                   <p>Im a Self Taught Programmer</p>
                   <p>Learnt Frontend in just 2months(without having any programming background)</p>
                   <br />
                   <p>I can work in a team easily</p>
                   <p>More important im very calm during difficult situations</p>
                   <br />
                     <p>Im a hardworker and quick learner so u can count on me</p>
                     <p>Lastly I enjoy what I do..</p>

                     <Self />
                     <Team />
                     <HardWork />
                     
                 </div>
          </div>
        </>
    )
}

export default Portolio
