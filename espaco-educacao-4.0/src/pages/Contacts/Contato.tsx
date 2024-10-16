import React from 'react';
import './Contato.css';
import facebookIcon from '../../assets/img/facebook.png'; 
import instagramIcon from '../../assets/img/instagram.png';
import twitterIcon from '../../assets/img/facebook.png';

const Contact = () => {
  return (
    <section className="contact-section">      
      <div className='contact-area'>      
        <h2>Contato</h2>
        <div className="social-media">
          <h3>Siga-nos nas redes sociais:</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a><br />
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a><br />
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a><br />
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
        
        <p>Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco!</p>
        <div><form className="contact-form">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="contact-button-page">Enviar</button>
          </form> 
            </div>        
        </div>

      <div className="location-section">
        <h3>Endereço</h3>
        <p>Rua Exemplo, 123 - Bairro, Cidade - Estado, 00000-000</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.357900924102!2d-122.084!3d37.42199899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba4f4e6b7c7d%3A0x800e0c11a6b0e4b6!2sGoogleplex!5e0!3m2!1spt-BR!2sbr!4v1614193908943!5m2!1spt-BR!2sbr" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
