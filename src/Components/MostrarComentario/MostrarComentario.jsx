import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./MostrarComentrario.scss";

const MostrarComentario = (props) => {
  const { imagen, nombre, comentario,handleFormulario } = props;
  return (
    <Fragment>
      <li className="media">
        <img
          src={imagen}
          alt="Media comentario"
          className="mr-3 img-comentario"
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{nombre}</h5>
          <div className="container text-justify">{comentario}</div>
          {/* <button type="submit" onClick={handleFormulario}>Responder</button> */}
        </div>
      </li>
    </Fragment>
  );
};
MostrarComentario.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  handleFormulario: PropTypes.func.isRequired
};
export default MostrarComentario;
