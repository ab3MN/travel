import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Footer.css";
import * as fi from "../../db/footerItems";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='footer__container'>
      <article className='footer__subscription'>
        <h5 className='footer__title'>
          Join the Adventure newsletter to receive our best vacation deals
        </h5>{" "}
        <p className='footer__text'>You can unsubscribe at any time.</p>
        <form className='footer__form' onClick={handleSubmit}>
          <input
            className='footer__input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline' type='Submit'>
            Subscribe
          </Button>
        </form>
      </article>
      <article className='footer__links'>
        <div className='footer__links--wrapper'>
          <ul className='footer__link--list'>
            <h2>About Us</h2>
            {fi.about.map((el, i) => (
              <li key={i}>
                <Link to={"/" || `/${el.path}`}>{el.name}</Link>
              </li>
            ))}
          </ul>
          <ul className='footer__link--list'>
            <h2>Contact Us</h2>{" "}
            {fi.contact.map((el, i) => (
              <li key={i}>
                <Link to={"/" || `/${el.path}`}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__links--wrapper'>
          <ul className='footer__link--list'>
            <h2>Videos</h2>
            {fi.videos.map((el, i) => (
              <li key={i}>
                <Link to={"/" || `/${el.path}`}>{el.name}</Link>
              </li>
            ))}
          </ul>
          <ul className='footer__link--list'>
            <h2>Social Media</h2>
            {fi.social.map((el, i) => (
              <li key={i}>
                <Link to={`//www.${el.path}.com`} target='_blank'>
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <article className='social__media'>
        <div className='social__media--wrap'>
          <div className='footer__logo'>
            <Link to='/' className='social__logo'>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website__rights'>TRVL © 2020</small>
          <div className='social__icons'>
            <Link
              className='social__icon--link facebook'
              to='//www.facebook.com'
              target='_blank'
              aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social__icon--link instagram'
              to='//www.instagram.com'
              target='_blank'
              aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social__icon--link youtube'
              to='//www.youtube.com'
              target='_blank'
              aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social__icon--link twitter'
              to='//www.twitter.com'
              target='_blank'
              aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social__icon--link twitter'
              to='//www.linkedin.com'
              target='_blank'
              aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
