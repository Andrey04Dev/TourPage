import React, { Component, Fragment } from "react";
import Video from "../Components/Video/Video";
import Multi from "../assets/videos/Pavones.mp4";
import CardTours from "../Components/Card/CardTours";
import CardActividades from "../Components/Card/CardActividades";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Video src={Multi} type="video/mp4" />
        <CardTours/>
        <CardActividades/>
      </Fragment>
    );
  }
}

export default Home;
