import React from 'react';
import parceiro1 from '../assets/img/logo.png';
import parceiro2 from '../assets/img/logo.png';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>Contatos</h2>
        <p>Email: contato@espacoeducacao40.com</p>
        <p>Telefone: (21) 98765-4321</p>
        <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade/Estado</p>
      </div>
      <div className="partners">
        <h2>Parceiros</h2>
        <div className="partner-list">
          <a href="https://link-para-parceiro1.com" target="_blank" rel="noopener noreferrer">
            <img src={parceiro1} alt="Parceiro 1" />
          </a>
          <a href="https://link-para-parceiro2.com" target="_blank" rel="noopener noreferrer">
            <img src={parceiro2} alt="Parceiro 2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
