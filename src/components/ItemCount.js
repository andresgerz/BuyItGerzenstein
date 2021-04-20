import React, { useState, useEffect } from 'react';

import './ItemCount.css';

export default function ItemCount({ stock, initial, addOn}) {

  const [counter, setCounter] = useState(initial);

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function handleIncrement() {
    
    setCounter(counter + 1);
  }

  function addOn() {

    console.table({"counter":  counter});
  }

  return (
    <div className="m-5">
      <ul>
        <li onClick={counter > initial ? handleDecrement : null}>-</li>
        <li>{counter}</li>
        <li onClick={ counter < stock ? handleIncrement : null}>+</li>
      </ul>
      <button className="btn btn-primary" onClick={counter != 0 ? addOn : null}>Agregar al carrito</button>
    </div>
  )
}