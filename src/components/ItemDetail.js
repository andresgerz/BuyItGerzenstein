import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContextConsumer, CartContextProvider }  from '../context/CartContext';

import ItemCount from './ItemCount';

const FinishBuy = (add) => {
  <CartContextConsumer>
    <Link to={'/cart'} onClick={add}>Finish my buy</Link>
  </CartContextConsumer>
}

export default function ItemDetail({ itemDetails }) {
  
  const { addItem, removeItem, clear } = CartContextProvider(); 
  
  const [countItem, setCountItem] = useState(0);

 
  const addItem2 = () => {
    console.log('add item');
  }


  return (
    <CartContextConsumer>{       
      itemDetails === undefined                               ? 
      
      <h2 className="text-danger">This ID has not exit </h2>  :
      
      <div>
        <Card className="m-auto" style={{ width: '200px' }}>
          <Card.Img variant="top" alt="No Image" src={itemDetails.pictureUrl} />
          <Card.Body>
            <Card.Title>{itemDetails.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">$ {itemDetails.price}</Card.Subtitle>
            <Card.Text>
              {itemDetails.description}
            </Card.Text>
          </Card.Body>
        </Card>

        { countItem != 0                        ? 
          <FinishBuy  add={addItem} />      :
          <ItemCount stock={5} initial={1} liftingChange={addItem2} />
        }
      </div>
    }</CartContextConsumer>
    )
}
