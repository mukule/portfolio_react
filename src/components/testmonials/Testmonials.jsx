import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Service of love organization',
    review: 'I enjoyed working with you, always delevered on time and on agreement'
  },
  {
    avatar: AVTR2,
    name: 'Marine Park Resort',
    review: 'Well i am really impresed on how fast you delivered this, its what i needed'
  },
  {
    avatar: AVTR3,
    name: 'Penafa online school',
    review: 'Always available to make changes when required. good to work with'
  },
  {
    avatar: AVTR1,
    name: 'Aplan creative agency',
    review: 'Creativity and skills put together to deliver for our customers, what a great dev',
  },
]

export const Testmonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from my Clients</h5>
      <h2>Testmonials</h2>


      <Swiper className="container testmonials_container"
       // install Swiper modules
       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
     
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key="index" className="testmonial">
        <div className="client_avatar">
          <img src={avatar} alt={name} />
        </div>
        <h5 className="client_name">{name}</h5>
          <small className="client_review">
            {review}
          </small>
        </SwiperSlide>
          )
        })
      }  
      </Swiper>
    </section>
  )
}

export default Testmonials
