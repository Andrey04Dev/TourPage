import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import Contactanos from '../pages/Contactanos'
import Actividades from '../pages/Actividades'

const RouterMain = () => {
    return (
        <div>
            <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/tours"component={Tours}/>
        <Route path="/contactanos"component={Contactanos}/>
        <Route path="/actividades"component={Actividades}/>
      </Switch>
        </div>
    )
}

export default RouterMain
