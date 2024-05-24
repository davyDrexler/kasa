import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function AccommodationCard({ accommodation }) {
  return (
    <div className="accommodation-card">
      <Link to={`/logement/${accommodation.title}`}> 
        <img src={accommodation.cover} alt={accommodation.title} />
        <h2>{accommodation.title}</h2>
      </Link>
    </div>
  );
}

function AccommodationList({ accommodations }) {
  return (
    <div className="accommodation-list">
      {accommodations.map((accommodation) => (
        <AccommodationCard key={accommodation.id} accommodation={accommodation} />
      ))}
    </div>
  );
}

export default AccommodationList;
