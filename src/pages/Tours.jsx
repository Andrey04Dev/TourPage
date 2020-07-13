import React from "react";
import NavbarTours from "../Components/NavBar/NavbarTours";
import RouterTours from "../routers/RouterTours";
const Tours = () => {
  return (
    <div className="container-fluid">
      <div className="row">
          <NavbarTours/>
        <RouterTours/>
      </div>
    </div>
  );
};

export default Tours;
