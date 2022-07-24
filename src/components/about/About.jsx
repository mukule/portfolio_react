import React from 'react'
import './about.css'
import me from '../../assets/me_about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
     <h5>Get to know more </h5>
     <h2>About me </h2>
     <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={me} alt="about image" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small> 2+ years of web development</small>
          </article>
          <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients worked with</h5>
          <small> 5+ all over</small>
          </article>
          <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects completed</h5>
          <small> 10+ projects succesfully Completed</small>
          </article>
        </div>
        <p>
        I am a computer science Graduate from chuka university. I am passionate about technology especially in the field of web development. I take a client proposal very serios and keep his/her information

        private as we work on the project till the final product is complete. I do not breach contract once we have agreed.I like to involve my client in the development to enhance the desired result.
        </p>
        <a href="#contact" className='btn btn-primary'>Lets talk </a>
      </div>
     </div>
    </section>
  )
}

export default About
