import React from 'react'
import './modal.css'
import IMG1 from '../../assets/images/projects/maecenas-devs.png';
import IMG2 from '../../assets/images/projects/budget-tracker.png';
import IMG3 from '../../assets/images/projects/search-books-ss.png';
import IMG4 from '../../assets/images/projects/tech-blog.png';

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
      title: 'Book Search Engine',
      github: 'https://github.com/andrewyk99/book-search-engine',
      demo: 'https://salty-sea-41217.herokuapp.com/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Tech Blog',
      github: 'https://github.com/andrewyk99/tech-blog',
      demo: 'https://lit-lake-35991.herokuapp.com/'
    }
]

function ModalOne({ closeModalOne }) {
  return (
    <div className='modal'>
      <div className='modal__background' onClick={() => {
        closeModalOne(false);
        const body = document.body;
        body.style.overflowY = '';
      }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          <div className='title'>
            <h1>{data[0].title}</h1>
          </div>
          <div className='body'>
            <img src={data[0].image} alt={data[0].title} />
          </div>
          <div className='about'>
            <p>An online platform where alumni of bootcamp programs who are now industry professionals can provide mentorship to aspiring developrs.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>MERN application</li>
                <li>Back end Node and Express Server</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Apollo Server</li>
                <li>GraphQL</li>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <a href={data[0].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[0].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}

function ModalTwo({ closeModalTwo }) {
  return (
    <div className='modal'>
      <div className="modal__background" onClick={() => {
        closeModalTwo(false);
        const body = document.body;
        body.style.overflowY = '';
      }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          <div className='title'>
              <h1>{data[1].title}</h1>
          </div>
          <div className='body'>
            <img src={data[1].image} alt={data[1].title} />
          </div>
          <div className='about'>
            <p>An application used to keep track of a user's income and expenses and displays them on a graph. The user can put in the name of either expense or income while also being able to use the application offline.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>MERN application</li>
                <li>Back end Node and Express Server</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <a href={data[1].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[1].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}

function ModalThree({ closeModalThree }) {
  return (
    <div className='modal'>
      <div className="modal__background" onClick={() => {
        closeModalThree(false);
        const body = document.body;
        body.style.overflowY = '';
      }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          <div className='title'>
              <h1>{data[2].title}</h1>
          </div>
          <div className='body'>
              <img src={data[2].image} alt={data[2].title} />
          </div>
          <div className='about'>
            <p>A simple book search engine website that allows users to search any books and save them to view later.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>MERN application</li>
                <li>Back end Node and Express Server</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>React</li>
                <li>css</li>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <a href={data[2].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[2].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}

function ModalFour({ closeModalFour }) {
  return (
    <div className='modal'>
      <div className="modal__background" onClick={() => {
          closeModalFour(false);
          const body = document.body;
          body.style.overflowY = '';
        }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          <div className='title'>
              <h1>{data[3].title}</h1>
          </div>
          <div className='body'>
              <img src={data[3].image} alt={data[3].title} />
          </div>
          <div className='about'>
            <p>A simple book search engine website that allows users to search any books and save them to view later.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>MERN application</li>
                <li>Back end Node and Express Server</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>React</li>
                <li>css</li>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <a href={data[3].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[3].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}

export {ModalOne, ModalTwo, ModalThree, ModalFour};