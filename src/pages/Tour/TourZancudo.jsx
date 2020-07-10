import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselZancudo from '../../Components/Carousel/CarouselZancudo'
import Formulario from '../../Components/Formularios/Formulario'

const TourZancudo = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Tour a Zancudo' info='Necesito información de este tour'/>
            <CarouselZancudo/>
            <Formulario/>
        </div>
    )
}

export default TourZancudo
