import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_origyeb', 'template_k8ndk63', form.current, 't0RXYYLMoEGbK7CsM')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me for more information</h2>
      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
          <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>nelsonmasibo6@gmail.com</h5>
            <a href="mailto:nelsonmasibo6@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
          <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>nelson Masibo</h5>
            <a href="https://www.facebook.com/nelson.masibo.9" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254704122212</h5>
            <a href="https://api.whatsapp.com/send?phone=+254704122212" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full Name' required />
        <input type='email' name='email' placeholder='your email' required />
        <textarea name='message' rows='7' placeholder='your message' required ></textarea>
        <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
