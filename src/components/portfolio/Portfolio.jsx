import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Project 1 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>

        {/* Project 2 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>

        {/* Project 3 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>

        {/* Project 4 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>

        {/* Project 5 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>

        {/* Project 6 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Title 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/" className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href="http://website" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio