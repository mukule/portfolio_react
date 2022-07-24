import React from 'react'
import cv from '../../assets/cv.pdf'

export const Cta = () => {
  return (
    <div className="cta">
    <a href={cv} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Hire me</a>
    </div>
  )
}
export default Cta