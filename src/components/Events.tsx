import evento1 from '../assets/img/logo.png';
import evento2 from '../assets/img/logo.png';
import evento3 from '../assets/img/logo.png';

const Events = () => {
  return (
    <section className="events-section">
      <h2>Nossos Eventos</h2>
      <div className="events-container">
        <div className="event">
          <a href="https://www.instagram.com/p/evento1" target="_blank" rel="noopener noreferrer">
            <img src={evento1} alt="Evento 1" />
          </a>
        </div>
        <div className="event">
          <a href="https://www.instagram.com/p/evento2" target="_blank" rel="noopener noreferrer">
            <img src={evento2} alt="Evento 2" />
          </a>
        </div>
        <div className="event">
          <a href="https://www.instagram.com/p/evento3" target="_blank" rel="noopener noreferrer">
            <img src={evento3} alt="Evento 3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
