import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../../datas/logement.json';

function LogementDetail() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const foundLogement = logementsData.find(logement => logement.id === id);
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
    <div>
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <p>Location: {logement.location}</p>
      <p>Host: {logement.host.name}</p>
      <p>Rating: {logement.rating}</p>
      <h3>Equipments:</h3>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Tags:</h3>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogementDetail;
