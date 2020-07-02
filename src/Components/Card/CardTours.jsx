import React, { Component, Fragment } from "react";
import Encabezados from "../Encabezado/Encabezados";
import data from "../../data/cardTour";
import Card from "./Card";

export default class CardTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informacion: data.informacion,
      properties: data.properties
      // property: data.properties[2]
    };
  }
  // prevProp = () => {
  //   let newIndex = this.state.property.index+1;
  //   this.setState({
  //     property: data.properties[newIndex],
  //   });
  //   console.log(newIndex);
  // };

  // nextProp = () => {
  //   let newIndex = this.state.property.index-1;
  //   this.setState({
  //     property: data.properties[newIndex],
  //   });
  //   console.log(newIndex);
  // };
  
  render() {
    const { properties, informacion} = this.state;
    
    return (
      <Fragment>
          <Encabezados titulo={informacion.titulo} info={informacion.informacion}/>
        <div className="container-fluid my-5">
          <div className="row">
              {properties.map((property) => (
                <div key={property.id}  className="col-3 ">
                <Card  property={property} />
                </div>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

