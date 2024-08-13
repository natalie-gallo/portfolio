import React from 'react'
import './Contact.css';
import './Title.css';
import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/github-logo.png';

function Contact() {
  return (
    <div id="contact">
      <div className='title'>
        <h1>Contact</h1>
        <hr></hr>
      </div>
      <p>Email: nataliegallo04@gmail.com</p>
      <a href="https://www.linkedin.com/in/nataliegallo04/">
        <img className="contact-logos" src={linkedinLogo} alt="linkedin" />
      </a>
      <a href="https://github.com/natalie-gallo">
        <img className="contact-logos" src={githubLogo} alt="github" />
      </a>
    </div>
  )
}

export default Contact
