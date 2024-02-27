import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = ({ title, onNextButtonClick }) => {
  const handleNextButtonClick = () => {
    // Appeler la fonction fournie par les propriétés pour gérer le clic sur le bouton Suivant
    onNextButtonClick();
  };

  return (
    <div className="footer flex-center text-style position-fixed">
      <button className="next-button flex-center" onClick={handleNextButtonClick}>
        <span className="flex-center">
          {title}
          <FaArrowRight className="arrow-icon" />
        </span>
      </button>
    </div>
  );
};

export default Footer;
