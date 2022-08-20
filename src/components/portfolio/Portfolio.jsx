import React from 'react';
import { useState } from 'react';
import './portfolio.css';
import Modal from '../modals/Modal';
import IMG1 from '../../assets/images/projects/search-books-ss.png';
import IMG2 from '../../assets/images/projects/budget-tracker.png';
import IMG3 from '../../assets/images/projects/maecenas-devs.png';
import IMG4 from '../../assets/images/projects/tech-blog.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Book Search Engine',
    github: 'https://github.com/andrewyk99/budget-tracker',
    demo: 'https://salty-sea-41217.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Budget Tracker',
    github: 'https://github.com/',
    demo: 'https://liveapplication.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Maecenas Devs',
    github: 'https://github.com/andrewyk99/Maecenas-Devs',
    demo: 'https://gentle-citadel-11319.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tech Blog',
    github: 'https://github.com/andrewyk99/tech-blog',
    demo: 'https://lit-lake-35991.herokuapp.com/'
  }
]

const Portfolio = () => {
  const [openModal, modalOne] = useState(false)

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <div>
              <button key={id} className='portfolio__item' onClick={() => modalOne(true)}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </button>
              {openModal && <Modal closeModal={modalOne} title={title} />}
              </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio