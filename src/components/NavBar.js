import react from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

import logo from '../logo.svg';
import './NavBar.css';

const NavBar = () => {  

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav>
        <img src={logo} className="App-logo" alt="logo" />
      </Nav>
      <Navbar.Brand href="/" className="ml-1 mr-5">Buy It</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/:category">Category</Nav.Link>
          <Nav.Link href="/item/:id">Item</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-2">
          <Nav.Link href="/cart"><Cart size={21} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;