import React from "react";
import NavbarVertical from "../Components/NavBar/NavbarVertical";
import { Switch, Route} from "react-router-dom";
import CabalgataSanta from "./Tour/CabalgataSanta";
import CabalgataBosque from "./Tour/CabalgataBosque";
import CabalgataPlaya from './Tour/CabalgataPlaya';
const Tours = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <NavbarVertical/>
        </div>
        <Switch>
          <Route path='/tours/cabalgata-santaClara'>
            <div className="col-10">
              <CabalgataSanta />
            </div>
          </Route>
          <Route path='/tours/cabalgata-bosque'>
            <div className="col-10">
              <CabalgataBosque />
            </div>
          </Route>
          <Route path='/tours/cabalgata-playa'>
            <div className="col-10">
              <CabalgataPlaya />
            </div>
          </Route>
          <Route path='/tours'>
            <div className="col-10">
              <h3>
                Necesito información que queiren agregar aqui en esta
                parte.Puede ser algo acerca de todos los tours.
              </h3>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Tours;
