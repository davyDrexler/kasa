import React from 'react';
import fullStar from '../../assets/stars/full_star.png';
import emptyStar from '../../assets/stars/empty_star.png';

function RatingStars({ rating }) {
  const stars = [];

  // Boucle pour ajouter le nombre d'étoiles correspondant au rating
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Si l'index est inférieur au rating, ajoute une étoile pleine
      stars.push(<img key={i} src={fullStar} alt="Star" />);
    } else {
      // Sinon, ajoute une étoile vide
      stars.push(<img key={i} src={emptyStar} alt="Empty Star" />);
    }
  }

  return <div className="rating-stars">{stars}</div>;
}

export default RatingStars;
