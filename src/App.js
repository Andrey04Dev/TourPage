import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Contactanos from "./pages/Contactanos";
import Actividades from "./pages/Actividades";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
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
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
