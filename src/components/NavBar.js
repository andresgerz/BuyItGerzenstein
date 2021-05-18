import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './NavBar.css';

import CartContext from '../context/CartContext';

const NavBar = () => {  

  const { totalItems } = React.useContext(CartContext); 

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav>
        <img src={logo} className="App-logo" alt="logo" />
      </Nav>
      <Navbar.Brand href="/" className="ml-1 mr-5">Buy It</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/category/:category">Category</Link>
          <Link className="mr-4" to="/item/:id">Item</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <Nav className="mr-2">
          <p className="mr-2 text-white">{totalItems()} u.</p>
          <Link to="/cart"><Cart size={21} /></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;