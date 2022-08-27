import React from 'react'
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

function Modal({ closeModal }) {
  return (
    <div className='modal__background'>
        <div className='modal__container'>
            <button onClick={() => closeModal(false)}> X </button>
            <div className='title'>
                <h1>{data[0].title}</h1>
            </div>
            <div className='body'>
                <img src={data[0].image} alt={data[0].title} />
            </div>
            <div className='footer'>
                <a href={data[0].github} classname='btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                <a href={data[0].demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
            </div>
        </div>
    </div>
  )
}

export default Modal