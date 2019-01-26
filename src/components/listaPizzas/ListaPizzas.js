import React from 'react';
import pizzas from '../../data/pizzas.json';
import Pizzas from '../pizzas/Pizzas';

const ListaPizzas = (props) => {

  const { add } = props;

    const pizzasMapped = pizzas.map( (pizza) => <Pizzas key= {pizza.id} id = {pizza.id} nombre={pizza.nombre} ingredientes={pizza.ingredientes} precio={pizza.precio} foto={pizza.foto} add={add}/>)
    // console.log(pizzasMapped);


    return (
      <div className="row">
        {pizzasMapped}
      </div>
    )

}

export default ListaPizzas
