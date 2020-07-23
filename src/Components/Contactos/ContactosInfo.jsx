import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactosInfo = () => {
  return (
        <div className="col-sm-6">
          <h3 className="text-center"> Información Importarte</h3>
          <div className="text-left">
            <p>
              <FontAwesomeIcon icon={["fas", "phone-alt"]} className="mr-3" />
              +506 8748-9868
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "phone-alt"]} className="mr-3" />
              +506 8748-9868
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "clock"]} className="mr-3" /> 8:00
              a.m a 4:00 p.m{" "}
            </p>
            <p>
              <FontAwesomeIcon
                icon={["fas", "map-marker-alt"]}
                className="mr-3"
              />
              Rio Claro, Pavones
            </p>
          </div>
          <h3 className="text-warning">
            Pueden ingresar mas información aqui si ustedes lo desean. Recuerden
            que pueden hacer cualquier cambio acá.
          </h3>
        </div>
  );
};

export default ContactosInfo;
