import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function linkvideo(){
  window.open("https://www.youtube.com/watch?v=2YR7XFHQ47w");


}

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Cultive Pensamentos Bons !</h1>
      <p>Milhares de pessoas já mudaram suas vidas</p>
      <div className='hero-btns'>


        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Inscreva-se
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={linkvideo}
        >
          ASSISTA O TRAILER <i className='far fa-play-circle' />
               
  
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
