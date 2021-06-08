import React, { useEffect } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { Table, Button, Form, Col } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { getAllOrders, createOrder } from '../services/index';
import { useForm } from "react-hook-form";

export default function CartWidget() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const { removeItem, clear, cart, totalItems, counterItem } = React.useContext(CartContext); 

  const totalCost = cart.reduce((accum, current) => accum + (current.price * current.counter ), 0); 
 
  const onSubmit = data => {

    const filteredCard = [];
    
    cart.forEach(item => {
      for (let i = 0; i < item.counter; i++) {
        
        filteredCard.push({
          "id": item.id,
          "title": item.title,
          "price": item.price
        })
      }
    }) 
    
    createOrder({
      buyer: data, 
      items: filteredCard,
      date: new Date(),
      total: totalCost
    });
     
    clear();
  };


  function handleRemove(id) {
    removeItem(id);
  }

  useEffect(() => {

    getAllOrders()
    .then(data => console.log(data));
    
  }, [totalCost])

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
                  <td>{counterItem(product.id)} u.</td>
                  <td>$ {product.price}</td>
                  <td>
                    <Button className="btn btn-danger" onClick={()=>handleRemove(product.id)}>Delete</Button>
                  </td>
                </tr>
              )}
                <tr>
                  <td>Total</td>
                  <td>{totalItems()} u.</td>
                  <td>$ {totalCost}</td>
                  <td>
                    <Button className="btn btn-danger" onClick={()=>clear()}>Remove All Items
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="container mt-5 mb-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridname">
                  <Form.Label>Name and Surname</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Name"
                    {...register("name", { required: true })}                    
                    />
                    {errors.name && <span>This field is required</span>}

                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}

                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="phone"
                    {...register("phone", { required: true })}
                    placeholder="Phone" 
                    />
                    {errors.phone && <span className="text-darger">This field is required</span>}

                </Form.Group>
              </Form.Row>
              <Button 
                variant="success" 
                type="submit"
                >
                Submit Order
              </Button>
            </Form>
          </div>
        </div>                         
      }
      </div>
    </>
    )
  }