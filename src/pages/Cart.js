import React from 'react';
import { Table, Button } from 'react-bootstrap';
import CartContext from '../context/CartContext';

const Cart = () => {
  
  
  const { cart, removeItem, clear } = React.useContext(CartContext); 
  
  function handleClick(id) {
    console.log("removeItem");
    removeItem(id);
  }

  return(
    <div>
      <h1>Cart</h1>
      <h4>My products</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) =>
            <tr key={index}>
              <td>{product.item}</td>
              <td>{product.counter}</td>
              <td><Button className="btn btn-danger" onClick={()=>handleClick(product.id)}>Delete</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button className="btn btn-danger" onClick={()=>clear()}>Remove All Items</Button>
    </div>
  )
}

export default Cart;

