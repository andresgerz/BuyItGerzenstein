import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { FinishBuy } from './ItemDetail';

export default function Item({info}) {
  
   
  const [countItem, setCountItem] = React.useState(0);

 
  function handleChange(value) {
    setCountItem(value);
    console.log('handleChange Item');    
  }


  return (
  
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" alt="No Image" src={info.pictureUrl} />
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${info.price}</Card.Subtitle>
        <Card.Text>
          {info.description}
        </Card.Text>
      </Card.Body>
      <Link to={`/category/${info.category}`}>See {info.category}</Link>
      <Link to={`/item/${info.id}`}>See details</Link>
      <ItemCount stock={info.stock} initial={1} liftingChange={handleChange} />
      <FinishBuy product={info} counter={countItem} />
    </Card>
  )
}
