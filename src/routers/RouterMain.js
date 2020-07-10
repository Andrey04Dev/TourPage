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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tours">
          <Tours />
        </Route>
        <Route path="/contactanos">
          <Contactanos />
        </Route>
        <Route path="/actividades">
          <Actividades />
        </Route>
      </Switch>
        </div>
    )
}

export default RouterMain
