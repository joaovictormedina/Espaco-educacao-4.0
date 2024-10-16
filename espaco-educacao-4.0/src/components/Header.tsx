import logo from '../assets/img/logo.png';
import facebookIcon from '../assets/img/facebook.png';
import instagramIcon from '../assets/img/instagram.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="#">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="header-actions">
          <a href="#contact" className="contact-button">CONTATO</a>
          <div className="search-container">
            <input type="text" placeholder="BUSCAR..." className="search-input" />
          </div>
          <div className="social-media">
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
        Metodologia Inovadora <br />ao 
        Ensinar.
      </div>
    </header>
  );
};

export default Header;
