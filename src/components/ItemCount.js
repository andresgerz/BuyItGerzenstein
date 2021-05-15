import React, { useState, useEffect } from 'react';

import './ItemCount.css';
import { Button } from 'react-bootstrap';

export default function ItemCount({ stock, initial, liftingChange}) {

  const [counter, setCounter] = useState(initial);

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function handleIncrement() {    
    setCounter(counter + 1);
  }

  function addOn() {
    liftingChange(counter);
    console.table({"counter": counter});

  }

  return (
    <div className="counter">
      <ul className="mb-3 mt-3">
        <li onClick={counter > initial ? handleDecrement : null}>
          <Button>-</Button>
        </li>
        <li>{counter}</li>
        <li onClick={ counter < stock ? handleIncrement : null}>
          <Button>+</Button>
          
        </li>
      </ul>
      { counter === stock && <div class="alert alert-warning" role="alert">
        There is not more in stock!
      </div>}
      <Button className="btn btn-success mb-3" onClick={counter != 0 ? addOn : null}>Agregar al carrito</Button>
    </div>
  )
}