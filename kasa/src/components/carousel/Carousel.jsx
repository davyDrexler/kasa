import React, { useState } from 'react';
import Next from '../../assets/carousel/next.png';
import Previous from '../../assets/carousel/previous.png';
import './carousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img className="carousel-button next" src={Next} alt="Next button" onClick={goToPrevSlide}/>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <img className="carousel-button previous" src={Previous} alt="Previous button" onClick={goToNextSlide}/>
    </div>
  );
}

export default Carousel;
