import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import data from '../../data/cardActividades'
import Encabezados from '../Encabezado/Encabezados'
import Card from './Card'
import '../Card/Card.css'

export default class CardActividades extends Component {
    constructor(props){
        super(props)
        this.state ={
            informacion: data.informacion,
            properties: data.properties,
            property: data.properties[1]
        }
    }

    prevProp(){
        let newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex],
        })
        console.log(newIndex);
    }

    nextProp(){
        let newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex],
        })
        console.log(newIndex);
    }


    render() {
        const {property,properties,informacion} = this.state;
        return (
            <div>
                <Encabezados titulo={informacion.titulo} info={informacion.informacion}/>
                <div className="container-slider">
                    <div className="container-buttons">
                        <button className='btn-left' onClick={()=> this.prevProp()} disabled={property.index === 0}><FontAwesomeIcon icon={['fas','chevron-left']}/></button>
                        <button className='btn-right'onClick={()=> this.nextProp()} disabled={property.index === data.properties.length-1}><FontAwesomeIcon icon ={['fas','chevron-right']}/></button>
                    </div>
                    <div className="cards-slider">
                        <div className="container-position"
                        style={{transform: `translateX(-${property.index * (44 / properties.length-5.7)}%)`}}>
                            {
                                properties.map(property =>(
                                    <Card key={property.id} property={property}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
