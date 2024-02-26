import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="footer flex-center position-absolute">
            <button className='next-button flex-center'>
                <span className="flex-center">Suivant <FaArrowRight className="arrow-icon"/></span>
            </button>
        </div>
    </>
  )
}

export default Footer