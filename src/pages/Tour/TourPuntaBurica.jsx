import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselPuntaBurica from '../../Components/Carousel/CarouselPuntaBurica'
import Formulario from '../../Components/Formularios/Formulario'

const TourPuntaBurica = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Tour a Punta Burica' info='Necesito Información de esto tambíen'/>
            <CarouselPuntaBurica/>
            <Formulario/>
        </div>
    )
}

export default TourPuntaBurica
