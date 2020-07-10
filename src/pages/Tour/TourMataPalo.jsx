import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselTourMP from '../../Components/Carousel/CarouselTourMP'
import Formulario from '../../Components/Formularios/Formulario'

const TourMataPalo = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Tour a Mata Palo' info='Nesecito información de esto.'/>
            <CarouselTourMP/>
            <Formulario/>
        </div>
    )
}

export default TourMataPalo
