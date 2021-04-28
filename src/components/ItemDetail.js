import React from 'react'
import { Card } from 'react-bootstrap';

export default function ItemDetail({ dataItem }) {

  return (
    <>
      <Card className="m-auto" style={{ width: '200px' }}>
        <Card.Img variant="top" alt="No Image" src={dataItem.pictureUrl} />
        <Card.Body>
          <Card.Title>{dataItem.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {dataItem.price}</Card.Subtitle>
          <Card.Text>
            {dataItem.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
