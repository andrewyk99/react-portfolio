import React from 'react'
import './modal.css'
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
          {/* Title */}
          <div className='title'>
            <h1>{data[0].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
            <img src={data[0].image} alt={data[0].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>An online platform where alumni of bootcamp programs who are now industry professionals can provide mentorship to aspiring developrs.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>Full MERN stack</li>
                <li>Functional PWA</li>
                <li>Integration with databases</li>
                <li>Bcrypt authentication</li>
                <li>Flexable integration of Bootstrap</li>
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

        {/* Footer */}
        <div className='footer'>
          <a href={data[0].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[0].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 1

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
          {/* Title */}
          <div className='title'>
              <h1>{data[1].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
            <img src={data[1].image} alt={data[1].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>An application used to keep track of a user's income and expenses and displays them on a graph. The user can put in the name of either expense or income while also being able to use the application offline.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>Integrated back end</li>
                <li>Functional PWA</li>
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

        {/* Footer */}
        <div className='footer'>
          <a href={data[1].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[1].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 2

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
          {/* Title */}
          <div className='title'>
              <h1>{data[2].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
              <img src={data[2].image} alt={data[2].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>A simple app to make a scheudle for a single standard work day.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>Front end scheduling and task manager</li>
                <li>User input can be saved and overwritten in local storage</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Moment.js</li>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='footer'>
          <a href={data[2].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[2].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 3

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
          {/* Title */}
          <div className='title'>
              <h1>{data[3].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
              <img src={data[3].image} alt={data[3].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>A blog application where a user can create, edit, or delete posts and comments on other posts from the homepage.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>RESTful Application</li>
                <li>Integrated back end</li>
                <li>Bcrypt Authentication</li>
                <li>Users can create and login into an account</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>Handlebars</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Bcrypt</li>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='footer'>
          <a href={data[3].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[3].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 4

function ModalFive({ closeModalFive }) {
  return (
    <div className='modal'>
      <div className="modal__background" onClick={() => {
          closeModalFive(false);
          const body = document.body;
          body.style.overflowY = '';
        }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          {/* Title */}
          <div className='title'>
              <h1>{data[4].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
              <img src={data[4].image} alt={data[4].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>A front end to-do application that allows the user to create tasks with a description as well as a due date. They then can choose how to manage their tasks by dragging and dropping each task.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>Completely front end</li>
                <li>Use of CSS framework Bootstrap</li>
                <li>Use of jQuery to manage color coding depending on the date</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='footer'>
          <a href={data[4].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[4].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 5

function ModalSix({ closeModalSix }) {
  return (
    <div className='modal'>
      <div className="modal__background" onClick={() => {
          closeModalSix(false);
          const body = document.body;
          body.style.overflowY = '';
        }}></div>
      <div className='modal__container'>
        <div className="modal__wrap">
          {/* Title */}
          <div className='title'>
              <h1>{data[5].title}</h1>
          </div>

          {/* Image */}
          <div className='body'>
              <img src={data[5].image} alt={data[5].title} />
          </div>

          {/* About */}
          <div className='about'>
            <p>A React.js Weather App that meets PWA requirements. It is a simple app that allows the user to search any city they want to know the current weather conditions of. Being a PWA, users can also install the app and access it offline.</p>
            <div className='highlights row'>
              <div className='col center-align'>
                <h2>Highlights:</h2>
                <li>Meets all PWA requirements</li>
                <li>Use of OpenWeatherMap API</li>
                <li>Gives live weather information</li>
              </div>
              <div className='col center-align'>
                <h2>Tools Used:</h2>
                <li>React.js</li>
                <li>CSS</li>
                <li>OpenWeatherMap API</li>
                <li>React Axios</li>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='footer'>
          <a href={data[5].github} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
          <a href={data[5].demo} className='btn modal__btn' target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
      </div>
    </div>
  )
}
// End of Project 6


export {ModalOne, ModalTwo, ModalThree, ModalFour, ModalFive, ModalSix};