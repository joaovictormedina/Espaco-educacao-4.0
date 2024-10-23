import React from 'react';
import './Contato.css';
import facebookIcon from '../../assets/img/facebook.png';
import instagramIcon from '../../assets/img/instagram.png';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-area">
        <h2>Contatos</h2>
        <div className="social-media">
          <h3>Siga-nos nas redes sociais:</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/espacoeducacao4"
              target="_blank"
              rel="noopener noreferrer"
              title="Visite nosso Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
              <text>espacoeducacao4</text>
            </a>
            <a
              href="https://www.instagram.com/espacoeducacao4.0/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visite nosso Instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
              <text>espacoeducacao4.0</text>
            </a>
            <br />
          </div>
        </div>

        <p>
          Se você tiver alguma dúvida ou precisar de mais informações, entre em
          contato conosco!
        </p>
        <div>
          <form className="contact-form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className="contact-button-page">
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="location-section">
        <h3>Endereço</h3>
        <p>
          Partage Shopping - Av. Pres. Kennedy, 425 - Centro, São Gonçalo - RJ,
          24445-000, Brasil
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4987664332166!2d-43.048892624692265!3d-22.82102947931551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999ae3eca18d19%3A0x8612229f44828a46!2zUGFydGFnZSBTw6NvIEdvbsOnYWxv!5e0!3m2!1spt-BR!2sbr!4v1729633189544!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
