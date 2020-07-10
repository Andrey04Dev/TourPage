import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselMataPalo from '../../Components/Carousel/CarouselMataPalo'
import Formulario from '../../Components/Formularios/Formulario'

const SurfMatapalo = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Bienvenidos al Tour de Surfing en Mata Palo' info='En esta opción contamos con Instructor de Surf bilingüe o solamente con el trasporte marítimo. Playa matapalo es una playa que está ubicada al frente de pavones, su único trasporte es marítimo lo cual para ir ahí tenemos que ir en bote, en este recorrido disfrutaremos de la briza del mar, miraremos algunos delfines, tiburones y algunas tortugas, también observaremos algunas ballenas si es la temporada. Aparte de ser un tour agradable, disfrutaremos de sus olas.'/>
            <CarouselMataPalo/>
            <Formulario/>
        </div>
    )
}

export default SurfMatapalo
