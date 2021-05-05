import React from 'react'
import { Card } from 'react-bootstrap';

export default function ItemDetail({ itemDetails }) {

  return (
    <>{       
      
      itemDetails === undefined                               ? 

      <h2 className="text-danger">This ID has not exit </h2>  :

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
    }</>
    )
}
