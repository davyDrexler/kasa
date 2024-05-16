import React from 'react';
import BackgroundRectangle from '../../components/TitleRectangle';
import backgroundImage from '../../assets/titreRectangle/home.jpg';
import AccommodationList from '../../components/cardLogement/index.jsx';
import accommodationsData from '../../datas/logement.json';

function Home() {
    return (
        <div>
            <BackgroundRectangle
            imageUrl={backgroundImage}
            text="Chez vous, partout et ailleurs"
            />
            <AccommodationList accommodations={accommodationsData} />
        </div>
    );
}

export default Home;
