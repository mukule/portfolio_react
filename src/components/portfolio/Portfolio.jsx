import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My portfolio',
    github: 'https://github.com/mukule',
    demo: 'hitechsolutions.co.ke',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Marine Park Resort',
    github: 'https://github.com/mukule',
    demo: 'https://marine-park-resort.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Service of Love',
    github: 'https://github.com/mukule',
    demo: 'http://www.service-of-love.org/',
  },
 
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className="btn">Github</a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>
        </article>
          )
        }
        )
       }
      </div>
    </section>
  )
}

export default Portfolio
