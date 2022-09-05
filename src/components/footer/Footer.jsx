import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANDREW KIM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/andrewyk99" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/andrew-kim-40b25722b/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andrew Kim. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer