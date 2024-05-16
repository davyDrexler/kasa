import React from 'react';
import './BackgroundRectangle.css'; // Importez le fichier CSS

class BackgroundRectangle extends React.Component {
  render() {
    const { imageUrl, text } = this.props;

    return (
      <div className="container">
        <img src={imageUrl} alt="img" className="image" />
        <div className="overlay">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default BackgroundRectangle;
