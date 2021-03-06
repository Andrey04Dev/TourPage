import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Card.scss";

const Card = ({ property }) => {

  const { index, src, titulo, info, url } = property;
  return (
        <div id={`card-${index}`} className="card">
          <img src={src} alt="Card" className='card-img-top' />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{info}</p>
            <NavLink to={url}  className="btn btn-primary" onClick={()=> window.scrollTo(0, 0)}>
              Leer mas....
            </NavLink>
          </div>
        </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};
export default Card;
