import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Encabezados from "../Encabezado/Encabezados";
import data from "../../data/cardTour";
import Card from "./Card";

export default class CardTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informacion: data.informacion,
      properties: data.properties,
      property: data.properties[2]
    };
  }
  prevProp = () => {
    let newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex],
    });
    console.log(newIndex);
  };

  nextProp = () => {
    let newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex],
    });
    console.log(newIndex);
  };
  
  render() {
    const { properties, property, informacion} = this.state;
    
    return (
      <Fragment>
          <Encabezados titulo={informacion.titulo} info={informacion.informacion}/>
        <div className="container-slider  my-5">
          <div className="container-buttons">
            <button
              className="btn-left"
              onClick={() => this.prevProp()}
              disabled={property.index === data.properties.length - 1}
            >
              <FontAwesomeIcon icon={["fas", "chevron-left"]} />
            </button>
            <button
              className="btn-right"
              onClick={() => this.nextProp()}
              disabled={property.index === 0}
            >
              <FontAwesomeIcon icon={["fas", "chevron-right"]} />
            </button>
          </div>
          <div className="cards-slider">
            <div
              className="container-position"
              style={{
                transform: `translateX(-${
                  property.index * (44 / properties.length)
                }%)`
              }}
            >
              {properties.map((property) => (
                <Card key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

