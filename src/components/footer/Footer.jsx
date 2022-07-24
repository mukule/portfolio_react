import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href='' className='footer_logo'>NELSON</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a> </li>
        <li><a href='#'>About</a> </li>
        <li><a href='#'>Experience</a> </li>
        <li><a href='#'>Services</a> </li>
        <li><a href='#'>Portfolio</a> </li>
        <li><a href='#'>Testmonials</a> </li>
        <li><a href='#'>Contact</a> </li>
      </ul>

      <div className='footer_socials'>
        <a hre='https://facebook.com'><BsFacebook /></a>
        <a hre='https://instagram.com'><AiFillInstagram /></a>
        <a hre='https://twitter.com'><AiFillTwitterCircle /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Nelson Masibo, All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer
