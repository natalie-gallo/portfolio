import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <hr></hr>
      <p>Email: nataliegallo04@gmail.com</p>
      <a href="https://www.linkedin.com/in/nataliegallo04/">
        <img className="contact-logos" src="linkedin-logo.png" alt="linkedin" />
      </a>
      <a href="https://github.com/natalie-gallo">
        <img className="contact-logos" src="github-logo.png" alt="github" />
      </a>
    </div>
  )
}

export default Contact
