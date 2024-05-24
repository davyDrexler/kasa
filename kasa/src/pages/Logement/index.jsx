import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../../datas/logement.json';
import Dropdown from '../../components/Dropdown/Dropdown';
import './logement.css';
import Carousel from '../../components/carousel/Carousel.jsx';
import RatingStars from '../../components/rating/RatingStars.jsx';


function LogementDetail() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const foundLogement = logementsData.find(logement => logement.title === id);
    setLogement(foundLogement);
    setLoading(false); // Met à jour l'état du chargement une fois la requête fini
  }, [id]); // Déclencher l'effet à chaque changement de l'ID dans l'URL

  useEffect(() => {
    // Vérifier si aucun logement correspondant n'a été trouvé et envoie vers la page d'erreur
    if (!loading && !logement) {
      navigate('/erreur');
    }
  }, [loading, logement, navigate]);

  if (loading) {
    return <div>Chargement des informations</div>;
  }
  
  if (!logement) {
    return null;
  }

  return (
    <div className='pages'>
      <div className='image-container'>
        <Carousel images={logement.pictures} />
      </div>
      <div className='infowner'>
        <div className='info'>
          <h2>{logement.title}</h2>
          <h3>Location: {logement.location}</h3>
          <div className='tag'>
            {logement.tags.map((tag, index) => (
              <h4 key={index}>{tag}</h4>
            ))}
          </div>
        </div>
        <div className='owner'>
          <div className='host'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Host" />
          </div>
          <RatingStars rating={parseInt(logement.rating)} />
        </div>
      </div>
      <div className='info-dropdown'>
        <div className='description'>
          <div className='all-dropdown'>
            <Dropdown titre="Description" description={logement.description} />
          </div>
        </div>
        <div className='equipement'>
          <div className='all-dropdown'>
            <Dropdown titre="Équipements" description={logement.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
            ))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogementDetail;
