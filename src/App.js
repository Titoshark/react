import React, { Component } from "react";
import "./App.css";

//Components
import Carrito from "./components/carrito/carrito";
import ListaPizzas from "./components/listaPizzas/ListaPizzas";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articulos: 0,
      // pizzas: []
    };
  }

  //AÑADIR ARTICULOS
  addItem = () => {
    //BUSCAR FORMA DE MERJORAR ESTA EXPRESION ----------
    this.setState({ articulos: this.state.articulos + 1 });

  };

  render() {
    return (
      <div className="App">
        <Carrito articulos={this.state.articulos} />
        <h3>Todos nuestros ingredientes son veganos (incluso la carne)</h3>
        {/* <button onClick={this.addItem}>PRUEBA SUMAR ITEM</button> */}
        <div className="container">
            <ListaPizzas add = {this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;
