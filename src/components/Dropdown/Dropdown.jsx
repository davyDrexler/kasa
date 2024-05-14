import React, { useState } from 'react';
import expandArrowUpImg from '../../assets/dropdown/expand_up.png';
import './Dropdown.css'; 

function Dropdown({ titre, description, ClassName }) {
    const [isActive, setIsActive] = useState(false);
  
    const handleDropdownClick = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className={`dropdown ${isActive ? 'open' : ''}`}>
        <div className='label-container' onClick={handleDropdownClick}>
          <label>{titre}</label>
          {/* Utilisez une seule image pour l'icône et animez sa rotation */}
          <img className={`expand-icon ${isActive ? 'expanded' : ''}`} src={expandArrowUpImg} alt="Icône d'expansion" />
        </div>
        <div className={`description-dropdown ${ClassName} ${isActive ? 'show' : ''}`}>{description}</div>
      </div>
    );
  }
  
export default Dropdown;
