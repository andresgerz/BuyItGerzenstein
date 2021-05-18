import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { Table, Button } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  
  const { allCart, removeItem, clear, cart, totalItems, counterItem } = React.useContext(CartContext); 

  function handleClick(id) {
    removeItem(id);
  }
  
  console.log("cartwidget");
  console.log(cart.length);
  return(
    <>
      <Cart color="white" size={20} />
      <h2>My products</h2>

      <div>{ (cart.length === 0) ?

        <div>
          <h4 className="alert-danger m-5">
            There are not products in the cart!
          </h4>
          <Link className="btn btn-primary" to={'/'} >Back to Home</Link>
        </div>            
                                 :
        <div>
          <Table striped bordered hover>
            <thead>
            <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price / .u</th>
            <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {cart.map((product, index) =>
              <tr key={index}>
                <td>{product.title}</td>
                <td>{counterItem(product.id)}</td>
                <td>{product.price}</td>
                <td>
                  <Button className="btn btn-danger" onClick={()=>handleClick(product.id)}>Delete</Button>
                </td>
              </tr>
            )}
              <tr>
                <td>Total</td>
                <td>{totalItems()}</td>
                <td>{cart.reduce((accum, current) => accum + (current.price * current.counter ), 0)}</td>
                <td>
                  <Button className="btn btn-danger" onClick={()=>clear()}>Remove All Items
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      }
      </div>
    </>
    )
  }