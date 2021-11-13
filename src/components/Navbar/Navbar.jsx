import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const handleCloseMenu = () => setClick(false);

  const showButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true);

  useEffect(() => {
    showButton();
  });
  window.addEventListener("resize", showButton);

  return (
    <nav className='nav'>
      <div className='nav-container'>
        <Link to='/' className='nav-logo' onClick={handleCloseMenu}>
          TRVL <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleCloseMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={handleCloseMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={handleCloseMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={handleCloseMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && (
          <Link to='/sign-up'>
            <Button buttonStyle='btn--outline' type='button'>
              SIGN UP
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
