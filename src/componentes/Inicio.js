import React, { Component } from "react";
import Opciones from "./Opciones";
import Banner from "./Banner";

export default class Inicio extends Component {
  render() {
    return (
      <div>
        <Banner subtitulo="Selecciona una de las opciones para practicar cualquier operacion" />
        <Opciones />
      </div>
    );
  }
}
