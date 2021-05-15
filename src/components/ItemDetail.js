import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';


const FinishBuy = ({counter, product}) => {

  const { addItem } = React.useContext(CartContext); 


  function handleClick() {
    console.log(counter);
    addItem({...product, counter});
  }

  return(
    <Link to={'/cart'} 
      className="btn btn-primary"
      onClick={handleClick}
      >
      Finish my buy
    </Link>
  )
}

export { FinishBuy };

export default function ItemDetail({ itemDetails }) {
  
  
  const [countItem, setCountItem] = React.useState(0);

 
  function handleChange(value) {
    setCountItem(value);
    console.log('handleChange ItemDetail');

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

        <ItemCount stock={itemDetails.stock} initial={1} liftingChange={handleChange} />
        <FinishBuy product={itemDetails} counter={countItem}/> 

        </div>
    }</>
    )
}
