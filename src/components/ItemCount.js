import React, { useState, useEffect } from 'react';

import './ItemCount.css';
import { Button } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import { FinishBuy } from './ItemDetail';

export default function ItemCount({ item, liftingChange}) {

  const { counterItem } = React.useContext(CartContext); 
  const [counter, setCounter] = useState(counterItem(item.id));
  const [addCart, setAddCart] = useState(false);

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function handleIncrement() {    
    setCounter(counter + 1);
  }

  function addOn() {
    
    liftingChange(counter);
    setAddCart(true);
    console.table({"counter": counter});

  }

  return (
    <div className="counter">
      { item.stock === 0 ? 

        <div className="alert alert-danger" role="alert">
        Attention! There is no {item.title} in stock!
        </div>               
                         :
        <div>
          <ul className="mb-3 mt-3">
            <li onClick={counter > 0 ? handleDecrement : null}>
              <Button>-</Button>
            </li>
            <li>{counter}</li>
            <li onClick={ counter < item.stock + 1 ? handleIncrement : null}>
              <Button>+</Button>
              
            </li>
          </ul>
          { counter > item.stock ? <div className="alert alert-warning" role="alert">
              Attention! There is not more in stock!
              </div>
              :
              <div>
                <Button className="btn btn-success mb-3" onClick={counter != 0 ? addOn : null}>
                  Agregar al carrito
                </Button>
                 { addCart && <FinishBuy product={item} counter={counter}/>}
              </div>
          }
        </div>
                                
      }
    </div>
  )
}