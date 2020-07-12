import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import CabalgataSanta from '../pages/Tour/CabalgataSanta'
import CabalgataBosque from '../pages/Tour/CabalgataBosque'
import CabalgataPlaya from '../pages/Tour/CabalgataPlaya'
import PescaArtesanal from '../pages/Tour/PescaArtesanal'
import PescaDeportiva from '../pages/Tour/PescaDeportiva'
import SurfInstructiva from '../pages/Tour/SurfInstructiva'
import SurfMatapalo from '../pages/Tour/SurfMatapalo'
import TourMataPalo from '../pages/Tour/TourMataPalo'
import TourPuntaBurica from '../pages/Tour/TourPuntaBurica'
import TourZancudo from '../pages/Tour/TourZancudo'

const RouterTours = () => {
    return (
        <Fragment>
            <Switch>
          <Route path='/tours/cabalgata-santaClara'component={CabalgataSanta}/>
          <Route path='/tours/cabalgata-bosque'component={CabalgataBosque}/>
          <Route path='/tours/cabalgata-playa'component={CabalgataPlaya}/>
          <Route path='/tours/pesca-artesanal'component={PescaArtesanal}/>
          <Route path='/tours/pesca-deportiva'component={PescaDeportiva}/>
          <Route path='/tours/surfing-instructoria'component={SurfInstructiva}/>
          <Route path='/tours/surfing-matapalo'component={SurfMatapalo}/>
          <Route path='/tours/tour-bote-mataPalo'component={TourMataPalo}/>
          <Route path='/tours/tour-bote-puntaBurica'component={TourPuntaBurica}/>
          <Route path='/tours/tour-bote-zancudo'component={TourZancudo}/>
          <Route path='/tours'>
              <h3>
                Necesito información que queiren agregar aqui en esta
                parte.Puede ser algo acerca de todos los tours.
              </h3>
          </Route>
        </Switch>
        </Fragment>
    )
}

export default RouterTours
