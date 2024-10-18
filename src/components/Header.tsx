import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import facebookIcon from '../assets/img/facebook.png';
import instagramIcon from '../assets/img/instagram.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`header-actions ${isMenuOpen ? '' : 'hidden'}`}>
    <a href="/login" className="login-button">LOGIN</a>
    <a href="/contato" className="contact-button">CONTATO</a>
    <div className="search-container">
        <input type="text" placeholder="BUSCAR..." className="search-input" />
    </div>
    <div className="social-medias">
        <a href="https://www.facebook.com/espacoeducacao4" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/espacoeducacao4.0/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
    </div>
</div>
      </div>
      <div className="metodologia">
        Metodologia Inovadora <br />
        ao Ensinar.
      </div>
    </header>
  );
};

export default Header;
