import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Resultado extends Component {
  render() {
    return (
      <div
        className="jumbotron text-center text-white mt-5"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <p>
          Has acertado {this.props.acertadas} y has fallado{" "}
          {this.props.falladas}
        </p>
        <Link to="/Inicio" className="btn btn-success">
          Volver al Inicio
        </Link>
      </div>
    );
  }
}
