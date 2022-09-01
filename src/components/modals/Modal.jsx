import React from 'react'
import './modal.css'
import IMG1 from '../../assets/images/projects/search-books-ss.png';
import IMG2 from '../../assets/images/projects/budget-tracker.png';
import IMG3 from '../../assets/images/projects/maecenas-devs.png';
import IMG4 from '../../assets/images/projects/tech-blog.png';

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Book Search Engine',
      github: 'https://github.com/andrewyk99/book-search-engine',
      demo: 'https://salty-sea-41217.herokuapp.com/'
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

function ModalOne({ closeModalOne }) {
  return (
    <div className='modal'>
      <div className='modal__background' onClick={() => {
        closeModalOne(false);
        const body = document.body;
        body.style.overflowY = '';
      }}></div>
      <div className='modal__container'>
        <div className="modal__wrap row">
          <div className='title row'>
            <h1>{data[0].title}</h1>
          </div>
          <div className='body row'>
            <img classname='row' src={data[0].image} alt={data[0].title} />
          </div>
          <div className='about row'>
            <p className='row'>A simple book search engine website that allows users to search any books and save them to view later.</p>
            <div className='highlights'>
              <div>
                <h2 className='col-sm'>Highlights:</h2>
                <ul>
                  <ol>MERN application</ol>
                  <ol>Back end Node and Express Server</ol>
                </ul>
              </div>
              <div>
                <h2 className='col-sm'>Tools Used:</h2>
                <ul>
                  <ol>React</ol>
                  <ol>css</ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer row'>
          <a href={data[0].github} classname='btn-repo' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[0].demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
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
        <div className='title'>
            <h1>{data[1].title}</h1>
        </div>
        <div className='body'>
            <img src={data[1].image} alt={data[1].title} />
        </div>
        <p>
          A book search engine that allows the user to create an account, search, and save any books they wish.
        </p>
        <div>
          <h2>Highlights</h2>
          <li>
            <ul>Blah blah</ul>
            <ul>blah blah</ul>
          </li>
        </div>
        <div>
          <h2>Tools Used</h2>
          <li>
            <ul>JavaScript</ul>
            <ul>HTML</ul>
          </li>
        </div>
        <div className='footer'>
            <a href={data[1].github} classname='btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
            <a href={data[1].demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
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
          <div className='title'>
              <h1>{data[2].title}</h1>
          </div>
          <div className='body'>
              <img src={data[2].image} alt={data[2].title} />
          </div>
          <div className='footer'>
              <a href={data[2].github} classname='btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
              <a href={data[2].demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
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
          <div className='title'>
              <h1>{data[3].title}</h1>
          </div>
          <div className='body'>
              <img src={data[3].image} alt={data[3].title} />
          </div>
          <div className='footer'>
              <a href={data[3].github} classname='btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
              <a href={data[3].demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
      </div>
    </div>
  )
}

export {ModalOne, ModalTwo, ModalThree, ModalFour};