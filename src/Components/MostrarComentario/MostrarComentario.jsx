import React from "react";
import PropTypes from "prop-types";
import "./MostrarComentrario.scss";
import $ from "jquery";
import IconsShow from "../IconsShow/IconsShow";

const appear = () => {
  if ($(`.icons-0`).click()) {
    $(`.media-body .container-icons .icons-0`).css('display','block')
  }
};
const appear1 = () => {
  if ($(`.icons-1`).click()) {
    $(`.media-body .container-icons .icons-1`).css('display','block')
  }
};
const appear2 = () => {
  if ($(`.icons-2`).click()) {
    $(`.media-body .container-icons .icons-2`).css('display','block')
  }
};
const appear3 = () => {
  if ($(`.icons-3`).click()) {
    $(`.media-body .container-icons .icons-3`).css('display','block')
  }
};
const appear4 = () => {
  if ($(`.icons-4`).click()) {
    $(`.media-body .container-icons .icons-4`).css('display','block')
  }
};
const appear5 = () => {
  if ($(`.icons-5`).click()) {
    $(`.media-body .container-icons .icons-5`).css('display','block')
  }
};
const MostrarComentario = (props) => {
  const { imagen, nombre, comentario } = props;
  return (
    <div className='container-fluid'>
      <li className="media">
        <img
          src={imagen}
          alt="Media comentario"
          className="mr-3 img-comentario"
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{nombre}</h5>
          <div className="container text-justify">{comentario}</div>
          <IconsShow/>
          <div className="container-left">
            <button className="btn-comment">
              Reaccionar
              <span className="icons-btn">
                <i className='icons-0' onClick={appear}/>
                <i className='icons-1' onClick={appear1}/>
                <i className='icons-2' onClick={appear2}/>
                <i className='icons-3' onClick={appear3}/>
                <i className='icons-4' onClick={appear4}/>
                <i className='icons-5' onClick={appear5}/>
              </span>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};
MostrarComentario.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
};
export default MostrarComentario;
