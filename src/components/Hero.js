import React from 'react';
import './Hero.css';
import papernote from '../images/torn-piece-of-paper.webp';

function Hero() {
  return (
    <div id="home" className='hero-container'>
        <img id="note" src={papernote} alt='torn piece of paper'/>
        <h1 id='note-text-centered'>Nice to meet you! Call me Natalie</h1>
    </div>
  )
}

export default Hero
