import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Yoga from '../pages/Actividades/Yoga'
import Pilates from '../pages/Actividades/Pilates'
import Masajes from '../pages/Actividades/Masajes'
import chocolateOrganico from '../pages/Actividades/chocolateOrganico'
import comidaTipica from '../pages/Actividades/comidaTipica'

const RouterActividades = () => {
    return (
        <Fragment>
            <Switch>
                <Route path='/actividades/yoga' component={Yoga}/>
                <Route path='/actividades/pilates' component={Pilates}/>
                <Route path='/actividades/masajes' component={Masajes}/>
                <Route path='/actividades/chocolate-organico' component={chocolateOrganico}/>
                <Route path='/actividades/comidas-tipicas'component={comidaTipica}/>
            </Switch>
        </Fragment>
    )
}

export default RouterActividades
