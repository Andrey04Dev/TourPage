import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = props => {
  return (
    <header className="slider-container">
        <div id="slide-0" className="slide fade-in">
            <img className='slide-img'src={props.src} alt={props.alt} />
        </div>
        <div className="arrow-wrapper">
          <button id="arrow-prev" className="arorw-prev" onClick={props.prevImagen}disabled ={props.disable1}>
            <FontAwesomeIcon icon={["fas", "chevron-left"]} />
          </button>
          <button id="arrow-next" className="arorw-next" onClick={props.nextImagen} disabled={props.disable2}>
            <FontAwesomeIcon icon={["fas", "chevron-right"]} />
          </button>
        </div>
      </header>
  );
};

Carousel.propTypes = {
    src: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
    prevImagen:PropTypes.func.isRequired,
    nextImagen:PropTypes.func.isRequired,
    disable1:PropTypes.bool.isRequired,
    disable2:PropTypes.bool.isRequired
};
export default Carousel;
