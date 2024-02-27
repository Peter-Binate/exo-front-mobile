import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({ title, linkPath, onButtonClick }) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <div className="footer flex-center text-style position-fixed">
      <button className="next-button flex-center" onClick={handleClick}>
        <Link to={linkPath}>
          <span className="flex-center">
            {title}
            <FaArrowRight className="arrow-icon" />
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Footer;
