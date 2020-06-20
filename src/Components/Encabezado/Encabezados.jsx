import React from "react";
import PropTypes from "prop-types";

const Encabezados = props => {
  const { titulo, info } = props;
  return (
    <div className="container text-center my-5">
      <h2>{titulo}</h2>
      <p>{info}</p>
    </div>
  );
};
Encabezados.propTypes = {
  props: PropTypes.object.isRequired,
};
export default Encabezados;
