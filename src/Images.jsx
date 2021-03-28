import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Images1 = () => {
    return <img src='https://www.flaticon.com/svg/vstatic/svg/1649/1649063.svg?token=exp=1616872313~hmac=d9c9000d9c2d4aba38732f41045e2149'
    className='image1'
    alt='images'/>
}

const Images2 = () => {
    return <img src='https://www.flaticon.com/svg/vstatic/svg/841/841364.svg?token=exp=1616873079~hmac=356fb46f62e7ddb25316c0ff08494219' 
    className='image2'
    alt='images'/>
}
 const Images3 = () => {
    return <img src='https://www.flaticon.com/svg/vstatic/svg/4221/4221059.svg?token=exp=1616873532~hmac=4d498ae6c8627207a42547fd60250904' 
    className='image3'
    alt='images'/>
}

const Images4 = () => {
    return <img src='https://www.flaticon.com/svg/vstatic/svg/4206/4206326.svg?token=exp=1616875405~hmac=36e65a4b6f88d525b7ac8959756ec2f9' 
    className='image4'
    alt='images'/>
}
const ImagesH = () =>{
     useEffect(() => {
         Aos.init({duration: 2000})
     }, [])

    return <img src='https://www.flaticon.com/svg/vstatic/svg/919/919827.svg?token=exp=1616929705~hmac=8ba74e301e328aec2ce5361e4e3ba96c'
        className='imageH' data-aos="fade-right"
        alt='images'
    />
    
}
const ImagesC = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/919/919826.svg?token=exp=1616929845~hmac=0a5bef407b0b5da37422c0af49b1c18b'
        className='imageC' data-aos="fade-left"
        alt='images'
    />
}
const ImagesJ = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/919/919828.svg?token=exp=1616929933~hmac=35d89496b5472f329d150feeb39f566c'
        className='imageJ' data-aos="fade-right"
        alt='images'
    />
}
const ImagesR = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/919/919851.svg?token=exp=1616930132~hmac=d9ad3cccc9243cae953f324dae8c05cf'
        className='imageR' data-aos="fade-left"
        alt='images'
    />
}
const ImagesB = () =>{
    return <img src='https://www.flaticon.com/svg/vstatic/svg/1348/1348052.svg?token=exp=1616930209~hmac=515dee2dfece14b5e636c40e01d5ffdb'
        className='imageB'
        alt='images'
    />
}
const HardWork = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/4072/4072945.svg?token=exp=1616945496~hmac=a72922cf8619f527d29059bf6b2fa3ae'
        className='hard'  data-aos="fade-left"
        alt='images'
    />
}
const Team = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/1256/1256650.svg?token=exp=1616945501~hmac=45a112bab11e58b154355d999d1a7dac'
    className='teamwork' data-aos="fade-left"
    alt='images' />
}
const Self = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <img src='https://www.flaticon.com/svg/vstatic/svg/2463/2463510.svg?token=exp=1616946126~hmac=4620806c8e4556a6705d0d31f34b795e'
    className='self'  data-aos="fade-left"
    alt='images' />
}
const Fb = () => {
    return <Link to='!'><img src='https://www.flaticon.com/svg/vstatic/svg/145/145802.svg?token=exp=1616953547~hmac=51d13319c687dbda75605c9d17f89267'
        className='facebook animate__animated animate__flipInX animate__delay-0s'
        alt='images'
    /></Link>
}
const Insta = () => {
    return <Link to='@'><img src='https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1616953848~hmac=58a1a5038a72c7b4aa7d99a1c14d7903'
        className='insta animate__animated animate__flipInX animate__delay-0s'
        alt='images'
    /></Link>
}
const Yt = () => {
    return <Link to='&'><img src='https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1616953874~hmac=b51438415fb72f3e52c2f9825ed8306f'
        className='youtube animate__animated animate__flipInX animate__delay-0s'
        alt='images'
    /></Link>
}
const Twitt = () => {
    return <Link to='#'><img src='https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1616953902~hmac=79c8b9eac5864a7aab8641fddff80fd1'
        className='twitter animate__animated animate__flipInX animate__delay-1s'
        alt='images'
    /></Link>
}
const Git = () => {
    return <Link to='^'><img src='https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1616953931~hmac=be205f24d274e8f1a998e616eec16368'
        className='github animate__animated animate__flipInX animate__delay-1s'
        alt='images'
    /></Link>
}


export default Images1;
export { Images2, Images3, Images4 , ImagesH, ImagesC, ImagesJ, ImagesR, ImagesB, HardWork, Team, Self, Fb, Yt, Insta,
Twitt, Git};