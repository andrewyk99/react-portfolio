import React from 'react'
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z38prlq', 'template_ahvcu6r', form.current, 'WdQ2s_IHt9BpkGaBn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='contact__me'>Contact Me</h2>
      <h5 className='email__at'>Email me at <p className='email'>andrewyk99@hotmail.com</p></h5>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary msg-button'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact