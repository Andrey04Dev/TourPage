import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RouterMain from "./routers/RouterMain";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <RouterMain/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
