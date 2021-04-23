import React from 'react'
import { Card } from 'react-bootstrap';

export default function Item({info}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" alt="No Image" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {info.price}</Card.Subtitle>
          <Card.Text>
            {info.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
