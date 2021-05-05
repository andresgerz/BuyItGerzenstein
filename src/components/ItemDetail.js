import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount';

const FinishBuy = () => <Link to={'/cart'}>Finish my buy</Link>;

export default function ItemDetail({ itemDetails }) {
  
  const [countItem, setCountItem] = useState(0);

  function handleChange(value) {
    setCountItem(value);
    console.log(countItem);
  }

  return (
    <>{       
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

        { countItem != 0  ? 
          <FinishBuy />  : 
          <ItemCount stock={5} initial={1} liftingChange={handleChange} />
        }
      </div>
    }</>
    )
}
