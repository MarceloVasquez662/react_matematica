import React from "react";
import { Link } from "react-router-dom";

function NF() {
  return (
    <div className="text-center">
      <h1 className="p-3">Pagina no encontrada</h1>
      <Link to="/" className="btn btn-danger">
        Volver a Inicio
      </Link>
    </div>
  );
}

export default NF;
