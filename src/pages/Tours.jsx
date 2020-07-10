import React from "react";
import NavbarTours from "../Components/NavBar/NavbarTours";
import RouterTours from "../routers/RouterTours";
const Tours = () => {
  return (
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-2">
          <NavbarTours/>
        </div>
        <div className='col-10'>
        <RouterTours/>
        </div>
      </div>
    </div>
  );
};

export default Tours;
