import React, { Component } from "react";
import Opciones from "./componentes/Opciones";
import Banner from "./componentes/Banner";

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
