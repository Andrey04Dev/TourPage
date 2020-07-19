import React from 'react'
import NavBarActvidades from '../Components/NavBar/NavBarActvidades'
import RouterActividades from '../routers/RouterActividades'

const Actividades = () => {
    return (
        <div>
            <NavBarActvidades/>
            <RouterActividades/>
            <p>Talvez aqui podria ir un resumen de la actividades.</p>
        </div>
    )
}

export default Actividades