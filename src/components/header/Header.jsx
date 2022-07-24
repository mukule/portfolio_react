import React from 'react'
import './header.css'
import Cta from './Cta'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'



export const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello i am </h5>
      <h1>Nelson masibo</h1>
      <h5 className="text-light">Full stack Developer </h5>
      <Cta/>
      <HeaderSocials />
      <div className="me">
        <img src={me} alt="" />
      </div>
      <a href="#contact" className='scrolldown'>scroll Down </a>
     
      </div>
   </header>
  )
}

export default Header