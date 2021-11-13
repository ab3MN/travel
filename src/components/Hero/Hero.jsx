import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero-container'>
      <video autoPlay loop muted className='hero-video'>
        <source src='/videos/video-2.mp4' type='video/mp4' />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/sign-up'>
          <Button
            type='button'
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
          </Button>{" "}
        </Link>
        <Link to='//www.youtube.com/watch?v=7lvXbfNBIQg' target='_blank'>
          <Button
            type='button'
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
