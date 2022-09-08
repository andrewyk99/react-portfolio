import React from 'react';
import './about.css';
import ME from '../../assets/images/about_me.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderActive} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Certified</h5>
              <small>Web Developer Boot Camp at UT Austin</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Hello there! I am a fullstack web developer, recently certified by the University of Texas at Austin's coding boot camp.
            I have worked on and completed more than 30 projects and three group projects that involved front end, backend, and fullstack applications.
            I developed skills increating responsive web design, JavaScript, React, and backend databases such as MongoDB and MySQL.
            Known to be organized and detail oriented, focusing on developing applications that give a consistent user experience. My aim is to create
            purposeful applications with features the user expects, as well as user friendly details that create a more fluid experience.
          </p>

          <a href='#contact' class='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About