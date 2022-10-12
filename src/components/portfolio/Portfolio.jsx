import React from 'react';
import { useState } from 'react';
import './portfolio.css';
import {ModalOne, ModalTwo, ModalThree, ModalFour, ModalFive, ModalSix} from '../modals/Modal';
import IMG1 from '../../assets/images/projects/maecenas-devs.png';
import IMG2 from '../../assets/images/projects/budget-tracker.png';
import IMG3 from '../../assets/images/projects/work-day-scheduler-ss.png';
import IMG4 from '../../assets/images/projects/tech-blog.png';
import IMG5 from '../../assets/images/projects/taskmaster-pro.png';
import IMG6 from '../../assets/images/projects/weather-pwa.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Maecenas Devs',
    github: 'https://github.com/andrewyk99/Maecenas-Devs',
    demo: 'https://gentle-citadel-11319.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Budget Tracker',
    github: 'https://github.com/andrewyk99/budget-tracker',
    demo: 'https://salty-sea-41217.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Work Day Scheduler',
    github: 'https://github.com/andrewyk99/work-day-schedule',
    demo: 'https://andrewyk99.github.io/work-day-schedule/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tech Blog',
    github: 'https://github.com/andrewyk99/tech-blog',
    demo: 'https://lit-lake-35991.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Taskmaster Pro',
    github: 'https://github.com/andrewyk99/taskmaster-pro',
    demo: 'https://andrewyk99.github.io/taskmaster-pro/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather PWA App',
    github: 'https://github.com/andrewyk99/weather-app',
    demo: 'https://cozy-sorbet-7e78b1.netlify.app/'
  }
]

const Portfolio = () => {
  const [openModalOne, setModalOne] = useState(false)
  const [openModalTwo, setModalTwo] = useState(false)
  const [openModalThree, setModalThree] = useState(false)
  const [openModalFour, setModalFour] = useState(false)
  const [openModalFive, setModalFive] = useState(false)
  const [openModalSix, setModalSix] = useState(false)
  const body = document.body;

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Project 1 */}
        <div>
          <button className='portfolio__item' onClick={() => {
            setModalOne(true);
            body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[0].image} alt={data[0].title} />
            </div>
            <h3>{data[0].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[0].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[0].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>

        {/* Project 2 */}
        <div>
          <button className='portfolio__item' onClick={() => {
            setModalTwo(true);
            body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[1].image} alt={data[1].title} />
            </div>
            <h3>{data[1].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[1].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[1].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>

        {/* Project 3 */}
        <div>
          <button className='portfolio__item' onClick={() => {
              setModalThree(true);
              body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[2].image} alt={data[2].title} />
            </div>
            <h3>{data[2].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[2].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[2].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>

        {/* Project 4 */}
        <div>
          <button className='portfolio__item' onClick={() => {
            setModalFour(true);
            body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[3].image} alt={data[3].title} />
            </div>
            <h3>{data[3].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[3].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[3].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>

        {/* Project 5 */}
        <div>
          <button className='portfolio__item' onClick={() => {
            setModalFive(true);
            body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[4].image} alt={data[4].title} />
            </div>
            <h3>{data[4].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[4].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[4].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>

        {/* Project 6 */}
        <div>
          <button className='portfolio__item' onClick={() => {
            setModalSix(true);
            body.style.overflowY = 'hidden';
          }}>
            <div className="portfolio__item-image">
              <img src={data[5].image} alt={data[5].title} />
            </div>
            <h3>{data[5].title}</h3>
            <div className="portfolio__item-cta">
              <a href={data[5].github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={data[5].demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </button>
        </div>
      </div>

      {openModalOne && <ModalOne closeModalOne={setModalOne} />}
      {openModalTwo && <ModalTwo closeModalTwo={setModalTwo} />}
      {openModalThree && <ModalThree closeModalThree={setModalThree} />}
      {openModalFour && <ModalFour closeModalFour={setModalFour} />}
      {openModalFive && <ModalFive closeModalFive={setModalFive} />}
      {openModalSix && <ModalSix closeModalSix={setModalSix} />}
    </section>
  )
}

export default Portfolio