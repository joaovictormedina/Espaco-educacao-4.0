import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const events = [
    'DBOJ4r4xi4E',
    'DBEBLw3xmml',
    'DAgY4S2uZA4',
    'DAUJWUUSqMe',
    'C_4Gvasyi8F',
    'C9AHCFpxjnX',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  return (
    <section className="events-section">
      <h2>Nossos Eventos</h2>
      <div className="events-container">
        <div
          className="events-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div className="event" key={index}>
              <iframe
                src={`https://www.instagram.com/p/${event}/embed`}
                width="400"
                height="500"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title={`Postagem do Instagram ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={prevEvent}>
          &lt;
        </button>
        <button className="next-button" onClick={nextEvent}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Events;
