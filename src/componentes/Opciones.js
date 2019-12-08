import React from "react";
import { Link } from "react-router-dom";

function Opciones(props) {
  return (
    <div className="col-12">
      <Link to="/Suma" className="btn btn-success m-2 col-6 btn-block mx-auto">
        Suma
      </Link>
      <Link to="/Resta" className="btn btn-info m-2 col-6 btn-block mx-auto">
        Resta
      </Link>
      <Link
        to="/Multiplicacion"
        className="btn btn-danger m-2 col-6 btn-block mx-auto"
      >
        Multiplicacion
      </Link>
      <Link
        to="/Division"
        className="btn btn-primary m-2 col-6 btn-block mx-auto"
      >
        Division
      </Link>
    </div>
  );
}

export default Opciones;
