import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

export default function Item({info}) {
  
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
      <ItemCount stock={5} initial={1} />
      
    </Card>
  )
}
