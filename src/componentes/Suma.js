import React, { Component } from "react";
import swal from "sweetalert"
import Banner from "./Banner";
import Resultado from "./Resultado";
import { Link } from "react-router-dom";

export default class Suma extends Component {
  resultadoRef = React.createRef();
  state = {
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    intentos: 0,
    acertadas: 0,
    falladas: 0
  };

  desordenarNumeros = () => {
    this.setState({
      numeros: this.state.numeros.sort(function () {
        return Math.random() - 0.5;
      })
    });
    console.log(this.state.numeros);
  };

  revisarResultado = e => {
    e.preventDefault();
    let resultado = this.state.numeros[0] + this.state.numeros[1];
    if (resultado == this.resultadoRef.current.value) {
      this.setState({ acertadas: this.state.acertadas + 1 });
      swal(
        {
          title: "Excelente",
          text: "Respuesta correcta!",
          icon: "success",
          button: "Aceptar",
          timer: "5000"
        }
      )
    } else {
      this.setState({ falladas: this.state.falladas + 1 });
      swal(
        {
          title: "Has fallado",
          text: "La proxima ira mejor",
          icon: "error",
          button: "Aceptar",
          timer: "5000"
        }
      )
    }
    this.setState({ intentos: this.state.intentos + 1 });
    document.getElementById("numero").value = "";
    this.desordenarNumeros();
  };

  render() {
    return (
      <div>
        <Banner subtitulo="Prueba las Sumas" />
        <form onSubmit={this.revisarResultado}>
          <div className="form-group">
            <input
              className="form-control col-4 mx-auto"
              disabled
              value={this.state.numeros[0]}
            />
          </div>
          <div className="text-center mb-3">
            <h2>+</h2>
          </div>
          <div className="form-group">
            <input
              className="form-control col-4 mx-auto"
              disabled
              value={this.state.numeros[1]}
            />
          </div>
          <div className="text-center mb-3">
            <h2>=</h2>
          </div>
          <div className="form-group">
            <input
              className="form-control col-4 mx-auto"
              required
              type="number"
              ref={this.resultadoRef}
              id="numero"
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-success col-4" id="enviar">
              Revisar
            </button>
          </div>
        </form>
        <Link to="/" className="btn btn-info m-2 col-4 btn-block mx-auto">
          Inicio
        </Link>
        <div className="text-center">
          <p>Intentos {this.state.intentos}/5</p>
        </div>
        {this.state.intentos == 5 &&
          ((document.getElementById("numero").disabled = true),
            (document.getElementById("enviar").disabled = true),
            (
              <Link
                to="/Resultado"
                component={Resultado}
                acertadas={this.state.acertadas}
                falladas={this.state.falladas}
              ></Link>
            ))}
      </div>
    );
  }
}
