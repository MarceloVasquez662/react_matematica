import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./Inicio";
import NF from "./NF";
import Suma from "./componentes/Suma";
import Resta from "./componentes/Resta";
import Division from "./componentes/Division";
import Multiplicacion from "./componentes/Multiplicacion";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Suma" component={Suma} />
          <Route exact path="/Resta" component={Resta} />
          <Route exact path="/Multiplicacion" component={Multiplicacion} />
          <Route exact path="/Division" component={Division} />
          <Route component={NF} />
        </Switch>
      </Router>
    );
  }
}
