import react from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from '../pages/Home.js';
import Discounts from '../pages/Discounts.js';
import Categories from '../pages/Categories.js';
import Contact from '../pages/Contact.js';


const NavBar = () => {  

  return(
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">Buy It</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/products/categories">Categories</NavDropdown.Item>
              <NavDropdown.Item href="/products/discounts">Discounts</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products/categories">
            <Categories />
          </Route>
          <Route path="/products/discounts">
            <Discounts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default NavBar;