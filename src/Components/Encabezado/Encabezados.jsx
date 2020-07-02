import React from "react";
import PropTypes from 'prop-types'


const Encabezados = props => {
  const { titulo, info } = props;
  return (
    <div className="container my-3">
      <h2 className='text-center mb-3'>{titulo}</h2>
      <p className='text-justify'>{info}</p>
    </div>
  );
};

Encabezados.propTypes = {
  titulo: PropTypes.string.isRequired,
  info:PropTypes.string.isRequired
};
export default Encabezados;
