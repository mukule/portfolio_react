import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Twailand</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Django</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
        
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Mysql</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>pyhton</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>PHP</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
