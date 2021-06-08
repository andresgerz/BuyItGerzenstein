import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

export default function Item({info}) {
  
   
  const [countItem, setCountItem] = React.useState(0);

 
  function handleChange(value) {
    setCountItem(value);
      
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
      <ItemCount item={info} initial={1} liftingChange={handleChange} />
      
    </Card>
  )
}
