import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
      <article className="service">
        <div className="service_head">
          <h3>UI/UX design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service-list-icon" />
            <p>User Experience design services</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>User Interface design services</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Graphics design for products</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Advancements on the ui/ux of the existing digital products</p>
          </li> 
         
        </ul>
        </article>

        <article className="service">
        <div className="service_head">
          <h3>Web development</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service-list-icon" />
            <p>Design of high quality web apps</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Re-design of high quality web apps</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Continuos support to our clients for optimum output</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Our website are made responsive on all devices</p>
          </li> 
         
        </ul>
        </article>

        <article className="service">
        <div className="service_head">
          <h3>Content creation</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service-list-icon" />
            <p>Content creation for your website</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>All social media content creation</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Search engine Optimization(SEO)</p>
          </li> 
          <li>
            <BiCheck className="service-list-icon" />
            <p>Free promotion and referral on my social media platforms</p>
          </li> 
         
        </ul>
        </article>
      </div>
     
    </section>
  )
}

export default Services
